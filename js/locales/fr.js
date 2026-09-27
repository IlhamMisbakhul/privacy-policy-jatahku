/*
 * Français — contenu de la Politique de confidentialité.
 * Structure et limites factuelles selon js/locales/en.js (source canonique).
 */
window.POLICY_I18N = window.POLICY_I18N || {};
window.POLICY_I18N.fr = {
  reviewed: true,
  appName: "Mon Budget",
  ui: {
    title: "Politique de confidentialité",
    description: "Politique de confidentialité pour {appName}, une application de finances personnelles et de budget pour Android.",
    subtitle: "Comment les informations sont traitées par cette application",
    effective: "Date d'entrée en vigueur",
    updated: "Dernière mise à jour",
    languageLabel: "Langue",
    tocTitle: "Sommaire",
    skipToContent: "Aller au contenu",
    backToTop: "Retour en haut",
    developerLabel: "Développeur",
    emailLabel: "E-mail",
    websiteLabel: "Site web",
    externalLinksLabel: "Services externes documentés",
    externalLinkHint: "ouvre un service externe",
    footerNote: "Ce site est une page statique. Il n'utilise ni analyse d'audience, ni publicité, ni scripts de suivi de tiers.",
    footerIdentity: "Politique de confidentialité pour {appName}, fournie par {developerName}.",
    gateTitle: "Cette page n'est pas encore prête à être publiée.",
    gateMessage: "{placeholders} valeur(s) d'identité ne sont pas finalisées et {translations} traduction(s) n'ont pas encore été relues.",
    languageChanged: "Langue changée en {language}."
  },
  sections: {
    introduction: {
      heading: "Introduction",
      paragraphs: [
        "Cette Politique de confidentialité explique comment les informations sont traitées par {appName}, une application de finances personnelles et de budget pour Android fournie par {developerName}.",
        "Elle couvre les informations que vous pouvez saisir dans l'application, l'endroit où elles sont stockées, les cas où des informations peuvent quitter l'application du fait d'une action que vous effectuez vous-même, les destinations externes que l'application peut ouvrir, et la manière de contacter le développeur.",
        "Cette Politique de confidentialité s'applique à l'application et à ce site web. Elle ne s'applique pas aux services externes que vous ouvrez depuis l'application."
      ]
    },
    informationYouProvide: {
      heading: "Informations que vous fournissez",
      paragraphs: [
        "Vous pouvez saisir vous-même des informations financières personnelles dans l'application. La spécification de l'application prend en charge les types d'informations suivants :"
      ],
      bullets: [
        "Montants de budget et de solde, comme le budget ou le solde mensuel utilisé par l'application",
        "Enregistrements de dépenses que vous saisissez",
        "Catégories de dépenses attribuées à ces enregistrements",
        "Noms des sources de fonds et type de chaque source",
        "Soldes restants de chaque source de fonds",
        "Transferts de fonds entre vos propres sources de fonds",
        "Les informations du rapport mensuel générées à partir des enregistrements ci-dessus"
      ],
      afterParagraphs: [
        "Cette Politique de confidentialité ne décrit pas d'autres catégories d'informations personnelles, car la spécification de l'application ne les définit pas. En particulier, l'application n'est pas décrite comme collectant des identifiants de compte, des contacts, des messages, des photos, des enregistrements ou des données similaires."
      ]
    },
    localStorage: {
      heading: "Stockage local",
      paragraphs: [
        "Dans l'architecture actuelle, les enregistrements financiers principaux de l'application sont stockés localement sur votre appareil. L'implémentation actuelle utilise SQLite pour le stockage local de l'application.",
        "Le stockage local diffère du stockage dans le cloud. Vos enregistrements restent sur l'appareil lui-même, et l'application ne nécessite pas de base de données financière distante exploitée par le développeur pour son fonctionnement normal de gestion financière. L'application ne nécessite pas non plus de compte utilisateur pour un usage normal.",
        "Comme vous pouvez exporter et partager vous-même des informations, et comme l'application peut ouvrir des destinations externes, cette Politique de confidentialité n'affirme pas que les informations ne peuvent jamais quitter votre appareil."
      ]
    },
    deviceDateTime: {
      heading: "Date et heure de l'appareil",
      paragraphs: [
        "L'application utilise la date et l'heure locales de votre appareil pour des comportements qui dépendent de la date du jour, comme la détermination du mois en cours, l'attribution de dates aux enregistrements, les rapports mensuels et les notifications ou rappels fondés sur les dates, le cas échéant.",
        "L'utilisation de l'heure locale de l'appareil ne signifie pas que l'application utilise le GPS ou des services de localisation physique pour déterminer l'heure actuelle. Cette Politique de confidentialité ne décrit pas l'utilisation de l'heure de l'appareil comme un suivi de localisation."
      ]
    },
    notifications: {
      heading: "Notifications",
      paragraphs: [
        "L'application comprend une fonctionnalité de notifications. Sur les versions d'Android où l'autorisation de notification est requise, l'application peut demander l'autorisation POST_NOTIFICATIONS. Cette autorisation est utilisée pour la fonctionnalité de notifications et de rappels de l'application.",
        "Vous pouvez gérer l'autorisation de notification dans les réglages d'autorisations de votre appareil ou de l'application. Si vous refusez l'autorisation de notification, les fonctionnalités liées aux notifications peuvent être indisponibles ou limitées.",
        "L'autorisation de notification ne donne pas, à elle seule, accès à votre localisation physique. Cette Politique de confidentialité n'indique aucun calendrier, aucune fréquence et aucun message de notification précis, car la spécification de l'application ne les documente pas."
      ]
    },
    exportAndSharing: {
      heading: "Export et partage à l'initiative de l'utilisateur",
      paragraphs: [
        "L'application permet d'exporter un rapport au format PDF ou XLSX. L'export est lancé par vous, pour le rapport ou le mois que vous sélectionnez, et le rapport est généré à partir de vos enregistrements locaux.",
        "Vous choisissez l'application ou le service de destination via la fonctionnalité de partage d'Android. La spécification de l'application ne définit aucun mécanisme par lequel les fichiers exportés seraient envoyés au développeur, et cette Politique de confidentialité n'en décrit aucun.",
        "Une fois que vous partagez un fichier, l'application ou le service destinataire se trouve hors du contrôle de l'application, et les pratiques de confidentialité de ce tiers peuvent s'appliquer aux informations contenues dans ce fichier."
      ]
    },
    thirdPartyServices: {
      heading: "Services tiers",
      paragraphs: [
        "L'application comprend un point d'accès aux dons pour soutenir le développement, qui propose des options externes telles que Saweria et Ko-fi. Il s'agit de services tiers.",
        "Lorsque vous utilisez ce point d'accès, l'application ouvre la destination externe via le navigateur ou la fonctionnalité de partage de votre plateforme, plutôt que de traiter le service à l'intérieur de l'application. Ces services ne sont pas contrôlés par le développeur, et leurs propres pratiques de confidentialité peuvent s'appliquer lorsque vous les consultez ou les utilisez.",
        "Cette Politique de confidentialité ne décrit pas les détails de traitement des paiements, les exigences de compte, les flux de partage de données ou le comportement analytique de ces services, car la spécification de l'application ne les documente pas."
      ]
    },
    advertising: {
      heading: "Publicité",
      paragraphs: [
        "Selon la spécification actuelle de l'application, l'application ne contient pas de publicité dans le cadre de ses fonctionnalités.",
        "Cette Politique de confidentialité ne fait pas d'autres déclarations sur les identifiants publicitaires ou les réseaux publicitaires, car la spécification de l'application ne les documente pas."
      ]
    },
    analyticsAndTracking: {
      heading: "Analyse et suivi",
      paragraphs: [
        "La spécification actuelle de l'application ne documente aucune fonctionnalité d'analyse, de télémétrie, d'empreinte numérique, de suivi ou d'identifiants publicitaires dans l'application.",
        "Par conséquent, cette Politique de confidentialité ne décrit aucune de ces fonctionnalités et ne décrit aucun service de suivi tiers.",
        "Si une telle fonctionnalité est ajoutée à l'application à l'avenir, cette Politique de confidentialité sera mise à jour comme décrit dans la section « Modifications de cette Politique de confidentialité »."
      ]
    },
    accountRequirements: {
      heading: "Exigences de compte",
      paragraphs: [
        "Selon la spécification actuelle de l'application, aucun compte utilisateur n'est requis pour la fonctionnalité normale de finances personnelles. Il n'y a ni inscription, ni mot de passe, ni étape de connexion pour un usage normal.",
        "Comme aucun compte n'existe, cette Politique de confidentialité ne décrit ni profils de compte, ni identifiants, ni récupération de compte."
      ]
    },
    dataSharingAndDisclosure: {
      heading: "Partage et communication de données",
      paragraphs: [
        "Dans l'architecture actuelle, vos enregistrements financiers principaux sont stockés localement sur votre appareil. La spécification de l'application ne documente pas de base de données financière distante exploitée par le développeur et ne documente aucun mécanisme transmettant ces enregistrements au développeur lors d'un usage normal.",
        "Des informations peuvent quitter l'environnement local de l'application lorsque vous agissez volontairement :"
      ],
      bullets: [
        "Vous exportez un rapport et partagez le fichier obtenu avec une application ou un service de votre choix.",
        "Vous ouvrez depuis l'application un service tiers externe documenté."
      ],
      afterParagraphs: [
        "Cette Politique de confidentialité ne décrit aucun autre flux de partage de données, car aucun autre flux n'est documenté dans la spécification de l'application."
      ]
    },
    dataRetention: {
      heading: "Conservation des données",
      paragraphs: [
        "Dans l'architecture actuelle, vos enregistrements financiers principaux restent sur votre propre appareil, et la spécification de l'application ne définit aucune durée de conservation du côté du développeur pour ces enregistrements.",
        "Aucune base de données financière distante exploitée par le développeur n'étant documentée, cette Politique de confidentialité n'indique aucune durée de conservation chiffrée. Les fichiers que vous exportez ou partagez sont des copies distinctes qui existent en dehors de l'application."
      ]
    },
    dataDeletion: {
      heading: "Suppression des données",
      paragraphs: [
        "Vos enregistrements financiers principaux sont stockés localement sur votre appareil dans l'architecture actuelle, et la spécification de l'application ne définit pas de base de données financière distante exploitée par le développeur qui en conserverait une copie.",
        "La spécification de l'application ne documente pas non plus de fonction dédiée « supprimer toutes les données » dans l'application ; cette Politique de confidentialité ne décrit donc aucun processus de suppression spécifique dans l'application ni aucun bouton de suppression.",
        "Les fichiers que vous exportez ou partagez sont des copies que vous avez créées et envoyées vers une destination que vous avez choisie ; ces copies existent en dehors de l'application.",
        "Si une fonction de suppression dédiée est ajoutée à l'application à l'avenir, cette Politique de confidentialité sera mise à jour pour la décrire avec précision."
      ]
    },
    dataSecurity: {
      heading: "Sécurité des données",
      paragraphs: [
        "L'application stocke vos informations financières principales localement sur votre appareil. Comme ces enregistrements se trouvent sur l'appareil, veiller à l'accès à l'appareil lui-même aide à les protéger, et toute personne ayant accès à votre appareil déverrouillé et à l'application peut être en mesure de consulter les enregistrements locaux.",
        "Cette Politique de confidentialité ne revendique ni chiffrement de bout en bout, ni sécurité garantie, ni stockage sans risque, ni récupération garantie des enregistrements, car la spécification de l'application ne soutient pas ces affirmations."
      ]
    },
    childrensPrivacy: {
      heading: "Confidentialité des enfants",
      paragraphs: [
        "L'application est un outil de finances personnelles et de budget. La spécification de l'application ne décrit pas l'application comme un produit destiné aux enfants et aucun seuil d'âge n'a été défini pour elle ; cette Politique de confidentialité n'en indique donc aucun.",
        "La spécification de l'application ne documente pas de service exploité par le développeur qui collecterait des enregistrements financiers auprès des utilisateurs ; dans l'architecture actuelle, ces enregistrements sont stockés localement sur l'appareil de l'utilisateur.",
        "Si un public visé ou une exigence d'âge est défini pour l'application à l'avenir, cette Politique de confidentialité sera mise à jour en conséquence."
      ]
    },
    changesToPolicy: {
      heading: "Modifications de cette Politique de confidentialité",
      paragraphs: [
        "Cette Politique de confidentialité peut être mise à jour lorsque l'application ou son comportement en matière de confidentialité change.",
        "La date d'entrée en vigueur et la date de la dernière mise à jour sont affichées sur cette page. Si une modification affecte de manière substantielle la façon dont les informations sont traitées, le contenu de cette page sera mis à jour en cohérence avec la spécification de l'application."
      ]
    },
    contact: {
      heading: "Contact",
      paragraphs: [
        "Si vous avez une question concernant cette Politique de confidentialité ou le comportement de l'application en matière de confidentialité, vous pouvez contacter le développeur à l'aide des coordonnées ci-dessous."
      ]
    }
  }
};
