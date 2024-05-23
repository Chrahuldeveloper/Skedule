import React, { useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { db, storage } from "../../Firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { doc, updateDoc } from "firebase/firestore";

export default function Editimage({ setisedit, user, setisloading, setuser }) {
  const jwt = localStorage.getItem("jwt");

  const [editdata, seteditdata] = useState({
    photo: user.photo,
    Name: user.Name,
    Bio: user.Bio ? user.Bio : "",
    work: user.work ? user.work : "",
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const imageref = useRef(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);

  const updateDetails = async () => {
    try {
      setisedit(false);
      setisloading(true);
      const docRef = doc(db, "USERS", jwt);
      setuser(editdata);
      await updateDoc(docRef, editdata);
      setisloading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handlechange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      setUploading(true);
      const imageRef = ref(storage, `profileimage/${file.name}`);
      const uploadTask = uploadBytesResumable(imageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          setError(error.message);
          setUploading(false);
        },
        async () => {
          try {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            seteditdata({ ...editdata, photo: downloadURL });
            setUploading(false);
          } catch (error) {
            setError(error.message);
            setUploading(false);
          }
        }
      );
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center h-full bg-black bg-opacity-75 backdrop-blur-md">
      <div className="bg-zinc-900 w-[85vw] md:w-[60vw] lg:w-[40vw] xl:w-[30vw] p-5 rounded-md">
        <div className="flex justify-end ">
          <RxCross2
            onClick={() => {
              setisedit(false);
            }}
            size={25}
            color="#cbd5e1"
            className="cursor-pointer"
          />
        </div>
        <div className="flex flex-col space-y-5">
          <input
            type="file"
            ref={imageref}
            accept="image/*"
            className="hidden "
            onChange={handlechange}
          />

          {selectedImage && (
            <img
              src={selectedImage}
              className="object-cover w-32 h-32 mx-auto rounded-full cursor-pointer border-[1px] border-zinc-800 bgtr"
              alt=""
              onClick={() => {
                imageref.current.click();
              }}
            />
          )}
          {!selectedImage && (
            <img
              src={editdata.photo}
              className="object-cover w-32 h-32 mx-auto rounded-full cursor-pointer"
              alt=""
              onClick={() => {
                imageref.current.click();
              }}
            />
          )}
          <input
            type="text"
            placeholder="Name"
            value={editdata.Name}
            onChange={(e) => {
              seteditdata({ ...editdata, Name: e.target.value });
            }}
            className="border-[1px] border-zinc-800 px-3 py-2.5 outline-none bg-transparent text-slate-300 "
          />
          <input
            type="text"
            placeholder="Profession"
            value={editdata.work}
            onChange={(e) => {
              seteditdata({ ...editdata, work: e.target.value });
            }}
            className="border-[1px] border-zinc-800 px-3 py-2.5 outline-none bg-transparent text-slate-300 "
          />
          <input
            type="text"
            placeholder="Bio"
            value={editdata.Bio}
            onChange={(e) => {
              seteditdata({ ...editdata, Bio: e.target.value });
            }}
            className="border-[1px] border-zinc-800 px-3 py-2.5 outline-none bg-transparent text-slate-300 "
          />
          {error && (
            <p className="text-sm font-semibold text-center text-red-500">
              {error}
            </p>
          )}
          <button
            onClick={updateDetails}
            className="py-3 text-sm font-semibold duration-300 ease-in rounded-full cursor-pointer text-slate-300 bg-violet-600 px-9 hover:brightness-90"
          >
            {uploading ? <p>Uploading...</p> : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
}
