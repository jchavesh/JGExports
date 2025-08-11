'use client';

import React from 'react';
import Image from 'next/image';
import AnimatedCounter from '../animated-counter';

const stats = [
  { value: 15, label: 'Years Exporting' },
  { value: 40, label: 'Countries Served' },
  { value: 98, label: 'Happy Clients', suffix: '%' },
];

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">
              Your Trusted Partner in Quality Exports
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              For over a decade, J&G Exports has been a bridge between Costa Rica's finest producers and the global market. Our mission is built on three pillars: unwavering quality, sustainable practices, and building long-lasting relationships with our clients.
            </p>
            <p className="mt-4 text-muted-foreground md:text-lg">
              We are not just exporters; we are partners in your success, ensuring every shipment meets the highest standards of excellence.
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
                src="https://placehold.co/600x700.png"
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
