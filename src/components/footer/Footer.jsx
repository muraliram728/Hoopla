// src/components/layout/Footer.jsx
import React from "react";
import { Box, Container, Typography, Grid, IconButton, Link } from "@mui/material";
import Logo from "../../assets/Logo.jpg";
import { Link as RouterLink } from "react-router-dom";
import { Facebook, Instagram, LinkedIn, Email, Phone, LocationOn, WhatsApp } from "@mui/icons-material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#183932",
        color: "white",
        pt: 4,
        pb: 2,
        mt: "auto"
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3} sx={{ mb: 2 }}>
          {/* Company Info */}
          <Grid item xs={12} sm={6} md={3}>
            <Link to="/">
              <img
                src={Logo}
                alt="Logo"
                style={{ height: 60, marginRight: 8, borderRadius: 5, marginTop: 10, cursor: "pointer" }}
              />
            </Link>
            <Typography variant="body2" sx={{ color: "#d0d0d0", lineHeight: 1.6, fontSize: "0.875rem" }}>
              Your trusted travel partner for unforgettable journeys around the world.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={6} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 1.5, fontSize: "1rem" }}>
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 0.8 }}>
              {[
                { label: "Home", path: "/" },
                { label: "Flights", path: "/flight" },
                { label: "Visa Services", path: "/visaservice" },
                { label: "About Us", path: "/about" },
                { label: "Contact", path: "/contact" }
              ].map((item) => (
                <Link
                  key={item.label}
                  component={RouterLink}   // ✅ use RouterLink
                  to={item.path}           // ✅ route path
                  sx={{
                    color: "#d0d0d0",
                    textDecoration: "none",
                    fontSize: "0.875rem",
                    transition: "color 0.3s ease",
                    "&:hover": {
                      color: "#ecbf52"
                    }
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={6} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 1.5, fontSize: "1rem" }}>
              Contact
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Phone sx={{ fontSize: 16, color: "#ecbf52" }} />
                <Typography variant="body2" sx={{ color: "#d0d0d0", fontSize: "0.875rem" }}>
                  +91 9385 353 350 , +91 9385 446 026
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Email sx={{ fontSize: 16, color: "#ecbf52" }} />
                <Typography variant="body2" sx={{ color: "#d0d0d0", fontSize: "0.875rem" }}>
                  hooplaaholidays@gmail.com
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                <LocationOn sx={{ fontSize: 16, color: "#ecbf52", mt: 0.2 }} />
                <Typography variant="body2" sx={{ color: "#d0d0d0", fontSize: "0.875rem" }}>
                  Namakkal, Tamil Nadu, India
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Social Media */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 1.5, fontSize: "1rem" }}>
              Follow Us
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              {[
                { icon: <Facebook />, link: "https://www.facebook.com/share/17Ek4qnrYg/" },
                { icon: <Instagram />, link: "https://www.instagram.com/hooplaa_holidays?igsh=MWZzZ2R0dHU5YXlmdA==" },
                { icon: <WhatsApp />, link: "https://wa.me/message/PDHYKYSEK5MKH1" },
                { icon: <LinkedIn />, link: "https://www.linkedin.com/in/sujithkumar-sadhasivam-51055a239/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" }
              ].map((social, index) => (
                <IconButton
                  key={index}
                  href={social.link}
                  sx={{
                    color: "#d0d0d0",
                    bgcolor: "rgba(236, 191, 82, 0.1)",
                    width: 36,
                    height: 36,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      bgcolor: "#ecbf52",
                      color: "#183932",
                      transform: "translateY(-3px)"
                    }
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Bar */}
        <Box
          sx={{
            borderTop: "1px solid rgba(236, 191, 82, 0.2)",
            pt: 2,
            mt: 2,
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 1
          }}
        >
          <Typography variant="body2" sx={{ color: "#d0d0d0", fontSize: "0.813rem" }}>
            © {new Date().getFullYear()} Hooplaa Holidays. All rights reserved.
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Link
              to="/policy"
              sx={{
                color: "#d0d0d0",
                textDecoration: "none",
                fontSize: "0.813rem",
                transition: "color 0.3s ease",
                "&:hover": { color: "#ecbf52" }
              }}
            >
              Privacy Policy
            </Link>
            <Link
              to="/policy"
              sx={{
                color: "#d0d0d0",
                textDecoration: "none",
                fontSize: "0.813rem",
                transition: "color 0.3s ease",
                "&:hover": { color: "#ecbf52" }
              }}
            >
              Terms of Service
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}