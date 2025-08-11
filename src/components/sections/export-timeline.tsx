'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { CheckCircle, BotMessageSquare, PackageCheck, Ship, Users } from 'lucide-react';

const icons = [
  <BotMessageSquare key="inquiry" className="h-8 w-8 text-primary" />,
  <PackageCheck key="sample" className="h-8 w-8 text-primary" />,
  <CheckCircle key="production" className="h-8 w-8 text-primary" />,
  <Ship key="logistics" className="h-8 w-8 text-primary" />,
  <Users key="delivery" className="h-8 w-8 text-primary" />,
];

const ExportTimelineSection: React.FC = () => {
  const { language, translations } = useLanguage();
  const t = translations[language].exportTimeline;

  const timelineSteps = t.steps.map((step, index) => ({
    ...step,
    icon: icons[index],
  }));

  return (
    <section id="process">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">{t.title}</h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            {t.subtitle}
          </p>
        </div>
        <div className="relative mt-12">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2"></div>
          <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-0">
            {timelineSteps.map((step, index) => (
              <div key={index} className="flex-1 w-full md:w-auto flex flex-col items-center text-center p-4">
                 <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-background border-2 border-primary mb-4">
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold font-headline">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground max-w-xs">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExportTimelineSection;
