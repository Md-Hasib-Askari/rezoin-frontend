import React from "react";
import Image from "next/image";

export const RightSidebar = () => {
  return (
    <section className="w-2/12 bg-gray-950 flex flex-col p-3">
      <div className="flex-1">
        <p className="text-white">Suggested Friends</p>
      </div>
      <div className="flex-1">
        <p className="text-white">Friends</p>
      </div>
    </section>
  );
};
