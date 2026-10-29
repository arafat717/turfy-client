"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { baseApi } from "@/redux/api/baseApi";
import { useGetMeQuery } from "@/redux/api/authApi";
import { logout } from "@/redux/features/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Skeleton } from "@/components/ui/skeleton";
import { ChevronDown, LogOut, UserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import logo from "../../../public/images/football.png";

type Profile = {
  name?: string;
  email?: string;
  image?: string;
  picture?: string;
};

const ProfileSkeleton = ({ compact = false }: { compact?: boolean }) => (
  <div
    className="flex items-center gap-2 p-1.5"
    aria-label="Loading user information"
    role="status"
  >
    <Skeleton className="h-10 w-10 shrink-0 rounded-full bg-white/10" />
    {!compact && (
      <span className="hidden space-y-2 sm:block">
        <Skeleton className="h-3.5 w-24 bg-white/10" />
        <Skeleton className="h-3 w-32 bg-white/10" />
      </span>
    )}
    <span className="sr-only">Loading user information...</span>
  </div>
);

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navbarRef = useRef<HTMLElement>(null);
  const token = useAppSelector((state) => state.auth.token);
  const storedUser = useAppSelector(
    (state) => state.auth.user,
  ) as Profile | null;
  const dispatch = useAppDispatch();
  const pathname = usePathname();
  const router = useRouter();
  const { data: profileResponse, isLoading: isProfileLoading } = useGetMeQuery(
    "",
    {
      skip: !token,
    },
  ) as { data?: { data?: Profile }; isLoading: boolean };
  const profile = (profileResponse?.data ?? storedUser) as Profile | undefined;
  const name = profile?.name || "User";
  const initials = name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");
  const image = profile?.image || profile?.picture;

  const handleLogout = () => {
    const toastId = toast.loading("Logging out...");
    dispatch(logout());
    dispatch(baseApi.util.resetApiState());
    setIsMobileMenuOpen(false);
    router.push("/");
    toast.success("Logged out successfully.", { id: toastId });
  };

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const closeMenuOnOutsideTap = (event: PointerEvent) => {
      if (!navbarRef.current?.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("pointerdown", closeMenuOnOutsideTap);
    return () =>
      document.removeEventListener("pointerdown", closeMenuOnOutsideTap);
  }, [isMobileMenuOpen]);

  const navLinks = [
    { title: "Home", href: "/" },
    { title: "Blog", href: "/blog" },
    { title: "Contact Us", href: "/contact-us" },
  ];

  const profileMenu = (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className="flex items-center gap-2 rounded-xl p-1.5 text-left transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#83c400]"
          aria-label="Open profile menu"
        >
          <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-[#83c400] font-bold text-[#020d1a]">
            {image ? (
              <img src={image} alt="" className="h-full w-full object-cover" />
            ) : (
              initials || <UserRound className="h-5 w-5" />
            )}
          </span>
          <span className="hidden max-w-40 sm:block">
            <span className="block truncate text-sm font-bold">{name}</span>
            <span className="block truncate text-xs text-slate-300">
              {profile?.email}
            </span>
          </span>
          <ChevronDown className="hidden h-4 w-4 sm:block" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-56 border-slate-700 bg-[#001428] text-white shadow-xl"
      >
        <DropdownMenuLabel className="font-normal text-white">
          <span className="block truncate font-semibold">{name}</span>
          <span className="block truncate text-xs text-slate-300">
            {profile?.email}
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-slate-700" />
        <DropdownMenuItem
          onClick={handleLogout}
          className="cursor-pointer text-white focus:bg-[#0b2a45] focus:text-[#83c400]"
        >
          <LogOut className="mr-2 h-4 w-4 text-[#83c400]" />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  return (
    <header
      ref={navbarRef}
      className="sticky top-0 z-50 w-full border-b border-slate-800 bg-[#001428] font-sans text-white"
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex flex-shrink-0 items-center space-x-2">
            <Image src={logo} width={50} height={50} alt="Turfy Logo" />
            <span className="flex flex-col">
              <span className="text-2xl font-black italic tracking-tight text-white uppercase">
                Turfy
              </span>
              <span className="-mt-1 self-end pr-1 text-[10px] font-semibold tracking-wider text-[#83c400] uppercase">
                Sports
              </span>
            </span>
          </Link>

          <nav className="hidden items-center space-x-6 md:flex lg:space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.title}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`text-sm font-extrabold tracking-wider uppercase transition-colors duration-200 ${
                    isActive
                      ? "text-[#83c400]"
                      : "text-white hover:text-[#83c400]"
                  }`}
                >
                  {link.title}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center sm:flex">
            {token ? (
              isProfileLoading ? (
                <ProfileSkeleton />
              ) : (
                profileMenu
              )
            ) : (
              <Link
                href="/register"
                className="inline-flex items-center space-x-3 rounded-2xl bg-[#83c400] px-5 py-2.5 text-sm font-black tracking-wider text-[#020d1a] uppercase shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#92dc00] hover:shadow-[#83c400]/20"
              >
                <span>Get Started</span>
                <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-[#6ca300] text-white">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>
              </Link>
            )}
          </div>

          <div className="flex items-center gap-2 sm:hidden">
            {token &&
              (isProfileLoading ? <ProfileSkeleton compact /> : profileMenu)}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded-lg p-2 text-slate-300 hover:bg-[#08203a] hover:text-white focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <svg
                  className="h-7 w-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-7 w-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="space-y-3 border-b border-slate-800 bg-[#041527] px-4 pt-3 pb-6 transition-all md:hidden">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.title}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block border-b border-slate-800/60 py-2 text-sm font-bold tracking-wider uppercase ${
                  isActive
                    ? "text-[#83c400]"
                    : "text-slate-200 hover:text-[#83c400]"
                }`}
              >
                {link.title}
              </Link>
            );
          })}
          {!token && (
            <div className="pt-4">
              <Link
                href="/register"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex w-full items-center justify-center rounded-2xl bg-[#83c400] px-5 py-3 text-sm font-black tracking-wider text-[#020d1a] uppercase transition-all hover:bg-[#92dc00]"
              >
                Get Started
              </Link>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
