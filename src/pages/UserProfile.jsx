import React from "react";
import { AppotimentsBoard, SideBar } from "../components";

export default function UserProfile() {
  return (
    <div>
      <div className="-z-50  px-10 py-5  border-b-[1px] border-gray-200 ">
        <div className="flex justify-end">
          <button className="py-2 text-sm font-semibold text-white duration-300 ease-in bg-blue-600 rounded-md px-9 hover:brightness-90">
            Logout
          </button>
        </div>
      </div>
      <div className="items-start md:flex">
        <SideBar />
        <AppotimentsBoard />
      </div>
    </div>
  );
}
