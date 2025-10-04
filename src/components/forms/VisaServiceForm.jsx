import React, { useState } from "react";
import "./Style.css";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export default function VisaServiceForm() {
  const today = new Date().toISOString().split("T")[0];

  const initialForm = {
    destination: "",
    departDate: "",
    returnDate: "",
    passengers: 1,
    fullName: "",
    email: "",
    phone: "",
  };

  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [alert, setAlert] = useState({ open: false, message: "", type: "success" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const err = {};
    if (!form.destination) err.destination = "Select destination";
    if (!form.departDate) err.departDate = "Departure date required";
    if (!form.returnDate) err.returnDate = "Return date required";
    if (new Date(form.returnDate) < new Date(form.departDate))
      err.returnDate = "Return date must be after departure date";
    if (!form.fullName) err.fullName = "Full name is required";
    if (!form.email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
      err.email = "Valid email required";
    if (!form.phone || !/^[0-9+\-() ]{6,20}$/.test(form.phone))
      err.phone = "Valid phone number required";
    return err;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
          subject: "New Visa Service Request",
          from_name: form.fullName,
          from_email: form.email,
          message: `
            Visa Service Request Details:
            Name: ${form.fullName}
            Phone: ${form.phone}
            Email: ${form.email}
            Destination: ${form.destination}
            Departure Date: ${form.departDate}
            Return Date: ${form.returnDate}
            Passengers: ${form.passengers}
          `,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setAlert({ open: true, message: "Visa service request sent successfully!", type: "success" });
        setForm(initialForm);
      } else {
        setAlert({ open: true, message: "Error: " + (data.message || "Something went wrong."), type: "error" });
      }
    } catch (error) {
      setAlert({ open: true, message: "Submission failed: " + error.message, type: "error" });
    }
  };

  const handleCloseAlert = () => setAlert((a) => ({ ...a, open: false }));

  return (
    <div className="form-container">
      <h2 className="form-title">Visa Services</h2>

      <form onSubmit={handleSubmit} className="form">
        <div className="grid">
          <div>
            <label>Destination Country</label>
            <select name="destination" value={form.destination} onChange={handleChange}>
              <option value="">-- Select Country --</option>
              <option value="USA">USA</option>
              <option value="UK">United Kingdom</option>
              <option value="Canada">Canada</option>
              <option value="Australia">Australia</option>
              <option value="Singapore">Singapore</option>
              <option value="Dubai">Dubai (UAE)</option>
              <option value="France">France</option>
            </select>
            {errors.destination && <p className="error">{errors.destination}</p>}
          </div>

          <div>
            <label>Date of Departure</label>
            <input
              type="date"
              name="departDate"
              value={form.departDate}
              min={today}
              onChange={handleChange}
            />
            {errors.departDate && <p className="error">{errors.departDate}</p>}
          </div>

          <div>
            <label>Date of Return</label>
            <input
              type="date"
              name="returnDate"
              value={form.returnDate}
              min={form.departDate || today}
              onChange={handleChange}
            />
            {errors.returnDate && <p className="error">{errors.returnDate}</p>}
          </div>

          <div>
            <label>Passengers</label>
            <input
              type="number"
              name="passengers"
              min="1"
              value={form.passengers}
              onChange={handleChange}
            />
          </div>
        </div>

        <hr />

        <div className="grid">
          <div>
            <label>Full Name</label>
            <input
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              placeholder="As on Passport"
            />
            {errors.fullName && <p className="error">{errors.fullName}</p>}
          </div>

          <div>
            <label>Email</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div>
            <label>Phone</label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
            />
            {errors.phone && <p className="error">{errors.phone}</p>}
          </div>
        </div>

        <div className="actions">
          <button type="submit" className="btn-primary">Submit</button>
          <button
            type="button"
            onClick={() => setForm(initialForm)}
            className="btn-secondary"
          >
            Cancel
          </button>
        </div>
      </form>

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
  );
}
