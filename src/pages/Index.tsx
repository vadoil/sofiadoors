import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ChatWidget from "@/components/ChatWidget";
import QuizWidget from "@/components/QuizWidget";

const TaskSelectionSection = lazy(() => import("@/components/TaskSelectionSection"));
const HelpFormSection = lazy(() => import("@/components/HelpFormSection"));
const ProcessSection = lazy(() => import("@/components/ProcessSection"));
const ForDesignersSection = lazy(() => import("@/components/ForDesignersSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const FinalCTASection = lazy(() => import("@/components/FinalCTASection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <WhyChooseUsSection />
      <Suspense fallback={<div className="h-96" />}>
        <TaskSelectionSection />
        <HelpFormSection />
        <ProcessSection />
        <ForDesignersSection />
        <FAQSection />
        <FinalCTASection />
        <ContactSection />
        <Footer />
      </Suspense>
      <ChatWidget />
      <QuizWidget />
    </div>
  );
};

export default Index;
