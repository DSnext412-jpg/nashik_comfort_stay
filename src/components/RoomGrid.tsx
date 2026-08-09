import { useState } from 'react'
import type { Room, RoomType } from '../data/hotelData'
import { hotelData } from '../data/hotelData'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import RoomCategories from './RoomCategories'
import RoomCard from './RoomCard'
import RoomModal from './RoomModal'

type Filter = 'all' | RoomType

const FILTERS: { id: Filter; label: string }[] = [
  { id: 'all', label: 'All Rooms' },
  { id: 'AC', label: 'AC Rooms' },
  { id: 'Non-AC', label: 'Non-AC Rooms' },
]

export default function RoomGrid() {
  const [filter, setFilter] = useState<Filter>('all')
  const [selected, setSelected] = useState<Room | null>(null)

  const visibleRooms = hotelData.rooms.filter(
    (room) => filter === 'all' || room.type === filter,
  )

  return (
    <section id="rooms" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Accommodation"
          title={hotelData.roomsHeading.title}
          subtitle={hotelData.roomsHeading.subtitle}
        />

        {/* Two category blocks */}
        <RoomCategories />

        {/* Filter */}
        <Reveal className="mt-14">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilter(f.id)}
                aria-pressed={filter === f.id}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                  filter === f.id
                    ? 'bg-pine text-white shadow-md shadow-pine/20'
                    : 'bg-white text-ink-soft hover:text-pine'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Room grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleRooms.map((room, i) => (
            <Reveal key={room.number} delay={(i % 3) * 80}>
              <RoomCard room={room} onView={setSelected} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <p className="text-sm text-ink-soft">
            Have a question about a specific room?{' '}
            <a
              href={`tel:${hotelData.phone}`}
              className="font-semibold text-pine underline-offset-4 hover:underline"
            >
              Call {hotelData.phoneDisplay}
            </a>{' '}
            for availability and details.
          </p>
        </Reveal>
      </div>

      {/* Room modal */}
      {selected && <RoomModal room={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
