/*
 * Bahasa Melayu — kandungan Dasar Privasi.
 * Struktur dan batasan fakta mengikut js/locales/en.js (sumber kanonik).
 */
window.POLICY_I18N = window.POLICY_I18N || {};
window.POLICY_I18N.ms = {
  reviewed: true,
  appName: "Bajet Saya",
  ui: {
    title: "Dasar Privasi",
    description: "Dasar Privasi untuk {appName}, aplikasi kewangan dan belanjawan peribadi untuk Android.",
    subtitle: "Bagaimana maklumat dikendalikan oleh aplikasi ini",
    effective: "Tarikh berkuat kuasa",
    updated: "Kemas kini terakhir",
    languageLabel: "Bahasa",
    tocTitle: "Kandungan",
    skipToContent: "Langkau ke kandungan",
    backToTop: "Kembali ke atas",
    developerLabel: "Pembangun",
    emailLabel: "E-mel",
    websiteLabel: "Laman web",
    externalLinksLabel: "Perkhidmatan luar yang didokumenkan",
    externalLinkHint: "membuka perkhidmatan luar",
    footerNote: "Laman ini ialah halaman statik. Laman ini tidak menggunakan analitik, pengiklanan atau skrip penjejak pihak ketiga.",
    footerIdentity: "Dasar Privasi untuk {appName}, disediakan oleh {developerName}.",
    gateTitle: "Halaman ini belum sedia untuk diterbitkan.",
    gateMessage: "{placeholders} nilai identiti belum dimuktamadkan dan {translations} terjemahan belum disemak.",
    languageChanged: "Bahasa ditukar kepada {language}.",
    confirmSectionTitle: "Pengesahan",
    confirmIntro: "Jika anda membaca Dasar Privasi ini di dalam aplikasi, anda boleh mengesahkan bahawa anda telah membacanya. Butang pengesahan akan tersedia selepas anda mencapai akhir dasar.",
    confirmButton: "Faham",
    confirmWaiting: "Mengantar pengesahan anda ke aplikasi…",
    confirmSuccess: "Pengesahan anda telah disimpan oleh aplikasi.",
    confirmFailure: "Aplikasi tidak dapat menyimpan pengesahan anda. Cuba lagi.",
    confirmTimeout: "Aplikasi belum merespons. Halaman ini tidak dapat mengesahkan sama ada pengesahan anda disimpan. Cuba lagi.",
    confirmAppNotReady: "Aplikasi belum mengesahkan bahawa siap, jadi pengesahan tidak dapat dihantar. Halaman ini tidak menyimpan apa-apa.",
    confirmBrowserNote: "Halaman ini dibuka di perisian pelayar biasa. Pengesahan bahawa anda telah membaca Dasar Privasi ini hanya boleh dicatat di dalam aplikasi itu sendiri, buka halaman ini di dalam aplikasi untuk mengesahkan. Laman web ini tidak menyimpan sebarang pengesahan."
  },
  sections: {
    introduction: {
      heading: "Pengenalan",
      paragraphs: [
        "Dasar Privasi ini menerangkan bagaimana maklumat dikendalikan oleh {appName}, aplikasi kewangan dan belanjawan peribadi untuk Android yang disediakan oleh {developerName}.",
        "Dasar ini merangkumi maklumat yang boleh anda masukkan ke dalam aplikasi, tempat maklumat itu disimpan, bila maklumat boleh keluar daripada aplikasi kerana tindakan anda sendiri, destinasi luar yang boleh dibuka oleh aplikasi, serta cara menghubungi pembangun.",
        "Dasar Privasi ini terpakai kepada aplikasi dan laman web ini. Dasar ini tidak terpakai kepada perkhidmatan luar yang anda buka daripada aplikasi."
      ]
    },
    informationYouProvide: {
      heading: "Maklumat yang Anda Berikan",
      paragraphs: [
        "Anda sendiri boleh memasukkan maklumat kewangan peribadi ke dalam aplikasi. Spesifikasi aplikasi menyokong jenis maklumat berikut:"
      ],
      bullets: [
        "Jumlah belanjawan dan baki, seperti belanjawan atau baki bulanan yang digunakan oleh aplikasi",
        "Rekod perbelanjaan yang anda masukkan",
        "Kategori perbelanjaan yang diberikan kepada rekod tersebut",
        "Nama sumber dana dan jenis setiap sumber",
        "Baki semasa setiap sumber dana",
        "Pemindahan dana antara sumber dana anda sendiri",
        "Maklumat laporan bulanan yang dijana daripada rekod di atas"
      ],
      afterParagraphs: [
        "Dasar Privasi ini tidak menerangkan kategori maklumat peribadi yang lain, kerana spesifikasi aplikasi tidak mentakrifkannya. Khususnya, aplikasi tidak diterangkan sebagai mengumpul kredensial akaun, kenalan, mesej, foto, rakaman atau data seumpamanya."
      ]
    },
    localStorage: {
      heading: "Storan Setempat",
      paragraphs: [
        "Dalam seni bina semasa, rekod kewangan teras aplikasi disimpan secara setempat pada peranti anda. Pelaksanaan semasa menggunakan SQLite untuk storan aplikasi setempat.",
        "Storan setempat berbeza daripada storan awan. Rekod anda disimpan pada peranti itu sendiri, dan aplikasi tidak memerlukan pangkalan data kewangan jauh yang dikendalikan pembangun untuk fungsi pengurusan kewangan biasa. Aplikasi juga tidak memerlukan akaun pengguna untuk penggunaan biasa.",
        "Kerana anda boleh mengeksport dan berkongsi maklumat sendiri, dan kerana aplikasi boleh membuka destinasi luar, Dasar Privasi ini tidak menyatakan bahawa maklumat tidak akan pernah keluar daripada peranti anda."
      ]
    },
    deviceDateTime: {
      heading: "Tarikh dan Masa Peranti",
      paragraphs: [
        "Aplikasi menggunakan tarikh dan masa setempat peranti anda untuk tingkah laku yang bergantung pada tarikh semasa, seperti menentukan bulan semasa, memberikan tarikh pada rekod, laporan bulanan, serta tingkah laku pemberitahuan atau peringatan berdasarkan tarikh jika berkenaan.",
        "Penggunaan masa setempat peranti tidak bermakna aplikasi menggunakan GPS atau perkhidmatan lokasi fizikal untuk menentukan masa semasa. Dasar Privasi ini tidak menerangkan penggunaan masa peranti sebagai penjejakan lokasi."
      ]
    },
    notifications: {
      heading: "Pemberitahuan",
      paragraphs: [
        "Aplikasi menyertakan fungsi pemberitahuan. Pada versi Android yang memerlukan kebenaran pemberitahuan, aplikasi mungkin meminta kebenaran POST_NOTIFICATIONS. Kebenaran itu digunakan untuk fungsi pemberitahuan dan peringatan aplikasi.",
        "Anda boleh mengawal kebenaran pemberitahuan melalui tetapan kebenaran peranti atau aplikasi. Jika anda menolak kebenaran pemberitahuan, fungsi berkaitan pemberitahuan mungkin tidak tersedia atau terhad.",
        "Kebenaran pemberitahuan tidak dengan sendirinya memberikan akses kepada lokasi fizikal anda. Dasar Privasi ini tidak menyatakan jadual, kekerapan atau mesej pemberitahuan tertentu, kerana spesifikasi aplikasi tidak mendokumenkannya."
      ]
    },
    exportAndSharing: {
      heading: "Eksport dan Perkongsian oleh Pengguna",
      paragraphs: [
        "Aplikasi menyokong eksport laporan sebagai PDF atau XLSX. Eksport dimulakan oleh anda, untuk laporan atau bulan yang anda pilih, dan laporan dijana daripada rekod setempat anda.",
        "Anda memilih aplikasi atau perkhidmatan destinasi melalui fungsi perkongsian Android. Spesifikasi aplikasi tidak mentakrifkan mekanisme yang menghantar fail eksport kepada pembangun, dan Dasar Privasi ini tidak menerangkan sebarang mekanisme sedemikian.",
        "Selepas anda berkongsi fail, aplikasi atau perkhidmatan penerima berada di luar kawalan aplikasi, dan amalan privasi pihak tersebut mungkin terpakai kepada maklumat dalam fail itu."
      ]
    },
    thirdPartyServices: {
      heading: "Perkhidmatan Pihak Ketiga",
      paragraphs: [
        "Aplikasi menyertakan pintu sumbangan untuk menyokong pembangunan, yang menyediakan pilihan luar seperti Saweria dan Ko-fi. Kedua-duanya ialah perkhidmatan pihak ketiga.",
        "Apabila anda menggunakan pintu itu, aplikasi membuka destinasi luar menggunakan pelayar atau fungsi perkongsian platform anda, bukan mengendalikan perkhidmatan itu di dalam aplikasi. Perkhidmatan tersebut tidak dikawal oleh pembangun, dan amalan privasi mereka sendiri mungkin terpakai apabila anda melawati atau menggunakannya.",
        "Dasar Privasi ini tidak menerangkan butiran pemprosesan pembayaran, keperluan akaun, aliran perkongsian data atau tingkah laku analitik perkhidmatan tersebut, kerana spesifikasi aplikasi tidak mendokumenkannya."
      ]
    },
    advertising: {
      heading: "Pengiklanan",
      paragraphs: [
        "Menurut spesifikasi aplikasi semasa, aplikasi tidak mengandungi iklan sebagai sebahagian daripada fungsinya.",
        "Dasar Privasi ini tidak membuat pernyataan lanjut mengenai pengecam pengiklanan atau rangkaian pengiklanan, kerana spesifikasi aplikasi tidak mendokumenkannya."
      ]
    },
    analyticsAndTracking: {
      heading: "Analitik dan Penjejakan",
      paragraphs: [
        "Spesifikasi aplikasi semasa tidak mendokumenkan fungsi analitik, telemetri, cap jari, penjejakan atau pengecam pengiklanan dalam aplikasi.",
        "Oleh itu Dasar Privasi ini tidak menerangkan sebarang fungsi sedemikian, dan tidak menerangkan mana-mana perkhidmatan penjejakan pihak ketiga.",
        "Jika fungsi seumpama ini ditambah pada aplikasi pada masa hadapan, Dasar Privasi ini akan dikemas kini seperti yang diterangkan dalam bahagian “Perubahan kepada Dasar Privasi Ini”."
      ]
    },
    accountRequirements: {
      heading: "Keperluan Akaun",
      paragraphs: [
        "Menurut spesifikasi aplikasi semasa, tiada akaun pengguna diperlukan untuk fungsi kewangan peribadi biasa. Tiada pendaftaran, kata laluan atau langkah log masuk untuk penggunaan biasa.",
        "Kerana tiada akaun wujud, Dasar Privasi ini tidak menerangkan profil akaun, kredensial atau pemulihan akaun."
      ]
    },
    dataSharingAndDisclosure: {
      heading: "Perkongsian dan Pendedahan Data",
      paragraphs: [
        "Dalam seni bina semasa, rekod kewangan teras anda disimpan secara setempat pada peranti anda. Spesifikasi aplikasi tidak mendokumenkan pangkalan data kewangan jauh yang dikendalikan pembangun, dan tidak mendokumenkan mekanisme yang menghantar rekod tersebut kepada pembangun semasa penggunaan biasa.",
        "Maklumat boleh keluar daripada persekitaran setempat aplikasi apabila anda bertindak secara sengaja:"
      ],
      bullets: [
        "Anda mengeksport laporan dan berkongsi fail hasilnya dengan aplikasi atau perkhidmatan pilihan anda.",
        "Anda membuka perkhidmatan pihak ketiga luar yang didokumenkan daripada aplikasi."
      ],
      afterParagraphs: [
        "Dasar Privasi ini tidak menerangkan sebarang aliran perkongsian data yang lain, kerana tiada aliran lain didokumenkan dalam spesifikasi aplikasi."
      ]
    },
    dataRetention: {
      heading: "Pengekalan Data",
      paragraphs: [
        "Dalam seni bina semasa, rekod kewangan teras anda disimpan pada peranti anda sendiri, dan spesifikasi aplikasi tidak menetapkan tempoh pengekalan di pihak pembangun untuk rekod tersebut.",
        "Kerana tiada pangkalan data kewangan jauh yang dikendalikan pembangun didokumenkan, Dasar Privasi ini tidak menyatakan tempoh pengekalan dalam bentuk angka. Fail yang anda eksport atau kongsi ialah salinan berasingan yang berada di luar aplikasi."
      ]
    },
    dataDeletion: {
      heading: "Pemadaman Data",
      paragraphs: [
        "Rekod kewangan teras anda disimpan secara setempat pada peranti anda dalam seni bina semasa, dan spesifikasi aplikasi tidak mentakrifkan pangkalan data kewangan jauh yang dikendalikan pembangun yang menyimpan salinannya.",
        "Spesifikasi aplikasi juga tidak mendokumenkan ciri khusus “padam semua data” di dalam aplikasi, jadi Dasar Privasi ini tidak menerangkan aliran pemadaman tertentu di dalam aplikasi atau butang pemadaman.",
        "Fail yang anda eksport atau kongsi ialah salinan yang anda cipta dan hantar ke destinasi pilihan anda; salinan tersebut berada di luar aplikasi.",
        "Jika ciri pemadaman khusus ditambah pada aplikasi pada masa hadapan, Dasar Privasi ini akan dikemas kini untuk menerangkannya dengan tepat."
      ]
    },
    dataSecurity: {
      heading: "Keselamatan Data",
      paragraphs: [
        "Aplikasi menyimpan maklumat kewangan teras anda secara setempat pada peranti anda. Kerana rekod tersebut berada pada peranti, menjaga akses kepada peranti itu sendiri membantu melindunginya, dan sesiapa yang mempunyai akses kepada peranti anda yang tidak dikunci serta kepada aplikasi mungkin boleh melihat rekod setempat tersebut.",
        "Dasar Privasi ini tidak menuntut penyulitan hujung ke hujung, keselamatan terjamin, storan tanpa risiko atau pemulihan rekod terjamin, kerana spesifikasi aplikasi tidak menyokong tuntutan tersebut."
      ]
    },
    childrensPrivacy: {
      heading: "Privasi Kanak-kanak",
      paragraphs: [
        "Aplikasi ini ialah alat kewangan peribadi dan belanjawan. Spesifikasi aplikasi tidak menerangkan aplikasi ini sebagai produk yang ditujukan kepada kanak-kanak, dan tiada had umur ditetapkan untuknya, jadi Dasar Privasi ini tidak menyatakan sebarang had umur.",
        "Spesifikasi aplikasi tidak mendokumenkan perkhidmatan yang dikendalikan pembangun yang mengumpul rekod kewangan daripada pengguna; dalam seni bina semasa rekod tersebut disimpan secara setempat pada peranti pengguna.",
        "Jika audiens sasaran atau keperluan umur ditetapkan untuk aplikasi ini pada masa hadapan, Dasar Privasi ini akan dikemas kini selaras dengannya."
      ]
    },
    changesToPolicy: {
      heading: "Perubahan kepada Dasar Privasi Ini",
      paragraphs: [
        "Dasar Privasi ini boleh dikemas kini apabila aplikasi atau tingkah laku berkaitan privasinya berubah.",
        "Tarikh berkuat kuasa dan tarikh kemas kini terakhir dipaparkan pada halaman ini. Jika sesuatu perubahan memberi kesan material kepada cara maklumat dikendalikan, kandungan halaman ini akan dikemas kini selaras dengan spesifikasi aplikasi."
      ]
    },
    contact: {
      heading: "Hubungi",
      paragraphs: [
        "Jika anda mempunyai pertanyaan tentang Dasar Privasi ini atau tentang tingkah laku aplikasi berkaitan privasi, anda boleh menghubungi pembangun menggunakan butiran di bawah."
      ]
    }
  }
};
