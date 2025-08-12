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
        <AnimatedSection className="py-12 md:py-24">
          <ProductsSection />
        </AnimatedSection>
        <AnimatedSection className="py-12 md:py-24">
          <ExportTimelineSection />
        </AnimatedSection>
        <AnimatedSection className="py-12 md:py-24">
          <AboutSection />
        </AnimatedSection>
        <AnimatedSection className="py-12 md:py-24">
          <FaqSection />
        </AnimatedSection>
        <AnimatedSection className="py-12 md:py-24">
          <ContactSection />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
