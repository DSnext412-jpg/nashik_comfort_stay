import Reveal from './Reveal'
import { DataIcon } from './icons'
import hotelData from '../data/hotelData'

export default function IntroSection() {
  return (
    <section id="intro" className="relative z-10 -mt-16 sm:-mt-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="rounded-lg bg-white p-8 text-center shadow-xl shadow-pine/10 sm:p-12 lg:p-16">
            <h2 className="font-serif text-3xl leading-tight text-ink sm:text-4xl">
              {hotelData.intro.heading}
            </h2>
            <div className="mx-auto mt-5 h-px w-16 bg-gold" aria-hidden="true" />
            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-ink-soft sm:text-lg">
              {hotelData.intro.description}
            </p>
          </div>
        </Reveal>

        {/* Feature highlights */}
        <div className="mt-6 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {hotelData.intro.highlights.map((item, i) => (
            <Reveal key={item.title} delay={i * 90}>
              <div className="group h-full rounded-lg bg-white p-5 text-center shadow-md shadow-pine/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-pine/10 sm:p-7">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-pine-soft text-pine transition-colors duration-300 group-hover:bg-pine group-hover:text-gold-light">
                  <DataIcon name={item.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-sm font-semibold text-ink sm:text-base">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-ink-soft sm:text-sm">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
