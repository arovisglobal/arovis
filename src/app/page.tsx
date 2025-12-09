import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import AboutHero from '@/components/AboutHero';
import Mission from '@/components/Mission';
import WhyChooseAbout from '@/components/WhyChooseAbout';
import WhoWeAre from '@/components/WhoWeAre';
import JoinUs from '@/components/JoinUs';
import Services from '@/components/Services';
import AdvertiserServices from '@/components/AdvertiserServices';
import PublisherServices from '@/components/PublisherServices';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <AboutHero />
      <Mission />
      <WhyChooseAbout />
      <WhoWeAre />
      <JoinUs />
      <Services />
      <AdvertiserServices />
      <PublisherServices />
      <Contact />
      <Footer />
    </div>
  );
}
