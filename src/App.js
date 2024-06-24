import React from "react";
import {
  Appoitments,
  LandingPage,
  Schedule,
  Signup,
  UserProfile,
} from "./pages/index";
import { Route, Routes } from "react-router-dom";
import "./App.css";
export default function App() {

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/userProfile" element={<UserProfile />} />
      <Route path="/user/:id" element={<Appoitments />} />
    </Routes>
  );
}
