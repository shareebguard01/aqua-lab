import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { AudienceSection } from '@/components/AudienceSection';
import { AboutSection } from '@/components/AboutSection';
import { ProductsSection } from '@/components/ProductsSection';
import { WhyAquaLab } from '@/components/WhyAquaLab';
import { LabSpecsSection } from '@/components/LabSpecsSection';
import { CustomLabelsSection } from '@/components/CustomLabelsSection';
import { ClientShowcase } from '@/components/ClientShowcase';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-ink-900 text-mist-100">
      <Navbar />
      <main>
        <Hero />
        <AudienceSection />
        <AboutSection />
        <ProductsSection />
        <WhyAquaLab />
        <LabSpecsSection />
        <CustomLabelsSection />
        <ClientShowcase />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
