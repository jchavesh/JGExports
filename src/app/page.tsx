import Navbar from "@/components/layout/navbar";
import ProductsSection from "@/components/sections/products";
import ExportTimelineSection from "@/components/sections/export-timeline";
import AboutSection from "@/components/sections/about";
import FaqSection from "@/components/sections/faq";
import ContactSection from "@/components/sections/contact";
import Footer from "@/components/layout/footer";
import AnimatedSection from "@/components/animated-section";
import HeroSection from "@/components/sections/hero";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <div>
          <ProductsSection />
        </div>
        <AnimatedSection>
          <ExportTimelineSection />
        </AnimatedSection>
        <AnimatedSection>
          <AboutSection />
        </AnimatedSection>
        <AnimatedSection>
          <FaqSection />
        </AnimatedSection>
        <AnimatedSection>
          <ContactSection />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
