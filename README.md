<div align="center">

<img src="./app/icon.svg" width="80" height="80" alt="Golden Movie Hub" />

# Golden Movie Hub

**Directory minimalis untuk situs streaming film & series Indonesia maupun luar negeri dengan subtitle Bahasa Indonesia.**

Dibangun dengan estetika _Swiss Design_ — dark mode, aksen kuning, presisi, fungsional. Tanpa gradasi, tanpa soft shadow, tanpa noise visual.

![Next.js](https://img.shields.io/badge/Next.js-14.2-000000?style=flat-square&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-FFD700?style=flat-square)

</div>

---

## Daftar Isi

- [Tentang Project](#tentang-project)
- [Fitur](#fitur)
- [Tech Stack](#tech-stack)
- [Filosofi Desain](#filosofi-desain)
- [Palet Warna](#palet-warna)
- [Struktur Project](#struktur-project)
- [Menjalankan Lokal](#menjalankan-lokal)
- [Menambah Provider](#menambah-provider)
- [Deployment](#deployment)
- [Aksesibilitas & Performa](#aksesibilitas--performa)
- [Browser Support](#browser-support)
- [Roadmap](#roadmap)
- [Credits](#credits)

---

## Tentang Project

Golden Movie Hub adalah halaman statis single-page yang berfungsi sebagai **direktori cepat** menuju situs-situs streaming film & series. Tidak menyimpan, tidak menyediakan, tidak mengalirkan konten apapun — hanya mengarahkan pengguna ke situs provider yang sudah ada.

Desainnya terinspirasi prinsip _Swiss Design_ dan dashboard kontrol presisi: grid-based, tipografi fungsional, border tipis sebagai pemisah, dan satu warna aksen (`#FFD700`) yang dipakai sangat terbatas.

---

## Fitur

- **Dark mode penuh** dengan aksen _Cyber Yellow_ yang strategis (hanya pada CTA & indikator aktif)
- **Grid responsif** — 1 kolom di HP, 2 kolom di tablet, 3 kolom di desktop
- **Provider dikelompokkan per region** — ID (Indonesia) dan INT (Luar Negeri)
- **Badge kualitas** per situs (HD / Full HD / 4K)
- **Status indikator** dengan animasi pulse yang menghormati `prefers-reduced-motion`
- **Halaman 404 kustom** yang match dengan bahasa desain utama
- **SEO-ready** — metadata, Open Graph, favicon SVG, `metadataBase`
- **Keyboard-friendly** — `:focus-visible` outline, `aria-label` eksplisit, semantic HTML
- **Safe-area iOS** — inset padding untuk iPhone dengan notch/home indicator
- **Zero layout shift** — font dimuat via `next/font` dengan `display: swap`

---

## Tech Stack

| Kategori | Tools |
|---|---|
| **Framework** | [Next.js 14.2](https://nextjs.org/) (App Router, Static Export-ready) |
| **UI Library** | [React 18.3](https://react.dev/) |
| **Language** | [TypeScript 5.5](https://www.typescriptlang.org/) dengan `strict: true` |
| **Styling** | [Tailwind CSS 3.4](https://tailwindcss.com/) dengan custom design tokens |
| **Fonts** | [Inter](https://rsms.me/inter/) (sans) + [JetBrains Mono](https://www.jetbrains.com/lp/mono/) (monospace) via `next/font` |
| **Icons** | Custom line-art SVG, stroke 1.5px (zero dependency) |
| **Build** | Next.js built-in (SWC compiler) |
| **Package Manager** | npm |

### Kenapa pilihan ini?

- **Next.js 14 App Router** — file-based routing, built-in optimizations, dan siap untuk Vercel.
- **Tailwind** daripada CSS Modules — velocity tinggi untuk iterasi desain plus design tokens via theme config.
- **Custom SVG icons** daripada library (lucide, heroicons) — kontrol penuh stroke width dan bundle size lebih kecil.
- **next/font** — font di-host lokal otomatis, tidak ada request ke Google Fonts saat runtime.

---

## Filosofi Desain

Mengadopsi **Swiss Design Principles** untuk menghindari "AI slope" (gradasi pelangi, soft shadow berlebih, elemen mengkilap tanpa fungsi):

- **Grid-based layout** — tata letak kaku, terorganisir seperti cetak biru teknik
- **Negative space** — setiap elemen punya ruang napas
- **Functional typography** — tipografi adalah elemen visual utama
- **No gradient, no soft shadow** — hanya `border border-stroke` untuk separasi
- **Single accent color** — Cyber Yellow `#FFD700` dipakai sangat terbatas untuk CTA dan status
- **Snappy interactions** — transisi `200ms ease-linear` biar terasa mekanikal, bukan bouncy

---

## Palet Warna

| Token | Hex | Penggunaan |
|---|---|---|
| `primary` | `#FFD700` | CTA, status aktif, accent |
| `background` | `#0A0A0B` | Page background |
| `surface` | `#141416` | Card & container |
| `stroke` | `#26262A` | Border 1px separator |
| `ink` | `#EDEDED` | Teks utama |
| `muted` | `#8A8A90` | Metadata & label kecil |

**Rasio kontras:**
- `ink` pada `background` ≈ 16:1 → WCAG AAA ✓
- `primary` pada `background` ≈ 14:1 → WCAG AAA ✓
- `muted` pada `background` ≈ 6.4:1 → WCAG AA ✓

---

## Struktur Project

```
golden-movie-hub/
├── app/
│   ├── layout.tsx          # Root layout, metadata, font loader
│   ├── page.tsx            # Homepage — Header + Directory + Footer
│   ├── not-found.tsx       # Halaman 404 kustom
│   ├── globals.css         # Design tokens, reduced-motion, safe-area
│   └── icon.svg            # Favicon (auto-detected oleh Next.js)
│
├── components/
│   ├── Header.tsx          # Logo + wordmark, sticky dengan backdrop-blur
│   ├── ProviderDirectory.tsx   # ⭐ INTI — grouped provider cards
│   ├── Footer.tsx          # Copyright minimal
│   ├── Logo.tsx            # Clapperboard SVG reusable
│   └── Icons.tsx           # Line-art icons (stroke 1.5px)
│
├── design.md               # Spec desain awal (Swiss Design)
├── tailwind.config.ts      # Design tokens & theme extensions
├── next.config.mjs         # Next.js config
├── tsconfig.json           # TypeScript strict mode
└── package.json
```

---

## Menjalankan Lokal

**Prasyarat:** Node.js 18.17+ dan npm.

```bash
# 1. Clone repo
git clone https://github.com/USERNAME/golden-movie-hub.git
cd golden-movie-hub

# 2. Install dependencies
npm install

# 3. Jalankan dev server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000)

**Script lain:**

| Command | Fungsi |
|---|---|
| `npm run dev` | Development server dengan hot reload |
| `npm run build` | Build production-ready |
| `npm run start` | Jalankan hasil build |
| `npm run lint` | ESLint check |

---

## Menambah Provider

Semua data provider ada di array `GROUPS` di `components/ProviderDirectory.tsx`.

Tambahkan entry baru:

```ts
{
  name: "Nama Situs",
  tagline: "Deskripsi singkat maksimal 2 baris.",
  quality: "HD" | "Full HD" | "4K",
  url: "https://situs-tujuan.com/",
  glyph: "clap" | "play" | "cam" | "monitor" | "plus",
}
```

**Field reference:**

- `glyph` — ikon dalam kotak hitam di kiri-atas kartu. Pilih yang paling cocok.
- `quality` — badge kuning di bawah ikon.
- `url` — link tujuan (akan dibuka di tab baru dengan `rel="noopener noreferrer"`).

Kalau butuh region/grup baru (misal Anime), tambahkan object baru ke `GROUPS` dengan `code`, `flag`, `title`, `tag`, dan `items`.

---

## Deployment

### Vercel (Rekomendasi)

1. Push repo ke GitHub
2. Buka [vercel.com](https://vercel.com) → login dengan GitHub
3. **Add New → Project** → pilih repo → **Deploy**
4. Selesai. Dapat URL `https://golden-movie-hub-xxx.vercel.app`

**Jangan lupa** update `metadataBase` di `app/layout.tsx` sesuai domain final:

```ts
metadataBase: new URL("https://golden-movie-hub.vercel.app"),
```

### Alternatif lain

- **Netlify** — mirip Vercel, drag-and-drop deploy juga bisa
- **Cloudflare Pages** — bandwidth unlimited, cocok untuk traffic besar
- **GitHub Pages** — butuh tambah `output: 'export'` di `next.config.mjs` (static export mode)

---

## Aksesibilitas & Performa

### Aksesibilitas

- `:focus-visible` outline kuning 2px untuk keyboard users
- `aria-label` eksplisit pada kartu provider dan link logo
- Ikon dekoratif dimask dengan `aria-hidden="true"`
- Touch target CTA minimal 44×44px (standar iOS/Android)
- `prefers-reduced-motion` mematikan animasi `bar-pulse` dan memperkecil transition
- Kontras warna WCAG AA/AAA di semua kombinasi teks

### Performa

- **First Load JS: ~87 kB** (shared) + 145 B per page — very light
- Semua halaman di-**prerender static** oleh Next.js (no SSR cost)
- Font dimuat lokal via `next/font`, `display: swap`, no FOUT
- SVG icons & favicon, no raster image requests
- Zero third-party scripts di runtime

---

## Browser Support

| Browser | Minimum Version |
|---|---|
| Chrome / Edge | 88+ |
| Firefox | 78+ |
| Safari (desktop) | 14+ |
| Safari iOS | 14+ |
| Samsung Internet | 15+ |

`backdrop-blur` di Header dibungkus `@supports` fallback, jadi browser lama tetap dapat background solid.

---

## Roadmap

Ide pengembangan lanjutan (opsional):

- [ ] Pindahkan data provider ke JSON/API biar bisa update tanpa rebuild
- [ ] Tambah filter/search sederhana (kalau jumlah provider > 20)
- [ ] Integrasi Vercel Analytics
- [ ] Health-check otomatis untuk status provider (online/offline badge)
- [ ] PWA support dengan offline fallback
- [ ] Dukungan region baru: Anime, K-Drama, Dokumenter

---

## Credits

- Desain & konsep awal di [`design.md`](./design.md)
- Tipografi: [Inter](https://rsms.me/inter/) oleh Rasmus Andersson
- Tipografi mono: [JetBrains Mono](https://www.jetbrains.com/lp/mono/) oleh JetBrains
- Framework: [Next.js](https://nextjs.org/) oleh Vercel

---

<div align="center">

**Made with precision, not noise.**

</div>
