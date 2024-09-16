import { doc, getDoc, updateDoc } from "firebase/firestore";
import React, { useEffect, useMemo, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { db } from "../../Firebase";
import { useCallback } from "react";
import { Loader } from "../index";
import logo from "../../images/logo192.png";
export default function NotificationsBoard({ jwt }) {
  const [userNotifications, setuserNotifications] = useState([
    {
      Name: "Welcome",
      Para: "welcome to skedule",
    },
  ]);

  const docref = useMemo(() => doc(db, "USERS", jwt), [jwt]);

  const [isloading, setisloading] = useState(false);

  const getNotifications = useCallback(async () => {
    try {
      setisloading(true);
      const UserData = await getDoc(docref);
      setuserNotifications(UserData.data().Notifications || []);
      setisloading(false);
    } catch (error) {
      console.log(error);
      setisloading(false);
    }
  }, [docref]);

  useEffect(() => {
    getNotifications();
  }, [getNotifications]);

  const deleteitem = async (id) => {
    try {
      setisloading(true);
      const updateUserNotifications = userNotifications.filter(
        (i, idx) => idx !== id
      );
      await updateDoc(docref, { Notifications: updateUserNotifications });
      setuserNotifications(updateUserNotifications);
      setisloading(false);
    } catch (error) {
      console.log(error);
      setisloading(false);
    }
  };

  return (
    <>
      <div className="bg-[#111111] my-6  py-5 border-[1px] rounded-md  border-zinc-900 lg:ml-96 w-[95vw] sm:w-[60vw] mx-auto lg:mx-0 overflow-y-scroll h-[80vh]  ">
        {isloading ? <Loader /> : null}
        <div className="px-1.5 md:px-5 py-1">
          <h1 className="px-4 text-sm font-semibold md:text-2xl text-slate-300">
            Your Notifications
          </h1>
        </div>
        {userNotifications?.map((item, i) => {
          return (
            <>
              <div className="w-full px-3 space-y-5 my-7">
                <div className="  border-[1px] py-8 px-5 md:px-5 cursor-pointer rounded-lg flex items-center justify-between border-zinc-900">
                  <div className="flex gap-3">
                    <img src={logo} alt="" className="w-10 h-10" />
                    <div className="space-y-2.5">
                      <h1 className="text-lg font-semibold text-slate-300">
                        {item.Name}
                      </h1>
                      <p className="text-sm w-52 text-slate-300">{item.Para}</p>
                    </div>
                  </div>
                  <AiOutlineDelete
                    onClick={() => {
                      deleteitem(i);
                    }}
                    color="red"
                    size="25"
                  />
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
