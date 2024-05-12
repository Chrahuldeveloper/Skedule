import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

export default function Schedule({ setispopup }) {
  const [ispaid, setispaid] = useState("NO");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center h-full bg-black bg-opacity-75 backdrop-blur-md">
      <div className="p-5 bg-zinc-900  w-[90vw] md:W-[70vw] lg:w-[60vw] xl:w-[30vw]">
        <div className="flex items-center justify-between">
          <div className="max-w-md mx-auto my-1.5">
            <h1 className="text-xl font-semibold text-slate-300">
              Schedule your Appointment
            </h1>
          </div>
          <RxCross2
            size={25}
            color="#cbd5e1"
            onClick={() => {
              setispopup(false);
            }}
            cursor={"pointer"}
          />
        </div>
        <div className="flex items-center justify-around mt-6">
          <div>
            <input
              type="time"
              className="cursor-pointer outline-none border-[1px] px-3 py-2 bg-transparent border-zinc-800 text-white"
            />
          </div>
          <p className="font-semibold text-slate-300">To</p>
          <div>
            <input
              type="time"
              className="cursor-pointer outline-none border-[1px] px-3 py-2 bg-transparent border-zinc-800 text-white"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center mt-5 space-y-3.5">
          <h1 className="text-sm font-semibold text-slate-300">
            Number of Slots
          </h1>
          <select
            name="schedule"
            id="schedule"
            className="w-full px-2 border-[1px] py-2.5 text-slate-300 outline-none border-zinc-800 rounded-md bg-transparent"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
              (item, index) => {
                return (
                  <React.Fragment key={index}>
                    <option value={item} className="text-slate-300 bg-zinc-900">
                      {item}
                    </option>
                  </React.Fragment>
                );
              }
            )}
          </select>
        </div>
        <div className="flex flex-col justify-center mt-3 space-y-3.5">
          <h1 className="text-sm font-semibold text-slate-300">Paid</h1>
          <select
            onChange={(e) => {
              setispaid(e.target.value);
            }}
            name="schedule"
            id="schedule"
            className="w-full px-2 border-[1px] py-2.5 text-slate-300 outline-none border-zinc-800 rounded-md bg-transparent"
          >
            <option value="NO" className="text-slate-300  bg-zinc-900">
              NO
            </option>
            <option value="YES" className="text-slate-300 bg-zinc-900">
              YES
            </option>
          </select>

          {ispaid === "YES" ? (
            <>
              <div className="space-y-3.5">
                <h1 className="text-sm font-semibold text-slate-300">Price</h1>
                <input
                  type="text"
                  placeholder="Price"
                  className="w-full px-2 border-[1px] py-2.5 outline-none border-zinc-800 rounded-md bg-transparent"
                />
              </div>
            </>
          ) : null}

          <div className="space-y-3.5">
            <h1 className="text-sm font-semibold text-slate-300">Link</h1>
            <input
              type="text"
              placeholder="Link"
              className="w-full px-2 border-[1px] py-2.5 outline-none border-zinc-800 rounded-md bg-transparent"
            />
          </div>

          <div className="my-2">
            <button className="w-full py-2 text-sm font-semibold rounded-full text-slate-300 bg-violet-600">
              Share URL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
