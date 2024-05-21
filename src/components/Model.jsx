import React from "react";
import { RxCross2 } from "react-icons/rx";
import { TiTickOutline } from "react-icons/ti";

export default function Model({ setismodel, imagedata }) {

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center h-full bg-black bg-opacity-60 backdrop-blur-md">
      <div className="p-5 rounded-md bg-zinc-900">
        <div className="flex justify-end">
          <RxCross2
            size={25}
            cursor={"pointer"}
            onClick={() => {
              setismodel(false);
            }}
            color="white"
          />
        </div>
        <div className="mt-2 space-y-3">
          <h1 className="text-lg font-semibold text-slate-300">
            {imagedata.Tittle}
          </h1>
        </div>
        {imagedata.Points.map((i, index) => {
          return (
            <React.Fragment key={index}>
              <ul className=" w-[80vw] sm:w-[50vw] md:w-[50vw] lg:w-[30vw] xl:w-[30vw]  text-slate-300">
                <li className="flex items-center gap-4 pl-4 my-6">
                  <TiTickOutline size={45} color="#7c3aed" />
                  <h1 className="text-xs">{i}</h1>
                </li>
              </ul>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
