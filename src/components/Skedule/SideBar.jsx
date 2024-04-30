import React from "react";
import { CiHome } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";

export default function SideBar() {
  return (
    <aside className="bg-white w-[50vw] border-[1px] px-10 py-5 h-screen">
      <nav>
        <div className="flex justify-end">
          <RxCross2 size={25} className="cursor-pointer" />
        </div>
        <div>
          <div className="flex flex-col items-center justify-center gap-3 mt-3">
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=300"
              className="object-cover w-32 h-32 duration-300 ease-in-out rounded-full cursor-pointer hover:brightness-75"
              alt=""
            />
            <div className="space-y-1.5 text-center">
              <h1 className="text-2xl font-semibold text-slate-800">Rahul</h1>
              <p className="text-sm">Coder</p>
            </div>
          </div>
          <div className="border-b-[1px] border-blue-200 my-4"></div>
          <ul className="space-y-5 text-center mt-7">
            <li className="px-8 py-2.5 font-semibold text-white bg-blue-500 rounded-full cursor-pointer gap-2  flex items-center justify-center fill-white">
              <CiHome size={23} />
              <h1 className="text-sm">Dashboard</h1>
            </li>
            <li className="px-8 py-2.5 cursor-pointer text-sm text-slate-500 font-semibold flex items-center justify-center gap-2">
              <CiHome size={23} />
              <h1 className="text-sm">Dashboard</h1>
            </li>
            <li className="px-8 py-2.5 cursor-pointer text-sm text-slate-500 font-semibold flex items-center justify-center gap-2">
              <CiHome size={23} />
              <h1 className="text-sm">Dashboard</h1>
            </li>
            <li className="px-8 py-2.5 cursor-pointer text-sm text-slate-500 font-semibold flex items-center justify-center gap-2">
              <CiHome size={23} />
              <h1 className="text-sm">Dashboard</h1>
            </li>
            <li className="px-8 py-2.5 cursor-pointer text-sm text-slate-500 font-semibold flex items-center justify-center gap-2">
              <CiHome size={23} />
              <h1 className="text-sm">Dashboard</h1>
            </li>
            <li className="px-8 py-2.5 cursor-pointer text-sm text-slate-500 font-semibold flex items-center justify-center gap-2">
              <CiHome size={23} />
              <h1 className="text-sm">Dashboard</h1>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
}
