import React from "react";
import { Calender } from "../components";

export default function Schedule() {
  return (
    <>
      <div>
        <h1 className="px-5 py-6 text-2xl font-semibold leading-8 md:text-3xl text-slate-800">
          Schedule your first appotiment and Get Started !
        </h1>
      </div>

      <Calender />
    </>
  );
}
