import React, { useCallback, useEffect, useState } from "react";
import { db, auth } from "../Firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { Loader, Sucess } from "../components/index";
import emailjs from "@emailjs/browser";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useParams } from "react-router-dom";
import UserCalendar from "../components/UserCalender";
import { IoEarthOutline } from "react-icons/io5";
import { FaLink } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";

export default function Appointments() {
  const [userAppointments, setUserAppointments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({
    photo: "",
    Name: "",
    Bio: "",
  });

  const provider = new GoogleAuthProvider();

  const [successMsg, setSuccessMsg] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);

  const { id } = useParams();

  const [toggle, setToggle] = useState(true);

  const isPastDate = (date) => {
    const currentDate = new Date();
    const appointmentDate = new Date(date);
    return appointmentDate < currentDate;
  };

  const getUserAppointments = useCallback(async () => {
    if (!id) return;
    try {
      setIsLoading(true);
      const docRef = doc(db, "USERS", id);
      const userData = await getDoc(docRef);
      const data = userData.data();
      const validAppointments = data?.Appointments?.filter(
        (appt) => !isPastDate(appt.date)
      );
      if (validAppointments?.length !== data?.Appointments?.length) {
        await updateDoc(docRef, { Appointments: validAppointments });
      }
      setUserAppointments(data?.Appointments || []);
      setUser({
        photo: data?.photo,
        Name: data?.Name,
        Bio: data?.Bio,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    getUserAppointments();
  }, [getUserAppointments]);

  const sendEmail = async (
    userEmail,
    userName,
    link,
    creatorEmail,
    creatorName,
    time,
    startPeriod
  ) => {
    try {
      await emailjs.send(
        "service_v85ekfn",
        "template_q8bxqkv",
        {
          from_name: "Skedule",
          to_name: creatorName,
          from_email: "saasstudiosindia@gmail.com",
          to_email: creatorEmail,
          message: `${userEmail} has Booked your Appointment at ${
            time + startPeriod
          }`,
        },
        "3mxv1JKPFdt7xkk3a"
      );

      await emailjs.send(
        "service_v85ekfn",
        "template_q8bxqkv",
        {
          from_name: "Skedule",
          to_name: userName,
          from_email: creatorEmail,
          to_email: userEmail,
          message: `Your Appointment Link is ${link}`,
        },
        "3mxv1JKPFdt7xkk3a"
      );
    } catch (error) {
      console.log(error);
    }
  };

  const GoogleRegister = async (index) => {
    const res = await signInWithPopup(auth, provider);
    const user = res.user.email;
    try {
      const docRef = doc(db, "USERS", id);
      const docSnap = await getDoc(docRef);
      const userData = docSnap.data();
      const appointments = (await userData.Appointments) || [];
      const filterAppointments = appointments.filter((i) => {
        return i.date === index;
      });
      const updatedAppointments = filterAppointments.map((appointment) => {
        if (!appointment.emails) {
          appointment.emails = [];
        }
        if (!appointment.emails.includes(user)) {
          appointment.emails.push(user);
        }
        return appointment;
      });
      await updateDoc(docRef, { Appointments: updatedAppointments });
      await sendEmail(
        user,
        res?.user?.displayName,
        userData?.Email,
        userData?.Name,
        updatedAppointments?.Link,
        updatedAppointments?.StartTime,
        updatedAppointments?.StartPeriod
      );
      setSuccessMsg(true);
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <div className="w-screen h-screen bg-[#121415] overflow-y-scroll">
      {isLoading ? <Loader /> : null}
      <div className="px-3 py-8 mt-10">
        <div className="p-4 border-[1px] border-zinc-900 bg-[#111111] mx-auto rounded-md max-w-5xl">
          <div className="flex flex-col items-center gap-7 md:justify-evenly md:flex-row md:gap-0">
            <div className="flex flex-col justify-center space-y-2.5 md:pl-28">
              <img
                src={user?.photo}
                className="object-cover duration-300 ease-in-out rounded-full cursor-pointer h-24 w-24 hover:brightness-75 border-[1px] border-zinc-800"
                alt=""
              />
              <h1 className="text-lg font-bold cursor-pointer text-slate-300 ">
                {user?.Name}
              </h1>
              <p className="w-64 text-xs leading-6 cursor-pointer text-slate-300">
                {user.Bio}
              </p>
              <div className="flex items-center space-x-3 cursor-pointer">
                <IoEarthOutline size={19} color="white" />
                <h1 className="text-sm text-slate-300">India</h1>
              </div>
              <div className="flex items-center space-x-3 cursor-pointer">
                <FaLink size={19} color="white" />
                <h1 className="text-sm text-slate-300">Zoom</h1>
              </div>
              <div className="flex items-center space-x-3 cursor-pointer">
                <IoMdTime size={19} color="white" />
                <h1 className="text-sm text-slate-300">30 min</h1>
              </div>
            </div>
            <UserCalendar
              page="user"
              userId={id}
              GoogleRegister={GoogleRegister}
            />
          </div>
        </div>
      </div>
      {successMsg && toggle ? <Sucess setToggle={setToggle} /> : null}
      {errorMsg && toggle ? (
        <Sucess msg={"Already Registered"} setToggle={setToggle} />
      ) : null}
    </div>
  );
}
