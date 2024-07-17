import React from "react";
import { RxCross2 } from "react-icons/rx";
import tick from "../../images/tick.png";
export default function Sucess({ settoggle }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center h-full bg-opacity-75 backdrop-blur-md">
      <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ">
        <div className="bg-[#0b0d12] p-5 rounded-lg w-[85vw] md:w-[50vw] lg:w-[30vw]">
          <div className="flex justify-end">
            <RxCross2
              color="white"
              size={23}
              className="cursor-pointer"
              onClick={() => {
                settoggle(false);
              }}
            />
          </div>
          <div className="space-y-3 text-center">
            <img src={tick} alt="" className="mx-auto w-36 h-36" />
            <h1 className="text-lg font-semibold text-green-500">Success</h1>
            <p className=" text-slate-300">Your Appoitment is confirmed!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
