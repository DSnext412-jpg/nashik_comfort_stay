import { Check, Eye, MessageCircle } from 'lucide-react'
import type { Room } from '../data/hotelData'
import { whatsappLink } from '../data/hotelData'
import { onImageError } from '../lib/imageFallback'

interface RoomCardProps {
  room: Room
  onView: (room: Room) => void
}

export default function RoomCard({ room, onView }: RoomCardProps) {
  const enquiry = whatsappLink(
    `Hello Nashik Comfort Stay, I would like to enquire about Room ${room.number} availability.`,
  )
  const isAc = room.type === 'AC'

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-md shadow-pine/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-pine/10">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={room.image}
          alt={`${room.title} — Room ${room.number} at Nashik Comfort Stay`}
          loading="lazy"
          onError={onImageError}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-pine/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          aria-hidden="true"
        />

        {/* Badges */}
        <div className="absolute left-3 top-3 flex items-center gap-2">
          <span className="rounded bg-pine px-2.5 py-1 font-serif text-xs font-bold text-white shadow-sm">
            Room {room.number}
          </span>
          <span
            className={`rounded px-2.5 py-1 text-xs font-semibold shadow-sm ${
              isAc ? 'bg-gold text-white' : 'bg-white/90 text-pine'
            }`}
          >
            {isAc ? 'AC' : 'Non-AC'}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-serif text-xl text-ink">{room.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
          {room.description}
        </p>

        {/* Amenities */}
        <ul className="mt-4 grid grid-cols-1 gap-1.5">
          {room.amenities.map((amenity) => (
            <li key={amenity} className="flex items-center gap-2 text-xs text-ink-soft">
              <Check className="h-3.5 w-3.5 shrink-0 text-gold" aria-hidden="true" />
              {amenity}
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="mt-5 flex gap-3">
          <button
            type="button"
            onClick={() => onView(room)}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-pine px-4 py-2.5 text-sm font-semibold text-pine transition-colors hover:bg-pine hover:text-white"
          >
            <Eye className="h-4 w-4" aria-hidden="true" />
            View Room
          </button>
          <a
            href={enquiry}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gold px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-pine"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Enquire Now
          </a>
        </div>
      </div>
    </article>
  )
}
