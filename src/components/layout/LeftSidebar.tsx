"use client";

import React from "react";
import { leftSidebarLinks } from "@/utils/constants";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export const LeftSidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <section className="w-2/12 bg-gray-950 flex flex-col gap-6 px-6 pt-6">
      {leftSidebarLinks.map((link, index) => {
        const isActive =
          (pathname.includes(link.route) && link.route.length > 1) ||
          pathname === link.route;
        return (
          <Link
            key={index}
            href={link.route}
            className={`flex gap-2 ${isActive ? "bg-violet-600 p-3 rounded-lg" : ""}`}
          >
            <Image src={link.imgUrl} alt={link.label} height={24} width={24} />

            <p className="text-white font-medium">{link.label}</p>
          </Link>
        );
      })}
    </section>
  );
};
