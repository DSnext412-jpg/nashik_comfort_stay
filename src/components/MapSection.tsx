import { MapPin, Navigation, Phone } from 'lucide-react'
import Reveal from './Reveal'
import hotelData, { telLink } from '../data/hotelData'

export default function MapSection() {
  return (
    <section id="map" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="rounded-lg bg-white p-6 shadow-xl shadow-pine/10 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-5">
              {/* Info side */}
              <div className="lg:col-span-2">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
                  Directions
                </p>
                <h2 className="mt-3 font-serif text-3xl leading-tight text-ink sm:text-4xl">
                  Find Us in Nashik
                </h2>
                <div className="mt-5 h-px w-16 bg-gold" aria-hidden="true" />

                <address className="mt-6 flex items-start gap-2.5 text-sm leading-relaxed text-ink-soft not-italic">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                  <span>
                    {hotelData.address.line1},
                    <br />
                    {hotelData.address.line2},
                    <br />
                    {hotelData.address.line3},
                    <br />
                    {hotelData.address.city}, {hotelData.address.state} {hotelData.address.pincode}
                  </span>
                </address>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                  <a
                    href={hotelData.map.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-pine"
                  >
                    <Navigation className="h-4 w-4" aria-hidden="true" />
                    Get Directions
                  </a>
                  <a
                    href={telLink}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-pine px-6 py-3 text-sm font-semibold text-pine transition-colors hover:bg-pine hover:text-white"
                  >
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    Call Hotel
                  </a>
                </div>
              </div>

              {/* Map side */}
              <div className="lg:col-span-3">
                <div className="h-72 w-full overflow-hidden rounded-lg sm:h-96">
                  <iframe
                    src={hotelData.map.embedUrl}
                    title="Google Map — Nashik Comfort Stay, Pathardi Phata, Nashik"
                    className="h-full w-full border-0"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
