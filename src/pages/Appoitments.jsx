import React, { useCallback, useEffect, useState } from "react";
import { db, auth } from "../Firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { Loader, Sucess } from "../components/index";
import emailjs from "@emailjs/browser";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useParams } from "react-router-dom";
import UserCalendar from "../components/UserCalender";

export default function Appointments() {
  const [userAppointments, setUserAppointments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({
    Pic: "",
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
        Pic: data?.photo,
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
      console.log(filterAppointments);
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
    <div className="w-screen h-screen bg-[#08090d] overflow-y-scroll">
      {isLoading ? <Loader /> : null}
      <div className="px-3 py-8">
        <div className="p-6 border-[1px] border-zinc-800 bg-zinc-900 mx-auto rounded-md max-w-5xl">
          <div className="flex flex-col items-center gap-10 md:justify-evenly md:flex-row md:gap-0">
            <div className="flex flex-col items-center justify-center space-y-3 md:pl-28">
              <img
                src={user?.Pic}
                className="object-cover duration-300 ease-in-out rounded-full cursor-pointer h-32 w-32 hover:brightness-75 border-[1px] border-zinc-800"
                alt=""
              />
              <h1 className="text-lg font-bold text-slate-300">{user?.Name}</h1>
              <p className="max-w-sm text-sm leading-7 text-center text-slate-300">
                {user.Bio}
              </p>
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

      <footer className="flex justify-center">
        <div className="absolute bottom-0 mx-auto mb-3 font-bold text-center text-stone-700">
          Built in Skedule
        </div>
      </footer>
    </div>
  );
}
