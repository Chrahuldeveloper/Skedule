import React from "react";
import { LandingPage } from "./pages/index";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
export default function App() {
  AOS.init();

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
}
