import React, { useState } from "react";
import "./Style.css";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import PageBack from "../PageBackBox/PageBack";

export default function FlightTicketForm() {
  const today = new Date().toISOString().split("T")[0];

  const initialForm = {
    tripType: "oneway",
    from: "",
    to: "",
    departDate: "",
    returnDate: "",
    travelClass: "economy",
    passengers: 1,
    fullName: "",
    email: "",
    phone: "",
    seatPref: "any",
    specialReq: "",
    paymentMethod: "card",
  };

  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [alert, setAlert] = useState({ open: false, message: "", type: "success" });

  function handleChange(e) {
    const { name, value, type } = e.target;
    setForm((s) => ({ ...s, [name]: type === "number" ? Number(value) : value }));
  }

  function validate() {
    const err = {};
    if (!form.from) err.from = "Origin is required";
    if (!form.to) err.to = "Destination is required";
    if (!form.departDate) err.departDate = "Departure date is required";
    if (form.tripType === "roundtrip" && !form.returnDate)
      err.returnDate = "Return date is required for round trips";
    if (form.returnDate && form.departDate && form.returnDate < form.departDate)
      err.returnDate = "Return date cannot be before departure";
    if (!form.fullName) err.fullName = "Passenger name is required";
    if (!form.email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
      err.email = "Valid email required";
    if (!form.phone || !/^[0-9+\-() ]{6,20}$/.test(form.phone))
      err.phone = "Valid phone required";
    if (form.passengers < 1) err.passengers = "At least one passenger";
    return err;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setAlert({ open: true, type: "success", message: "Processing..." });
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length > 0) {
      setAlert({ open: true, message: "Please fix the errors in the form", type: "error" });
      return;
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "98d3d542-a92c-47e9-a739-362b5b7b2165",
          subject: "New Flight Ticket Booking",
          from_name: form.fullName,
          from_email: form.email,
          message: `
            Name: ${form.fullName}
            Phone: ${form.phone}
            Email: ${form.email}
            Trip Type: ${form.tripType}
            From: ${form.from}
            To: ${form.to}
            Departure: ${form.departDate}
            Return: ${form.returnDate}
            Class: ${form.travelClass}
            Passengers: ${form.passengers}
            Seat Preference: ${form.seatPref}
            Special Requests: ${form.specialReq}
          `,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setAlert({ open: true, message: "Ticket request sent successfully!", type: "success" });
        setForm(initialForm);
        setErrors({});
      } else {
        setAlert({ open: true, message: "Error: " + (data.message || "Something went wrong."), type: "error" });
      }
    } catch (error) {
      setAlert({ open: true, message: "Submission failed: " + error.message, type: "error" });
    }
  }

  const handleCloseAlert = () => {
    setAlert((prev) => ({ ...prev, open: false }));
  };

    const navigationData = [
    { label: "Flight Ticket Booking", to: "/flight" },
    { label: "Home", to: "/" },
    { label: "Flight Ticket Booking", to: "/flight" },
  ];

  return (
    <div style={{ marginTop: "75px" }}>
      <PageBack navigationData={navigationData} />
    <div className="form-container">
      {/* <h2 className="form-title">Flight Ticket Booking</h2> */}

      <form onSubmit={handleSubmit} className="form">
        {/* Trip Type */}
        <div className="trip-type">
          <label>
            <input
              type="radio"
              name="tripType"
              value="oneway"
              checked={form.tripType === "oneway"}
              onChange={handleChange}
            />
            One-way
          </label>
          <label>
            <input
              type="radio"
              name="tripType"
              value="roundtrip"
              checked={form.tripType === "roundtrip"}
              onChange={handleChange}
            />
            Round-trip
          </label>
        </div>

        {/* Flight Details */}
        <div className="grid">
          <div>
            <label>From</label>
            <input name="from" value={form.from} onChange={handleChange} placeholder="City or airport" />
            {errors.from && <p className="error">{errors.from}</p>}
          </div>
          <div>
            <label>To</label>
            <input name="to" value={form.to} onChange={handleChange} placeholder="City or airport" />
            {errors.to && <p className="error">{errors.to}</p>}
          </div>
          <div>
            <label>Departure</label>
            <input name="departDate" type="date" min={today} value={form.departDate} onChange={handleChange} />
            {errors.departDate && <p className="error">{errors.departDate}</p>}
          </div>
          <div>
            <label>Return</label>
            <input
              name="returnDate"
              type="date"
              min={form.departDate || today}
              value={form.returnDate}
              onChange={handleChange}
              disabled={form.tripType === "oneway"}
            />
            {errors.returnDate && <p className="error">{errors.returnDate}</p>}
          </div>
          <div>
            <label>Class</label>
            <select name="travelClass" value={form.travelClass} onChange={handleChange}>
              <option value="economy">Economy</option>
              <option value="premium">Premium Economy</option>
              <option value="business">Business</option>
              <option value="first">First</option>
            </select>
          </div>
          <div>
            <label>Passengers</label>
            <input name="passengers" type="number" min={1} value={form.passengers} onChange={handleChange} />
            {errors.passengers && <p className="error">{errors.passengers}</p>}
          </div>
        </div>

        <hr />

        {/* Passenger Info */}
        <div className="grid">
          <div>
            <label>Full Name</label>
            <input name="fullName" value={form.fullName} onChange={handleChange} placeholder="As on passport/ID" />
            {errors.fullName && <p className="error">{errors.fullName}</p>}
          </div>
          <div>
            <label>Email</label>
            <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@example.com" />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div>
            <label>Phone</label>
            <input name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" />
            {errors.phone && <p className="error">{errors.phone}</p>}
          </div>
          <div>
            <label>Seat preference</label>
            <select name="seatPref" value={form.seatPref} onChange={handleChange}>
              <option value="any">Any</option>
              <option value="window">Window</option>
              <option value="aisle">Aisle</option>
              <option value="middle">Middle</option>
            </select>
          </div>
        </div>

        <div>
          <label>Special requests</label>
          <textarea
            name="specialReq"
            value={form.specialReq}
            onChange={handleChange}
            rows={3}
            placeholder="Meal preference, wheelchair assistance, etc."
          />
        </div>

        {/* Buttons */}
        <div className="actions">
          <button type="submit" className="btn-primary">Submit</button>
          <button type="button" onClick={() => setForm(initialForm)} className="btn-secondary">Cancel</button>
        </div>
      </form>

      {/* Snackbar Alert */}
      <Snackbar
        open={alert.open}
        autoHideDuration={3000}
        onClose={handleCloseAlert}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert onClose={handleCloseAlert} severity={alert.type} sx={{ width: "100%" }}>
          {alert.message}
        </Alert>
      </Snackbar>
    </div>
    </div>
  );
}
