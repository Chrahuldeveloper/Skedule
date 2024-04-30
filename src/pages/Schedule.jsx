import React from "react";
import { Calender, Footer } from "../components";

export default function Schedule() {
  return (
    <>
      <div className="md:text-center">
        <h1 className="px-8 text-2xl font-semibold leading-10 pt-7 md:text-3xl text-slate-800 md:max-w-lg md:mx-auto">
          Schedule your first appotiment and Get Started !
        </h1>
      </div>
      <Calender />
      <Footer />
    </>
  );
}
