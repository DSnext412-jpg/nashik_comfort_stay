import sharp from 'sharp'
import { readdir } from 'node:fs/promises'
import { join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'

const imagesDir = fileURLToPath(new URL('../public/images/', import.meta.url))
let checked = 0
let bad = 0

async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory()) {
      await walk(full)
      continue
    }
    if (!/\.(jpe?g|png|webp)$/i.test(entry.name)) continue
    checked++
    try {
      const m = await sharp(full).metadata()
      if (!m.width || !m.height) {
        bad++
        console.log('NO DIMS:', relative(imagesDir, full))
      }
    } catch (e) {
      bad++
      console.log('ERROR:', relative(imagesDir, full), e.message)
    }
  }
}

await walk(imagesDir)
console.log(`checked ${checked} images; bad: ${bad}`)
process.exit(bad === 0 ? 0 : 1)
