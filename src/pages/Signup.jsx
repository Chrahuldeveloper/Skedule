import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "../Firebase";
import logo from "../images/logo1.png";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import sendNotification from "../features/Notification";

export default function Signup() {
  const navigate = useNavigate();
  const jwt = sessionStorage.getItem("jwt");
  const provider = new GoogleAuthProvider();

  const [data, setData] = useState({
    Name: "",
    Email: "",
    Password: "",
  });

  const notification = {
    Name: "Welcome to Skedule",
    Para: "Schedule your Appointments and Manage them at one Place",
  };

  const GoogleSignIn = async () => {
    if (jwt) {
      navigate("/userProfile");
      return;
    }

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
          timestamp: new Date(),
        });
        localStorage.setItem("jwt", res.user.uid);
        await sendNotification(res.user.uid, notification);
        navigate("/userProfile");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const saveData = async () => {
    if (Object.values(data).every((i) => i !== "")) {
      try {
        const docRef = await addDoc(collection(db, "contacts"), {
          name: data.Name,
          email: data.Email,
          Password: data.Password,
          timestamp: new Date(),
        });
        await sendNotification(docRef.id, notification);
        setData({ Name: "", Email: "", Message: "" });
        navigate("/userProfile");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="w-screen bg-[#121415] min-h-screen px-5 pt-10">
      <div className="bg-[#111111] space-y-5 border-[1px] border-stone-900 shadow-xl text-white max-w-xl px-10 py-8 mx-auto rounded-lg md:max-w-5xl lg:max-w-xl">
        <div className="space-y-3">
          <h1 className="text-2xl font-bold">SignUp</h1>
          <p className="text-sm leading-7">
            {" "}
            Welcome to Skedule! Our platform is designed to simplify your
            scheduling process.
          </p>
        </div>
        <div className="w-full">
          <input
            type="text"
            placeholder={"Name"}
            className="w-full py-3 px-2.5 outline-none bg-zinc-900 rounded-lg"
            onChange={(e) => setData({ ...data, Name: e.target.value })}
            value={data.Name}
          />
        </div>
        <div className="w-full">
          <input
            type="text"
            placeholder={"Email"}
            className="w-full py-3 px-2.5 outline-none bg-zinc-900 rounded-lg"
            onChange={(e) => setData({ ...data, Email: e.target.value })}
            value={data.Email}
          />
        </div>
        <div className="w-full">
          <input
            type="text"
            placeholder={"Password"}
            className="w-full py-3 px-2.5 outline-none bg-zinc-900 rounded-lg"
            onChange={(e) => setData({ ...data, Password: e.target.value })}
            value={data.Message}
          />
        </div>
        <button
          className="w-full py-3 px-2.5 outline-none bg-[#6746ed] rounded-lg text-sm"
          onClick={saveData}
        >
          Submit
        </button>
        <div className="text-center text-slate-400">
          -----------------OR-----------------
        </div>
        <button
          className="w-full py-3 px-2.5 outline-none bg-[#6746ed] rounded-lg flex items-center space-x-3 text-sm justify-center"
          onClick={GoogleSignIn}
        >
          <img src={logo} alt="" className="w-4 h-4 " />
          <h1>Google</h1>
        </button>
      </div>
    </div>
  );
}
