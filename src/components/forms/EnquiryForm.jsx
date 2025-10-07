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
    Box,
    Fade
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";

export default function EnquiryForm() {
    const [open, setOpen] = useState(true); // show on load
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
        if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return "Valid email required";
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

    return (
        <>
            <Dialog 
                open={open} 
                onClose={handleClose} 
                fullWidth 
                maxWidth="md" 
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 500 }}
                PaperProps={{
                    sx: {
                        borderRadius: 3,
                        boxShadow: "0 24px 48px rgba(0, 0, 0, 0.2)",
                        overflow: "hidden"
                    }
                }}
                sx={{ zIndex: 9999 }}
            >
                {/* Header with gradient */}
                <Box
                    sx={{
                        background: "linear-gradient(135deg, #183932 0%, #1a4d42 100%)",
                        position: "relative",
                        overflow: "hidden",
                        "&::before": {
                            content: '""',
                            position: "absolute",
                            top: -100,
                            right: -100,
                            width: 300,
                            height: 300,
                            bgcolor: "#ecbf52",
                            opacity: 0.1,
                            borderRadius: "50%"
                        }
                    }}
                >
                    <DialogTitle 
                        sx={{ 
                            color: "white",
                            py: 3,
                            px: 4,
                            position: "relative",
                            zIndex: 1
                        }}
                    >
                        <Box>
                            <Typography 
                                variant="overline" 
                                sx={{ 
                                    color: "#ecbf52",
                                    fontSize: "0.75rem",
                                    fontWeight: 600,
                                    letterSpacing: 2,
                                    display: "block",
                                    mb: 0.5
                                }}
                            >
                                GET IN TOUCH
                            </Typography>
                            <Typography 
                                variant="h5" 
                                sx={{ 
                                    fontWeight: 700,
                                    color: "white"
                                }}
                            >
                                Plan Your Perfect Journey
                            </Typography>
                            <Typography 
                                variant="body2" 
                                sx={{ 
                                    color: "rgba(255, 255, 255, 0.8)",
                                    mt: 1,
                                    fontSize: "0.9rem"
                                }}
                            >
                                Share your travel details and we'll craft a personalized experience for you
                            </Typography>
                        </Box>
                        <IconButton
                            onClick={handleClose}
                            sx={{ 
                                position: "absolute", 
                                right: 16, 
                                top: 16, 
                                color: "white",
                                bgcolor: "rgba(255, 255, 255, 0.1)",
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
                    </DialogTitle>
                </Box>

                <DialogContent 
                    sx={{ 
                        p: { xs: 3, md: 5 },
                        bgcolor: "white"
                    }}
                >
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <TextField 
                                    label="Full Name" 
                                    name="name" 
                                    value={form.name} 
                                    onChange={handleChange} 
                                    fullWidth 
                                    required
                                    variant="filled"
                                    sx={{
                                        "& .MuiFilledInput-root": {
                                            bgcolor: "#f5f5f5",
                                            borderRadius: 2,
                                            border: "2px solid transparent",
                                            transition: "all 0.3s ease",
                                            "&:before, &:after": {
                                                display: "none"
                                            },
                                            "&:hover": {
                                                bgcolor: "#f0f0f0",
                                                borderColor: "#ecbf52"
                                            },
                                            "&.Mui-focused": {
                                                bgcolor: "#fafafa",
                                                borderColor: "#183932",
                                                boxShadow: "0 0 0 3px rgba(24, 57, 50, 0.1)"
                                            }
                                        },
                                        "& .MuiInputLabel-root": {
                                            color: "#666",
                                            fontWeight: 500,
                                            "&.Mui-focused": {
                                                color: "#183932",
                                                fontWeight: 600
                                            }
                                        },
                                        "& .MuiFilledInput-input": {
                                            py: 2
                                        }
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
                                    variant="filled"
                                    sx={{
                                        "& .MuiFilledInput-root": {
                                            bgcolor: "#f5f5f5",
                                            borderRadius: 2,
                                            border: "2px solid transparent",
                                            transition: "all 0.3s ease",
                                            "&:before, &:after": {
                                                display: "none"
                                            },
                                            "&:hover": {
                                                bgcolor: "#f0f0f0",
                                                borderColor: "#ecbf52"
                                            },
                                            "&.Mui-focused": {
                                                bgcolor: "#fafafa",
                                                borderColor: "#183932",
                                                boxShadow: "0 0 0 3px rgba(24, 57, 50, 0.1)"
                                            }
                                        },
                                        "& .MuiInputLabel-root": {
                                            color: "#666",
                                            fontWeight: 500,
                                            "&.Mui-focused": {
                                                color: "#183932",
                                                fontWeight: 600
                                            }
                                        },
                                        "& .MuiFilledInput-input": {
                                            py: 2
                                        }
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
                                    variant="filled"
                                    sx={{
                                        "& .MuiFilledInput-root": {
                                            bgcolor: "#f5f5f5",
                                            borderRadius: 2,
                                            border: "2px solid transparent",
                                            transition: "all 0.3s ease",
                                            "&:before, &:after": {
                                                display: "none"
                                            },
                                            "&:hover": {
                                                bgcolor: "#f0f0f0",
                                                borderColor: "#ecbf52"
                                            },
                                            "&.Mui-focused": {
                                                bgcolor: "#fafafa",
                                                borderColor: "#183932",
                                                boxShadow: "0 0 0 3px rgba(24, 57, 50, 0.1)"
                                            }
                                        },
                                        "& .MuiInputLabel-root": {
                                            color: "#666",
                                            fontWeight: 500,
                                            "&.Mui-focused": {
                                                color: "#183932",
                                                fontWeight: 600
                                            }
                                        },
                                        "& .MuiFilledInput-input": {
                                            py: 2
                                        }
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
                                    variant="filled"
                                    sx={{
                                        "& .MuiFilledInput-root": {
                                            bgcolor: "#f5f5f5",
                                            borderRadius: 2,
                                            border: "2px solid transparent",
                                            transition: "all 0.3s ease",
                                            "&:before, &:after": {
                                                display: "none"
                                            },
                                            "&:hover": {
                                                bgcolor: "#f0f0f0",
                                                borderColor: "#ecbf52"
                                            },
                                            "&.Mui-focused": {
                                                bgcolor: "#fafafa",
                                                borderColor: "#183932",
                                                boxShadow: "0 0 0 3px rgba(24, 57, 50, 0.1)"
                                            }
                                        },
                                        "& .MuiInputLabel-root": {
                                            color: "#666",
                                            fontWeight: 500,
                                            "&.Mui-focused": {
                                                color: "#183932",
                                                fontWeight: 600
                                            }
                                        },
                                        "& .MuiFilledInput-input": {
                                            py: 2
                                        }
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
                                    variant="filled"
                                    sx={{
                                        "& .MuiFilledInput-root": {
                                            bgcolor: "#f5f5f5",
                                            borderRadius: 2,
                                            border: "2px solid transparent",
                                            transition: "all 0.3s ease",
                                            "&:before, &:after": {
                                                display: "none"
                                            },
                                            "&:hover": {
                                                bgcolor: "#f0f0f0",
                                                borderColor: "#ecbf52"
                                            },
                                            "&.Mui-focused": {
                                                bgcolor: "#fafafa",
                                                borderColor: "#183932",
                                                boxShadow: "0 0 0 3px rgba(24, 57, 50, 0.1)"
                                            }
                                        },
                                        "& .MuiInputLabel-root": {
                                            color: "#666",
                                            fontWeight: 500,
                                            "&.Mui-focused": {
                                                color: "#183932",
                                                fontWeight: 600
                                            }
                                        },
                                        "& .MuiFilledInput-input": {
                                            py: 2
                                        }
                                    }}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField 
                                    label="Travel Destination" 
                                    name="destination" 
                                    value={form.destination} 
                                    onChange={handleChange} 
                                    fullWidth 
                                    required
                                    variant="filled"
                                    sx={{
                                        "& .MuiFilledInput-root": {
                                            bgcolor: "#f5f5f5",
                                            borderRadius: 2,
                                            border: "2px solid transparent",
                                            transition: "all 0.3s ease",
                                            "&:before, &:after": {
                                                display: "none"
                                            },
                                            "&:hover": {
                                                bgcolor: "#f0f0f0",
                                                borderColor: "#ecbf52"
                                            },
                                            "&.Mui-focused": {
                                                bgcolor: "#fafafa",
                                                borderColor: "#183932",
                                                boxShadow: "0 0 0 3px rgba(24, 57, 50, 0.1)"
                                            }
                                        },
                                        "& .MuiInputLabel-root": {
                                            color: "#666",
                                            fontWeight: 500,
                                            "&.Mui-focused": {
                                                color: "#183932",
                                                fontWeight: 600
                                            }
                                        },
                                        "& .MuiFilledInput-input": {
                                            py: 2
                                        }
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
                                    InputLabelProps={{ shrink: true }}
                                    required
                                    variant="filled"
                                    sx={{
                                        "& .MuiFilledInput-root": {
                                            bgcolor: "#f5f5f5",
                                            borderRadius: 2,
                                            border: "2px solid transparent",
                                            transition: "all 0.3s ease",
                                            "&:before, &:after": {
                                                display: "none"
                                            },
                                            "&:hover": {
                                                bgcolor: "#f0f0f0",
                                                borderColor: "#ecbf52"
                                            },
                                            "&.Mui-focused": {
                                                bgcolor: "#fafafa",
                                                borderColor: "#183932",
                                                boxShadow: "0 0 0 3px rgba(24, 57, 50, 0.1)"
                                            }
                                        },
                                        "& .MuiInputLabel-root": {
                                            color: "#666",
                                            fontWeight: 500,
                                            "&.Mui-focused": {
                                                color: "#183932",
                                                fontWeight: 600
                                            }
                                        },
                                        "& .MuiFilledInput-input": {
                                            py: 2
                                        }
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
                                    inputProps={{ min: 1 }}
                                    required
                                    variant="filled"
                                    sx={{
                                        "& .MuiFilledInput-root": {
                                            bgcolor: "#f5f5f5",
                                            borderRadius: 2,
                                            border: "2px solid transparent",
                                            transition: "all 0.3s ease",
                                            "&:before, &:after": {
                                                display: "none"
                                            },
                                            "&:hover": {
                                                bgcolor: "#f0f0f0",
                                                borderColor: "#ecbf52"
                                            },
                                            "&.Mui-focused": {
                                                bgcolor: "#fafafa",
                                                borderColor: "#183932",
                                                boxShadow: "0 0 0 3px rgba(24, 57, 50, 0.1)"
                                            }
                                        },
                                        "& .MuiInputLabel-root": {
                                            color: "#666",
                                            fontWeight: 500,
                                            "&.Mui-focused": {
                                                color: "#183932",
                                                fontWeight: 600
                                            }
                                        },
                                        "& .MuiFilledInput-input": {
                                            py: 2
                                        }
                                    }}
                                />
                            </Grid>
                        </Grid>

                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            endIcon={<SendIcon />}
                            sx={{
                                mt: 4,
                                py: 1.5,
                                bgcolor: "#183932",
                                color: "white",
                                fontSize: "1rem",
                                fontWeight: 600,
                                textTransform: "none",
                                borderRadius: 2,
                                boxShadow: "0 4px 12px rgba(24, 57, 50, 0.3)",
                                transition: "all 0.3s ease",
                                "&:hover": { 
                                    bgcolor: "#ecbf52",
                                    color: "#183932",
                                    transform: "translateY(-2px)",
                                    boxShadow: "0 6px 20px rgba(236, 191, 82, 0.4)"
                                }
                            }}
                        >
                            Submit Enquiry
                        </Button>

                        <Typography 
                            variant="caption" 
                            sx={{ 
                                display: "block",
                                textAlign: "center",
                                color: "#666",
                                mt: 2,
                                fontSize: "0.75rem"
                            }}
                        >
                            We'll respond within 24 hours
                        </Typography>
                    </form>
                </DialogContent>
            </Dialog>

            {/* Premium Snackbar Alert */}
            <Snackbar
                open={alert.open}
                autoHideDuration={4000}
                onClose={handleCloseAlert}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            >
                <Alert 
                    onClose={handleCloseAlert} 
                    severity={alert.type}
                    variant="filled"
                    sx={{ 
                        width: "100%",
                        borderRadius: 2,
                        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
                        "& .MuiAlert-icon": {
                            fontSize: "24px"
                        }
                    }}
                >
                    {alert.message}
                </Alert>
            </Snackbar>
        </>
    );
}