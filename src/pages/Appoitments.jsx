import React, { useCallback, useEffect, useState } from "react";
import { db, auth } from "../Firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { Circle, Bar, Sucess } from "../components/index";
import emailjs from "@emailjs/browser";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useParams } from "react-router-dom";
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
      const validAppointments = data?.Appointments.filter(
        (appt) => !isPastDate(appt.date)
      );
      if (validAppointments.length !== data?.Appointments.length) {
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
        <div className="p-6  border-[1px] border-zinc-800 bg-zinc-900  mx-auto rounded-md max-w-xl">
          <div className="flex flex-col items-center space-y-2.5 text-slate-300">
            {isloading ? (
              <Circle />
            ) : (
              <img
                src={user?.Pic}
                className="object-cover duration-300 ease-in-out rounded-full cursor-pointer h-32 w-32 hover:brightness-75 border-[1px] border-zinc-800"
                alt=""
              />
            )}
            {isloading ? (
              <Bar width={28} />
            ) : (
              <h1 className="text-lg font-bold">{user?.Name}</h1>
            )}
            {isloading ? (
              <Bar width={36} />
            ) : (
              <p className="max-w-xs text-xs text-center">{user?.Bio}</p>
            )}
          </div>

          {[1, 2, 3, 4, 5].map((i) => {
            return <></>;
          })}

          {isloading ? (
            <div className="flex flex-col items-center justify-center mt-5 space-y-4">
              <Bar width={"full"} height={8} />
              <Bar width={"full"} height={8} />
              <Bar width={"full"} height={8} />
              <Bar width={"full"} height={8} />
              <Bar width={"full"} height={8} />
            </div>
          ) : (
            userAppointements.map((i, idx) => {
              return (
                <React.Fragment key={idx}>
                  <div className="flex  items-center justify-center gap-8 my-9 border-b-[1px] border-zinc-700">
                    <div className="flex flex-col items-center justify-center gap-2.5 text-slate-300">
                      <h1 className="text-[5.5px] sm:text-[10px]">{i.date}</h1>
                      <p className="text-[5.5px] sm:text-[10px]">{i.day}</p>
                    </div>
                    <div className="duration-300 ease-in-out rounded-full bg-violet-300 hover:brightness-75">
                      <h1 className="px-1 py-2 text-[5px] sm:text-[10px] font-semibold cursor-pointer text-violet-800">
                        {i.StartTime}
                        {i.StartPeriod} - {i.EndTime}
                        {i.EndPeriod}
                      </h1>
                    </div>
                    <div>
                      <h1 className="text-[5.5px] sm:text-[10px] font-semibold cursor-pointer text-violet-200">
                        {i.Slots === i.emails ? "Not Available" : "Available"}
                      </h1>
                    </div>
                    <div
                      onClick={() => {
                        GoogleRegister(idx);
                      }}
                      className="duration-300 ease-in-out bg-purple-500 rounded-full hover:brightness-75"
                    >
                      <p className="px-5 py-2 text-[5.8px] sm:text-[10px] font-semibold text-white cursor-pointer">
                        Book
                      </p>
                    </div>
                  </div>
                </React.Fragment>
              );
            })
          )}
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
