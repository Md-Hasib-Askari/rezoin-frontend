import React from "react";
import { CreatePost } from "@/components/feed/CreatePost";
import { SinglePost } from "@/components/feed/SinglePost";

const page = () => {
  return (
    <div className="flex flex-col max-w-2xl mx-auto space-y-5">
      <CreatePost />
      <div className="flex-grow bg-white rounded">
        <SinglePost />
      </div>
    </div>
  );
};

export default page;
