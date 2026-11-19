
import sharp from 'sharp'
import { mkdir, readdir, rm, writeFile } from 'node:fs/promises'
import { join, dirname, extname, basename } from 'node:path'
import { fileURLToPath } from 'node:url'

// Disable libvips' image cache so Windows lets us overwrite files that were
// just read as inputs (otherwise the cached handle blocks the write).
sharp.cache(false)

const imagesDir = fileURLToPath(new URL('../public/images/', import.meta.url))

const MAX_WIDTH = {
  rooms: 1200,
  hero: 1920,
  hotel: 1200,
  location: 1200,
  gallery: 1200,
}

async function optimizeFolder(folder, maxWidth) {
  const dir = join(imagesDir, folder)
  let files
  try {
    files = await readdir(dir)
  } catch {
    console.log(`skipping ${folder} (no directory)`)
    return
  }

  for (const file of files) {
    if (file.startsWith('.__optimize-')) continue
    const ext = extname(file).toLowerCase()
    if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) continue
    const input = join(dir, file)
    const tmp = join(dir, `.__optimize-${file}.tmp.jpg`)

    const info = await sharp(input).metadata()
    if (!info.width) {
      console.log(`skipping ${folder}/${file} (no width)`)
      continue
    }

    if (info.width <= maxWidth) {
      // Already small enough — just re-encode to strip metadata and shrink.
      await sharp(input)
        .rotate()
        .withMetadata(false)
        .jpeg({ quality: 82, mozjpeg: true })
        .toFile(tmp)
    } else {
      await sharp(input)
        .rotate()
        .resize({ width: maxWidth, withoutEnlargement: true })
        .withMetadata(false)
        .jpeg({ quality: 82, mozjpeg: true })
        .toFile(tmp)
    }

    const out = join(dir, `${basename(file, ext)}.jpg`)
    const buf = await sharp(tmp).toBuffer()
    await writeFile(out, buf)
    await removeFile(tmp)
    const size = Math.round((await sharp(out).metadata()).size / 1024)
    console.log(
      `${folder}/${file}  ->  ${info.width}x${info.height} ${
        info.width <= maxWidth ? 'kept' : `-> ${maxWidth}px`
      }  (${size} KB)`,
    )
  }
}

async function removeFile(file) {
  await rm(file, { force: true })
}

/* ---------- Regenerate the branded fallback ---------- */

async function writeFallback() {
  const out = join(imagesDir, 'placeholders', 'fallback.jpg')
  await mkdir(dirname(out), { recursive: true })

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#dbe7ea"/>
      <stop offset="55%" stop-color="#eef3f4"/>
      <stop offset="100%" stop-color="#bcd1d4"/>
    </linearGradient>
    <radialGradient id="light" cx="0.2" cy="0.1" r="0.9">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.3"/>
      <stop offset="60%" stop-color="#ffffff" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="800" fill="url(#bg)"/>
  <rect width="1200" height="800" fill="url(#light)"/>
  <text x="600" y="380" font-family="Georgia, serif" font-size="56" font-weight="700" fill="#0e5a57" text-anchor="middle">Nashik Comfort Stay</text>
  <rect x="555" y="420" width="90" height="2" fill="#c6a24b"/>
  <text x="600" y="470" font-family="Georgia, serif" font-size="26" letter-spacing="6" fill="#4d5f66" text-anchor="middle">PHOTO COMING SOON</text>
</svg>`

  await sharp(Buffer.from(svg)).jpeg({ quality: 88, mozjpeg: false }).toFile(out)
  const size = Math.round((await sharp(out).metadata()).size / 1024)
  console.log(`placeholders/fallback.jpg  ->  regenerated branded fallback (${size} KB)`)
}

/* ---------- Run ---------- */

for (const [folder, maxWidth] of Object.entries(MAX_WIDTH)) {
  await optimizeFolder(folder, maxWidth)
}
await writeFallback()

console.log('\nAll images optimized for web.')
