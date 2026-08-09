/* ============================================================
   PLACEHOLDER IMAGE GENERATOR
   ------------------------------------------------------------
   Generates branded, premium-looking placeholder photographs for
   every image the website expects, so the site looks complete
   before real hotel photos are available.

   Run with:  node scripts/generate-placeholders.mjs

   Replace any generated file under public/images/... with the
   real hotel photograph of the same filename — no code changes
   needed. See the README for details.

   Uses "sharp" (a devDependency) to rasterize SVG to JPEG.
   ============================================================ */

import sharp from 'sharp'
import { mkdir } from 'node:fs/promises'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('..', import.meta.url))
const imagesDir = new URL('../public/images/', import.meta.url)

async function writeImage(file, svg) {
  const out = fileURLToPath(new URL(file, imagesDir))
  await mkdir(dirname(out), { recursive: true })
  await sharp(Buffer.from(svg))
    .jpeg({ quality: 88, mozjpeg: false })
    .toFile(out)
  console.log('generated', file.replace(root, ''))
}

function esc(text) {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

/* ---------- SVG building blocks ---------- */

const serif = "'Georgia', 'Times New Roman', serif"

function gradientSvg({ w, h, colors, label, sub, accent = '#0e5a57' }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      ${colors.map((c, i) => `<stop offset="${Math.round((i / (colors.length - 1)) * 100)}%" stop-color="${c}"/>`).join('\n')}
    </linearGradient>
    <radialGradient id="light" cx="0.2" cy="0.1" r="0.9">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.28"/>
      <stop offset="60%" stop-color="#ffffff" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#bg)"/>
  <rect width="${w}" height="${h}" fill="url(#light)"/>
  <rect x="0" y="${h - 120}" width="${w}" height="120" fill="#0b2326" opacity="0.18"/>
  <rect x="0" y="${h - 6}" width="${w}" height="6" fill="${accent}" opacity="0.85"/>
  ${label
    ? `
  <text x="${w / 2}" y="${h / 2 - 8}" font-family="${serif}" font-size="${Math.round(h * 0.07)}" font-weight="700" fill="${accent}" text-anchor="middle">${esc(label)}</text>
  <rect x="${w / 2 - 45}" y="${h / 2 + 18}" width="90" height="2" fill="#c6a24b"/>
  ${sub ? `<text x="${w / 2}" y="${h / 2 + 58}" font-family="${serif}" font-size="${Math.round(h * 0.033)}" fill="#4d5f66" text-anchor="middle" letter-spacing="4">${esc(sub)}</text>` : ''}
  <text x="${w / 2}" y="${h - 40}" font-family="${serif}" font-size="${Math.round(h * 0.028)}" font-style="italic" fill="#ffffff" opacity="0.85" text-anchor="middle">Nashik Comfort Stay</text>`
    : `<text x="${w / 2}" y="${h - 40}" font-family="${serif}" font-size="${Math.round(h * 0.028)}" font-style="italic" fill="#ffffff" opacity="0.85" text-anchor="middle">Nashik Comfort Stay</text>`}
</svg>`
}

/* ---------- Palettes ---------- */

const roomPalettes = [
  ['#e9ddc8', '#cfb98f', '#b9a06f'],
  ['#dbe7ea', '#bcd1d4', '#9cbdc1'],
  ['#f0e6d6', '#dcc5a4', '#c3a877'],
  ['#d9e0dd', '#b7c4c1', '#96aaa8'],
  ['#efe3cf', '#dcc6a6', '#c0a67e'],
  ['#d5e2e4', '#aec9cc', '#88afb4'],
]

const acPalette = ['#d5e6e7', '#a8c8cb', '#7ca9ad']

/* ---------- Rooms ---------- */

const acRooms = ['202', '203', '204', '205', '206', '207']
const nonAcRooms = ['208', '209', '210', '211', '212']

for (const [i, num] of acRooms.entries()) {
  const colors = roomPalettes[i % roomPalettes.length]
  const svg = gradientSvg({
    w: 1200,
    h: 800,
    colors,
    label: `ROOM ${num}`,
    sub: 'AC COMFORT ROOM',
  })
  await writeImage(`rooms/room-${num}.jpg`, svg)
}

for (const [i, num] of nonAcRooms.entries()) {
  const colors = roomPalettes[(i + 3) % roomPalettes.length]
  const svg = gradientSvg({
    w: 1200,
    h: 800,
    colors,
    label: `ROOM ${num}`,
    sub: 'NON-AC COMFORT ROOM',
  })
  await writeImage(`rooms/room-${num}.jpg`, svg)
}

/* ---------- Hero ---------- */

await writeImage(
  'hero/hero.jpg',
  gradientSvg({
    w: 1920,
    h: 1080,
    colors: ['#0e5a57', '#145f5c', '#24333a', '#0b2b29'],
    accent: '#c6a24b',
  }),
)

/* ---------- Hotel / about ---------- */

await writeImage(
  'hotel/hotel-about.jpg',
  gradientSvg({
    w: 1200,
    h: 900,
    colors: ['#d5e6e7', '#a8c8cb', '#7ca9ad'],
    label: 'NASHIK',
    sub: 'COMFORT STAY',
    accent: '#0e5a57',
  }),
)

/* ---------- Location ---------- */

await writeImage(
  'location/location.jpg',
  gradientSvg({
    w: 1200,
    h: 900,
    colors: ['#cfe0e8', '#a4c0cd', '#7ba3b5'],
    label: 'PATHARDI PHATA',
    sub: 'INDIRA NAGAR · NASHIK',
    accent: '#0e5a57',
  }),
)

/* ---------- Gallery ---------- */

const gallerySpecs = [
  { file: 'gallery-rooms-1.jpg', colors: acPalette, label: 'AC ROOM', sub: 'ROOMS' },
  { file: 'gallery-rooms-2.jpg', colors: roomPalettes[1], label: 'ROOM', sub: 'ROOMS' },
  { file: 'gallery-interiors-1.jpg', colors: roomPalettes[5], label: 'INTERIORS', sub: 'COMFORT SPACE' },
  { file: 'gallery-hotel-1.jpg', colors: ['#0e5a57', '#145f5c', '#24333a'], label: 'HOTEL', sub: 'PATHARDI PHATA' },
  { file: 'gallery-rooms-3.jpg', colors: roomPalettes[4], label: 'ROOM', sub: 'ROOMS' },
  { file: 'gallery-interiors-2.jpg', colors: roomPalettes[0], label: 'INTERIOR', sub: 'WARM & CLEAN' },
  { file: 'gallery-location-1.jpg', colors: ['#cfe0e8', '#a4c0cd', '#7ba3b5'], label: 'LOCATION', sub: 'INDIRA NAGAR' },
  { file: 'gallery-hotel-2.jpg', colors: ['#145f5c', '#1c6d68', '#2b3a40'], label: 'RECEPTION', sub: 'WELCOME' },
  { file: 'gallery-rooms-4.jpg', colors: roomPalettes[2], label: 'ROOM DETAILS', sub: 'ROOMS' },
  { file: 'gallery-location-2.jpg', colors: ['#b7cdd9', '#8fb2c2', '#6a93a6'], label: 'AROUND US', sub: 'NASHIK' },
]

const galleryDims = [
  [1000, 750],
  [1000, 800],
  [1000, 900],
  [1000, 750],
  [1000, 850],
  [1000, 700],
  [1000, 750],
  [1000, 800],
  [1000, 900],
  [1000, 750],
]

for (const [i, spec] of gallerySpecs.entries()) {
  const [w, h] = galleryDims[i]
  const svg = gradientSvg({ w, h, colors: spec.colors, label: spec.label, sub: spec.sub })
  await writeImage(`gallery/${spec.file}`, svg)
}

/* ---------- Fallback ---------- */

await writeImage(
  'placeholders/fallback.jpg',
  gradientSvg({
    w: 1200,
    h: 800,
    colors: ['#dbe7ea', '#bcd1d4', '#9cbdc1'],
    label: 'NASHIK COMFORT STAY',
    sub: 'PHOTO COMING SOON',
    accent: '#0e5a57',
  }),
)

console.log('\nAll placeholder images generated.')
