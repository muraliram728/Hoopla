// src/routes/AppRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/pages/Home";
import Flight from "../components/forms/FlightForm";
import TrainAndBusForm from "../components/forms/TrainAndBusForm";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/flight" element={<Flight />} />
      <Route path="/trainandbus" element={<TrainAndBusForm />} />
    </Routes>
  );
}

