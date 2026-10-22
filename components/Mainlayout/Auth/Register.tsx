/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import stadium from "../../../public/images/turf1.jpg";
import logo from "../../../public/images/football.png";
import Form from "@/components/Form/Form";
import NInput from "@/components/Form/NInput";
import NPassword from "@/components/Form/NPassword";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, FieldValues, useFormContext } from "react-hook-form";
import { signUpSchema } from "@/src/schema/signUp.schema";
import { useRegisterMutation } from "@/redux/api/authApi";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

function RegistrationTerms() {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name="terms"
      render={({ field, fieldState }) => (
        <div>
          <label className="inline-flex cursor-pointer select-none items-start gap-3">
            <input
              type="checkbox"
              checked={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              name={field.name}
              ref={field.ref}
              className="mt-0.5 h-5 w-5 shrink-0 rounded border-gray-300 text-teal-600 transition-colors focus:ring-teal-500"
            />
            <span className="min-w-0 text-sm text-gray-600">
              By continuing you indicate that you read and agreed to the{" "}
              <Link
                href="/terms"
                className="font-medium text-teal-600 hover:text-teal-700 hover:underline"
              >
                Terms of Use
              </Link>
            </span>
          </label>
          {fieldState.error && (
            <p className="mt-1 text-sm text-red-500">
              {fieldState.error.message}
            </p>
          )}
        </div>
      )}
    />
  );
}

export default function RegisterPage() {
  const [register] = useRegisterMutation();
  const router = useRouter();

  const handleRegister = async (data: FieldValues) => {
    const { terms, confirmPassword, ...others } = data;
    const toastId = toast.loading("Signing...");

    try {
      const res = await register(others);
      if (res?.data) {
        toast.success((res?.data as any)?.message, { id: toastId });
        router.push(`/verify-mail?email=${encodeURIComponent(others.email)}`);
      }
    } catch (err: any) {
      toast.error(err.message, { id: toastId });
    }
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-slate-50 text-slate-800 lg:min-h-dvh lg:flex-row">
      <div className="relative hidden overflow-hidden lg:flex lg:min-h-dvh lg:w-1/2 lg:flex-col lg:justify-end lg:p-12">
        {/* Background Image */}
        <Image
          src={stadium}
          alt="Shuttlecock and Badminton Racket"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Gradient Overlay for backdrop intensity */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Right Section - Registration Form */}
      <div className="flex min-h-screen w-full items-center justify-center px-4 py-8 sm:px-6 lg:min-h-dvh lg:w-1/2 lg:px-8">
        <div className="w-full max-w-2xl space-y-6 bg-white px-0 py-2 sm:px-4 sm:py-6 lg:px-6">
          {/* Logo Header */}
          <div className="flex justify-center lg:justify-start">
            <div className="flex items-center gap-2 text-2xl font-black text-slate-900">
              {/* Logo Section */}
              <Link
                href="/"
                className="flex-shrink-0 flex items-center space-x-2"
              >
                <div className="relative flex items-center justify-center">
                  <Image src={logo} width={50} height={50} alt="Turfy Logo" />
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center">
                    <span className="text-3xl font-black tracking-tight text-black uppercase italic">
                      Turfy
                    </span>
                  </div>
                  <span className="text-[13px] text-[#83c400] font-semibold tracking-wider uppercase -mt-1 self-end pr-1">
                    Sports
                  </span>
                </div>
              </Link>
            </div>
          </div>

          {/* Form Header */}
          <div className="space-y-1 text-center lg:text-left">
            <h1 className="text-2xl font-bold tracking-tight text-[#192335] sm:text-4xl">
              Get Started With Turfy
            </h1>
            <p className="text-xs text-[#6b7385] sm:text-sm">
              Ignite your sports journey with DreamSports and get started now.
            </p>
          </div>

          {/* Form Controls */}
          <Form
            onSubmit={handleRegister}
            resolver={zodResolver(signUpSchema)}
            defaultValues={{ terms: false }}
          >
            <NInput type="text" name="name" placeholder="Username"></NInput>
            <NInput type="email" name="email" placeholder="email"></NInput>
            <NPassword name="password" placeholder="Password"></NPassword>
            <NPassword
              name="confirmPassword"
              placeholder="Confirm password"
            ></NPassword>
            <RegistrationTerms />
            <button
              type="submit"
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-md bg-[#1a2332] py-3.5 text-[20px] font-semibold text-white shadow transition hover:bg-green-800 cursor-pointer"
            >
              <span>Create Account</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </Form>

          {/* Social Logins Divider */}
          <div className="relative my-4 flex items-center justify-center">
            <div className="w-full border-t border-slate-200" />
            <span className="absolute bg-slate-50 px-3 text-[10px] text-slate-400">
              or continue with
            </span>
          </div>

          {/* Social OAuth Buttons */}
          <div className="flex justify-center gap-3">
            <button
              type="button"
              className="flex items-center justify-center cursor-pointer gap-1 px-6 py-3.5 rounded-xl border border-gray-200 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-colors shadow-sm"
            >
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.85c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              <span className="text-[20px]">Google</span>
            </button>
          </div>

          {/* Footer Link */}
          <p className="text-center text-xs text-slate-500">
            Have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-emerald-600 hover:underline"
            >
              Sign In!
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
