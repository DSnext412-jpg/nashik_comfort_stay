import type { LucideIcon } from 'lucide-react'
import {
  Banknote,
  Bed,
  BedDouble,
  Briefcase,
  Home,
  MapPin,
  QrCode,
  Route,
  ShieldCheck,
  Smartphone,
  Snowflake,
  Star,
  Thermometer,
  Zap,
  Smile,
} from 'lucide-react'

/** Maps the string icon names used in hotelData.ts to Lucide icons. */
export const iconMap: Record<string, LucideIcon> = {
  bed: Bed,
  bedDouble: BedDouble,
  snowflake: Snowflake,
  mapPin: MapPin,
  zap: Zap,
  thermometer: Thermometer,
  route: Route,
  smile: Smile,
  briefcase: Briefcase,
  shieldCheck: ShieldCheck,
  home: Home,
  star: Star,
  banknote: Banknote,
  smartphone: Smartphone,
  qrCode: QrCode,
}
