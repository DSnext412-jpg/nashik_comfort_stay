import { Snowflake, Thermometer } from 'lucide-react'
import Reveal from './Reveal'
import hotelData from '../data/hotelData'

export default function RoomCategories() {
  return (
    <div className="mt-12 grid gap-6 lg:grid-cols-2">
      {hotelData.roomCategories.map((cat, i) => {
        const Icon = cat.type === 'AC' ? Snowflake : Thermometer
        return (
          <Reveal key={cat.type} delay={i * 120}>
            <div className="group relative h-full overflow-hidden rounded-lg bg-white shadow-md shadow-pine/5 transition-all duration-300 hover:shadow-lg hover:shadow-pine/10">
              {/* Teal accent top strip */}
              <div className="h-1.5 w-full bg-gradient-to-r from-pine via-pine-light to-gold" />
              <div className="p-7 sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-pine-soft text-pine transition-colors duration-300 group-hover:bg-pine group-hover:text-gold-light">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span className="rounded-full bg-mist px-3 py-1 text-xs font-semibold uppercase tracking-wider text-pine">
                    {cat.badge}
                  </span>
                </div>
                <h3 className="mt-5 font-serif text-2xl text-ink">{cat.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {cat.description}
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-2">
                  {cat.roomNumbers.map((num) => (
                    <span
                      key={num}
                      className="rounded border border-pine-soft bg-pine-soft/40 px-2.5 py-1 font-serif text-sm text-pine"
                    >
                      {num}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        )
      })}
    </div>
  )
}
