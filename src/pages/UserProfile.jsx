import React, { useCallback, useEffect, useState } from "react";
import {
  AppotimentsBoard,
  Loader,
  NotificationsBoard,
  SideBar,
} from "../components";
import { CiMenuFries } from "react-icons/ci";
import { Editimage } from "../components/index";
import { IoNotificationsOutline } from "react-icons/io5";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../Firebase";

export default function UserProfile() {
  const [isshow, setisshow] = useState(false);
  const [isedit, setisedit] = useState(false);
  const [isloading, setisloading] = useState(false);
  const jwt = sessionStorage.getItem("jwt");
  const [notifications, setnotifications] = useState(false);
  const [user, setuser] = useState();

  const fetchUser = useCallback(async () => {
    try {
      setisloading(true);
      const userDoc = await getDoc(doc(db, "USERS", jwt));
      setuser(userDoc.data());
      setisloading(false);
    } catch (error) {
      console.log(error);
    }
  }, [jwt]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);
  return (
    <>
      <div>
        {isloading ? (
          <Loader />
        ) : (
          <>
            <div className="flex items-center justify-between px-10 py-5 lg:flex-none">
              <h1 className="text-xl font-semibold lg:opacity-0">Skedule</h1>
              <div className="flex items-center justify-end gap-6">
                <IoNotificationsOutline
                  onClick={() => {
                    setnotifications(true);
                  }}
                  size={25}
                  cursor={"pointer"}
                />
                <CiMenuFries
                  onClick={() => {
                    setisshow(true);
                  }}
                  size={28}
                  className="cursor-pointer lg:hidden"
                />
                <button className="hidden py-2 text-sm font-semibold text-white duration-300 ease-in bg-blue-600 rounded-md cursor-pointer md:block px-9 hover:brightness-90">
                  Logout
                </button>
              </div>
            </div>
            <div className="items-start md:flex">
              {isshow ? (
                <SideBar
                  setisshow={setisshow}
                  setisedit={setisedit}
                  user={user}
                />
              ) : null}
              {notifications ? <NotificationsBoard /> : <AppotimentsBoard />}
            </div>
          </>
        )}

        {isedit && (
          <Editimage
            setisedit={setisedit}
            user={user}
            setisloading={setisloading}
            setuser={setuser}
          />
        )}
      </div>

      <div className="hidden lg:block">
        <SideBar setisshow={setisshow} setisedit={setisedit} user={user} />
      </div>
    </>
  );
}
