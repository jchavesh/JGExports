'use server';

import { z } from 'zod';
import { Resend } from 'resend';
import ContactFormEmail from '@/emails/contact-form-email';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  company: z.string(),
  country: z.string(),
  productInterest: z.enum(['coffee', 'plants', 'cacao']),
  message: z.string(),
});

type ContactFormInput = z.infer<typeof formSchema>;

export async function submitContactForm(data: ContactFormInput) {
  const parsedData = formSchema.safeParse(data);

  if (!parsedData.success) {
    return { success: false, message: 'Invalid data provided.' };
  }

  if (!resend) {
    console.error('Resend is not configured. Please check your RESEND_API_KEY.');
    return { success: false, message: 'The email service is not configured correctly.' };
  }

  try {
    const { name, email, company, country, productInterest, message } = parsedData.data;

    await resend.emails.send({
        from: 'J&G Exports Contact Form <onboarding@resend.dev>',
        to: 'info@jgexportscr.com',
        reply_to: email,
        subject: `New Inquiry from ${name} - ${company}`,
        react: ContactFormEmail({ name, email, company, country, productInterest, message }),
    });

    return { success: true, message: 'Form submitted successfully!' };

  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, message: 'An unexpected error occurred while sending the email.' };
  }
}
