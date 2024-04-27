import React, { useState } from "react";
import data from "../data/Plans";
import { TiTickOutline } from "react-icons/ti";

export default function Subscription() {
  const [plan, setplan] = useState("Free");

  return (
    <>
      <div className="bg-[#f2f2f2] w-screen p-5 my-7">
        <div className="space-y-5 text-center">
          <h1 className="text-2xl font-semibold text-center md:text-3xl lg:text-4xl">
            Pick the plan for you.
          </h1>
          <p className="max-w-md mx-auto">
            No hidden fees. Change or cancel any time. Custom pricing and
            discounts are available for qualifying businesses.
          </p>
        </div>

        <ul className="flex items-center justify-center gap-8 my-5">
          <li
            onClick={() => {
              setplan("Free");
            }}
            className={`text-lg  ${
              plan === "Free"
                ? "border-b-[1px] text-blue-500 duration-300 ease-in-out "
                : null
            }  font-semibold border-blue-500 cursor-pointer`}
          >
            Free
          </li>
          <li
            onClick={() => {
              setplan("Preminum");
            }}
            className={`text-lg  ${
              plan === "Preminum"
                ? "border-b-[1px] text-blue-500 duration-300 ease-in-out"
                : null
            }  font-semibold border-blue-500 cursor-poi nter`}
          >
            Preminum
          </li>
        </ul>

        {/* plans */}
        <div className="max-w-md p-5 mx-auto bg-white rounded-lg">
          <div className="flex flex-col gap-10">
            {data.map((item, i) => {
              return (
                <React.Fragment key={i}>
                  {item.Tittle === plan ? (
                    <>
                      <div className="space-y-4 text-center">
                        <h1 className="text-lg font-semibold ">{plan}</h1>
                        <p className="max-w-md text-sm">{item.Para}</p>
                        <h2 className="text-3xl font-bold text-blue-500">
                          {item.price}
                        </h2>
                        <button className="px-20 py-2 text-white duration-300 ease-in bg-blue-600 rounded-md hover:brightness-90">
                          Start the Plan
                        </button>
                        <p className="text-xs font-semibold">Features:</p>
                        <ul className="pl-7 space-y-1.5">
                          {item.features.map((i, index) => {
                            return (
                              <li
                                className="flex items-center gap-3.5"
                                key={index}
                              >
                                <TiTickOutline size={23} color={"blue"} />
                                <h1 className="text-sm">{i}</h1>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </>
                  ) : null}
                </React.Fragment>
              );
            })}
          </div>
        </div>
        {/* plans */}
      </div>
    </>
  );
}
