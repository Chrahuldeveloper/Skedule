import React, { useState, useEffect } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import {
  getDoc,
  doc,
} from "firebase/firestore";
import { db } from "../Firebase";

const UserCalendar = ({ page, userId }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAppointments = async () => {
      if (!userId) return;
      setLoading(true);
      try {
        const docRef = doc(db, "USERS", userId);
        const userData = await getDoc(docRef);
        const data = userData.data();
        console.log(data);
      } catch (error) {
        console.error("Error fetching appointments: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, [userId]);

  const scheduledDates = new Set(appointments.map((appoint) => appoint.date));

  const daysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getMonthData = () => {
    const monthStart = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    );
    const monthEnd = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      daysInMonth(currentDate)
    );
    const startDate = new Date(monthStart);
    const endDate = new Date(monthEnd);
    const data = [];

    const startingDay = startDate.getDay();

    for (let i = 0; i < startingDay; i++) {
      data.push(null);
    }

    while (startDate <= endDate) {
      data.push(new Date(startDate));
      startDate.setDate(startDate.getDate() + 1);
    }

    return data;
  };

  const goToPrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
    setSelectedDate(null);
  };

  const goToNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
    setSelectedDate(null);
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const formatDate = (date) => {
    return `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
  };

  return (
    <div
      className={`bg-zinc-900 px-6 border-[1px] border-zinc-800 max-w-sm shadow-md mx-auto rounded-md ${
        page === "user" ? "my-0" : "my-10"
      } py-6 z-50`}
    >
      <div className="flex items-center justify-between px-2">
        <h1 className="text-xl font-bold text-slate-300">
          {currentDate.toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </h1>
        <div className="flex items-center gap-1">
          <FaAngleLeft
            className="px-3 rounded-full py-1.5 cursor-pointer hover:bg-violet-600 hover:fill-[#cbd5e1]"
            size={33}
            onClick={goToPrevMonth}
            color="#cbd5e1"
          />
          <FaAngleRight
            className="px-3 rounded-full py-1.5 cursor-pointer hover:bg-violet-600 hover:fill-[#cbd5e1]"
            size={33}
            onClick={goToNextMonth}
            color="#cbd5e1"
          />
        </div>
      </div>
      <div>
        <ul className="flex items-center gap-5 mx-3 mt-5 text-slate-300">
          <li className="font-semibold">Sun</li>
          <li className="font-semibold">Mon</li>
          <li className="font-semibold">Tue</li>
          <li className="font-semibold">Wed</li>
          <li className="font-semibold">Thu</li>
          <li className="font-semibold">Fri</li>
          <li className="font-semibold">Sat</li>
        </ul>
      </div>
      <div className="grid justify-center grid-cols-7 my-4 place-items-center">
        {loading ? (
          <p>Loading...</p>
        ) : (
          getMonthData().map((date, index) => {
            const isScheduled = date && scheduledDates.has(formatDate(date));
            return (
              <p
                key={index}
                className={`px-3 py-2 my-1.5 text-xs rounded-full cursor-pointer text-slate-300 ${
                  date && date.getMonth() === currentDate.getMonth()
                    ? date.getDate() === selectedDate?.getDate() &&
                      date.getMonth() === selectedDate?.getMonth() &&
                      date.getFullYear() === selectedDate?.getFullYear()
                      ? "bg-violet-500 text-white"
                      : date.getDate() === new Date().getDate() &&
                        date.getMonth() === new Date().getMonth() &&
                        date.getFullYear() === new Date().getFullYear()
                      ? "bg-violet-500 text-white"
                      : isScheduled
                      ? "bg-violet-500 text-white rounded-full"
                      : ""
                    : "opacity-0"
                }`}
                onClick={() => {
                  if (date) {
                    handleDateClick(date);
                  }
                }}
              >
                {date ? date.getDate() : ""}
              </p>
            );
          })
        )}
      </div>
    </div>
  );
};

export default UserCalendar;
