import { MessageCircle } from 'lucide-react'
import { hotelData, whatsappLink } from '../data/hotelData'

export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink(hotelData.whatsappDefaultMessage)}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[#25D366] py-3 pl-3.5 pr-4 text-white shadow-lg shadow-[#25D366]/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl sm:bottom-6 sm:right-6"
      aria-label="Chat with Nashik Comfort Stay on WhatsApp"
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      <span className="text-sm font-semibold">Chat With Us</span>
      <span className="absolute right-0 top-0 flex h-2.5 w-2.5 -translate-y-1/2 translate-x-1/2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/70 opacity-75" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" />
      </span>
    </a>
  )
}
