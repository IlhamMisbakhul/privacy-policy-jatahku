/*
 * Italiano — contenuto dell'Informativa sulla privacy.
 * Struttura e limiti fattuali secondo js/locales/en.js (fonte canonica).
 */
window.POLICY_I18N = window.POLICY_I18N || {};
window.POLICY_I18N.it = {
  reviewed: true,
  appName: "Il Mio Budget",
  ui: {
    title: "Informativa sulla privacy",
    description: "Informativa sulla privacy per {appName}, un'app di finanza personale e budget per Android.",
    subtitle: "Come vengono trattate le informazioni da questa app",
    effective: "Data di entrata in vigore",
    updated: "Ultimo aggiornamento",
    languageLabel: "Lingua",
    tocTitle: "Indice",
    skipToContent: "Vai al contenuto",
    backToTop: "Torna in alto",
    developerLabel: "Sviluppatore",
    emailLabel: "Email",
    websiteLabel: "Sito web",
    externalLinksLabel: "Servizi esterni documentati",
    externalLinkHint: "apre un servizio esterno",
    footerNote: "Questo sito è una pagina statica. Non utilizza analisi, pubblicità o script di tracciamento di terze parti.",
    footerIdentity: "Informativa sulla privacy per {appName}, fornita da {developerName}.",
    gateTitle: "Questa pagina non è ancora pronta per la pubblicazione.",
    gateMessage: "{placeholders} valore/i di identità non sono ancora definiti e {translations} traduzione/i non sono ancora state revisionate.",
    languageChanged: "Lingua cambiata in {language}.",
    confirmSectionTitle: "Conferma",
    confirmIntro: "Se stai leggendo questa Informativa sulla Privacy all'interno dell'applicazione, puoi confermare di averla letta. Il pulsante di conferma diventa disponibile dopo aver raggiunto la fine dell'informativa.",
    confirmButton: "Ho capito",
    confirmWaiting: "Invio della conferma all'applicazione…",
    confirmSuccess: "La tua conferma è stata salvata dall'applicazione.",
    confirmFailure: "L'applicazione non è riuscita a salvare la tua conferma. Riprova.",
    confirmTimeout: "L'applicazione non ha ancora risposto. Questa pagina non può confermare se la tua conferma è stata salvata. Riprova.",
    confirmAppNotReady: "L'applicazione non ha confermato di essere pronta, quindi la conferma non può essere inviata. Questa pagina non ha salvato nulla.",
    confirmBrowserNote: "Questa pagina è aperta in un normale browser. La conferma di aver letto questa Informativa sulla Privacy può essere registrata solo all'interno dell'applicazione stessa, quindi apri questa pagina all'interno dell'applicazione per confermare. Questo sito web non memorizza alcuna conferma."
  },
  sections: {
    introduction: {
      heading: "Introduzione",
      paragraphs: [
        "Questa Informativa sulla privacy spiega come vengono trattate le informazioni in {appName}, un'app di finanza personale e budget per Android fornita da {developerName}.",
        "Riguarda le informazioni che possono essere inserite nell'app, dove vengono archiviate, quando possono uscire dall'app a seguito di un'azione compiuta dall'utente, quali destinazioni esterne l'app può aprire e come contattare lo sviluppatore.",
        "Questa Informativa sulla privacy si applica all'app e a questo sito web. Non si applica ai servizi esterni che vengono aperti dall'app."
      ]
    },
    informationYouProvide: {
      heading: "Informazioni fornite dall'utente",
      paragraphs: [
        "Nell'app è possibile inserire personalmente informazioni finanziarie personali. La specifica dell'app supporta questi tipi di informazioni:"
      ],
      bullets: [
        "Importi di budget e di saldo, come il budget o il saldo mensile utilizzato dall'app",
        "Registrazioni di spese inserite dall'utente",
        "Categorie di spesa assegnate a tali registrazioni",
        "Nomi delle fonti di denaro e tipo di ciascuna fonte",
        "Saldi residui di ciascuna fonte di denaro",
        "Trasferimenti di fondi tra le proprie fonti di denaro",
        "Le informazioni del report mensile generate dalle registrazioni sopra indicate"
      ],
      afterParagraphs: [
        "Questa Informativa sulla privacy non descrive altre categorie di informazioni personali, perché la specifica dell'app non le definisce. In particolare, l'app non è descritta come un'app che raccoglie credenziali dell'account, contatti, messaggi, foto, registrazioni o dati simili."
      ]
    },
    localStorage: {
      heading: "Archiviazione locale",
      paragraphs: [
        "Nell'architettura attuale, i registri finanziari principali dell'app sono archiviati localmente sul dispositivo. L'implementazione attuale utilizza SQLite per l'archiviazione locale dell'app.",
        "L'archiviazione locale è diversa dall'archiviazione cloud. I registri restano sul dispositivo stesso e l'app non richiede un database finanziario remoto gestito dallo sviluppatore per la normale gestione finanziaria. L'app non richiede inoltre un account utente per l'uso normale.",
        "Poiché le informazioni possono essere esportate e condivise dall'utente, e poiché l'app può aprire destinazioni esterne, questa Informativa sulla privacy non afferma che le informazioni non possano mai lasciare il dispositivo."
      ]
    },
    deviceDateTime: {
      heading: "Data e ora del dispositivo",
      paragraphs: [
        "L'app utilizza la data e l'ora locali del dispositivo per comportamenti che dipendono dalla data corrente, come determinare il mese corrente, assegnare date ai registri, i report mensili e il comportamento di notifiche o promemoria basati sulle date, ove applicabile.",
        "L'uso dell'ora locale del dispositivo non significa che l'app utilizzi il GPS o servizi di localizzazione fisica per determinare l'ora corrente. Questa Informativa sulla privacy non descrive l'uso dell'ora del dispositivo come tracciamento della posizione."
      ]
    },
    notifications: {
      heading: "Notifiche",
      paragraphs: [
        "L'app include funzionalità di notifica. Nelle versioni di Android in cui è richiesto il permesso di notifica, l'app può richiedere il permesso POST_NOTIFICATIONS. Tale permesso viene utilizzato per le funzionalità di notifica e promemoria dell'app.",
        "Il permesso di notifica può essere gestito tramite le impostazioni dei permessi del dispositivo o dell'app. Se il permesso viene negato, le funzionalità legate alle notifiche possono non essere disponibili o essere limitate.",
        "Il permesso di notifica non concede di per sé l'accesso alla posizione fisica dell'utente. Questa Informativa sulla privacy non indica un calendario, una frequenza o un messaggio di notifica specifici, perché la specifica dell'app non li documenta."
      ]
    },
    exportAndSharing: {
      heading: "Esportazione e condivisione avviata dall'utente",
      paragraphs: [
        "L'app supporta l'esportazione di un report in formato PDF o XLSX. L'esportazione è avviata dall'utente, per il report o il mese selezionato, e il report viene generato dai registri locali.",
        "La destinazione, app o servizio, viene scelta dall'utente tramite la funzionalità di condivisione di Android. La specifica dell'app non definisce alcun meccanismo con cui i file esportati vengano inviati allo sviluppatore, e questa Informativa sulla privacy non ne descrive alcuno.",
        "Dopo la condivisione di un file, l'app o il servizio ricevente è fuori dal controllo dell'app e le pratiche sulla privacy di tale soggetto possono applicarsi alle informazioni contenute in quel file."
      ]
    },
    thirdPartyServices: {
      heading: "Servizi di terze parti",
      paragraphs: [
        "L'app include un punto di accesso per le donazioni a sostegno dello sviluppo, che offre opzioni esterne come Saweria e Ko-fi. Si tratta di servizi di terze parti.",
        "Quando si utilizza quel punto di accesso, l'app apre la destinazione esterna tramite il browser o la funzionalità di condivisione della piattaforma, anziché gestire il servizio all'interno dell'app. Tali servizi non sono controllati dallo sviluppatore e le loro pratiche sulla privacy possono applicarsi quando vengono visitati o utilizzati.",
        "Questa Informativa sulla privacy non descrive dettagli sul trattamento dei pagamenti, requisiti di account, flussi di condivisione dei dati o comportamenti di analisi di tali servizi, perché la specifica dell'app non li documenta."
      ]
    },
    advertising: {
      heading: "Pubblicità",
      paragraphs: [
        "Secondo la specifica attuale dell'app, l'app non contiene pubblicità come parte delle sue funzionalità.",
        "Questa Informativa sulla privacy non fa ulteriori dichiarazioni sugli identificatori pubblicitari o sulle reti pubblicitarie, perché la specifica dell'app non li documenta."
      ]
    },
    analyticsAndTracking: {
      heading: "Analisi e tracciamento",
      paragraphs: [
        "La specifica attuale dell'app non documenta funzionalità di analisi, telemetria, fingerprinting, tracciamento o identificatori pubblicitari nell'app.",
        "Pertanto questa Informativa sulla privacy non descrive alcuna di tali funzionalità e non descrive alcun servizio di tracciamento di terze parti.",
        "Se in futuro funzionalità di questo tipo verranno aggiunte all'app, questa Informativa sulla privacy sarà aggiornata come descritto nella sezione «Modifiche a questa Informativa sulla privacy»."
      ]
    },
    accountRequirements: {
      heading: "Requisiti di account",
      paragraphs: [
        "Secondo la specifica attuale dell'app, non è richiesto alcun account utente per la normale funzionalità di finanza personale. Non sono previsti registrazione, password o accesso per l'uso normale.",
        "Poiché non esiste alcun account, questa Informativa sulla privacy non descrive profili, credenziali o recupero dell'account."
      ]
    },
    dataSharingAndDisclosure: {
      heading: "Condivisione e comunicazione dei dati",
      paragraphs: [
        "Nell'architettura attuale, i registri finanziari principali dell'utente sono archiviati localmente sul dispositivo. La specifica dell'app non documenta un database finanziario remoto gestito dallo sviluppatore e non documenta alcun meccanismo che trasmetta tali registri allo sviluppatore durante il normale utilizzo.",
        "Le informazioni possono uscire dall'ambiente locale dell'app quando l'utente agisce intenzionalmente:"
      ],
      bullets: [
        "L'utente esporta un report e condivide il file risultante con un'app o un servizio di sua scelta.",
        "L'utente apre dall'app un servizio esterno di terze parti documentato."
      ],
      afterParagraphs: [
        "Questa Informativa sulla privacy non descrive altri flussi di condivisione dei dati, perché nessun altro flusso è documentato nella specifica dell'app."
      ]
    },
    dataRetention: {
      heading: "Conservazione dei dati",
      paragraphs: [
        "Nell'architettura attuale, i registri finanziari principali restano sul dispositivo dell'utente e la specifica dell'app non definisce un periodo di conservazione a carico dello sviluppatore per tali registri.",
        "Poiché non è documentato alcun database finanziario remoto gestito dallo sviluppatore, questa Informativa sulla privacy non indica un periodo di conservazione numerico. I file esportati o condivisi sono copie separate che esistono al di fuori dell'app."
      ]
    },
    dataDeletion: {
      heading: "Eliminazione dei dati",
      paragraphs: [
        "I registri finanziari principali sono archiviati localmente sul dispositivo secondo l'architettura attuale, e la specifica dell'app non definisce un database finanziario remoto gestito dallo sviluppatore che ne conservi una copia.",
        "La specifica dell'app inoltre non documenta una funzione dedicata «elimina tutti i dati» all'interno dell'app, quindi questa Informativa sulla privacy non descrive una specifica procedura di eliminazione all'interno dell'app né un pulsante di eliminazione.",
        "I file esportati o condivisi sono copie create dall'utente e inviate a una destinazione scelta dall'utente; tali copie esistono al di fuori dell'app.",
        "Se in futuro verrà aggiunta all'app una funzione dedicata di eliminazione, questa Informativa sulla privacy sarà aggiornata per descriverla in modo accurato."
      ]
    },
    dataSecurity: {
      heading: "Sicurezza dei dati",
      paragraphs: [
        "L'app archivia le informazioni finanziarie principali localmente sul dispositivo. Poiché tali registri risiedono sul dispositivo, prestare attenzione all'accesso al dispositivo stesso aiuta a proteggerli, e chiunque abbia accesso al dispositivo sbloccato e all'app potrebbe visualizzare i registri locali.",
        "Questa Informativa sulla privacy non dichiara crittografia end-to-end, sicurezza garantita, archiviazione senza rischi o recupero garantito dei registri, perché la specifica dell'app non supporta tali dichiarazioni."
      ]
    },
    childrensPrivacy: {
      heading: "Privacy dei minori",
      paragraphs: [
        "L'app è uno strumento di finanza personale e budget. La specifica dell'app non descrive l'app come un prodotto rivolto ai minori e non è stata definita alcuna soglia di età, quindi questa Informativa sulla privacy non ne indica alcuna.",
        "La specifica dell'app non documenta un servizio gestito dallo sviluppatore che raccolga registri finanziari dagli utenti; nell'architettura attuale tali registri sono archiviati localmente sul dispositivo dell'utente.",
        "Se in futuro verranno definiti un pubblico di riferimento o un requisito di età per l'app, questa Informativa sulla privacy sarà aggiornata di conseguenza."
      ]
    },
    changesToPolicy: {
      heading: "Modifiche a questa Informativa sulla privacy",
      paragraphs: [
        "Questa Informativa sulla privacy può essere aggiornata quando l'app o il suo comportamento legato alla privacy cambia.",
        "La data di entrata in vigore e la data dell'ultimo aggiornamento sono indicate in questa pagina. Se una modifica incide in modo sostanziale su come vengono trattate le informazioni, il contenuto di questa pagina sarà aggiornato in modo coerente con la specifica dell'app."
      ]
    },
    contact: {
      heading: "Contatti",
      paragraphs: [
        "Per domande su questa Informativa sulla privacy o sul comportamento dell'app legato alla privacy, è possibile contattare lo sviluppatore tramite i dati indicati di seguito."
      ]
    }
  }
};
