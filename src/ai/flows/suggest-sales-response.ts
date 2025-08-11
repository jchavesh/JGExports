'use server';

/**
 * @fileOverview An AI agent that suggests an appropriate response to a contact form submission.
 *
 * - suggestSalesResponse - A function that handles the suggestion of a sales response.
 * - SuggestSalesResponseInput - The input type for the suggestSalesResponse function.
 * - SuggestSalesResponseOutput - The return type for the suggestSalesResponse function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestSalesResponseInputSchema = z.object({
  name: z.string().describe('The name of the person submitting the form.'),
  email: z.string().email().describe('The email address of the person submitting the form.'),
  company: z.string().describe('The company of the person submitting the form.'),
  message: z.string().describe('The message from the person submitting the form.'),
  productOfInterest: z.string().describe('The product the person is interested in.'),
});
export type SuggestSalesResponseInput = z.infer<typeof SuggestSalesResponseInputSchema>;

const SuggestSalesResponseOutputSchema = z.object({
  suggestedResponse: z.string().describe('A suggested response to the contact form submission.'),
});
export type SuggestSalesResponseOutput = z.infer<typeof SuggestSalesResponseOutputSchema>;

export async function suggestSalesResponse(input: SuggestSalesResponseInput): Promise<SuggestSalesResponseOutput> {
  return suggestSalesResponseFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestSalesResponsePrompt',
  input: {schema: SuggestSalesResponseInputSchema},
  output: {schema: SuggestSalesResponseOutputSchema},
  prompt: `You are a sales expert at J&G Exports, specializing in coffee, plants, and cacao.
  A potential customer has submitted the following contact form.  Suggest a personalized response that encourages further engagement and provides helpful information.

  Name: {{{name}}}
  Email: {{{email}}}
  Company: {{{company}}}
  Product of Interest: {{{productOfInterest}}}
  Message: {{{message}}}

  Consider the product of interest and the content of the message when crafting your response.
  The response should be concise and professional, with a friendly tone.`,
});

const suggestSalesResponseFlow = ai.defineFlow(
  {
    name: 'suggestSalesResponseFlow',
    inputSchema: SuggestSalesResponseInputSchema,
    outputSchema: SuggestSalesResponseOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
