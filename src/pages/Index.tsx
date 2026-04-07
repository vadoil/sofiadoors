import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DesignerFeaturesSection from "@/components/DesignerFeaturesSection";
import ForDesignersSection from "@/components/ForDesignersSection";
import CollectionsSection from "@/components/CollectionsSection";
import ProjectScenariosSection from "@/components/ProjectScenariosSection";
import StylesSection from "@/components/StylesSection";
import ColorPaletteSection from "@/components/ColorPaletteSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <DesignerFeaturesSection />
      <ForDesignersSection />
      <CollectionsSection />
      <ProjectScenariosSection />
      <StylesSection />
      <ColorPaletteSection />
      <ServicesSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Index;
