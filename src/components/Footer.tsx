import { Building2, Mail, MapPin, Phone } from 'lucide-react'
import { hotelData, telLink, mailtoLink } from '../data/hotelData'
import { DataIcon } from './icons'

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

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

            {/* Social links — shown only when a URL is set in hotelData */}
            <div className="mt-5 flex items-center gap-3">
              {hotelData.socialLinks.instagram && (
                <a
                  href={hotelData.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Nashik Comfort Stay on Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-gold hover:text-white"
                >
                  <InstagramIcon className="h-5 w-5" />
                </a>
              )}
              {hotelData.socialLinks.facebook && (
                <a
                  href={hotelData.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Nashik Comfort Stay on Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-gold hover:text-white"
                >
                  <FacebookIcon className="h-5 w-5" />
                </a>
              )}
            </div>
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
