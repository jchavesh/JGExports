'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
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
  const [activeSection, setActiveSection] = useState('');
  const observer = useRef<IntersectionObserver | null>(null);

  const sectionRefs: { [key: string]: React.RefObject<HTMLElement> } = {
    products: useRef<HTMLElement>(null),
    process: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    faq: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  };

  const createObserver = useCallback(() => {
    if (observer.current) {
      observer.current.disconnect();
    }
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.current?.observe(ref.current);
      }
    });
  }, []);

  useEffect(() => {
    createObserver();
    return () => observer.current?.disconnect();
  }, [createObserver]);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar activeSection={activeSection} />
      <main className="flex-1">
        <HeroSection />
        <AnimatedSection ref={sectionRefs.products}>
          <ProductsSection />
        </AnimatedSection>
        <AnimatedSection ref={sectionRefs.process}>
          <ExportTimelineSection />
        </AnimatedSection>
        <AnimatedSection ref={sectionRefs.about}>
          <AboutSection />
        </AnimatedSection>
        <AnimatedSection ref={sectionRefs.faq}>
          <FaqSection />
        </AnimatedSection>
        <AnimatedSection ref={sectionRefs.contact}>
          <ContactSection />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
