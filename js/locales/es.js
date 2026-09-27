/*
 * Español — contenido de la Política de Privacidad.
 * Estructura y límites factuales según js/locales/en.js (fuente canónica).
 */
window.POLICY_I18N = window.POLICY_I18N || {};
window.POLICY_I18N.es = {
  reviewed: true,
  appName: "Mi Presupuesto",
  ui: {
    title: "Política de Privacidad",
    description: "Política de Privacidad de {appName}, una aplicación de finanzas personales y presupuesto para Android.",
    subtitle: "Cómo se trata la información en esta aplicación",
    effective: "Fecha de entrada en vigor",
    updated: "Última actualización",
    languageLabel: "Idioma",
    tocTitle: "Contenido",
    skipToContent: "Saltar al contenido",
    backToTop: "Volver arriba",
    developerLabel: "Desarrollador",
    emailLabel: "Correo electrónico",
    websiteLabel: "Sitio web",
    externalLinksLabel: "Servicios externos documentados",
    externalLinkHint: "abre un servicio externo",
    footerNote: "Este sitio es una página estática. No utiliza analíticas, publicidad ni scripts de seguimiento de terceros.",
    footerIdentity: "Política de Privacidad de {appName}, proporcionada por {developerName}.",
    gateTitle: "Esta página aún no está lista para su publicación.",
    gateMessage: "{placeholders} valor(es) de identidad no están finalizados y {translations} traducción(es) aún no se han revisado.",
    languageChanged: "Idioma cambiado a {language}."
  },
  sections: {
    introduction: {
      heading: "Introducción",
      paragraphs: [
        "Esta Política de Privacidad explica cómo se trata la información en {appName}, una aplicación de finanzas personales y presupuesto para Android proporcionada por {developerName}.",
        "Abarca la información que puede introducir en la aplicación, dónde se almacena, cuándo puede salir la información de la aplicación por una acción que usted realice, qué destinos externos puede abrir la aplicación y cómo puede ponerse en contacto con el desarrollador.",
        "Esta Política de Privacidad se aplica a la aplicación y a este sitio web. No se aplica a los servicios externos que abra desde la aplicación."
      ]
    },
    informationYouProvide: {
      heading: "Información que usted proporciona",
      paragraphs: [
        "Usted mismo puede introducir información financiera personal en la aplicación. La especificación de la aplicación admite estos tipos de información:"
      ],
      bullets: [
        "Importes de presupuesto y de saldo, como el presupuesto o el saldo mensual que utiliza la aplicación",
        "Registros de gastos que usted introduce",
        "Categorías de gasto asignadas a esos registros",
        "Nombres de las fuentes de dinero y el tipo de cada fuente",
        "Saldos restantes de cada fuente de dinero",
        "Transferencias de fondos entre sus propias fuentes de dinero",
        "La información del informe mensual generada a partir de los registros anteriores"
      ],
      afterParagraphs: [
        "Esta Política de Privacidad no describe otras categorías de información personal, porque la especificación de la aplicación no las define. En particular, no se describe a la aplicación como recopiladora de credenciales de cuenta, contactos, mensajes, fotos, grabaciones o datos similares."
      ]
    },
    localStorage: {
      heading: "Almacenamiento local",
      paragraphs: [
        "En la arquitectura actual, los registros financieros principales de la aplicación se almacenan localmente en su dispositivo. La implementación actual utiliza SQLite para el almacenamiento local de la aplicación.",
        "El almacenamiento local es distinto del almacenamiento en la nube. Sus registros se guardan en el propio dispositivo, y la aplicación no requiere una base de datos financiera remota operada por el desarrollador para su funcionamiento normal de gestión financiera. La aplicación tampoco requiere una cuenta de usuario para el uso normal.",
        "Dado que usted puede exportar y compartir información por sí mismo, y que la aplicación puede abrir destinos externos, esta Política de Privacidad no afirma que la información nunca pueda salir de su dispositivo."
      ]
    },
    deviceDateTime: {
      heading: "Fecha y hora del dispositivo",
      paragraphs: [
        "La aplicación utiliza la fecha y la hora locales de su dispositivo para comportamientos que dependen de la fecha actual, como determinar el mes actual, asignar fechas a los registros, los informes mensuales y el comportamiento de notificaciones o recordatorios basados en fechas cuando corresponda.",
        "Usar la hora local del dispositivo no significa que la aplicación utilice GPS o servicios de localización física para determinar la hora actual. Esta Política de Privacidad no describe el uso de la hora del dispositivo como seguimiento de ubicación."
      ]
    },
    notifications: {
      heading: "Notificaciones",
      paragraphs: [
        "La aplicación incluye funcionalidad de notificaciones. En versiones de Android en las que se requiere permiso de notificaciones, la aplicación puede solicitar el permiso POST_NOTIFICATIONS. Ese permiso se utiliza para la funcionalidad de notificaciones y recordatorios de la aplicación.",
        "Puede controlar el permiso de notificaciones a través de los ajustes de permisos de su dispositivo o de la aplicación. Si rechaza el permiso de notificaciones, la funcionalidad relacionada con las notificaciones puede no estar disponible o ser limitada.",
        "El permiso de notificaciones no otorga por sí mismo acceso a su ubicación física. Esta Política de Privacidad no indica un calendario, una frecuencia ni un mensaje de notificación concretos, porque la especificación de la aplicación no los documenta."
      ]
    },
    exportAndSharing: {
      heading: "Exportación y uso compartido iniciado por el usuario",
      paragraphs: [
        "La aplicación permite exportar un informe en formato PDF o XLSX. La exportación la inicia usted, para el informe o el mes que seleccione, y el informe se genera a partir de sus registros locales.",
        "Usted elige la aplicación o el servicio de destino mediante la funcionalidad para compartir de Android. La especificación de la aplicación no define ningún mecanismo por el cual los archivos exportados se envíen al desarrollador, y esta Política de Privacidad no describe ninguno.",
        "Una vez que comparte un archivo, la aplicación o el servicio receptor queda fuera del control de la aplicación, y las prácticas de privacidad de ese tercero pueden aplicarse a la información de ese archivo."
      ]
    },
    thirdPartyServices: {
      heading: "Servicios de terceros",
      paragraphs: [
        "La aplicación incluye un punto de acceso a donaciones para apoyar el desarrollo, que ofrece opciones externas como Saweria y Ko-fi. Se trata de servicios de terceros.",
        "Cuando utiliza ese punto de acceso, la aplicación abre el destino externo mediante el navegador o la funcionalidad para compartir de su plataforma, en lugar de gestionar el servicio dentro de la aplicación. Esos servicios no están controlados por el desarrollador y sus propias prácticas de privacidad pueden aplicarse cuando los visita o los utiliza.",
        "Esta Política de Privacidad no describe detalles de procesamiento de pagos, requisitos de cuenta, flujos de intercambio de datos ni el comportamiento analítico de esos servicios, porque la especificación de la aplicación no los documenta."
      ]
    },
    advertising: {
      heading: "Publicidad",
      paragraphs: [
        "Según la especificación actual de la aplicación, la aplicación no contiene publicidad como parte de su funcionalidad.",
        "Esta Política de Privacidad no hace más declaraciones sobre identificadores publicitarios o redes publicitarias, porque la especificación de la aplicación no los documenta."
      ]
    },
    analyticsAndTracking: {
      heading: "Analíticas y seguimiento",
      paragraphs: [
        "La especificación actual de la aplicación no documenta funcionalidad de analíticas, telemetría, fingerprinting, seguimiento o identificadores publicitarios en la aplicación.",
        "Por lo tanto, esta Política de Privacidad no describe ninguna de esas funcionalidades y no describe ningún servicio de seguimiento de terceros.",
        "Si en el futuro se añade a la aplicación funcionalidad de este tipo, esta Política de Privacidad se actualizará tal como se describe en la sección «Cambios en esta Política de Privacidad»."
      ]
    },
    accountRequirements: {
      heading: "Requisitos de cuenta",
      paragraphs: [
        "Según la especificación actual de la aplicación, no se requiere ninguna cuenta de usuario para la funcionalidad normal de finanzas personales. No hay registro, contraseña ni paso de inicio de sesión para el uso normal.",
        "Como no existe ninguna cuenta, esta Política de Privacidad no describe perfiles de cuenta, credenciales ni recuperación de cuentas."
      ]
    },
    dataSharingAndDisclosure: {
      heading: "Comunicación y divulgación de datos",
      paragraphs: [
        "En la arquitectura actual, sus registros financieros principales se almacenan localmente en su dispositivo. La especificación de la aplicación no documenta una base de datos financiera remota operada por el desarrollador y no documenta ningún mecanismo que transmita esos registros al desarrollador durante el uso normal.",
        "La información puede salir del entorno local de la aplicación cuando usted actúa de forma intencionada:"
      ],
      bullets: [
        "Exporta un informe y comparte el archivo resultante con una aplicación o un servicio que usted elige.",
        "Abre un servicio externo de terceros documentado desde la aplicación."
      ],
      afterParagraphs: [
        "Esta Política de Privacidad no describe ningún otro flujo de intercambio de datos, porque no hay ningún otro flujo documentado en la especificación de la aplicación."
      ]
    },
    dataRetention: {
      heading: "Conservación de datos",
      paragraphs: [
        "En la arquitectura actual, sus registros financieros principales se conservan en su propio dispositivo, y la especificación de la aplicación no define un periodo de conservación por parte del desarrollador para ellos.",
        "Como no se documenta ninguna base de datos financiera remota operada por el desarrollador, esta Política de Privacidad no indica un periodo de conservación numérico. Los archivos que exporta o comparte son copias separadas que existen fuera de la aplicación."
      ]
    },
    dataDeletion: {
      heading: "Eliminación de datos",
      paragraphs: [
        "Sus registros financieros principales se almacenan localmente en su dispositivo según la arquitectura actual, y la especificación de la aplicación no define una base de datos financiera remota operada por el desarrollador que conserve una copia de ellos.",
        "La especificación de la aplicación tampoco documenta una función específica de «eliminar todos los datos» dentro de la aplicación, por lo que esta Política de Privacidad no describe ningún flujo de eliminación concreto dentro de la aplicación ni ningún botón de eliminación.",
        "Los archivos que exporta o comparte son copias que usted creó y envió a un destino que eligió; esas copias existen fuera de la aplicación.",
        "Si en el futuro se añade a la aplicación una función específica de eliminación, esta Política de Privacidad se actualizará para describirla con precisión."
      ]
    },
    dataSecurity: {
      heading: "Seguridad de los datos",
      paragraphs: [
        "La aplicación almacena su información financiera principal localmente en su dispositivo. Dado que esos registros están en el dispositivo, cuidar el acceso al propio dispositivo ayuda a protegerlos, y cualquier persona con acceso a su dispositivo desbloqueado y a la aplicación podría ver los registros locales.",
        "Esta Política de Privacidad no afirma cifrado de extremo a extremo, seguridad garantizada, almacenamiento sin riesgos ni recuperación garantizada de los registros, porque la especificación de la aplicación no respalda esas afirmaciones."
      ]
    },
    childrensPrivacy: {
      heading: "Privacidad de los menores",
      paragraphs: [
        "La aplicación es una herramienta de finanzas personales y presupuesto. La especificación de la aplicación no describe la aplicación como un producto dirigido a menores y no se ha definido un umbral de edad para ella, por lo que esta Política de Privacidad no indica ninguno.",
        "La especificación de la aplicación no documenta un servicio operado por el desarrollador que recopile registros financieros de los usuarios; en la arquitectura actual esos registros se almacenan localmente en el dispositivo del usuario.",
        "Si en el futuro se define un público objetivo o un requisito de edad para la aplicación, esta Política de Privacidad se actualizará en consecuencia."
      ]
    },
    changesToPolicy: {
      heading: "Cambios en esta Política de Privacidad",
      paragraphs: [
        "Esta Política de Privacidad puede actualizarse cuando cambie la aplicación o su comportamiento relacionado con la privacidad.",
        "La fecha de entrada en vigor y la fecha de la última actualización se muestran en esta página. Si un cambio afecta de forma sustancial a cómo se trata la información, el contenido de esta página se actualizará de forma coherente con la especificación de la aplicación."
      ]
    },
    contact: {
      heading: "Contacto",
      paragraphs: [
        "Si tiene alguna pregunta sobre esta Política de Privacidad o sobre el comportamiento de la aplicación relacionado con la privacidad, puede ponerse en contacto con el desarrollador mediante los datos que figuran a continuación."
      ]
    }
  }
};
