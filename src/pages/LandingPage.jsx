import React, { useState } from "react";
import { Footer, Model, Navbar, Subscription } from "../components";
import data from "../data/Features";
import imagedata from "../data/Images";
export default function LandingPage() {
  const [ismodel, setismodel] = useState(false);

  return (
    <body className="overflow-x-clip">
      <Navbar />

      {/*   Banner  */}
      <div
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        className="items-start px-5 mt-4 justify-evenly md:items-center md:flex"
      >
        <div className="space-y-5 md:space-y-10">
          <h1 className="text-3xl font-bold leading-10 lg:max-w-xl md:leading-10 lg:text-5xl text-slate-800">
            Get Peace of Mind with Workforce Analytics for Fully Remote Teams
          </h1>
          <p className="text-sm leading-6 text-gray-700 lg:max-w-md md:text-xl md:leading-8">
            Uncover insights in people, tech & operations to solve workforce &
            performance gaps
          </p>
          <button className="text-sm text-white  px-14 py-2.5 font-semibold duration-300 ease-in bg-blue-600 rounded-md hover:brightness-90">
            Get Started
          </button>
        </div>
        <div className="lg:my-5">
          <img
            className="hidden max-w-md md:block"
            src="https://www.timedoctor.com/_next/image?url=https%3A%2F%2Fa-us.storyblok.com%2Ff%2F1016472%2F510x531%2F5dbf35edfb%2Fwork-section-img.png%2Fm%2Ffilters%3Aquality(80)&w=640&q=100"
            alt=""
          />
          <div className="flex flex-col items-center -mt-20 md:hidden">
            <img
              className="max-w-sm translate-y-32 -z-50"
              src="https://www.timedoctor.com/_next/image?url=https%3A%2F%2Fa-us.storyblok.com%2Ff%2F1016472%2F382x155%2Fa271e3ce22%2Fhours-distribution.png%2Fm%2Ffilters%3Aquality(80)&w=384&q=100"
              alt=""
            />
            <img
              className="max-w-sm"
              src="https://www.timedoctor.com/_next/image?url=https%3A%2F%2Fa-us.storyblok.com%2Ff%2F1016472%2F461x313%2Fc4b97daf1f%2Fline-graph.svg%2Fm%2Ffilters%3Aquality(80)&w=640&q=100"
              alt=""
            />
            <img
              className="max-w-sm mt-10 duration-300 ease-in-out hover:brightness-75"
              src="https://www.timedoctor.com/_next/image?url=https%3A%2F%2Fa-us.storyblok.com%2Ff%2F1016472%2F510x531%2F5dbf35edfb%2Fwork-section-img.png%2Fm%2Ffilters%3Aquality(80)&w=640&q=100"
              alt=""
            />
          </div>
        </div>
      </div>
      {/*   Banner  */}
      <div
        className="mt-20 space-y-6"
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <h1 className="max-w-sm mx-auto text-2xl font-semibold leading-8 text-center md md:text-3xl lg:text-4xl md:max-w-lg">
          The all-in-one point of sale for booking, payments, and more.
        </h1>
        <p className="max-w-sm mx-auto text-center md:text-xl">
          We handle the admin while you do more of what you love.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-6 my-20 md:px-10 md:grid md:grid-cols-3 place-items-center ">
        {data.map((i, index) => {
          return (
            <React.Fragment key={index}>
              <div
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-easing="ease-in-out"
                className="max-w-xs md:max-w-md space-y-4 p-5 border-[1px] cursor-pointer text-center rounded-lg hover:shadow-lg hover:shadow-slate-200 duration-300 ease-in-out"
              >
                <h1 className="text-lg font-semibold md:text-xl">{i.Tittle}</h1>
                <p className="text-sm leading-6">{i.Para}</p>
              </div>
            </React.Fragment>
          );
        })}
      </div>

      <div
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-easing="ease-in-out"
        className="my-24 space-y-6"
      >
        <h1 className="text-2xl font-semibold text-center md:text-3xl lg:text-4xl">
          Made to match your craft
        </h1>
        <p className="max-w-md mx-auto text-sm leading-6 text-center md:text-xl">
          Select a{" "}
          <span className="font-bold text-blue-500">business type</span> to find
          out how Square Appointments could work for you.
        </p>
      </div>

      <div className="md:px-7 ml-8 w-[100vw] mx-auto my-24 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5">
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

      <Subscription />

      <div
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-easing="ease-in-out"
        className="flex flex-col items-center justify-center my-24 space-y-5"
      >
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
