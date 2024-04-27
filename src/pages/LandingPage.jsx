import React from "react";
import { Footer, Navbar, Subscription } from "../components";
import data from "../data/Features";
import imagedata from "../data/Images";
export default function LandingPage() {
  return (
    <body className="overflow-x-clip">
      <Navbar />

      {/* Slide show Banner  */}
      <div></div>
      {/* Slide show Banner  */}

      <div className="mt-20 space-y-6">
        <h1 className="max-w-sm mx-auto text-2xl font-semibold leading-8 text-center md md:text-3xl lg:text-4xl md:max-w-lg">
          The all-in-one point of sale for booking, payments, and more.
        </h1>
        <p className="max-w-sm mx-auto text-center md:text-xl">
          We handle the admin while you do more of what you love.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center gap-6 my-10 md:px-10 md:grid md:grid-cols-3 place-items-center ">
        {data.map((i, index) => {
          return (
            <React.Fragment key={index}>
              <div className="max-w-xs md:max-w-md space-y-4 p-5 border-[1px] cursor-pointer text-center rounded-lg hover:shadow-lg hover:shadow-slate-200 duration-300 ease-in-out">
                <h1 className="text-lg font-semibold md:text-xl">{i.Tittle}</h1>
                <p className="text-sm leading-6">{i.Para}</p>
              </div>
            </React.Fragment>
          );
        })}
      </div>

      <div className="my-20 space-y-6">
        <h1 className="text-2xl font-semibold text-center md:text-3xl lg:text-4xl">
          Made to match your craft
        </h1>
        <p className="max-w-md mx-auto text-sm leading-6 text-center md:text-xl">
          Select a{" "}
          <span className="font-bold text-blue-500">business type</span> to find
          out how Square Appointments could work for you.
        </p>
      </div>

      <div className="md:px-5 ml-8 w-[100vw] mx-auto overflow-x-scroll my-20  rounded-lg">
        <div className="flex gap-5">
          {imagedata.map((i, index) => {
            return (
              <React.Fragment key={index}>
                <img
                  src={i.img}
                  alt={i.img + index}
                  className="w-[90vw] duration-300 ease-in-out cursor-pointer brightness-75 hover:brightness-90 max-w-md rounded-xl"
                />
              </React.Fragment>
            );
          })}
        </div>
      </div>
      <Subscription />

      <div className="flex flex-col items-center justify-center my-20 space-y-5">
        <h1 className="text-2xl font-semibold text-center md:text-3xl lg:text-4xl ">
          Stay up to date
        </h1>
        <p className="text-center">
          Get tips on industry trends, tools and updated features.
        </p>
        <div className="space-x-4">
          <input
            type="text"
            placeholder="Email Address"
            className="border-[1px] outline-none w-[55vw] md:w-[40vw] lg:w-[30vw] py-3 px-3"
          />
          <button className="p-3 text-white bg-blue-600 rounded-md">
            Submit
          </button>
        </div>
      </div>

      <Footer />
    </body>
  );
}
