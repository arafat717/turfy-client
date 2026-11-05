"use client";

import AppSidebar from "@/components/shared/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Bell, ChevronRight, Home, Search } from "lucide-react";
import Link from "next/link";

import { useAppSelector } from "@/redux/hooks";
import { useDecodedToken } from "@/src/hooks/useDecodedToken";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = useAppSelector((state) => state.auth.token);
  const decodedToken = useDecodedToken(token);
  const role = decodedToken?.role || "ADMIN";

  return (
    <SidebarProvider
      style={
        {
          "--sidebar": "#001428",
          "--sidebar-foreground": "#e2e8f0",
          "--sidebar-primary": "#83c400",
          "--sidebar-primary-foreground": "#001428",
          "--sidebar-accent": "#0b2a45",
          "--sidebar-accent-foreground": "#83c400",
          "--sidebar-border": "#1e293b",
          "--sidebar-ring": "#83c400",
        } as React.CSSProperties
      }
    >
      <AppSidebar role={role} />
      <SidebarInset className="bg-[#020d1a]">
        <header className="sticky top-0 z-20 flex h-16 shrink-0 items-center justify-between gap-4 border-b border-slate-800 bg-[#001428]/95 px-4 text-white shadow-sm backdrop-blur-sm transition-all sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <SidebarTrigger className="-ml-1 rounded-lg text-slate-300 hover:bg-[#0b2a45] hover:text-[#83c400]" />
            <div className="h-5 w-px bg-slate-700" />
            <nav className="flex items-center gap-1.5 text-xs font-medium text-slate-400">
              <Link
                href="/admin/dashboard"
                className="flex items-center gap-1 transition-colors hover:text-[#83c400]"
              >
                <Home size={14} className="text-[#83c400]" />
                <span>Dashboard</span>
              </Link>
              <ChevronRight size={13} className="text-slate-600" />
              <span className="font-semibold text-white">Overview</span>
            </nav>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden cursor-pointer items-center gap-2 rounded-lg border border-slate-700 bg-white/5 px-3 py-2 text-xs text-slate-400 transition-colors hover:border-slate-600 hover:bg-white/10 sm:flex">
              <Search size={14} className="text-[#83c400]" />
              <span>Search platform...</span>
              <kbd className="ml-2 rounded border border-slate-700 bg-[#001020] px-1.5 py-0.5 font-mono text-[10px] text-slate-400">
                ⌘K
              </kbd>
            </div>

            <button
              title="Notifications"
              className="relative cursor-pointer rounded-lg p-2 text-slate-300 transition-colors hover:bg-[#0b2a45] hover:text-[#83c400]"
            >
              <Bell size={18} />
              <span className="absolute top-1.5 right-1.5 size-2 rounded-full bg-[#83c400] ring-2 ring-[#001428]" />
            </button>
          </div>
        </header>

        <main className="min-h-[calc(100vh-4rem)] flex-1 p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
