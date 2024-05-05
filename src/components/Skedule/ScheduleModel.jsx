import React from "react";
import { RxCross2 } from "react-icons/rx";

export default function schedule({ setispopup }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center h-full bg-black bg-opacity-75 backdrop-blur-md">
      <div className="p-5 bg-white rounded-md w-[90vw] h-[50vh] ">
        <div className="flex justify-end">
          <RxCross2
            size={30}
            onClick={() => {
              setispopup(false);
            }}
            cursor={"pointer"}
          />
        </div>
      </div>
    </div>
  );
}
