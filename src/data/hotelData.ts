/* ============================================================
   NASHIK COMFORT STAY — CENTRAL HOTEL DATA
   ------------------------------------------------------------
   Everything the hotel staff/developer might need to edit lives
   in this single file. Change phone numbers, email, address,
   room details, photos, booking links, payment info, hero text,
   about text — all from here.

   Replace placeholder images by dropping real photographs into
   the matching public/images/... path. See the README for details.
   ============================================================ */

export type RoomType = 'AC' | 'Non-AC'
export type BookingSourceType = 'walk-in' | 'call' | 'enquiry' | 'agoda' | 'booking' | 'fabHotels'
export type GalleryCategory = 'Rooms' | 'Hotel' | 'Interiors' | 'Location'

export interface Room {
  number: string
  type: RoomType
  title: string
  description: string
  /** Relative path to the room photograph, e.g. "/images/rooms/room-202.jpg".
      Replace the file at that path with the real photo — no code change needed. */
  image: string
  amenities: string[]
}

export interface GalleryImage {
  src: string
  alt: string
  category: GalleryCategory
}

export interface HighlightItem {
  icon: string
  title: string
  text: string
}

export interface FeatureItem {
  icon: string
  title: string
  text: string
}

export interface RoomCategory {
  type: RoomType
  badge: string
  title: string
  description: string
  roomNumbers: string[]
}

export interface AboutPoint {
  icon: string
  title: string
  text: string
}

export interface BookingSourceItem {
  id: string
  label: string
  text: string
  type: BookingSourceType
}

export interface PaymentMethod {
  id: string
  icon: string
  title: string
  text: string
}

export interface HotelData {
  name: string
  shortName: string
  tagline: string
  locationLine: string

  phone: string
  phoneDisplay: string
  email: string
  whatsappNumber: string
  whatsappDefaultMessage: string

  address: {
    line1: string
    line2: string
    line3: string
    city: string
    state: string
    pincode: string
    full: string
    mapsQuery: string
  }

  map: {
    embedUrl: string
    directionsUrl: string
  }

  hero: {
    eyebrow: string
    image: string
    heading: string
    subheading: string
    description: string
    primaryCta: string
    secondaryCta: string
  }

  intro: {
    heading: string
    description: string
    highlights: HighlightItem[]
  }

  features: {
    heading: string
    subtitle: string
    items: FeatureItem[]
  }

  roomsHeading: {
    title: string
    subtitle: string
  }

  acRoomNumbers: string[]
  nonAcRoomNumbers: string[]

  roomCategories: RoomCategory[]

  acAmenities: string[]
  nonAcAmenities: string[]

  rooms: Room[]

  about: {
    eyebrow: string
    heading: string
    image: string
    text: string
    tagline: string
    points: AboutPoint[]
  }

  gallery: {
    heading: string
    subtitle: string
    images: GalleryImage[]
  }

  location: {
    eyebrow: string
    heading: string
    text: string
    image: string
    note: string
  }

  booking: {
    heading: string
    subtitle: string
    sources: BookingSourceItem[]
  }

  bookingLinks: {
    agoda: string
    booking: string
    fabHotels: string
  }

  payment: {
    heading: string
    subtitle: string
    methods: PaymentMethod[]
    upiId: string
    qrImage: string
  }

  contact: {
    heading: string
    text: string
  }

  footer: {
    blurb: string
  }

  socialLinks: {
    instagram: string
    facebook: string
  }

  seo: {
    title: string
    description: string
    canonical: string
    ogImage: string
  }
}

export const hotelData: HotelData = {
  name: 'Nashik Comfort Stay',
  shortName: 'Nashik Comfort Stay',
  tagline: 'Comfortable stays in Nashik.',
  locationLine: 'Pathardi Phata / Indira Nagar, Nashik, Maharashtra, India',

  /* ---------- Contact ---------- */
  phone: '7888288655',
  phoneDisplay: '78882 88655',
  email: 'shivalikcomfortstay@gmail.com',

  /* WhatsApp number for the enquiry button.
     Use the same digits as the phone number, but WITH the country
     code (91 for India) and no "+", spaces or dashes. */
  whatsappNumber: '917888288655',
  whatsappDefaultMessage:
    'Hello Nashik Comfort Stay, I would like to enquire about room availability.',

  address: {
    line1: 'Commercial 2nd Floor, Shivalik Sky Park',
    line2: 'Pathardi Rd, beside Parksyde',
    line3: 'Pandav Nagari, Indira Nagar',
    city: 'Nashik',
    state: 'Maharashtra',
    pincode: '422009',
    /** Full, human readable address used for display. */
    full: 'Commercial 2nd Floor, Shivalik Sky Park, Pathardi Rd, beside Parksyde, Pandav Nagari, Indira Nagar, Nashik, Maharashtra 422009',
    /** Address used to build the Google Maps embed + directions link. */
    mapsQuery:
      'Nashik Comfort Stay, Commercial 2nd Floor, Shivalik Sky Park, Pathardi Rd, beside Parksyde, Pandav Nagari, Indira Nagar, Nashik, Maharashtra 422009',
  },

  /* ---------- Google Maps ----------
     The embed below uses Google's no-API-key "output=embed" trick and
     works for static sites. No key is exposed anywhere. */
  map: {
    embedUrl: `https://www.google.com/maps?q=${encodeURIComponent(
      'Nashik Comfort Stay, Commercial 2nd Floor, Shivalik Sky Park, Pathardi Rd, beside Parksyde, Pandav Nagari, Indira Nagar, Nashik, Maharashtra 422009',
    )}&output=embed`,
    directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
      'Nashik Comfort Stay, Commercial 2nd Floor, Shivalik Sky Park, Pathardi Rd, beside Parksyde, Pandav Nagari, Indira Nagar, Nashik, Maharashtra 422009',
    )}`,
  },

  /* ---------- Hero ---------- */
  hero: {
    eyebrow: 'Welcome to',
    image: '/images/hero/hero.jpg',
    heading: 'Nashik Comfort Stay',
    subheading: 'Comfort. Convenience. A Better Stay in Nashik.',
    description:
      'A comfortable and elegant stay in the heart of Nashik, designed for guests looking for a peaceful, clean and convenient experience.',
    primaryCta: 'Explore Rooms',
    secondaryCta: 'Get Directions',
  },

  /* ---------- Introduction ---------- */
  intro: {
    heading: 'A Comfortable Stay in Nashik',
    description:
      'Nashik Comfort Stay offers a comfortable and convenient accommodation experience in the Pathardi Phata area of Nashik. Whether you are visiting for business, travel, family needs or a short stay, our rooms are designed to provide a clean, peaceful and relaxing environment.',
    highlights: [
      { icon: 'bed', title: 'Comfortable Rooms', text: 'Clean, calm and well-kept rooms for a restful stay.' },
      { icon: 'snowflake', title: 'AC & Non-AC Options', text: 'Choose the room that fits your needs and budget.' },
      { icon: 'mapPin', title: 'Convenient Location', text: 'Situated in the Pathardi Phata / Indira Nagar area.' },
      { icon: 'zap', title: 'Easy Check-in', text: 'A simple and smooth check-in experience.' },
    ],
  },

  /* ---------- Features (Why Stay With Us) ---------- */
  features: {
    heading: 'Why Stay With Us?',
    subtitle: 'A calm, comfortable base for your time in Nashik.',
    items: [
      { icon: 'bedDouble', title: 'Comfortable Rooms', text: 'Rooms arranged for a clean and peaceful stay.' },
      { icon: 'thermometer', title: 'AC & Non-AC Options', text: 'Flexible room choices for every kind of guest.' },
      { icon: 'mapPin', title: 'Convenient Nashik Location', text: 'Located in the well-connected Pathardi Phata area.' },
      { icon: 'route', title: 'Easy Access to Main Roads', text: 'Simple access to the main roads around Nashik.' },
      { icon: 'smile', title: 'Friendly Stay Experience', text: 'A warm, welcoming atmosphere for every guest.' },
      { icon: 'briefcase', title: 'Short & Business Stays', text: 'A practical choice for business and short visits.' },
    ],
  },

  /* ---------- Rooms ---------- */
  roomsHeading: {
    title: 'Our Rooms',
    subtitle: 'Choose the room that suits your stay.',
  },

  /** AC rooms. Replace image at public/images/rooms/<number>.jpg with the real photo. */
  acRoomNumbers: ['202', '203', '204', '205', '206', '207'],

  /** Non-AC rooms. Replace image at public/images/rooms/<number>.jpg with the real photo. */
  nonAcRoomNumbers: ['208', '209', '210', '211', '212'],

  /** Room categories shown as two elegant blocks before the room grid. */
  roomCategories: [
    {
      type: 'AC',
      badge: 'Air-Conditioned',
      title: 'AC Rooms',
      description: 'Comfortable air-conditioned rooms designed for a relaxing stay.',
      roomNumbers: ['202', '203', '204', '205', '206', '207'],
    },
    {
      type: 'Non-AC',
      badge: 'Economical',
      title: 'Non-AC Rooms',
      description: 'Simple, comfortable rooms for guests looking for an economical stay.',
      roomNumbers: ['208', '209', '210', '211', '212'],
    },
  ],

  /** Base amenities shared by a room type. Per-room amenities can override.
      NOTE: keep this factual. Do not add facilities (Wi-Fi, breakfast,
      pool, parking, etc.) unless the hotel confirms them. */
  acAmenities: ['Air-conditioned room', 'Attached bathroom', 'Complimentary toiletries', 'Daily housekeeping'],

  nonAcAmenities: ['Comfortable bedding', 'Attached bathroom', 'Complimentary toiletries', 'Daily housekeeping'],

  rooms: [
    {
      number: '202',
      type: 'AC',
      title: 'AC Comfort Room',
      description: 'A cool and quiet air-conditioned room designed for a relaxing stay in Nashik.',
      image: '/images/rooms/room-202.jpg',
      amenities: ['Air-conditioned room', 'Attached bathroom', 'Complimentary toiletries', 'Daily housekeeping'],
    },
    {
      number: '203',
      type: 'AC',
      title: 'AC Comfort Room',
      description: 'A calm air-conditioned room with a comfortable setup for a peaceful night.',
      image: '/images/rooms/room-203.jpg',
      amenities: ['Air-conditioned room', 'Attached bathroom', 'Complimentary toiletries', 'Daily housekeeping'],
    },
    {
      number: '204',
      type: 'AC',
      title: 'AC Comfort Room',
      description: 'A clean, air-conditioned room ideal for business travellers and short stays.',
      image: '/images/rooms/room-204.jpg',
      amenities: ['Air-conditioned room', 'Attached bathroom', 'Complimentary toiletries', 'Daily housekeeping'],
    },
    {
      number: '205',
      type: 'AC',
      title: 'AC Comfort Room',
      description: 'A comfortable air-conditioned room with a relaxing, clutter-free atmosphere.',
      image: '/images/rooms/room-205.jpg',
      amenities: ['Air-conditioned room', 'Attached bathroom', 'Complimentary toiletries', 'Daily housekeeping'],
    },
    {
      number: '206',
      type: 'AC',
      title: 'AC Comfort Room',
      description: 'A quiet air-conditioned room offering a comfortable stay in the heart of Nashik.',
      image: '/images/rooms/room-206.jpg',
      amenities: ['Air-conditioned room', 'Attached bathroom', 'Complimentary toiletries', 'Daily housekeeping'],
    },
    {
      number: '207',
      type: 'AC',
      title: 'AC Comfort Room',
      description: 'A fresh, air-conditioned room designed for a clean and peaceful stay.',
      image: '/images/rooms/room-207.jpg',
      amenities: ['Air-conditioned room', 'Attached bathroom', 'Complimentary toiletries', 'Daily housekeeping'],
    },
    {
      number: '208',
      type: 'Non-AC',
      title: 'Non-AC Comfort Room',
      description: 'A simple, comfortable room for guests looking for an economical stay.',
      image: '/images/rooms/room-208.jpg',
      amenities: ['Comfortable bedding', 'Attached bathroom', 'Complimentary toiletries', 'Daily housekeeping'],
    },
    {
      number: '209',
      type: 'Non-AC',
      title: 'Non-AC Comfort Room',
      description: 'A clean and simple room offering good value for your stay in Nashik.',
      image: '/images/rooms/room-209.jpg',
      amenities: ['Comfortable bedding', 'Attached bathroom', 'Complimentary toiletries', 'Daily housekeeping'],
    },
    {
      number: '210',
      type: 'Non-AC',
      title: 'Non-AC Comfort Room',
      description: 'An easy, comfortable room for guests who prefer a budget-friendly choice.',
      image: '/images/rooms/room-210.jpg',
      amenities: ['Comfortable bedding', 'Attached bathroom', 'Complimentary toiletries', 'Daily housekeeping'],
    },
    {
      number: '211',
      type: 'Non-AC',
      title: 'Non-AC Comfort Room',
      description: 'A simple, tidy room suited for short stays and everyday travellers.',
      image: '/images/rooms/room-211.jpg',
      amenities: ['Comfortable bedding', 'Attached bathroom', 'Complimentary toiletries', 'Daily housekeeping'],
    },
    {
      number: '212',
      type: 'Non-AC',
      title: 'Non-AC Comfort Room',
      description: 'A comfortable non-AC room offering a straightforward and peaceful stay.',
      image: '/images/rooms/room-212.jpg',
      amenities: ['Comfortable bedding', 'Attached bathroom', 'Complimentary toiletries', 'Daily housekeeping'],
    },
  ],

  /* ---------- About ---------- */
  about: {
    eyebrow: 'About',
    heading: 'About Nashik Comfort Stay',
    image: '/images/hotel/hotel-about.jpg',
    text: "Nashik Comfort Stay is a small and comfortable stay option in Nashik's Pathardi Phata area. Our focus is simple — provide guests with a clean, comfortable and convenient place to stay while visiting Nashik.",
    tagline: 'Designed for comfort. Located for convenience.',
    points: [
      { icon: 'shieldCheck', title: 'Clean & Well-kept', text: 'Rooms are maintained with care for a fresh stay.' },
      { icon: 'home', title: 'Peaceful Environment', text: 'A calm atmosphere away from the noise of the city.' },
      { icon: 'star', title: 'Convenient Base', text: 'Simple access to the main roads of Nashik.' },
    ],
  },

  /* ---------- Gallery ---------- */
  gallery: {
    heading: 'Gallery',
    subtitle: 'A glimpse of Nashik Comfort Stay.',
    /* Replace these placeholder files with real photographs.
       Add/remove entries freely — the lightbox adapts automatically. */
    images: [
      { src: '/images/gallery/gallery-rooms-1.jpg', alt: 'AC room interior at Nashik Comfort Stay', category: 'Rooms' },
      { src: '/images/gallery/gallery-rooms-2.jpg', alt: 'Room at Nashik Comfort Stay', category: 'Rooms' },
      { src: '/images/gallery/gallery-interiors-1.jpg', alt: 'Interior of Nashik Comfort Stay', category: 'Interiors' },
      { src: '/images/gallery/gallery-hotel-1.jpg', alt: 'Nashik Comfort Stay building', category: 'Hotel' },
      { src: '/images/gallery/gallery-rooms-3.jpg', alt: 'Non-AC room at Nashik Comfort Stay', category: 'Rooms' },
      { src: '/images/gallery/gallery-interiors-2.jpg', alt: 'Comfortable interior space', category: 'Interiors' },
      { src: '/images/gallery/gallery-location-1.jpg', alt: 'Location area around Pathardi Phata, Nashik', category: 'Location' },
      { src: '/images/gallery/gallery-hotel-2.jpg', alt: 'Hotel reception at Nashik Comfort Stay', category: 'Hotel' },
      { src: '/images/gallery/gallery-rooms-4.jpg', alt: 'Room details at Nashik Comfort Stay', category: 'Rooms' },
      { src: '/images/gallery/gallery-location-2.jpg', alt: 'Street near Indira Nagar, Nashik', category: 'Location' },
    ],
  },

  /* ---------- Location section ---------- */
  location: {
    eyebrow: 'Location',
    heading: 'Stay Close to What Matters',
    text: 'Nashik Comfort Stay is located in the Pathardi Phata / Indira Nagar area of Nashik, Maharashtra — a convenient base for both business and leisure travellers visiting the city.',
    image: '/images/location/location.jpg',
    note: 'Nearby attractions and travel times can be added here later as editable items.',
  },

  /* ---------- Booking ---------- */
  booking: {
    heading: 'How Can You Book?',
    subtitle: 'Several easy ways to reserve your room at Nashik Comfort Stay.',
    sources: [
      { id: 'walk-in', label: 'Walk-in', text: 'Visit us directly at the hotel.', type: 'walk-in' },
      { id: 'direct-call', label: 'Direct Call', text: 'Call us to check availability and book.', type: 'call' },
      { id: 'website', label: 'Website', text: 'Send an enquiry from this website.', type: 'enquiry' },
      { id: 'agoda', label: 'Agoda', text: 'Book online through Agoda.', type: 'agoda' },
      { id: 'booking-com', label: 'Booking.com', text: 'Book online through Booking.com.', type: 'booking' },
      { id: 'fab-hotels', label: 'FabHotels', text: 'Book online through FabHotels.', type: 'fabHotels' },
    ],
  },

  /* ---------- External booking links ----------
     Leave a field EMPTY ("") until the hotel has a live listing.
     When a URL is filled in, the matching "Book on ..." button
     automatically appears on the website. Never invent URLs. */
  bookingLinks: {
    agoda: '',
    booking: '',
    fabHotels: '',
  },

  /* ---------- Payment ---------- */
  payment: {
    heading: 'Payment Options',
    subtitle: 'Simple and convenient payment methods at the hotel.',
    methods: [
      { id: 'cash', icon: 'banknote', title: 'Cash', text: 'Pay in cash directly at the hotel.' },
      { id: 'upi', icon: 'smartphone', title: 'UPI', text: 'Pay by UPI at the hotel.' },
      { id: 'qr', icon: 'qrCode', title: 'QR', text: 'Scan and pay using the hotel QR code.' },
    ],
    /* If a UPI ID or QR code image is provided later, add it here.
       e.g. upiId: 'hotel@upi', qrImage: '/images/qr/upi-qr.png' */
    upiId: '',
    qrImage: '',
  },

  /* ---------- Contact section ---------- */
  contact: {
    heading: 'Get in Touch',
    text: 'Questions about availability or your stay? Call, email, or message us on WhatsApp — we are happy to help.',
  },

  /* ---------- Footer ---------- */
  footer: {
    blurb: 'Comfortable stays in Nashik.',
  },

  /* ---------- Social / future links ----------
     Fill these in and the matching social icons appear in the footer.
     Leave empty ("") to hide an icon. */
  socialLinks: {
    instagram: 'https://www.instagram.com/nashikcomfortstay_00?igsh=MTZpd2Z4a2J4OWJybw%3D%3D',
    facebook: 'https://www.facebook.com/NashikComfortStay?rdid=XrCyB9rzd8iuX1WV&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1NQaNJSGuE%2F#',
  },

  /* ---------- SEO ---------- */
  seo: {
    title: 'Nashik Comfort Stay | Comfortable Hotel in Nashik',
    description:
      'Nashik Comfort Stay offers comfortable AC and Non-AC rooms in the Pathardi Phata, Indira Nagar area of Nashik, Maharashtra.',
    canonical: '',
    ogImage: '/images/hero/hero.jpg',
  },
}

/* ---------- Helpers ---------- */

/** Build a WhatsApp chat link from the configured number + message. */
export function whatsappLink(message: string): string {
  const number = hotelData.whatsappNumber.replace(/[^\d]/g, '')
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}

/** Build the tel: link for the configured phone number. */
export const telLink = `tel:${hotelData.phone}`

/** Build the mailto: link for the configured email. */
export const mailtoLink = `mailto:${hotelData.email}`

/** Fallback shown if a room/hotel image is missing. */
export const fallbackImage = '/images/placeholders/fallback.jpg'

export default hotelData
