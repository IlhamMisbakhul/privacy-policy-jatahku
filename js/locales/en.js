/*
 * English Privacy Policy content — canonical source language.
 *
 * Content rules: every statement below must stay supported by docs/app-spec.md
 * and docs/privacy-policy-spec.md. Do not add privacy claims here.
 *
 * "reviewed" is part of the publication gate: set it to true only after this
 * language has been reviewed. See js/config.js.
 */
window.POLICY_I18N = window.POLICY_I18N || {};
window.POLICY_I18N.en = {
  reviewed: true,
  appName: "MyBudget",
  ui: {
    title: "Privacy Policy",
    description: "Privacy Policy for {appName}, a personal finance and budgeting application for Android.",
    subtitle: "How information is handled by this application",
    effective: "Effective date",
    updated: "Last updated",
    languageLabel: "Language",
    tocTitle: "Contents",
    skipToContent: "Skip to content",
    backToTop: "Back to top",
    developerLabel: "Developer",
    emailLabel: "Email",
    websiteLabel: "Website",
    externalLinksLabel: "Documented external services",
    externalLinkHint: "opens an external service",
    footerNote: "This website is a static page. It does not use analytics, advertising or third-party tracking scripts.",
    footerIdentity: "Privacy Policy for {appName}, provided by {developerName}.",
    gateTitle: "This page is not ready for publication.",
    gateMessage: "{placeholders} identity value(s) are not finalized and {translations} translation(s) have not been reviewed yet.",
    languageChanged: "Language changed to {language}.",
    confirmSectionTitle: "Confirmation",
    confirmIntro: "If you are reading this Privacy Policy inside the application, you can confirm that you have read it. The confirmation button becomes available after you reach the end of the policy.",
    confirmButton: "Understood",
    confirmWaiting: "Sending your confirmation to the application…",
    confirmSuccess: "Your confirmation has been saved by the application.",
    confirmFailure: "The application could not save your confirmation. Please try again.",
    confirmTimeout: "The application has not responded yet. This page cannot confirm whether your confirmation was saved. Please try again.",
    confirmAppNotReady: "The application has not confirmed it is ready, so confirmation cannot be sent. This page has not saved anything.",
    confirmBrowserNote: "This page is open in a normal browser. Confirmation that you have read this Privacy Policy can only be recorded inside the application itself, so open this page inside the application to confirm. This website does not store any confirmation."
  },
  sections: {
    introduction: {
      heading: "Introduction",
      paragraphs: [
        "This Privacy Policy explains how information is handled by {appName}, a personal finance and budgeting application for Android provided by {developerName}.",
        "It covers the information you can enter into the application, where that information is stored, when information can leave the application because of an action you take yourself, which external destinations the application can open, and how you can contact the developer.",
        "This Privacy Policy applies to the application and to this website. It does not apply to external services that you open from the application."
      ]
    },
    informationYouProvide: {
      heading: "Information You Provide",
      paragraphs: [
        "You can enter personal financial information into the application yourself. The application specification supports these types of information:"
      ],
      bullets: [
        "Budget and balance amounts, such as the monthly budget or balance used by the application",
        "Expense records that you record",
        "Expense categories assigned to those records",
        "Money source names and the type of each source",
        "Remaining balances of each money source",
        "Transfers of funds between your own money sources",
        "The monthly report information generated from the records above"
      ],
      afterParagraphs: [
        "This Privacy Policy does not describe other categories of personal information, because the application specification does not define them. In particular, the application is not described as collecting account credentials, contacts, messages, photos, recordings or similar data."
      ]
    },
    localStorage: {
      heading: "Local Storage",
      paragraphs: [
        "Under the current architecture, the application's core financial records are stored locally on your device. The current implementation uses SQLite for local application storage.",
        "Local storage is different from cloud storage. Your records are kept on the device itself, and the application does not require a developer-operated remote financial database for its normal financial-management functionality. The application also does not require a user account for normal use.",
        "Because you can export and share information yourself, and because the application can open external destinations, this Privacy Policy does not claim that information can never leave your device."
      ]
    },
    deviceDateTime: {
      heading: "Device Date and Time",
      paragraphs: [
        "The application uses your device's local date and time for behaviour that depends on the current date, such as determining the current month, assigning dates to records, monthly reporting, and date-based notification or reminder behaviour where applicable.",
        "Using the device's local time does not mean that the application uses GPS or physical-location services to determine the current time. This Privacy Policy does not describe the use of device time as location tracking."
      ]
    },
    notifications: {
      heading: "Notifications",
      paragraphs: [
        "The application includes notification functionality. On Android versions where notification permission is required, the application may request the POST_NOTIFICATIONS permission. That permission is used for the application's notification and reminder functionality.",
        "You can control notification permission through your device or application permission settings. If you deny notification permission, notification-related functionality may be unavailable or limited.",
        "Notification permission does not by itself grant access to your physical location. This Privacy Policy does not state a specific notification schedule, frequency or message, because the application specification does not document one."
      ]
    },
    exportAndSharing: {
      heading: "Export and User-Initiated Sharing",
      paragraphs: [
        "The application supports exporting a report as PDF or XLSX. Exporting is started by you, for the report or month you select, and the report is generated from your local records.",
        "You choose the destination application or service through Android's sharing functionality. The application specification does not define any mechanism through which exported files are sent to the developer, and this Privacy Policy does not describe one.",
        "Once you share a file, the receiving application or service is outside the application's control, and that party's own privacy practices may apply to the information in that file."
      ]
    },
    thirdPartyServices: {
      heading: "Third-Party Services",
      paragraphs: [
        "The application includes a donation entry point for supporting development, which provides external options such as Saweria and Ko-fi. These are third-party services.",
        "When you use that entry point, the application opens the external destination using your platform's browser or sharing functionality rather than handling the service inside the application. Those services are not controlled by the developer, and their own privacy practices may apply when you visit or use them.",
        "This Privacy Policy does not describe payment processing details, account requirements, data-sharing flows or analytics behaviour of those services, because the application specification does not document them."
      ]
    },
    advertising: {
      heading: "Advertising",
      paragraphs: [
        "According to the current application specification, the application does not contain advertisements as part of its functionality.",
        "This Privacy Policy does not make further statements about advertising identifiers or advertising networks, because the application specification does not document them."
      ]
    },
    analyticsAndTracking: {
      heading: "Analytics and Tracking",
      paragraphs: [
        "The current application specification does not document analytics, telemetry, fingerprinting, tracking or advertising-identifier functionality in the application.",
        "This Privacy Policy therefore does not describe any such functionality, and it does not describe any third-party tracking service.",
        "If functionality of this kind is added to the application in the future, this Privacy Policy will be updated as described in the section “Changes to This Privacy Policy”."
      ]
    },
    accountRequirements: {
      heading: "Account Requirements",
      paragraphs: [
        "According to the current application specification, no user account is required for normal personal finance functionality. There is no registration, password or login step for normal use.",
        "Because no account exists, this Privacy Policy does not describe account profiles, credentials or account recovery."
      ]
    },
    dataSharingAndDisclosure: {
      heading: "Data Sharing and Disclosure",
      paragraphs: [
        "Under the current architecture, your core financial records are stored locally on your device. The application specification does not document a developer-operated remote financial database, and it does not document a mechanism that transmits those records to the developer during normal use.",
        "Information can leave the application's local environment when you act intentionally:"
      ],
      bullets: [
        "You export a report and share the resulting file with an application or service you choose.",
        "You open a documented external third-party service from the application."
      ],
      afterParagraphs: [
        "This Privacy Policy does not describe any other data-sharing flow, because no other flow is documented in the application specification."
      ]
    },
    dataRetention: {
      heading: "Data Retention",
      paragraphs: [
        "Under the current architecture, your core financial records are kept on your own device, and the application specification does not define a developer-side retention period for them.",
        "Because no developer-operated remote financial database is documented, this Privacy Policy does not state a numerical retention period. Files that you export or share are separate copies that exist outside the application."
      ]
    },
    dataDeletion: {
      heading: "Data Deletion",
      paragraphs: [
        "Your core financial records are stored locally on your device under the current architecture, and the application specification does not define a developer-operated remote financial database that would hold a copy of them.",
        "The application specification also does not document a dedicated “delete all data” feature inside the application, so this Privacy Policy does not describe a specific in-app deletion workflow or a deletion button.",
        "Files that you export or share are copies you created and sent to a destination you chose; those copies exist outside the application.",
        "If a dedicated deletion feature is added to the application in the future, this Privacy Policy will be updated to describe it accurately."
      ]
    },
    dataSecurity: {
      heading: "Data Security",
      paragraphs: [
        "The application stores your core financial information locally on your device. Because those records live on the device, reasonable care with access to the device itself helps protect them, and anyone with access to your unlocked device and the application may be able to view the local records.",
        "This Privacy Policy does not claim end-to-end encryption, guaranteed security, zero-risk storage or guaranteed recovery of records, because the application specification does not support those claims."
      ]
    },
    childrensPrivacy: {
      heading: "Children's Privacy",
      paragraphs: [
        "The application is a personal finance and budgeting tool. The application specification does not describe the application as a product directed to children, and no age threshold has been defined for it, so this Privacy Policy does not state one.",
        "The application specification does not document a developer-operated service that collects financial records from users; under the current architecture those records are stored locally on the user's device.",
        "If an intended audience or an age requirement is defined for the application in the future, this Privacy Policy will be updated accordingly."
      ]
    },
    changesToPolicy: {
      heading: "Changes to This Privacy Policy",
      paragraphs: [
        "This Privacy Policy may be updated when the application or its privacy-related behaviour changes.",
        "The effective date and the latest update date are shown on this page. When a change materially affects how information is handled, the content of this page will be updated consistently with the application specification."
      ]
    },
    contact: {
      heading: "Contact",
      paragraphs: [
        "If you have a question about this Privacy Policy or about the privacy-related behaviour of the application, you can contact the developer using the details below."
      ]
    }
  }
};
