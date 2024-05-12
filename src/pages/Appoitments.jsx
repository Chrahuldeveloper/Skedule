import React, { useCallback, useEffect, useState } from "react";
import { db } from "../Firebase";
import { doc, getDoc } from "firebase/firestore";

export default function Appoitments() {
  const [userAppointements, setuserAppointements] = useState([]);

  const jwt = sessionStorage.getItem("jwt");
  const getuserAppointements = useCallback(async () => {
    try {
      const docref = doc(db, "USERS", jwt);
      const UserData = await getDoc(docref);
      setuserAppointements(UserData.data().Appointments || []);
    } catch (error) {
      console.log(error);
    }
  }, [jwt]);

  useEffect(() => {
    getuserAppointements();
  }, [getuserAppointements]);

  return (
    <div className="w-screen h-screen bg-[#08090d] overflow-y-scroll">
      <div className="px-3 py-8">
        <div className="p-6  border-[1px] border-zinc-800 bg-zinc-900  mx-auto rounded-md max-w-xl">
          <div className="flex flex-col items-center space-y-1.5 text-slate-300">
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="object-cover duration-300 ease-in-out rounded-full cursor-pointer h-32 w-32 hover:brightness-75 border-[1px] border-zinc-800"
              alt=""
            />
            <h1 className="text-lg font-bold">Rahul</h1>
            <p className="max-w-xs text-xs text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              fugit dolores deserunt animi. Odit, sapiente!
            </p>
          </div>
          {userAppointements.map((i, idx) => {
            return (
              <React.Fragment key={idx}>
                <div className="flex items-center justify-center gap-12 my-9 border-b-[1px] border-zinc-700">
                  <div className="flex flex-col items-center justify-center gap-2.5 text-slate-300">
                    <h1 className="text-xs">{i.date}</h1>
                    <p className="text-sm">{i.day}</p>
                  </div>
                  <div className="duration-300 ease-in-out rounded-full bg-violet-300 hover:brightness-75">
                    <h1 className="px-4 py-2 text-xs font-semibold cursor-pointer text-violet-800">
                      {i.StartTime} - {i.EndTime}
                    </h1>
                  </div>
                  <div className="duration-300 ease-in-out bg-purple-500 rounded-full hover:brightness-75">
                    <p className="py-2 text-xs font-semibold text-white cursor-pointer px-7">
                      Book
                    </p>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}
