import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { db } from "../../Firebase";
import { useCallback } from "react";

export default function NotificationsBoard({ jwt }) {
  const [userNotifications, setuserNotifications] = useState([]);

  const getNotifications = useCallback(async () => {
    try {
      const docref = doc(db, "USERS", jwt);
      const UserData = await getDoc(docref);
      console.log(UserData.data().Notification || []);
      setuserNotifications(UserData.data().Notification || []);
    } catch (error) {
      console.log(error);
    }
  }, [jwt]);

  useEffect(() => {
    getNotifications();
  }, [getNotifications]);

  return (
    <>
      <div className="bg-zinc-900 p-5 my-6 border-[1px] rounded-md  border-zinc-800 lg:ml-96 w-[95vw] sm:w-[60vw] mx-auto lg:mx-0 overflow-y-scroll h-[80vh] z-50 ">
        <div>
          <h1 className="text-2xl font-semibold text-slate-300">
            Your Notifications
          </h1>
        </div>
        {userNotifications?.map((item, i) => {
          return (
            <>
              <div className="px-5 space-y-5 my-7">
                <div className=" border-[0.9px] p-6 max-w-3xl  cursor-pointer rounded-lg flex items-center justify-between border-zinc-800">
                  <div className="space-y-2">
                    <h1 className="text-lg font-semibold text-slate-300">
                      {item.Name}
                    </h1>
                    <p className="max-w-xs text-sm text-slate-300">
                      {item.Para}
                    </p>
                  </div>
                  <AiOutlineDelete color="red" size="26" />
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
