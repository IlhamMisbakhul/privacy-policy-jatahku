/*
 * Privacy Policy website — presentation layer.
 *
 * Renders the Privacy Policy from the localized data in js/locales/, keeps the
 * <html> lang/dir attributes, the language selector, the ?lang= URL state and
 * the publication-gate notice in sync.
 *
 * Text is always inserted through textContent so that no content or query
 * parameter can inject markup.
 */
(function (global) {
  "use strict";

  var engine = global.POLICY_I18N_ENGINE;
  var config = global.POLICY_CONFIG || {};
  var doc = global.document;
  var currentLang = engine.FALLBACK;

  function byId(id) {
    return doc.getElementById(id);
  }

  function clear(node) {
    while (node.firstChild) {
      node.removeChild(node.firstChild);
    }
  }

  function el(tag, className, content) {
    var node = doc.createElement(tag);
    if (className) {
      node.className = className;
    }
    if (typeof content === "string") {
      node.textContent = content;
    }
    return node;
  }

  function configVars(code) {
    return {
      appName: engine.appName(code),
      developerName: config.DEVELOPER_NAME || "",
      developerEmail: config.DEVELOPER_EMAIL || "",
      websiteUrl: config.WEBSITE_URL || "",
      effectiveDate: config.POLICY_EFFECTIVE_DATE || "",
      lastUpdated: config.POLICY_LAST_UPDATED || ""
    };
  }

  function text(code, key, extraVars) {
    var vars = configVars(code);
    if (extraVars) {
      Object.keys(extraVars).forEach(function (name) {
        vars[name] = extraVars[name];
      });
    }
    return engine.uiString(code, key, vars);
  }

  function validEmail(value) {
    return typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function validUrl(value) {
    return typeof value === "string" && /^https?:\/\/\S+$/i.test(value);
  }

  /* --------------------------------------------------------------- page meta */

  function renderDates(code) {
    var host = byId("policy-dates");
    clear(host);
    [["effective", config.POLICY_EFFECTIVE_DATE], ["updated", config.POLICY_LAST_UPDATED]]
      .forEach(function (pair) {
        var item = el("span", "meta-item");
        item.appendChild(el("span", "meta-label", text(code, pair[0]) + ": "));
        item.appendChild(el("span", "meta-value", pair[1] || ""));
        host.appendChild(item);
      });
  }

  function renderMeta(code) {
    doc.documentElement.lang = code;
    doc.documentElement.dir = engine.langMeta(code).dir;

    var title = text(code, "title");
    var localizedAppName = engine.appName(code);
    doc.title = localizedAppName ? title + " — " + localizedAppName : title;

    byId("page-description").setAttribute("content", text(code, "description"));
    byId("skip-link").textContent = text(code, "skipToContent");
    byId("app-name").textContent = localizedAppName;
    byId("policy-title").textContent = title;
    byId("policy-subtitle").textContent = text(code, "subtitle");
    byId("language-label").textContent = text(code, "languageLabel");
    byId("language-select").setAttribute("aria-label", text(code, "languageLabel"));
    byId("toc-title").textContent = text(code, "tocTitle");
    byId("footer-note").textContent = text(code, "footerNote");
    byId("footer-identity").textContent = text(code, "footerIdentity");
    byId("back-to-top").textContent = text(code, "backToTop");
    renderDates(code);
  }

  function renderToc(code) {
    var vars = configVars(code);
    var list = byId("toc-list");
    clear(list);
    engine.sectionIds().forEach(function (id) {
      var item = el("li");
      var link = el("a", null, engine.applyVars(engine.getSection(code, id).heading, vars));
      link.href = "#" + id;
      item.appendChild(link);
      list.appendChild(item);
    });
  }

  /* --------------------------------------------------------------- sections */

  function appendParagraphs(section, items, vars) {
    (items || []).forEach(function (value) {
      if (value) {
        section.appendChild(el("p", null, engine.applyVars(value, vars)));
      }
    });
  }

  function appendBullets(section, items, vars) {
    if (!items || !items.length) {
      return;
    }
    var list = el("ul");
    items.forEach(function (value) {
      if (value) {
        list.appendChild(el("li", null, engine.applyVars(value, vars)));
      }
    });
    section.appendChild(list);
  }

  function appendExternalLinks(section, code) {
    var links = config.DONATION_LINKS || {};
    var entries = [["Saweria", links.saweria], ["Ko-fi", links.kofi]].filter(function (entry) {
      return validUrl(entry[1]);
    });
    if (!entries.length) {
      return;
    }
    section.appendChild(el("h3", null, text(code, "externalLinksLabel")));
    var list = el("ul", "external-links");
    entries.forEach(function (entry) {
      var item = el("li");
      var link = el("a", null, entry[0]);
      link.href = entry[1];
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      item.appendChild(link);
      item.appendChild(el("span", "hint", " (" + text(code, "externalLinkHint") + ")"));
      list.appendChild(item);
    });
    section.appendChild(list);
  }

  function appendContactDetails(section, code) {
    var list = el("dl", "contact-details");

    function addRow(labelKey, contentNode) {
      list.appendChild(el("dt", null, text(code, labelKey)));
      var value = el("dd");
      value.appendChild(contentNode);
      list.appendChild(value);
    }

    addRow("developerLabel", doc.createTextNode(config.DEVELOPER_NAME || ""));

    if (validEmail(config.DEVELOPER_EMAIL)) {
      var mail = el("a", null, config.DEVELOPER_EMAIL);
      mail.href = "mailto:" + config.DEVELOPER_EMAIL;
      addRow("emailLabel", mail);
    } else {
      addRow("emailLabel", doc.createTextNode(config.DEVELOPER_EMAIL || ""));
    }

    if (validUrl(config.WEBSITE_URL)) {
      var site = el("a", null, config.WEBSITE_URL);
      site.href = config.WEBSITE_URL;
      site.rel = "noopener";
      addRow("websiteLabel", site);
    } else {
      addRow("websiteLabel", doc.createTextNode(config.WEBSITE_URL || ""));
    }

    section.appendChild(list);
  }

  function renderSections(code) {
    var vars = configVars(code);
    var host = byId("policy-sections");
    clear(host);
    engine.sectionIds().forEach(function (id) {
      var data = engine.getSection(code, id);
      var section = el("section", "policy-section");
      section.id = id;
      section.setAttribute("aria-labelledby", id + "-heading");
      var heading = el("h2", null, engine.applyVars(data.heading, vars));
      heading.id = id + "-heading";
      section.appendChild(heading);
      appendParagraphs(section, data.paragraphs, vars);
      appendBullets(section, data.bullets, vars);
      appendParagraphs(section, data.afterParagraphs, vars);
      if (id === "thirdPartyServices") {
        appendExternalLinks(section, code);
      }
      if (id === "contact") {
        appendContactDetails(section, code);
      }
      host.appendChild(section);
    });
  }

  /* -------------------------------------------------- language + URL state */

  function buildLanguageSelect() {
    var select = byId("language-select");
    clear(select);
    engine.languages().forEach(function (language) {
      var option = doc.createElement("option");
      option.value = language.code;
      option.textContent = language.native;
      option.lang = language.code;
      select.appendChild(option);
    });
    select.addEventListener("change", function () {
      applyLanguage(select.value, true);
    });
  }

  function syncUrl(code) {
    if (!global.history || !global.location || typeof global.URLSearchParams !== "function") {
      return;
    }
    try {
      var params = new URLSearchParams(global.location.search);
      params.set("lang", code);
      var next = global.location.pathname + "?" + params.toString() + global.location.hash;
      global.history.replaceState(null, "", next);
    } catch (error) {
      /* URL synchronisation is a convenience; the page still works without it. */
    }
  }

  function announce(message) {
    var region = byId("live-region");
    if (!region || !message) {
      return;
    }
    region.textContent = "";
    global.setTimeout(function () {
      region.textContent = message;
    }, 40);
  }

  /* ------------------------------------------------------ publication gate */

  function renderGate(code) {
    var readiness = engine.readiness();
    global.POLICY_READINESS = readiness;
    var notice = byId("publication-notice");
    clear(notice);
    if (readiness.ready) {
      notice.hidden = true;
      console.info("[Privacy Policy] publication gate: OPEN — no unresolved placeholders, all translations reviewed.");
      return;
    }
    notice.appendChild(el("strong", "gate-title", text(code, "gateTitle")));
    notice.appendChild(el("span", "gate-message", text(code, "gateMessage", {
      placeholders: readiness.placeholderKeys.length,
      translations: readiness.unreviewedLanguages.length
    })));
    notice.hidden = false;
    console.warn("[Privacy Policy] publication gate: CLOSED", readiness);
  }

  /* -------------------------------------------------------------- lifecycle */

  function render(code) {
    renderMeta(code);
    renderToc(code);
    renderSections(code);
    renderGate(code);
    var select = byId("language-select");
    if (select.value !== code) {
      select.value = code;
    }
  }

  /* persist = true only for a language the visitor selected themselves, so the
   * stored preference never overrides browser detection by accident. */
  function applyLanguage(code, persist) {
    var normalized = engine.normalizeLang(code) || engine.FALLBACK;
    currentLang = normalized;
    if (persist) {
      engine.writeStoredLang(normalized);
    }
    render(normalized);
    syncUrl(normalized);
    announce(text(normalized, "languageChanged", {
      language: engine.langMeta(normalized).native
    }));
  }

  function applyFromUrl() {
    var resolved = engine.resolveInitialLang();
    currentLang = resolved.code;
    render(currentLang);
  }

  function init() {
    buildLanguageSelect();
    var resolved = engine.resolveInitialLang();
    applyLanguage(resolved.code, false);
    global.addEventListener("popstate", applyFromUrl);
    console.info("[Privacy Policy] language: " + resolved.code + " (source: " + resolved.source + ")");
  }

  if (doc.readyState === "loading") {
    doc.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  global.POLICY_APP = {
    applyLanguage: applyLanguage,
    render: render,
    currentLanguage: function () {
      return currentLang;
    }
  };
})(window);
