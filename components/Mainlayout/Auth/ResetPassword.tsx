"use client";

import Link from "next/link";
import AuthFormLayout from "@/components/Mainlayout/Auth/AuthFormLayout";
import Form from "@/components/Form/Form";
import NInput from "@/components/Form/NInput";
import NOtp from "@/components/Form/NOtp";
import NPassword from "@/components/Form/NPassword";
import { useResetPasswordMutation } from "@/redux/api/authApi";
import type { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function VerifyResetCodePage() {
  const [resetPassword, { isLoading }] = useResetPasswordMutation();
  const router = useRouter();

  const handleResetPassword = async (data: FieldValues) => {
    if (!/^\d{6}$/.test(data.otp)) {
      toast.error("Enter the 6-digit verification code.");
      return;
    }

    const toastId = toast.loading("Updating password...");

    try {
      const response = await resetPassword({
        email: data.email,
        otp: data.otp,
        newPassword: data.newPassword,
      });

      if (response?.data) {
        toast.success(
          (response.data as { message?: string }).message ??
            "Password updated successfully.",
          { id: toastId },
        );
        router.push("/login");
        return;
      }

      toast.error(
        (response.error as { data?: { message?: string } } | undefined)?.data
          ?.message ?? "Unable to update your password.",
        { id: toastId },
      );
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Unable to update your password.",
        { id: toastId },
      );
    }
  };

  return (
    <AuthFormLayout
      title="Reset your password"
      description="Enter your email, verification code, and new password."
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
      <Form onSubmit={handleResetPassword}>
        <div className="flex justify-center">
          <NOtp name="otp" label="Verification code" />
        </div>
        <NInput
          name="email"
          type="email"
          label="Email address"
          placeholder="Enter your email"
        />
        <NPassword
          name="newPassword"
          label="New password"
          placeholder="Enter your new password"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="mt-2 flex w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-[#1a2332] py-3.5 text-lg font-semibold text-white shadow transition hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isLoading ? "Updating..." : "Reset password"}
        </button>
      </Form>
    </AuthFormLayout>
  );
}
