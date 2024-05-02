import React, { useState } from "react";
import { AppotimentsBoard, SideBar } from "../components";
import { CiMenuFries } from "react-icons/ci";
import { Editimage } from "../components/index";
import { IoNotificationsOutline } from "react-icons/io5";

export default function UserProfile() {
  const [isshow, setisshow] = useState(false);
  const [isedit, setisedit] = useState(false);

  return (
    <div>
      <div className="-z-50  px-10 py-5 flex items-center justify-between lg:flex-none  border-b-[1px] border-gray-200 ">
        <h1 className="text-xl font-semibold">Skedule</h1>
        <div className="flex items-center justify-end gap-6">
          <IoNotificationsOutline size={25} cursor={"pointer"} />
          <CiMenuFries
            onClick={() => {
              setisshow(true);
            }}
            size={28}
            className="cursor-pointer lg:hidden"
          />
          <button className="hidden py-2 text-sm font-semibold text-white duration-300 ease-in bg-blue-600 rounded-md cursor-pointer md:block px-9 hover:brightness-90">
            Logout
          </button>
        </div>
      </div>
      <div className="items-start md:flex">
        {isshow ? (
          <SideBar setisshow={setisshow} setisedit={setisedit} />
        ) : null}
        <div className="hidden lg:block">
          <SideBar setisshow={setisshow} setisedit={setisedit} />
        </div>
        <AppotimentsBoard />
      </div>
      {isedit && <Editimage setisedit={setisedit} />}
    </div>
  );
}
