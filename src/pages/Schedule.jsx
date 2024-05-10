import React from "react";
import { Calender } from "../components";

export default function Schedule() {
  return (
    <div className="h-screen bg-[#08090d] ">
      <div className="pt-7 md:text-center">
        <h1 className="px-8 text-2xl font-semibold leading-10 pt-7 md:text-3xl text-slate-300 md:max-w-lg md:mx-auto">
          Schedule your first appotiment 
        </h1>
      </div>
      <Calender />
    </div>
  );
}
