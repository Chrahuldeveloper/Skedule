import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

export default function Navbar() {
  const [istoggle, setistoggle] = useState(false);

  return (
    <nav>
      <div className="flex items-center justify-between p-5">
        <div>
          <h1 className="text-xl font-semibold cursor-pointer">Skedule</h1>
        </div>
        <div className="md:hidden">
          {istoggle ? (
            <FaAngleUp
              onClick={() => {
                setistoggle(false);
              }}
              size={20}
              cursor={"pointer"}
            />
          ) : (
            <FaAngleDown
              onClick={() => {
                setistoggle(true);
              }}
              size={20}
              cursor={"pointer"}
            />
          )}
        </div>
      </div>
      <ul
        className={`flex flex-col p-4 px-5 pt-4 space-y-4 md:hidden border-t-[1px] border-gray-200 bg-gray-50 ${
          istoggle ? "block" : "hidden"
        } `}
      >
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">Home</li>
      </ul>
    </nav>
  );
}
