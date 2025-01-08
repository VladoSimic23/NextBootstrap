import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import style from "./css/project.module.css";
import BootstrapClient from "./lib/bootstrapClient";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "eStartup",
  description: "Simple website built with Next js and Bootstrap",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${style.customCssWrap}`}
      >
        <Navbar />
        <Suspense fallback={<h1>Loading Hero Section...</h1>}>
          <Hero />
        </Suspense>
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}
