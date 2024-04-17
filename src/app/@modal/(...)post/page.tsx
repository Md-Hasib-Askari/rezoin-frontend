"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dropdown } from "@/components/ui/dropdown";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { CloseIcon } from "next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  return (
    <div className="absolute flex justify-center items-center top-0 left-0 w-full h-screen bg-black bg-opacity-80">
      <Card className="bg-gray-800 text-white space-y-5">
        <CardHeader className="flex flex-row justify-between items-center">
          <CardTitle className="">Create Post</CardTitle>
          <Button
            className="max-w-20"
            variant="ghost"
            onClick={() => router.back()}
          >
            <CloseIcon />
          </Button>
        </CardHeader>
        <hr />
        <CardContent>
          <div className="flex gap-3 mb-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <p>Md Hasib Askari</p>
              <Dropdown />
            </div>
          </div>
          <Textarea
            placeholder="What's on your brain?"
            className="resize-none"
          />
        </CardContent>
        <CardFooter className="flex flex-col gap-2">
          <div className="w-full p-2 flex flex-row gap-5 border border-b-gray-500 rounded-lg">
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
          <Button className="w-full">Post</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Page;
