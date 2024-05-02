import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

export default function Editimage({ setisedit, user }) {
  const [editdata, seteditdata] = useState({
    Name: user.Name,
    work: "",
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center h-full bg-black bg-opacity-75 backdrop-blur-md">
      <div className="bg-white w-[80vw] md:w-[60vw] lg:w-[40vw] xl:w-[30vw] p-5 rounded-md">
        <div className="flex justify-end ">
          <RxCross2
            onClick={() => {
              setisedit(false);
            }}
            size={25}
            className="cursor-pointer"
          />
        </div>
        <div className="flex flex-col space-y-5">
          <img
            src={user.photo}
            className="object-cover w-32 h-32 mx-auto rounded-full cursor-pointer "
            alt=""
          />
          <input
            type="text"
            placeholder="Name"
            value={editdata.Name}
            onChange={(e) => {
              seteditdata({ ...editdata, Name: e.target.value });
            }}
            className="border-[1px] border-gray-300 px-3 py-2 outline-none"
          />
          <input
            type="text"
            placeholder="Profession"
            value={editdata.work}
            onChange={(e) => {
              seteditdata({ ...editdata, work: e.target.value });
            }}
            className="border-[1px] border-gray-300 px-3 py-2 outline-none"
          />
          <button className="py-3 text-sm font-semibold text-white duration-300 ease-in bg-blue-600 rounded-md cursor-pointer px-9 hover:brightness-90">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
