"use client";

import {
  ArrowRight,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import Form from "@/components/Form/Form";
import NInput from "@/components/Form/NInput";
import NSelect from "@/components/Form/NSelect";
import NTextArea from "@/components/Form/NTextArea";
import type { FieldValues } from "react-hook-form";

const emailAddress = "info@example.com";
const phoneNumber = "+1 54569 54521";
const contactTopics = [
  { label: "Booking a court", value: "Booking a court" },
  { label: "Venue information", value: "Venue information" },
  { label: "Partnerships", value: "Partnerships" },
  { label: "Something else", value: "Something else" },
];

const ContactPage = () => {
  const handleSubmit = (data: FieldValues) => {
    const subject = encodeURIComponent(`Turfy contact: ${data.topic}`);
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\nTopic: ${data.topic}\n\n${data.message}`,
    );

    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-[#020d1a] font-sans text-white">
      <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#001428]">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/images/stadium.jpg')" }}
        />
        <div className="absolute inset-0 -z-10 bg-linear-to-r from-[#001428] via-[#001428]/95 to-[#001428]/75" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_80%_50%,rgba(131,196,0,0.14),transparent_45%)]" />

        <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:py-24">
          <div className="lg:col-span-8">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#83c400]/30 bg-[#83c400]/10 px-4 py-2 text-xs font-bold tracking-[0.2em] text-[#a4eb28] uppercase">
              <MessageCircle className="h-4 w-4" />
              We’re here for your team
            </p>
            <h1 className="max-w-3xl text-4xl leading-tight font-black tracking-tight sm:text-6xl lg:text-7xl">
              Let’s get you
              <span className="block text-[#83c400]">back in the game.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              Have a question about bookings, venues, or getting your team
              started? Send us a note and we’ll help you find the right next
              step.
            </p>
          </div>

          <div className="hidden justify-end lg:col-span-4 lg:flex">
            <div className="relative flex h-52 w-52 items-center justify-center rounded-full border border-[#83c400]/20 bg-[#83c400]/6">
              <div className="absolute h-40 w-40 rounded-full border border-[#83c400]/20" />
              <div className="absolute h-28 w-28 rounded-full border border-[#83c400]/20" />
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#83c400] text-[#020d1a] shadow-[0_0_60px_rgba(131,196,0,0.35)]">
                <MessageCircle className="h-7 w-7" />
              </div>
              <span className="absolute top-6 right-10 h-2.5 w-2.5 rounded-full bg-[#83c400]" />
              <span className="absolute bottom-10 left-7 h-1.5 w-1.5 rounded-full bg-white/70" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1400px] gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-12 lg:gap-12 lg:px-8 lg:py-20">
        <div className="lg:col-span-5">
          <p className="text-xs font-bold tracking-[0.2em] text-[#83c400] uppercase">
            Get in touch
          </p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            We’d love to hear from you.
          </h2>
          <p className="mt-4 max-w-lg leading-7 text-slate-400">
            Pick whichever way works best for you. Whether you’re planning your
            next match or have a question for our team, we’re ready to help.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <a
              href={`mailto:${emailAddress}`}
              className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-[#061a2d] p-5 transition-colors hover:border-[#83c400]/50"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#83c400]/10 text-[#83c400] transition-colors group-hover:bg-[#83c400] group-hover:text-[#020d1a]">
                <Mail className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-bold tracking-wider text-slate-400 uppercase">
                  Email our team
                </span>
                <span className="mt-1 block break-all font-bold text-white">
                  {emailAddress}
                </span>
                <span className="mt-1 block text-sm text-slate-500">
                  Send us the details anytime
                </span>
              </span>
            </a>

            <a
              href="tel:+15456954521"
              className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-[#061a2d] p-5 transition-colors hover:border-[#83c400]/50"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#83c400]/10 text-[#83c400] transition-colors group-hover:bg-[#83c400] group-hover:text-[#020d1a]">
                <Phone className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs font-bold tracking-wider text-slate-400 uppercase">
                  Give us a call
                </span>
                <span className="mt-1 block font-bold text-white">
                  {phoneNumber}
                </span>
                <span className="mt-1 block text-sm text-slate-500">
                  We’re happy to talk it through
                </span>
              </span>
            </a>
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-[#001428] p-5 sm:p-6">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#83c400]/10 text-[#83c400]">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-bold">Find us</h3>
                <p className="text-sm text-slate-400">Our listed locations</p>
              </div>
            </div>
            <div className="mt-5 grid gap-4 border-t border-white/10 pt-5 sm:grid-cols-2">
              <div>
                <p className="text-sm font-bold text-white">New York</p>
                <p className="mt-1 text-sm leading-6 text-slate-400">
                  350 Fifth Avenue
                  <br />
                  New York, USA
                </p>
              </div>
              <div>
                <p className="text-sm font-bold text-white">California</p>
                <p className="mt-1 text-sm leading-6 text-slate-400">
                  1001 Rose Bowl Drive
                  <br />
                  Pasadena, USA
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-3xl border border-white/10 bg-[#061a2d] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.25)] sm:p-8 lg:p-10">
            <div className="mb-8">
              <p className="text-xs font-bold tracking-[0.2em] text-[#83c400] uppercase">
                Send a message
              </p>
              <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">
                What can we help with?
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Fill out the form and your email app will open with your
                message ready to send.
              </p>
            </div>

            <Form
              onSubmit={handleSubmit}
              defaultValues={{ topic: "Booking a court" }}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <NInput
                  name="name"
                  type="text"
                  label="Your name"
                  autoComplete="name"
                  placeholder="Alex Morgan"
                  rules={{ required: "Please enter your name." }}
                  labelClassName="mb-2 block font-semibold text-slate-200"
                  className="h-12 rounded-xl border border-white/10 bg-[#020d1a]/70 px-4 text-sm text-white shadow-none placeholder:text-slate-600 focus-visible:border-[#83c400]/70 focus-visible:ring-2 focus-visible:ring-[#83c400]/15"
                />
                <NInput
                  name="email"
                  type="email"
                  label="Email address"
                  autoComplete="email"
                  placeholder="you@example.com"
                  rules={{
                    required: "Please enter your email address.",
                    pattern: {
                      value: /^\S+@\S+\.\S+$/,
                      message: "Please enter a valid email address.",
                    },
                  }}
                  labelClassName="mb-2 block font-semibold text-slate-200"
                  className="h-12 rounded-xl border border-white/10 bg-[#020d1a]/70 px-4 text-sm text-white shadow-none placeholder:text-slate-600 focus-visible:border-[#83c400]/70 focus-visible:ring-2 focus-visible:ring-[#83c400]/15"
                />
              </div>

              <NSelect
                name="topic"
                label="What’s this about?"
                items={contactTopics}
                labelClassName="mb-2 block font-semibold text-slate-200"
                className="h-12 rounded-xl border-white/10 bg-[#020d1a]/70 px-4 text-sm text-white shadow-none focus-visible:border-[#83c400]/70 focus-visible:ring-2 focus-visible:ring-[#83c400]/15"
                contentClassName="border-white/10 bg-[#061a2d] text-white"
              />

              <NTextArea
                name="message"
                label="Your message"
                rows={5}
                placeholder="Tell us a little about what you need..."
                rules={{ required: "Please enter a message." }}
                labelClassName="mb-2 block font-semibold text-slate-200"
                className="min-h-36 resize-y rounded-xl border-white/10 bg-[#020d1a]/70 px-4 py-3 text-sm leading-6 text-white shadow-none placeholder:text-slate-600 focus-visible:border-[#83c400]/70 focus-visible:ring-2 focus-visible:ring-[#83c400]/15"
              />

              <button
                type="submit"
                className="group inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-xl bg-[#83c400] px-6 py-3 text-sm font-black tracking-wide text-[#020d1a] transition-all hover:bg-[#92dc00] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#a4eb28] focus-visible:ring-offset-2 focus-visible:ring-offset-[#061a2d] sm:w-auto"
              >
                Prepare email
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <p className="flex items-center gap-2 text-xs leading-5 text-slate-500">
                <Clock3 className="h-3.5 w-3.5 shrink-0 text-[#83c400]" />
                Your message is sent from your own email app.
              </p>
            </Form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
