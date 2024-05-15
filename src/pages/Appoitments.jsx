import React, { useCallback, useEffect, useState } from "react";
import { db, auth } from "../Firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Circle, Bar } from "../components/index";
export default function Appoitments() {
  const [userAppointements, setuserAppointements] = useState([]);
  const jwt = sessionStorage.getItem("jwt");
  const [isloading, setisloading] = useState(false);
  const [user, setuser] = useState({
    Pic: "",
    Name: "",
    Bio: "",
  });
  const provider = new GoogleAuthProvider();

  const getUserAppointments = useCallback(async () => {
    if (!jwt) return;
    try {
      setisloading(true);
      const docRef = doc(db, "USERS", jwt);
      const userData = await getDoc(docRef);
      const data = userData.data();
      setuserAppointements(data?.Appointments || []);
      setuser({
        Pic: data?.photo,
        Name: data?.Name,
        Bio: data?.Bio,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setisloading(false);
    }
  }, [jwt]);

  useEffect(() => {
    getUserAppointments();
  }, [getUserAppointments]);

  const GoogleRegister = async (index) => {
    try {
      const res = await signInWithPopup(auth, provider);
      const user = res.user;
      const docRef = doc(db, "USERS", jwt);
      const docSnap = await getDoc(docRef);
      const userData = docSnap.data();
      const appointments = userData.Appointments || [];
      const filteredAppointment = await appointments.find(
        (itm, i) => i === index
      );
      filteredAppointment.emails = [
        ...(filteredAppointment.emails || []),
        user.email,
      ];
      await updateDoc(docRef, { Appointments: appointments });
    } catch (error) {
      console.log(error);
    }
  };

  console.log(user);

  return (
    <div className="w-screen h-screen bg-[#08090d] overflow-y-scroll">
      <div className="px-3 py-8">
        <div className="p-6  border-[1px] border-zinc-800 bg-zinc-900  mx-auto rounded-md max-w-xl">
          <div className="flex flex-col items-center space-y-2.5 text-slate-300">
            {isloading ? (
              <Circle />
            ) : (
              <img
                src={user?.Pic}
                className="object-cover duration-300 ease-in-out rounded-full cursor-pointer h-32 w-32 hover:brightness-75 border-[1px] border-zinc-800"
                alt=""
              />
            )}
            {isloading ? (
              <Bar width={28} />
            ) : (
              <h1 className="text-lg font-bold">{user?.Name}</h1>
            )}
            {isloading ? (
              <Bar width={36} />
            ) : (
              <p className="max-w-xs text-xs text-center">{user?.Bio}</p>
            )}
          </div>

              {
                [1,2,3,4,5].map((i)=>{
                  return (
                    <>
                      
                    </>
                  )
                })
              }       
         
          {userAppointements.map((i, idx) => {
            return (
              <React.Fragment key={idx}>
                <div className="flex items-center justify-center gap-10 my-9 border-b-[1px] border-zinc-700">
                  <div className="flex flex-col items-center justify-center gap-2.5 text-slate-300">
                    <h1 className="text-xs">{i.date}</h1>
                    <p className="text-sm">{i.day}</p>
                  </div>
                  <div className="duration-300 ease-in-out rounded-full bg-violet-300 hover:brightness-75">
                    <h1 className="px-2 py-2 text-xs font-semibold cursor-pointer text-violet-800">
                      {i.StartTime} - {i.EndTime}
                    </h1>
                  </div>
                  <div>
                    <h1 className=" text-xs font-semibold cursor-pointer text-violet-200">
                      {i.Slots === i.emails ? "Not Available" : "Available"}
                    </h1>
                  </div>
                  <div
                    onClick={() => {
                      GoogleRegister(idx);
                    }}
                    className="duration-300 ease-in-out bg-purple-500 rounded-full hover:brightness-75"
                  >
                    <p className="py-2 text-xs font-semibold text-white cursor-pointer px-5">
                      Book
                    </p>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}
