import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CreatePost } from "@/components/feed/CreatePost";

const page = () => {
  return (
    <div className="flex flex-col max-w-2xl mx-auto space-y-5">
      <CreatePost />
      <div className="flex-grow bg-white rounded">Content Section</div>
      <div></div>
    </div>
  );
};

export default page;
