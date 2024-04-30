import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

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
    <div className="bg-white px-6 border-[1px] border-gray+-200 max-w-sm shadow-md shadow-slate-50 mx-auto rounded-md my-16 py-6">
      <div className="flex items-center justify-between px-2">
        <h1 className="text-xl font-bold text-slate-800">
          {currentDate.toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </h1>
        <div className="flex items-center gap-1">
          <FaAngleLeft
            className="px-3 rounded-full py-1.5 cursor-pointer hover:bg-blue-500 hover:fill-white"
            size={33}
            onClick={goToPrevMonth}
          />
          <FaAngleRight
            className="px-3 rounded-full py-1.5 cursor-pointer hover:bg-blue-500 hover:fill-white"
            size={33}
            onClick={goToNextMonth}
          />
        </div>
      </div>
      <div className="border-b-[1px] mt-5 border-blue-200"></div>
      <div>
        <ul className="flex items-center gap-5 mx-3 mt-5">
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
            className={`px-5 py-3 rounded-full cursor-pointer ${
              date && date.getMonth() === currentDate.getMonth()
                ? date.getDate() === selectedDate?.getDate() &&
                  date.getMonth() === selectedDate?.getMonth() &&
                  date.getFullYear() === selectedDate?.getFullYear()
                  ? "bg-blue-500 text-white"
                  : ""
                : "opacity-0"
            }`}
            onClick={() => handleDateClick(date)}
          >
            {date ? date.getDate() : ""}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
