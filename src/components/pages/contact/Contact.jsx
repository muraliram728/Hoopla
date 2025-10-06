// import React, { useState } from "react";
// import "./ContactStyle.css";
// import Snackbar from "@mui/material/Snackbar";
// import PageBack from "../PageBackBox/PageBack";
// import Alert from "@mui/material/Alert";
// import type { AlertColor } from "@mui/material/Alert";

// export default function Contact() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     message: "",
//     agree: false,
//   });

//   const [alert, setAlert] = useState<{
//     open: boolean;
//     type: AlertColor;
//     message: string;
//   }>({
//     open: false,
//     type: "success",
//     message: "",
//   });
//   const navigationData = [
//     { label: "Contact Us", to: "/contact" },
//     { label: "Home", to: "/" },
//     { label: "Contact Us", to: "/contact" },
//   ];
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const target = e.target as HTMLInputElement; // explicitly cast
//     const { name, value, type } = target;
//     setForm((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? target.checked : value,
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!form.agree) {
//       setAlert({ open: true, type: "error", message: "Please agree to the Privacy Policy." });
//       return;
//     }

//     setAlert({ open: true, type: "success", message: "Processing..." });

//     try {
//       const res = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//         body: JSON.stringify({
//           access_key: "98d3d542-a92c-47e9-a739-362b5b7b2165",
//           name: form.name,
//           email: form.email,
//           message: form.message,
//         }),
//       });

//       const data = await res.json();
//       if (data.success) {
//         setAlert({ open: true, type: "success", message: "Message sent successfully!" });
//         setForm({ name: "", email: "", message: "", agree: false });
//       } else {
//         throw new Error(data.message || "Something went wrong.");
//       }
//     } catch (error: any) {
//       setAlert({ open: true, type: "error", message: error.message || "Submission failed." });
//     }
//   };

//   return (
//     <div style={{marginTop:"75px"}}>
//      <PageBack navigationData={navigationData} />
//     <section className="contact-container">
//       <div className="left-section">
//         <h2>Support Customer</h2>
//         <p>Have a question? Please send us a Message.</p>

//         <h4>Reach Us:</h4>
//         <p>
//           <strong>Phone:</strong>{" "}
//           <a href="tel:+660969732827">+91 9385 353 350</a>
//         </p>
//         <p>
//           <strong>Email:</strong>{" "}
//           <a href="mailto:greenmindtravel@gmail.com">hooplaaholidays@gmail.com</a>
//         </p>
//         <p>
//           <strong>Opening hours:</strong> Everyday 8:00am - 5:00pm
//         </p>
//       </div>

//       <div className="right-section">
//         <h2>Contact Us</h2>
//         <p>
//           Please submit all general enquiries in the contact form below and we look forward to
//           hearing from you soon.
//         </p>

//         <form onSubmit={handleSubmit}>
//           <div className="input-group">
//             <input
//               type="text"
//               name="name"
//               placeholder="Your name"
//               value={form.name}
//               onChange={handleChange}
//               required
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               value={form.email}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <textarea
//             name="message"
//             placeholder="Enter please your message"
//             value={form.message}
//             onChange={handleChange}
//             required
//           />

//           <div className="checkbox-group">
//             <input
//               type="checkbox"
//               name="agree"
//               checked={form.agree}
//               onChange={handleChange}
//               id="privacy"
//             />
//             <label htmlFor="privacy">
//               I agree to the <a href="#">Privacy Policy</a> of the website.
//             </label>
//           </div>

//           <button type="submit" className="send-btn">
//             Send
//           </button>
//         </form>
//       </div>

//       <Snackbar
//         open={alert.open}
//         autoHideDuration={3000}
//         onClose={() => setAlert({ ...alert, open: false })}
//         anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
//       >
//         <Alert severity={alert.type}>{alert.message}</Alert>
//       </Snackbar>
//     </section>
//     </div>
//   );
// }



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
    message: "",
    agree: false,
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
    const target = e.target;
    const { name, value, type } = target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? target.checked : value,
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!form.agree) {
    setAlert({ open: true, type: "error", message: "Please agree to the Privacy Policy." });
    return;
  }

  setAlert({ open: true, type: "info", message: "Processing..." });

  try {
    // Send email via Web3Forms
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

      // Reset form
      setForm({ name: "", email: "", message: "", agree: false });
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
                placeholder="Your name"
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
            </div>

            <textarea
              name="message"
              placeholder="Enter please your message"
              value={form.message}
              onChange={handleChange}
              required
            />

            <div className="checkbox-group">
              <input
                type="checkbox"
                name="agree"
                checked={form.agree}
                onChange={handleChange}
                id="privacy"
              />
              <label htmlFor="privacy">
                I agree to the <Link to="/policy">Privacy Policy</Link> of the website.
              </label>
            </div>

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
