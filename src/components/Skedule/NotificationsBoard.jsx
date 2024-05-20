import { doc, getDoc, updateDoc } from "firebase/firestore";
import React, { useEffect, useMemo, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { db } from "../../Firebase";
import { useCallback } from "react";
import { Loader } from "../index";
export default function NotificationsBoard({ jwt }) {
  const [userNotifications, setuserNotifications] = useState([]);
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
      <div className="bg-zinc-900 my-6  py-5 border-[1px] rounded-md  border-zinc-800 lg:ml-96 w-[95vw] sm:w-[60vw] mx-auto lg:mx-0 overflow-y-scroll h-[80vh] z-50 ">
        {isloading ? <Loader /> : null}
        <div>
          <h1 className="px-4 text-2xl font-semibold text-slate-300">
            Your Notifications
          </h1>
        </div>
        {userNotifications?.map((item, i) => {
          return (
            <>
              <div className="w-full px-3 space-y-5 my-7">
                <div className="  border-[0.9px] py-6 px-3.5 cursor-pointer rounded-lg flex items-center justify-between border-zinc-800">
                  <div className="space-y-2.5">
                    <h1 className="text-sm font-semibold text-slate-300">
                      {item.Name}
                    </h1>
                    <p className="text-xs w-52 text-slate-300">{item.Para}</p>
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
