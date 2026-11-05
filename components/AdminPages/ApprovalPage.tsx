"use client";

import Pagination from "@/components/Pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  useOwnerRequestsQuery,
} from "@/redux/api/Admindashboard/Admindashboard.api";
import { AlertCircle, Eye, UsersRound } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const PAGE_SIZE = 10;

const ApprovalPage = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useOwnerRequestsQuery();
  const requests = data?.data ?? [];
  console.log("Approval Requests Data:", requests);

  const totalRequests = data?.meta?.total ?? requests.length;
  const visibleRequests = requests.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE,
  );

  return (
    <div className="mx-auto w-full max-w-full space-y-6 sm:space-y-8">
      <section className="relative overflow-hidden rounded-2xl bg-[#001428] px-6 py-8 text-white shadow-lg shadow-[#001428]/10 sm:px-8 sm:py-10">
        <div className="pointer-events-none absolute -top-20 right-0 size-64 rounded-full border-[36px] border-white/[0.04] sm:right-12" />
        <div className="pointer-events-none absolute -right-10 -bottom-28 size-64 rounded-full border-[36px] border-[#83c400]/10" />
        <div className="relative">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold tracking-[0.16em] text-[#a8e64a] uppercase">
            <UsersRound className="size-3.5" />
            Member management
          </span>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Approval requests
          </h1>
          <p className="mt-2 max-w-xl text-sm leading-6 text-slate-300 sm:text-base">
            Review owner requests and open each request for more information.
          </p>
        </div>
      </section>

      <section className="overflow-hidden rounded-2xl border border-slate-700 bg-[#001428] shadow-sm shadow-slate-900/[0.08]">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-700 px-5 py-5 sm:px-6">
          <div>
            <h2 className="text-lg font-bold text-white">Pending requests</h2>
            <p className="mt-1 text-sm text-slate-400">
              {totalRequests} requests awaiting review
            </p>
          </div>
          <span className="rounded-full bg-[#83c400]/15 px-3 py-1 text-xs font-semibold text-[#a8e64a]">
            {isLoading ? "Loading" : `${totalRequests} pending`}
          </span>
        </div>

        {isError ? (
          <div
            role="alert"
            className="flex flex-col items-center px-5 py-12 text-center"
          >
            <AlertCircle className="size-8 text-amber-300" />
            <p className="mt-3 font-semibold text-white">
              Requests couldn’t be loaded
            </p>
            <p className="mt-1 text-sm text-slate-400">
              Please try again later.
            </p>
          </div>
        ) : (
          <>
            <Table>
              <TableHeader className="bg-[#041b30]">
                <TableRow className="border-slate-700 hover:bg-transparent">
                  <TableHead className="h-12 px-5 text-xs font-semibold tracking-wider text-slate-400 uppercase sm:px-6">
                    Business
                  </TableHead>
                  <TableHead className="h-12 px-5 text-xs font-semibold tracking-wider text-slate-400 uppercase">
                    Owner
                  </TableHead>
                  <TableHead className="hidden h-12 px-5 text-xs font-semibold tracking-wider text-slate-400 uppercase sm:table-cell">
                    Account
                  </TableHead>
                  <TableHead className="h-12 px-5 text-xs font-semibold tracking-wider text-slate-400 uppercase">
                    Review status
                  </TableHead>
                  <TableHead className="hidden h-12 px-5 text-xs font-semibold tracking-wider text-slate-400 uppercase md:table-cell">
                    Commission
                  </TableHead>
                  <TableHead className="hidden h-12 px-5 text-xs font-semibold tracking-wider text-slate-400 uppercase lg:table-cell">
                    License
                  </TableHead>
                  <TableHead className="h-12 px-5 text-right text-xs font-semibold tracking-wider text-slate-400 uppercase sm:px-6">
                    Details
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {isLoading ? (
                  Array.from({ length: 5 }, (_, index) => (
                    <TableRow key={index} className="border-slate-700">
                      <TableCell colSpan={7} className="px-5 py-4 sm:px-6">
                        <div className="h-5 w-full max-w-md animate-pulse rounded bg-slate-700" />
                      </TableCell>
                    </TableRow>
                  ))
                ) : requests.length === 0 ? (
                  <TableRow className="border-slate-700 hover:bg-transparent">
                    <TableCell
                      colSpan={7}
                      className="h-36 px-5 text-center sm:px-6"
                    >
                      <p className="font-semibold text-white">
                        No approval requests
                      </p>
                      <p className="mt-1 text-sm text-slate-400">
                        New requests will appear here when submitted.
                      </p>
                    </TableCell>
                  </TableRow>
                ) : (
                  visibleRequests.map((request) => (
                    <TableRow
                      key={request.id}
                      className="border-slate-700 transition-colors hover:bg-[#0b2a45]"
                    >
                      <TableCell className="max-w-52 px-5 py-4 sm:px-6">
                        <p className="truncate font-semibold text-white">
                          {request.businessName}
                        </p>
                      </TableCell>
                      <TableCell className="max-w-56 px-5 py-4 text-sm text-slate-300">
                        <p className="truncate">{request.user.name}</p>
                        <p className="mt-1 truncate text-xs text-slate-400">
                          {request.user.email}
                        </p>
                      </TableCell>
                      <TableCell className="hidden px-5 py-4 text-sm text-slate-300 sm:table-cell">
                        <p>{request.user.role}</p>
                        <p className="mt-1 text-xs text-slate-400">
                          {request.user.status}
                        </p>
                      </TableCell>
                      <TableCell className="px-5 py-4">
                        <span className="inline-flex rounded-full border border-amber-300/20 bg-amber-300/10 px-2.5 py-1 text-xs font-semibold text-amber-200">
                          {request.verificationStatus}
                        </span>
                      </TableCell>
                      <TableCell className="hidden px-5 py-4 text-sm text-slate-300 md:table-cell">
                        {(request.commissionRate * 100).toLocaleString()}%
                      </TableCell>
                      <TableCell className="hidden px-5 py-4 text-sm lg:table-cell">
                        {request.licenseDocUrl ? (
                          <a
                            href={request.licenseDocUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="font-semibold text-[#a8e64a] underline-offset-4 hover:underline"
                          >
                            View license
                          </a>
                        ) : (
                          <span className="text-slate-400">Not provided</span>
                        )}
                      </TableCell>
                      <TableCell className="px-5 py-4 text-right sm:px-6">
                        <Link
                          href={`/admin/dashboard/approval-requests/${request.userId}`}
                          className="inline-flex min-h-9 items-center gap-2 rounded-lg border border-[#83c400]/40 px-3 py-2 text-xs font-semibold text-[#a8e64a] transition-colors hover:bg-[#83c400]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#83c400]"
                        >
                          <Eye className="size-4" />
                          <span className="hidden sm:inline">View details</span>
                          <span className="sm:hidden">View</span>
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>

            {!isLoading && !isError && totalRequests > PAGE_SIZE && (
              <div className="border-t border-slate-700">
                <Pagination
                  currentPage={page}
                  totalItem={totalRequests}
                  limit={PAGE_SIZE}
                  onPageChange={setPage}
                />
              </div>
            )}
          </>
        )}
      </section>
    </div>
  );
};

export default ApprovalPage;
