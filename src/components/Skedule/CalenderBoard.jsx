import React, { useCallback, useEffect, useState } from "react";
import Calendar from "./Calender";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../Firebase";
import { Loader, ScheduleModel } from "..";

export default function CalenderBoard() {
  const [isloading, setisloading] = useState(false);
  const [user, setuser] = useState();
  const jwt = sessionStorage.getItem("jwt");

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

  const [ispopup, setispopup] = useState();

  const [day, setday] = useState({
    Day: "",
    date: "",
  });

  console.log(day);

  return (
    <>
      {isloading ? <Loader /> : null}
      {ispopup ? (
        <ScheduleModel setispopup={setispopup} setday={setday} />
      ) : (
        <Calendar
          user={user}
          setispopup={setispopup}
          day={day}
          setday={setday}
        />
      )}
    </>
  );
}
