import type { Metadata } from "next";
import { Inter, Cormorant, Cormorant_Garamond } from "next/font/google";
import "../globals.css";
import SideNav from "@/components/SideNav";
import ButtomNav from "@/components/BottomNav";
type FontObject = {
  className: string;
};

const inter: FontObject = Inter({ subsets: ["latin"] });
const cormorant: FontObject = Cormorant({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
const cormorant_Garamond: FontObject = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

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
          className={`flex-1 h-screen max-h-screen w-screen max-w-screen overflow-hidden font-medium ${cormorant.className}`}>
          {children}
        </main>
      </body>
    </html>
  );
}
