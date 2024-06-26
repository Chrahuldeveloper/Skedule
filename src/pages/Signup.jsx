import React from "react";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "../Firebase";
import logo from "../images/logo1.png";
import { doc, setDoc } from "firebase/firestore";
import sendNotification from "../features/Notification";
export default function Signup() {
  const navigate = useNavigate();
  const jwt = sessionStorage.getItem("jwt");
  const provider = new GoogleAuthProvider();
  const notification = {
    Name: "Welcome to Skedule",
    Para: "Schedule your Appointments and Manage them at one Place",
  };

  const GoogleSignIn = async () => {
    if (jwt) {
      navigate("/userProfile");
    } else {
      try {
        if (localStorage.getItem("logout")) {
          localStorage.setItem("logout", false);
          navigate("/userProfile");
        } else {
          const res = await signInWithPopup(auth, provider);
          await setDoc(doc(db, "USERS", res.user.uid), {
            Name: res.user.displayName,
            Email: res.user.email,
            photo: res.user.photoURL,
          });
          localStorage.setItem("jwt", res.user.uid);
          await sendNotification(res.user.uid, notification);
          navigate("/userProfile");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="w-screen h-screen bg-[#08090d]">
      <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ">
        <div className="z-50 bg-zinc-900 rounded-3xl w-[95vw] sm:w-[60vw] md:w-[50vw] lg:w-[45vw]  py-10 flex flex-col justify-center items-center gap-6 px-14 ">
          <div className="space-y-5 text-slate-300">
            <h1 className="text-2xl font-semibold ">Welcome to Skedule</h1>
            <p className="leading-8">Simplify your scheduling with Skedule.</p>
          </div>
          <button
            onClick={GoogleSignIn}
            className=" w-[80vw] sm:w-[60vw] md:w-[50vw] lg:w-[30vw] font-semibold justify-center gap-3.5 py-3.5 bg-violet-600 text-sm rounded-full flex items-center text-slate-300"
          >
            <img src={logo} className="w-6 h-6" alt="" />
            <h1 className="text-xs font-semibold">Sign in with Google</h1>
          </button>
        </div>
      </div>
    </div>
  );
}
