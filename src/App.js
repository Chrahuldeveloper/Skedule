import React from "react";
import { LandingPage } from "./pages/index";
import { Route, Routes } from "react-router-dom";
import "./App.css";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
}
