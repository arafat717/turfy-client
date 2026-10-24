"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import Form from "@/components/Form/Form";
import NInput from "@/components/Form/NInput";
import AuthFormLayout from "@/components/Mainlayout/Auth/AuthFormLayout";
import { useForgotPasswordMutation } from "@/redux/api/authApi";

export default function ForgotPasswordPage() {
  const [forgotPassword, { isLoading }] = useForgotPasswordMutation();
  const router = useRouter();

  const handleForgotPassword = async (data: FieldValues) => {
    const toastId = toast.loading("Sending verification code...");

    try {
      const response = await forgotPassword({ email: data.email });

      if (response?.data) {
        toast.success(
          (response.data as { message?: string }).message ??
            "Verification code sent.",
          { id: toastId },
        );
        router.push(
          `/forgot-password/otp?email=${encodeURIComponent(data.email)}`,
        );
        return;
      }

      toast.error(
        (response.error as { data?: { message?: string } } | undefined)?.data
          ?.message ?? "Unable to send a verification code.",
        { id: toastId },
      );
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Unable to send a verification code.",
        { id: toastId },
      );
    }
  };

  return (
    <AuthFormLayout
      title="Forgot your password?"
      description="Enter the email address associated with your account and we’ll send you a verification code."
      footer={
        <>
          Remembered your password?{" "}
          <Link
            href="/login"
            className="font-semibold text-emerald-600 hover:underline"
          >
            Sign in
          </Link>
        </>
      }
    >
      <Form onSubmit={handleForgotPassword}>
        <NInput
          name="email"
          type="email"
          label="Email address"
          placeholder="Enter your email"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="mt-2 flex w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-[#1a2332] py-3.5 text-lg font-semibold text-white shadow transition hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isLoading ? "Sending..." : "Send verification code"}
        </button>
      </Form>
    </AuthFormLayout>
  );
}
