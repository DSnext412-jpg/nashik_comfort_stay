import Reveal from './Reveal'
import { DataIcon } from './icons'
import hotelData from '../data/hotelData'
import { onImageError } from '../lib/imageFallback'

export default function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <Reveal>
            <div className="relative">
              <div
                className="absolute -left-3 -top-3 hidden h-full w-full rounded-lg border border-gold/60 sm:block"
                aria-hidden="true"
              />
              <img
                src={hotelData.about.image}
                alt="Nashik Comfort Stay hotel interior"
                loading="lazy"
                onError={onImageError}
                className="relative aspect-[4/3] w-full rounded-lg object-cover shadow-xl shadow-pine/10"
              />
            </div>
          </Reveal>

          {/* Text */}
          <div>
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
                {hotelData.about.eyebrow}
              </p>
              <h2 className="mt-3 font-serif text-3xl leading-tight text-ink sm:text-4xl">
                {hotelData.about.heading}
              </h2>
              <div className="mt-5 h-px w-16 bg-gold" aria-hidden="true" />
              <p className="mt-6 text-base leading-relaxed text-ink-soft sm:text-lg">
                {hotelData.about.text}
              </p>
              <p className="mt-4 font-serif text-xl italic text-pine">
                {hotelData.about.tagline}
              </p>
            </Reveal>

            <div className="mt-8 space-y-5">
              {hotelData.about.points.map((point, i) => (
                <Reveal key={point.title} delay={i * 100}>
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-pine-soft text-pine">
                      <DataIcon name={point.icon} className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-ink">{point.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                        {point.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
