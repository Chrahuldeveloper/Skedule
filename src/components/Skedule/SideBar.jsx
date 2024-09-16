import React from "react";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import {
  MdOutlineSpeakerNotes,
  MdOutlineNotificationsActive,
} from "react-icons/md";

export default function SideBar({ setcat, setisshow, setisedit, user, cat }) {
  const navigate = useNavigate();
  const jwt = localStorage.getItem("jwt");

  const handleLogout = () => {
    localStorage.setItem("logout", true);
    navigate("/signup");
  };

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center h-full bg-black bg-opacity-75 backdrop-blur-md lg:bg-opacity-0 lg:backdrop-blur-0">
        <aside
          data-aos="slide-right"
          data-aos-delay="20"
          data-aos-easing="ease-in-out"
          className="bg-[#111111] w-[80vw] lg:w-[17vw] border-r-[1px] border-zinc-900 px-10 py-5 h-screen fixed left-0 top-0 bottom-0 -z-40"
        >
          <nav>
            <div className="flex justify-end lg:justify-center">
              <RxCross2
                onClick={() => setisshow(false)}
                size={25}
                color="#cbd5e1"
                className="cursor-pointer lg:hidden"
              />
              <h1 className="hidden mt-3 text-2xl font-semibold lg:block text-slate-300">
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
                  className="object-cover w-28 h-28 duration-300 ease-in-out rounded-full cursor-pointer hover:brightness-75 border-zinc-900 border-[1px]"
                  alt=""
                />
                <div className="space-y-2.5 text-center">
                  <h1 className="text-2xl font-semibold lg:hidden text-slate-300">
                    {user?.Name}
                  </h1>
                  {user?.work ? (
                    <p className="text-sm font-bold text-slate-300">
                      {user?.work}
                    </p>
                  ) : (
                    <p className="text-sm font-bold text-gray-300">
                      Your Profession
                    </p>
                  )}
                </div>
              </div>
              <div className="border-b-[1px] border-blue-200 my-4"></div>
              <ul className="space-y-2.5 text-center mt-7">
                {[
                  "Dashboard",
                  "Schedule",
                  "Appotiments",
                  "Notifications",
                  "Logout",
                ].map((item) => (
                  <li
                    key={item}
                    onClick={() => {
                      setcat(item);
                      if (item === "Logout") handleLogout();
                      else if (item === "Appotiments") navigate(`/user/${jwt}`);
                      else setisshow(false);
                    }}
                    className={`py-2.5 px-3 cursor-pointer text-xs text-slate-300 font-semibold flex items-center  justify-start gap-2 hover:text-white hover:bg-[#6746ed] duration-300 ease-in-out hover:rounded-lg 
                     ${
                      cat === item ? "bg-[#6746ed] text-white rounded-lg" : ""
                    }`}
                  >
                    <div className="flex items-center justify-center">
                      {item === "Dashboard" && <MdOutlineDashboard size={18} />}
                      {item === "Schedule" && <SlCalender size={18} />}
                      {item === "Appotiments" && (
                        <MdOutlineSpeakerNotes size={18} />
                      )}
                      {item === "Notifications" && (
                        <MdOutlineNotificationsActive size={18} />
                      )}
                      {item === "Logout" && <IoIosLogOut size={23} />}
                    </div>
                    <h1 className="text-sm">{item}</h1>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </aside>
      </div>
    </>
  );
}
