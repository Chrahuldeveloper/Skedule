import React, { useState } from "react";
import { Footer, Model, Navbar } from "../components";
import data from "../data/Features";
import imagedata from "../data/Images";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import { useRef } from "react";

export default function LandingPage() {
  const [ismodel, setismodel] = useState(false);
  const [selectedImage, setSelectedImage] = useState();

  const section1 = useRef(null);
  const section2 = useRef(null);

  const scrollToSection = (section) => {
    section.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <body className="overflow-x-clip bg-[#08090d]">
      <Navbar
        scrollTosection1={() => {
          scrollToSection(section1);
        }}
        scrollTosection2={() => {
          scrollToSection(section2);
        }}
      />
      {/* Banner */}
      <div className="items-start px-5 justify-evenly md:flex">
        <div className="space-y-5 md:space-y-10">
          <h1 className="mt-5 text-3xl font-bold leading-10 md:mt-32 lg:max-w-xl md:leading-10 lg:text-5xl text-slate-300">
            Simplify Scheduling with Our SaaS Booking System{" "}
            <span className="border-b-4 border-violet-600">Skedule</span>
          </h1>
          <p className="text-sm leading-6 text-gray-300 lg:max-w-md md:text-xl md:leading-8">
            Enjoy seamless integration, real-time updates, and automated
            reminders, ensuring you never miss a booking.
          </p>
          <button className="text-sm text-white px-14 py-2.5 font-semibold duration-300 ease-in bg-violet-600 rounded-full hover:brightness-90 cursor-pointer z-50">
            Get Started
          </button>
        </div>
        <div className="mt-28">
          <img
            className="hidden max-w-xl cursor-pointer md:block rotate-12"
            src={img2}
            alt=""
          />
          <img
            className="hidden max-w-xl -translate-y-64 cursor-pointer rotate-6 md:block rotate-10"
            src={img1}
            alt=""
          />
          <div className="flex flex-col items-center justify-center -mt-5 duration-300 ease-in-out cursor-pointer md:hidden">
            <img
              className="max-w-xs cursor-pointer rotate-6"
              src={img1}
              alt=""
            />
            <img
              className="max-w-xs cursor-pointer mt-1.5 rotate-6"
              src={img2}
              alt=""
            />
          </div>
        </div>
      </div>
      {/* Banner */}
      <div ref={section1} className="mt-20 space-y-6 text-slate-300">
        <h1 className="max-w-sm mx-auto text-2xl font-semibold leading-10 text-center md:text-3xl lg:text-4xl md:max-w-lg">
          Discover the <span className=" text-violet-600">Powerful</span>{" "}
          Features of Our SaaS Booking System
        </h1>
        <p className="max-w-sm mx-auto text-center md:text-xl">
          We handle the admin while you do more of what you love.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-6 my-20 md:px-10 md:grid md:grid-cols-3 place-items-center">
        {data.map((i, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-easing="ease-in-out"
            className="max-w-xs md:max-w-md space-y-4 p-5 border-[1px] cursor-pointer text-center rounded-lg text-slate-300 border-zinc-800"
          >
            <h1 className="text-lg font-semibold md:text-xl">{i.Tittle}</h1>
            <p className="text-xs leading-7">{i.Para}</p>
          </div>
        ))}
      </div>

      <div ref={section2} className="mt-48 space-y-6 text-slate-300">
        <h1 className="max-w-sm mx-auto text-2xl font-semibold leading-8 text-center md:text-3xl lg:text-4xl md:max-w-lg">
          Time-Saving Appointments at Your{" "}
          <span className=" text-violet-600">Fingertips</span>{" "}
        </h1>
        <p className="max-w-md mx-auto text-center md:text-xl">
          Whether you're a busy professional, a small business owner,our
          platform offers seamless and hassle-free appointment.
        </p>
      </div>
      <div className="rounded-lg md:px-7 my-36">
        <div className="grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 place-items-center">
          {imagedata.map((image, index) => (
            <img
              key={index}
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-easing="ease-in-out"
              onClick={() => {
                setismodel(true);
                setSelectedImage(image);
              }}
              src={image.img}
              alt={image.img + index}
              className="w-[90vw] duration-300 ease-in-out cursor-pointer brightness-75 hover:brightness-90 max-w-md rounded-xl"
            />
          ))}
        </div>
      </div>

      {ismodel && <Model setismodel={setismodel} imagedata={selectedImage} />}

      <Footer
        scrollTosection1={() => {
          scrollToSection(section1);
        }}
        scrollTosection2={() => {
          scrollToSection(section2);
        }}
      />
    </body>
  );
}
