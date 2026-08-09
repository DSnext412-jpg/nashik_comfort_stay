/* Render-time smoke test.
   Renders the whole Home page to static markup and asserts the key
   sections + confirmed hotel facts appear. Run via: node scripts/smoke-test.mjs */
import { renderToStaticMarkup } from 'react-dom/server'
import { createElement } from 'react'

const { default: Home } = await import(
  new URL('./.smoke/Home.js', import.meta.url).href
)

const html = renderToStaticMarkup(createElement(Home))

const assertions = [
  ['Hero heading', 'Nashik Comfort Stay'],
  ['Intro heading', 'A Comfortable Stay in Nashik'],
  ['Features heading', 'Why Stay With Us?'],
  ['Rooms heading', 'Our Rooms'],
  ['AC category', 'AC Rooms'],
  ['Non-AC category', 'Non-AC Rooms'],
  ['Room 202', 'Room 202'],
  ['Room 212', 'Room 212'],
  ['About heading', 'About Nashik Comfort Stay'],
  ['Gallery heading', 'Gallery'],
  ['Location heading', 'Stay Close to What Matters'],
  ['Map heading', 'Find Us in Nashik'],
  ['Booking heading', 'How Can You Book?'],
  ['Payment heading', 'Payment Options'],
  ['Contact heading', 'Get in Touch'],
  ['Phone', '78882 88655'],
  ['Email', 'shivalikcomfortstay@gmail.com'],
  ['Address line 1', 'Commercial 2nd Floor, Shivalik Sky Park'],
  ['WhatsApp button', 'Chat With Us'],
  ['Footer', 'All rights reserved'],
  ['tel link', 'tel:7888288655'],
  ['mailto link', 'mailto:shivalikcomfortstay@gmail.com'],
  ['directions link', 'google.com/maps/dir'],
  ['maps embed', 'output=embed'],
  ['wa.me link', 'wa.me/917888288655'],
  ['Instagram link', 'instagram.com/nashikcomfortstay_00'],
  ['Facebook link', 'facebook.com/NashikComfortStay'],
]

let failures = 0
for (const [label, needle] of assertions) {
  const ok = html.includes(needle)
  if (!ok) failures++
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${label}  ->  "${needle}"`)
}

// Every AC room number present in the rendered page
for (const num of ['202', '203', '204', '205', '206', '207', '208', '209', '210', '211', '212']) {
  const ok = html.includes(`Room ${num}`)
  if (!ok) failures++
  console.log(`${ok ? 'PASS' : 'FAIL'}  Room number ${num} rendered`)
}

// The graceful image fallback must exist alongside the build
import { existsSync } from 'node:fs'
const fallbackOk = existsSync(new URL('../public/images/placeholders/fallback.jpg', import.meta.url))
if (!fallbackOk) failures++
console.log(`${fallbackOk ? 'PASS' : 'FAIL'}  Fallback image file exists`)

console.log(failures === 0 ? '\nSMOKE TEST PASSED' : `\nSMOKE TEST FAILED (${failures} failures)`)
process.exit(failures === 0 ? 0 : 1)
