import "./globals.css";
import NavigationBar from "@/components/layout/navigation-bar";
import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SU IMT UC",
  description: "The Official Website of SU IMT UC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="bg-[#F1EEE6] bg-[url('/images/layout/background.png')] bg-contain bg-center">
          <NavigationBar />
          {children}
        </div>
      </body>
    </html>
  );
}
