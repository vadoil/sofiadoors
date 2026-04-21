import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Catalog from "./pages/Catalog.tsx";
import Erte from "./pages/Erte.tsx";
import News from "./pages/News.tsx";
import Palette from "./pages/Palette.tsx";
import Admin from "./pages/Admin.tsx";
import Designers from "./pages/Designers.tsx";
import Portfolio from "./pages/Portfolio.tsx";
import Advantages from "./pages/Advantages.tsx";
import NotFound from "./pages/NotFound.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/erte" element={<Erte />} />
          <Route path="/news" element={<News />} />
          <Route path="/palette" element={<Palette />} />
          <Route path="/designers" element={<Designers />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/advantages" element={<Advantages />} />
          <Route path="/admin" element={<Admin />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
