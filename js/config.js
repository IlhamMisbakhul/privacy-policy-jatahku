/*
 * Central configuration for the Privacy Policy website.
 *
 * This file is the ONLY place where app identity values are stored, so that
 * finalizing the website does not require editing any translation file.
 *
 * ---------------------------------------------------------------------------
 * PUBLICATION GATE
 * ---------------------------------------------------------------------------
 * The website is considered ready for publication only when:
 *   1. no value below still contains a "[...]" placeholder token, and
 *   2. every file in js/locales/ has "reviewed: true".
 *
 * While either condition is unmet, js/app.js shows a warning strip at the top
 * of the page, logs the details to the browser console, and exposes the result
 * as window.POLICY_READINESS.
 *
 * To open the gate:
 *   - make sure no value below still contains a "[...]" placeholder and that
 *     every language defines its own "appName" in js/locales/<code>.js, and
 *   - set "reviewed: true" in each js/locales/*.js file after that translation
 *     has been reviewed.
 *
 * Do not invent values. Per docs/privacy-policy-spec.md, an unresolved value
 * must stay a visible placeholder and be reported as unfinished instead.
 */
/*
 * Localized display names
 * ---------------------------------------------------------------------------
 * The application is published under a localized name per language, so each
 * file in js/locales/ carries its own "appName". APP_NAME below is the
 * default/English name and the fallback for any language that does not define
 * its own name.
 *
 * Changing the published app name means updating APP_NAME and the matching
 * "appName" entry in js/locales/*.js.
 */
window.POLICY_CONFIG = {
  APP_NAME: "MyBudget",
  DEVELOPER_NAME: "Muhammad Ilham Misbakhul Anwar",
  DEVELOPER_EMAIL: "ilhammisbakhul123@gmail.com",
  POLICY_EFFECTIVE_DATE: "28 September 2026",
  POLICY_LAST_UPDATED: "28 September 2026",
  WEBSITE_URL: "https://www.instagram.com/ilhammsbkhl",

  /*
   * External donation destinations documented by docs/app-spec.md (Saweria,
   * Ko-fi). The exact URLs must come from the application's configuration.
   *
   * While a value is null, the name is discussed in the policy text but no
   * link is rendered, because the website must never invent or guess URLs.
   * Set a full "https://..." URL to enable that link.
   */
  DONATION_LINKS: {
    saweria: null,
    kofi: null
  },

  PUBLICATION: {
    requireFinalizedPlaceholders: true,
    requireLocalizedAppNames: true,
    requireReviewedTranslations: true
  }
};
