# Nashik Comfort Stay

A premium, fully responsive **static hotel website** for **Nashik Comfort Stay**
(Pathardi Phata / Indira Nagar, Nashik, Maharashtra).

Built with **React + Vite + TypeScript + Tailwind CSS** and **Lucide React** icons.
No backend, no database, no payment gateway — everything on the site is
hand-edited from one central data file and plain image files.

---

## Quick start

```bash
npm install
npm run dev        # start the dev server
npm run build      # type-check + production build into dist/
npm run preview    # preview the production build locally
npm run lint       # run oxlint
```

---

## Project structure

```
public/
  images/
    hero/        # hero background (hero.jpg)
    rooms/       # one photo per room: room-202.jpg ... room-212.jpg
    hotel/       # about-section photo (hotel-about.jpg)
    location/    # location-section photo (location.jpg)
    gallery/     # gallery photos (gallery-*.jpg)
    placeholders/# graceful fallback image when a photo is missing
src/
  data/
    hotelData.ts # ★ THE central editable file — change almost everything here
  components/    # one component per section (Header, Hero, Rooms, Gallery, ...)
  lib/           # small helpers (image fallback, icon map)
  pages/
    Home.tsx     # page that assembles all sections in order
  index.css      # Tailwind theme (brand colors, fonts, animations)
index.html       # SEO meta tags + JSON-LD structured data + Google Fonts
render.yaml      # Render static-site config (optional — dashboard also works)
scripts/
  generate-placeholders.mjs  # regenerates the branded placeholder images
  optimize-images.mjs        # resizes/compresses real photos for the web
  validate-images.mjs        # checks every image in public/images is readable
  smoke-test.mjs             # render-time smoke test
```

---

## How to edit hotel information (phone, email, address, texts)

Open **`src/data/hotelData.ts`**. It contains clearly commented sections:

- **Contact** — `phone`, `phoneDisplay`, `email`, `whatsappNumber`, `whatsappDefaultMessage`
- **Address & Maps** — `address.*`, `map.embedUrl`, `map.directionsUrl`
- **Hero** — `hero.heading`, `hero.subheading`, `hero.description`, button labels
- **Intro / Features / About / Location** — all headings and paragraph text
- **Rooms** — `rooms` array (each room's number, type, title, description, image, amenities)
- **Booking sources** — `booking.sources`
- **Payment** — `payment.methods`, and slots for a future `upiId` / `qrImage`
- **Social links** — `socialLinks.instagram` / `facebook` (empty until filled in)

Change a value, save, and the whole site updates. No component code changes needed.

> Note: your machine's global npm config has `save=false`, which only affects
> installing new packages, not this project. To add a package later, use
> `npm install --save <pkg>` / `npm install --save-dev <pkg>`.

---

## How to replace room images

1. Go to `public/images/rooms/`.
2. Replace the matching file with the real photograph. Keep the **same filename**,
   e.g. room **202** → `public/images/rooms/room-202.jpg`.
3. Recommended size: **1200 × 800 px** (JPG). No code changes required.

If a file is ever missing, the site automatically shows the branded fallback
(`public/images/placeholders/fallback.jpg`) instead of a broken image.

---

## How to replace gallery images

1. Go to `public/images/gallery/`.
2. Replace the matching `gallery-*.jpg` with your photo (keep the same filename),
   **or** add/remove entries in `hotelData.gallery.images` (each entry has
   `src`, `alt`, `category` where category is `Rooms`, `Hotel`, `Interiors` or `Location`).
3. The grid and lightbox adapt automatically to whatever you list.

---

## How to replace the hero / about / location photos

| Photo               | File                                   |
| ------------------- | -------------------------------------- |
| Hero background     | `public/images/hero/hero.jpg` (1920×1080) |
| About section       | `public/images/hotel/hotel-about.jpg`  |
| Location section    | `public/images/location/location.jpg`  |

Replace the file, keep the name, done.

---

## How to add Agoda / Booking.com / FabHotels links

In `src/data/hotelData.ts`, fill in the `bookingLinks` block:

```ts
bookingLinks: {
  agoda: 'https://www.agoda.com/...',
  booking: 'https://www.booking.com/...',
  fabHotels: 'https://www.fabhotels.com/...',
}
```

When a URL is **empty**, the site shows the room as "Enquire / Call" instead —
no broken links. When a URL is filled in, a **"Book on Agoda / Booking.com /
FabHotels"** card appears automatically in the *How Can You Book?* section.

---

## Placeholder images

The repository ships with elegant branded placeholder photos so the site looks
complete before real photography is available. To regenerate them:

```bash
npm run images
```

### Optimizing real photos for the web

After dropping in real photos, resize/compress them for fast loading:

```bash
npm run optimize
```

This keeps your filenames (rooms → 1200px, hero → 1920px, etc.), strips EXIF
metadata, and regenerates the branded fallback image. Run
`npm run validate` to confirm every image in `public/images/` is readable.

---

## SEO

- Title, description, keywords, Open Graph and Twitter meta tags live in **`index.html`**.
- JSON-LD **LodgingBusiness** structured data (name, address, phone, email) is also
  in `index.html` — only confirmed details are included.
- **Before going live:** update the domain in `index.html` if needed
  (`link rel="canonical"`, `og:url`, `twitter:image`, `og:image`, and the JSON-LD `url`).
  The example currently uses `https://nashikcomfortstay.in/` as a placeholder.

---

## Google Maps

The map embed uses Google's **no-API-key** embed endpoint (built from the address
in `hotelData.address.mapsQuery`), so no API key or backend is required.
**Get Directions** opens Google Maps navigation in a new tab.

---

## Deployment to Render (Static Site)

**Option A — render.yaml (included):** connect your GitHub repo to Render and it
will detect the `render.yaml`. Settings:

- **Build Command:** `npm install && npm run build`
- **Publish Directory:** `dist`

**Option B — dashboard:** create a new **Static Site**, point it at your repo, and
use the same Build Command / Publish Directory above.

---

## GitHub

The repo is ready to push as-is:

```bash
git init
git add .
git commit -m "Initial commit: Nashik Comfort Stay static website"
git branch -M main
git remote add origin https://github.com/<you>/<repo>.git
git push -u origin main
```

`.gitignore` excludes `node_modules`, `dist`, `.env*`, and OS/editor files.
No secrets or API keys are used anywhere in this project.

---

## Smoke test

A lightweight render-time test checks that the whole homepage renders and all
confirmed hotel facts appear:

```bash
npm run smoke
```
