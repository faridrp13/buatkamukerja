# YRES • YURA Reminder System (Fullstack Node.js Web Application)

Aplikasi pengingat tagihan dan cicilan modern, modular, dan terstruktur dengan arsitektur Fullstack Node.js (Separation of Concerns). Terintegrasi dengan WhatsApp Web / App, Google Messages (SMS/RCS), database lokal SQLite, serta automated background scheduler dengan node-cron.

---

## 📁 Struktur Direktori Project

```text
yres/
├── package.json                          # Manifest dependensi & script project
├── server.js                             # Entry point utama Express server
├── data/                                 # Database storage SQLite lokal
│   └── reminders.db
├── public/                               # Frontend Static Assets
│   ├── index.html                        # Struktur HTML & antarmuka UI
│   ├── css/
│   │   └── style.css                     # Custom styling & scrollbar
│   ├── js/
│   │   └── main.js                       # Logika JavaScript browser & fetch API
│   ├── logo-clean.png
│   ├── logo-icon.png
│   └── logo-light.png
└── src/                                  # Backend Source Code (Modular)
    ├── config/
    │   └── database.js                   # Konfigurasi & koneksi database SQLite
    ├── controllers/
    │   └── reminderController.js         # Handler logika bisnis CRUD & stats
    ├── routes/
    │   └── reminderRoutes.js             # Definisi REST API endpoints (/api/reminders)
    └── services/
        └── scheduler.js                  # Automated cron scheduler (node-cron)
```

---

## 🚀 Fitur Utama

1. **Separation of Concerns (SoC)**
   - UI (HTML), styling (CSS), dan client script (JS) telah dipisahkan secara modular ke folder [public/](file:///c:/Users/restu/.gemini/antigravity/scratch/yres/public).
   - Backend terorganisir rapi dalam [server.js](file:///c:/Users/restu/.gemini/antigravity/scratch/yres/server.js), [reminderRoutes.js](file:///c:/Users/restu/.gemini/antigravity/scratch/yres/src/routes/reminderRoutes.js), [reminderController.js](file:///c:/Users/restu/.gemini/antigravity/scratch/yres/src/controllers/reminderController.js), [scheduler.js](file:///c:/Users/restu/.gemini/antigravity/scratch/yres/src/services/scheduler.js), dan [database.js](file:///c:/Users/restu/.gemini/antigravity/scratch/yres/src/config/database.js).

2. **REST API Endpoints (`/api/reminders`)**
   - `GET /api/reminders` : Mengambil seluruh data reminder (mendukung query filter & search).
   - `GET /api/reminders/stats` : Ringkasan KPI keuangan & statistik penyelesaian.
   - `GET /api/reminders/:id` : Mengambil detail reminder berdasarkan ID.
   - `POST /api/reminders` : Menambahkan reminder baru.
   - `POST /api/reminders/bulk` : Bulk upload data reminder (dari Excel / import massal).
   - `PUT /api/reminders/:id` : Update data reminder.
   - `PATCH /api/reminders/:id/status` : Toggle status pengingat (Belum / Selesai).
   - `PATCH /api/reminders/mark-all-completed` : Menandai semua pengingat menjadi Selesai.
   - `DELETE /api/reminders/:id` : Menghapus reminder spesifik.
   - `DELETE /api/reminders` : Mengosongkan seluruh database reminder.

3. **Database SQLite Lokal**
   - Menggunakan driver SQLite berkinerja tinggi tanpa dependensi kompilasi eksternal.
   - Data otomatis tersimpan persisten di folder `data/reminders.db`.

4. **Automated Scheduler (node-cron)**
   - Mengecek pengingat yang jatuh tempo secara otomatis setiap menit (`* * * * *`).
   - Logging realtime status jatuh tempo pada konsol server.

5. **Client Fetch API & Offline Resilience**
   - Frontend di [public/js/main.js](file:///c:/Users/restu/.gemini/antigravity/scratch/yres/public/js/main.js) berkomunikasi langsung ke backend Express secara asynchronous menggunakan `fetch()`.
   - Tetap memiliki fallback caching lokal sehingga aman digunakan.

---

## 💻 Cara Menjalankan Aplikasi

1. **Instal Dependensi:**
   ```bash
   npm install
   ```

2. **Jalankan Server:**
   ```bash
   npm start
   ```
   Atau untuk mode development (auto-reload):
   ```bash
   npm run dev
   ```

3. **Buka di Browser:**
   Akses `http://localhost:3000` (atau port alternatif seperti `http://localhost:3001` jika port 3000 sedang digunakan).