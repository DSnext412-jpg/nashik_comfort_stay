import Header from '../components/Header'
import Hero from '../components/Hero'
import IntroSection from '../components/IntroSection'
import Features from '../components/Features'
import RoomGrid from '../components/RoomGrid'
import AboutSection from '../components/AboutSection'
import Gallery from '../components/Gallery'
import LocationSection from '../components/LocationSection'
import MapSection from '../components/MapSection'
import BookingSection from '../components/BookingSection'
import PaymentSection from '../components/PaymentSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import FloatingWhatsApp from '../components/FloatingWhatsApp'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <IntroSection />
        <Features />
        <RoomGrid />
        <AboutSection />
        <Gallery />
        <LocationSection />
        <MapSection />
        <BookingSection />
        <PaymentSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
