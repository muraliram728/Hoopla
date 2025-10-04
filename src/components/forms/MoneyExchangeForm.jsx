import React, { useState, useEffect } from "react";
import "./Style.css";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export default function MoneyExchangeForm() {
    const initialForm = {
        fullName: "",
        email: "",
        phone: "",
        fromCurrency: "USD",
        toCurrency: "INR",
        amount: "",
        paymentMethod: "cash",
        specialReq: "",
    };

    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [alert, setAlert] = useState({ open: false, message: "", type: "success" });
    const [convertedAmount, setConvertedAmount] = useState(null);

    // ✅ Dummy Exchange Rates (From Currency -> INR base rates)
    const rates = {
        USD: 83,   // 1 USD = 83 INR
        EUR: 90,   // 1 EUR = 90 INR
        GBP: 100,  // 1 GBP = 100 INR
        INR: 1,    // 1 INR = 1 INR
        JPY: 0.55, // 1 JPY = 0.55 INR
    };

    // ✅ Calculate converted amount when amount/currency changes
    useEffect(() => {
        if (form.amount && form.fromCurrency && form.toCurrency) {
            const inINR = Number(form.amount) * rates[form.fromCurrency]; // convert to INR
            const final = inINR / rates[form.toCurrency]; // convert INR to target currency
            setConvertedAmount(final.toFixed(2));
        } else {
            setConvertedAmount(null);
        }
    }, [form.amount, form.fromCurrency, form.toCurrency]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((s) => ({ ...s, [name]: value }));
    };

    const validate = () => {
        const err = {};
        if (!form.fullName) err.fullName = "Full name is required";
        if (!form.email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
            err.email = "Valid email required";
        if (!form.phone || !/^[0-9+\-() ]{6,20}$/.test(form.phone))
            err.phone = "Valid phone required";
        if (!form.amount || isNaN(form.amount) || Number(form.amount) <= 0)
            err.amount = "Enter a valid amount";
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
                    access_key: "82755d67-c2d3-4831-91b5-aed614aedab8",
                    subject: "New Money Exchange Request",
                    from_name: form.fullName,
                    from_email: form.email,
                    message: `
            Name: ${form.fullName}
            Phone: ${form.phone}
            Email: ${form.email}
            From Currency: ${form.fromCurrency}
            To Currency: ${form.toCurrency}
            Amount: ${form.amount}
            Converted Total: ${convertedAmount} ${form.toCurrency}
          `,
                }),
            });

            const data = await res.json();

            if (data.success) {
                setAlert({ open: true, message: "Money exchange request sent successfully!", type: "success" });
                setForm(initialForm);
                setErrors({});
                setConvertedAmount(null);
            } else {
                setAlert({ open: true, message: "Error: " + (data.message || "Something went wrong."), type: "error" });
            }
        } catch (error) {
            setAlert({ open: true, message: "Submission failed: " + error.message, type: "error" });
        }
    };

    const handleCloseAlert = () => {
        setAlert((prev) => ({ ...prev, open: false }));
    };

    return (
        <div className="form-container">
            <h2 className="form-title">Money Exchange</h2>

            <form onSubmit={handleSubmit} className="form">
                {/* Currency Exchange Info */}
                <div className="grid">
                    <div>
                        <label>From Currency</label>
                        <select name="fromCurrency" value={form.fromCurrency} onChange={handleChange}>
                            <option value="USD">USD - US Dollar</option>
                            <option value="EUR">EUR - Euro</option>
                            <option value="GBP">GBP - British Pound</option>
                            <option value="INR">INR - Indian Rupee</option>
                            <option value="JPY">JPY - Japanese Yen</option>
                        </select>
                    </div>
                    <div>
                        <label>To Currency</label>
                        <select name="toCurrency" value={form.toCurrency} onChange={handleChange}>
                            <option value="INR">INR - Indian Rupee</option>
                            <option value="USD">USD - US Dollar</option>
                            <option value="EUR">EUR - Euro</option>
                            <option value="GBP">GBP - British Pound</option>
                            <option value="JPY">JPY - Japanese Yen</option>
                        </select>
                    </div>
                    <div>
                        <label>Amount</label>
                        <input
                            name="amount"
                            type="number"
                            min={1}
                            value={form.amount}
                            onChange={handleChange}
                            placeholder="Enter amount"
                        />
                        {errors.amount && <p className="error">{errors.amount}</p>}
                    </div>
                </div>

                {/* ✅ Show Converted Amount */}
                {/* {convertedAmount && (
          <div className="total-box">
            <strong>Total: {convertedAmount} {form.toCurrency}</strong>
          </div>
        )} */}

                {/* ✅ Show Converted Amount in a separate box */}
                {convertedAmount && (
                    <div className="total-box">
                        <label>Converted Amount</label>
                        <div className="converted-box">
                            <span>{convertedAmount}</span>
                            <span className="currency">{form.toCurrency}</span>
                        </div>
                    </div>
                )}


                <hr />

                {/* Customer Info */}
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

                {/* Buttons */}
                <div className="actions">
                    <button type="submit" className="btn-primary">Submit</button>
                    <button type="button" onClick={() => { setForm(initialForm); setConvertedAmount(null); }} className="btn-secondary">Cancel</button>
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
    );
}
