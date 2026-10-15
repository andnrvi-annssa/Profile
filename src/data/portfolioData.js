/* =====================================================================
   portfolioData.js — SATU-SATUNYA FILE YANG PERLU KAMU EDIT
   ---------------------------------------------------------------------
   Semua teks, foto, sertifikat, project, dan link ada di sini.
   Komponen React tidak perlu diubah saat menambah data.

   Aturan umum:
   - Path gambar selalu diawali "/images/..." (file ada di folder public/images).
   - Jika file gambar belum ada, website otomatis menampilkan placeholder.
   - Untuk menyembunyikan item tanpa menghapusnya, tambahkan  visible: false
   - Teks "" (kosong) = bagian itu tidak ditampilkan.
   ===================================================================== */

/* ---------------------------------------------------------------------
   1. IDENTITAS
   --------------------------------------------------------------------- */
export const personal = {
  fullName: 'Andini Revi Annissa Putri',
  shortName: 'Andini Revi A.P.',
  headline: "Hello, I'm Andini Revi Annissa Putri.",
  role: 'Automation Engineering Technology Student',
  tagline: [
    'Automation Engineering Technology Student',
    'PLC & Automation Enthusiast',
    'Leadership',
    'Creative Writing',
  ],
  themeLine: 'Technology × Automation × Leadership × Author',
  intro:
    'Mahasiswa D4 Teknologi Rekayasa Otomasi Universitas Diponegoro dengan latar belakang Teknik Elektronika Industri. Tertarik pada sistem otomasi, PLC, elektronika, programming, serta pengembangan kemampuan komunikasi, kepemimpinan, dan kreativitas.',
  // Ganti file ini untuk mengganti foto profil (rasio 4:5, mis. 1200 x 1500 px).
  profileImage: '/public/images/profile/profile.jpg',
  profileAlt: 'Foto profil Andini Revi Annissa Putri',
  email: 'andnrviputr@gmail.com',
}

export const social = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    icon: 'Linkedin',
    url: 'www.linkedin.com/in/andini-revi-annissa-putri-787849432',
  },
  // GitHub, Instagram, YouTube: isi url setelah kamu punya tautan yang benar.
  // Selama url kosong (''), tombolnya tampil sebagai placeholder "Segera tersedia".
  { id: 'instagram', label: 'Instagram', icon: 'Instagram', url: 'https://www.instagram.com/andn_rvi?psln=YzJvMjR1dTd3cjRy' },
  { id: 'youtube', label: 'YouTube', icon: 'Youtube', url: 'https://youtube.com/@andinirevi5406?si=afy5sGMRFA7fUV4K' },
]

/* ---------------------------------------------------------------------
   2. NAVIGASI (id harus sama dengan id section di komponen)
   --------------------------------------------------------------------- */
export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'organization', label: 'Organization' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
]

/* ---------------------------------------------------------------------
   3. ABOUT
   --------------------------------------------------------------------- */
export const about = {
  paragraphs: [
    'Perjalanan saya dimulai dari Teknik Elektronika Industri di SMK Negeri 1 Kandeman. Di sana saya mengenal rangkaian elektronika, sistem kendali, dan dasar pemrograman lewat praktik langsung. Rasa ingin tahu tentang bagaimana proses industri bisa berjalan otomatis kemudian membawa saya ke D4 Teknologi Rekayasa Otomasi di Sekolah Vokasi Universitas Diponegoro.',
    'Di luar kelas, saya aktif berorganisasi: dari Humas, sekretaris, dan koordinator, sampai ketua panitia. Pengalaman itu melatih saya berkomunikasi, merapikan administrasi, dan bekerja bersama tim.',
    'Saya juga menulis cerpen dan puisi. Beberapa karya saya tercantum dalam publikasi tahun 2025.',
    'Saat ini saya masih belajar dan membangun portofolio lewat project, pengalaman industri, dan kegiatan organisasi. Website ini adalah catatan perjalanan itu.',
  ],
  interests: [
    { icon: 'Cpu', title: 'Teknologi dan otomasi' },
    { icon: 'CircuitBoard', title: 'Elektronika dan sistem kendali' },
    { icon: 'Code2', title: 'Pemrograman dan project' },
    { icon: 'Users', title: 'Organisasi, komunikasi, dan kepemimpinan' },
    { icon: 'PenLine', title: 'Kepenulisan dan kegiatan kreatif' },
  ],
  summary: [
    { label: 'Name', value: 'Andini Revi Annissa Putri' },
    { label: 'Education', value: 'D4 Teknologi Rekayasa Otomasi (Automation Engineering Technology)' },
    { label: 'University', value: 'Universitas Diponegoro — Sekolah Vokasi' },
    { label: 'Field of Interest', value: 'Automation, PLC, Electronics, Programming' },
    { label: 'Industrial Experience', value: 'PKL 6 bulan — PT Sketch Tegal Electronic' },
    { label: 'Certification', value: 'Operator Junior Sistem Otomasi PLC — LSP BNSP (2025)' },
  ],
}

/* ---------------------------------------------------------------------
   4. EDUCATION
   --------------------------------------------------------------------- */
export const education = [
  {
    id: 'undip',
    institution: 'Universitas Diponegoro',
    program: 'D4 Teknologi Rekayasa Otomasi',
    programEn: 'Automation Engineering Technology',
    faculty: 'Sekolah Vokasi',
    period: '2026 – sekarang',
    current: true,
  },
  {
    id: 'smkn1-kandeman',
    institution: 'SMK Negeri 1 Kandeman',
    program: 'Teknik Elektronika Industri',
    programEn: 'Industrial Electronics Engineering',
    faculty: '',
    period: '2023 – 2026',
    current: false,
  },
]

/* ---------------------------------------------------------------------
   5. INDUSTRIAL EXPERIENCE
   --------------------------------------------------------------------- */
export const experiences = [
  {
    id: 'pkl-sketch',
    company: 'PT Sketch Tegal Electronic',
    role: 'Praktik Kerja Lapangan — Production / Wire Processing',
    duration: '6 bulan',
    summary:
      'Pengalaman industri yang memperkenalkan saya pada lingkungan kerja produksi, ketelitian, standar kerja, dan tanggung jawab.',
    responsibilities: [
      'Melakukan proses wire twisting sesuai standar dan spesifikasi yang ditetapkan.',
      'Memastikan hasil twisting sesuai kebutuhan proses produksi.',
      'Melakukan pemeriksaan visual terhadap hasil pekerjaan.',
      'Menjaga ketelitian dan mengikuti prosedur keselamatan kerja selama proses produksi.',
    ],
  
  },
]

/* ---------------------------------------------------------------------
   6. ORGANIZATION & LEADERSHIP
   category: leadership | administrative | event | participation
   galleryId : (opsional) ambil foto dari item galeri dengan id tersebut
   images    : (opsional) foto khusus untuk kartu ini
   period "" : tahun tidak ditampilkan
   --------------------------------------------------------------------- */
export const organizationCategories = [
  { id: 'leadership', label: 'Leadership' },
  { id: 'administrative', label: 'Administrative & Communication' },
  { id: 'event', label: 'Event Committee' },
  { id: 'participation', label: 'Participation' },
]

export const organizations = [
  {
    id: 'classmeeting-2024',
    name: 'Panitia Classmeeting SMK Negeri 1 Kandeman',
    role: 'Ketua Panitia',
    category: 'leadership',
    period: '2024',
    description: 'Memimpin kepanitiaan kegiatan classmeeting di sekolah.',
    responsibilities: [
      'Memimpin dan mengoordinasikan panitia.',
      'Membagi tugas dan tanggung jawab.',
      'Mengatur pelaksanaan kegiatan sesuai rencana dan jadwal.',
    ],
    
  },
  {
    id: 'pmr-wira',
    name: 'PMR Wira SMKN 1 Kandeman',
    role: 'Koordinator 1',
    category: 'leadership',
    // Periode belum pasti: dikosongkan agar tidak menampilkan tahun yang keliru.
    period: '2024',
    description: 'Koordinator di PMR Wira Wira SMKN 1 Kandeman.',
    responsibilities: [
      'Mengoordinasikan anggota PMR dalam menjalankan kegiatan dan program kerja.',
      'Membantu ketua dalam mengatur dan mengawasi pelaksanaan tugas anggota.',
      'Mengarahkan anggota saat kegiatan kepalangmerahan, seperti pertolongan pertama dan kegiatan sosial.',
    ], // tambahkan rincian tugas jika sudah ada datanya

  },
  {
    id: 'osis-humas',
    name: 'OSIS Narayashaka SMK Negeri 1 Kandeman',
    role: 'Humas 3',
    category: 'administrative',
    period: '2023 – 2024',
    description: 'Mendukung komunikasi dan hubungan organisasi dengan pihak internal maupun eksternal.',
    responsibilities: [
      'Membantu menyampaikan informasi kegiatan kepada anggota dan pihak terkait.',
      'Mendukung komunikasi dan koordinasi organisasi.',
      'Membantu membangun hubungan yang baik dengan pihak internal maupun eksternal.',
    ],
    
  },
  {
    id: 'osis-sekretaris',
    name: 'OSIS Narayashaka SMK Negeri 1 Kandeman',
    role: 'Sekretaris 1',
    category: 'administrative',
    period: '2024 – 2025',
    description: 'Mengelola administrasi dan dokumentasi organisasi.',
    responsibilities: [
      'Mengelola administrasi dan arsip organisasi.',
      'Menyusun surat, notulen rapat, dan dokumen kegiatan.',
      'Mendukung koordinasi antaranggota.',
      'Bertanggung jawab terhadap kelengkapan dokumentasi dan administrasi.',
    ],
    
  },
  {
    id: 'rafest-2025',
    name: 'RAFEST (Ramadhan Festival) Kabupaten Batang',
    role: 'Sekretaris 1',
    category: 'event',
    period: '2025',
    description: 'Mengelola administrasi kepanitiaan pada kegiatan RAFEST tingkat kabupaten.',
    responsibilities: [
      'Mengelola administrasi kegiatan.',
      'Menyiapkan dan mengarsipkan dokumen kepanitiaan.',
      'Mencatat hasil rapat.',
      'Menyampaikan informasi kepada anggota panitia.',
      'Mendukung koordinasi pelaksanaan kegiatan.',
    ],

  },
  {
    id: 'wisuda-2026',
    name: 'Panitia Wisuda & Video Angkatan — SMK Negeri 1 Kandeman',
    role: 'Sekretaris Panitia',
    category: 'event',
    period: '2026',
    description: 'Sekretaris panitia untuk kegiatan wisuda dan video angkatan.',
    responsibilities: [], // tambahkan tanggung jawab yang sesuai jika sudah ada datanya
    
  },
  
]

/* ---------------------------------------------------------------------
   7. SKILLS
   level: Learning | Basic | Familiar with | Practiced through projects
   (kamu bebas menulis label sendiri). visible:false untuk menyembunyikan.
   Level di bawah adalah DRAFT konservatif — sesuaikan dengan kemampuanmu.
   --------------------------------------------------------------------- */
export const skillGroups = [
  {
    id: 'automation',
    title: 'Automation & Electronics',
    icon: 'CircuitBoard',
    skills: [
      { name: 'PLC', level: 'Practiced through projects' },
      { name: 'Basic Automation', level: 'Basic' },
      { name: 'Basic Electronics', level: 'Basic' },
      { name: 'Electrical Circuits', level: 'Practiced through projects' },
      { name: 'Arduino', level: 'Practiced through projects' },
      { name: 'ESP32', level: 'Practiced through projects' },
      { name: 'Proteus', level: 'Familiar with' },
      { name: 'CX-Programmer', level: 'Familiar with' },
    ],
  },
  {
    id: 'programming',
    title: 'Programming & Web',
    icon: 'Code2',
    skills: [
      { name: 'Python', level: 'Basic' },
      { name: 'Arduino Programming', level: 'Practiced through projects' },
      { name: 'HTML', level: 'Basic' },
      { name: 'CSS', level: 'Learning' },
      { name: 'JavaScript', level: 'Learning' },
    ],
  },
  {
    id: 'communication',
    title: 'Communication & Leadership',
    icon: 'Users',
    skills: [
      { name: 'Public Speaking', level: 'Familiar with' },
      { name: 'Presentation', level: 'Familiar with' },
      { name: 'Hosting', level: 'Familiar with' },
      { name: 'Negotiation', level: 'Learning' },
      { name: 'Teamwork', level: 'Practiced through organization' },
      { name: 'Coordination', level: 'Practiced through organization' },
      { name: 'Administration', level: 'Practiced through organization' },
      { name: 'Documentation', level: 'Practiced through organization' },
    ],
  },

  {
    id: 'writing',
    title: 'Writing',
    icon: 'PenLine',
    skills: [
      { name: 'Creative Writing', level: 'Practiced through publications' },
      { name: 'Poetry', level: 'Practiced' },
      { name: 'Short Story', level: 'Practiced through publications' },
      { name: 'Literary Publication', level: 'Contributor' },
    ],
  },
]

/* ---------------------------------------------------------------------
   8. PROJECTS
   category: Embedded & IoT | Automation | Electronics | Programming
   kind    : label jenis (Project / Praktikum / Learning project ...)
   images  : foto/screenshot (gambar pertama = cover). Taruh file dengan nama
             yang sama di folder yang tertulis; jika belum ada, tampil placeholder.
   repoUrl / demoUrl : isi HANYA jika tautan sudah benar-benar ada.
   --------------------------------------------------------------------- */
export const projectCategories = ['Embedded & IoT', 'Automation', 'Electronics', 'Programming']

export const projects = [
  {
    id: 'omron-plc-panel',
    title: 'Omron PLC Control Panel',
    category: 'Automation',
    kind: 'Project pembelajaran',
     status: 'Proyek Pembelajaran',
     description:
    'Proyek pembelajaran perancangan dan perakitan panel kontrol berbasis PLC Omron, mencakup pembuatan ladder diagram dan proses wiring panel.',
    tech: ['Omron PLC', 'Ladder diagram', 'Wiring panel'],
    images: ['/public/images/projects/plc-panel/plc.jpg'],
    captions: ['Panel kontrol PLC'],
    repoUrl: '',
    demoUrl: '',
  },
  
]

/* ---------------------------------------------------------------------
   9. GALERI "MOMENTS & EXPERIENCES"
   category: Organization | Committee & Events | Internship | Campus | Projects | Certification & Publication
   images  : daftar foto. Jika punya banyak foto, tambahkan semuanya di array ini.
   captions: (opsional) keterangan per foto, urutannya sama dengan images.
   visible : false = sembunyikan item sampai foto siap.

   CONTOH LENGKAP (salin, tempel, lalu ubah):
   {
     id: 'osis-humas-2023',
     title: 'Kegiatan OSIS — Humas',
     category: 'Organization',
     year: '2023',
     description: 'Dokumentasi kegiatan organisasi.',
     images: [
       '/images/activities/osis-humas/kegiatan-01.jpg',
       '/images/activities/osis-humas/kegiatan-02.jpg',
     ],
     captions: ['Persiapan acara', 'Penyampaian informasi kepada anggota'],
   }
   --------------------------------------------------------------------- */
export const galleryCategories = [
  'Organization',
  'Committee & Events',
  'Internship',
  'Campus',
  'Projects',
  'Certification & Publication',
]

export const gallery = [
  {
    id: 'osis-humas',
    title: ' Humas OSIS',
    category: 'Organization',
    year: '2023',
    images: ['/public/images/activities/osis-humas/osis-humas.jpg'],
  },
  {
    id: 'osis-secretary',
    title: 'Sekretaris OSIS',
    category: 'Organization',
    year: '2024',
    images: ['/public/images/activities/osis-secretary/osis-secretary.jpg'],
  },
  {
    id: 'pmr',
    title: 'Kegiatan PMR Wira',
    category: 'Organization',
    year: '',
    description: 'Dokumentasi kegiatan PMR Wira.',
    images: ['/public/images/activities/pmr/pmr.jpg'],
  },
  {
    id: 'rafest',
    title: 'RAFEST Kabupaten Batang',
    category: 'Committee & Events',
    year: '2025',
    description: 'Dokumentasi kepanitiaan Ramadhan Festival tingkat kabupaten.',
    images: ['/public/images/activities/rafest/rafest.png'],
  },
  {
    id: 'graduation',
    title: 'Wisuda & Video Angkatan',
    category: 'Committee & Events',
    year: '2026',
    description: 'Dokumentasi kepanitiaan wisuda dan video angkatan.',
    images: ['/public/images/activities/graduation/graduation.jpg'],
  },
  {
    id: 'internship',
    title: 'Praktik Kerja Lapangan',
    category: 'Internship',
    year: '2025',
    description:
      'Dokumentasi PKL di PT Sketch Tegal Electronic. Tampilkan hanya foto yang boleh dipublikasikan.',
    images: ['/public/images/activities/internship/internship.jpg'],
  },
  {
     id: 'kandidat-ketua-osis',
    title: 'Kandidat Ketua OSIS Narayashaka',
    category: 'Leadership & Organization',
    year: '2024',
    description: 'Dokumentasi pencalonan sebagai Ketua OSIS Narayashaka SMK Negeri 1 Kandeman periode 2024–2025.',
    images: ['/public/images/activities/osis-narayashaka/kegiatan-osis.png'],
   },
  {
    id: 'urdc-expo-undip',
    title: 'URDC Expo',
    category: 'Campus Activities',
    year: '2026',
    description: 'Dokumentasi kunjungan URDC Expo Universitas Diponegoro sebagai bagian dari pengenalan kegiatan, inovasi, dan komunitas mahasiswa di lingkungan kampus.',
    images: ['/public/images/activities/campus/campus.jpeg'],
  },
{
    id: 'pmb-undip',
    title: 'Penerimaan Mahasiswa Baru (PMB)',
    category: 'Campus Activities',
    year: '2026',
    description: 'Dokumentasi kegiatan Penerimaan Mahasiswa Baru (PMB) Universitas Diponegoro sebagai bagian dari rangkaian awal perjalanan perkuliahan.',
    images: ['/public/images/activities/campus/pmb.jpg'],
  },
   {
    id: 'OSIS',
    title: 'Narayashaka',
    category: 'Organization',
    year: '2025',
    description:
      'Dokumentasi OSIS Narayashaka SMK Negeri 1 Kandeman.',
    images: ['/public/images/activities/osis-narayashaka/narayashaka.jpeg'],
   },
  {
    id: 'Lembaga Sertfikasi Profesi',
    title: ' Operator Junior Sistem Otomasi PLC',
    category: 'Experience & Achievement',
    year: '2025',
    description: 'Dokumentasi selama mengikuti proses uji kompetensi Operator Junior Sistem Otomasi PLC melalui Lembaga Sertifikasi Profesi (LSP) berlisensi BNSP.',
    images: ['/public/images/certificates/lsp.png'],
  },
]

/* ---------------------------------------------------------------------
   10. CERTIFICATIONS
   credentialId: isi hanya jika kamu mau menampilkannya, lalu set showCredentialId: true
   --------------------------------------------------------------------- */
export const certifications = [
  {
    id: 'plc-junior',
    title: 'Operator Junior Sistem Otomasi PLC',
    issuer: 'LSP BNSP',
    year: '2025',
    description: 'Sertifikasi kompetensi di bidang operator junior sistem otomasi PLC.',
    image: '/public/images/certificates/bnsp.jpg',
    credentialId: '',
    showCredentialId: false,
  },
  
]

/* ---------------------------------------------------------------------
   11. WRITING & PUBLICATIONS
   cover: taruh gambar di public/images/publications/. Jika belum ada → placeholder.
   --------------------------------------------------------------------- */
export const publications = [
  {
    id: 'sepatu-roda',
    title: 'Sepatu Roda di Tengah Hujan',
    type: 'Cerpen',
    year: '2025',
    description: 'Dokumentasi karya cerpen berjudul “Sepatu Roda di Tengah Hujan” yang diterbitkan dalam buku antologi “Terkenang Tak Terulang”.',
    cover: '/public/images/publications/sepatu-roda.jpg',
  },
]

/* ---------------------------------------------------------------------
   12. ACHIEVEMENTS & ACTIVITIES
   Sertifikasi, publikasi, dan jabatan kepemimpinan otomatis ikut tampil
   dari data di atas. Isi bagian ini untuk kategori lainnya.
   category: Competition Experience | Academic Activities | Selection Experience
   Tulis HANYA yang punya data pendukung. Jangan menambah ranking/penghargaan baru.
   --------------------------------------------------------------------- */
export const achievementCategories = [
  'Certifications',
  'Writing & Publications',
  'Competition Experience',
  'Leadership & Organization',
  'Academic Activities',
  'Selection Experience',
]

export const achievements = [
  {
    id: 'olimpiade-bahasa-indonesia',
    category: 'Competition Experience',
    title: 'Olimpiade Bahasa Indonesia (tingkat SMP)',
    issuer: '',
    year: '2023',
    description: 'Pengalaman mengikuti kompetisi.',
  },
   {
    id: 'olimpiade-bahasa-arab',
    category: 'Competition Experience',
    title: 'Olimpiade Bahasa Arab (tingkat SMP)',
    issuer: '',
    year: '2023',
    description: 'Pengalaman mengikuti kompetisi.',
  },
  {
    id: 'seleksi-jejak-pena',
    category: 'Selection Experience',
    title: 'Seleksi kepenulisan Jejak Pena  Nasional',
    issuer: '',
    year: '2025',
    description: 'Pengalaman mengikuti proses seleksi kepenulisan tingkat Nasional.',
  },
  // Contoh menambah data baru:
  // {
  //   id: 'kegiatan-akademik-1',
  //   category: 'Academic Activities',
  //   title: 'Nama kegiatan',
  //   issuer: 'Penyelenggara',
  //   year: '2026',
  //   description: 'Keterangan singkat.',
  // },
]

/* ---------------------------------------------------------------------
   13. MY JOURNEY & WHERE I'M HEADING
   --------------------------------------------------------------------- */
export const journey = [
  { year: '2023', title: 'Started exploring Industrial Electronics', detail: 'Memulai Teknik Elektronika Industri di SMK Negeri 1 Kandeman.' },
  { year: '2024', title: 'Organization & Leadership Experience', detail: 'Berorganisasi di OSIS dan memimpin kepanitiaan classmeeting.' },
  { year: '2025', title: 'Industrial Internship & PLC Certification', detail: 'PKL 6 bulan di PT Sketch Tegal Electronic dan sertifikasi PLC dari LSP BNSP.' },
  { year: '2026', title: 'Started Automation Engineering Technology', detail: 'Memulai kuliah D4 Teknologi Rekayasa Otomasi di Universitas Diponegoro.' },
  { year: 'Future', title: 'Learning, Building, and Creating', detail: 'Terus belajar, membuat project, dan berkarya.', future: true },
]

export const goals = {
  statement:
    'Terus mengembangkan kemampuan di bidang otomasi, PLC, programming, dan teknologi industri sambil membangun pengalaman melalui project, organisasi, dan kegiatan profesional.',
  cards: [
    { icon: 'GraduationCap', title: 'LEARN', text: 'Mengembangkan kemampuan teknis.' },
    { icon: 'Hammer', title: 'BUILD', text: 'Membuat project dan solusi berbasis teknologi.' },
    { icon: 'Sprout', title: 'GROW', text: 'Membangun pengalaman profesional, komunikasi, dan kepemimpinan.' },
  ],
}
