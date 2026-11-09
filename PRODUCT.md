# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
- **Pengguna Utama:** Operator staf internal BPJS Kesehatan (petugas penagihan/rekon iuran).
- **Situasi Kerja:** Mengolah data peserta menunggak dari laporan spreadsheet harian/bulanan di meja kerja desktop/laptop.
- **Tugas Utama:** Mengirimkan pesan pengingat tagihan dan cicilan program REHAB secara akurat, cepat, dan terorganisir langsung ke kontak peserta (WhatsApp atau SMS/Google Messages) tanpa perlu entri nomor manual berulang.

## Product Purpose
YRES (Yura Reminder System) adalah alat bantu operasional berbasis web untuk mempermudah dan mempercepat penyampaian notifikasi tagihan iuran BPJS Kesehatan kepada peserta. Tujuan sukses produk:
- Menghilangkan friksi entri data manual (human error pengetikan nomor HP atau nominal).
- Memastikan pesan yang terkirim konsisten sesuai format baku BPJS Kesehatan (Tunggakan, Cicilan REHAB, dan Virtual Account).
- Memberikan visibilitas langsung terhadap rasio tagihan yang telah diingatkan vs yang masih tertunda.

## Positioning
Web utility client-side murni tanpa ketergantungan server atau backend eksternal. Semua pemrosesan data spreadsheet (.xlsx/.xls) berjalan 100% lokal di memori browser pengguna melalui SheetJS, menjamin privasi data nomor kartu dan kontak peserta tetap aman di perangkat operator sambil memanfaatkan skema URL langsung (`wa.me`, `web.whatsapp.com`, `sms:`, dan `messages.google.com/web`).

## Operating Context
- **Lingkungan Kerja:** Browser web modern (Google Chrome, Microsoft Edge, Mozilla Firefox) pada komputer operasional kantor (Windows / macOS).
- **Alur Kerja:**
  1. Operator mengunggah berkas Excel tagihan atau memuat contoh data.
  2. Sistem membaca kolom wajib: `No_Kartu`, `Nama`, `No_HP`, `Nominal`.
  3. Operator memilih template pesan (Format 1: Tunggakan, Format 2: Cicilan REHAB, Format 3: VA & Detail).
  4. Operator memfilter daftar (Belum Selesai / Selesai / Semua) atau mengurutkan berdasarkan nama / nominal.
  5. Operator mengklik tombol pengingat (WhatsApp atau Google Messages) per baris peserta untuk membuka antarmuka chat dengan pesan yang sudah terisi otomatis.
  6. Baris ditandai selesai dan ringkasan metrik keuangan diperbarui secara real-time.
  7. Data hasil penanganan dapat diekspor kembali ke format Excel.

## Capabilities and Constraints
- **Kemampuan:**
  - Parsing dan ekspor berkas spreadsheet (.xlsx/.xls) lokal.
  - Multi-target pengiriman: WhatsApp (Mode App & Mode Web) dan Google Messages (Mode App & Mode Web).
  - Pratinjau pesan interaktif mirip tampilan chat asli dengan fitur salin teks.
  - Editor 3 format template bawaan dengan sistem toggle ON/OFF dan tag variabel dinamis (`{nama}`, `{no kartu}`, `{nominal}`, `{date today}`, `{month year today}`, `{no kartu.slice 2}`).
  - Mode gelap (dark mode) penuh tersimpan di `localStorage`.
  - Dukungan filter status, pencarian instan, dan pengurutan dinamis (A-Z, Z-A, Nominal tertinggi/terendah).
- **Batasan:**
  - Tidak menggunakan server backend atau database eksternal; persistensi status sesi bergantung pada `localStorage`.
  - Pengiriman pesan tetap membutuhkan konfirmasi/klik kirim oleh operator di WhatsApp atau Google Messages untuk mematuhi regulasi anti-spam aplikasi perpesanan.

## Brand Commitments
- **Nama Produk:** YURA Reminder System (YRES)
- **Identitas Visual:** Logo resmi terintegrasi (`logo-light.png` untuk tema terang, `logo-clean.png` untuk tema gelap, serta favicon `logo-icon.png`).
- **Nada Bicara (Tone of Voice):** Formal, lugas, profesional, dan mengutamakan kejelasan birokrasi layanan kesehatan Indonesia.

## Evidence on Hand
- Aset logo: `logo.png`, `logo-clean.png`, `logo-icon.png`, `logo-light.png`.
- Berkas aplikasi berjalan: [index.html](file:///c:/Users/restu/.gemini/antigravity/scratch/yres/index.html).
- Aturan kualitas & anti-slop: [.antigravityrules](file:///c:/Users/restu/.gemini/antigravity/scratch/yres/.antigravityrules).
- Panduan arah desain UI: [DESIGN.md](file:///c:/Users/restu/.gemini/antigravity/scratch/yres/DESIGN.md).

## Product Principles
1. **Keamanan & Privasi Data Lokal:** Data peserta tidak boleh dikirim ke server pihak ketiga; semua manipulasi data terjadi di sisi browser.
2. **Efisiensi Operator di Atas Dekorasi:** Tata letak dan kontrol harus meminimalkan klik dan kelelahan visual selama jam kerja panjang.
3. **Pencegahan Kesalahan:** Nomor kartu dan nomor telepon diformat dengan ketat menggunakan font monospace untuk verifikasi visual cepat.
4. **Resilisi & Keandalan Alur Kerja:** Menyediakan opsi fallback (App vs Web, WhatsApp vs Google Messages, salin manual vs buka langsung).

## Accessibility & Inclusion
- Rasio kontras tinggi di mode terang maupun mode gelap untuk mendukung operator dengan berbagai kondisi pencahayaan layar.
- Dukungan keyboard accessibility (penutupan semua modal dengan tombol `Escape`).
- Ukuran target interaktif (tombol tindakan pengingat) yang memadai untuk penanganan cepat tanpa salah klik.
