"use client";
import { usePathname } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "./components/Header";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const path = usePathname();
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <div>
          <b>codevolution</b>
          <br />
          <Link
            href="/login"
            className={path === "/login" ? "text-red-600" : ""}
          >
           - login -
          </Link>
          
          <Link
            href="/register"
            className={path === "/register" ? "text-red-600" : ""}
          >
             - Register -
          </Link>
          <br />
        </div>
        {children}
      </body>
    </html>
  );
}
