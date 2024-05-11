import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const Calendar = ({ user, setispopup }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const jwt = sessionStorage.getItem("jwt");

  const appointmentURL = (jwt, user) => {
    const userURL = new URL(
      `https://${window.location.hostname}/${jwt}/${user}`
    );
    console.log(userURL.href);
  };

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

  return (
    <div className="bg-zinc-900 px-6 border-[1px] border-zinc-800 max-w-sm shadow-md mx-auto rounded-md my-16 py-6 z-50">
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
        {getMonthData().map((date, index) => (
          <p
            key={index}
            className={`px-3 py-2 rounded-full cursor-pointer text-slate-300 ${
              date && date.getMonth() === currentDate.getMonth()
                ? date.getDate() === selectedDate?.getDate() &&
                  date.getMonth() === selectedDate?.getMonth() &&
                  date.getFullYear() === selectedDate?.getFullYear()
                  ? ""
                  : date.getDate() === new Date().getDate() &&
                    date.getMonth() === new Date().getMonth() &&
                    date.getFullYear() === new Date().getFullYear()
                  ? "bg-violet-500 text-white"
                  : ""
                : "opacity-0"
            }`}
            onClick={() => {
              handleDateClick(date);
              appointmentURL(jwt, user.Name);
              setispopup(true);
            }}
          >
            {date ? date.getDate() : ""}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
