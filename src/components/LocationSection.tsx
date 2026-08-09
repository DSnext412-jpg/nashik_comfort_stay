import { Building2, MapPin } from 'lucide-react'
import Reveal from './Reveal'
import hotelData from '../data/hotelData'
import { onImageError } from '../lib/imageFallback'

export default function LocationSection() {
  return (
    <section id="location" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Text */}
          <div className="order-2 lg:order-1">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
                {hotelData.location.eyebrow}
              </p>
              <h2 className="mt-3 font-serif text-3xl leading-tight text-ink sm:text-4xl">
                {hotelData.location.heading}
              </h2>
              <div className="mt-5 h-px w-16 bg-gold" aria-hidden="true" />
              <p className="mt-6 text-base leading-relaxed text-ink-soft sm:text-lg">
                {hotelData.location.text}
              </p>
            </Reveal>

            <Reveal className="mt-8">
              <div className="rounded-lg bg-white p-6 shadow-md shadow-pine/5">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-pine-soft text-pine">
                    <Building2 className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-base font-semibold text-ink">Our Address</h3>
                </div>
                <address className="mt-4 flex items-start gap-2 text-sm leading-relaxed text-ink-soft not-italic">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
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
              </div>
            </Reveal>
          </div>

          {/* Image */}
          <Reveal className="order-1 lg:order-2">
            <div className="relative">
              <div
                className="absolute -right-3 -top-3 hidden h-full w-full rounded-lg border border-gold/60 sm:block"
                aria-hidden="true"
              />
              <img
                src={hotelData.location.image}
                alt="Location area near Pathardi Phata, Indira Nagar, Nashik"
                loading="lazy"
                onError={onImageError}
                className="relative aspect-[4/3] w-full rounded-lg object-cover shadow-xl shadow-pine/10"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
