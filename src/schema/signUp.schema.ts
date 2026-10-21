import { z } from "zod";

export const signUpSchema = z.object({
  name: z.string("Name is required.").trim().min(1, "Name is required."),
  email: z.string("Please enter a valid email address.").email("Please enter a valid email address."),
  password: z.string("Password is required.").min(8, "Password must be at least 8 characters long."),
  confirmPassword: z.string("Please confirm your password.").min(1, "Please confirm your password."),
  terms: z.boolean().refine((value) => value, {
    message: "You must agree to the terms and privacy policy.",
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match.",
  path: ["confirmPassword"],
});
