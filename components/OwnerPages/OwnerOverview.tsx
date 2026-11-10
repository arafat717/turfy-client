import {
  ArrowDownRight,
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  CircleDollarSign,
  Clock3,
  MapPin,
  TrendingUp,
  UsersRound,
} from "lucide-react";

const metrics = [
  {
    label: "Total revenue",
    value: "$8,450",
    change: "+12.8%",
    detail: "vs. last month",
    icon: CircleDollarSign,
    positive: true,
  },
  {
    label: "Total bookings",
    value: "126",
    change: "+8.2%",
    detail: "vs. last month",
    icon: CalendarDays,
    positive: true,
  },
  {
    label: "Active customers",
    value: "84",
    change: "+5.4%",
    detail: "vs. last month",
    icon: UsersRound,
    positive: true,
  },
  {
    label: "Cancelled bookings",
    value: "7",
    change: "-2.1%",
    detail: "vs. last month",
    icon: ArrowDownRight,
    positive: true,
  },
];

const revenueByDay = [
  { day: "Mon", amount: "$620", height: "42%" },
  { day: "Tue", amount: "$840", height: "57%" },
  { day: "Wed", amount: "$710", height: "48%" },
  { day: "Thu", amount: "$1,020", height: "69%" },
  { day: "Fri", amount: "$1,280", height: "87%" },
  { day: "Sat", amount: "$1,480", height: "100%" },
  { day: "Sun", amount: "$960", height: "65%" },
];

const recentBookings = [
  {
    name: "Rahim Ahmed",
    initials: "RA",
    turf: "Greenfield Arena",
    date: "Today, 5:00 PM",
    amount: "$120",
    status: "Confirmed",
  },
  {
    name: "Nusrat Jahan",
    initials: "NJ",
    turf: "Greenfield Arena",
    date: "Today, 7:00 PM",
    amount: "$150",
    status: "Pending",
  },
  {
    name: "Tanvir Hasan",
    initials: "TH",
    turf: "Riverside Sports Club",
    date: "Tomorrow, 6:00 PM",
    amount: "$120",
    status: "Confirmed",
  },
  {
    name: "Sadia Karim",
    initials: "SK",
    turf: "Greenfield Arena",
    date: "Tomorrow, 8:00 PM",
    amount: "$150",
    status: "Confirmed",
  },
];

function MetricCard({
  label,
  value,
  change,
  detail,
  icon: Icon,
  positive,
}: (typeof metrics)[number]) {
  return (
    <article className="rounded-2xl border border-slate-700 bg-[#001428] p-5 shadow-sm shadow-black/10 sm:p-6">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-slate-400">{label}</p>
          <p className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {value}
          </p>
        </div>
        <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#83c400]/15 text-[#a8e64a]">
          <Icon className="size-5" />
        </span>
      </div>
      <div className="mt-4 flex items-center gap-2 text-xs">
        <span
          className={`inline-flex items-center gap-1 font-semibold ${
            positive ? "text-[#a8e64a]" : "text-rose-300"
          }`}
        >
          {change.startsWith("-") ? (
            <ArrowDownRight className="size-3.5" />
          ) : (
            <ArrowUpRight className="size-3.5" />
          )}
          {change}
        </span>
        <span className="text-slate-500">{detail}</span>
      </div>
    </article>
  );
}

export default function OwnerOverview() {
  return (
    <div className="mx-auto w-full max-w-full space-y-6 sm:space-y-8">
      <section className="relative overflow-hidden rounded-2xl border border-slate-700 bg-[#001428] px-5 py-6 text-white shadow-sm sm:px-8 sm:py-8">
        <div className="pointer-events-none absolute -right-10 -top-20 size-64 rounded-full border-[34px] border-white/[0.035]" />
        <div className="pointer-events-none absolute -bottom-28 right-24 size-64 rounded-full border-[34px] border-[#83c400]/10" />
        <div className="relative flex flex-wrap items-end justify-between gap-5">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#83c400]/20 bg-[#83c400]/10 px-3 py-1 text-[11px] font-semibold tracking-[0.14em] text-[#a8e64a] uppercase">
              <span className="size-1.5 rounded-full bg-[#83c400]" />
              Owner workspace
            </span>
            <h1 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
              Good morning, Alex
            </h1>
            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-300">
              Here&apos;s what&apos;s happening with your turfs this week.
            </p>
          </div>
          <span className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-white/[0.04] px-3 py-2 text-xs font-medium text-slate-300">
            <CalendarDays className="size-4 text-[#a8e64a]" />
            Week of Nov 10, 2026
          </span>
        </div>
      </section>

      <section aria-label="Owner performance summary">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-lg font-bold text-white">At a glance</h2>
            <p className="mt-1 text-sm text-slate-400">
              Your business performance this month
            </p>
          </div>
          <span className="rounded-full border border-slate-700 bg-[#001428] px-3 py-1 text-[11px] font-medium text-slate-400">
            Sample data
          </span>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric) => (
            <MetricCard key={metric.label} {...metric} />
          ))}
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1.6fr)_minmax(280px,0.9fr)]">
        <article className="rounded-2xl border border-slate-700 bg-[#001428] p-5 sm:p-6">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h2 className="text-lg font-bold text-white">Revenue overview</h2>
              <p className="mt-1 text-sm text-slate-400">
                Your earnings over the last 7 days
              </p>
            </div>
            <span className="inline-flex items-center gap-1 rounded-full bg-[#83c400]/10 px-2.5 py-1 text-xs font-semibold text-[#a8e64a]">
              <TrendingUp className="size-3.5" />
              +12.8%
            </span>
          </div>
          <div className="mt-6 flex items-end justify-between gap-2 border-b border-slate-700 pb-5">
            {revenueByDay.map((entry, index) => (
              <div
                key={entry.day}
                className="flex min-w-0 flex-1 flex-col items-center gap-2"
              >
                <span className="hidden text-[10px] text-slate-500 sm:block">
                  {entry.amount}
                </span>
                <div className="flex h-36 w-full items-end justify-center sm:h-44">
                  <div
                    role="img"
                    aria-label={`${entry.day}: ${entry.amount}`}
                    className={`w-full max-w-10 rounded-t-md transition-colors ${
                      index === 5
                        ? "bg-[#83c400]"
                        : "bg-[#83c400]/35 hover:bg-[#83c400]/60"
                    }`}
                    style={{ height: entry.height }}
                  />
                </div>
                <span
                  className={`text-xs ${
                    index === 5 ? "font-semibold text-white" : "text-slate-500"
                  }`}
                >
                  {entry.day}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
            <span>Total revenue</span>
            <span className="text-lg font-bold text-white">$6,910</span>
          </div>
        </article>

        <article className="rounded-2xl border border-slate-700 bg-[#001428] p-5 sm:p-6">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h2 className="text-lg font-bold text-white">Your facilities</h2>
              <p className="mt-1 text-sm text-slate-400">
                An overview of your turfs
              </p>
            </div>
            <span className="flex size-10 items-center justify-center rounded-xl bg-[#83c400]/15 text-[#a8e64a]">
              <MapPin className="size-5" />
            </span>
          </div>
          <div className="mt-5 space-y-3">
            <div className="rounded-xl border border-slate-700 bg-white/[0.025] p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-semibold text-white">Greenfield Arena</p>
                  <p className="mt-1 text-xs text-slate-400">
                    2 pitches · Dhaka
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#83c400]/10 px-2 py-1 text-[10px] font-semibold text-[#a8e64a]">
                  <CheckCircle2 className="size-3" />
                  Active
                </span>
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-slate-700 pt-3 text-xs">
                <span className="text-slate-400">Today&apos;s bookings</span>
                <span className="font-semibold text-white">8</span>
              </div>
            </div>
            <div className="rounded-xl border border-slate-700 bg-white/[0.025] p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-semibold text-white">
                    Riverside Sports Club
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    1 pitch · Dhaka
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#83c400]/10 px-2 py-1 text-[10px] font-semibold text-[#a8e64a]">
                  <CheckCircle2 className="size-3" />
                  Active
                </span>
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-slate-700 pt-3 text-xs">
                <span className="text-slate-400">Today&apos;s bookings</span>
                <span className="font-semibold text-white">5</span>
              </div>
            </div>
          </div>
        </article>
      </section>

      <section className="overflow-hidden rounded-2xl border border-slate-700 bg-[#001428]">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-700 px-5 py-5 sm:px-6">
          <div>
            <h2 className="text-lg font-bold text-white">Recent bookings</h2>
            <p className="mt-1 text-sm text-slate-400">
              Latest reservations across your facilities
            </p>
          </div>
          <span className="rounded-full bg-[#83c400]/10 px-3 py-1 text-xs font-semibold text-[#a8e64a]">
            4 recent
          </span>
        </div>
        <div className="divide-y divide-slate-700">
          {recentBookings.map((booking) => (
            <article
              key={`${booking.name}-${booking.date}`}
              className="flex flex-wrap items-center gap-3 px-5 py-4 sm:flex-nowrap sm:gap-4 sm:px-6"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#0b2a45] text-xs font-bold text-[#a8e64a]">
                {booking.initials}
              </span>
              <div className="min-w-[140px] flex-1">
                <p className="truncate text-sm font-semibold text-white">
                  {booking.name}
                </p>
                <p className="mt-1 truncate text-xs text-slate-400">
                  {booking.turf}
                </p>
              </div>
              <div className="flex min-w-[135px] items-center gap-2 text-xs text-slate-400">
                <Clock3 className="size-3.5 shrink-0 text-slate-500" />
                {booking.date}
              </div>
              <div className="flex w-full items-center justify-between sm:w-auto sm:gap-6">
                <span
                  className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${
                    booking.status === "Confirmed"
                      ? "bg-[#83c400]/10 text-[#a8e64a]"
                      : "bg-amber-300/10 text-amber-200"
                  }`}
                >
                  {booking.status}
                </span>
                <span className="min-w-16 text-right text-sm font-semibold text-white">
                  {booking.amount}
                </span>
              </div>
            </article>
          ))}
        </div>
        <p className="border-t border-slate-700 px-5 py-3 text-center text-xs text-slate-500 sm:px-6">
          Booking details shown are sample data.
        </p>
      </section>
    </div>
  );
}
