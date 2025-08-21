import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  if (typeof window !== "undefined" && Math.random() > 0.5) {
    throw new Error("Runtime error from root layout");
  }

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

