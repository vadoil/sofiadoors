import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ForDesignersSection from "@/components/ForDesignersSection";
import CollectionsSection from "@/components/CollectionsSection";
import StylesSection from "@/components/StylesSection";
import ColorPaletteSection from "@/components/ColorPaletteSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ForDesignersSection />
      <CollectionsSection />
      <StylesSection />
      <ColorPaletteSection />
      <ServicesSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
