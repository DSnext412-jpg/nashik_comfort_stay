import { hotelData } from '../data/hotelData'

/** Official Booking.com logo. Uses currentColor so it adapts to button/text color. */
function BookingComLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M24 0H0v24h24ZM8.575 6.563h2.658c2.108 0 3.473 1.15 3.473 2.898 0 1.15-.575 1.82-.91 2.108l-.287.263.335.192c.815.479 1.318 1.389 1.318 2.395 0 1.988-1.51 3.257-3.857 3.257H7.449V7.713c0-.623.503-1.126 1.126-1.15zm1.7 1.868c-.479.024-.694.264-.694.79v1.893h1.676c.958 0 1.294-.743 1.294-1.365 0-.815-.503-1.318-1.318-1.318zm-.096 4.36c-.407.071-.598.31-.598.79v2.251h1.868c.934 0 1.509-.55 1.509-1.533 0-.934-.599-1.509-1.51-1.509zm7.737 2.394c.743 0 1.341.599 1.341 1.342a1.34 1.34 0 0 1-1.341 1.341 1.355 1.355 0 0 1-1.341-1.341c0-.743.598-1.342 1.34-1.342z"
      />
    </svg>
  )
}

/** Official Agoda logo. Uses currentColor so it adapts to button/text color. */
function AgodaLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 309" className={className} aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M175.85 216.88c-24.57 0-44.56 19.99-44.56 44.56S151.28 306 175.85 306c24.57 0 44.56-19.99 44.56-44.56S200.42 216.88 175.85 216.88 M51.32 216.88c-24.57 0-44.56 19.99-44.56 44.56S26.75 306 51.32 306c24.57 0 44.56-19.99 44.56-44.56S75.89 216.88 51.32 216.88 M300.38 216.88c-24.57 0-44.56 19.99-44.56 44.56S275.81 306 300.38 306c24.57 0 44.56-19.99 44.56-44.56S324.95 216.88 300.38 216.88 M549.44 216.88c-24.57 0-44.56 19.99-44.56 44.56S524.87 306 549.44 306c24.57 0 44.56-19.99 44.56-44.56S574.01 216.88 549.44 216.88 M424.91 216.88c-24.57 0-44.57 19.99-44.57 44.56c0 24.57 19.99 44.56 44.56 44.56c24.57 0 44.56-19.99 44.56-44.56C469.47 236.87 449.49 216.88 424.91 216.88"
      />
      <path
        fill="currentColor"
        d="M88.47 90.61c0-20.84-15.72-36.56-36.56-36.56c-20.84 0-36.56 15.72-36.56 36.56c0 20.83 15.72 36.56 36.56 36.56C72.74 127.17 88.47 111.44 88.47 90.61 M0.02 90.61c0-28.89 23.19-50.71 51.89-50.71c28.89 0 51.89 21.62 51.89 50.51v44.42c0 4.52-3.15 7.66-7.86 7.66c-4.91 0-7.86-3.14-7.86-7.66v-12.97h-0.79c-6.09 10.42-18.28 19.46-36.36 19.46C23.02 141.32 0.02 119.7 0.02 90.61"
      />
      <path
        fill="currentColor"
        d="M212.69 90.61c0-20.84-15.72-36.56-36.56-36.56s-36.56 15.72-36.56 36.56c0 20.83 15.72 36.56 36.56 36.56S212.69 111.44 212.69 90.61 M144.29 174.14c-4.13-1.97-6.09-5.51-4.52-9.63c1.57-4.33 5.5-6.09 9.63-4.13c7.08 3.34 15.92 5.7 25.35 5.7c23.39 0 37.54-13.96 37.54-37.74v-6.49h-0.79c-6.09 10.42-18.28 19.46-36.36 19.46c-27.91 0-50.9-21.62-50.9-50.71c0-28.89 23.19-50.71 51.89-50.71c28.89 0 51.89 21.62 51.89 50.51v36.95c0 31.84-20.44 53.26-53.85 53.26C163.95 180.62 153.73 178.66 144.29 174.14"
      />
      <path
        fill="currentColor"
        d="M336.91 90.61c0-20.84-15.72-36.56-36.56-36.56c-20.84 0-36.56 15.72-36.56 36.56c0 20.83 15.72 36.56 36.56 36.56C321.19 127.17 336.91 111.44 336.91 90.61 M248.47 90.61c0-28.89 23-50.71 51.89-50.71c28.89 0 51.89 21.81 51.89 50.71c0 28.89-23 50.71-51.89 50.71C271.46 141.32 248.47 119.5 248.47 90.61"
      />
      <path
        fill="currentColor"
        d="M461.13 90.61c0-20.84-15.72-36.56-36.56-36.56c-20.84 0-36.56 15.72-36.56 36.56c0 20.83 15.72 36.56 36.56 36.56C445.41 127.17 461.13 111.44 461.13 90.61 M372.69 90.61c0-28.89 22.8-50.71 50.91-50.71c18.08 0 30.27 9.04 36.36 19.46h0.79V7.67c0-4.52 3.15-7.67 7.86-7.67c4.91 0 7.86 3.15 7.86 7.67V90.8c0 28.89-23 50.51-51.89 50.51C395.88 141.32 372.69 119.5 372.69 90.61"
      />
      <path
        fill="currentColor"
        d="M585.36 90.61c0-20.84-15.72-36.56-36.56-36.56c-20.84 0-36.56 15.72-36.56 36.56c0 20.83 15.72 36.56 36.56 36.56C569.63 127.17 585.36 111.44 585.36 90.61 M496.91 90.61c0-28.89 23.19-50.71 51.89-50.71c28.89 0 51.89 21.62 51.89 50.51v44.42c0 4.52-3.15 7.66-7.86 7.66c-4.91 0-7.86-3.14-7.86-7.66v-12.97h-0.79c-6.09 10.42-18.28 19.46-36.36 19.46C519.91 141.32 496.91 119.7 496.91 90.61"
      />
    </svg>
  )
}

/**
 * Booking.com / Agoda pill buttons styled to match the dark hero.
 * Rendered only when a live booking URL is configured in hotelData.
 */
export default function BookingPlatformButtons({ className = '' }: { className?: string }) {
  const { booking, agoda } = hotelData.bookingLinks

  return (
    <div className={`flex flex-col items-center gap-3 sm:flex-row sm:gap-4 ${className}`}>
      {booking && (
        <a
          href={booking}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-2.5 text-ink shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl sm:w-auto"
        >
          <BookingComLogo className="h-5 w-5" />
          <span className="text-sm font-semibold tracking-wide">Booking.com</span>
        </a>
      )}
      {agoda && (
        <a
          href={agoda}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-2.5 text-ink shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl sm:w-auto"
        >
          <AgodaLogo className="h-5 w-auto" />
          <span className="text-sm font-semibold tracking-wide">Agoda</span>
        </a>
      )}
    </div>
  )
}
