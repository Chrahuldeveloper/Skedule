import React from "react";

export default function AppotimentsBoard() {
  return (
    <>
      <div className="bg-white p-5 my-6 border-[1px] rounded-md shadow-md shadow-slate-200 border-gray-100 lg:ml-96 w-[95vw] sm:w-[60vw] mx-auto lg:mx-0 overflow-y-scroll h-[80vh]  z-50">
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

          {[
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20,
          ].map((i, index) => {
            return (
              <React.Fragment key={index}>
                <tbody className="border-b-[1px] ">
                  <th className="pt-10 pl-2 lg:pl-4">
                    <img
                      className="w-10 h-10 rounded-full cursor-pointer"
                      src="https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg"
                      alt=""
                    />
                  </th>
                  <th className="pt-10 pl-5 lg:pl-24">
                    <h1 className="text-sm cursor-pointer">Rahul</h1>
                  </th>
                  <th className="pt-10 pl-5 lg:pl-24">
                    <p className="text-sm cursor-pointer">20/5/2024</p>
                  </th>
                  <th className="pt-10 pl-5 lg:pl-24">
                    <p className="text-sm cursor-pointer">8:30</p>
                  </th>
                  <th className="pt-10 pl-5 lg:pl-24">
                    <p className="text-sm cursor-pointer">Monday</p>
                  </th>
                  <th className="pt-10 pl-5 lg:pl-24">
                    <p
                      className="text-sm text-red-500 cursor-pointer"
                      onClick={() => {
                        alert("Please enter");
                      }}
                    >
                      Delete
                    </p>
                  </th>
                </tbody>
              </React.Fragment>
            );
          })}
        </table>
      </div>
    </>
  );
}
