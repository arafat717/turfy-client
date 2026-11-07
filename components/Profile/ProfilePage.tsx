"use client";

import { useGetMeQuery, useUpdateMeMutation } from "@/redux/api/authApi";
import {
  AlertCircle,
  CalendarDays,
  Fingerprint,
  Link2,
  LoaderCircle,
  Mail,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import { toast } from "sonner";
import Form from "@/components/Form/Form";
import NFile from "@/components/Form/NFile";
import NInput from "@/components/Form/NInput";
import type { FieldValues } from "react-hook-form";
import Image from "next/image";

interface ProfileUser {
  id?: string;
  name?: string;
  email?: string;
  profileImageUrl?: string;
  googleId?: string | null;
  authProvider?: string;
  role?: string;
  status?: string;
  createdAt?: string;
  updatedAt?: string;
}

interface GetMeResponse {
  data?: ProfileUser;
}

function formatDate(value: string | undefined) {
  if (!value) return "Not provided";
  const date = new Date(value);
  return Number.isNaN(date.getTime())
    ? value
    : new Intl.DateTimeFormat("en", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }).format(date);
}

function ProfileField({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof UserRound;
  label: string;
  value: string;
}) {
  return (
    <div className="flex min-w-0 items-start gap-3 rounded-xl border border-slate-700 bg-[#041b30] p-4 sm:p-5">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#83c400]/10 text-[#a8e64a]">
        <Icon className="size-4" />
      </span>
      <div className="min-w-0">
        <p className="text-xs font-medium text-slate-400">{label}</p>
        <p className="mt-1 break-words text-sm font-semibold text-white">
          {value || "Not provided"}
        </p>
      </div>
    </div>
  );
}

const ProfilePage = () => {
  const { data: response, isLoading, isError } = useGetMeQuery(undefined);
  const [updateMe, { isLoading: isSaving }] = useUpdateMeMutation();
  const user = (response as GetMeResponse | undefined)?.data;

  const initials =
    user?.name
      ?.trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase())
      .join("") || "U";

  const handleUpdate = async (data: FieldValues) => {
    console.log(data.image[0]);
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      if (data.image && data.image.length > 0) {
        formData.append("image", data.image[0]);
      }
      const res = await updateMe(formData);
      if(res?.data) {
        toast.success("Profile updated successfully. Please refresh the page to see the changes.");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Failed to update profile. Please try again.");
    }
  };

  if (isLoading) {
    return (
      <div className="mx-auto w-full max-w-[1400px] animate-pulse space-y-6">
        <div className="h-44 rounded-2xl bg-[#001428]" />
        <div className="h-72 rounded-2xl bg-[#001428]" />
      </div>
    );
  }

  if (isError || !user) {
    return (
      <div
        role="alert"
        className="mx-auto flex w-full max-w-[1400px] flex-col items-center rounded-2xl border border-slate-700 bg-[#001428] px-5 py-12 text-center"
      >
        <AlertCircle className="size-9 text-amber-300" />
        <h1 className="mt-4 text-xl font-bold text-white">
          Profile information unavailable
        </h1>
        <p className="mt-2 text-sm text-slate-400">
          We couldn’t load your account details. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-full space-y-6 sm:space-y-8">
      <section className="relative overflow-hidden rounded-2xl bg-[#001428] px-6 py-8 text-white shadow-lg shadow-[#001428]/10 sm:px-8 sm:py-10">
        <div className="pointer-events-none absolute -top-20 right-0 size-64 rounded-full border-[36px] border-white/[0.04] sm:right-12" />
        <div className="pointer-events-none absolute -right-10 -bottom-28 size-64 rounded-full border-[36px] border-[#83c400]/10" />
        <div className="relative flex flex-col items-start gap-5 sm:flex-row sm:items-center">
          <div className="relative flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-[#83c400]/30 bg-[#83c400]/10 text-xl font-black text-[#a8e64a]">
            {user.profileImageUrl ? (
              <Image
                src={user.profileImageUrl}
                alt=""
                className="size-full object-cover"
                height={1000}
                width={1000}
              />
            ) : (
              initials
            )}
          </div>
          <div className="min-w-0">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold tracking-[0.16em] text-[#a8e64a] uppercase">
              <UserRound className="size-3.5" />
              Account profile
            </span>
            <h1 className="mt-3 truncate text-3xl font-bold tracking-tight sm:text-4xl">
              {user.name || "Your profile"}
            </h1>
            <p className="mt-1 break-all text-sm text-slate-300">
              {user.email || "Email not provided"}
            </p>
          </div>
          {user.status && (
            <span className="inline-flex items-center gap-2 rounded-full border border-[#83c400]/20 bg-[#83c400]/10 px-3 py-1.5 text-xs font-semibold text-[#a8e64a] sm:ml-auto">
              <span className="size-1.5 rounded-full bg-[#83c400]" />
              {user.status}
            </span>
          )}
        </div>
      </section>

      <section className="rounded-2xl border border-slate-700 bg-[#001428] p-5 sm:p-7">
        <div className="mb-5">
          <h2 className="text-lg font-bold text-white">Edit profile</h2>
          <p className="mt-1 text-sm text-slate-400">
            Update your display name, profile image, or both.
          </p>
        </div>
        <Form
          onSubmit={handleUpdate}
          defaultValues={{ name: user.name ?? "", image: user.profileImageUrl ?? null }}
        >
          <div className="space-y-5">
            <div className="grid gap-5 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
              <div>
                <NInput
                  type="text"
                  name="name"
                  label="Display name"
                  placeholder="Enter your name"
                  rules={{
                    validate: (value: string) =>
                      Boolean(value?.trim()) || "Name cannot be empty.",
                  }}
                  className="h-11 rounded-xl border border-slate-700 bg-[#041b30] px-4 py-2 text-sm text-white placeholder:text-slate-500 focus-visible:border-[#83c400]/70 focus-visible:ring-[#83c400]/15"
                  labelClassName="mb-2 block text-sm font-semibold text-slate-200"
                />
              </div>
              <NFile name="image" label="Profile image" />
            </div>

            <div className="flex justify-end border-t border-slate-700 pt-4">
              <button
                type="submit"
                disabled={isSaving}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#83c400] px-5 py-2.5 text-sm font-bold text-[#001428] transition-colors hover:bg-[#92dc00] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSaving ? (
                  <LoaderCircle className="size-4 animate-spin" />
                ) : (
                  <UserRound className="size-4" />
                )}
                {isSaving ? "Saving changes..." : "Save changes"}
              </button>
            </div>
          </div>
        </Form>
      </section>

      <section className="rounded-2xl border border-slate-700 bg-[#001428] p-5 sm:p-7">
        <div className="mb-5">
          <h2 className="text-lg font-bold text-white">Account information</h2>
          <p className="mt-1 text-sm text-slate-400">
            Your profile and sign-in details.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <ProfileField
            icon={UserRound}
            label="Full name"
            value={user.name || ""}
          />
          <ProfileField
            icon={Mail}
            label="Email address"
            value={user.email || ""}
          />
          <ProfileField
            icon={ShieldCheck}
            label="Role"
            value={user.role || ""}
          />
          <ProfileField
            icon={ShieldCheck}
            label="Account status"
            value={user.status || ""}
          />
          <ProfileField
            icon={Link2}
            label="Sign-in method"
            value={user.authProvider || ""}
          />
          <ProfileField
            icon={Fingerprint}
            label="Google account"
            value={user.googleId || "Not linked"}
          />
          <ProfileField
            icon={CalendarDays}
            label="Account created"
            value={formatDate(user.createdAt)}
          />
          <ProfileField
            icon={CalendarDays}
            label="Last updated"
            value={formatDate(user.updatedAt)}
          />
          <div className="sm:col-span-2">
            <ProfileField
              icon={Fingerprint}
              label="Account ID"
              value={user.id || ""}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;
