import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { EarthIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AiFillLike } from "react-icons/ai";
import { FaComment, FaShare } from "react-icons/fa6";
import React from "react";

export const SinglePost = () => {
  return (
    <Card className="border-0">
      <CardHeader>
        <div className="flex gap-3">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <p>Md Hasib Askari</p>
            <div className="flex">
              <span>4h · </span>
              <EarthIcon />
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p>
          বয়কট করতে করতে একসময়ে আর কিছুই অবশিষ্ট থাকবে না৷ তখন কি করবেন? এই
          প্রশ্ন অনেকের মনেই ঘুরপাক খায়৷ আসলে সাধাসিধে জীবনযাপনে অভ্যস্ত হলে
          আপনাকে বয়কটও করতে হবে না। আপনার স্বাভাবিক লাইফস্টাইলেই আপনি কর্পোরেট
          প্রতিষ্ঠানগুলোর অধিকাংশ পণ্য ছাড়াই জীবনযাবন করতে পারবেন৷ ব্রান্ডের
          পণ্য ব্যবহার কমান৷ দেশীয় লোকাল পণ্য ব্যবহার করুন৷{" "}
        </p>
      </CardContent>
      <CardFooter>
        <hr />
        <div className="flex justify-around w-full">
          <Button>
            <AiFillLike className="mr-2" />
            Like
          </Button>
          <Button>
            <FaComment className="mr-2" />
            Comment
          </Button>
          <Button>
            <FaShare className="mr-2" />
            Share
          </Button>
        </div>
        <hr />
      </CardFooter>
    </Card>
  );
};
