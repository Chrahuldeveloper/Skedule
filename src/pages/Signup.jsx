import React from "react";

export default function Signup() {
  return (
    <div className="w-screen h-screen bg-gradient-to-r from-green-300 via-blue-500 -z-50 to-purple-600">
      <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ">
        <div className="z-50 bg-white rounded-md w-[80vw] sm:w-[60vw] md:w-[50vw] lg:w-[40vw] xl:w-[30vw] py-10 flex flex-col justify-center items-center gap-6 px-10 shadow-sm shadow-slate-200">
          <div className="space-y-3 ">
            <h1 className="text-2xl font-semibold text-slate-800">Sign up </h1>
            <p className="text-sm">
              Lorem ipsum, dolor sit amet consectetur amet consectetur
            </p>
          </div>
          <div className="border-b-[1px] w-full  border-slate-300 "></div>
          <button className="bg-blue-500 text-white font-semibold px-24 py-3.5 text-sm rounded-md">
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
}
