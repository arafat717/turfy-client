"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  type OwnerRequest,
  type OwnerRequestDetailsResponse,
  useApproveOwnerApplicationMutation,
  useRejectOwnerApplicationMutation,
  useSingleOwnerRequestsQuery,
} from "@/redux/api/Admindashboard/Admindashboard.api";
import {
  AlertCircle,
  ArrowLeft,
  Building2,
  Check,
  ExternalLink,
  FileCheck2,
  Mail,
  Percent,
  ShieldCheck,
  UserRound,
  X,
  XIcon,
} from "lucide-react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

function getErrorMessage(error: unknown) {
  if (
    typeof error === "object" &&
    error !== null &&
    "data" in error &&
    typeof error.data === "object" &&
    error.data !== null &&
    "message" in error.data &&
    typeof error.data.message === "string"
  ) {
    return error.data.message;
  }

  return "Please try again.";
}

function Detail({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof UserRound;
  label: string;
  value: string;
}) {
  return (
    <div className="flex min-w-0 items-start gap-3 rounded-xl border border-slate-700 bg-[#041b30] p-4">
      <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#83c400]/10 text-[#a8e64a]">
        <Icon className="size-4" />
      </span>
      <div className="min-w-0">
        <dt className="text-xs font-medium text-slate-400">{label}</dt>
        <dd className="mt-1 break-words text-sm font-semibold text-white">
          {value || "Not provided"}
        </dd>
      </div>
    </div>
  );
}

export default function ApprovalDetailsPage() {
  const { id: userId } = useParams<{ id: string }>();
  const router = useRouter();
  const [isLicenseOpen, setIsLicenseOpen] = useState(false);
  const [isPreviewFailed, setIsPreviewFailed] = useState(false);
  const [previewSize, setPreviewSize] = useState<{
    width: number;
    height: number;
  } | null>(null);
  const { data, error, isLoading } = useSingleOwnerRequestsQuery(userId);
  const [approveOwner, { isLoading: isApproving }] =
    useApproveOwnerApplicationMutation();
  const [rejectOwner, { isLoading: isRejecting }] =
    useRejectOwnerApplicationMutation();
  const response = data as OwnerRequestDetailsResponse | undefined;
  const request: OwnerRequest | undefined =
    response && "data" in response ? response.data : response;
  const isUpdating = isApproving || isRejecting;
  const isPdf = request?.licenseDocUrl
    ? /\.pdf(?:$|[?#])/i.test(request.licenseDocUrl)
    : false;
  const previewUrl =
    request?.licenseDocUrl && isPdf
      ? request.licenseDocUrl.replace(/\.pdf(?=($|[?#]))/i, ".jpg")
      : request?.licenseDocUrl;

  const handleDecision = async (action: "approve" | "reject") => {
    const mutation = action === "approve" ? approveOwner : rejectOwner;

    try {
      await mutation(userId).unwrap();
      toast.success(
        action === "approve"
          ? "Owner application approved."
          : "Owner application rejected.",
      );
      router.push("/admin/dashboard/approval-requests");
    } catch (mutationError: unknown) {
      toast.error(getErrorMessage(mutationError));
    }
  };

  if (isLoading) {
    return (
      <div className="mx-auto w-full max-w-[1400px] animate-pulse space-y-6">
        <div className="h-40 rounded-2xl bg-[#001428]" />
        <div className="h-72 rounded-2xl bg-[#001428]" />
      </div>
    );
  }

  if (error || !request) {
    return (
      <div className="mx-auto flex w-full max-w-full flex-col items-center rounded-2xl border border-slate-700 bg-[#001428] px-5 py-12 text-center">
        <AlertCircle className="size-9 text-amber-300" />
        <h1 className="mt-4 text-xl font-bold text-white">
          Application details unavailable
        </h1>
        <p className="mt-2 text-sm text-slate-400">
          We couldn’t load this owner application. Please try again later.
        </p>
        <Link
          href="/admin/dashboard/approval-requests"
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#a8e64a] hover:text-[#83c400]"
        >
          <ArrowLeft className="size-4" />
          Back to approval requests
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-full  space-y-6 sm:space-y-8">
      <Link
        href="/admin/dashboard/approval-requests"
        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition-colors hover:text-[#a8e64a]"
      >
        <ArrowLeft className="size-4" />
        Back to approval requests
      </Link>

      <section className="relative overflow-hidden rounded-2xl bg-[#001428] px-6 py-8 text-white shadow-lg shadow-[#001428]/10 sm:px-8 sm:py-10">
        <div className="pointer-events-none absolute -top-20 right-0 size-64 rounded-full border-[36px] border-white/[0.04] sm:right-12" />
        <div className="pointer-events-none absolute -right-10 -bottom-28 size-64 rounded-full border-[36px] border-[#83c400]/10" />
        <div className="relative flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#83c400]/20 bg-[#83c400]/10 px-3 py-1 text-[11px] font-semibold tracking-[0.16em] text-[#a8e64a] uppercase">
              <Building2 className="size-3.5" />
              Owner application
            </span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              {request.businessName}
            </h1>
            <p className="mt-2 text-sm text-slate-300">
              Review the submitted business and account information.
            </p>
          </div>
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1.5 text-xs font-semibold text-amber-200">
            <span className="size-1.5 rounded-full bg-amber-300" />
            {request.verificationStatus}
          </span>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="rounded-2xl border border-slate-700 bg-[#001428] p-5 sm:p-7">
          <h2 className="text-lg font-bold text-white">Application details</h2>
          <p className="mt-1 text-sm text-slate-400">
            Information provided for this owner application.
          </p>
          <dl className="mt-6 grid gap-3 sm:grid-cols-2">
            <Detail
              icon={Building2}
              label="Business name"
              value={request.businessName}
            />
            <Detail
              icon={UserRound}
              label="Account name"
              value={request.user.name}
            />
            <Detail
              icon={Mail}
              label="Email address"
              value={request.user.email}
            />
            <Detail
              icon={ShieldCheck}
              label="Account role"
              value={request.user.role}
            />
            <Detail
              icon={ShieldCheck}
              label="Account status"
              value={request.user.status}
            />
            <Detail
              icon={Percent}
              label="Commission rate"
              value={`${(request.commissionRate * 100).toLocaleString()}%`}
            />
            <div className="sm:col-span-2">
              {request.licenseDocUrl ? (
                <button
                  type="button"
                  onClick={() => setIsLicenseOpen(true)}
                  className="flex w-full items-center justify-between gap-3 rounded-xl border border-slate-700 bg-[#041b30] p-4 text-left transition-colors hover:border-[#83c400]/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#83c400]"
                >
                  <span className="flex min-w-0 items-center gap-3">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#83c400]/10 text-[#a8e64a]">
                      <FileCheck2 className="size-4" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-medium text-slate-400">
                        Business license
                      </span>
                      <span className="mt-1 block truncate text-sm font-semibold text-white">
                        Preview submitted document
                      </span>
                    </span>
                  </span>
                  <ExternalLink className="size-4 shrink-0 text-[#a8e64a]" />
                </button>
              ) : (
                <Detail
                  icon={FileCheck2}
                  label="Business license"
                  value="Not provided"
                />
              )}
            </div>
          </dl>
        </div>

        <aside className="h-fit rounded-2xl border border-slate-700 bg-[#001428] p-5 sm:p-6">
          <h2 className="text-lg font-bold text-white">Review decision</h2>
          <p className="mt-2 text-sm leading-6 text-slate-400">
            Approve this application to accept the owner, or reject it if the
            request doesn’t meet the requirements.
          </p>
          <div className="mt-6 grid gap-3">
            <Button
              type="button"
              disabled={isUpdating}
              onClick={() => handleDecision("approve")}
              className="h-11 rounded-xl bg-[#83c400] font-bold text-[#001428] hover:bg-[#92dc00]"
            >
              <Check className="size-4" />
              {isApproving ? "Approving..." : "Approve application"}
            </Button>
            <Button
              type="button"
              disabled={isUpdating}
              onClick={() => handleDecision("reject")}
              className="h-11 rounded-xl border border-red-400/30 bg-red-400/10 font-bold text-red-200 hover:bg-red-400/20"
            >
              <X className="size-4" />
              {isRejecting ? "Rejecting..." : "Reject application"}
            </Button>
          </div>
        </aside>
      </section>

      {request.licenseDocUrl && (
        <Dialog open={isLicenseOpen} onOpenChange={setIsLicenseOpen}>
          <DialogContent
            showCloseButton={false}
            style={
              previewSize
                ? {
                    width: previewSize.width,
                    height: previewSize.height,
                  }
                : undefined
            }
            className="!fixed !right-4 !left-auto !top-1/2 z-[60] flex !max-h-[calc(100dvh-2rem)] w-[min(92vw,72rem)] !max-w-[calc(100vw-2rem)] !translate-x-0 !-translate-y-1/2 flex-col gap-0 overflow-hidden rounded-2xl border border-slate-700 bg-[#020d1a] p-0 text-white shadow-2xl shadow-black/50"
          >
            <DialogHeader className="flex shrink-0 flex-row items-center justify-between gap-4 border-b border-slate-700 bg-[#001428] px-4 py-3 text-left sm:px-6 sm:py-4">
              <div className="flex min-w-0 items-center gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-[#83c400]/20 bg-[#83c400]/10 text-[#a8e64a]">
                  <FileCheck2 className="size-5" />
                </span>
                <div className="min-w-0">
                  <DialogTitle className="truncate text-sm font-bold text-white sm:text-base">
                    {request.businessName} — Business license
                  </DialogTitle>
                  <DialogDescription className="mt-1 text-xs text-slate-400">
                    Document preview
                  </DialogDescription>
                </div>
                <DialogDescription className="sr-only">
                  Right-side preview of the submitted business license
                </DialogDescription>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <a
                  href={request.licenseDocUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 items-center gap-2 rounded-lg border border-slate-700 px-3 text-xs font-semibold text-slate-200 transition-colors hover:border-[#83c400]/50 hover:text-[#a8e64a]"
                >
                  <ExternalLink className="size-4" />
                  <span className="hidden sm:inline">
                    {isPdf ? "Open original PDF" : "Open original"}
                  </span>
                </a>
                <DialogClose asChild>
                  <button
                    type="button"
                    aria-label="Close document preview"
                    className="flex size-9 items-center justify-center rounded-lg text-slate-300 transition-colors hover:bg-[#0b2a45] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#83c400]"
                  >
                    <XIcon className="size-5" />
                  </button>
                </DialogClose>
              </div>
            </DialogHeader>
            <div className="flex min-h-0 flex-1 items-center justify-center overflow-auto bg-[#111c29] p-2 sm:p-4">
              {!isPreviewFailed && previewUrl ? (
                <img
                  src={previewUrl}
                  alt={`${request.businessName} business license`}
                  className="block h-auto w-auto max-h-full max-w-full rounded-lg object-contain"
                  onLoad={(event) => {
                    const { naturalWidth, naturalHeight } = event.currentTarget;
                    const maxWidth = Math.min(window.innerWidth - 64, 1152);
                    const maxHeight = window.innerHeight - 120;
                    const scale = Math.min(
                      1,
                      maxWidth / naturalWidth,
                      maxHeight / naturalHeight,
                    );
                    setPreviewSize({
                      width: Math.ceil(naturalWidth * scale + 32),
                      height: Math.ceil(naturalHeight * scale + 96),
                    });
                  }}
                  onError={() => setIsPreviewFailed(true)}
                />
              ) : (
                <iframe
                  src={`${request.licenseDocUrl}#view=FitH&toolbar=0&navpanes=0`}
                  title={`${request.businessName} business license`}
                  className="h-[75dvh] w-full rounded-lg border border-slate-700 bg-white"
                />
              )}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
