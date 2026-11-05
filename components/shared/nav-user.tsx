"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { useGetMeQuery } from "@/redux/api/authApi";
import { logout } from "@/redux/features/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useDecodedToken } from "@/src/hooks/useDecodedToken";
import { ChevronsUpDown, LogOut } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

interface DashboardUser {
  name?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  image?: string;
  picture?: string;
  role?: string;
}

interface GetMeResponse {
  data?: unknown;
}

function isDashboardUser(value: unknown): value is DashboardUser {
  if (typeof value !== "object" || value === null) return false;

  return [
    "name",
    "firstName",
    "lastName",
    "email",
    "image",
    "picture",
    "role",
  ].some((key) => typeof Reflect.get(value, key) === "string");
}

export function NavUser() {
  const { isMobile } = useSidebar();
  const token = useAppSelector((state) => state.auth.token);
  const storedUser = useAppSelector(
    (state) => state.auth.user,
  ) as DashboardUser | null;
  const decodedToken = useDecodedToken(token);
  const dispatch = useAppDispatch();
  const { data: response, error, isLoading } = useGetMeQuery(undefined, {
    skip: !token,
  }) as {
    data?: GetMeResponse;
    error?: unknown;
    isLoading: boolean;
  };
  const responseData = response?.data;
  const nestedUser =
    typeof responseData === "object" &&
    responseData !== null &&
    "data" in responseData
      ? responseData.data
      : undefined;
  const user =
    (isDashboardUser(nestedUser)
      ? nestedUser
      : isDashboardUser(responseData)
        ? responseData
        : undefined) ??
    storedUser ??
    undefined;
  const name =
    user?.name?.trim() ||
    [user?.firstName, user?.lastName].filter(Boolean).join(" ").trim() ||
    "User";
  const email = user?.email?.trim() || "Email unavailable";
  const role = user?.role || decodedToken?.role;
  const initials = name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");
  const image = user?.image || user?.picture;

  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = () => {
    dispatch(logout());
    router.push("/login?redirect=" + pathname);
  };

  if (isLoading && !user) {
    return (
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton size="lg" disabled className="text-slate-300">
            <Avatar className="size-9 rounded-xl border border-slate-700">
              <AvatarFallback className="rounded-xl bg-[#0b2a45] text-xs font-bold text-[#83c400]">
                …
              </AvatarFallback>
            </Avatar>
            <div className="grid min-w-0 flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">Loading account</span>
              <span className="truncate text-xs text-slate-400">
                Please wait
              </span>
            </div>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    );
  }

  if (error && !user) {
    return (
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton
            size="lg"
            disabled
            className="text-slate-300"
            title="Unable to load account details"
          >
            <Avatar className="size-9 rounded-xl border border-slate-700">
              <AvatarFallback className="rounded-xl bg-[#0b2a45] text-xs font-bold text-amber-300">
                !
              </AvatarFallback>
            </Avatar>
            <div className="grid min-w-0 flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">Account unavailable</span>
              <span className="truncate text-xs text-slate-400">
                Unable to load details
              </span>
            </div>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    );
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="text-slate-200 hover:bg-[#0b2a45] hover:text-white data-[state=open]:bg-[#0b2a45] data-[state=open]:text-white"
            >
              <Avatar className="size-9 rounded-xl border border-slate-700">
                <AvatarImage
                  src={image}
                  alt={name}
                  className="rounded-xl object-cover"
                />
                <AvatarFallback className="rounded-xl bg-[#0b2a45] text-xs font-bold text-[#83c400]">
                  {initials || "U"}
                </AvatarFallback>
              </Avatar>
              <div className="grid min-w-0 flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold text-white">{name}</span>
                <span className="truncate text-xs text-slate-400">{email}</span>
              </div>
              <ChevronsUpDown className="ml-auto size-4 shrink-0 text-slate-400" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-xl border-slate-700 bg-[#041527] text-white"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-3 px-2 py-2">
                <Avatar className="size-10 rounded-xl border border-slate-700">
                  <AvatarImage
                    src={image}
                    alt={name}
                    className="rounded-xl object-cover"
                  />
                  <AvatarFallback className="rounded-xl bg-[#0b2a45] text-xs font-bold text-[#83c400]">
                    {initials || "U"}
                  </AvatarFallback>
                </Avatar>
                <div className="grid min-w-0 flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold text-white">
                    {name}
                  </span>
                  <span className="truncate text-xs text-slate-400">
                    {email}
                  </span>
                  {role && (
                    <span className="mt-1 text-[10px] font-bold tracking-wider text-[#83c400] uppercase">
                      {role}
                    </span>
                  )}
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuItem
              onClick={handleLogout}
              className="mt-1 text-slate-200 focus:bg-[#0b2a45] focus:text-[#83c400]"
            >
              <LogOut className="text-[#83c400]" />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
