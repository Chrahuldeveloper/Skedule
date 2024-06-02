import React from "react";

export default function Footer({ scrollTosection1, scrollTosection2 }) {
  return (
    <div className="items-center justify-between w-screen p-10 border-t-2 border-zinc-900 lg:flex bg-[#0a0b11]">
      <div className="space-y-3 lg:pl-20 text-slate-300">
        <h1 className="text-2xl font-semibold lg:text-3xl">Skedule</h1>
        <p className="max-w-md">
          Simplify your scheduling with Skedule. Our user-friendly app helps you
          manage appointments effortlessly, send reminders, and keep your
          clients happy. Focus on growing your business while we take care of
          the rest
        </p>
      </div>
      <div className="flex flex-col gap-8 pl-8 my-8 lg:gap-20 lg:flex-row lg:pr-28 lg:justify-center text-slate-300">
        <ul className="space-y-3.5 ">
          <h1 className="text-lg font-semibold text-zinc-200">Contact Us</h1>
          <li className="text-sm font-semibold cursor-pointer">
            saasstudiosindia@gmail.com
          </li>
        </ul>
        <ul className="space-y-3.5  ">
          <h1 className="text-lg font-semibold text-zinc-200">About Us</h1>
          <li className="duration-500 ease-in-out cursor-pointer text-slate-300 hover:text-slate-400">
            Home
          </li>
          <li
            onClick={scrollTosection1}
            className="duration-500 ease-in-out cursor-pointer text-slate-300 hover:text-slate-400"
          >
            Features
          </li>
          <li
            onClick={scrollTosection2}
            className="duration-500 ease-in-out cursor-pointer text-slate-300 hover:text-slate-400"
          >
            Services
          </li>
        </ul>
      </div>
    </div>
  );
}
