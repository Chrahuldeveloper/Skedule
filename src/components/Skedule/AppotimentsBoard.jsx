import React from "react";

export default function AppotimentsBoard() {
  return (
    <div className="bg-white p-6 border-[1px] m-5 rounded-md shadow-md shadow-slate-200 border-gray-100">
      <div>
        <h1 className="text-2xl font-semibold text-slate-800">
          Your Appotiments
        </h1>
      </div>
      <div className="my-7">
        <div className="flex gap-10">
          <h1 className="font-semibold text-md text-slate-800">User</h1>
          <h1 className="font-semibold text-md text-slate-800">Name</h1>
          <p className="font-semibold text-md text-slate-800">Date</p>
          <p className="font-semibold text-md text-slate-800">Time</p>
        </div>
        <div className="flex items-center gap-6 mt-5 border-b-[1px]  py-2">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=300"
            className="object-cover rounded-full h-14 w-14"
            alt=""
          />
          <h1>Rahul</h1>
          <p>20</p>
          <p>5:30</p>
        </div>
        <div className="flex items-center gap-6 mt-5 border-b-[1px]  py-2">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=300"
            className="object-cover rounded-full h-14 w-14"
            alt=""
          />
          <h1>Rahul</h1>
          <p>20</p>
          <p>5:30</p>
        </div>
        <div className="flex items-center gap-6 mt-5 border-b-[1px]  py-2">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=300"
            className="object-cover rounded-full h-14 w-14"
            alt=""
          />
          <h1>Rahul</h1>
          <p>20</p>
          <p>5:30</p>
        </div>
        <div className="flex items-center gap-6 mt-5 border-b-[1px]  py-2">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=300"
            className="object-cover rounded-full h-14 w-14"
            alt=""
          />
          <h1>Rahul</h1>
          <p>20</p>
          <p>5:30</p>
        </div>
      </div>
    </div>
  );
}
