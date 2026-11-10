"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  HandCoins,
  Home,
  InfoIcon,
  LandPlot,
  LayoutDashboard,
  User,
  Users,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import football from "../../public/images/football.png";
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";

const data = {
  owner: {
    navMain: [
      {
        title: "Dashboard",
        url: "/owner/dashboard",
        icon: LayoutDashboard,
      },
      {
        title: "My Grounds",
        url: "/owner/dashboard/mygrounds",
        icon: LandPlot,
      },
      {
        title: "Your Profile",
        url: "/profile",
        icon: User,
      },
      {
        title: "Go Back To Home",
        url: "/",
        icon: Home,
      },
    ],
  },
  admin: {
    navMain: [
      {
        title: "Dashboard",
        url: "/admin/dashboard",
        icon: LayoutDashboard,
      },
      {
        title: "Approval Requests",
        url: "/admin/dashboard/approval-requests",
        icon: HandCoins,
      },
      {
        title: "Your Profile",
        url: "/profile",
        icon: User,
      },
      {
        title: "Go Back To Home",
        url: "/",
        icon: Home,
      },
    ],
  },
};

// add roles based on your requirements
interface AppSidebarProps {
  role: string;
}

export default function AppSidebar({ role, ...props }: AppSidebarProps) {
  const sidebarData = data[role?.toLowerCase() as keyof typeof data];
  const { isMobile, setOpenMobile } = useSidebar();

  return (
    <Sidebar
      collapsible="icon"
      className="w-64 border-r border-slate-800"
      {...props}
    >
      <SidebarHeader className="flex-row items-center justify-between border-b border-slate-800 px-4 py-4">
        <Link
          href="/"
          className="flex min-w-0 flex-1 items-center gap-3 rounded-xl px-2 py-1 transition-colors hover:bg-white/5"
        >
          <Image
            src={football}
            alt="Turfy"
            width={40}
            height={40}
            className="size-10 object-contain"
          />
          <span className="flex flex-col leading-none">
            <span className="text-xl font-black italic tracking-tight text-white uppercase">
              Turfy
            </span>
            <span className="mt-1 text-[10px] font-semibold tracking-[0.2em] text-[#83c400] uppercase">
              Sports
            </span>
          </span>
        </Link>
        {isMobile && (
          <button
            type="button"
            aria-label="Close dashboard menu"
            onClick={() => setOpenMobile(false)}
            className="flex size-9 shrink-0 items-center justify-center rounded-lg text-slate-300 transition-colors hover:bg-[#0b2a45] hover:text-[#83c400]"
          >
            <X className="size-5" />
          </button>
        )}
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={sidebarData?.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
