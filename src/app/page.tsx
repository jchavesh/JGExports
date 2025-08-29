'use client';

import React, { useState, useRef } from 'react';
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
  const [activeSection, setActiveSection] = useState('home');
  const sectionRefs: { [key: string]: React.RefObject<HTMLElement> } = {
    home: useRef<HTMLElement>(null),
    products: useRef<HTMLElement>(null),
    process: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    faq: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="flex-1">
        <div ref={sectionRefs.home as React.RefObject<HTMLDivElement>} id="home">
          <HeroSection />
        </div>
        <AnimatedSection ref={sectionRefs.products} id="products">
          <ProductsSection />
        </AnimatedSection>
        <AnimatedSection ref={sectionRefs.process} id="process" className="bg-secondary">
          <ExportTimelineSection />
        </AnimatedSection>
        <AnimatedSection ref={sectionRefs.about} id="about">
          <AboutSection />
        </AnimatedSection>
        <AnimatedSection ref={sectionRefs.faq} id="faq" className="bg-secondary">
          <FaqSection />
        </AnimatedSection>
        <AnimatedSection ref={sectionRefs.contact} id="contact">
          <ContactSection />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
