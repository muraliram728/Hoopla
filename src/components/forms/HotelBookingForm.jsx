import React, { useState } from "react";
import "./Style.css";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import PageBack from "../PageBackBox/PageBack";

export default function HotelBookingForm() {
  const today = new Date().toISOString().split("T")[0];

  const initialForm = {
    hotelName: "",
    city: "",
    checkIn: "",
    checkOut: "",
    rooms: 1,
    adults: 1,
    children: 0,
    fullName: "",
    email: "",
    phone: "",
    specialReq: "",
    paymentMethod: "card",
  };

  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [alert, setAlert] = useState({ open: false, message: "", type: "success" });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setForm((s) => ({ ...s, [name]: type === "number" ? Number(value) : value }));
  };

  const validate = () => {
    const err = {};
    if (!form.hotelName) err.hotelName = "Hotel name is required";
    if (!form.city) err.city = "City is required";
    if (!form.checkIn) err.checkIn = "Check-in date is required";
    if (!form.checkOut) err.checkOut = "Check-out date is required";
    if (form.checkOut && form.checkIn && form.checkOut < form.checkIn)
      err.checkOut = "Check-out cannot be before check-in";
    if (form.rooms < 1) err.rooms = "At least one room required";
    if (form.adults < 1) err.adults = "At least one adult required";
    if (!form.fullName) err.fullName = "Full name is required";
    if (!form.email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
      err.email = "Valid email required";
    if (!form.phone || !/^[0-9+\-() ]{6,20}$/.test(form.phone))
      err.phone = "Valid phone required";
    return err;
  };

  const handleSubmit = async (event) => {
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
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "98d3d542-a92c-47e9-a739-362b5b7b2165",
          subject: "New Hotel Booking",
          from_name: form.fullName,
          from_email: form.email,
          message: `
            Name: ${form.fullName}
            Phone: ${form.phone}
            Email: ${form.email}
            Hotel: ${form.hotelName}
            City: ${form.city}
            Check-in: ${form.checkIn}
            Check-out: ${form.checkOut}
            Rooms: ${form.rooms}
            Adults: ${form.adults}
            Children: ${form.children}
            Special Requests: ${form.specialReq}
          `,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setAlert({ open: true, message: "Hotel booking sent successfully!", type: "success" });
        setForm(initialForm);
        setErrors({});
      } else {
        setAlert({ open: true, message: "Error: " + (data.message || "Something went wrong."), type: "error" });
      }
    } catch (error) {
      setAlert({ open: true, message: "Submission failed: " + error.message, type: "error" });
    }
  };

    const navigationData = [
    { label: "Hotel Booking", to: "/hotel" },
    { label: "Home", to: "/" },
    { label: "Hotel Booking", to: "/hotel" },
  ];

  const handleCloseAlert = () => {
    setAlert((prev) => ({ ...prev, open: false }));
  };

  return (
    <div style={{ marginTop: "75px" }}>
          <PageBack navigationData={navigationData} />
    <div className="form-container">
      {/* <h2 className="form-title">Hotel Booking</h2> */}

      <form onSubmit={handleSubmit} className="form">
        {/* Hotel Info */}
        <div className="grid">
          <div>
            <label>Hotel Name</label>
            <input name="hotelName" value={form.hotelName} onChange={handleChange} placeholder="Hotel or chain name" />
            {errors.hotelName && <p className="error">{errors.hotelName}</p>}
          </div>
          <div>
            <label>City</label>
            <input name="city" value={form.city} onChange={handleChange} placeholder="City or location" />
            {errors.city && <p className="error">{errors.city}</p>}
          </div>
          <div>
            <label>Check-in</label>
            <input name="checkIn" type="date" min={today} value={form.checkIn} onChange={handleChange} />
            {errors.checkIn && <p className="error">{errors.checkIn}</p>}
          </div>
          <div>
            <label>Check-out</label>
            <input name="checkOut" type="date" min={form.checkIn || today} value={form.checkOut} onChange={handleChange} />
            {errors.checkOut && <p className="error">{errors.checkOut}</p>}
          </div>
          <div>
            <label>Rooms</label>
            <input name="rooms" type="number" min={1} value={form.rooms} onChange={handleChange} />
            {errors.rooms && <p className="error">{errors.rooms}</p>}
          </div>
          <div>
            <label>Adults</label>
            <input name="adults" type="number" min={1} value={form.adults} onChange={handleChange} />
            {errors.adults && <p className="error">{errors.adults}</p>}
          </div>
          <div>
            <label>Children</label>
            <input name="children" type="number" min={0} value={form.children} onChange={handleChange} />
          </div>
        </div>

        <hr />

        {/* Guest Info */}
        <div className="grid">
          <div>
            <label>Full Name</label>
            <input name="fullName" value={form.fullName} onChange={handleChange} placeholder="As on ID" />
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
        </div>

        <div>
          <label>Special requests</label>
          <textarea
            name="specialReq"
            value={form.specialReq}
            onChange={handleChange}
            rows={3}
            placeholder="Late check-in, wheelchair assistance, etc."
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
