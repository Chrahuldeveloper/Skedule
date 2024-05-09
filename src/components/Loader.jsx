import React from "react";
import { LuLoader2 } from "react-icons/lu";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center h-full bg-black bg-opacity-85">
      <div className="flex items-center justify-center h-screen">
        <LuLoader2 size={35} color="#7c3aed" className="animate-spin" />
      </div>
    </div>
  );
}
