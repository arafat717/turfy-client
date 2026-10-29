/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import Form from "@/components/Form/Form";
import NInput from "@/components/Form/NInput";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Controller, FieldValues, useFormContext } from "react-hook-form";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ChevronRight,
  Clock3,
  FileText,
  ShieldCheck,
  UploadCloud,
} from "lucide-react";
import { toast } from "sonner";
import { useOwnerApplicationMutation } from "@/redux/api/OwnerApi.ts/OwnerApplication";
import { useRouter } from "next/navigation";

const LicenseDocumentField = () => {
  const { control } = useFormContext();

  return (
    <Controller
      name="licenseDocument"
      control={control}
      rules={{
        validate: (file: File | undefined) =>
          !file ||
          file.size <= 10 * 1024 * 1024 ||
          "File must be 10 MB or smaller.",
      }}
      render={({ field, fieldState }) => (
        <div className="w-full">
          <label
            htmlFor="licenseDocument"
            className="mb-2 block text-sm font-semibold text-slate-200"
          >
            Business license{" "}
            <span className="font-normal text-slate-500">· optional</span>
          </label>
          <label
            htmlFor="licenseDocument"
            className="group flex min-h-36 cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-white/15 bg-[#020d1a]/60 px-5 py-7 text-center transition-colors hover:border-[#83c400]/60 hover:bg-[#83c400]/5"
          >
            <span className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-[#83c400]/10 text-[#83c400] transition-colors group-hover:bg-[#83c400]/20">
              {field.value ? (
                <FileText className="h-5 w-5" />
              ) : (
                <UploadCloud className="h-5 w-5" />
              )}
            </span>
            <span className="text-sm font-bold text-white">
              {field.value ? field.value.name : "Choose a file to upload"}
            </span>
            <span className="mt-1 text-xs text-slate-500">
              PDF, JPG or PNG · up to 10 MB
            </span>
            <input
              id="licenseDocument"
              name={field.name}
              ref={field.ref}
              type="file"
              accept=".pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png"
              className="sr-only"
              onBlur={field.onBlur}
              onChange={(event) => field.onChange(event.target.files?.[0])}
              aria-invalid={fieldState.invalid}
            />
          </label>
          {field.value && (
            <button
              type="button"
              onClick={() => field.onChange(undefined)}
              className="mt-2 text-xs font-semibold text-slate-400 transition-colors hover:text-white"
            >
              Remove file
            </button>
          )}
          {fieldState.error && (
            <p className="mt-2 text-sm text-red-400">
              {fieldState.error.message}
            </p>
          )}
        </div>
      )}
    />
  );
};

const OwnerApplication = () => {
  const [applyOwner] = useOwnerApplicationMutation();
  const [successMessage, setSuccessMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Submitting...");
    try {
      const { licenseDocument, ...rest } = data;
      const formData = new FormData();
      formData.append("data", JSON.stringify(rest));
      if (licenseDocument) {
        formData.append("licenseDoc", licenseDocument);
      }
      const res = await applyOwner(formData);
      if (res?.data) {
        const message =
          (res?.data as any)?.message ||
          "Your application is in our review queue. We’ll be in touch once it’s verified.";
        toast.dismiss(toastId);
        setSuccessMessage(message);
        return true;
      }

      toast.error(
        (res?.error as any)?.data?.message || "Could not submit your application.",
        { id: toastId },
      );
      return false;
    } catch (err: unknown) {
      const message =
        typeof err === "object" &&
        err !== null &&
        "data" in err &&
        typeof err.data === "object" &&
        err.data !== null &&
        "message" in err.data &&
        typeof err.data.message === "string"
          ? err.data.message
          : err instanceof Error
            ? err.message
            : "Could not submit your application.";
      toast.error(message, { id: toastId });
      return false;
    }
  };

  return (
    <>
    <div className="min-h-screen bg-[#020d1a] font-sans text-white">
      <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#001428]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_78%_48%,rgba(131,196,0,0.16),transparent_42%)]" />
        <div className="absolute -top-32 -right-20 -z-10 h-80 w-80 rounded-full border border-[#83c400]/10" />
        <div className="absolute -top-20 -right-8 -z-10 h-56 w-56 rounded-full border border-[#83c400]/10" />

        <div className="mx-auto max-w-[1400px] px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#83c400]/30 bg-[#83c400]/10 px-4 py-2 text-xs font-bold tracking-[0.18em] text-[#a4eb28] uppercase">
            <Building2 className="h-4 w-4" />
            Turf owner program
          </p>
          <h1 className="max-w-3xl text-4xl leading-tight font-black tracking-tight sm:text-6xl">
            Bring your pitch
            <span className="block text-[#83c400]">to the community.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Tell us about your business to get started. Our team will review
            your details and help you list your turf on Turfy.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1400px] gap-8 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-12 lg:gap-12 lg:px-8 lg:py-16">
        <div className="lg:col-span-7">
          <div className="rounded-3xl border border-white/10 bg-[#061a2d] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.25)] sm:p-8 lg:p-10">
            <div className="mb-8">
              <p className="text-xs font-bold tracking-[0.2em] text-[#83c400] uppercase">
                Owner application
              </p>
              <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">
                Let’s set up your business
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Share your business name and, if available, a license document.
              </p>
            </div>

            <Form onSubmit={handleSubmit} resetOnSuccess>
              <NInput
                name="businessName"
                type="text"
                label="Business name"
                placeholder="e.g. Northside Sports Arena"
                autoComplete="organization"
                rules={{
                  required: "Please enter your business name.",
                  maxLength: {
                    value: 120,
                    message: "Business name must be 120 characters or fewer.",
                  },
                }}
                labelClassName="mb-2 block font-semibold text-slate-200"
                className="h-12 rounded-xl border border-white/10 bg-[#020d1a]/70 px-4 text-sm text-white shadow-none placeholder:text-slate-600 focus-visible:border-[#83c400]/70 focus-visible:ring-2 focus-visible:ring-[#83c400]/15"
              />

              <div className="mb-7">
                <LicenseDocumentField />
              </div>

              <div className="flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="flex items-center gap-2 text-xs leading-5 text-slate-500">
                  <ShieldCheck className="h-4 w-4 shrink-0 text-[#83c400]" />
                  Your information is used for verification.
                </p>
                <Button
                  type="submit"
                  className="group min-h-12 rounded-xl bg-[#83c400] px-6 text-sm font-black text-[#020d1a] transition-colors hover:bg-[#a4eb28]"
                >
                  Submit application
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </Form>
          </div>
        </div>

        <aside className="lg:col-span-5">
          <div className="rounded-3xl border border-white/10 bg-[#001428] p-6 sm:p-8">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#83c400]/10 text-[#83c400]">
              <BadgeCheck className="h-6 w-6" />
            </span>
            <h2 className="mt-5 text-xl font-extrabold">What happens next?</h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              A quick overview of the owner verification process.
            </p>

            <ol className="mt-7 space-y-6">
              <li className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#83c400]/10 text-sm font-black text-[#83c400]">
                  1
                </span>
                <div>
                  <h3 className="text-sm font-bold">
                    Share your business details
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    Add your business name and any supporting license document.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#83c400]/10 text-sm font-black text-[#83c400]">
                  2
                </span>
                <div>
                  <h3 className="text-sm font-bold">
                    Our team reviews your application
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    We’ll verify your information before your owner profile is
                    approved.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#83c400]/10 text-sm font-black text-[#83c400]">
                  3
                </span>
                <div>
                  <h3 className="text-sm font-bold">
                    Get ready to list your turf
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    Once approved, you can start adding your grounds to Turfy.
                  </p>
                </div>
              </li>
            </ol>
          </div>

          <div className="mt-5 flex gap-3 rounded-2xl border border-[#83c400]/20 bg-[#83c400]/5 p-5">
            <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-[#83c400]" />
            <div>
              <h3 className="text-sm font-bold text-white">
                Review in progress?
              </h3>
              <p className="mt-1 text-sm leading-6 text-slate-400">
                Applications are reviewed by our team before an owner profile is
                verified.
              </p>
            </div>
            <CheckCircle2 className="ml-auto mt-0.5 hidden h-5 w-5 shrink-0 text-[#83c400]/60 sm:block" />
          </div>
        </aside>
      </section>
    </div>
    <Dialog
      open={Boolean(successMessage)}
      onOpenChange={(open) => {
        if (!open) setSuccessMessage("");
      }}
    >
      <DialogContent
        showCloseButton
        className="overflow-hidden rounded-3xl border border-white/10 bg-[#061a2d] p-0 text-white shadow-[0_32px_100px_rgba(0,0,0,0.55)] sm:max-w-md"
      >
        <div className="relative isolate overflow-hidden px-6 pb-7 pt-9 text-center sm:px-9">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(131,196,0,0.2),transparent_55%)]" />
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#83c400]/25 bg-[#83c400]/10 text-[#a4eb28] shadow-[0_0_50px_rgba(131,196,0,0.12)]">
            <CheckCircle2 className="h-10 w-10" strokeWidth={1.8} />
          </div>
          <p className="mt-6 text-xs font-bold tracking-[0.2em] text-[#83c400] uppercase">
            Application received
          </p>
          <DialogTitle className="mt-3 text-2xl font-black tracking-tight text-white sm:text-3xl">
            You’re on your way.
          </DialogTitle>
          <DialogDescription className="mx-auto mt-3 max-w-sm text-sm leading-6 text-slate-300">
            {successMessage}
          </DialogDescription>
          <div className="mt-7 flex items-start gap-3 rounded-2xl border border-white/10 bg-[#020d1a]/70 p-4 text-left">
            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#83c400]/10 text-[#83c400]">
              <Clock3 className="h-4 w-4" />
            </span>
            <span>
              <span className="block text-sm font-bold text-white">
                What happens next?
              </span>
              <span className="mt-1 block text-xs leading-5 text-slate-400">
                Our team will review your details and contact you with an
                update.
              </span>
            </span>
            <ChevronRight className="ml-auto mt-2 h-4 w-4 shrink-0 text-slate-600" />
          </div>
          <Button
            type="button"
            onClick={() => {
              setSuccessMessage("");
              router.push("/");
            }}
            className="mt-6 min-h-12 w-full rounded-xl bg-[#83c400] text-sm font-black text-[#020d1a] transition-colors hover:bg-[#a4eb28]"
          >
            Got it
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
    </>
  );
};

export default OwnerApplication;
