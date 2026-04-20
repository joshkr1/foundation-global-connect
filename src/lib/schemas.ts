import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(120),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  organization: z.string().trim().max(160).optional().or(z.literal("")),
  subject: z.string().trim().max(200).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Please share a few words").max(4000),
  source: z.string().trim().max(60).optional().or(z.literal("")),
});

export type LeadInput = z.infer<typeof leadSchema>;
