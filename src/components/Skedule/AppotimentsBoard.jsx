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
              <th className="pt-10 pl-5 lg:pl-24">User</th>
              <th className="pt-10 pl-5 lg:pl-24">Date</th>
              <th className="pt-10 pl-5 lg:pl-24">Time</th>
              <th className="pt-10 pl-5 lg:pl-24">Day</th>
              <th className="pt-10 pl-5 lg:pl-24">Delete</th>
            </tr>
          </thead>

          <tbody className="border-b-[1px] ">
            <th className="pt-10 pl-2 lg:pl-4">
              <img
                className="w-10 h-10 rounded-full"
                src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg"
                alt=""
              />
            </th>
            <th className="pt-10 pl-5 lg:pl-16">
              <h1>Rahul</h1>
            </th>
            <th className="pt-10 pl-5 lg:pl-24">
              <p>20/5/2024</p>
            </th>
            <th className="pt-10 pl-5 lg:pl-24">
              <p>8:30</p>
            </th>
            <th className="pt-10 pl-5 lg:pl-24">
              <p>Monday</p>
            </th>
            <th className="pt-10 pl-5 lg:pl-24">
              <p>Delete</p>
            </th>
          </tbody>
        </table>
      </div>
    </>
  );
}
