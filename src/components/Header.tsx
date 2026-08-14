import { useEffect, useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import hotelData, { telLink } from '../data/hotelData'

const NAV_LINKS = [
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

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const navigate = (id: string) => {
    setMenuOpen(false)
    // Wait a tick so the menu closes before scrolling on mobile
    window.setTimeout(() => scrollToSection(id), menuOpen ? 250 : 0)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-mist/90 shadow-md shadow-pine/5 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <button
          type="button"
          onClick={() => navigate('home')}
          className="flex items-center gap-2.5"
          aria-label="Nashik Comfort Stay — go to top"
        >
          <img
            src="/images/favcon/favcon.jpg"
            alt="Nashik Comfort Stay logo"
            className="h-9 w-9 rounded-md object-cover"
          />
          <span
            className={`whitespace-nowrap font-serif text-base leading-tight sm:text-lg ${
              scrolled ? 'text-ink' : 'text-white'
            }`}
          >
            Nashik Comfort Stay
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => navigate(link.id)}
              className={`text-sm font-medium tracking-wide transition-colors ${
                scrolled
                  ? 'text-ink/80 hover:text-pine'
                  : 'text-white/85 hover:text-white'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:block">
          <a
            href={telLink}
            className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-gold-light hover:text-ink"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          className={`inline-flex h-10 w-10 items-center justify-center rounded-md lg:hidden ${
            scrolled ? 'text-ink' : 'text-white'
          }`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-mist-deep bg-mist/95 backdrop-blur-md lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-4 sm:px-6" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => navigate(link.id)}
                className="border-b border-mist-deep py-3.5 text-left text-base font-medium text-ink transition-colors last:border-b-0 hover:text-pine"
              >
                {link.label}
              </button>
            ))}
            <a
              href={telLink}
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-pine px-5 py-3 text-sm font-semibold text-white"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call {hotelData.phoneDisplay}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
