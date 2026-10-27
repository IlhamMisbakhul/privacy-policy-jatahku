/*
 * Nederlands — inhoud van het Privacybeleid.
 * Structuur en feitelijke grenzen volgens js/locales/en.js (canonieke bron).
 */
window.POLICY_I18N = window.POLICY_I18N || {};
window.POLICY_I18N.nl = {
  reviewed: true,
  appName: "Mijn Budget",
  ui: {
    title: "Privacybeleid",
    description: "Privacybeleid voor {appName}, een app voor persoonlijke financiën en budgetten voor Android.",
    subtitle: "Hoe informatie door deze app wordt verwerkt",
    effective: "Ingangsdatum",
    updated: "Laatst bijgewerkt",
    languageLabel: "Taal",
    tocTitle: "Inhoud",
    skipToContent: "Naar de inhoud",
    backToTop: "Terug naar boven",
    developerLabel: "Ontwikkelaar",
    emailLabel: "E-mail",
    websiteLabel: "Website",
    externalLinksLabel: "Gedocumenteerde externe diensten",
    externalLinkHint: "opent een externe dienst",
    footerNote: "Deze website is een statische pagina. Er worden geen analytics, advertenties of trackingscripts van derden gebruikt.",
    footerIdentity: "Privacybeleid voor {appName}, aangeboden door {developerName}.",
    gateTitle: "Deze pagina is nog niet klaar voor publicatie.",
    gateMessage: "{placeholders} identiteitswaarde(n) zijn nog niet definitief en {translations} vertaling(en) zijn nog niet nagekeken.",
    languageChanged: "Taal gewijzigd naar {language}.",
    confirmSectionTitle: "Bevestiging",
    confirmIntro: "Als u dit Privacybeleid in de applicatie leest, kunt u bevestigen dat u het heeft gelezen. De bevestigingsknop wordt beschikbaar nadat u het einde van het beleid hebt bereikt.",
    confirmButton: "Begrepen",
    confirmWaiting: "Uw bevestiging naar de applicatie verzenden…",
    confirmSuccess: "Uw bevestiging is opgeslagen door de applicatie.",
    confirmFailure: "De applicatie kon uw bevestiging niet opslaan. Probeer het opnieuw.",
    confirmTimeout: "De applicatie heeft nog niet gereageerd. Deze pagina kan niet bevestigen of uw bevestiging is opgeslagen. Probeer het opnieuw.",
    confirmAppNotReady: "De applicatie heeft niet bevestigd dat deze klaar is, dus de bevestiging kan niet worden verzonden. Deze pagina heeft niets opgeslagen.",
    confirmBrowserNote: "Deze pagina is geopend in een normale browser. De bevestiging dat u dit Privacybeleid hebt gelezen kan alleen worden geregistreerd in de applicatie zelf, dus open deze pagina in de applicatie om te bevestigen. Deze website slaat geen bevestigingen op."
  },
  sections: {
    introduction: {
      heading: "Inleiding",
      paragraphs: [
        "Dit Privacybeleid legt uit hoe informatie wordt verwerkt door {appName}, een app voor persoonlijke financiën en budgetten voor Android, aangeboden door {developerName}.",
        "Het gaat over de informatie die u zelf in de app kunt invoeren, waar die informatie wordt opgeslagen, wanneer informatie de app kan verlaten door een actie die u zelf onderneemt, welke externe bestemmingen de app kan openen, en hoe u contact kunt opnemen met de ontwikkelaar.",
        "Dit Privacybeleid geldt voor de app en voor deze website. Het geldt niet voor externe diensten die u vanuit de app opent."
      ]
    },
    informationYouProvide: {
      heading: "Informatie die u verstrekt",
      paragraphs: [
        "U kunt zelf persoonlijke financiële informatie in de app invoeren. De appspecificatie ondersteunt de volgende soorten informatie:"
      ],
      bullets: [
        "Budget- en saldobedragen, zoals het maandbudget of saldo dat de app gebruikt",
        "Uitgavenregistraties die u invoert",
        "Uitgavecategorieën die aan die registraties zijn toegewezen",
        "Namen van geldbronnen en het type van elke bron",
        "Resterende bedragen van elke geldbron",
        "Overboekingen tussen uw eigen geldbronnen",
        "De maandelijkse rapportinformatie die uit bovenstaande registraties wordt gegenereerd"
      ],
      afterParagraphs: [
        "Dit Privacybeleid beschrijft geen andere categorieën persoonsgegevens, omdat de appspecificatie die niet definieert. De app wordt in het bijzonder niet beschreven als een app die accountgegevens, contactpersonen, berichten, foto's, opnamen of vergelijkbare gegevens verzamelt."
      ]
    },
    localStorage: {
      heading: "Lokale opslag",
      paragraphs: [
        "In de huidige architectuur worden de kernfinanciële registraties van de app lokaal op uw apparaat opgeslagen. De huidige implementatie gebruikt SQLite voor de lokale opslag van de app.",
        "Lokale opslag verschilt van cloudopslag. Uw registraties blijven op het apparaat zelf, en de app vereist geen door de ontwikkelaar beheerde externe financiële database voor de normale functionaliteit voor financieel beheer. De app vereist ook geen gebruikersaccount voor normaal gebruik.",
        "Omdat u zelf informatie kunt exporteren en delen, en omdat de app externe bestemmingen kan openen, stelt dit Privacybeleid niet dat informatie uw apparaat nooit kan verlaten."
      ]
    },
    deviceDateTime: {
      heading: "Datum en tijd van het apparaat",
      paragraphs: [
        "De app gebruikt de lokale datum en tijd van uw apparaat voor gedrag dat afhangt van de huidige datum, zoals het bepalen van de huidige maand, het toekennen van datums aan registraties, maandelijkse rapportage en op datums gebaseerde meldingen of herinneringen waar van toepassing.",
        "Het gebruik van de lokale tijd van het apparaat betekent niet dat de app GPS of fysieke locatiediensten gebruikt om de huidige tijd te bepalen. Dit Privacybeleid beschrijft het gebruik van apparaattijd niet als locatietracking."
      ]
    },
    notifications: {
      heading: "Meldingen",
      paragraphs: [
        "De app bevat meldingsfunctionaliteit. Op Android-versies waar meldingsrechten vereist zijn, kan de app de machtiging POST_NOTIFICATIONS aanvragen. Die machtiging wordt gebruikt voor de meldings- en herinneringsfunctionaliteit van de app.",
        "U kunt meldingsrechten beheren via de rechteninstellingen van uw apparaat of van de app. Als u meldingsrechten weigert, kan de functionaliteit rond meldingen niet beschikbaar of beperkt zijn.",
        "Meldingsrechten geven op zichzelf geen toegang tot uw fysieke locatie. Dit Privacybeleid noemt geen specifiek meldingsschema, geen frequentie en geen berichttekst, omdat de appspecificatie die niet documenteert."
      ]
    },
    exportAndSharing: {
      heading: "Export en delen door de gebruiker",
      paragraphs: [
        "De app ondersteunt het exporteren van een rapport als PDF of XLSX. De export start u zelf, voor het rapport of de maand die u selecteert, en het rapport wordt gegenereerd uit uw lokale registraties.",
        "U kiest de bestemmingsapp of -dienst via de deelfunctionaliteit van Android. De appspecificatie definieert geen mechanisme waarmee geëxporteerde bestanden naar de ontwikkelaar worden gestuurd, en dit Privacybeleid beschrijft er geen.",
        "Zodra u een bestand deelt, valt de ontvangende app of dienst buiten de controle van de app, en het privacybeleid van die partij kan van toepassing zijn op de informatie in dat bestand."
      ]
    },
    thirdPartyServices: {
      heading: "Diensten van derden",
      paragraphs: [
        "De app bevat een donatie-ingang voor het steunen van de ontwikkeling, met externe opties zoals Saweria en Ko-fi. Dit zijn diensten van derden.",
        "Wanneer u die ingang gebruikt, opent de app de externe bestemming via de browser of de deelfunctionaliteit van uw platform, in plaats van de dienst in de app zelf te verwerken. Die diensten worden niet beheerd door de ontwikkelaar, en hun eigen privacybeleid kan van toepassing zijn wanneer u ze bezoekt of gebruikt.",
        "Dit Privacybeleid beschrijft geen details over betalingsverwerking, accountvereisten, gegevensstromen of analytisch gedrag van die diensten, omdat de appspecificatie die niet documenteert."
      ]
    },
    advertising: {
      heading: "Advertenties",
      paragraphs: [
        "Volgens de huidige appspecificatie bevat de app geen advertenties als onderdeel van de functionaliteit.",
        "Dit Privacybeleid doet geen verdere uitspraken over advertentie-identificaties of advertentienetwerken, omdat de appspecificatie die niet documenteert."
      ]
    },
    analyticsAndTracking: {
      heading: "Analytics en tracking",
      paragraphs: [
        "De huidige appspecificatie documenteert geen functionaliteit voor analytics, telemetrie, fingerprinting, tracking of advertentie-identificaties in de app.",
        "Daarom beschrijft dit Privacybeleid dergelijke functionaliteit niet, en beschrijft het geen enkele trackingdienst van derden.",
        "Als dergelijke functionaliteit in de toekomst aan de app wordt toegevoegd, wordt dit Privacybeleid bijgewerkt zoals beschreven in de sectie “Wijzigingen in dit Privacybeleid”."
      ]
    },
    accountRequirements: {
      heading: "Accountvereisten",
      paragraphs: [
        "Volgens de huidige appspecificatie is geen gebruikersaccount vereist voor de normale functionaliteit voor persoonlijke financiën. Er is geen registratie, wachtwoord of inlogstap voor normaal gebruik.",
        "Omdat er geen account bestaat, beschrijft dit Privacybeleid geen accountprofielen, inloggegevens of accountherstel."
      ]
    },
    dataSharingAndDisclosure: {
      heading: "Delen en verstrekken van gegevens",
      paragraphs: [
        "In de huidige architectuur worden uw kernfinanciële registraties lokaal op uw apparaat opgeslagen. De appspecificatie documenteert geen door de ontwikkelaar beheerde externe financiële database en documenteert geen mechanisme dat die registraties tijdens normaal gebruik naar de ontwikkelaar verzendt.",
        "Informatie kan de lokale omgeving van de app verlaten wanneer u bewust handelt:"
      ],
      bullets: [
        "U exporteert een rapport en deelt het resulterende bestand met een app of dienst die u kiest.",
        "U opent een gedocumenteerde externe dienst van derden vanuit de app."
      ],
      afterParagraphs: [
        "Dit Privacybeleid beschrijft geen andere gegevensstroom, omdat er geen andere stroom in de appspecificatie is gedocumenteerd."
      ]
    },
    dataRetention: {
      heading: "Bewaring van gegevens",
      paragraphs: [
        "In de huidige architectuur blijven uw kernfinanciële registraties op uw eigen apparaat, en de appspecificatie definieert geen bewaartermijn aan de zijde van de ontwikkelaar voor die registraties.",
        "Omdat er geen door de ontwikkelaar beheerde externe financiële database is gedocumenteerd, noemt dit Privacybeleid geen numerieke bewaartermijn. Bestanden die u exporteert of deelt, zijn afzonderlijke kopieën die buiten de app bestaan."
      ]
    },
    dataDeletion: {
      heading: "Verwijderen van gegevens",
      paragraphs: [
        "Uw kernfinanciële registraties worden in de huidige architectuur lokaal op uw apparaat opgeslagen, en de appspecificatie definieert geen door de ontwikkelaar beheerde externe financiële database die er een kopie van zou bewaren.",
        "De appspecificatie documenteert ook geen aparte functie “alle gegevens verwijderen” in de app, dus beschrijft dit Privacybeleid geen specifieke verwijderingsprocedure in de app en geen verwijderknop.",
        "Bestanden die u exporteert of deelt, zijn kopieën die u zelf hebt gemaakt en naar een door u gekozen bestemming hebt gestuurd; die kopieën bestaan buiten de app.",
        "Als er in de toekomst een aparte verwijderfunctie aan de app wordt toegevoegd, wordt dit Privacybeleid bijgewerkt om die nauwkeurig te beschrijven."
      ]
    },
    dataSecurity: {
      heading: "Beveiliging van gegevens",
      paragraphs: [
        "De app slaat uw kernfinanciële informatie lokaal op uw apparaat op. Omdat die registraties op het apparaat staan, helpt zorgvuldig omgaan met toegang tot het apparaat zelf om ze te beschermen, en iedereen met toegang tot uw ontgrendelde apparaat en tot de app kan mogelijk de lokale registraties bekijken.",
        "Dit Privacybeleid claimt geen end-to-endversleuteling, gegarandeerde beveiliging, opslag zonder risico of gegarandeerd herstel van registraties, omdat de appspecificatie die claims niet ondersteunt."
      ]
    },
    childrensPrivacy: {
      heading: "Privacy van kinderen",
      paragraphs: [
        "De app is een hulpmiddel voor persoonlijke financiën en budgetten. De appspecificatie beschrijft de app niet als een product dat op kinderen is gericht, en er is geen leeftijdsgrens vastgesteld, dus noemt dit Privacybeleid er geen.",
        "De appspecificatie documenteert geen door de ontwikkelaar beheerde dienst die financiële registraties van gebruikers verzamelt; in de huidige architectuur worden die registraties lokaal op het apparaat van de gebruiker opgeslagen.",
        "Als er in de toekomst een doelgroep of leeftijdsvereiste voor de app wordt vastgesteld, wordt dit Privacybeleid daarop aangepast."
      ]
    },
    changesToPolicy: {
      heading: "Wijzigingen in dit Privacybeleid",
      paragraphs: [
        "Dit Privacybeleid kan worden bijgewerkt wanneer de app of het privacygerelateerde gedrag verandert.",
        "De ingangsdatum en de datum van de laatste update staan op deze pagina. Als een wijziging materiële gevolgen heeft voor de manier waarop informatie wordt verwerkt, wordt de inhoud van deze pagina in lijn gebracht met de appspecificatie."
      ]
    },
    contact: {
      heading: "Contact",
      paragraphs: [
        "Als u een vraag hebt over dit Privacybeleid of over het privacygerelateerde gedrag van de app, kunt u contact opnemen met de ontwikkelaar via de onderstaande gegevens."
      ]
    }
  }
};
