import { doc, updateDoc } from "firebase/firestore";
import React, { useMemo, useState } from "react";
import { db } from "../../Firebase";
import Loader from "../Loader";
import { Link } from "react-router-dom";
export default function AppotimentsBoard({
  userAppointements,
  setuserAppointements,
}) {
  const jwt = localStorage.getItem("jwt");
  const docref = useMemo(() => doc(db, "USERS", jwt), [jwt]);
  const [isloading, setisloading] = useState(false);

  const [copy, setcopy] = useState("ShareURL");
  const [userEmails, setuserEmails] = useState();
  const [toggle, settoggle] = useState(false);

  const deleteAppointment = async (idx) => {
    setisloading(true);

    const updateUserAppointments = userAppointements.filter(
      (i, id) => id !== idx
    );

    await updateDoc(docref, { Appointments: updateUserAppointments });
    setuserAppointements(updateUserAppointments);
    setisloading(false);
  };

  const copyAppointmentURL = async () => {
    try {
      console.log("clicked");
      const port = window.location.port ? `:${window.location.port}` : "";
      const userURL = new URL(
        `http://${window.location.hostname}${port}/user/${jwt}`
      );
      console.log(userURL.href);
      await navigator.clipboard.writeText(userURL.href);
      console.log("textCopied");
      setcopy("Copied");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="bg-zinc-900 p-5 my-6 border-[1.2px] rounded-md  border-zinc-800 lg:ml-96 w-[95vw] sm:w-[60vw] mx-auto lg:mx-0 overflow-y-scroll h-[80vh]  z-50">
        {isloading ? <Loader /> : null}
        <div className="flex items-center justify-between px-1.5 md:px-5">
          <h1 className="text-sm font-semibold md:text-2xl text-slate-300">
            Your Appotiments
          </h1>
          <button
            onClick={() => {
              copyAppointmentURL();
            }}
            className="text-xs px-5 text-white border-[1px] rounded-full border-[#6746ed] font-semibold py-2.5 hover:bg-[#6746ed] ease-in-out duration-300"
          >
            {copy}
          </button>
        </div>

        <table>
          <thead className="divide-y-2">
            <tr className="text-slate-300">
              <th className="pt-10 text-xs lg:pl-3">Slotes</th>
              <th className="pt-10 pl-5 text-xs lg:pl-28 lg:text-sm">
                StartTime
              </th>
              <th className="pt-10 pl-8 text-xs lg:pl-24 lg:text-sm">
                EndTime
              </th>
              <th className="pt-10 pl-5 text-xs lg:pl-28 lg:text-sm">date</th>
              <th className="pt-10 pl-5 text-xs lg:pl-28 lg:text-sm">Link</th>
              <th className="pt-10 pl-5 text-xs lg:pl-28 lg:text-sm">Delete</th>
            </tr>
          </thead>
          {userAppointements.map((i, index) => {
            return (
              <React.Fragment key={index}>
                <tbody className=" text-slate-300">
                  <th className="pt-10 lg:pl-3">
                    <h1
                      className="text-xs cursor-pointer"
                      onClick={() => {
                        setuserEmails(i.emails);
                        settoggle(true);
                      }}
                    >
                      {i.emails?.length || i.Slots}
                    </h1>
                  </th>
                  <th className="pt-10 pl-5 lg:pl-28 lg:text-sm">
                    <p className="text-xs cursor-pointer">
                      {i.StartTime + i.StartPeriod}
                    </p>
                  </th>
                  <th className="pt-10 pl-5 lg:pl-28 lg:text-sm">
                    <p className="text-xs cursor-pointer">
                      {i.EndTime + i.EndPeriod}
                    </p>
                  </th>
                  <th className="pt-10 pl-5 lg:pl-28 lg:text-sm">
                    <p className="text-xs cursor-pointer">{i.date}</p>
                  </th>
                  <th className="pt-10 pl-5 lg:pl-28 lg:text-sm">
                    <Link to={i.Link}>
                      <p className="text-xs cursor-pointer">{"join"}</p>
                    </Link>
                  </th>
                  <th className="pt-10 pl-5 lg:pl-28 lg:text-sm">
                    <p
                      className="text-xs text-red-500 cursor-pointer"
                      onClick={() => {
                        deleteAppointment(index);
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
      {toggle ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center h-full bg-opacity-75 backdrop-blur-md">
            <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ">
              <div className="bg-[#0b0d12] p-5 rounded-lg w-[85vw] md:w-[50vw] lg:w-[30vw]">
                <h1>Users</h1>
                <ul>
                  {userEmails?.map((i) => {
                    return (
                      <>
                        <li className="text-sm text-white">{i}</li>
                      </>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
