import React from "react";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa6";
import { RxAvatar } from "react-icons/rx";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="h-[7vh] bg-gray-900 border-b border-b-gray-700 px-3 flex justify-between">
      <Link href="/feed" className="flex items-center gap-3 text-white">
        <FaFacebook size={40} className="text-blue-700 bg-white rounded-full" />
        <p className="text-xl font-bold">Rezoin</p>
      </Link>
      <div className="flex gap-3 items-center">
        <LogOut className="text-gray-300" />
        <RxAvatar size={40} className="text-white" />
      </div>
    </nav>
  );
};

export default Navbar;
