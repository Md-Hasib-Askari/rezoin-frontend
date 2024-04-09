import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { LeftSidebar } from "@/components/layout/LeftSidebar";
import { RightSidebar } from "@/components/layout/RightSidebar";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "News Feed | Rezoin",
  description: "Created by Md Hasib Askari",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <Navbar />
          <div className="flex h-[93vh]">
            <LeftSidebar />
            <main className="flex-grow bg-black pt-8 px-8">{children}</main>
            <RightSidebar />
          </div>
        </div>
      </body>
    </html>
  );
}
