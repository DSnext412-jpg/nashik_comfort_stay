import Reveal from './Reveal'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'center' | 'left'
  dark?: boolean
}

/** Reusable elegant section heading with a thin gold decorative line. */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  dark = false,
}: SectionHeadingProps) {
  const centered = align === 'center'

  return (
    <Reveal className={centered ? 'text-center' : 'text-left'}>
      {eyebrow && (
        <p
          className={`mb-3 text-xs font-semibold uppercase tracking-[0.28em] ${
            dark ? 'text-gold-light' : 'text-gold'
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-serif text-3xl leading-tight sm:text-4xl lg:text-[2.75rem] ${
          dark ? 'text-white' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      <div
        className={`mt-5 h-px w-16 ${centered ? 'mx-auto' : ''} bg-gold`}
        aria-hidden="true"
      />
      {subtitle && (
        <p
          className={`mt-5 max-w-2xl text-base leading-relaxed ${
            centered ? 'mx-auto' : ''
          } ${dark ? 'text-white/70' : 'text-ink-soft'}`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  )
}

/** Small centered eyebrow + gold line used in smaller blocks. */
export function GoldRule({ className = '' }: { className?: string }) {
  return (
    <div className={`h-px w-16 bg-gold ${className}`} aria-hidden="true" />
  )
}
