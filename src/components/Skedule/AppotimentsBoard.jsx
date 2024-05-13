import { doc, getDoc } from "firebase/firestore";
import React, { useCallback, useEffect, useState } from "react";
import { db } from "../../Firebase";

export default function AppotimentsBoard() {
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
    <>
      <div className="bg-zinc-900 p-5 my-6 border-[1.2px] rounded-md  border-zinc-800 lg:ml-96 w-[95vw] sm:w-[60vw] mx-auto lg:mx-0 overflow-y-scroll h-[80vh]  z-50">
        <div>
          <h1 className="text-2xl font-semibold text-slate-300">
            Your Appotiments
          </h1>
        </div>

        <table className="">
          <thead className="divide-y-2">
            <tr className="text-slate-300">
              <th className="pt-10 lg:pl-4">Slots</th>
              <th className="pt-10 pl-8 lg:pl-28 lg:text-sm">StartTime</th>
              <th className="pt-10 pl-8 lg:pl-24 lg:text-sm">EndTime</th>
              <th className="pt-10 pl-8 lg:pl-28 lg:text-sm">date</th>
              <th className="pt-10 pl-8 lg:pl-28 lg:text-sm">Link</th>
              <th className="pt-10 pl-8 lg:pl-28 lg:text-sm">Delete</th>
            </tr>
          </thead>
          {userAppointements.map((i, index) => {
            return (
              <React.Fragment key={index}>
                <tbody className=" text-slate-300">
                  <th className="pt-10 lg:pl-4">
                    <h1 className="text-xs cursor-pointer">{i.Slots}</h1>
                  </th>
                  <th className="pt-10 pl-8 lg:pl-28 lg:text-sm">
                    <p className="text-xs cursor-pointer">{i.StartTime}</p>
                  </th>
                  <th className="pt-10 pl-8 lg:pl-28 lg:text-sm">
                    <p className="text-xs cursor-pointer">{i.EndTime}</p>
                  </th>
                  <th className="pt-10 pl-8 lg:pl-28 lg:text-sm">
                    <p className="text-xs cursor-pointer">{i.date}</p>
                  </th>
                  <th className="pt-10 pl-8 lg:pl-28 lg:text-sm">
                    <p className="text-xs cursor-pointer">{"Link"}</p>
                  </th>
                  <th className="pt-10 pl-8 lg:pl-28 lg:text-sm">
                    <p
                      className="text-xs text-red-500 cursor-pointer"
                      onClick={() => {
                        alert("Please enter");
                      }}
                    >
                      Delete
                    </p>
                  </th>
                </tbody>
              </React.Fragment>
            );
          })}
        </table>
      </div>
    </>
  );
}
