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

  /* --------------------------------------------------- Flutter confirmation */

  /*
   * Implements docs/privacy-webview-contract.md exactly:
   *   channel  : window.JatahkuPrivacyV1.postMessage(JSON.stringify(message))
   *   callback : window.__jatahkuPrivacyResult(boolean)
   *   payload  : {"protocol":"jatahku-privacy/v1","action":"confirm"}
   * policyVersion is intentionally omitted until an official value exists.
   * The JatahkuPrivacyWebView/1 user-agent marker is a display-mode hint only
   * and is never treated as authentication or proof of persistence.
   */
  var CONFIRM_PAYLOAD = JSON.stringify({
    protocol: "jatahku-privacy/v1",
    action: "confirm"
  });
  var CONFIRM_TIMEOUT_MS = 15000;

  var confirmState = "locked"; /* locked|ready|pending|success|error|timeout|browser|appNotReady */
  var confirmTimer = null;
  var resultBound = false;
  var bottomObserver = null;
  var scrollFallback = null;
  /* Readiness (window.__jatahkuReady) is an in-app trust signal, distinct from
   * the mere presence of the channel object. confirmReadiness:
   *   none     - normal browser (no channel object at all)
   *   awaiting - channel present, app has not confirmed readiness yet
   *   ready    - app confirmed readiness via window.__jatahkuReady === true
   *   timeout  - readiness deadline elapsed without confirmation */
  var confirmBottomReached = false;
  var confirmReadiness = "none"; /* none|awaiting|ready|timeout */
  var readinessPoll = null;
  var READINESS_TIMEOUT_MS = 10000;
  var READINESS_POLL_MS = 100;

  function channelAvailable() {
    var channel = global.JatahkuPrivacyV1;
    return !!channel && typeof channel.postMessage === "function";
  }

  /* Display-mode hint from the Flutter WebView user agent. Used only to label
   * presentation (data-display); never to enable sending or claim success. */
  function inAppDisplayHint() {
    var ua = (global.navigator && global.navigator.userAgent) || "";
    return /JatahkuPrivacyWebView\/1/.test(ua);
  }

  function teardownReadinessWatch() {
    if (readinessPoll !== null) {
      global.clearInterval(readinessPoll);
      readinessPoll = null;
    }
  }

  function onReadinessReady() {
    confirmReadiness = "ready";
    updateEnabled();
  }

  function onReadinessTimeout() {
    if (confirmState === "pending" || confirmState === "success" ||
        confirmState === "error" || confirmState === "timeout") {
      return; /* a confirmation attempt is already in a click-lifecycle state */
    }
    confirmReadiness = "timeout";
    /* Non-committal: the app never confirmed readiness, so nothing was sent
     * and this page saved nothing. This does NOT claim a browser or a failure
     * inside the app; absence of the flag is not proof of a browser. */
    setConfirmPhase(currentLang, "appNotReady");
  }

  /* Polls for window.__jatahkuReady with a clear deadline. The deadline can be
   * shortened via window.__jatahkuReadinessTimeoutMs (test hook only; it is not
   * part of the Flutter protocol and is never sent anywhere). */
  function startReadinessWatch() {
    teardownReadinessWatch();
    var configured = global.__jatahkuReadinessTimeoutMs;
    var timeoutMs = (typeof configured === "number" && configured > 0)
      ? configured
      : READINESS_TIMEOUT_MS;
    var deadline = Date.now() + timeoutMs;
    readinessPoll = global.setInterval(function () {
      if (global.__jatahkuReady === true) {
        teardownReadinessWatch();
        onReadinessReady();
      } else if (Date.now() >= deadline) {
        teardownReadinessWatch();
        onReadinessTimeout();
      }
    }, READINESS_POLL_MS);
  }

  function setConfirmPhase(code, phase) {
    confirmState = phase;
    var button = byId("understood-button");
    if (button) {
      button.disabled = phase === "locked" || phase === "pending" ||
        phase === "success" || phase === "appNotReady";
    }
    var status = byId("confirmation-status");
    if (!status) {
      return;
    }
    var map = {
      locked: [null, ""],
      ready: [null, ""],
      pending: ["confirmWaiting", "is-pending"],
      success: ["confirmSuccess", "is-success"],
      error: ["confirmFailure", "is-error"],
      timeout: ["confirmTimeout", "is-error"],
      browser: ["confirmBrowserNote", "is-note"],
      appNotReady: ["confirmAppNotReady", "is-note"]
    };
    var entry = map[phase] || [null, ""];
    status.textContent = entry[0] ? text(code, entry[0]) : "";
    status.className = "confirmation-status" + (entry[1] ? " " + entry[1] : "");
  }

  /* Recomputes the enabled/disabled state of the button from both the
   * readiness signal and the bottom-of-content signal. The button is enabled
   * only when the content bottom is reached AND the flow is actionable:
   * either a normal browser (readiness "none", where clicking only explains
   * in-app availability) or a confirmed-ready app (readiness "ready"). */
  function updateEnabled() {
    if (confirmState !== "locked" && confirmState !== "ready") {
      return; /* never override a click-lifecycle or terminal state */
    }
    var actionable = confirmReadiness === "ready" || confirmReadiness === "none";
    setConfirmPhase(currentLang, (confirmBottomReached && actionable) ? "ready" : "locked");
  }

  function onUnderstoodClick() {
    var code = currentLang;
    /* Single-flight: ignore every click while locked, pending or after success.
     * Readiness "awaiting"/"timeout" keeps the button locked via updateEnabled,
     * so the app flow cannot start before window.__jatahkuReady is confirmed. */
    if (confirmState !== "ready" && confirmState !== "error" && confirmState !== "timeout") {
      return;
    }
    if (confirmReadiness !== "ready") {
      /* Not a confirmed-ready app: do not claim persistence, do not send. */
      setConfirmPhase(code, "browser");
      return;
    }
    if (!channelAvailable()) {
      /* Normal browser: explain where confirmation works; never claim success. */
      setConfirmPhase(code, "browser");
      return;
    }
    setConfirmPhase(code, "pending");
    if (confirmTimer) {
      global.clearTimeout(confirmTimer);
      confirmTimer = null;
    }
    confirmTimer = global.setTimeout(function () {
      confirmTimer = null;
      if (confirmState === "pending") {
        setConfirmPhase(currentLang, "timeout");
      }
    }, CONFIRM_TIMEOUT_MS);
    global.JatahkuPrivacyV1.postMessage(CONFIRM_PAYLOAD);
  }

  /* Bound once per page; ignores stale/duplicate callbacks after a terminal
   * state or after a language change reset the flow. */
  function bindResultCallback() {
    if (resultBound) {
      return;
    }
    resultBound = true;
    global.__jatahkuPrivacyResult = function (success) {
      if (confirmState !== "pending") {
        return;
      }
      if (confirmTimer) {
        global.clearTimeout(confirmTimer);
        confirmTimer = null;
      }
      setConfirmPhase(currentLang, success === true ? "success" : "error");
    };
  }

  function teardownBottomDetection() {
    if (bottomObserver) {
      bottomObserver.disconnect();
      bottomObserver = null;
    }
    if (scrollFallback) {
      global.removeEventListener("scroll", scrollFallback);
      global.removeEventListener("resize", scrollFallback);
      scrollFallback = null;
    }
  }

  function markBottomReached() {
    confirmBottomReached = true;
    updateEnabled();
  }

  /* Enables the button only once the sentinel at the end of the active-language
   * content is actually visible. Direction-agnostic, so Arabic RTL is covered. */
  function setupBottomDetection() {
    teardownBottomDetection();
    var sentinel = byId("confirmation-sentinel");
    if (!sentinel) {
      return;
    }
    if (typeof global.IntersectionObserver === "function") {
      bottomObserver = new global.IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            markBottomReached();
          }
        });
      }, { root: null, threshold: 0 });
      bottomObserver.observe(sentinel);
    } else {
      scrollFallback = function () {
        var rect = sentinel.getBoundingClientRect();
        if (rect.top <= (global.innerHeight || 0)) {
          markBottomReached();
        }
      };
      global.addEventListener("scroll", scrollFallback, { passive: true });
      global.addEventListener("resize", scrollFallback);
      scrollFallback();
    }
  }

  function renderConfirmation(code) {
    teardownBottomDetection();
    teardownReadinessWatch();
    if (confirmTimer) {
      global.clearTimeout(confirmTimer);
      confirmTimer = null;
    }
    confirmState = "locked";
    confirmBottomReached = false;
    confirmReadiness = "none";

    var host = byId("policy-sections");
    var section = el("section", "policy-section confirmation-section");
    section.id = "privacy-confirmation";
    section.setAttribute("aria-labelledby", "confirmation-heading");
    section.setAttribute("data-display", inAppDisplayHint() ? "app" : "browser");

    var heading = el("h2", null, text(code, "confirmSectionTitle"));
    heading.id = "confirmation-heading";
    section.appendChild(heading);

    section.appendChild(el("p", null, text(code, "confirmIntro")));

    /* Explains where confirmation actually works whenever the app channel is
     * missing; hidden inside the app so the flow stays focused. */
    var note = el("p", "confirmation-note", text(code, "confirmBrowserNote"));
    note.id = "confirmation-note";
    note.hidden = channelAvailable();
    section.appendChild(note);

    var button = el("button", "understood-button", text(code, "confirmButton"));
    button.type = "button";
    button.id = "understood-button";
    button.disabled = true;
    button.setAttribute("aria-describedby", "confirmation-status");
    button.addEventListener("click", onUnderstoodClick);
    section.appendChild(button);

    var status = el("p", "confirmation-status");
    status.id = "confirmation-status";
    status.setAttribute("role", "status");
    status.setAttribute("aria-live", "polite");
    section.appendChild(status);

    /* Invisible marker at the very end of the content; its visibility defines
     * "reached the bottom". It does not imply the text was read or understood. */
    var sentinel = el("div", "confirmation-sentinel");
    sentinel.id = "confirmation-sentinel";
    sentinel.setAttribute("aria-hidden", "true");
    section.appendChild(sentinel);

    host.appendChild(section);

    /* A channel object alone is not readiness. When the app channel exists we
     * wait for window.__jatahkuReady === true (bounded by a deadline); until
     * then the button stays locked so the app flow cannot start early. Absence
     * of the flag is never treated as proof of a normal browser. */
    if (channelAvailable()) {
      confirmReadiness = "awaiting";
      if (global.__jatahkuReady === true) {
        confirmReadiness = "ready";
      } else {
        startReadinessWatch();
      }
    } else {
      /* No channel object at all: a normal browser. */
      confirmReadiness = "none";
    }

    bindResultCallback();
    setupBottomDetection();
    updateEnabled();
  }

  /* -------------------------------------------------------------- lifecycle */

  function render(code) {
    renderMeta(code);
    renderToc(code);
    renderSections(code);
    renderConfirmation(code);
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
