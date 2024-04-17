import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import Link from "next/link";

export const CreatePost = () => {
  return (
    <div className="bg-gray-800 h-36 rounded p-5 space-y-4">
      <div className="flex flex-row gap-2">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Link
          href="/post"
          className="w-full rounded-full bg-gray-600 text-left pl-4 flex items-center"
        >
          What's on your brain?
        </Link>
      </div>
      <hr className="border-t-gray-600" />
      <div className="flex flex-row gap-5">
        <Button
          variant="ghost"
          className="flex gap-2 text-gray-400 hover:bg-primary hover:text-white"
        >
          <Image
            src="/assets/profile.svg"
            alt="Photo/Video image"
            width={24}
            height={24}
          />
          <p>Photo/Video</p>
        </Button>
        <Button
          variant="ghost"
          className="flex gap-2 text-gray-400 hover:bg-primary hover:text-white"
        >
          <Image
            src="/assets/community.svg"
            alt="Photo/Video image"
            className="text-gray-600"
            width={24}
            height={24}
          />
          <p>Job</p>
        </Button>
      </div>
    </div>
  );
};
