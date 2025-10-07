// src/components/forms/EnquiryForm.jsx
import React, { useState, useEffect } from "react";
import {
    Dialog,
    DialogContent,
    IconButton,
    TextField,
    Button,
    Snackbar,
    Alert,
    Grid,
    Typography,
    Box,
    InputAdornment
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {
    Person,
    LocationCity,
    Email,
    Phone,
    WhatsApp,
    Flight,
    CalendarMonth,
    Groups
} from "@mui/icons-material";

export default function EnquiryForm() {
    const [open, setOpen] = useState(true);
    const [alert, setAlert] = useState({ open: false, message: "", type: "success" });

    const [form, setForm] = useState({
        name: "",
        city: "",
        email: "",
        phone: "",
        whatsapp: "",
        destination: "",
        travelDate: "",
        people: 1,
    });

    useEffect(() => {
        console.log("✅ EnquiryForm mounted");
    }, []);

    const handleClose = () => setOpen(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((s) => ({ ...s, [name]: value }));
    };

    const validate = () => {
        if (!form.name) return "Name is required";
        if (!form.city) return "City is required";
        if (!form.email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) return "Valid email required";
        if (!form.phone) return "Phone number is required";
        if (!form.destination) return "Travel destination required";
        if (!form.travelDate) return "Date of travel required";
        if (form.people < 1) return "Number of people must be at least 1";
        return null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const error = validate();
        if (error) {
            setAlert({ open: true, message: error, type: "error" });
            return;
        }

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify({
                    access_key: "98d3d542-a92c-47e9-a739-362b5b7b2165",
                    subject: "New Enquiry Form Submission",
                    from_name: form.name,
                    from_email: form.email,
                    message: `
            Name: ${form.name}
            City: ${form.city}
            Email: ${form.email}
            Phone: ${form.phone}
            WhatsApp: ${form.whatsapp}
            Destination: ${form.destination}
            Date of Travel: ${form.travelDate}
            No. of People: ${form.people}
          `,
                }),
            });

            const data = await res.json();

            if (data.success) {
                setAlert({ open: true, message: "Enquiry submitted successfully!", type: "success" });
                setForm({ name: "", city: "", email: "", phone: "", whatsapp: "", destination: "", travelDate: "", people: 1 });
                setOpen(false);
            } else {
                setAlert({ open: true, message: "Error: " + (data.message || "Something went wrong."), type: "error" });
            }
        } catch (error) {
            setAlert({ open: true, message: "Submission failed: " + error.message, type: "error" });
        }
    };

    const handleCloseAlert = () => setAlert((prev) => ({ ...prev, open: false }));

    // Custom TextField styling
    const textFieldStyles = {
        "& .MuiOutlinedInput-root": {
            borderRadius: 2,
            bgcolor: "#fafafa",
            transition: "all 0.3s ease",
            "& fieldset": {
                borderColor: "#e0e0e0",
                borderWidth: "1px"
            },
            "&:hover fieldset": {
                borderColor: "#ecbf52",
            },
            "&.Mui-focused fieldset": {
                borderColor: "#183932",
                borderWidth: "2px"
            },
            "&.Mui-focused": {
                bgcolor: "white"
            }
        },
        "& .MuiInputLabel-root": {
            color: "#666",
            fontWeight: 500,
            fontSize: "0.95rem",
            "&.Mui-focused": {
                color: "#183932",
                fontWeight: 600
            }
        },
        "& .MuiOutlinedInput-input": {
            fontSize: "0.95rem",
            color: "#333"
        }
    };

    return (
        <>
            <Dialog 
                open={open} 
                onClose={handleClose} 
                fullWidth 
                maxWidth="md" 
                sx={{ 
                    zIndex: 9999,
                    "& .MuiDialog-paper": {
                        borderRadius: 3,
                        boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)"
                    }
                }}
                PaperProps={{
                    sx: {
                        m: { xs: 2, sm: 3 },
                        maxHeight: { xs: "90vh", sm: "85vh" }
                    }
                }}
            >
                {/* Header with background pattern */}
                <Box
                    sx={{
                        position: "relative",
                        bgcolor: "#183932",
                        pt: 4,
                        pb: 3,
                        px: { xs: 3, sm: 4 },
                        overflow: "hidden",
                        "&::before": {
                            content: '""',
                            position: "absolute",
                            top: -50,
                            right: -50,
                            width: 200,
                            height: 200,
                            bgcolor: "#ecbf52",
                            opacity: 0.1,
                            borderRadius: "50%"
                        },
                        "&::after": {
                            content: '""',
                            position: "absolute",
                            bottom: -30,
                            left: -30,
                            width: 150,
                            height: 150,
                            bgcolor: "#ecbf52",
                            opacity: 0.08,
                            borderRadius: "50%"
                        }
                    }}
                >
                    <IconButton
                        onClick={handleClose}
                        sx={{
                            position: "absolute",
                            right: 12,
                            top: 12,
                            color: "white",
                            bgcolor: "rgba(255, 255, 255, 0.1)",
                            zIndex: 1,
                            transition: "all 0.3s ease",
                            "&:hover": {
                                bgcolor: "#ecbf52",
                                color: "#183932",
                                transform: "rotate(90deg)"
                            }
                        }}
                    >
                        <CloseIcon />
                    </IconButton>

                    <Box sx={{ position: "relative", zIndex: 1 }}>
                        <Typography
                            variant="overline"
                            sx={{
                                color: "#ecbf52",
                                fontSize: "0.75rem",
                                fontWeight: 600,
                                letterSpacing: 2,
                                display: "block",
                                mb: 1
                            }}
                        >
                            START YOUR JOURNEY
                        </Typography>
                        <Typography
                            variant="h4"
                            sx={{
                                color: "white",
                                fontWeight: 700,
                                mb: 1,
                                fontSize: { xs: "1.5rem", sm: "2rem" }
                            }}
                        >
                            Plan Your Perfect Trip
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                color: "rgba(255, 255, 255, 0.8)",
                                maxWidth: "500px",
                                lineHeight: 1.6
                            }}
                        >
                            Share your travel details and we'll craft a personalized itinerary just for you
                        </Typography>
                    </Box>
                </Box>

                <DialogContent sx={{ p: { xs: 3, sm: 4, md: 5 }, bgcolor: "white" }}>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={{ xs: 2, sm: 2.5 }}>
                            {/* Personal Information Section */}
                            <Grid item xs={12}>
                                <Typography
                                    variant="subtitle2"
                                    sx={{
                                        color: "#183932",
                                        fontWeight: 600,
                                        fontSize: "0.875rem",
                                        mb: 1.5,
                                        textTransform: "uppercase",
                                        letterSpacing: 1
                                    }}
                                >
                                    Personal Information
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Full Name"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    fullWidth
                                    required
                                    sx={textFieldStyles}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Person sx={{ color: "#183932", opacity: 0.7 }} />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="City"
                                    name="city"
                                    value={form.city}
                                    onChange={handleChange}
                                    fullWidth
                                    required
                                    sx={textFieldStyles}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <LocationCity sx={{ color: "#183932", opacity: 0.7 }} />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Email Address"
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    fullWidth
                                    required
                                    sx={textFieldStyles}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Email sx={{ color: "#183932", opacity: 0.7 }} />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Phone Number"
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    fullWidth
                                    required
                                    sx={textFieldStyles}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Phone sx={{ color: "#183932", opacity: 0.7 }} />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="WhatsApp Number (Optional)"
                                    name="whatsapp"
                                    value={form.whatsapp}
                                    onChange={handleChange}
                                    fullWidth
                                    sx={textFieldStyles}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <WhatsApp sx={{ color: "#25D366", opacity: 0.8 }} />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>

                            {/* Travel Details Section */}
                            <Grid item xs={12} sx={{ mt: 2 }}>
                                <Typography
                                    variant="subtitle2"
                                    sx={{
                                        color: "#183932",
                                        fontWeight: 600,
                                        fontSize: "0.875rem",
                                        mb: 1.5,
                                        textTransform: "uppercase",
                                        letterSpacing: 1
                                    }}
                                >
                                    Travel Details
                                </Typography>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Destination"
                                    name="destination"
                                    value={form.destination}
                                    onChange={handleChange}
                                    fullWidth
                                    required
                                    sx={textFieldStyles}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Flight sx={{ color: "#183932", opacity: 0.7 }} />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Date of Travel"
                                    name="travelDate"
                                    type="date"
                                    value={form.travelDate}
                                    onChange={handleChange}
                                    fullWidth
                                    required
                                    sx={textFieldStyles}
                                    InputLabelProps={{ shrink: true }}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <CalendarMonth sx={{ color: "#183932", opacity: 0.7 }} />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Number of Travelers"
                                    type="number"
                                    name="people"
                                    value={form.people}
                                    onChange={handleChange}
                                    fullWidth
                                    required
                                    sx={textFieldStyles}
                                    inputProps={{ min: 1 }}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Groups sx={{ color: "#183932", opacity: 0.7 }} />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Grid>
                        </Grid>

                        <Box sx={{ mt: 4, display: "flex", gap: 2, flexDirection: { xs: "column", sm: "row" } }}>
                            <Button
                                type="submit"
                                variant="contained"
                                fullWidth
                                sx={{
                                    py: 1.5,
                                    bgcolor: "#183932",
                                    color: "white",
                                    fontWeight: 600,
                                    fontSize: "1rem",
                                    borderRadius: 2,
                                    textTransform: "none",
                                    boxShadow: "0 4px 12px rgba(24, 57, 50, 0.3)",
                                    transition: "all 0.3s ease",
                                    "&:hover": {
                                        bgcolor: "#0d221b",
                                        transform: "translateY(-2px)",
                                        boxShadow: "0 6px 20px rgba(24, 57, 50, 0.4)"
                                    },
                                }}
                            >
                                Submit Enquiry
                            </Button>
                            
                        </Box>
                    </form>
                </DialogContent>
            </Dialog>

            {/* Snackbar Alert */}
            <Snackbar
                open={alert.open}
                autoHideDuration={4000}
                onClose={handleCloseAlert}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            >
                <Alert
                    onClose={handleCloseAlert}
                    severity={alert.type}
                    sx={{
                        width: "100%",
                        borderRadius: 2,
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                        "& .MuiAlert-icon": {
                            fontSize: "24px"
                        }
                    }}
                    variant="filled"
                >
                    {alert.message}
                </Alert>
            </Snackbar>
        </>
    );
}