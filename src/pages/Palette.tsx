import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ColorPaletteSection from "@/components/ColorPaletteSection";

const Palette = () => (
  <div className="min-h-screen">
    <Header />
    <main className="pt-28">
      <div className="px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4">
          <ArrowLeft className="w-4 h-4" /> На главную
        </Link>
      </div>
      <ColorPaletteSection />
    </main>
    <Footer />
  </div>
);

export default Palette;
