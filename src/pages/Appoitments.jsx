import React, { useCallback, useEffect, useState } from "react";
import { db, auth } from "../Firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { Sucess } from "../components/index";
import emailjs from "@emailjs/browser";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useParams } from "react-router-dom";
import UserCalendar from "../components/UserCalender";
export default function Appoitments() {
  const [userAppointements, setuserAppointements] = useState([]);
  const [isloading, setisloading] = useState(false);
  const [user, setuser] = useState({
    Pic: "",
    Name: "",
    Bio: "",
  });

  const provider = new GoogleAuthProvider();

  const [sucessmsg, setsucessmsg] = useState(false);
  const [errormsg, seterrormsg] = useState(false);

  const { id } = useParams();

  const [toggle, settoggle] = useState(true);

  const isPastDate = (date) => {
    const currentdate = new Date();
    const appointmentDate = new Date(date);
    return appointmentDate < currentdate;
  };

  const getUserAppointments = useCallback(async () => {
    if (!id) return;
    try {
      setisloading(true);
      const docRef = doc(db, "USERS", id);
      const userData = await getDoc(docRef);
      const data = userData.data();
      const validAppointments = data?.Appointments?.filter(
        (appt) => !isPastDate(appt.date)
      );
      if (validAppointments?.length !== data?.Appointments?.length) {
        await updateDoc(docRef, { Appointments: validAppointments });
      }
      setuserAppointements(data?.Appointments || []);
      setuser({
        Pic: data?.photo,
        Name: data?.Name,
        Bio: data?.Bio,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setisloading(false);
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
    StartPeriod
  ) => {
    try {
      const rescreator = await emailjs.send(
        "service_v85ekfn",
        "template_q8bxqkv",
        {
          from_name: "Skedule",
          to_name: creatorName,
          from_email: "saasstudiosindia@gmail.com",
          to_email: creatorEmail,
          message: `${userEmail} has Booked your Appointment at ${
            time + StartPeriod
          }`,
        },
        "3mxv1JKPFdt7xkk3a"
      );

      console.log(rescreator);
      const res = await emailjs.send(
        "service_v85ekfn",
        "template_q8bxqkv",
        {
          from_name: "Skedule",
          to_name: userName,
          from_email: "saasstudiosindia@gmail.com",
          to_email: userEmail,
          message: `Appointment Link is ${link}  `,
        },
        "3mxv1JKPFdt7xkk3a"
      );
      console.log(res.text);
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
      const filteredAppointment = await appointments.find(
        (itm, i) => i === index
      );
      if (filteredAppointment.emails?.includes(user)) {
        return seterrormsg(true);
      } else {
        filteredAppointment.emails = [
          ...(filteredAppointment.emails || []),
          user,
        ];
        await updateDoc(docRef, { Appointments: appointments });
        await sendEmail(
          user,
          res.user.displayName,
          filteredAppointment.Link,
          userData.Email,
          userData.Name,
          filteredAppointment.StartTime,
          filteredAppointment.StartPeriod
        );
        setsucessmsg(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-screen h-screen bg-[#08090d] overflow-y-scroll">
      <div className="px-3 py-8">
        <div className="p-6  border-[1px] border-zinc-800 bg-zinc-900  mx-auto rounded-md max-w-5xl">
          <div className="flex flex-col items-center gap-10 md:justify-evenly md:flex-row md:gap-0">
            <div className="flex flex-col items-center justify-center space-y-3 md:pl-28">
              <img
                src={user?.Pic}
                className="object-cover duration-300 ease-in-out rounded-full cursor-pointer h-32 w-32 hover:brightness-75 border-[1px] border-zinc-800"
                alt=""
              />
              <h1 className="text-lg font-bold text-slate-300">{user?.Name}</h1>
              <p className="max-w-sm text-sm font-semibold leading-7 text-center text-slate-300">
                {user.Bio}
              </p>
            </div>
            <UserCalendar page="user" userId={id} GoogleRegister={GoogleRegister}/>
          </div>
        </div>
      </div>
      {sucessmsg && toggle ? (
        <Sucess msg={"Registration Done"} settoggle={settoggle} />
      ) : null}
      {errormsg && toggle ? (
        <Sucess msg={"Already Registrated"} settoggle={settoggle} />
      ) : null}
    </div>
  );
}
