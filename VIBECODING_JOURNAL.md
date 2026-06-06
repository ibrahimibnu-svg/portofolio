# Jurnal Vibecoding & Rekayasa Perangkat Lunak

**Nama:** Ibrahim Ibnu Abbas

**Kelas:** 11

**Nama Proyek:** Web Portofolio Personal

**Link Vercel:** https://portofolio-ib.vercel.app

---

## 🏗️ 1. Definisi Stack & Arsitektur

- **Lingkungan Pengembangan:** ReactJS dengan Vite
- **Routing:** `react-router-dom`
- **Styling:** CSS Modules
- **Manajemen State:** `useState` & `localStorage`
- **AI Code Editor / LLM Assistant:** Claude (opencode)

**Alasan Pemisahan Komponen:**
Komponen dipisahkan berdasarkan tanggung jawab masing-masing agar kode lebih modular dan mudah dikelola. `Navbar` dibuat komponen terpisah karena digunakan di semua halaman. Halaman (`Home`, `About`, `Project`, `Contact`) dipisahkan ke folder `pages/` karena masing-masing memiliki layout dan logika yang berbeda. Data proyek dan skills dipisahkan ke folder `data/` agar konten terpusat dan mudah diubah tanpa menyentuh struktur komponen.

---

## 🗣️ 2. Strategi Prompting

**Prompt 1 (Fokus pada Logika / State):**

> "Buatkan form kontak di React dengan fitur guestbook yang menyimpan data ke localStorage. Data yang disimpan: nama, email, pesan, dan tanggal. Tampilkan daftar pesan yang sudah masuk, dan beri tombol hapus semua. State di-update lewat useState dan data dibaca dari localStorage saat komponen mount."

**Prompt 2 (Fokus pada UI / Routing):**

> "Buat Navbar responsif dengan React Router (NavLink) yang memiliki 4 menu: Home, About, Project, Contact. Navbar harus punya toggle theme gelap/terang menggunakan useState dan localStorage. Di mobile, menu disembunyikan dan muncul dengan tombol hamburger. Gunakan CSS Modules."

**Hasil Evaluasi Prompt:**
AI langsung memberikan struktur kode yang benar untuk kedua prompt. Untuk prompt 1, AI menghasilkan logika `useEffect` untuk membaca localStorage saat mount, validasi form, dan fungsi handleDeleteAll. Saya hanya perlu menyesuaikan styling agar sesuai dengan desain yang diinginkan. Untuk prompt 2, AI langsung memberikan Navbar dengan NavLink, hamburger menu, dan integrasi theme toggle — hanya perlu menambahkan logo circle "IB".

---

## 🐛 3. Log Problem Solving

- **Deskripsi Error / Bug:** Data pesan di form kontak hilang saat halaman di-refresh.

    > Setelah mengirim pesan, data tampil di daftar guestbook. Tapi setelah halaman di-refresh, pesan yang sudah dikirim hilang dan daftar kosong kembali.

- **Langkah Investigasi:** Saya menggunakan `console.log` untuk melihat isi `localStorage` setelah submit dan setelah refresh. Ternyata data tersimpan di localStorage, tapi state React tidak membaca ulang data tersebut saat komponen pertama kali dirender.

    > Saya juga ngecek apakah key localStorage-nya konsisten — ternyata sudah benar.

- **Kolaborasi dengan AI:** Saya memberi instruksi ke AI: "Setelah halaman di-refresh, data guestbook hilang dari tampilan padahal localStorage masih ada datanya. Bagaimana cara membaca localStorage saat komponen pertama kali dimuat?"

- **Solusi Akhir:** Masalahnya adalah state React hanya diinisialisasi dengan array kosong (`useState([])`), sehingga tidak membaca data yang sudah ada di localStorage. Solusinya adalah menambahkan `useEffect` yang membaca `localStorage.getItem('guestbook')` saat komponen mount, lalu mengupdate state dengan data tersebut. Dengan begitu, setiap kali halaman di-refresh, data dari localStorage langsung dimuat ke dalam state.

---

## 🎯 4. Refleksi Pribadi

Selama mengerjakan proyek ini dengan metode Vibecoding, saya belajar bahwa peran utama saya sebagai programmer bukanlah mengetik kode baris per baris, melainkan menjadi arsitek yang merancang struktur dan logika aplikasi. AI sangat membantu dalam menulis kode boilerplate, routing, dan fitur CRUD sederhana, tetapi keputusan tentang arsitektur (bagaimana memisahkan komponen, kapan pakai state lokal vs global, bagaimana mengorganisir file) tetap harus saya tentukan sendiri. Saya juga menyadari bahwa kemampuan membaca dan memahami kode buatan AI sama pentingnya dengan kemampuan menulis kode sendiri — karena tanpa memahami apa yang dihasilkan AI, saya tidak bisa memperbaiki bug atau menambahkan fitur dengan benar. Di masa depan, saya akan lebih fokus memperkuat fondasi logika pemrograman dan desain arsitektur, sementara AI bisa saya andalkan untuk mempercepat implementasi teknis.
