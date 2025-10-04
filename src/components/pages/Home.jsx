// src/pages/Home.jsx
import React from "react";
import { Box, Typography } from "@mui/material";
import LocationCard from "../../LocationCard";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <h1>Welcome To Hooplaa Holidays</h1>
          <p>Value Journeys.</p>
        </div>
      </section>

      <Box sx={{ py: 4, px: 2 }}>
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            fontSize: "clamp(20px, 4vw, 28px)",
            fontWeight: 600,
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            color: "#333",
            mt: 4,
            mb: 2,
            textAlign: "left",
          }}
        >
          Locations You Should Visit
        </Typography>
        <LocationCard />
      </Box>
    </>
  );
}
