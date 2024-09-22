import { doc, updateDoc, getDoc } from "firebase/firestore";
import React, { useMemo, useState, useEffect } from "react";
import { db } from "../../Firebase";
import Loader from "../Loader";
import { Link } from "react-router-dom";
import Analystics from "../Analystics";
import NotificationsBoard from "./NotificationsBoard";
import { RxCross2 } from "react-icons/rx";

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
  const [totalAppointments, setTotalAppointments] = useState(0);
  const [deletedAppointments, setDeletedAppointments] = useState(0);

  useEffect(() => {
    const fetchAppointmentCounts = async () => {
      try {
        const userDoc = await getDoc(docref);
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setTotalAppointments(userData.totalAppointments || 0);
          setDeletedAppointments(userData.deletedAppointments || 0);
        }
      } catch (error) {
        console.log("Error fetching appointment counts:", error);
      }
    };
    fetchAppointmentCounts();
  }, [docref]);

  const deleteAppointment = async (idx) => {
    setisloading(true);

    const updateUserAppointments = userAppointements.filter(
      (i, id) => id !== idx
    );

    await updateDoc(docref, {
      Appointments: updateUserAppointments,
      totalAppointments: totalAppointments,
      deletedAppointments: deletedAppointments + 1,
    });

    setuserAppointements(updateUserAppointments);
    setDeletedAppointments(deletedAppointments + 1);
    setisloading(false);
  };

  const copyAppointmentURL = async () => {
    try {
      const port = window.location.port ? `:${window.location.port}` : "";
      const userURL = new URL(
        `http://${window.location.hostname}${port}/user/${jwt}`
      );
      await navigator.clipboard.writeText(userURL.href);
      setcopy("Copied");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const updateTotalAppointments = async () => {
      try {
        await updateDoc(docref, {
          totalAppointments: userAppointements.length,
        });
        setTotalAppointments(userAppointements.length);
      } catch (error) {
        console.log("Error updating total appointments:", error);
      }
    };

    updateTotalAppointments();
  }, [userAppointements, docref]);



  return (
    <div className="flex flex-col 50 ">
      <Analystics totalAppointments={totalAppointments} deletedAppointments={deletedAppointments}/>
      <div className="bg-[#111111] p-5 my-6 border-[1.2px] rounded-md  border-zinc-900 lg:ml-96 w-[95vw] sm:w-[60vw] mx-auto lg:mx-0 overflow-y-scroll h-[80vh] ">
        {isloading ? <Loader /> : null}
        <div className="flex items-center justify-between px-1.5 md:px-5">
          <h1 className="text-sm font-semibold md:text-2xl text-slate-300">
            Your Appointments
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
              <th className="pt-10 text-xs lg:pl-3">Slots</th>
              <th className="pt-10 pl-5 text-xs lg:pl-28 lg:text-sm">
                StartTime
              </th>
              <th className="pt-10 pl-8 text-xs lg:pl-24 lg:text-sm">
                EndTime
              </th>
              <th className="pt-10 pl-5 text-xs lg:pl-28 lg:text-sm">Date</th>
              <th className="pt-10 pl-5 text-xs lg:pl-28 lg:text-sm">Link</th>
              <th className="pt-10 pl-5 text-xs lg:pl-28 lg:text-sm">Cancel</th>
              <th className="pt-10 pl-5 text-xs lg:pl-28 lg:text-sm"></th>
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
                      Cancel
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
          <div className="fixed inset-0 z-50 flex items-center justify-center w-screen h-full bg-opacity-75 backdrop-blur-xl">
            <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ">
              <div className="bg-[#111111] p-5 rounded-lg w-[85vw] md:w-[50vw] lg:w-[30vw] border-[1px] border-stone-900">
                <div className="flex justify-end">
                  <RxCross2
                    size={23}
                    color={"white"}
                    cursor={"pointer"}
                    onClick={() => {
                      settoggle(false);
                    }}
                  />
                </div>
                <h1 className="text-xl font-bold text-slate-300">Users</h1>
                <ul className="my-4 space-y-3">
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

      <NotificationsBoard jwt={jwt} />
    </div>
  );
}
