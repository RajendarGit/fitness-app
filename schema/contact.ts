import { formMessages } from "@/lib/form-messages";
import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, { message: formMessages.getInTouchInvalidName }),
  email: z.string().email({ message: formMessages.getInTouchInvalidEmail }),
  message: z.string().min(10, { message: formMessages.getInTouchInvalidMessage }),
});

export type ContactSchema = z.infer<typeof contactSchema>; 