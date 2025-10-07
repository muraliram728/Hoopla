// src/components/forms/EnquiryForm.jsx
import React, { useState, useEffect } from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    IconButton,
    TextField,
    Button,
    Snackbar,
    Alert,
    Grid,
    Typography,
    Box
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

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
                setTimeout(() => setOpen(false), 1500);
            } else {
                setAlert({ open: true, message: "Error: " + (data.message || "Something went wrong."), type: "error" });
            }
        } catch (error) {
            setAlert({ open: true, message: "Submission failed: " + error.message, type: "error" });
        }
    };

    const handleCloseAlert = () => setAlert((prev) => ({ ...prev, open: false }));

    // Professional input styling
    const inputStyles = {
        '& .MuiOutlinedInput-root': {
            backgroundColor: '#ffffff',
            borderRadius: '8px',
            transition: 'all 0.3s ease',
            '& fieldset': {
                borderColor: '#e0e0e0',
                borderWidth: '1.5px',
            },
            '&:hover fieldset': {
                borderColor: '#183932',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#183932',
                borderWidth: '2px',
            },
        },
        '& .MuiInputLabel-root': {
            color: '#666666',
            fontSize: '0.95rem',
            fontWeight: 500,
            '&.Mui-focused': {
                color: '#183932',
                fontWeight: 600,
            },
        },
        '& .MuiOutlinedInput-input': {
            padding: '12px 14px',
            fontSize: '0.95rem',
            color: '#333333',
        },
    };

    return (
        <>
            <Dialog 
                open={open} 
                onClose={handleClose} 
                fullWidth 
                maxWidth="md"
                PaperProps={{
                    sx: {
                        borderRadius: { xs: 0, sm: '16px' },
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
                        maxHeight: { xs: '100vh', sm: '90vh' },
                        m: { xs: 0, sm: 2 },
                    }
                }}
                sx={{ 
                    zIndex: 9999,
                    '& .MuiBackdrop-root': {
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    }
                }}
            >
                {/* Enhanced Dialog Title */}
                <DialogTitle 
                    sx={{ 
                        bgcolor: '#183932',
                        color: '#ffffff',
                        fontWeight: 600,
                        fontSize: { xs: '1.25rem', sm: '1.5rem' },
                        py: { xs: 2, sm: 2.5 },
                        px: { xs: 2, sm: 3 },
                        position: 'relative',
                        borderBottom: '3px solid #ecbf52',
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography variant="h6" sx={{ fontWeight: 600, fontSize: 'inherit' }}>
                            Travel Enquiry Form
                        </Typography>
                        <IconButton
                            onClick={handleClose}
                            sx={{ 
                                color: '#ecbf52',
                                '&:hover': {
                                    backgroundColor: 'rgba(236, 191, 82, 0.1)',
                                    transform: 'rotate(90deg)',
                                    transition: 'all 0.3s ease',
                                }
                            }}
                        >
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    <Typography 
                        variant="body2" 
                        sx={{ 
                            color: '#ecbf52',
                            mt: 0.5,
                            fontSize: { xs: '0.8rem', sm: '0.875rem' },
                            fontWeight: 400,
                        }}
                    >
                        Please fill in your details and we'll get back to you shortly
                    </Typography>
                </DialogTitle>

                {/* Enhanced Dialog Content */}
                <DialogContent 
                    sx={{ 
                        p: { xs: 2, sm: 3, md: 4 },
                        bgcolor: '#f8f9fa',
                    }}
                >
                    <Box 
                        component="form" 
                        onSubmit={handleSubmit}
                        sx={{ 
                            bgcolor: '#ffffff',
                            borderRadius: '12px',
                            p: { xs: 2, sm: 3 },
                            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                        }}
                    >
                        <Grid container spacing={{ xs: 2, sm: 2.5 }}>
                            {/* Name */}
                            <Grid item xs={12} sm={6}>
                                <TextField 
                                    label="Full Name" 
                                    name="name" 
                                    value={form.name} 
                                    onChange={handleChange} 
                                    fullWidth 
                                    required
                                    placeholder="Enter your full name"
                                    sx={inputStyles}
                                />
                            </Grid>

                            {/* City */}
                            <Grid item xs={12} sm={6}>
                                <TextField 
                                    label="City" 
                                    name="city" 
                                    value={form.city} 
                                    onChange={handleChange} 
                                    fullWidth 
                                    required
                                    placeholder="Your city"
                                    sx={inputStyles}
                                />
                            </Grid>

                            {/* Email */}
                            <Grid item xs={12} sm={6}>
                                <TextField 
                                    label="Email Address" 
                                    type="email" 
                                    name="email" 
                                    value={form.email} 
                                    onChange={handleChange} 
                                    fullWidth 
                                    required
                                    placeholder="example@email.com"
                                    sx={inputStyles}
                                />
                            </Grid>

                            {/* Phone */}
                            <Grid item xs={12} sm={6}>
                                <TextField 
                                    label="Phone Number" 
                                    name="phone" 
                                    value={form.phone} 
                                    onChange={handleChange} 
                                    fullWidth 
                                    required
                                    placeholder="+91 XXXXX XXXXX"
                                    sx={inputStyles}
                                />
                            </Grid>

                            {/* WhatsApp */}
                            <Grid item xs={12} sm={6}>
                                <TextField 
                                    label="WhatsApp Number" 
                                    name="whatsapp" 
                                    value={form.whatsapp} 
                                    onChange={handleChange} 
                                    fullWidth
                                    placeholder="+91 XXXXX XXXXX (Optional)"
                                    sx={inputStyles}
                                />
                            </Grid>

                            {/* Destination */}
                            <Grid item xs={12} sm={6}>
                                <TextField 
                                    label="Travel Destination" 
                                    name="destination" 
                                    value={form.destination} 
                                    onChange={handleChange} 
                                    fullWidth 
                                    required
                                    placeholder="Where do you want to go?"
                                    sx={inputStyles}
                                />
                            </Grid>

                            {/* Travel Date */}
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Date of Travel"
                                    name="travelDate"
                                    type="date"
                                    value={form.travelDate}
                                    onChange={handleChange}
                                    fullWidth
                                    required
                                    InputLabelProps={{ shrink: true }}
                                    sx={inputStyles}
                                />
                            </Grid>

                            {/* Number of People */}
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Number of Travelers"
                                    type="number"
                                    name="people"
                                    value={form.people}
                                    onChange={handleChange}
                                    fullWidth
                                    required
                                    inputProps={{ min: 1 }}
                                    sx={inputStyles}
                                />
                            </Grid>
                        </Grid>

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            sx={{
                                mt: { xs: 3, sm: 4 },
                                py: { xs: 1.5, sm: 1.75 },
                                bgcolor: '#183932',
                                color: '#ecbf52',
                                fontSize: { xs: '1rem', sm: '1.1rem' },
                                fontWeight: 600,
                                borderRadius: '8px',
                                textTransform: 'none',
                                boxShadow: '0 4px 12px rgba(24, 57, 50, 0.3)',
                                transition: 'all 0.3s ease',
                                '&:hover': { 
                                    bgcolor: '#ecbf52',
                                    color: '#183932',
                                    boxShadow: '0 6px 16px rgba(236, 191, 82, 0.4)',
                                    transform: 'translateY(-2px)',
                                },
                                '&:active': {
                                    transform: 'translateY(0)',
                                }
                            }}
                        >
                            Submit Enquiry
                        </Button>

                        {/* Privacy Notice */}
                        <Typography 
                            variant="caption" 
                            sx={{ 
                                display: 'block',
                                textAlign: 'center',
                                mt: 2,
                                color: '#666666',
                                fontSize: { xs: '0.75rem', sm: '0.8rem' },
                            }}
                        >
                            We respect your privacy and will never share your information
                        </Typography>
                    </Box>
                </DialogContent>
            </Dialog>

            {/* Enhanced Snackbar Alert */}
            <Snackbar
                open={alert.open}
                autoHideDuration={4000}
                onClose={handleCloseAlert}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                sx={{
                    bottom: { xs: 24, sm: 24 },
                }}
            >
                <Alert 
                    onClose={handleCloseAlert} 
                    severity={alert.type}
                    variant="filled"
                    sx={{ 
                        width: '100%',
                        borderRadius: '8px',
                        fontWeight: 500,
                        fontSize: { xs: '0.875rem', sm: '0.95rem' },
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                    }}
                >
                    {alert.message}
                </Alert>
            </Snackbar>
        </>
    );
}