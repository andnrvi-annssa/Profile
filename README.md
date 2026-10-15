# Andini Revi A.P. — Personal Brand & Engineering Portfolio

Website portofolio satu halaman (single-page) berbasis **React + Vite + Tailwind CSS**.
Tanpa database, tanpa backend, tanpa login. **Semua isi website diatur dari satu file:**
`src/data/portfolioData.js`.

---

## 1. Menjalankan di VS Code

Prasyarat: **Node.js 18 atau lebih baru** (cek dengan `node -v`).

1. Ekstrak folder `andini-portfolio`, lalu di VS Code pilih **File → Open Folder…** dan buka folder tersebut.
2. Buka terminal: **Terminal → New Terminal**.
3. Instal dependency (cukup sekali):

   ```bash
   npm install
   ```

4. Jalankan mode pengembangan:

   ```bash
   npm run dev
   ```

5. Buka alamat yang muncul di terminal (biasanya `http://localhost:5173`).
   Setiap kali kamu menyimpan file, browser otomatis memperbarui tampilan.

Menghentikan server: tekan `Ctrl + C` di terminal.

### Menemukan file data di VS Code

Di panel **Explorer** (kiri) buka: `src` → `data` → `portfolioData.js`.
Atau tekan `Ctrl + P`, ketik `portfolioData`, lalu Enter.

---

## 2. Struktur folder

```
andini-portfolio/
├── public/
│   ├── favicon.svg
│   └── images/
│       ├── profile/            ← profile.jpg
│       ├── activities/
│       │   ├── osis-humas/
│       │   ├── osis-secretary/
│       │   ├── pmr/
│       │   ├── rafest/
│       │   ├── classmeeting/
│       │   ├── graduation/
│       │   ├── internship/
│       │   └── campus/
│       ├── projects/
│       │   ├── esp32-led/
│       │   ├── python-game/
│       │   ├── automation-system/
│       │   ├── plc-panel/
│       │   ├── pcb-design/
│       │   └── electronics-practicum/
│       ├── certificates/
│       └── publications/
├── src/
│   ├── components/             ← tampilan (tidak perlu diubah saat menambah konten)
│   ├── data/portfolioData.js   ← SEMUA DATA ADA DI SINI
│   ├── hooks/  utils/
│   ├── App.jsx  main.jsx  index.css
├── index.html                  ← judul, meta description, Open Graph
├── tailwind.config.js  vite.config.js  postcss.config.js
└── package.json
```

Semua foto ada di `public/images/`. Di data, path ditulis dengan awalan `/images/...`
(tanpa kata `public`). Contoh: file `public/images/profile/profile.jpg` ditulis `/images/profile/profile.jpg`.

---

## 3. Menambahkan foto profil

1. Siapkan foto dengan rasio **4:5 (portrait)**, ideal **1200 × 1500 px** (minimal 800 × 1000 px).
2. Format **JPG** atau **WebP**; ukuran file sebaiknya di bawah **400 KB**.
3. Beri nama `profile.jpg` dan taruh di `public/images/profile/` (timpa jika sudah ada).
4. Selesai. Jika memakai ekstensi lain (mis. `.png`), ubah `profileImage` di `portfolioData.js`.

Selama file belum ada, hero menampilkan placeholder.

---

## 4. Menambahkan dokumentasi kegiatan

Setiap item galeri sudah punya path foto pertama yang siap diisi. Dua cara:

**Cara A — pakai nama file yang sudah disiapkan (tanpa edit kode).**
Taruh foto dengan nama yang sama di folder yang sesuai, misalnya
`public/images/activities/osis-humas/kegiatan-01.jpg`. Foto langsung muncul.

**Cara B — tambah banyak foto atau kegiatan baru.**
Buka `src/data/portfolioData.js`, cari `export const gallery`, lalu tambahkan objek:

```js
{
  id: 'osis-humas-2023',
  title: 'Kegiatan OSIS — Humas',
  category: 'Organization',   // pilih dari galleryCategories
  year: '2023',
  description: 'Dokumentasi kegiatan organisasi.',
  images: [
    '/images/activities/osis-humas/kegiatan-01.jpg',
    '/images/activities/osis-humas/kegiatan-02.jpg',
    '/images/activities/osis-humas/kegiatan-03.jpg',
  ],
  captions: ['Persiapan acara', 'Rapat koordinasi', 'Hari pelaksanaan'], // opsional
},
```

Beberapa foto dalam satu kegiatan cukup ditulis di array `images`; lightbox otomatis mendapat tombol panah.

Tips:
- Nama file: huruf kecil, tanpa spasi, pakai tanda hubung (`kegiatan-01.jpg`).
- Lebar ideal **1600 px**, JPG/WebP, di bawah **500 KB** per foto agar website cepat.
- Foto kegiatan juga muncul di kartu **Organization** dan **PKL** lewat `galleryId`.
- Sebelum memublikasikan foto yang memuat orang lain, pastikan kamu punya izin. Untuk PKL, pakai hanya foto yang boleh dipublikasikan.
- Menyembunyikan item sementara: tambahkan `visible: false`.

---

## 5. Menambahkan sertifikat dan publikasi

**Sertifikat**
1. Simpan gambar sertifikat di `public/images/certificates/`, mis. `plc-operator-junior.jpg`.
2. Di `portfolioData.js`, bagian `certifications`, pastikan `image` mengarah ke file itu.
3. Tombol **View Certificate** dan **View Full Image** aktif otomatis saat file ada.

Nomor sertifikat tidak wajib. Jika mau menampilkannya, isi `credentialId` dan ubah `showCredentialId: true`.

**Cover buku / karya**
1. Simpan cover di `public/images/publications/`.
2. Di bagian `publications`, ubah `cover` ke path file tersebut.
3. Tanpa file, website menampilkan kotak berlabel **Cover placeholder** (bukan cover tiruan).

---

## 6. Mengubah data lewat `portfolioData.js`

| Ingin mengubah… | Cari bagian… |
|---|---|
| Nama, headline, deskripsi hero, email | `personal` |
| Teks About dan ringkasan | `about` |
| Pendidikan | `education` |
| PKL / pengalaman industri | `experiences` |
| Organisasi dan jabatan | `organizations` |
| Skill dan levelnya | `skillGroups` |
| Project | `projects` |
| Galeri foto | `gallery` |
| Sertifikat | `certifications` |
| Karya tulis | `publications` |
| Kompetisi, seleksi, kegiatan akademik | `achievements` |
| Timeline dan tujuan | `journey`, `goals` |

Aturan penting:
- Teks `''` (kosong) berarti bagian itu tidak ditampilkan.
- `visible: false` menyembunyikan item tanpa menghapusnya.
- Jabatan, periode, dan tanggung jawab organisasi ditulis sesuai yang sebenarnya. Jangan menyamakan semua jabatan.
- Level skill (`Learning`, `Basic`, `Familiar with`, `Practiced through projects`) adalah draft. Ubah sesuai kemampuanmu.
- Kategori **Competition Experience**, **Selection Experience**, dan **Academic Activities** hanya diisi bila ada data pendukung.

Menambah project baru: salin salah satu objek di `projects`, ganti `id`, `title`, `tech`, dan path `images`.
Isi `repoUrl` / `demoUrl` **hanya** jika tautannya sudah ada.

---

## 7. Mengganti media sosial

Buka `portfolioData.js` → `export const social`. Isi `url` untuk GitHub, Instagram, dan YouTube:

```js
{ id: 'github', label: 'GitHub', icon: 'Github', url: 'https://github.com/username-kamu' },
```

Selama `url` kosong (`''`), tombol tampil sebagai "Segera tersedia" dan tidak bisa diklik.
Email diubah di `personal.email`.

---

## 8. Contact form

Website ini tidak punya server. Tombol **Send Message** memvalidasi isian, lalu membuka aplikasi email
pengguna (`mailto:`) dengan pesan yang sudah terisi. Pesan baru terkirim setelah pengguna menekan kirim
di aplikasi email tersebut. Website tidak pernah menyatakan pesan "sudah terkirim".

---

## 9. Gambar tidak muncul?

1. Pastikan file ada di `public/images/...` (bukan di `src/`).
2. Pastikan path di data diawali `/images/` dan **tidak** memuat kata `public`.
3. Cek ejaan dan huruf besar/kecil: `Foto.JPG` berbeda dari `foto.jpg` di server hosting.
4. Cek ekstensi (`.jpg`, `.jpeg`, `.png`, `.webp`) sama persis dengan yang ditulis di data.
5. Coba buka langsung `http://localhost:5173/images/profile/profile.jpg`. Jika tidak terbuka, file belum di tempat yang benar.
6. Hentikan server (`Ctrl + C`) lalu jalankan lagi `npm run dev` bila file baru belum terbaca.

Gambar yang gagal dimuat otomatis diganti placeholder, jadi ikon gambar rusak tidak pernah tampil.

---

## 10. Build production dan deploy

```bash
npm run build      # hasil ada di folder dist/
npm run preview    # mencoba hasil build secara lokal
```

Deploy: unggah repository ke GitHub lalu hubungkan ke **Vercel** atau **Netlify**
(build command `npm run build`, output directory `dist`).

Untuk **GitHub Pages** di sub-folder, ubah `base` di `vite.config.js` menjadi `'/nama-repo/'`.

Setelah punya domain, tambahkan `og:image` (1200 × 630 px) dan `og:url` di `index.html`.

---

## 11. Checklist pengujian

- [ ] `npm run dev` berjalan tanpa error di terminal dan konsol browser.
- [ ] Semua menu navbar menggulir ke section yang benar; menu aktif ikut menyala saat scroll.
- [ ] Hamburger menu di mobile terbuka, menutup saat link diklik, dan menutup dengan `Esc`.
- [ ] Dark mode bisa diganti dan tetap tersimpan setelah halaman di-refresh.
- [ ] Foto profil, foto kegiatan, sertifikat, dan cover tampil, atau tampil placeholder bila belum ada.
- [ ] Lightbox: terbuka, panah kiri/kanan, `Esc`, dan tombol tutup berfungsi.
- [ ] Filter Organization, Projects, Gallery, dan Achievements berfungsi.
- [ ] Form kontak menampilkan pesan error saat kosong, dan membuka aplikasi email saat valid.
- [ ] Tab dengan keyboard (`Tab`) menampilkan fokus yang terlihat di semua tombol dan tautan.
- [ ] Tampilan rapi di lebar 1920, 1440, 1280, 1024, 768, 430, 390, dan 375 px (DevTools → Toggle device toolbar).
- [ ] Aktifkan "Reduce motion" di sistem operasi: animasi tidak mengganggu.
- [ ] Semua data (jabatan, tahun, tanggung jawab) sesuai kenyataan.
