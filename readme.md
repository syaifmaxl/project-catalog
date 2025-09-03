# Project Catalog 🚀


## Tech Stack

| Bagian | Teknologi |
| :--- | :--- |
| **Struktur Utama** | `pnpm Workspaces`, `TypeScript` |
| **Frontend** | `React`, `Vite`, `Tailwind CSS` |
| **Backend** | `Express.js`, `Prisma` (ORM) |

---

## 📂 Struktur Folder

Project ini menggunakan `pnpm workspaces` untuk mengelola beberapa project dalam satu repo.

```
/project-catalog
├── /apps
│   ├── /frontend     // Semua kode React & Tailwind
│   └── /backend      // Semua kode Express & Prisma
├── package.json      // Script utama untuk menjalankan semua project
└── pnpm-workspace.yaml
```
---

## 🚀 Memulai Project

Berikut adalah langkah-langkah untuk menjalankan project ini di komputermu.

### 1. Kebutuhan Sistem
Pastikan kamu sudah menginstall:
- [Node.js](https://nodejs.org/) (disarankan versi LTS v20 atau lebih baru)
- [pnpm](https://pnpm.io/installation) (jalankan `npm install -g pnpm` jika belum punya)

### 2. Langkah-langkah Instalasi

1.  **Clone repository ini:**
    ```bash
    git clone https://github.com/syaifmaxl/project-catalog.git
    cd project-catalog
    ```

2.  **Install semua dependencies:**
    Jalankan perintah ini di **folder root**. pnpm akan secara otomatis menginstall dependensi untuk `frontend` dan `backend`.
    ```bash
    pnpm install
    ```

3.  **Setup Backend & Database:**
    - Pindah ke direktori backend: `cd apps/backend`
    - Buat file `.env` dari contoh yang ada. File ini berisi koneksi ke database.
      ```bash
      # Copy dari .env.example (buat file .env.example dulu jika belum ada)
      cp .env.example .env
      ```
    - Buka file `.env` dan sesuaikan `DATABASE_URL` dengan koneksi database-mu.
      ```env
      # Contoh untuk PostgreSQL
      DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"
      ```
    - Jalankan migrasi database menggunakan Prisma untuk membuat tabel-tabel yang dibutuhkan.
      ```bash
      pnpm prisma migrate dev
      ```
    - Kembali ke folder root: `cd ../..`

### 3. Menjalankan Project
Untuk menjalankan server backend dan frontend secara bersamaan, cukup jalankan satu perintah dari **folder root**:

```bash
pnpm dev
```

- Backend akan berjalan di `http://localhost:3000` (atau port lain yang disetup).
- Frontend akan berjalan di `http://localhost:5173` dan otomatis terhubung ke backend melalui proxy.

---

## Perintah yang Tersedia

Semua perintah ini dijalankan dari **folder root**.

- `pnpm dev`: Menjalankan frontend dan backend secara bersamaan untuk development.
- `pnpm dev:frontend`: Hanya menjalankan aplikasi frontend (React).
- `pnpm dev:backend`: Hanya menjalankan server backend (Express).

---