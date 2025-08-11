'use client';

import React from 'react';
import Image from 'next/image';
import AnimatedCounter from '../animated-counter';
import { useLanguage } from '@/contexts/LanguageContext';


const AboutSection: React.FC = () => {
    const { language, translations } = useLanguage();
    const t = translations[language].about;

    const stats = [
      { value: 1, label: t.stats.yearsExporting },
      { value: 2, label: t.stats.countriesServed },
      { value: 98, label: t.stats.happyClients, suffix: '%' },
    ];


  return (
    <section id="about" className="bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">
              {t.title}
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              {t.description1}
            </p>
            <p className="mt-4 text-muted-foreground md:text-lg">
              {t.description2}
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-4xl md:text-5xl font-bold text-primary font-headline">
                    <AnimatedCounter targetValue={stat.value} />
                    {stat.suffix}
                  </p>
                  <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative w-full h-80 md:h-full rounded-lg overflow-hidden shadow-xl">
             <Image
                src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=1471&auto=format&fit=crop"
                alt="J&G Exports Team"
                layout="fill"
                objectFit="cover"
                data-ai-hint="team portrait professional"
              />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
