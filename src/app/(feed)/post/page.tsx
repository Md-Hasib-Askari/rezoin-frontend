import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import { Dropdown } from "@/components/ui/dropdown";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Page = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Create Post</CardTitle>
        <hr />
      </CardHeader>
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
        <Textarea placeholder="What's on your brain?" className="resize-none" />
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
  );
};

export default Page;
