'use server';

import { z } from 'zod';
import { summarizeSalesLead } from '@/ai/flows/generate-sales-lead-summary';
import { suggestSalesResponse } from '@/ai/flows/suggest-sales-response';

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

  try {
    // These AI calls can be used to power internal workflows,
    // like sending a summary to a sales Slack channel or pre-filling a CRM entry.
    // For this example, we'll just log the output to the console.

    const [summaryResult, responseResult] = await Promise.all([
      summarizeSalesLead(parsedData.data),
      suggestSalesResponse({
        ...parsedData.data,
        productOfInterest: parsedData.data.productInterest,
      }),
    ]);

    console.log('--- AI Lead Summary ---');
    console.log(summaryResult);
    console.log('--- AI Suggested Response ---');
    console.log(responseResult);

    // In a real application, you would now:
    // 1. Save the lead to your database.
    // 2. Email the sales team with the summary.
    // 3. Send an auto-reply to the customer.

    return { success: true, message: 'Form submitted successfully!' };

  } catch (error) {
    console.error('Error processing contact form:', error);
    return { success: false, message: 'An unexpected error occurred.' };
  }
}
