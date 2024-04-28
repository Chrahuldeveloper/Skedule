import React from "react";
import { RxCross2 } from "react-icons/rx";
import { TiTickOutline } from "react-icons/ti";

export default function Model({ setismodel }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center h-full bg-black bg-opacity-75 backdrop-blur-md">
      <div className="p-5 bg-white rounded-md">
        <div className="flex justify-end">
          <RxCross2
            size={25}
            cursor={"pointer"}
            onClick={() => {
              setismodel(false);
            }}
          />
        </div>
        <div className="space-y-3">
          <h1 className="text-xl font-semibold text-slate-800">Salon</h1>
          <p className="">For people who give haircuts and life advice.</p>
        </div>
        <div className="border-b-[1px] mx-5 my-6 border-blue-300"></div>
        <ul className="space-y-3 w-[70vw] sm:w-[50vw] md:w-[50vw] lg:w-[30vw] xl:w-[20vw] text-center">
          <li className="flex items-center gap-4 pl-4">
            <TiTickOutline size={20} color="blue" />
            <h1>Free online booking website</h1>
          </li>
          <li className="flex items-center gap-4 pl-4">
            <TiTickOutline size={20} color="blue" />
            <h1>Free online booking website</h1>
          </li>
          <li className="flex items-center gap-4 pl-4">
            <TiTickOutline size={20} color="blue" />
            <h1>Free online booking website</h1>
          </li>
          <li className="flex items-center gap-4 pl-4">
            <TiTickOutline size={20} color="blue" />
            <h1>Free online booking website</h1>
          </li>
        </ul>
        <div className="border-b-[1px] mx-5 my-6 border-blue-300"></div>
      </div>
    </div>
  );
}
