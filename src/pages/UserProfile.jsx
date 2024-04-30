import React from "react";
import { AppotimentsBoard, SideBar } from "../components";

export default function UserProfile() {
  return (
    <div className="items-start gap-x-20 md:flex">
      <SideBar />
      <AppotimentsBoard />
    </div>
  );
}
