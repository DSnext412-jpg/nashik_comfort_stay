import { Building2, Mail, MapPin, Phone } from 'lucide-react'
import { hotelData, telLink, mailtoLink } from '../data/hotelData'
import { DataIcon } from './icons'

const QUICK_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'rooms', label: 'Rooms' },
  { id: 'about', label: 'About' },
  { id: 'location', label: 'Location' },
  { id: 'contact', label: 'Contact' },
] as const

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Footer() {
  return (
    <footer className="bg-ink text-white/80">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-white/10 font-serif text-sm font-bold text-gold-light">
                NCS
              </span>
              <span className="font-serif text-xl text-white">{hotelData.name}</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/70">{hotelData.footer.blurb}</p>
            <p className="mt-3 text-xs text-white/50">{hotelData.locationLine}</p>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-light">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm text-white/70 transition-colors hover:text-gold-light"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-light">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={telLink}
                  className="flex items-center gap-2.5 text-white/70 transition-colors hover:text-gold-light"
                >
                  <Phone className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                  {hotelData.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={mailtoLink}
                  className="flex items-center gap-2.5 break-all text-white/70 transition-colors hover:text-gold-light"
                >
                  <Mail className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                  {hotelData.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-white/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <address className="not-italic">
                  {hotelData.address.line1},
                  <br />
                  {hotelData.address.line2},
                  <br />
                  {hotelData.address.line3},
                  <br />
                  {hotelData.address.city}, {hotelData.address.state} {hotelData.address.pincode}
                </address>
              </li>
            </ul>
          </div>

          {/* Booking sources & payment */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-light">
              Booking Sources
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {hotelData.booking.sources.map((s) => (
                <li key={s.id}>{s.label}</li>
              ))}
            </ul>

            <h3 className="mt-6 text-sm font-semibold uppercase tracking-wider text-gold-light">
              Payment
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {hotelData.payment.methods.map((m) => (
                <span
                  key={m.id}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs text-white/80"
                >
                  <DataIcon name={m.icon} className="h-3.5 w-3.5 text-gold" />
                  {m.title}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-white/60">
            &copy; {new Date().getFullYear()} {hotelData.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-xs text-white/50">
            <Building2 className="h-3.5 w-3.5" aria-hidden="true" />
            Pathardi Phata &middot; Indira Nagar &middot; Nashik
          </p>
        </div>
      </div>
    </footer>
  )
}
