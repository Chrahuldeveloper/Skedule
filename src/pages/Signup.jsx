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
    <div className="w-screen bg-[#121415] min-h-screen">
     <div className="bg-[#111111] ">
       
     </div>
    </div>
  );
}
