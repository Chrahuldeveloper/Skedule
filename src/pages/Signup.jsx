import React from "react";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "../Firebase";
import logo from "../images/logo1.png";
import { doc, setDoc } from "firebase/firestore";

export default function Signup() {
  const navigate = useNavigate();

  const provider = new GoogleAuthProvider();

  const GoogleSignIn = async () => {
    try {
      if (sessionStorage.getItem("logout")) {
        sessionStorage.setItem("logout", false);
        navigate("/schedule");
      } else {
        const res = await signInWithPopup(auth, provider);
        await setDoc(doc(db, "USERS", res.user.uid), {
          Name: res.user.displayName,
          Email: res.user.email,
          photo: res.user.photoURL,
        });
        sessionStorage.setItem("jwt", res.user.uid);
        navigate("/schedule");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-screen h-screen bg-[#08090d]">
      <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ">
        <div className="z-50 bg-zinc-900 rounded-md w-[80vw] sm:w-[60vw] md:w-[50vw] lg:w-[40vw] xl:w-[30vw] py-10 flex flex-col justify-center items-center gap-6 px-10 ">
          <div className="space-y-3 lg:text-center">
            <h1 className="text-2xl font-semibold text-slate-300">Sign up </h1>
          </div>
          <input
            type="text"
            placeholder="Email"
            className="border-[1px] border-zinc-800 px-3 py-2.5 outline-none bg-transparent text-slate-300 w-full"
          />
          <input
            type="password"
            placeholder="Password"
            className="border-[1px] border-zinc-800 px-3 py-2.5 outline-none bg-transparent text-slate-300 w-full"
          />
          <div className="w-full mt-2 text-center text-slate-300">
            ------------------------ OR -------------------------
          </div>

          <button
            onClick={GoogleSignIn}
            className="  font-semibold w-full justify-center gap-3.5 py-3.5 bg-violet-600 text-sm rounded-full flex items-center text-slate-300"
          >
            <img src={logo} className="w-7 h-7" alt="" />
            <h1 className="text-xs font-semibold">Sign in with Google</h1>
          </button>
        </div>
      </div>
    </div>
  );
}
