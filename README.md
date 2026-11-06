# Team 14 Website

Website statis profil kelompok **Team 14**, dibuat dengan HTML, CSS, dan sedikit JavaScript. Tidak membutuhkan framework, proses build, ataupun server khusus.

## Fitur

- **Home**: halaman sambutan dengan ilustrasi dan tombol menuju halaman About.
- **About Us**: daftar 5 anggota kelompok. Tiap kartu membuka halaman profil anggota.
- **Profil anggota**: foto, nama, peran, deskripsi singkat, tautan GitHub dan Instagram, serta tombol Sebelumnya / Selanjutnya untuk berpindah antar anggota.
- **Contact**: formulir kontak (First name, Last name, Email, Message). Setelah tombol **Send** diklik, muncul alert animasi "Pesan terkirim!" yang dibuat dengan JavaScript murni.
- **Learning**: banner ajakan belajar, tiga artikel (Teknologi AI, Robotic, Cyber Security) dengan tombol *Baca Detail*, dan tiga materi Course. Tombol **Buka** pada tiap materi menampilkan detail ringkasannya.
- Tampilan responsif untuk desktop dan layar kecil (breakpoint 760px).

## Struktur Folder

```
.
├── index.html        # Home
├── about.html        # Daftar anggota
├── anggota-1.html    # Profil anggota 1
├── anggota-2.html    # Profil anggota 2
├── anggota-3.html    # Profil anggota 3
├── anggota-4.html    # Profil anggota 4
├── anggota-5.html    # Profil anggota 5
├── contact.html      # Formulir kontak + alert animasi
├── learn.html        # Artikel dan materi
├── style.css         # Seluruh gaya situs
└── gambar/           # Semua gambar (logo, foto anggota, ilustrasi)
```

## Aset Gambar

Folder `gambar/` harus ada di samping file HTML dan berisi file-file berikut:

| File | Dipakai di |
| --- | --- |
| `logo-sttnf-12-768x557.jpg` | Logo navbar (semua halaman) |
| `1.jpg` | Ilustrasi Home |
| `miss.jpg`, `2.jpeg`, `zulfa.jpeg`, `4.jpeg` | Foto anggota (About dan halaman profil) |
| `kontak.svg` | Ilustrasi halaman Contact |
| `3963180.jpg` | Banner halaman Learning |
| `ai.jpeg`, `bow.jpeg`, `c.jpeg` | Thumbnail artikel |
| `wallhaven-4582e3.jpg` | Thumbnail materi |

Jika gambar tidak muncul, periksa nama file dan huruf besar/kecilnya, karena beberapa server membedakan keduanya.

## Cara Menjalankan

1. Salin seluruh isi proyek, termasuk folder `gambar/`, ke satu folder.
2. Buka `index.html` di browser, atau jalankan server lokal, misalnya:

   ```bash
   python3 -m http.server 8000
   ```

   lalu buka `http://localhost:8000`.

Font (Lexend dan Syncopate) dimuat dari Google Fonts, jadi perlu koneksi internet agar tampil sesuai desain. Tanpa internet, situs memakai font cadangan.

## Anggota Tim

| No | Nama | Peran |
| --- | --- | --- |
| 1 | Syamindera Wahyu | Ketua Kelompok |
| 2 | Muhammad Rizky Hidayatulloh | Anggota |
| 3 | Zulfa Zamain | Anggota |
| 4 | Intan Nirmala | Anggota |
| 5 | Malik Afrizal | Anggota |

## Catatan Pengembangan

- **Formulir kontak belum mengirim pesan ke mana pun.** Saat ini formulir hanya menampilkan alert dan mengosongkan isian. Agar pesan benar-benar terkirim, hubungkan dengan layanan seperti Formspree atau EmailJS, lalu tampilkan alert setelah proses kirim berhasil.
- **Deskripsi anggota masih berupa teks contoh.** Ubah paragraf di `anggota-1.html` sampai `anggota-5.html`, dan lengkapi tautan GitHub / Instagram anggota 1 dan 5 yang masih mengarah ke beranda situs.
- **Tombol Buka pada materi** hanya membuka dan menutup detail. Isi detail bisa diubah langsung di `learn.html`.
- **Navigasi** diulang di setiap file HTML. Jika menambah halaman, tambahkan menunya di semua file.
- Warna, font, dan ukuran utama dapat diatur lewat variabel CSS di bagian `:root` pada `style.css`.

## Teknologi

- HTML5
- CSS3 (Grid, Flexbox, variabel CSS)
- JavaScript (alert animasi pada Contact, tombol Buka pada Learning)
- Google Fonts: Lexend dan Syncopate
