import React, { useState } from "react";
import "./ContactStyle.css";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import PageBack from "../../PageBackBox/PageBack";
import { Link } from "react-router-dom";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [alert, setAlert] = useState({
    open: false,
    type: "success",
    message: "",
  });

  const navigationData = [
    { label: "Contact Us", to: "/contact" },
    { label: "Home", to: "/" },
    { label: "Contact Us", to: "/contact" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setAlert({ open: true, type: "info", message: "Processing..." });

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "98d3d542-a92c-47e9-a739-362b5b7b2165",
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setAlert({
          open: true,
          type: "success",
          message: "Message sent successfully!",
        });

        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        throw new Error(data.message || "Something went wrong while sending email.");
      }
    } catch (error) {
      setAlert({
        open: true,
        type: "error",
        message: error.message || "Submission failed.",
      });
    }
  };

  return (
    <div style={{ marginTop: "75px" }}>
      <PageBack navigationData={navigationData} />
      <section className="contact-container">
        <div className="left-section">
          <h2>Support Customer</h2>
          <p>Have a question? Please send us a Message.</p>

          <h4>Reach Us:</h4>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+919385353350">+91 9385 353 350</a>
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:hooplaaholidays@gmail.com">hooplaaholidays@gmail.com</a>
          </p>
          <p>
            <strong>Opening hours:</strong> Everyday 8:00am - 5:00pm
          </p>
        </div>

        <div className="right-section">
          <h2>Contact Us</h2>
          <p>
            Please submit all general enquiries in the contact form below and we look forward to hearing from you soon.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
              />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={form.phone}
              onChange={handleChange}
              required
              pattern="[0-9]{10}"
              className="phone-input"
            />
            </div>

            <textarea
              name="message"
              placeholder="Enter your message"
              value={form.message}
              onChange={handleChange}
              required
            />

            <button type="submit" className="send-btn">
              Send
            </button>
          </form>
        </div>

        <Snackbar
          open={alert.open}
          autoHideDuration={3000}
          onClose={() => setAlert({ ...alert, open: false })}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <Alert severity={alert.type}>{alert.message}</Alert>
        </Snackbar>
      </section>
    </div>
  );
}
