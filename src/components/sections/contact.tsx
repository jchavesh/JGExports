'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Loader2, MessageSquare, Send, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  company: z.string().min(2, { message: 'Company name is required.' }),
  country: z.string().min(2, { message: 'Country is required.' }),
  productInterest: z.enum(['coffee', 'plants', 'cacao'], { required_error: 'Please select a product.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }).max(500),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactSection() {
  const { language, translations } = useLanguage();
  const t = translations[language].contact;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      country: '',
      message: '',
    },
  });

  const onSubmit = (data: FormData) => {
    setIsSubmitting(true);
    const phoneNumber = '50661330225'; // Your WhatsApp number without '+' or spaces

    const messageLines = [
        `*${t.form.name}:* ${data.name}`,
        `*${t.form.email}:* ${data.email}`,
        `*${t.form.company}:* ${data.company}`,
        `*${t.form.country}:* ${data.country}`,
        `*${t.form.productInterest}:* ${data.productInterest}`,
        `---`,
        `${data.message}`
    ];
    
    const whatsappMessage = encodeURIComponent(messageLines.join('\n'));
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
    
    window.open(whatsappUrl, '_blank');
    
    setIsSubmitting(false);
    setIsSuccess(true);
    form.reset();
  };

  if (isSuccess) {
    return (
      <section id="contact" className="bg-secondary">
        <div className="container mx-auto px-4 md:px-6 text-center py-20">
            <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl">{t.success.title}</h2>
            <p className="mt-4 text-muted-foreground md:text-xl max-w-2xl mx-auto">
                {t.success.message}
            </p>
            <Button onClick={() => setIsSuccess(false)} className="mt-8" variant="accent">{t.success.button}</Button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">{t.title}</h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              {t.subtitle}
            </p>
             <div className="mt-8">
                <h3 className="text-lg font-semibold font-headline">{t.whatsappTitle}</h3>
                <p className="text-muted-foreground mt-2">{t.whatsappNote}</p>
                <Button asChild size="lg" className="mt-4 w-full sm:w-auto" variant="accent">
                    <Link href="https://wa.me/50661330225" target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="mr-2 h-5 w-5" />
                    {t.whatsappButton}
                    </Link>
              </Button>
            </div>
          </div>
          <div className="bg-background p-8 rounded-lg shadow-lg">
             <h3 className="text-lg font-semibold font-headline mb-1">{t.formTitle}</h3>
             <p className="text-muted-foreground mb-6 text-sm">{t.formSubtitle}</p>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t.form.name}</FormLabel>
                        <FormControl>
                          <Input placeholder={t.form.namePlaceholder} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t.form.email}</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder={t.form.emailPlaceholder} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t.form.company}</FormLabel>
                        <FormControl>
                          <Input placeholder={t.form.companyPlaceholder} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                   <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t.form.country}</FormLabel>
                        <FormControl>
                          <Input placeholder={t.form.countryPlaceholder} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="productInterest"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t.form.productInterest}</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder={t.form.productPlaceholder} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="coffee">{t.products.coffee}</SelectItem>
                          <SelectItem value="plants">{t.products.plants}</SelectItem>
                          <SelectItem value="cacao">{t.products.cacao}</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t.form.message}</FormLabel>
                      <FormControl>
                        <Textarea placeholder={t.form.messagePlaceholder} className="min-h-[120px]" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isSubmitting} className="w-full" variant="accent">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      {t.form.submitting}
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      {t.form.submit}
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
