import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, BotMessageSquare, PackageCheck, Ship, Users } from 'lucide-react';

const timelineSteps = [
  {
    icon: <BotMessageSquare className="h-8 w-8 text-primary" />,
    title: 'Inquiry & Quote',
    description: 'You send us an inquiry, and our team provides a detailed quote and product specifications.',
  },
  {
    icon: <PackageCheck className="h-8 w-8 text-primary" />,
    title: 'Sample Approval',
    description: 'We ship samples for your evaluation. Once approved, we move forward with the order.',
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-primary" />,
    title: 'Production & QC',
    description: 'Your order is produced or sourced, undergoing rigorous quality control checks at every stage.',
  },
  {
    icon: <Ship className="h-8 w-8 text-primary" />,
    title: 'Logistics & Shipping',
    description: 'We handle all export documentation and logistics to ensure a smooth transit to your destination port.',
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'Delivery & Follow-up',
    description: 'Your shipment arrives, and our team follows up to ensure your complete satisfaction.',
  },
];

const ExportTimelineSection: React.FC = () => {
  return (
    <section id="process">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">Our Seamless Export Process</h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            From our farms to your hands, we've perfected a 5-step process to ensure quality and reliability.
          </p>
        </div>
        <div className="relative mt-12">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2"></div>
          <div className="relative flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
            {timelineSteps.map((step, index) => (
              <div key={index} className="flex-1 w-full md:w-auto flex flex-col items-center text-center">
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
