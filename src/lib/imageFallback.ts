import type { SyntheticEvent } from 'react'
import { fallbackImage } from '../data/hotelData'

/**
 * Shared image error handler.
 * If a hotel photograph is missing, the image silently swaps to the
 * branded fallback instead of showing a broken image icon.
 */
export function onImageError(event: SyntheticEvent<HTMLImageElement>) {
  const img = event.currentTarget
  if (img.src !== fallbackImage) {
    img.src = fallbackImage
  }
}
