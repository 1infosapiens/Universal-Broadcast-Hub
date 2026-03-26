import { useMutation } from "@tanstack/react-query";
import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  department: z.string().min(1, "Please select a department"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactSchema>;

// Mock hook since we don't have a backend endpoint for contact submissions
export function useSubmitContact() {
  return useMutation({
    mutationFn: async (data: ContactFormData) => {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // We would normally POST to /api/contact here
      console.log("Mock contact submission:", data);
      
      return { success: true, message: "Message sent successfully" };
    },
  });
}
