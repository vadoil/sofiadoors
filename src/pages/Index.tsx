import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import CollectionsSection from "@/components/CollectionsSection";
import TaskSelectionSection from "@/components/TaskSelectionSection";
import PortfolioSection from "@/components/PortfolioSection";

import HelpFormSection from "@/components/HelpFormSection";
import ProcessSection from "@/components/ProcessSection";
import DesignersSection from "@/components/DesignersSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import QuizWidget from "@/components/QuizWidget";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <WhyChooseUsSection />
      <CollectionsSection />
      <TaskSelectionSection />
      <PortfolioSection />
      
      <HelpFormSection />
      <ProcessSection />
      <DesignersSection />
      <FAQSection />
      <FinalCTASection />
      <ContactSection />
      <Footer />
      <ChatWidget />
      <QuizWidget />
    </div>
  );
};

export default Index;
