import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

export default function Calender() {
  return (
    <div className="bg-white p-6 border-[1px] border-gray+-200 max-w-sm shadow-md shadow-slate-50 mx-auto rounded-md mt-7">
      <div className="flex items-center justify-between px-2">
        <h1 className="text-xl font-bold text-slate-800">April</h1>
        <div className="flex items-center gap-1">
          <FaAngleLeft
            className="px-3 rounded-full py-1.5 cursor-pointer hover:bg-blue-500 hover:fill-white"
            size={33}
          />
          <FaAngleRight
            className="px-3 rounded-full py-1.5 cursor-pointer hover:bg-blue-500 hover:fill-white"
            size={33}
          />
        </div>
      </div>
      <div className="border-b-[1px] mt-5 border-blue-200"></div>
      <div>
        <ul className="flex items-center gap-5 mx-3 mt-5">
          <li className="font-semibold">Sun</li>
          <li className="font-semibold">Mon</li>
          <li className="font-semibold">Tue</li>
          <li className="font-semibold">Wed</li>
          <li className="font-semibold">Thru</li>
          <li className="font-semibold">Fri</li>
          <li className="font-semibold">Sat</li>
        </ul>
      </div>
      <div className="grid justify-center grid-cols-6 my-4 place-items-center ">
        <p className="px-5 py-3 rounded-full bg-slate-100">1</p>
        <p className="font-semibold cursor-pointer">1</p>
        <p className="font-semibold cursor-pointer">1</p>
        <p className="font-semibold cursor-pointer">1</p>
        <p className="font-semibold cursor-pointer">1</p>
        <p className="font-semibold cursor-pointer">1</p>
        <p className="font-semibold cursor-pointer">1</p>
        <p className="font-semibold cursor-pointer">1</p>
        <p className="font-semibold cursor-pointer">1</p>
        <p className="px-5 py-3 rounded-full bg-slate-100">1</p>
        <p className="font-semibold cursor-pointer">1</p>
        <p className="font-semibold cursor-pointer">1</p>
        <p className="font-semibold cursor-pointer">1</p>
        <p className="px-5 py-3 rounded-full bg-slate-100">1</p>
        <p className="px-5 py-3 font-semibold rounded-full cursor-pointer">1</p>
        <p className="px-5 py-3 font-semibold rounded-full cursor-pointer">1</p>
        <p className="px-5 py-3 font-semibold rounded-full cursor-pointe">1</p>
        <p className="px-5 py-3 rounded-full bg-slate-100">1</p>
        <p className="px-5 py-3 font-semibold rounded-full cursor-pointer">1</p>
        <p className="font-semibold cursor-pointer">1</p>
        <p className="px-5 py-3 font-semibold text-white bg-blue-600 rounded-full cursor-pointer">
          1
        </p>
        <p className="font-semibold cursor-pointer">1</p>
        <p className="px-5 py-3 rounded-full bg-slate-100">1</p>
        <p className="font-semibold cursor-pointer">1</p>
        <p className="font-semibold cursor-pointer">1</p>
        <p className="font-semibold cursor-pointer">1</p>
        <p className="font-semibold cursor-pointer">1</p>
        <p className="font-semibold cursor-pointer">1</p>
        <p className="font-semibold cursor-pointer">1</p>
        <p className="font-semibold cursor-pointer">1</p>
      </div>
    </div>
  );
}
