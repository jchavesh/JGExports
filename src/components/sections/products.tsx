import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Coffee, Leaf } from 'lucide-react';
import Link from 'next/link';
import { CacaoIcon } from '../icons/cacao-icon';

const products = [
  {
    icon: <Coffee className="h-12 w-12 text-primary" />,
    title: 'Specialty Coffee',
    description: 'From the high-altitude volcanic soils of Costa Rica, our single-origin coffee beans offer complex flavors and aromatic profiles. We supply green beans for roasters worldwide.',
    imageHint: 'coffee beans plantation',
  },
  {
    icon: <Leaf className="h-12 w-12 text-primary" />,
    title: 'Ornamental Plants',
    description: 'A diverse selection of tropical and ornamental plants, cultivated with care to bring a piece of Costa Rican biodiversity to your home, office, or nursery.',
    imageHint: 'tropical plants nursery',
  },
  {
    icon: <CacaoIcon className="h-12 w-12 text-primary" />,
    title: 'Fine Flavor Cacao',
    description: 'Sourced from dedicated farms, our Trinitario cacao beans are perfect for artisanal chocolatiers seeking unique and rich flavor notes for their creations.',
    imageHint: 'cacao pods tree',
  },
];

const ProductsSection: React.FC = () => {
  return (
    <section id="products" className="bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">Our Premium Exports</h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            We are committed to quality and sustainability in every product we export.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <Card key={index} className="flex flex-col text-center items-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="items-center">
                <div className="p-4 bg-primary/10 rounded-full">
                  {product.icon}
                </div>
                <CardTitle className="font-headline mt-4">{product.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>{product.description}</CardDescription>
              </CardContent>
              <CardFooter>
                 <Button asChild variant="outline">
                    <Link href="#contact">Request Spec Sheet</Link>
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
