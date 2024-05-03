import React from "react";
import { LuLoader2 } from "react-icons/lu";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center h-full bg-black bg-opacity-80 backdrop-blur-md">
      <div className="flex items-center justify-center h-screen">
        <LuLoader2 size={35} color=" #004DD7 " className="animate-spin" />
      </div>
    </div>
  );
}