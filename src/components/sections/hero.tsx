'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection: React.FC = () => {
  const { language, translations } = useLanguage();
  const t = translations[language].hero;

  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center text-center text-foreground overflow-hidden">
      <div className="absolute inset-0 z-[-1] w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover brightness-50"
        >
          <source src="/images/coffeBeans.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-headline font-bold sm:text-5xl md:text-6xl lg:text-7xl !leading-tight text-background">
            {t.title}
          </h1>
          <p className="mt-6 max-w-xl mx-auto text-lg md:text-xl text-background/80">
            {t.subtitle}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild variant="default">
              <Link href="#contact">{t.quoteButton}</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-transparent border-white text-white hover:bg-white hover:text-foreground">
              <Link href="#products">{t.exploreButton}</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
