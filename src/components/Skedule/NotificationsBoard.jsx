import React from "react";
import { AiOutlineDelete } from "react-icons/ai";

export default function NotificationsBoard({ user }) {
  return (
    <>
      <div className="bg-zinc-900 p-5 my-6 border-[1px] rounded-md  border-zinc-800 lg:ml-96 w-[95vw] sm:w-[60vw] mx-auto lg:mx-0 overflow-y-scroll h-[80vh] z-50 ">
        <div>
          <h1 className="text-2xl font-semibold text-slate-300">
            Your Notifications
          </h1>
        </div>

        <div className="px-5 space-y-5 my-7">
          <div className=" border-[1px] border-zinc-800 p-6 max-w-3xl  cursor-pointer rounded-lg flex items-center justify-between">
            <div className="space-y-2">
              <h1 className="text-lg font-semibold text-slate-300">Welcome</h1>
              <p className="max-w-xs text-sm text-slate-300">
                {" "}
                Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit
                amet, consectetur
              </p>
            </div>
            <AiOutlineDelete color="red" size="26" />
          </div>
        </div>
        {/* {
        user.Notifications.map((item,i)=>{
          return (
            <>
            <div className="px-5 space-y-5 my-7">
          <div className=" border-[1px] p-6 max-w-3xl  cursor-pointer rounded-lg flex items-center justify-between">
            <div className="space-y-2">
              <h1 className="text-lg font-semibold text-slate-600">Welcome</h1>
              <p className="max-w-xs text-sm"> Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur</p>
            </div>
            <AiOutlineDelete color="red" size="26" />
          </div>
        </div>
            </>
          )
        })
       }
         */}
      </div>
    </>
  );
}
