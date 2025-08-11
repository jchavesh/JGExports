'use client';

import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Coffee, Leaf } from 'lucide-react';
import Link from 'next/link';
import { CacaoIcon } from '../icons/cacao-icon';
import { useLanguage } from '@/contexts/LanguageContext';

const ProductsSection: React.FC = () => {
    const { language, translations } = useLanguage();
    const t = translations[language].products;

    const products = [
      {
        icon: <Coffee className="h-12 w-12 text-primary" />,
        title: t.coffeeTitle,
        description: t.coffeeDescription,
        imageUrl: 'https://images.unsplash.com/photo-1611162386993-6188a3a00f49?q=80&w=800&auto=format&fit=crop',
        imageHint: 'coffee beans plantation',
      },
      {
        icon: <Leaf className="h-12 w-12 text-primary" />,
        title: t.plantsTitle,
        description: t.plantsDescription,
        imageUrl: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=800&auto=format&fit=crop',
        imageHint: 'tropical plants nursery',
      },
      {
        icon: <CacaoIcon className="h-12 w-12 text-primary" />,
        title: t.cacaoTitle,
        description: t.cacaoDescription,
        imageUrl: 'https://images.unsplash.com/photo-1579582337992-437d953a5875?q=80&w=800&auto=format&fit=crop',
        imageHint: 'cacao pods tree',
      },
    ];

  return (
    <section id="products" className="bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">{t.title}</h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            {t.subtitle}
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <Card key={index} className="flex flex-col text-center items-center shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="relative w-full h-48">
                    <Image
                        src={product.imageUrl}
                        alt={product.title}
                        layout="fill"
                        objectFit="cover"
                        data-ai-hint={product.imageHint}
                    />
                </div>
              <CardHeader className="items-center">
                <div className="p-4 bg-primary/10 rounded-full -mt-8 bg-background">
                  {product.icon}
                </div>
                <CardTitle className="font-headline mt-4">{product.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>{product.description}</CardDescription>
              </CardContent>
              <CardFooter>
                 <Button asChild variant="outline">
                    <Link href="#contact">{t.specSheetButton}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
