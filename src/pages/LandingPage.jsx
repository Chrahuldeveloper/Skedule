import React, { useState } from "react";
import { Footer, Model, Navbar } from "../components";
import data from "../data/Features";
import imagedata from "../data/Images";
import img1 from "../images/img1.png";
export default function LandingPage() {
  const [ismodel, setismodel] = useState(false);

  return (
    <body className="overflow-x-clip bg-[#08090d]">
      <Navbar />
      {/*   Banner  */}
      <div
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className="items-start px-5 justify-evenly md:flex"
      >
        <div className="space-y-5 md:space-y-10">
          <h1 className="mt-3 text-3xl font-bold leading-10 md:mt-32 lg:max-w-xl md:leading-10 lg:text-5xl text-slate-300">
            Get Peace of Mind with Workforce Analytics for Fully Remote Teams
          </h1>
          <p className="text-sm leading-6 text-gray-300 lg:max-w-md md:text-xl md:leading-8">
            Uncover insights in people, tech & operations to solve workforce &
            performance gaps
          </p>
          <button className="text-sm text-white px-14 py-2.5 font-semibold duration-300 ease-in bg-violet-600 rounded-full hover:brightness-90 cursor-pointer z-50">
            Get Started
          </button>
        </div>
        <div className="mt-20">
          <img
            className="hidden max-w-xl cursor-pointer md:block rotate-6 "
            src={img1}
            alt=""
          />
          <img
            className="hidden max-w-xl -translate-y-64 cursor-pointer md:block rotate-10"
            src={img1}
            alt=""
          />
          <div className="flex flex-col items-center duration-300 ease-in-out cursor-pointer md:hidden">
            <img className="max-w-sm hover:brightness-75" src={img1} alt="" />
            <img
              className="max-w-sm duration-300 ease-in-out cursor-pointer hover:brightness-75"
              src={img1}
              alt=""
            />
          </div>
        </div>
      </div>
      {/*   Banner  */}
      <div
        className="space-y-6 mt-28 text-slate-300"
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="2000"
        data-aos-easing="ease-in-out"
      >
        <h1 className="max-w-sm mx-auto text-2xl font-semibold leading-8 text-center md:text-3xl lg:text-4xl md:max-w-lg">
          The all-in-one point of sale for booking, payments, and more.
        </h1>
        <p className="max-w-sm mx-auto text-center md:text-xl">
          We handle the admin while you do more of what you love.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-6 my-20 md:px-10 md:grid md:grid-cols-3 place-items-center">
        {data.map((i, index) => {
          return (
            <React.Fragment key={index}>
              <div
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-easing="ease-in-out"
                className="max-w-xs md:max-w-md space-y-4 p-5 border-[1px] cursor-pointer text-center rounded-lg text-slate-300 border-zinc-800"
              >
                <h1 className="text-lg font-semibold md:text-xl">{i.Tittle}</h1>
                <p className="text-xs leading-7">{i.Para}</p>
              </div>
            </React.Fragment>
          );
        })}
      </div>

      <div
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-easing="ease-in-out"
        className="my-12 space-y-5 text-slate-300"
      >
        <h1 className="text-2xl font-semibold text-center md:text-3xl lg:text-4xl">
          Made to match your craft
        </h1>
        <p className="max-w-md mx-auto text-sm leading-6 text-center md:text-xl">
          Select a{" "}
          <span className="font-bold text-violet-500">business type</span> to
          find out how Square Appointments could work for you.
        </p>
      </div>

      <div className="md:px-7 ml-8 w-[100vw] mx-auto my-24 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8">
          {imagedata.map((i, index) => {
            return (
              <React.Fragment key={index}>
                <img
                  data-aos="fade-up"
                  data-aos-delay="50"
                  data-aos-easing="ease-in-out"
                  onClick={() => {
                    setismodel(true);
                  }}
                  src={i.img}
                  alt={i.img + index}
                  className="w-[90vw] duration-300 ease-in-out cursor-pointer brightness-75 hover:brightness-90 max-w-md rounded-xl"
                />
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {ismodel && <Model setismodel={setismodel} />}

      {/* <Subscription /> */}

      <div
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-easing="ease-in-out"
        className="flex flex-col items-center justify-center my-16 space-y-5 text-slate-300"
      >
        <h1 className="text-2xl font-semibold text-center md:text-3xl lg:text-4xl">
          Stay up to date
        </h1>
        <p className="text-center">
          Get tips on industry trends, tools and updated features.
        </p>
        <div className="space-x-4">
          <input
            type="text"
            placeholder="Email Address"
            className="border-[1px] outline-none w-[55vw] md:w-[40vw] lg:w-[30vw] py-3 px-5 bg-zinc-800 border-zinc-900 rounded-full"
          />
          <button className="px-5 py-3 text-white border-[1px] border-zinc-800  rounded-full bg-violet-600">
            Submit
          </button>
        </div>
      </div>
      <Footer />
    </body>
  );
}
