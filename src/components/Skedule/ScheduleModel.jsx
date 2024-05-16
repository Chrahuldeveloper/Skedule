import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { db } from "../../Firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import Loader from "../Loader";

export default function Schedule({ setispopup, day, setuserAppointements }) {
  const [schedule, setschedule] = useState({
    StartTime: "",
    EndTime: "",
    Slots: "0",
    Link: "",
    day: day.Day,
    date: day.date,
  });

  const [isloading, setisloading] = useState(false);

  const jwt = sessionStorage.getItem("jwt");

  const saveScheduleAppointment = async () => {
    setisloading(true);
    const userRef = doc(db, "USERS", jwt);

    const userdata = await getDoc(userRef);
    const currentAppointments = userdata.data().Appointments || [];

    const updatedAppointments = [...currentAppointments, schedule];

    await updateDoc(userRef, { Appointments: updatedAppointments });

    setuserAppointements(updatedAppointments);

    console.log("Saved");
    setisloading(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center h-full bg-black bg-opacity-75 backdrop-blur-md">
      <div className="p-5 bg-zinc-900  w-[90vw] md:W-[70vw] lg:w-[60vw] xl:w-[30vw]">
        <div className="flex items-center justify-between">
          <div className="max-w-md mx-auto my-1.5">
            <h1 className="text-xl font-semibold text-slate-300">
              Schedule your Appointment
            </h1>
          </div>
          <RxCross2
            size={25}
            color="#cbd5e1"
            onClick={() => {
              setispopup(false);
            }}
            cursor={"pointer"}
          />
        </div>
        <div className="flex items-center justify-around mt-6">
          <div>
            <input
              type="time"
              value={schedule.StartTime}
              onChange={(e) => {
                setschedule({ ...schedule, StartTime: e.target.value });
              }}
              className="cursor-pointer outline-none border-[1px] px-3 py-2 bg-transparent border-zinc-800 text-white time-input"
            />
          </div>
          <p className="font-semibold text-slate-300">To</p>
          <div>
            <input
              type="time"
              value={schedule.EndTime}
              onChange={(e) => {
                setschedule({ ...schedule, EndTime: e.target.value });
              }}
              className="cursor-pointer outline-none border-[1px] px-3 py-2 bg-transparent border-zinc-800 text-white time-input"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center my-5 space-y-3.5">
          <h1 className="text-sm font-semibold text-slate-300">
            Number of Slots
          </h1>
          <select
            name="schedule"
            value={schedule.Slots}
            onChange={(e) => {
              setschedule({ ...schedule, Slots: e.target.value });
            }}
            id="schedule"
            className="w-full px-2 border-[1px] py-2.5 text-slate-300 outline-none border-zinc-800 rounded-md bg-transparent"
          >
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
              (item, index) => {
                return (
                  <React.Fragment key={index}>
                    <option value={item} className="text-slate-300 bg-zinc-900">
                      {item}
                    </option>
                  </React.Fragment>
                );
              }
            )}
          </select>
        </div>

        <div className="space-y-3.5 my-5">
          <h1 className="text-sm font-semibold text-slate-300">Link</h1>
          <input
            type="text"
            placeholder="Link"
            value={schedule.Link}
            onChange={(e) => {
              setschedule({ ...schedule, Link: e.target.value });
            }}
            className="w-full px-2 border-[1px] py-2.5 outline-none border-zinc-800 rounded-md bg-transparent text-slate-300"
          />
        </div>

        <div className="my-2">
          <button
            onClick={saveScheduleAppointment}
            className="w-full py-2 text-sm font-semibold rounded-full text-slate-300 bg-violet-600"
          >
            Share URL
          </button>
        </div>
      </div>
      {isloading ? <Loader /> : null}
    </div>
  );
}
