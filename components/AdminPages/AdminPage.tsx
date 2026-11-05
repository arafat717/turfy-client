"use client";

import {
  useGetAllEventsQuery,
  useGetUpcommingEventsQuery,
} from "@/redux/api/eventApi";
import { useGetAllMembersQuery } from "@/redux/api/memberApi";
import {
  ArrowUpRight,
  CalendarDays,
  CircleAlert,
  Clock3,
  MapPin,
  UsersRound,
} from "lucide-react";
import Link from "next/link";

const dateFormatter = new Intl.DateTimeFormat("en", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

function formatEventDate(date: string) {
  const parsedDate = new Date(date);
  return Number.isNaN(parsedDate.getTime())
    ? date
    : dateFormatter.format(parsedDate);
}

function MetricCard({
  label,
  value,
  detail,
  icon: Icon,
  isLoading,
  isError,
}: {
  label: string;
  value: number | undefined;
  detail: string;
  icon: typeof UsersRound;
  isLoading: boolean;
  isError: boolean;
}) {
  return (
    <article className="rounded-2xl border border-slate-700 border-b-2 border-b-[#83c400] bg-[#001428] p-6 shadow-sm shadow-slate-900/[0.08] sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-slate-300">{label}</p>
          {isLoading ? (
            <div className="mt-3 h-9 w-20 animate-pulse rounded-lg bg-slate-700" />
          ) : isError ? (
            <p className="mt-2 text-sm font-semibold text-amber-300">
              Not available
            </p>
          ) : (
            <p className="mt-2 text-3xl font-bold tracking-tight text-white">
              {(value ?? 0).toLocaleString()}
            </p>
          )}
        </div>
        <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#83c400]/15 text-[#a8e64a]">
          <Icon className="size-5" />
        </span>
      </div>
      <p className="mt-4 text-xs text-slate-400">{detail}</p>
    </article>
  );
}

export default function AdminPage() {
  const membersQuery = useGetAllMembersQuery({
    adminApprovedStatus: "",
    page: 1,
    limit: 1,
  });
  const eventsQuery = useGetAllEventsQuery({
    page: 1,
    limit: 1,
    currentStatus: "",
  });
  const upcomingQuery = useGetUpcommingEventsQuery({});
  const upcomingEvents = upcomingQuery.data?.data ?? [];
  const hasOverviewError =
    membersQuery.isError || eventsQuery.isError || upcomingQuery.isError;

  return (
    <div className="mx-auto w-full max-w-full space-y-6 sm:space-y-8">
      <section className="relative overflow-hidden rounded-2xl bg-[#001428] px-6 py-8 text-white shadow-lg shadow-[#001428]/10 sm:px-8 sm:py-10">
        <div className="pointer-events-none absolute -top-20 right-0 size-64 rounded-full border-[36px] border-white/[0.04] sm:right-12" />
        <div className="pointer-events-none absolute -right-10 -bottom-28 size-64 rounded-full border-[36px] border-[#83c400]/10" />
        <div className="relative max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold tracking-[0.16em] text-[#a8e64a] uppercase">
            <span className="size-1.5 rounded-full bg-[#83c400]" />
            Admin workspace
          </span>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Dashboard overview
          </h1>
          <p className="mt-2 max-w-xl text-sm leading-6 text-slate-300 sm:text-base">
            A quick look at your Turfy community and what’s coming up next.
          </p>
          <Link
            href="/"
            className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-xl bg-[#83c400] px-4 py-2.5 text-sm font-bold text-[#001428] transition-colors hover:bg-[#92dc00]"
          >
            Visit Turfy website
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </section>

      <section aria-label="Platform summary">
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold text-white">At a glance</h2>
            <p className="mt-1 text-sm text-slate-400">
              Live totals from your platform
            </p>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          <MetricCard
            label="Members"
            value={membersQuery.data?.meta.total}
            detail="Registered members"
            icon={UsersRound}
            isLoading={membersQuery.isLoading}
            isError={membersQuery.isError}
          />
          <MetricCard
            label="All events"
            value={eventsQuery.data?.meta.total}
            detail="Events on the platform"
            icon={CalendarDays}
            isLoading={eventsQuery.isLoading}
            isError={eventsQuery.isError}
          />
          <MetricCard
            label="Coming up"
            value={upcomingQuery.data?.meta.total ?? upcomingEvents.length}
            detail="Upcoming events"
            icon={Clock3}
            isLoading={upcomingQuery.isLoading}
            isError={upcomingQuery.isError}
          />
        </div>
      </section>

      {hasOverviewError && (
        <p
          role="status"
          className="flex items-center gap-2 rounded-xl border border-amber-300/20 bg-amber-300/10 px-4 py-3 text-sm text-amber-200"
        >
          <CircleAlert className="size-4 shrink-0" />
          Some overview information couldn’t be loaded. You can try again later.
        </p>
      )}

      <section className="overflow-hidden rounded-2xl border border-slate-700 bg-[#001428] shadow-sm shadow-slate-900/[0.08]">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-700 px-5 py-5 sm:px-6">
          <div>
            <h2 className="text-lg font-bold text-white">
              Upcoming events
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              The next events scheduled on Turfy
            </p>
          </div>
          <span className="rounded-full bg-[#83c400]/15 px-3 py-1 text-xs font-semibold text-[#a8e64a]">
            {upcomingQuery.isLoading
              ? "Loading"
              : `${upcomingEvents.length} shown`}
          </span>
        </div>

        {upcomingQuery.isLoading ? (
          <ul className="divide-y divide-slate-700">
            {[0, 1, 2].map((item) => (
              <li
                key={item}
                className="flex items-center gap-4 px-5 py-4 sm:px-6"
              >
                <div className="size-11 animate-pulse rounded-xl bg-slate-700" />
                <div className="min-w-0 flex-1 space-y-2">
                  <div className="h-4 w-40 animate-pulse rounded bg-slate-700" />
                  <div className="h-3 w-56 max-w-full animate-pulse rounded bg-slate-700" />
                </div>
              </li>
            ))}
          </ul>
        ) : upcomingQuery.isError ? (
          <div className="px-5 py-10 text-center sm:px-6">
            <p className="font-semibold text-white">
              Events are temporarily unavailable
            </p>
            <p className="mt-1 text-sm text-slate-400">
              Please try again later.
            </p>
          </div>
        ) : upcomingEvents.length === 0 ? (
          <div className="px-5 py-10 text-center sm:px-6">
            <span className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-[#83c400]/15 text-[#a8e64a]">
              <CalendarDays className="size-5" />
            </span>
            <p className="mt-3 font-semibold text-white">
              No upcoming events
            </p>
            <p className="mt-1 text-sm text-slate-400">
              New events will appear here when they’re scheduled.
            </p>
          </div>
        ) : (
          <ul className="divide-y divide-slate-700">
            {upcomingEvents.slice(0, 5).map((event) => (
              <li
                key={event.id}
                className="flex items-center gap-4 px-5 py-4 transition-colors hover:bg-[#0b2a45] sm:px-6"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#83c400]/15 text-[#a8e64a]">
                  <CalendarDays className="size-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate font-semibold text-white">
                    {event.title}
                  </p>
                  <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400">
                    <span>{formatEventDate(event.date)}</span>
                    {event.time && <span>{event.time}</span>}
                    {event.location && (
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="size-3.5" />
                        {event.location}
                      </span>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
