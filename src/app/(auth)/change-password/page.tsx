import Link from "next/link";
import AuthFormLayout from "@/components/Mainlayout/Auth/AuthFormLayout";

export default function ChangePasswordPage() {
  return (
    <AuthFormLayout
      title="Create a new password"
      description="Your code has been verified. Choose a strong password for your account."
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
      <div className="space-y-4">
        <div>
          <label
            htmlFor="new-password"
            className="mb-1 block text-sm font-medium text-slate-700"
          >
            New password
          </label>
          <input
            id="new-password"
            name="newPassword"
            type="password"
            autoComplete="new-password"
            placeholder="Enter your new password"
            className="w-full rounded-sm border-none bg-gray-100 px-4 py-4 text-sm outline-none transition focus:ring-2 focus:ring-[#1a2332]"
          />
        </div>

        <div>
          <label
            htmlFor="confirm-password"
            className="mb-1 block text-sm font-medium text-slate-700"
          >
            Confirm new password
          </label>
          <input
            id="confirm-password"
            name="confirmPassword"
            type="password"
            autoComplete="new-password"
            placeholder="Re-enter your new password"
            className="w-full rounded-sm border-none bg-gray-100 px-4 py-4 text-sm outline-none transition focus:ring-2 focus:ring-[#1a2332]"
          />
        </div>

        <button
          type="button"
          className="mt-2 flex w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-[#1a2332] py-3.5 text-lg font-semibold text-white shadow transition hover:bg-green-800"
        >
          Update Password
        </button>
      </div>
    </AuthFormLayout>
  );
}
