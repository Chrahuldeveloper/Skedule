import React from "react";

export default function Appoitments() {
  const data = [
    {
      day: "Mon",
      Time: "4:20",
      date: "22/9/2024",
    },
    {
      day: "Mon",
      Time: "4:20",
      date: "22/9/2024",
    },
    {
      day: "Mon",
      Time: "4:20",
      date: "22/9/2024",
    },
    {
      day: "Mon",
      Time: "4:20",
      date: "22/9/2024",
    },
    {
      day: "Mon",
      Time: "4:20",
      date: "22/9/2024",
    },
    {
      day: "Mon",
      Time: "4:20",
      date: "22/9/2024",
    },
  ];

  return (
    <div className="w-screen h-screen bg-[#06070b]">
      <div className="px-3 py-8">
        <div className="p-6  border-[1px] border-zinc-800 bg-zinc-900  mx-auto  rounded-md  max-w-xl">
          {data.map((i, idx) => {
            return (
              <React.Fragment key={idx}>
                <div className="flex items-center justify-center gap-12 my-6 border-b-[1px] border-zinc-700">
                  <div className="flex flex-col items-center justify-center gap-2.5 text-slate-300">
                    <h1 className="text-sm">{i.date}</h1>
                    <p>{i.day}</p>
                  </div>
                  <div className="duration-300 ease-in-out rounded-full bg-violet-300 hover:brightness-75">
                    <h1 className=" px-10 py-2.5 text-violet-800 text-xs font-semibold  cursor-pointer">
                      {i.Time}
                    </h1>
                  </div>
                  {/* <div className="duration-300 ease-in-out bg-red-500 rounded-full hover:brightness-75">
                    <h1 className=" px-10 py-2.5 text-white font-semibold text-xs cursor-pointer">
                      Delete
                    </h1>
                  </div> */}
                  <div>
                    <h1 className="text-xs font-semibold cursor-pointer text-amber-500">
                      Paid
                    </h1>
                  </div>
                  <div className="duration-300 ease-in-out bg-purple-500 rounded-full hover:brightness-75">
                    <h1 className=" px-10 py-2.5 text-white font-semibold text-xs cursor-pointer">
                      Book
                    </h1>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}
