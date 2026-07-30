import type { Metadata } from "next";
import "./globals.css";
import { LoadingProvider } from "@/context/LoadingProvider";
import SmoothScroll from "@/components/utils/SmoothScroll";
import React from "react";

export const metadata: Metadata = {
  title: "Md Shofiqul Islam | Portfolio",
  description: "Passionate Full Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col bg-[#0b080c] text-[#eae5ec]"
        suppressHydrationWarning
      >
        <LoadingProvider>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </LoadingProvider>
      </body>
    </html>
  );
}
