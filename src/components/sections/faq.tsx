import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqItems = [
  {
    question: 'What are your Minimum Order Quantities (MOQs)?',
    answer: 'MOQs vary by product. For coffee, the minimum is typically one pallet (approx. 500-700kg). For plants and cacao, it depends on the specific variety and destination. Please contact us for a detailed quote.',
  },
  {
    question: 'What are the typical lead times?',
    answer: 'Lead times depend on product availability and shipping schedules. Generally, for coffee and cacao, it is 2-4 weeks from order confirmation to shipment. For plants, it can be 4-8 weeks to allow for proper preparation and certification.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept bank transfers (wire transfers). For first-time orders, we typically require a 50% down payment to begin production and the remaining 50% upon presentation of shipping documents. We are open to discussing other payment terms for long-term partners.',
  },
   {
    question: 'Can you handle logistics and customs clearance?',
    answer: 'Yes, we offer end-to-end logistics solutions. We manage everything from farm-gate pickup to export documentation and freight forwarding to your destination port. We work with trusted partners to ensure a smooth process.',
  }
];

const FaqSection: React.FC = () => {
  return (
    <section id="faq">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Have questions? We have answers. Here are some common inquiries from our clients.
          </p>
        </div>
        <div className="mt-12 max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-headline text-lg hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
