import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { DataIcon } from './icons'
import hotelData from '../data/hotelData'

export default function Features() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Nashik Comfort Stay"
          title={hotelData.features.heading}
          subtitle={hotelData.features.subtitle}
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {hotelData.features.items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 90}>
              <div className="group flex h-full items-start gap-4 rounded-lg bg-white p-6 shadow-md shadow-pine/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-pine/10">
                <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-pine-soft text-pine transition-colors duration-300 group-hover:bg-pine group-hover:text-gold-light">
                  <DataIcon name={item.icon} className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-ink">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                    {item.text}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
