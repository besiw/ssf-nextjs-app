import type { Metadata } from "next";
import { Inter, Cormorant, Cormorant_Garamond } from "next/font/google";
import "../globals.css";
import SideNav from "@/components/SideNav";
import ButtomNav from "@/components/BottomNav";
import { cormorant, inter } from "@/components/font/font";
type FontObject = {
  className: string;
};

export const metadata: Metadata = {
  title: "Enhanced Internationalization(i18n) in Next.js 14",
  description:
    "A guide on how to setup enhanced Internationalization(i18n) in Next.js 14",
};

interface RootLayoutProps {
  children: React.ReactNode;
  locale: never;
}

export default function RootLayout({ children, locale }: RootLayoutProps) {
  return (
    <html lang={locale}>
      <body className={`${inter.className} flex h-screen md:h-auto md:w-auto`}>
        <SideNav />
        <ButtomNav />
        <main
          className={`flex-1 h-screen max-h-screen w-screen max-w-screen overflow-hidden font-medium `}>
          {children}
        </main>
      </body>
    </html>
  );
}
