# yres.reminder2

Aplikasi pengingat web sederhana yang ringan dan responsif untuk membantu mengelola jadwal serta catatan pengingat harian.

## 🚀 Fitur Utama
- **Tampilan Antarmuka Bersih & Modern:** Desain antarmuka responsif dengan mode gelap (*dark mode*) dan navigasi cepat.
- **Tindakan Pengingat Instan per Baris:**
  1. **WhatsApp (WA):** Membuka pesan pengingat langsung via WhatsApp Web atau aplikasi desktop/seluler.
  2. **Google Messages (G-Messages):** Pengiriman SMS/RCS langsung via web atau aplikasi pesan bawaan.
  3. **Salin Nomor HP:** Salin nomor telepon pelanggan ke papan klip dengan satu klik.
  4. **Salin Teks Reminder:** Salin teks pesan pengingat sesuai format template aktif.
  5. **Lihat Pratinjau Teks:** Pratinjau interaktif pesan bergaya tampilan obrolan asli.
- **Editor & Pengelola Format Pesan:** Mendukung 3 format template dengan tag dinamis (`{nama}`, `{no kartu}`, `{nominal}`, `{date today}`, dll.).
- **Impor & Ekspor Excel:** Mendukung pemrosesan spreadsheet langsung di sisi browser tanpa server backend.

## 📁 Struktur File
- `index.html` - Halaman utama dan logika aplikasi YRES.
- `PRODUCT.md` - Dokumen spesifikasi dan kapabilitas produk.
- `DESIGN.md` - Panduan arah desain UI dan sistem token.
- `logo.png` / `logo-clean.png` / `logo-light.png` / `logo-icon.png` - Aset logo dan favicon aplikasi.

## 🛠️ Cara Penggunaan
1. Buka berkas `index.html` langsung di peramban web modern (Google Chrome, Microsoft Edge, Mozilla Firefox).
2. Unggah berkas Excel data tagihan peserta atau gunakan tombol **Muat Data Contoh**.
3. Pilih format template pengingat dan target pengiriman (WhatsApp / Google Messages).
4. Gunakan tombol pada kolom **Tindakan Pengingat** untuk menghubungi peserta atau menyalin informasi yang diperlukan.