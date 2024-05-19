import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Navbar({ scrollTosection1, scrollTosection2 }) {
  const [istoggle, setistoggle] = useState(false);

  const jwt = sessionStorage.getItem("jwt");

  return (
    <nav>
      <div className="flex items-center justify-between p-5 md:px-10 md:py-6">
        <div>
          <h1 className="text-xl font-semibold cursor-pointer md:text-2xl text-slate-300">
            Skedule
          </h1>
        </div>

        <ul className="items-center hidden text-sm space-x-7 md:flex">
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

          <Link to={`${jwt ? "/userProfile" : "/signup"}`}>
            <li className="px-7 text-white duration-500 ease-in-out font-semibold bg-violet-600 rounded-full cursor-pointer py-1.5 text-sm hover:brightness-75">
              {jwt ? "Your Account" : "Signup"}
            </li>
          </Link>
        </ul>

        <div className="md:hidden">
          {istoggle ? (
            <FaAngleUp
              onClick={() => {
                setistoggle(false);
              }}
              size={20}
              cursor={"pointer"}
              color="white"
            />
          ) : (
            <FaAngleDown
              onClick={() => {
                setistoggle(true);
              }}
              size={20}
              cursor={"pointer"}
              color="white"
            />
          )}
        </div>
      </div>

      <ul
        className={`flex flex-col justify-start items-start p-4 px-5 pt-4 space-y-4 md:hidden border-t-[1px] border-b-[1px] border-zinc-900 bg-zinc-900 ${
          istoggle ? "block" : "hidden"
        } `}
      >
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
        <Link to={`${jwt ? "/userProfile" : "/signup"}`}>
          <li className=" text-violet-600 duration-500 ease-in-out font-semibold  rounded-full cursor-pointer py-1.5 text-sm hover:brightness-75">
            {jwt ? "Your Account" : "Signup"}
          </li>
        </Link>
      </ul>
    </nav>
  );
}
