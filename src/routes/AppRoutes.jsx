// src/routes/AppRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/pages/Home";
import Flight from "../components/forms/FlightForm";
import TrainAndBusForm from "../components/forms/TrainAndBusForm";
import HotelBookingForm from "../components/forms/HotelBookingForm";
import MoneyExchangeForm from "../components/forms/MoneyExchangeForm";
import VisaServiceForm from "../components/forms/VisaServiceForm";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/flight" element={<Flight />} />
      <Route path="/trainandbus" element={<TrainAndBusForm />} />
      <Route path="/hotel" element={<HotelBookingForm />} />
      <Route path="/moneyexchange" element={<MoneyExchangeForm />} />
      <Route path="/visaservice" element={<VisaServiceForm />} />
    </Routes>
  );
}

