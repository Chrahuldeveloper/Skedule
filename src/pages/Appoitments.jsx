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
      <div className="py-8">
        <div className="p-6  border-[1px] border-zinc-800 bg-zinc-900  mx-auto  rounded-md max-w-md ">
          {data.map((i, idx) => {
            return (
              <React.Fragment key={idx}>
                <div className="flex items-center justify-center gap-12 my-5 ">
                  <div className="flex flex-col items-center justify-center gap-2.5 text-slate-300">
                    <h1 className="text-sm">{i.date}</h1>
                    <p>{i.day}</p>
                  </div>
                  <div className="rounded-full bg-violet-300">
                    <h1 className=" px-10 py-2.5 text-violet-800 text-sm font-semibold  cursor-pointer">
                      {i.Time}
                    </h1>
                  </div>
                  <div className="bg-red-400 rounded-full">
                    <h1 className=" px-10 py-2.5 text-white font-semibold text-sm cursor-pointer">
                      Delete
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
