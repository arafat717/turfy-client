import NextAuthSessionProvider from "@/lib/NextAuthSessionProvider";
import ReduxProvider from "@/redux/ReduxProvider";
import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import GoogleAuthProvider from "@/components/Mainlayout/Auth/GoogleAuth";

// console.log()
// const roboto = Roboto({
//   subsets: ["latin"],
//   weight: ["100", "300", "400", "500", "700", "900"],
// });

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  title: "Turfy",
  description:
    "Book your favorite turf easily with Turfy. Find available slots, schedule your next game, and manage turf bookings in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={oswald.variable}>
      <body className="font-sans antialiased bg-white text-neutral-900">
        <Toaster position="top-center" richColors />
        <GoogleAuthProvider>
          <NextAuthSessionProvider>
            <ReduxProvider>{children}</ReduxProvider>
          </NextAuthSessionProvider>
        </GoogleAuthProvider>
      </body>
    </html>
  );
}
