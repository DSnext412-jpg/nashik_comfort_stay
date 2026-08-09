import { hotelData } from '../data/hotelData'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { DataIcon } from './icons'

export default function PaymentSection() {
  return (
    <section id="payment" className="pb-20 sm:pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-pine p-8 sm:p-12 lg:p-14">
          <SectionHeading
            dark
            eyebrow="Simple & Convenient"
            title={hotelData.payment.heading}
            subtitle={hotelData.payment.subtitle}
          />

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {hotelData.payment.methods.map((method, i) => (
              <Reveal key={method.id} delay={i * 100}>
                <div className="flex h-full flex-col items-center rounded-lg bg-white/10 p-6 text-center backdrop-blur-sm transition-colors duration-300 hover:bg-white/15">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/20 text-gold-light">
                    <DataIcon name={method.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-white">{method.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/70">{method.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-8">
            <p className="mx-auto max-w-2xl text-center text-xs leading-relaxed text-white/60 sm:text-sm">
              Payments are settled directly at the hotel. No online payment or card details are
              collected through this website.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
