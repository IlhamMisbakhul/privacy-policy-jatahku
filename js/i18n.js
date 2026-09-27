/*
 * Language engine for the Privacy Policy website.
 *
 * Responsibilities:
 *   - registry of the 14 supported languages
 *   - validation/normalization of language codes (query parameter, storage,
 *     browser detection)
 *   - language priority resolution
 *   - loading localized Privacy Policy content with English fallback
 *   - publication-gate readiness check
 *
 * No framework, no build step, no network access.
 */
(function (global) {
  "use strict";

  var FALLBACK = "en";
  var STORAGE_KEY = "privacy-policy-language";

  var LANGUAGES = [
    { code: "id", native: "Bahasa Indonesia", english: "Indonesian", dir: "ltr" },
    { code: "ms", native: "Bahasa Melayu", english: "Malay", dir: "ltr" },
    { code: "en", native: "English", english: "English", dir: "ltr" },
    { code: "es", native: "Español", english: "Spanish", dir: "ltr" },
    { code: "nl", native: "Nederlands", english: "Dutch", dir: "ltr" },
    { code: "it", native: "Italiano", english: "Italian", dir: "ltr" },
    { code: "pt", native: "Português", english: "Portuguese", dir: "ltr" },
    { code: "fr", native: "Français", english: "French", dir: "ltr" },
    { code: "ja", native: "日本語", english: "Japanese", dir: "ltr" },
    { code: "ko", native: "한국어", english: "Korean", dir: "ltr" },
    { code: "ru", native: "Русский", english: "Russian", dir: "ltr" },
    { code: "zh", native: "简体中文", english: "Mandarin Chinese", dir: "ltr" },
    { code: "ar", native: "العربية", english: "Arabic", dir: "rtl" },
    { code: "hi", native: "हिन्दी", english: "Hindi", dir: "ltr" }
  ];

  /* Canonical section order and identifiers. Shared by every language so the
   * rendered structure never diverges between translations. */
  var SECTION_ORDER = [
    "introduction",
    "informationYouProvide",
    "localStorage",
    "deviceDateTime",
    "notifications",
    "exportAndSharing",
    "thirdPartyServices",
    "advertising",
    "analyticsAndTracking",
    "accountRequirements",
    "dataSharingAndDisclosure",
    "dataRetention",
    "dataDeletion",
    "dataSecurity",
    "childrensPrivacy",
    "changesToPolicy",
    "contact"
  ];

  function languages() {
    return LANGUAGES.slice();
  }

  function codes() {
    return LANGUAGES.map(function (language) {
      return language.code;
    });
  }

  function langMeta(code) {
    for (var i = 0; i < LANGUAGES.length; i++) {
      if (LANGUAGES[i].code === code) {
        return LANGUAGES[i];
      }
    }
    return LANGUAGES[2];
  }

  function isSupported(code) {
    return codes().indexOf(code) !== -1;
  }

  /* Accepts "id", "ID", "id-ID", "en_US", ... Returns a supported code or null. */
  function normalizeLang(value) {
    if (typeof value !== "string") {
      return null;
    }
    var trimmed = value.trim().toLowerCase();
    if (!trimmed) {
      return null;
    }
    if (isSupported(trimmed)) {
      return trimmed;
    }
    var primary = trimmed.split(/[-_]/)[0];
    return isSupported(primary) ? primary : null;
  }

  function localeData(code) {
    var bundle = global.POLICY_I18N;
    if (!bundle || !bundle[code]) {
      return null;
    }
    return bundle[code];
  }

  function applyVars(template, vars) {
    if (typeof template !== "string" || !vars) {
      return typeof template === "string" ? template : "";
    }
    var output = template;
    Object.keys(vars).forEach(function (key) {
      output = output.split("{" + key + "}").join(String(vars[key]));
    });
    return output;
  }

  function usableString(value) {
    return typeof value === "string" && value.trim() !== "";
  }

  function uiString(code, key, vars) {
    var locale = localeData(code);
    var english = localeData(FALLBACK);
    var value = "";
    if (locale && locale.ui && usableString(locale.ui[key])) {
      value = locale.ui[key];
    } else if (english && english.ui && usableString(english.ui[key])) {
      value = english.ui[key];
    }
    return applyVars(value, vars);
  }

  /* Field-by-field English fallback, so a partially translated language never
   * renders empty or broken content. */
  function pickList(localized, english) {
    var local = Array.isArray(localized) ? localized : [];
    var base = Array.isArray(english) ? english : [];
    var length = Math.max(local.length, base.length);
    var result = [];
    for (var i = 0; i < length; i++) {
      if (usableString(local[i])) {
        result.push(local[i]);
      } else if (usableString(base[i])) {
        result.push(base[i]);
      }
    }
    return result;
  }

  function getSection(code, id) {
    var englishBundle = localeData(FALLBACK) || {};
    var englishSections = englishBundle.sections || {};
    var english = englishSections[id] || {};
    var locale = localeData(code) || {};
    var localeSections = locale.sections || {};
    var localized = localeSections[id] || {};
    return {
      heading: usableString(localized.heading) ? localized.heading : (english.heading || ""),
      paragraphs: pickList(localized.paragraphs, english.paragraphs),
      bullets: pickList(localized.bullets, english.bullets),
      afterParagraphs: pickList(localized.afterParagraphs, english.afterParagraphs)
    };
  }

  function localeExists(code) {
    return !!localeData(code);
  }

  /* Localized display name: locale entry -> configured APP_NAME -> empty. */
  function appName(code) {
    var locale = localeData(code);
    if (locale && usableString(locale.appName)) {
      return locale.appName;
    }
    var fallback = (global.POLICY_CONFIG && global.POLICY_CONFIG.APP_NAME) || "";
    return usableString(fallback) ? fallback : "";
  }

  /* Languages whose own file does not define a name for the application. */
  function languagesWithoutAppName() {
    return codes().filter(function (code) {
      var locale = localeData(code);
      return !(locale && usableString(locale.appName));
    });
  }

  /* ------------------------------------------------------------- detection */

  function detectFromBrowser() {
    var candidates = [];
    var nav = global.navigator;
    if (nav) {
      if (Array.isArray(nav.languages)) {
        candidates = candidates.concat(nav.languages);
      }
      if (nav.language) {
        candidates.push(nav.language);
      }
      if (nav.userLanguage) {
        candidates.push(nav.userLanguage);
      }
    }
    for (var i = 0; i < candidates.length; i++) {
      var match = normalizeLang(candidates[i]);
      if (match) {
        return match;
      }
    }
    return null;
  }

  function readStoredLang() {
    try {
      if (!global.localStorage) {
        return null;
      }
      return normalizeLang(global.localStorage.getItem(STORAGE_KEY));
    } catch (error) {
      return null;
    }
  }

  function writeStoredLang(code) {
    try {
      if (global.localStorage && isSupported(code)) {
        global.localStorage.setItem(STORAGE_KEY, code);
      }
    } catch (error) {
      /* Storage may be unavailable; the site still works without it. */
    }
  }

  function readQueryLang(search) {
    try {
      if (typeof global.URLSearchParams !== "function") {
        return null;
      }
      var source = typeof search === "string"
        ? search
        : (global.location ? global.location.search : "");
      var params = new URLSearchParams(source);
      return normalizeLang(params.get("lang"));
    } catch (error) {
      return null;
    }
  }

  /* Priority: valid ?lang= -> stored manual choice -> browser -> English. */
  function resolveInitialLang(search) {
    var fromQuery = readQueryLang(search);
    if (fromQuery) {
      return { code: fromQuery, source: "query" };
    }
    var stored = readStoredLang();
    if (stored) {
      return { code: stored, source: "stored" };
    }
    var detected = detectFromBrowser();
    if (detected) {
      return { code: detected, source: "browser" };
    }
    return { code: FALLBACK, source: "fallback" };
  }

  /* ------------------------------------------------------ publication gate */

  function placeholderKeys() {
    var config = global.POLICY_CONFIG || {};
    return Object.keys(config).filter(function (key) {
      return typeof config[key] === "string" && /\[[A-Z][A-Z_]*\]/.test(config[key]);
    });
  }

  function unreviewedLanguages() {
    return codes().filter(function (code) {
      var locale = localeData(code);
      return !(locale && locale.reviewed === true);
    });
  }

  function readiness() {
    var gate = (global.POLICY_CONFIG && global.POLICY_CONFIG.PUBLICATION) || {};
    var requiresFinalized = gate.requireFinalizedPlaceholders !== false;
    var requiresLocalizedNames = gate.requireLocalizedAppNames !== false;
    var requiresReviewed = gate.requireReviewedTranslations !== false;
    var unresolved = placeholderKeys();
    var unnamed = languagesWithoutAppName();
    var pending = unreviewedLanguages();
    var problems = [];
    if (requiresFinalized && unresolved.length) {
      problems.push("unresolved placeholder value(s): " + unresolved.join(", "));
    }
    if (requiresLocalizedNames && unnamed.length) {
      problems.push("language(s) without a localized app name: " + unnamed.join(", "));
    }
    if (requiresReviewed && pending.length) {
      problems.push("translation(s) not reviewed: " + pending.join(", "));
    }
    return {
      ready: problems.length === 0,
      placeholderKeys: unresolved,
      languagesWithoutAppName: unnamed,
      unreviewedLanguages: pending,
      problems: problems
    };
  }

  global.POLICY_I18N_ENGINE = {
    FALLBACK: FALLBACK,
    STORAGE_KEY: STORAGE_KEY,
    languages: languages,
    codes: codes,
    langMeta: langMeta,
    isSupported: isSupported,
    normalizeLang: normalizeLang,
    sectionIds: function () {
      return SECTION_ORDER.slice();
    },
    uiString: uiString,
    getSection: getSection,
    applyVars: applyVars,
    localeExists: localeExists,
    appName: appName,
    languagesWithoutAppName: languagesWithoutAppName,
    readStoredLang: readStoredLang,
    writeStoredLang: writeStoredLang,
    readQueryLang: readQueryLang,
    detectFromBrowser: detectFromBrowser,
    resolveInitialLang: resolveInitialLang,
    readiness: readiness
  };
})(window);
