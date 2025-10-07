// src/routes/AppRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/pages/Home";
import Flight from "../components/forms/FlightForm";
import TrainAndBusForm from "../components/forms/TrainAndBusForm";
import ItineraryPage from "../components/pages/ItineraryPage";
import HotelBookingForm from "../components/forms/HotelBookingForm";
import MoneyExchangeForm from "../components/forms/MoneyExchangeForm";
import VisaServiceForm from "../components/forms/VisaServiceForm";
import AboutUs from "../components/pages/About";
import Contact from "../components/pages/contact/Contact";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/flight" element={<Flight />} />
      <Route path="/trainandbus" element={<TrainAndBusForm />} />
      <Route path="/hotel" element={<HotelBookingForm />} />
      <Route path="/moneyexchange" element={<MoneyExchangeForm />} />
      <Route path="/visaservice" element={<VisaServiceForm />} />
      <Route path="/itinerary/:id" element={<ItineraryPage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
