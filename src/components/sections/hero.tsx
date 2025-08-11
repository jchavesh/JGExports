'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection: React.FC = () => {
  const { language, translations } = useLanguage();
  const t = translations[language].hero;

  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0 z-[-1]">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Costa Rican Landscape"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
          data-ai-hint="costa rica landscape"
          priority
        />
      </div>
      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-headline font-bold sm:text-5xl md:text-6xl lg:text-7xl !leading-tight">
            {t.title}
          </h1>
          <p className="mt-6 max-w-xl mx-auto text-lg md:text-xl text-slate-200">
            {t.subtitle}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="#contact">{t.quoteButton}</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
              <Link href="#products">{t.exploreButton}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
