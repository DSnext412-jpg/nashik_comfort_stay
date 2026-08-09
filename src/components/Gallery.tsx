import { useCallback, useEffect, useMemo, useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import type { GalleryImage } from '../data/hotelData'
import { hotelData } from '../data/hotelData'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { onImageError } from '../lib/imageFallback'

type Category = 'All' | GalleryImage['category']

const CATEGORIES: Category[] = ['All', 'Rooms', 'Hotel', 'Interiors', 'Location']

export default function Gallery() {
  const [active, setActive] = useState<Category>('All')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const images = useMemo(() => {
    const all = hotelData.gallery.images
    return active === 'All' ? all : all.filter((img) => img.category === active)
  }, [active])

  const close = useCallback(() => setLightboxIndex(null), [])
  const previous = useCallback(
    () =>
      setLightboxIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length)),
    [images.length],
  )
  const next = useCallback(
    () => setLightboxIndex((i) => (i === null ? null : (i + 1) % images.length)),
    [images.length],
  )

  // Keyboard control for the lightbox
  useEffect(() => {
    if (lightboxIndex === null) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') previous()
      if (e.key === 'ArrowRight') next()
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [lightboxIndex, close, previous, next])

  const current: GalleryImage | null =
    lightboxIndex !== null ? images[lightboxIndex] : null

  return (
    <section id="gallery" className="bg-pine py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          dark
          eyebrow="Moments"
          title={hotelData.gallery.heading}
          subtitle={hotelData.gallery.subtitle}
        />

        {/* Filter tabs */}
        <Reveal className="mt-10">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setActive(cat)
                  setLightboxIndex(null)
                }}
                aria-pressed={active === cat}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  active === cat
                    ? 'bg-gold text-white'
                    : 'bg-white/10 text-white/80 hover:bg-white/20 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Masonry grid */}
        <div className="masonry mt-12">
          {images.map((img, i) => (
            <Reveal
              key={`${img.src}-${i}`}
              delay={(i % 3) * 70}
              className="mb-5 break-inside-avoid"
            >
              <button
                type="button"
                onClick={() => setLightboxIndex(i)}
                className="group block w-full overflow-hidden rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
                aria-label={`View photo: ${img.alt}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  onError={onImageError}
                  className="w-full rounded-lg object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {current && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery lightbox"
        >
          <button
            type="button"
            className="absolute inset-0 bg-pine/95 backdrop-blur-sm"
            onClick={close}
            aria-label="Close gallery"
          />

          <div className="relative z-10 flex max-h-full w-full max-w-4xl flex-col items-center">
            <img
              src={current.src}
              alt={current.alt}
              onError={onImageError}
              className="max-h-[80vh] w-auto rounded-lg object-contain shadow-2xl"
            />
            <p className="mt-4 text-sm text-white/80">{current.alt}</p>

            {/* Close */}
            <button
              type="button"
              onClick={close}
              className="absolute -top-12 right-0 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/30"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Prev / Next */}
            <button
              type="button"
              onClick={previous}
              className="absolute left-0 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/30 sm:-left-16"
              aria-label="Previous photo"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              type="button"
              onClick={next}
              className="absolute right-0 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/30 sm:-right-16"
              aria-label="Next photo"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
