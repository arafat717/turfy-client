import { z } from "zod";

export const signUpSchema = z
  .object({
    name: z.string("Name is required.").trim().min(1, "Name is required."),
    email: z
      .string("Please enter a valid email address.")
      .email("Please enter a valid email address."),
    password: z
      .string()
      .min(8, "Password Must Minimum 8 Characters Long.")
      .regex(/[a-z]/, "Password must contain atleast 1 Lowercase Letter")
      .regex(/[A-Z]/, "Password must contain atleast 1 Uppercase Letter")

      .regex(/[0-9]/, "Password must contain atleast 1 Number")
      .regex(
        /[^A-Za-z0-9]/,
        "Password must contain atleast 1 Special Character",
      ),
    confirmPassword: z
      .string("Please confirm your password.")
      .min(1, "Please confirm your password."),
    terms: z.boolean().refine((value) => value, {
      message: "You must agree to the terms and privacy policy.",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });
