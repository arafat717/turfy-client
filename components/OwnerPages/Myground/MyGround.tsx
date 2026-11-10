"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Building2, Eye, MapPin, Plus } from "lucide-react";

const ground = {
  id: "53134a2b-94d7-4f4c-8f5f-488074aefdfb",
  ownerId: "accd3048-3d49-4b08-b8e4-96fa5fe6bafa",
  name: "Champion Futsal Arena",
  address:
    "13, Block - N, Tackle Ground, Plot No- 17, Road No - Avenue, Sector- 3 Jahurul Islam City, Dhaka 1212",
  latitude: 23.769419296398056,
  longitude: 90.45708975970363,
  sportTypes: "FUTSAL",
  status: "ACTIVE",
  deletedAt: null,
  createdAt: "2026-09-03T13:15:50.596Z",
  photos: [],
};

const createdDate = new Intl.DateTimeFormat("en", {
  day: "numeric",
  month: "short",
  year: "numeric",
}).format(new Date(ground.createdAt));

const groundDetails = [
  { label: "Ground ID", value: ground.id },
  { label: "Owner ID", value: ground.ownerId },
  { label: "Sport type", value: ground.sportTypes },
  { label: "Status", value: ground.status },
  {
    label: "Coordinates",
    value: `${ground.latitude}, ${ground.longitude}`,
  },
  { label: "Created", value: createdDate },
  { label: "Deleted at", value: ground.deletedAt ?? "Not deleted" },
  { label: "Photos", value: `${ground.photos.length} photos` },
];

export default function MyGround() {
  return (
    <div className="mx-auto w-full max-w-full space-y-6 sm:space-y-8">
      <section className="relative overflow-hidden rounded-2xl bg-[#001428] px-5 py-6 text-white shadow-sm sm:px-8 sm:py-8">
        <div className="pointer-events-none absolute -right-10 -top-20 size-64 rounded-full border-[34px] border-white/[0.035]" />
        <div className="pointer-events-none absolute -bottom-28 right-24 size-64 rounded-full border-[34px] border-[#83c400]/10" />
        <div className="relative flex flex-wrap items-end justify-between gap-5">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#83c400]/20 bg-[#83c400]/10 px-3 py-1 text-[11px] font-semibold tracking-[0.14em] text-[#a8e64a] uppercase">
              <Building2 className="size-3.5" />
              Owner workspace
            </span>
            <h1 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
              My grounds
            </h1>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Manage your grounds and review their details.
            </p>
          </div>
          <Button
            type="button"
            className="h-11 rounded-xl bg-[#83c400] px-4 font-bold text-[#001428] hover:bg-[#92dc00]"
          >
            <Plus />
            Add New Ground
          </Button>
        </div>
      </section>

      <section className="overflow-hidden rounded-2xl border border-slate-700 bg-[#001428] shadow-sm shadow-black/10">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-700 px-5 py-5 sm:px-6">
          <div>
            <h2 className="text-lg font-bold text-white">Ground list</h2>
            <p className="mt-1 text-sm text-slate-400">
              Your registered sports facilities
            </p>
          </div>
          <span className="rounded-full bg-[#83c400]/10 px-3 py-1 text-xs font-semibold text-[#a8e64a]">
            1 ground
          </span>
        </div>

        <Table>
          <TableHeader className="bg-[#041b30]">
            <TableRow className="border-slate-700 hover:bg-transparent">
              <TableHead className="h-12 px-5 text-xs font-semibold tracking-wider text-slate-400 uppercase sm:px-6">
                Ground
              </TableHead>
              <TableHead className="min-w-64 h-12 px-5 text-xs font-semibold tracking-wider text-slate-400 uppercase">
                Address
              </TableHead>
              <TableHead className="h-12 px-5 text-xs font-semibold tracking-wider text-slate-400 uppercase">
                Sport
              </TableHead>
              <TableHead className="h-12 px-5 text-xs font-semibold tracking-wider text-slate-400 uppercase">
                Status
              </TableHead>
              <TableHead className="hidden h-12 px-5 text-xs font-semibold tracking-wider text-slate-400 uppercase md:table-cell">
                Created
              </TableHead>
              <TableHead className="h-12 px-5 text-right text-xs font-semibold tracking-wider text-slate-400 uppercase sm:px-6">
                Details
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="border-slate-700 transition-colors hover:bg-[#0b2a45]">
              <TableCell className="max-w-56 px-5 py-4 sm:px-6">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#83c400]/10 text-[#a8e64a]">
                    <Building2 className="size-5" />
                  </span>
                  <span className="truncate font-semibold text-white">
                    {ground.name}
                  </span>
                </div>
              </TableCell>
              <TableCell className="max-w-80 px-5 py-4 text-sm whitespace-normal text-slate-300">
                <span className="flex items-start gap-2">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-[#a8e64a]" />
                  {ground.address}
                </span>
              </TableCell>
              <TableCell className="px-5 py-4">
                <span className="rounded-full border border-slate-600 bg-white/[0.04] px-2.5 py-1 text-xs font-medium text-slate-300">
                  {ground.sportTypes}
                </span>
              </TableCell>
              <TableCell className="px-5 py-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#83c400]/10 px-2.5 py-1 text-xs font-semibold text-[#a8e64a]">
                  <span className="size-1.5 rounded-full bg-[#83c400]" />
                  {ground.status}
                </span>
              </TableCell>
              <TableCell className="hidden px-5 py-4 text-sm text-slate-300 md:table-cell">
                {createdDate}
              </TableCell>
              <TableCell className="px-5 py-4 text-right sm:px-6">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      type="button"
                      variant="outline"
                      className="h-9 rounded-lg border-slate-600 bg-transparent text-[#a8e64a] hover:border-[#83c400]/50 hover:bg-[#83c400]/10 hover:text-[#a8e64a]"
                    >
                      <Eye />
                      Details
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-h-[85vh] overflow-y-auto border-slate-700 bg-[#001428] text-white sm:max-w-2xl">
                    <DialogHeader>
                      <DialogTitle className="text-xl font-bold text-white">
                        {ground.name}
                      </DialogTitle>
                      <DialogDescription className="text-slate-400">
                        Ground information and registration details.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="rounded-xl border border-slate-700 bg-white/[0.025] p-4">
                      <p className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
                        Address
                      </p>
                      <p className="mt-2 flex items-start gap-2 text-sm leading-6 text-slate-200">
                        <MapPin className="mt-1 size-4 shrink-0 text-[#a8e64a]" />
                        {ground.address}
                      </p>
                    </div>
                    <dl className="grid gap-3 sm:grid-cols-2">
                      {groundDetails.map(({ label, value }) => (
                        <div
                          key={label}
                          className="min-w-0 rounded-xl border border-slate-700 bg-white/[0.025] p-3"
                        >
                          <dt className="text-xs font-medium text-slate-500">
                            {label}
                          </dt>
                          <dd className="mt-1 break-all text-sm text-slate-200">
                            {value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                    <a
                      href={`https://www.google.com/maps?q=${ground.latitude},${ground.longitude}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#a8e64a] hover:underline"
                    >
                      <MapPin className="size-4" />
                      View location on map
                    </a>
                  </DialogContent>
                </Dialog>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <p className="border-t border-slate-700 px-5 py-3 text-xs text-slate-500 sm:px-6">
          Showing sample ground data.
        </p>
      </section>
    </div>
  );
}
