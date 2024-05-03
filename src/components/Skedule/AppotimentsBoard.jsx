import React from "react";

export default function AppotimentsBoard() {
  return (
    <>
      <div className="bg-white p-5 my-6 border-[1px] rounded-md shadow-md shadow-slate-200 border-gray-100 lg:ml-96 w-[95vw] sm:w-[60vw] mx-auto lg:mx-0 overflow-y-scroll h-[80vh]  ">
        <div>
          <h1 className="text-2xl font-semibold text-slate-800">
            Your Appotiments
          </h1>
        </div>

        <table className="">
          <thead className="">
            <tr className="">
              <th className="pt-10 pl-2 lg:pl-4">Pic</th>
              <th className="pt-10 pl-10 lg:pl-32">User</th>
              <th className="pt-10 pl-8 lg:pl-32">Date</th>
              <th className="pt-10 pl-10 lg:pl-32">Time</th>
              <th className="pt-10 pl-10 lg:pl-32">Day</th>
              <th className="pt-10 pl-10 lg:pl-32">Day</th>
            </tr>
          </thead>

          <tbody className="border-b-[1px] ">
            <th className="pt-10 pl-2 lg:pl-4">Pic</th>
            <th className="pt-10 pl-10 lg:pl-32">User</th>
            <th className="pt-10 pl-8 lg:pl-32">Date</th>
            <th className="pt-10 pl-10 lg:pl-32">Time</th>
            <th className="pt-10 pl-10 lg:pl-32">Day</th>
            <th className="pt-10 pl-10 lg:pl-32">Day</th>
          </tbody>
        </table>
      </div>
    </>
  );
}
