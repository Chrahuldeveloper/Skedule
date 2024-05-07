import React from "react";

export default function Analytics() {
  const data = [
    {
      Tittle: "Money Earned",
      number: "900",
    },
    {
      Tittle: "Total Appoitments",
      number: "30",
    },
  ];

  return (
    <div className="w-[90vw] mx-auto lg:-mt-3 lg:ml-32">
      <div className="flex flex-col justify-center gap-5 mt-5 lg:flex-row lg:ml-5 ">
        {data.map((item, i) => {
          return (
            <React.Fragment key={i}>
              <div className="lg:w-[25vw]  p-5 space-y-3 border-[1px] border-gray-300 text-center rounded-md shadow-sm shadow-gray-200">
                <h1 className="text-lg font-semibold text-slate-700">
                  {item.Tittle}
                </h1>
                <p className="font-bold ">{item.number}</p>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
