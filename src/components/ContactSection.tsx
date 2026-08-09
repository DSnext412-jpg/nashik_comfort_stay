import { useState } from 'react'
import { Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react'
import type { FormEvent } from 'react'
import { hotelData, whatsappLink, telLink, mailtoLink } from '../data/hotelData'
import Reveal from './Reveal'

const inputClasses =
  'w-full rounded-md border border-mist-deep bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-soft/60 focus:border-pine focus:outline-none focus:ring-2 focus:ring-pine/20'

export default function ContactSection() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState('')
  const [message, setMessage] = useState('')

  const submit = (e: FormEvent) => {
    e.preventDefault()
    const lines = [
      'Hello Nashik Comfort Stay,',
      '',
      'I would like to enquire about a room.',
      '',
      `Name: ${name || '-'}`,
      `Phone: ${phone || '-'}`,
      `Check-in: ${checkIn || '-'}`,
      `Check-out: ${checkOut || '-'}`,
      `Guests: ${guests || '-'}`,
      `Message: ${message || '-'}`,
    ]
    window.open(whatsappLink(lines.join('\n')), '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Contact details */}
          <div>
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">
                Contact
              </p>
              <h2 className="mt-3 font-serif text-3xl leading-tight text-ink sm:text-4xl">
                {hotelData.contact.heading}
              </h2>
              <div className="mt-5 h-px w-16 bg-gold" aria-hidden="true" />
              <p className="mt-6 text-base leading-relaxed text-ink-soft sm:text-lg">
                {hotelData.contact.text}
              </p>
            </Reveal>

            <div className="mt-8 space-y-4">
              <Reveal>
                <a
                  href={telLink}
                  className="flex items-center gap-4 rounded-lg bg-white p-5 shadow-md shadow-pine/5 transition-all hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-pine-soft text-pine">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-ink-soft">
                      Call Us
                    </p>
                    <p className="text-base font-semibold text-ink">{hotelData.phoneDisplay}</p>
                  </div>
                </a>
              </Reveal>

              <Reveal delay={80}>
                <a
                  href={mailtoLink}
                  className="flex items-center gap-4 rounded-lg bg-white p-5 shadow-md shadow-pine/5 transition-all hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-pine-soft text-pine">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wider text-ink-soft">
                      Email Us
                    </p>
                    <p className="break-all text-base font-semibold text-ink">{hotelData.email}</p>
                  </div>
                </a>
              </Reveal>

              <Reveal delay={160}>
                <a
                  href={hotelData.map.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-lg bg-white p-5 shadow-md shadow-pine/5 transition-all hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-pine-soft text-pine">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-ink-soft">
                      Get Directions
                    </p>
                    <p className="text-sm leading-relaxed text-ink">
                      {hotelData.address.line1}, {hotelData.address.line3},{' '}
                      {hotelData.address.city}, {hotelData.address.state} {hotelData.address.pincode}
                    </p>
                  </div>
                </a>
              </Reveal>
            </div>

            <Reveal className="mt-6">
              <a
                href={whatsappLink(hotelData.whatsappDefaultMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-pine px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-pine-light sm:w-auto"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Chat With Us on WhatsApp
              </a>
            </Reveal>
          </div>

          {/* Enquiry form — frontend only, opens WhatsApp with the details */}
          <Reveal delay={120}>
            <form
              onSubmit={submit}
              className="rounded-lg bg-white p-6 shadow-xl shadow-pine/10 sm:p-8"
              aria-label="Room enquiry form"
            >
              <h3 className="font-serif text-2xl text-ink">Send an Enquiry</h3>
              <p className="mt-2 text-sm text-ink-soft">
                Fill in your details — your enquiry opens in WhatsApp. Nothing is stored on this
                website.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="enq-name" className="mb-1.5 block text-xs font-semibold text-ink">
                    Name
                  </label>
                  <input
                    id="enq-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className={inputClasses}
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label htmlFor="enq-phone" className="mb-1.5 block text-xs font-semibold text-ink">
                    Phone
                  </label>
                  <input
                    id="enq-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Your phone number"
                    className={inputClasses}
                    autoComplete="tel"
                  />
                </div>
                <div>
                  <label htmlFor="enq-in" className="mb-1.5 block text-xs font-semibold text-ink">
                    Check-in Date
                  </label>
                  <input
                    id="enq-in"
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label htmlFor="enq-out" className="mb-1.5 block text-xs font-semibold text-ink">
                    Check-out Date
                  </label>
                  <input
                    id="enq-out"
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className={inputClasses}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="enq-guests" className="mb-1.5 block text-xs font-semibold text-ink">
                    Number of Guests
                  </label>
                  <input
                    id="enq-guests"
                    type="number"
                    min={1}
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    placeholder="e.g. 2"
                    className={inputClasses}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="enq-msg" className="mb-1.5 block text-xs font-semibold text-ink">
                    Message
                  </label>
                  <textarea
                    id="enq-msg"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Anything we should know about your stay?"
                    className={inputClasses}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-pine"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
                Send Enquiry on WhatsApp
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
