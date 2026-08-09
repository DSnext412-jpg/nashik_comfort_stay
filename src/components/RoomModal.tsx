import { useEffect, useRef } from 'react'
import { Check, MessageCircle, Phone, X } from 'lucide-react'
import type { Room } from '../data/hotelData'
import { hotelData, whatsappLink, telLink } from '../data/hotelData'
import { onImageError } from '../lib/imageFallback'

interface RoomModalProps {
  room: Room
  onClose: () => void
}

export default function RoomModal({ room, onClose }: RoomModalProps) {
  const closeRef = useRef<HTMLButtonElement | null>(null)
  const enquiry = whatsappLink(
    `Hello Nashik Comfort Stay, I would like to enquire about Room ${room.number} availability.`,
  )

  // Close on Escape + move focus into the dialog
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    closeRef.current?.focus()
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="room-modal-title"
    >
      {/* Backdrop */}
      <button
        type="button"
        className="absolute inset-0 bg-pine/80 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close room details"
      />

      {/* Panel */}
      <div className="relative z-10 max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-2xl bg-white shadow-2xl sm:rounded-2xl">
        {/* Close */}
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-pine/80 text-white transition-colors hover:bg-pine"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Image */}
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-t-2xl">
          <img
            src={room.image}
            alt={`${room.title} — Room ${room.number} at Nashik Comfort Stay`}
            onError={onImageError}
            className="h-full w-full object-cover"
          />
          <div className="absolute left-4 top-4 flex gap-2">
            <span className="rounded bg-pine px-3 py-1 font-serif text-sm font-bold text-white">
              Room {room.number}
            </span>
            <span className="rounded bg-gold px-3 py-1 text-sm font-semibold text-white">
              {room.type === 'AC' ? 'AC Room' : 'Non-AC Room'}
            </span>
          </div>
        </div>

        {/* Details */}
        <div className="p-6 sm:p-8">
          <h3 id="room-modal-title" className="font-serif text-2xl text-ink sm:text-3xl">
            {room.title}
          </h3>
          <div className="mt-3 h-px w-14 bg-gold" aria-hidden="true" />
          <p className="mt-4 text-sm leading-relaxed text-ink-soft sm:text-base">
            {room.description}
          </p>

          <h4 className="mt-6 text-sm font-semibold uppercase tracking-wider text-pine">
            Amenities
          </h4>
          <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {room.amenities.map((amenity) => (
              <li key={amenity} className="flex items-center gap-2.5 text-sm text-ink">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-pine-soft">
                  <Check className="h-3.5 w-3.5 text-pine" aria-hidden="true" />
                </span>
                {amenity}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={enquiry}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-pine"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Enquire on WhatsApp
            </a>
            <a
              href={telLink}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-pine px-6 py-3 text-sm font-semibold text-pine transition-colors hover:bg-pine hover:text-white"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call {hotelData.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
