import React from "react";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../Firebase";
import logo from "../images/logo1.png";
export default function Signup() {
  const navigate = useNavigate();

  const provider = new GoogleAuthProvider();

  const GoogleSignIn = async () => {
    try {
      const res = await signInWithPopup(auth, provider);
      console.log(res.user);
      navigate("/schedule");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-screen h-screen bg-gradient-to-r from-green-300 via-blue-500 -z-50 to-purple-600">
      <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ">
        <div className="z-50 bg-white rounded-md w-[80vw] sm:w-[60vw] md:w-[50vw] lg:w-[40vw] xl:w-[30vw] py-10 flex flex-col justify-center items-center gap-6 px-10 shadow-sm shadow-slate-200">
          <div className="space-y-3 lg:text-center">
            <h1 className="text-2xl font-semibold text-slate-800">Sign up </h1>
            <p className="text-sm">
              Lorem ipsum, dolor sit amet consectetur amet consectetur
            </p>
          </div>
          <div className="border-b-[1px] w-full  border-slate-300 "></div>
          <button
            onClick={GoogleSignIn}
            className=" text-black font-semibold px-20 gap-3.5 py-3.5 bg-gray-200 text-sm rounded-md flex items-center "
          >
            <img src={logo} className="w-7 h-7" alt="" />
            <h1 className="font-semibold text-xs">Sign in with Google</h1>
          </button>
        </div>
      </div>
    </div>
  );
}
