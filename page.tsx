
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import PortfolioSection from '../components/PortfolioSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ClientsSection from '../components/ClientsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import ScrollAnimations from '../components/ScrollAnimations';

export default function Home() {
  return (
    <>
      <ScrollAnimations />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <TestimonialsSection />
        <ClientsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
