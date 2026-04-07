import IndexHero from '../components/Index';
import AboutSection from '../components/AboutSection';
import FeaturedVideoSection from '../components/FeaturedVideoSection';
import PhilosophySection from '../components/PhilosophySection';
import ServicesSection from '../components/ServicesSection';

export default function HomePage() {
  return (
    <>
      <IndexHero />
      <AboutSection />
      <FeaturedVideoSection />
      <PhilosophySection />
      <ServicesSection />
    </>
  );
}
