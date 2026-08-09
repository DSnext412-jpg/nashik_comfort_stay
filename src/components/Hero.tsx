import { ChevronDown, MapPin } from 'lucide-react'
import hotelData, { telLink } from '../data/hotelData'

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] w-full overflow-hidden">
      {/* Background image with slow zoom + readable overlay */}
      <div className="absolute inset-0">
        <img
          src={hotelData.hero.image}
          alt="Interior of Nashik Comfort Stay, a comfortable hotel in Nashik"
          className="hero-zoom h-full w-full object-cover"
          loading="eager"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-pine/80 via-pine/55 to-pine/80"
          aria-hidden="true"
        />
      </div>

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-4xl flex-col items-center justify-center px-4 py-28 text-center sm:px-6">
        <p
          className="hero-anim flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-gold-light sm:text-sm"
          style={{ animationDelay: '0.1s' }}
        >
          <span className="h-px w-8 bg-gold" aria-hidden="true" />
          {hotelData.hero.eyebrow}
          <span className="h-px w-8 bg-gold" aria-hidden="true" />
        </p>

        <h1
          className="hero-anim mt-5 font-serif text-4xl leading-[1.12] text-white sm:text-6xl lg:text-7xl"
          style={{ animationDelay: '0.25s' }}
        >
          {hotelData.hero.heading}
        </h1>

        <p
          className="hero-anim mt-6 text-lg font-light tracking-wide text-white/90 sm:text-xl"
          style={{ animationDelay: '0.4s' }}
        >
          {hotelData.hero.subheading}
        </p>

        <p
          className="hero-anim mt-4 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base"
          style={{ animationDelay: '0.5s' }}
        >
          {hotelData.hero.description}
        </p>

        <div
          className="hero-anim mt-9 flex w-full max-w-md flex-col items-center gap-3 sm:w-auto sm:max-w-none sm:flex-row sm:gap-4"
          style={{ animationDelay: '0.65s' }}
        >
          <a
            href={telLink}
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('rooms')
            }}
            className="w-full rounded-full bg-gold px-8 py-3.5 text-center text-sm font-semibold text-white shadow-lg transition-all hover:bg-gold-light hover:text-ink sm:w-auto"
          >
            {hotelData.hero.primaryCta}
          </a>
          <a
            href={hotelData.map.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/60 px-8 py-3.5 text-center text-sm font-semibold text-white transition-all hover:border-white hover:bg-white/10 sm:w-auto"
          >
            <MapPin className="h-4 w-4" aria-hidden="true" />
            {hotelData.hero.secondaryCta}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        type="button"
        onClick={() => scrollToSection('intro')}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-white/70 transition-colors hover:text-white"
        aria-label="Scroll down to explore"
      >
        <span className="flex h-10 w-6 items-start justify-center rounded-full border border-white/50 pt-2">
          <span className="animate-scroll-dot h-1.5 w-1.5 rounded-full bg-gold-light" />
        </span>
        <ChevronDown className="mx-auto mt-1 h-4 w-4" aria-hidden="true" />
      </button>
    </section>
  )
}
