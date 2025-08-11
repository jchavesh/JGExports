import Navbar from "@/components/layout/navbar";
import HeroSection from "@/components/sections/hero";
import ProductsSection from "@/components/sections/products";
import ExportTimelineSection from "@/components/sections/export-timeline";
import AboutSection from "@/components/sections/about";
import FaqSection from "@/components/sections/faq";
import ContactSection from "@/components/sections/contact";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ProductsSection />
        <ExportTimelineSection />
        <AboutSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
