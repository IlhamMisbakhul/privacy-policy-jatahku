/*
 * Bahasa Indonesia — konten Kebijakan Privasi.
 * Mengikuti struktur dan batasan fakta js/locales/en.js (sumber kanonik).
 * "reviewed" adalah bagian dari publication gate di js/config.js.
 */
window.POLICY_I18N = window.POLICY_I18N || {};
window.POLICY_I18N.id = {
  reviewed: true,
  appName: "JatahKu",
  ui: {
    title: "Kebijakan Privasi",
    description: "Kebijakan Privasi untuk {appName}, aplikasi keuangan dan anggaran pribadi untuk Android.",
    subtitle: "Bagaimana informasi ditangani oleh aplikasi ini",
    effective: "Tanggal berlaku",
    updated: "Terakhir diperbarui",
    languageLabel: "Bahasa",
    tocTitle: "Daftar isi",
    skipToContent: "Lewati ke konten",
    backToTop: "Kembali ke atas",
    developerLabel: "Pengembang",
    emailLabel: "Email",
    websiteLabel: "Situs web",
    externalLinksLabel: "Layanan eksternal yang terdokumentasi",
    externalLinkHint: "membuka layanan eksternal",
    footerNote: "Situs ini adalah halaman statis. Situs ini tidak menggunakan analitik, iklan, atau skrip pelacak pihak ketiga.",
    footerIdentity: "Kebijakan Privasi untuk {appName}, disediakan oleh {developerName}.",
    gateTitle: "Halaman ini belum siap dipublikasikan.",
    gateMessage: "{placeholders} nilai identitas belum difinalkan dan {translations} terjemahan belum ditinjau.",
    languageChanged: "Bahasa diubah ke {language}.",
    confirmSectionTitle: "Konfirmasi",
    confirmIntro: "Jika Anda membaca Kebijakan Privasi ini di dalam aplikasi, Anda dapat mengonfirmasi bahwa Anda telah membacanya. Tombol konfirmasi akan tersedia setelah Anda mencapai akhir kebijakan.",
    confirmButton: "Mengerti",
    confirmWaiting: "Mengirim konfirmasi Anda ke aplikasi…",
    confirmSuccess: "Konfirmasi Anda telah disimpan oleh aplikasi.",
    confirmFailure: "Aplikasi tidak dapat menyimpan konfirmasi Anda. Coba lagi.",
    confirmTimeout: "Aplikasi belum merespons. Halaman ini tidak dapat mengonfirmasi apakah konfirmasi Anda tersimpan. Coba lagi.",
    confirmAppNotReady: "Aplikasi belum mengonfirmasi bahwa siap, jadi konfirmasi tidak dapat dikirim. Halaman ini tidak menyimpan apa pun.",
    confirmBrowserNote: "Halaman ini dibuka di browser biasa. Konfirmasi bahwa Anda telah membaca Kebijakan Privasi ini hanya dapat dicatat di dalam aplikasi itu sendiri, buka halaman ini di dalam aplikasi untuk mengonfirmasi. Situs web ini tidak menyimpan konfirmasi apa pun."
  },
  sections: {
    introduction: {
      heading: "Pendahuluan",
      paragraphs: [
        "Kebijakan Privasi ini menjelaskan bagaimana informasi ditangani oleh {appName}, aplikasi keuangan dan anggaran pribadi untuk Android yang disediakan oleh {developerName}.",
        "Kebijakan ini mencakup informasi yang dapat Anda masukkan ke dalam aplikasi, tempat informasi itu disimpan, kapan informasi dapat keluar dari aplikasi karena tindakan yang Anda lakukan sendiri, tujuan eksternal apa saja yang dapat dibuka aplikasi, serta cara menghubungi pengembang.",
        "Kebijakan Privasi ini berlaku untuk aplikasi dan situs web ini. Kebijakan ini tidak berlaku untuk layanan eksternal yang Anda buka dari aplikasi."
      ]
    },
    informationYouProvide: {
      heading: "Informasi yang Anda Berikan",
      paragraphs: [
        "Anda sendiri dapat memasukkan informasi keuangan pribadi ke dalam aplikasi. Spesifikasi aplikasi mendukung jenis informasi berikut:"
      ],
      bullets: [
        "Jumlah anggaran dan saldo, seperti anggaran atau saldo bulanan yang digunakan aplikasi",
        "Catatan pengeluaran yang Anda input",
        "Kategori pengeluaran yang diberikan pada catatan tersebut",
        "Nama sumber dana dan jenis setiap sumber",
        "Sisa saldo setiap sumber dana",
        "Transfer dana antar sumber dana Anda sendiri",
        "Informasi laporan bulanan yang dihasilkan dari catatan di atas"
      ],
      afterParagraphs: [
        "Kebijakan Privasi ini tidak menjelaskan kategori informasi pribadi lain, karena spesifikasi aplikasi tidak mendefinisikannya. Secara khusus, aplikasi tidak dijelaskan sebagai mengumpulkan kredensial akun, kontak, pesan, foto, rekaman, atau data serupa."
      ]
    },
    localStorage: {
      heading: "Penyimpanan Lokal",
      paragraphs: [
        "Dalam arsitektur saat ini, catatan keuangan inti aplikasi disimpan secara lokal di perangkat Anda. Implementasi saat ini menggunakan SQLite untuk penyimpanan aplikasi lokal.",
        "Penyimpanan lokal berbeda dari penyimpanan cloud. Catatan Anda disimpan di perangkat itu sendiri, dan aplikasi tidak memerlukan basis data keuangan jarak jauh yang dioperasikan pengembang untuk fungsi pengelolaan keuangan normalnya. Aplikasi juga tidak memerlukan akun pengguna untuk penggunaan normal.",
        "Karena Anda dapat mengekspor dan membagikan informasi sendiri, dan karena aplikasi dapat membuka tujuan eksternal, Kebijakan Privasi ini tidak menyatakan bahwa informasi tidak akan pernah dapat keluar dari perangkat Anda."
      ]
    },
    deviceDateTime: {
      heading: "Tanggal dan Waktu Perangkat",
      paragraphs: [
        "Aplikasi menggunakan tanggal dan waktu lokal perangkat Anda untuk perilaku yang bergantung pada tanggal saat ini, seperti menentukan bulan berjalan, memberi tanggal pada catatan, laporan bulanan, serta perilaku notifikasi atau pengingat berbasis tanggal bila berlaku.",
        "Penggunaan waktu lokal perangkat tidak berarti aplikasi menggunakan GPS atau layanan lokasi fisik untuk menentukan waktu saat ini. Kebijakan Privasi ini tidak menggambarkan penggunaan waktu perangkat sebagai pelacakan lokasi."
      ]
    },
    notifications: {
      heading: "Notifikasi",
      paragraphs: [
        "Aplikasi menyertakan fungsi notifikasi. Pada versi Android yang mewajibkan izin notifikasi, aplikasi dapat meminta izin POST_NOTIFICATIONS. Izin tersebut digunakan untuk fungsi notifikasi dan pengingat aplikasi.",
        "Anda dapat mengatur izin notifikasi melalui pengaturan izin pada perangkat atau aplikasi. Jika Anda menolak izin notifikasi, fungsi terkait notifikasi mungkin tidak tersedia atau terbatas.",
        "Izin notifikasi tidak dengan sendirinya memberikan akses ke lokasi fisik Anda. Kebijakan Privasi ini tidak menyebutkan jadwal, frekuensi, atau pesan notifikasi tertentu, karena spesifikasi aplikasi tidak mendokumentasikannya."
      ]
    },
    exportAndSharing: {
      heading: "Ekspor dan Pembagian oleh Pengguna",
      paragraphs: [
        "Aplikasi mendukung ekspor laporan dalam format PDF atau XLSX. Ekspor dimulai oleh Anda, untuk laporan atau bulan yang Anda pilih, dan laporan dihasilkan dari catatan lokal Anda.",
        "Anda memilih aplikasi atau layanan tujuan melalui fungsi berbagi Android. Spesifikasi aplikasi tidak mendefinisikan mekanisme apa pun yang mengirimkan berkas hasil ekspor kepada pengembang, dan Kebijakan Privasi ini tidak menjelaskan mekanisme seperti itu.",
        "Setelah Anda membagikan sebuah berkas, aplikasi atau layanan penerima berada di luar kendali aplikasi, dan praktik privasi pihak tersebut dapat berlaku atas informasi dalam berkas itu."
      ]
    },
    thirdPartyServices: {
      heading: "Layanan Pihak Ketiga",
      paragraphs: [
        "Aplikasi menyertakan pintu donasi untuk mendukung pengembangan, yang menyediakan opsi eksternal seperti Saweria dan Ko-fi. Keduanya adalah layanan pihak ketiga.",
        "Saat Anda menggunakan pintu tersebut, aplikasi membuka tujuan eksternal menggunakan browser atau fungsi berbagi pada platform Anda, bukan menangani layanan itu di dalam aplikasi. Layanan tersebut tidak dikendalikan oleh pengembang, dan praktik privasi mereka sendiri dapat berlaku ketika Anda mengunjungi atau menggunakannya.",
        "Kebijakan Privasi ini tidak menjelaskan rincian pemrosesan pembayaran, persyaratan akun, alur pembagian data, atau perilaku analitik layanan tersebut, karena spesifikasi aplikasi tidak mendokumentasikannya."
      ]
    },
    advertising: {
      heading: "Iklan",
      paragraphs: [
        "Menurut spesifikasi aplikasi saat ini, aplikasi tidak memuat iklan sebagai bagian dari fungsinya.",
        "Kebijakan Privasi ini tidak membuat pernyataan lebih lanjut mengenai pengenal iklan atau jaringan iklan, karena spesifikasi aplikasi tidak mendokumentasikannya."
      ]
    },
    analyticsAndTracking: {
      heading: "Analitik dan Pelacakan",
      paragraphs: [
        "Spesifikasi aplikasi saat ini tidak mendokumentasikan fungsi analitik, telemetri, fingerprinting, pelacakan, atau pengenal iklan di dalam aplikasi.",
        "Karena itu Kebijakan Privasi ini tidak menjelaskan fungsi semacam itu, dan tidak menjelaskan layanan pelacakan pihak ketiga mana pun.",
        "Jika fungsi semacam ini ditambahkan ke aplikasi di masa mendatang, Kebijakan Privasi ini akan diperbarui sebagaimana dijelaskan pada bagian “Perubahan Kebijakan Privasi Ini”."
      ]
    },
    accountRequirements: {
      heading: "Persyaratan Akun",
      paragraphs: [
        "Menurut spesifikasi aplikasi saat ini, tidak diperlukan akun pengguna untuk fungsi keuangan pribadi yang normal. Tidak ada langkah pendaftaran, kata sandi, atau masuk untuk penggunaan normal.",
        "Karena tidak ada akun, Kebijakan Privasi ini tidak menjelaskan profil akun, kredensial, atau pemulihan akun."
      ]
    },
    dataSharingAndDisclosure: {
      heading: "Pembagian dan Pengungkapan Data",
      paragraphs: [
        "Dalam arsitektur saat ini, catatan keuangan inti Anda disimpan secara lokal di perangkat Anda. Spesifikasi aplikasi tidak mendokumentasikan basis data keuangan jarak jauh yang dioperasikan pengembang, dan tidak mendokumentasikan mekanisme yang mengirimkan catatan tersebut kepada pengembang selama penggunaan normal.",
        "Informasi dapat keluar dari lingkungan lokal aplikasi ketika Anda bertindak secara sengaja:"
      ],
      bullets: [
        "Anda mengekspor laporan dan membagikan berkas hasilnya ke aplikasi atau layanan yang Anda pilih.",
        "Anda membuka layanan pihak ketiga eksternal yang terdokumentasi dari aplikasi."
      ],
      afterParagraphs: [
        "Kebijakan Privasi ini tidak menjelaskan alur pembagian data lain, karena tidak ada alur lain yang didokumentasikan dalam spesifikasi aplikasi."
      ]
    },
    dataRetention: {
      heading: "Retensi Data",
      paragraphs: [
        "Dalam arsitektur saat ini, catatan keuangan inti Anda disimpan di perangkat Anda sendiri, dan spesifikasi aplikasi tidak menetapkan periode retensi di sisi pengembang untuk catatan tersebut.",
        "Karena tidak ada basis data keuangan jarak jauh yang dioperasikan pengembang yang didokumentasikan, Kebijakan Privasi ini tidak menyebutkan periode retensi dalam angka. Berkas yang Anda ekspor atau bagikan adalah salinan terpisah yang berada di luar aplikasi."
      ]
    },
    dataDeletion: {
      heading: "Penghapusan Data",
      paragraphs: [
        "Catatan keuangan inti Anda disimpan secara lokal di perangkat Anda dalam arsitektur saat ini, dan spesifikasi aplikasi tidak mendefinisikan basis data keuangan jarak jauh yang dioperasikan pengembang yang menyimpan salinannya.",
        "Spesifikasi aplikasi juga tidak mendokumentasikan fitur khusus “hapus semua data” di dalam aplikasi, sehingga Kebijakan Privasi ini tidak menjelaskan alur penghapusan tertentu di dalam aplikasi atau tombol penghapusan.",
        "Berkas yang Anda ekspor atau bagikan adalah salinan yang Anda buat dan kirim ke tujuan yang Anda pilih; salinan tersebut berada di luar aplikasi.",
        "Jika fitur penghapusan khusus ditambahkan ke aplikasi di masa mendatang, Kebijakan Privasi ini akan diperbarui untuk menjelaskannya secara akurat."
      ]
    },
    dataSecurity: {
      heading: "Keamanan Data",
      paragraphs: [
        "Aplikasi menyimpan informasi keuangan inti Anda secara lokal di perangkat Anda. Karena catatan tersebut berada di perangkat, menjaga akses ke perangkat itu sendiri membantu melindunginya, dan siapa pun yang memiliki akses ke perangkat Anda yang tidak terkunci serta ke aplikasi mungkin dapat melihat catatan lokal tersebut.",
        "Kebijakan Privasi ini tidak mengklaim enkripsi end-to-end, keamanan yang terjamin, penyimpanan tanpa risiko, atau pemulihan catatan yang terjamin, karena spesifikasi aplikasi tidak mendukung klaim tersebut."
      ]
    },
    childrensPrivacy: {
      heading: "Privasi Anak",
      paragraphs: [
        "Aplikasi ini adalah alat keuangan pribadi dan penganggaran. Spesifikasi aplikasi tidak menjelaskan aplikasi sebagai produk yang ditujukan untuk anak-anak, dan tidak ada batas usia yang ditetapkan untuknya, sehingga Kebijakan Privasi ini tidak menyebutkan batas usia.",
        "Spesifikasi aplikasi tidak mendokumentasikan layanan yang dioperasikan pengembang yang mengumpulkan catatan keuangan dari pengguna; dalam arsitektur saat ini catatan tersebut disimpan secara lokal di perangkat pengguna.",
        "Jika di masa mendatang ditetapkan audiens sasaran atau persyaratan usia untuk aplikasi ini, Kebijakan Privasi ini akan diperbarui sesuai hal tersebut."
      ]
    },
    changesToPolicy: {
      heading: "Perubahan Kebijakan Privasi Ini",
      paragraphs: [
        "Kebijakan Privasi ini dapat diperbarui ketika aplikasi atau perilaku terkait privasinya berubah.",
        "Tanggal berlaku dan tanggal pembaruan terakhir ditampilkan di halaman ini. Jika suatu perubahan secara material memengaruhi cara informasi ditangani, isi halaman ini akan diperbarui agar konsisten dengan spesifikasi aplikasi."
      ]
    },
    contact: {
      heading: "Kontak",
      paragraphs: [
        "Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau tentang perilaku aplikasi yang terkait privasi, Anda dapat menghubungi pengembang melalui detail di bawah ini."
      ]
    }
  }
};
