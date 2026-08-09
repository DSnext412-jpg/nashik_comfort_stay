import { Star } from 'lucide-react'
import { iconMap } from '../lib/iconMap'

/** Renders an icon by string key, falling back to Star if unknown. */
export function DataIcon({ name, className }: { name: string; className?: string }) {
  const Icon = iconMap[name] ?? Star
  return <Icon className={className} aria-hidden="true" />
}
