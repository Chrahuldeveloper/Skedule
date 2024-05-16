import React from "react";
import { RxCross1 } from "react-icons/rx";

export default function Sucess({ msg, settoggle }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center h-full bg-opacity-75 backdrop-blur-md">
      <div
        className="absolute right-10 top-5 backdrop-blur-sm"
        data-aos="slide-left"
        data-aos-easing="ease-in-out"
      >
        <div className="flex items-center w-48 gap-5 justify-center py-4 text-center border-[1.2px] border-zinc-900 rounded-full bg-zinc-900">
          <h1 className="text-xs font-semibold text-violet-300">{msg}</h1>
          <RxCross1
            onClick={() => {
              settoggle(false);
            }}
            color="white"
            size="15"
            cursor={"pointer"}
          />
        </div>
      </div>
    </div>
  );
}
