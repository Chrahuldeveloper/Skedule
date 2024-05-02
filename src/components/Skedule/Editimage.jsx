import React from "react";
import { RxCross2 } from "react-icons/rx";

export default function Editimage({setisedit}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center h-full bg-black bg-opacity-75 backdrop-blur-md">
      <div className="bg-white w-[80vw] md:w-[60vw] lg:w-[40vw] xl:w-[30vw] p-5 rounded-md">
        <div className="flex justify-end ">
          <RxCross2 onClick={()=>{
            setisedit(false)
          }} size={25} className="cursor-pointer" />
        </div>
        <div className="flex flex-col space-y-5">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=300"
            className="object-cover w-32 h-32 mx-auto rounded-full cursor-pointer "
            alt=""
          />
          <input
            type="text"
            placeholder="Name"
            className="border-[1px] border-gray-300 px-3 py-2 outline-none"
          />
          <input
            type="text"
            placeholder="Profession"
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
