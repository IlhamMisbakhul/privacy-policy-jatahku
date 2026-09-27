/*
 * Português — conteúdo da Política de Privacidade.
 * Estrutura e limites factuais segundo js/locales/en.js (fonte canónica).
 */
window.POLICY_I18N = window.POLICY_I18N || {};
window.POLICY_I18N.pt = {
  reviewed: true,
  appName: "Meu Orçamento",
  ui: {
    title: "Política de Privacidade",
    description: "Política de Privacidade do {appName}, uma aplicação de finanças pessoais e orçamento para Android.",
    subtitle: "Como as informações são tratadas por esta aplicação",
    effective: "Data de entrada em vigor",
    updated: "Última atualização",
    languageLabel: "Idioma",
    tocTitle: "Índice",
    skipToContent: "Saltar para o conteúdo",
    backToTop: "Voltar ao topo",
    developerLabel: "Programador",
    emailLabel: "E-mail",
    websiteLabel: "Website",
    externalLinksLabel: "Serviços externos documentados",
    externalLinkHint: "abre um serviço externo",
    footerNote: "Este website é uma página estática. Não utiliza análises, publicidade ou scripts de rastreamento de terceiros.",
    footerIdentity: "Política de Privacidade do {appName}, fornecida por {developerName}.",
    gateTitle: "Esta página ainda não está pronta para publicação.",
    gateMessage: "{placeholders} valor(es) de identidade ainda não estão definidos e {translations} tradução(ões) ainda não foram revistas.",
    languageChanged: "Idioma alterado para {language}."
  },
  sections: {
    introduction: {
      heading: "Introdução",
      paragraphs: [
        "Esta Política de Privacidade explica como as informações são tratadas por {appName}, uma aplicação de finanças pessoais e orçamento para Android fornecida por {developerName}.",
        "Abrange as informações que pode introduzir na aplicação, onde são armazenadas, quando podem sair da aplicação devido a uma ação sua, que destinos externos a aplicação pode abrir e como pode contactar o programador.",
        "Esta Política de Privacidade aplica-se à aplicação e a este website. Não se aplica a serviços externos que abra a partir da aplicação."
      ]
    },
    informationYouProvide: {
      heading: "Informações que fornece",
      paragraphs: [
        "Pode introduzir pessoalmente informações financeiras pessoais na aplicação. A especificação da aplicação suporta estes tipos de informação:"
      ],
      bullets: [
        "Montantes de orçamento e de saldo, como o orçamento ou saldo mensal utilizado pela aplicação",
        "Registos de despesas que introduz",
        "Categorias de despesa atribuídas a esses registos",
        "Nomes das fontes de dinheiro e o tipo de cada fonte",
        "Saldos restantes de cada fonte de dinheiro",
        "Transferências de fundos entre as suas próprias fontes de dinheiro",
        "As informações do relatório mensal geradas a partir dos registos acima"
      ],
      afterParagraphs: [
        "Esta Política de Privacidade não descreve outras categorias de informações pessoais, porque a especificação da aplicação não as define. Em particular, a aplicação não é descrita como recolhendo credenciais de conta, contactos, mensagens, fotografias, gravações ou dados semelhantes."
      ]
    },
    localStorage: {
      heading: "Armazenamento local",
      paragraphs: [
        "Na arquitetura atual, os registos financeiros principais da aplicação são armazenados localmente no seu dispositivo. A implementação atual utiliza SQLite para o armazenamento local da aplicação.",
        "O armazenamento local é diferente do armazenamento na nuvem. Os seus registos permanecem no próprio dispositivo, e a aplicação não requer uma base de dados financeira remota operada pelo programador para o normal funcionamento de gestão financeira. A aplicação também não requer uma conta de utilizador para utilização normal.",
        "Como pode exportar e partilhar informações por si mesmo, e como a aplicação pode abrir destinos externos, esta Política de Privacidade não afirma que as informações nunca possam sair do seu dispositivo."
      ]
    },
    deviceDateTime: {
      heading: "Data e hora do dispositivo",
      paragraphs: [
        "A aplicação utiliza a data e a hora locais do seu dispositivo para comportamentos que dependem da data atual, como determinar o mês atual, atribuir datas aos registos, relatórios mensais e comportamentos de notificação ou lembrete baseados em datas, quando aplicável.",
        "A utilização da hora local do dispositivo não significa que a aplicação utilize GPS ou serviços de localização física para determinar a hora atual. Esta Política de Privacidade não descreve a utilização da hora do dispositivo como rastreamento de localização."
      ]
    },
    notifications: {
      heading: "Notificações",
      paragraphs: [
        "A aplicação inclui funcionalidade de notificações. Nas versões do Android em que a permissão de notificações é necessária, a aplicação pode solicitar a permissão POST_NOTIFICATIONS. Essa permissão é utilizada para a funcionalidade de notificações e lembretes da aplicação.",
        "Pode controlar a permissão de notificações através das definições de permissões do dispositivo ou da aplicação. Se recusar a permissão de notificações, a funcionalidade relacionada com notificações pode ficar indisponível ou limitada.",
        "A permissão de notificações não concede, por si só, acesso à sua localização física. Esta Política de Privacidade não indica um calendário, uma frequência ou uma mensagem de notificação específicos, porque a especificação da aplicação não os documenta."
      ]
    },
    exportAndSharing: {
      heading: "Exportação e partilha iniciada pelo utilizador",
      paragraphs: [
        "A aplicação permite exportar um relatório em PDF ou XLSX. A exportação é iniciada por si, para o relatório ou o mês que selecionar, e o relatório é gerado a partir dos seus registos locais.",
        "É o utilizador que escolhe a aplicação ou o serviço de destino através da funcionalidade de partilha do Android. A especificação da aplicação não define qualquer mecanismo pelo qual os ficheiros exportados sejam enviados ao programador, e esta Política de Privacidade não descreve nenhum.",
        "Depois de partilhar um ficheiro, a aplicação ou o serviço recetor fica fora do controlo da aplicação, e as práticas de privacidade desse terceiro podem aplicar-se às informações contidas nesse ficheiro."
      ]
    },
    thirdPartyServices: {
      heading: "Serviços de terceiros",
      paragraphs: [
        "A aplicação inclui um ponto de acesso a donativos para apoiar o desenvolvimento, que oferece opções externas como Saweria e Ko-fi. Trata-se de serviços de terceiros.",
        "Quando utiliza esse ponto de acesso, a aplicação abre o destino externo através do navegador ou da funcionalidade de partilha da plataforma, em vez de tratar o serviço dentro da aplicação. Esses serviços não são controlados pelo programador e as suas próprias práticas de privacidade podem aplicar-se quando os visita ou utiliza.",
        "Esta Política de Privacidade não descreve detalhes de processamento de pagamentos, requisitos de conta, fluxos de partilha de dados ou comportamentos de análise desses serviços, porque a especificação da aplicação não os documenta."
      ]
    },
    advertising: {
      heading: "Publicidade",
      paragraphs: [
        "De acordo com a especificação atual da aplicação, a aplicação não contém publicidade como parte da sua funcionalidade.",
        "Esta Política de Privacidade não faz mais declarações sobre identificadores publicitários ou redes publicitárias, porque a especificação da aplicação não os documenta."
      ]
    },
    analyticsAndTracking: {
      heading: "Análises e rastreamento",
      paragraphs: [
        "A especificação atual da aplicação não documenta funcionalidade de análises, telemetria, fingerprinting, rastreamento ou identificadores publicitários na aplicação.",
        "Por esse motivo, esta Política de Privacidade não descreve qualquer dessas funcionalidades e não descreve qualquer serviço de rastreamento de terceiros.",
        "Se no futuro for adicionada à aplicação funcionalidade deste tipo, esta Política de Privacidade será atualizada conforme descrito na secção «Alterações a esta Política de Privacidade»."
      ]
    },
    accountRequirements: {
      heading: "Requisitos de conta",
      paragraphs: [
        "De acordo com a especificação atual da aplicação, não é necessária qualquer conta de utilizador para a funcionalidade normal de finanças pessoais. Não existem registo, palavra-passe ou passo de início de sessão para a utilização normal.",
        "Como não existe qualquer conta, esta Política de Privacidade não descreve perfis de conta, credenciais ou recuperação de conta."
      ]
    },
    dataSharingAndDisclosure: {
      heading: "Partilha e divulgação de dados",
      paragraphs: [
        "Na arquitetura atual, os seus registos financeiros principais são armazenados localmente no seu dispositivo. A especificação da aplicação não documenta uma base de dados financeira remota operada pelo programador e não documenta qualquer mecanismo que transmita esses registos ao programador durante a utilização normal.",
        "As informações podem sair do ambiente local da aplicação quando o utilizador age intencionalmente:"
      ],
      bullets: [
        "O utilizador exporta um relatório e partilha o ficheiro resultante com uma aplicação ou serviço à sua escolha.",
        "O utilizador abre, a partir da aplicação, um serviço externo de terceiros documentado."
      ],
      afterParagraphs: [
        "Esta Política de Privacidade não descreve qualquer outro fluxo de partilha de dados, porque nenhum outro fluxo está documentado na especificação da aplicação."
      ]
    },
    dataRetention: {
      heading: "Conservação de dados",
      paragraphs: [
        "Na arquitetura atual, os seus registos financeiros principais permanecem no seu próprio dispositivo, e a especificação da aplicação não define um período de conservação da responsabilidade do programador para esses registos.",
        "Como não está documentada qualquer base de dados financeira remota operada pelo programador, esta Política de Privacidade não indica um período de conservação numérico. Os ficheiros que exporta ou partilha são cópias separadas que existem fora da aplicação."
      ]
    },
    dataDeletion: {
      heading: "Eliminação de dados",
      paragraphs: [
        "Os seus registos financeiros principais são armazenados localmente no seu dispositivo na arquitetura atual, e a especificação da aplicação não define uma base de dados financeira remota operada pelo programador que guarde uma cópia deles.",
        "A especificação da aplicação também não documenta uma função dedicada «eliminar todos os dados» dentro da aplicação, pelo que esta Política de Privacidade não descreve um fluxo de eliminação específico dentro da aplicação nem um botão de eliminação.",
        "Os ficheiros que exporta ou partilha são cópias que criou e enviou para um destino à sua escolha; essas cópias existem fora da aplicação.",
        "Se no futuro for adicionada à aplicação uma função dedicada de eliminação, esta Política de Privacidade será atualizada para a descrever com exatidão."
      ]
    },
    dataSecurity: {
      heading: "Segurança dos dados",
      paragraphs: [
        "A aplicação armazena as suas informações financeiras principais localmente no seu dispositivo. Como esses registos estão no dispositivo, cuidar do acesso ao próprio dispositivo ajuda a protegê-los, e qualquer pessoa com acesso ao seu dispositivo desbloqueado e à aplicação pode conseguir ver os registos locais.",
        "Esta Política de Privacidade não afirma encriptação ponto a ponto, segurança garantida, armazenamento sem risco ou recuperação garantida dos registos, porque a especificação da aplicação não sustenta essas afirmações."
      ]
    },
    childrensPrivacy: {
      heading: "Privacidade de menores",
      paragraphs: [
        "A aplicação é uma ferramenta de finanças pessoais e orçamento. A especificação da aplicação não descreve a aplicação como um produto dirigido a menores e não foi definido qualquer limite de idade para a mesma, pelo que esta Política de Privacidade não indica nenhum.",
        "A especificação da aplicação não documenta um serviço operado pelo programador que recolha registos financeiros dos utilizadores; na arquitetura atual esses registos são armazenados localmente no dispositivo do utilizador.",
        "Se no futuro forem definidos um público-alvo ou um requisito de idade para a aplicação, esta Política de Privacidade será atualizada em conformidade."
      ]
    },
    changesToPolicy: {
      heading: "Alterações a esta Política de Privacidade",
      paragraphs: [
        "Esta Política de Privacidade pode ser atualizada quando a aplicação ou o seu comportamento relacionado com a privacidade mudar.",
        "A data de entrada em vigor e a data da última atualização são apresentadas nesta página. Se uma alteração afetar de forma material a maneira como as informações são tratadas, o conteúdo desta página será atualizado em conformidade com a especificação da aplicação."
      ]
    },
    contact: {
      heading: "Contacto",
      paragraphs: [
        "Se tiver alguma questão sobre esta Política de Privacidade ou sobre o comportamento da aplicação relacionado com a privacidade, pode contactar o programador através dos dados indicados abaixo."
      ]
    }
  }
};
