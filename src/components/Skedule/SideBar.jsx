import React from "react";
import { useState } from "react";
import { CiHome } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

export default function SideBar({
  setisshow,
  setisedit,
  user,
  setnotifications,
}) {
  const navigate = useNavigate();

  const [cat, setcat] = useState("Dashboard");

  const handleLogout = () => {
    sessionStorage.setItem("logout", true);
    navigate("/signup");
  };

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center h-full bg-black bg-opacity-75 backdrop-blur-md lg:bg-opacity-0 lg:backdrop-blur-0 ">
        <aside className="bg-white w-[60vw] lg:w-[17vw] border-[1px] px-10 py-5 h-screen  fixed left-0 top-0 bottom-0 -z-40">
          <nav>
            <div className="flex justify-end lg:justify-center">
              <RxCross2
                onClick={() => {
                  setisshow(false);
                }}
                size={25}
                className="cursor-pointer lg:hidden"
              />
              <h1 className="hidden mt-3 text-2xl font-semibold lg:block">
                Skedule
              </h1>
            </div>
            <div>
              <div className="flex flex-col items-center justify-center gap-3 mt-5 lg:mt-16">
                <img
                  onClick={() => {
                    setisedit(true);
                    setisshow(false);
                  }}
                  src={user?.photo}
                  className="object-cover w-32 h-32 duration-300 ease-in-out rounded-full cursor-pointer hover:brightness-75"
                  alt=""
                />
                <div className="space-y-1.5 text-center">
                  <h1 className="text-2xl font-semibold lg:hidden text-slate-800">
                    {user?.Name}
                  </h1>
                  {user?.work ? (
                    <p className="text-sm font-bold">{user?.work}</p>
                  ) : (
                    <p className="font-bold text-gray-500">Your Profession</p>
                  )}
                </div>
              </div>
              <div className="border-b-[1px] border-blue-200 my-4"></div>
              <ul className="space-y-5 text-center mt-7">
                <li
                  onClick={() => {
                    setcat("Dashboard");
                    setnotifications(false);
                  }}
                  className={`px-6 py-2.5 cursor-pointer text-sm text-slate-500 font-semibold flex items-center  gap-4 hover:text-white hover:bg-blue-600 duration-300 ease-in-out hover:rounded-lg  ${
                    cat === "Dashboard"
                      ? "bg-blue-600 text-white rounded-lg"
                      : null
                  }`}
                >
                  <CiHome size={23} />
                  <h1 className="text-sm">Dashboard</h1>
                </li>
                <li
                  className={`px-6 py-2.5 cursor-pointer text-sm text-slate-500 font-semibold flex items-center  gap-4 hover:text-white hover:bg-blue-600 duration-300 ease-in-out hover:rounded-lg  ${
                    cat === "Schedule"
                      ? "bg-blue-600 text-white rounded-lg"
                      : null
                  }`}
                >
                  <CiHome size={23} />
                  <h1 className="text-sm">Schedule</h1>
                </li>

                <li
                  onClick={() => {
                    setcat("Subscription");
                  }}
                  className={`px-6 py-2.5 cursor-pointer text-sm text-slate-500 font-semibold flex items-center  gap-4 hover:text-white hover:bg-blue-600 duration-300 ease-in-out hover:rounded-lg  ${
                    cat === "Subscription"
                      ? "bg-blue-600 text-white rounded-lg"
                      : null
                  }`}
                >
                  <CiHome size={23} />
                  <h1 className="text-sm">Subscription</h1>
                </li>
                <li
                  onClick={() => {
                    setcat("Notifications");
                    setnotifications(true);
                  }}
                  className={`px-6 py-2.5 cursor-pointer text-sm text-slate-500 font-semibold flex items-center  gap-4 hover:text-white hover:bg-blue-600 duration-300 ease-in-out hover:rounded-lg  ${
                    cat === "Notifications"
                      ? "bg-blue-600 text-white rounded-lg"
                      : null
                  }`}
                >
                  <CiHome size={23} />
                  <h1 className="text-sm">Notifications</h1>
                </li>
                <li
                  onClick={() => {
                    setcat("Logout");
                    handleLogout();
                  }}
                  className={`px-6 py-2.5 cursor-pointer text-sm text-slate-500 font-semibold flex items-center  gap-4 hover:text-white hover:bg-blue-600 duration-300 ease-in-out hover:rounded-lg  ${
                    cat === "Logout"
                      ? "bg-blue-600 text-white rounded-lg"
                      : null
                  }`}
                >
                  <CiHome size={23} />
                  <h1 className="text-sm">Logout</h1>
                </li>
              </ul>
            </div>
          </nav>
        </aside>
      </div>
    </>
  );
}
