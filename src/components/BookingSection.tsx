import { CalendarCheck, ExternalLink, Globe, MessageCircle, Phone, UserRound } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { hotelData, whatsappLink, telLink } from '../data/hotelData'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

type SourceType = 'walk-in' | 'call' | 'enquiry' | 'agoda' | 'booking' | 'fabHotels'

interface BookingSourceProps {
  id: string
  label: string
  text: string
  type: SourceType
  index: number
}

const TYPE_ICON: Record<SourceType, LucideIcon> = {
  'walk-in': UserRound,
  call: Phone,
  enquiry: MessageCircle,
  agoda: Globe,
  booking: Globe,
  fabHotels: Globe,
}

/** A single booking option card. External platform links only appear when configured. */
function BookingSource({ label, text, type, index }: BookingSourceProps) {
  const Icon = TYPE_ICON[type]
  const externalLink =
    type === 'agoda'
      ? hotelData.bookingLinks.agoda
      : type === 'booking'
        ? hotelData.bookingLinks.booking
        : type === 'fabHotels'
          ? hotelData.bookingLinks.fabHotels
          : null

  // If an external URL is configured, this card is a link to it.
  if (externalLink) {
    return (
      <Reveal delay={index * 80}>
        <a
          href={externalLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex h-full flex-col items-start rounded-lg bg-white p-6 shadow-md shadow-pine/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-pine/10"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-pine-soft text-pine transition-colors duration-300 group-hover:bg-pine group-hover:text-gold-light">
            <Icon className="h-6 w-6" aria-hidden="true" />
          </span>
          <h3 className="mt-4 text-base font-semibold text-ink">{label}</h3>
          <p className="mt-1.5 flex-1 text-sm leading-relaxed text-ink-soft">{text}</p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold">
            Book on {label}
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </span>
        </a>
      </Reveal>
    )
  }

  // Otherwise the card links to a call / enquiry / walk-in action.
  const href =
    type === 'call'
      ? telLink
      : type === 'enquiry'
        ? whatsappLink(hotelData.whatsappDefaultMessage)
        : '#contact'

  const ctaText =
    type === 'call'
      ? `Call ${hotelData.phoneDisplay}`
      : type === 'enquiry'
        ? 'Send Enquiry'
        : 'Visit Us'

  return (
    <Reveal delay={index * 80}>
      <a
        href={href}
        {...(type === 'call' || type === 'enquiry'
          ? { target: '_blank', rel: 'noopener noreferrer' }
          : {})}
        className="group flex h-full flex-col items-start rounded-lg bg-white p-6 shadow-md shadow-pine/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-pine/10"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-pine-soft text-pine transition-colors duration-300 group-hover:bg-pine group-hover:text-gold-light">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </span>
        <h3 className="mt-4 text-base font-semibold text-ink">{label}</h3>
        <p className="mt-1.5 flex-1 text-sm leading-relaxed text-ink-soft">{text}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold">
          {ctaText}
          <CalendarCheck className="h-4 w-4" aria-hidden="true" />
        </span>
      </a>
    </Reveal>
  )
}

export default function BookingSection() {
  return (
    <section id="booking" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Reservations"
          title={hotelData.booking.heading}
          subtitle={hotelData.booking.subtitle}
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {hotelData.booking.sources.map((source, i) => (
            <BookingSource key={source.id} {...source} index={i} />
          ))}
        </div>

        <Reveal className="mt-10">
          <p className="mx-auto max-w-2xl text-center text-sm text-ink-soft">
            For availability and same-day bookings, the fastest way is a direct call or a
            WhatsApp message. Third-party online booking links will appear here as soon as
            the hotel activates them.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
