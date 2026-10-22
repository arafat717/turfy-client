/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import stadium from "../../../public/images/turf1.jpg";
import logo from "../../../public/images/football.png";
import Form from "@/components/Form/Form";
import NInput from "@/components/Form/NInput";
import NPassword from "@/components/Form/NPassword";
import { FieldValues } from "react-hook-form";
import { useGoogleLoginMutation, useLoginMutation } from "@/redux/api/authApi";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/features/authSlice";
import { useRouter } from "next/navigation";
import { GoogleLogin } from "@react-oauth/google";

export default function LoginPage() {
  const [login] = useLoginMutation();
  const dispatch = useDispatch();
  const router = useRouter();
  const [googleLogin] = useGoogleLoginMutation();

  const handleLogin = async (data: FieldValues) => {
    const toastId = toast.loading("Logging...");
    try {
      const res = await login(data);
      if (res?.data) {
        toast.success((res?.data as any)?.message, { id: toastId });
        dispatch(
          setUser({
            token: (res.data as any).data?.accessToken,
            user: (res.data as any).user,
          }),
        );
        router.push("/");
      } else {
        toast.error((res?.error as any)?.data?.message, { id: toastId });
      }
    } catch (err: any) {
      toast.error(err.message, { id: toastId });
    }
  };

  const handleSuccess = async (credentialResponse: { credential?: string }) => {
    const idToken = credentialResponse.credential;
    if (!idToken) {
      toast.error("Google OAuth Failed");
      return;
    }

    try {
      const res = await googleLogin({ idToken });
      if (res?.data) {
        dispatch(
          setUser({
            token: (res.data as any).data?.accessToken,
            user: (res.data as any).user,
          }),
        );
        toast.success("Google Login Successful!");
        router.push("/");
      } else {
        toast.error(
          (res?.error as any)?.data?.message || "Google login failed.",
        );
      }
    } catch (err: any) {
      toast.error(err.message || "Google login failed.");
    }
  };

  const handleError = () => {
    toast.error("Google login failed!");
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-slate-50 text-slate-800 lg:min-h-dvh lg:flex-row">
      <div className="relative hidden overflow-hidden lg:flex lg:min-h-dvh lg:w-1/2 lg:flex-col lg:justify-end lg:p-12">
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
              Welcome Back
            </h1>
            <p className="text-xs text-[#6b7385] sm:text-sm">
              Login into your account
            </p>
          </div>

          {/* Form Controls */}
          <Form onSubmit={handleLogin}>
            <NInput type="email" name="email" placeholder="email"></NInput>
            <NPassword name="password" placeholder="Password"></NPassword>
            <Link
              className="text-black text-right underline hover:underline"
              href={"/"}
            >
              Forgot Password?
            </Link>
            <button
              type="submit"
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-md bg-[#1a2332] py-3.5 text-[20px] font-semibold text-white shadow transition hover:bg-green-800 cursor-pointer"
            >
              <span>Sign In</span>
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
            <GoogleLogin
              onSuccess={handleSuccess}
              onError={handleError}
            ></GoogleLogin>
          </div>

          {/* Footer Link */}
          <p className="text-center text-xs text-slate-500">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="font-semibold text-emerald-600 hover:underline"
            >
              Sign Up!
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
