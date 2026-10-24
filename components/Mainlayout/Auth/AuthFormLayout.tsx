import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import stadium from "../../../public/images/turf1.jpg";
import logo from "../../../public/images/football.png";

type AuthFormLayoutProps = {
  title: string;
  description: string;
  children: ReactNode;
  footer?: ReactNode;
};

export default function AuthFormLayout({
  title,
  description,
  children,
  footer,
}: AuthFormLayoutProps) {
  return (
    <main className="flex min-h-screen w-full flex-col bg-slate-50 text-slate-800 lg:min-h-dvh lg:flex-row">
      <div className="relative hidden overflow-hidden lg:flex lg:min-h-dvh lg:w-1/2">
        <Image
          src={stadium}
          alt="Sports turf"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <section className="flex min-h-screen w-full items-center justify-center px-4 py-8 sm:px-6 lg:min-h-dvh lg:w-1/2 lg:px-8">
        <div className="w-full max-w-2xl space-y-6 bg-white px-0 py-2 sm:px-4 sm:py-6 lg:px-6">
          <div className="flex justify-center lg:justify-start">
            <Link href="/" className="flex items-center space-x-2">
              <Image src={logo} width={50} height={50} alt="Turfy Sports" />
              <span className="flex flex-col">
                <span className="text-3xl font-black uppercase italic tracking-tight text-black">
                  Turfy
                </span>
                <span className="-mt-1 self-end pr-1 text-[13px] font-semibold uppercase tracking-wider text-[#83c400]">
                  Sports
                </span>
              </span>
            </Link>
          </div>

          <div className="space-y-1 text-center lg:text-left">
            <h1 className="text-2xl font-bold tracking-tight text-[#192335] sm:text-4xl">
              {title}
            </h1>
            <p className="text-xs text-[#6b7385] sm:text-sm">{description}</p>
          </div>

          {children}
          {footer && (
            <p className="text-center text-xs text-slate-500">{footer}</p>
          )}
        </div>
      </section>
    </main>
  );
}
