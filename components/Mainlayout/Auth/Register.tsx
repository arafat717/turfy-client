'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { User, Mail, EyeOff, ThumbsUp, ArrowRight } from 'lucide-react';

export default function RegisterPage() {
  const [role, setRole] = useState<'user' | 'coach'>('user');
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="flex min-h-screen w-full flex-col lg:flex-row bg-slate-50 text-slate-800">
      {/* Left Section - Hero / Branding */}
      <div className="relative flex min-h-[400px] w-full flex-col justify-end overflow-hidden p-6 lg:min-h-screen lg:w-1/2 lg:p-12">
        {/* Background Image */}
        <Image
          src="/images/shuttlecock-racket.jpg" // Ensure your image path is updated
          alt="Shuttlecock and Badminton Racket"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Gradient Overlay for backdrop intensity */}
        <div className="absolute inset-0 bg-black/10" />

        {/* Floating Glassmorphic Overlay Card */}
        <div className="relative z-10 mx-auto w-full max-w-lg rounded-2xl border border-white/20 bg-black/40 p-6 backdrop-blur-md sm:p-8 text-white shadow-2xl">
          <button className="mb-4 inline-flex items-center gap-2 rounded-lg bg-[#a3e635] px-5 py-2.5 text-base font-bold text-slate-900 shadow-md transition hover:bg-[#86efac]">
            <ThumbsUp className="h-5 w-5 fill-slate-900" />
            <span>Register Now</span>
          </button>
          <p className="text-sm leading-relaxed text-slate-100 sm:text-base">
            Register now for our innovative sports software solutions, designed to tackle challenges in everyday sports activities and events.
          </p>
        </div>
      </div>

      {/* Right Section - Registration Form */}
      <div className="flex w-full items-center justify-center p-6 lg:w-1/2 lg:p-12">
        <div className="w-full max-w-md space-y-6">
          {/* Logo Header */}
          <div className="flex justify-center lg:justify-start">
            <div className="flex items-center gap-2 text-2xl font-black text-slate-900">
              <span className="text-3xl text-emerald-600">🏸</span>
              <span>DreamSports</span>
            </div>
          </div>

          {/* Form Header */}
          <div className="space-y-1 text-center lg:text-left">
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Get Started With Dreamsports
            </h1>
            <p className="text-xs text-slate-500 sm:text-sm">
              Ignite your sports journey with DreamSports and get started now.
            </p>
          </div>

          {/* User / Coach Role Selector Radio Buttons */}
          <div className="flex items-center gap-6 pt-2">
            <label
              className={`flex cursor-pointer items-center gap-2 rounded-md border px-4 py-1.5 text-xs font-semibold transition ${
                role === 'user'
                  ? 'border-emerald-600 text-emerald-700 bg-emerald-50/50'
                  : 'border-slate-200 text-slate-500'
              }`}
            >
              <input
                type="radio"
                name="role"
                checked={role === 'user'}
                onChange={() => setRole('user')}
                className="h-3.5 w-3.5 accent-emerald-600"
              />
              I am a User
            </label>

            <label
              className={`flex cursor-pointer items-center gap-2 rounded-md border border-transparent px-2 py-1.5 text-xs font-medium text-slate-500 transition hover:text-slate-800 ${
                role === 'coach' ? 'text-emerald-700 font-semibold' : ''
              }`}
            >
              <input
                type="radio"
                name="role"
                checked={role === 'coach'}
                onChange={() => setRole('coach')}
                className="h-3.5 w-3.5 accent-emerald-600"
              />
              I am a Coach
            </label>
          </div>

          {/* Form Controls */}
          <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
            {/* Username */}
            <div className="relative">
              <input
                type="text"
                placeholder="Username"
                className="w-full rounded-md bg-slate-100 px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 outline-none transition focus:ring-2 focus:ring-emerald-500"
              />
              <User className="absolute right-3 top-2.5 h-4 w-4 text-slate-400" />
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-md bg-slate-100 px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 outline-none transition focus:ring-2 focus:ring-emerald-500"
              />
              <Mail className="absolute right-3 top-2.5 h-4 w-4 text-slate-400" />
            </div>

            {/* Password */}
            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                className="w-full rounded-md bg-slate-100 px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 outline-none transition focus:ring-2 focus:ring-emerald-500"
              />
              <EyeOff className="absolute right-3 top-2.5 h-4 w-4 text-slate-400" />
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full rounded-md bg-slate-100 px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 outline-none transition focus:ring-2 focus:ring-emerald-500"
              />
              <EyeOff className="absolute right-3 top-2.5 h-4 w-4 text-slate-400" />
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-center gap-2 pt-1 text-[11px] text-slate-500">
              <input
                type="checkbox"
                id="terms"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="h-3.5 w-3.5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
              />
              <label htmlFor="terms">
                By continuing you indicate that you read and agreed to the{' '}
                <Link href="#" className="font-medium text-emerald-600 underline">
                  Terms of Use
                </Link>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-md bg-[#1a2332] py-2.5 text-xs font-semibold text-white shadow transition hover:bg-[#0f172a]"
            >
              <span>Create Account</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </form>

          {/* Social Logins Divider */}
          <div className="relative my-4 flex items-center justify-center">
            <div className="w-full border-t border-slate-200" />
            <span className="absolute bg-slate-50 px-3 text-[10px] text-slate-400">
              or continue with
            </span>
          </div>

          {/* Social OAuth Buttons */}
          <div className="flex justify-center gap-3">
            <button className="flex items-center gap-2 rounded-md border border-slate-200 bg-white px-4 py-1.5 text-xs font-medium text-slate-600 shadow-sm transition hover:bg-slate-50">
              <span className="font-bold text-blue-500">G</span> Google
            </button>
            <button className="flex items-center gap-2 rounded-md border border-slate-200 bg-white px-4 py-1.5 text-xs font-medium text-slate-600 shadow-sm transition hover:bg-slate-50">
              <span className="font-bold text-blue-700">f</span> Facebook
            </button>
          </div>

          {/* Footer Link */}
          <p className="text-center text-xs text-slate-500">
            Have an account?{' '}
            <Link href="#" className="font-semibold text-emerald-600 hover:underline">
              Sign In!
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}