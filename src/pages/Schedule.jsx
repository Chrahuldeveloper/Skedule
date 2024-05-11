import React from "react";
import { Calender } from "../components";

export default function Schedule() {
  return (
    <div className="h-screen bg-[#08090d] ">
      <div className="text-center pt-7">
        <h1 className="pt-8 text-3xl font-semibold leading-10 md:text-3xl text-slate-300 md:max-w-lg md:mx-auto">
          Schedule your first appotiment
        </h1>
      </div>
      <Calender />
    </div>
  );
}
