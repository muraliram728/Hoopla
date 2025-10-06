// src/components/pages/AboutUs.jsx
import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { 
  TravelExplore, 
  LocalOffer, 
  SupportAgent, 
  VerifiedUser,
  Lightbulb,
  EmojiEvents
} from "@mui/icons-material";

export default function AboutUs() {
  const features = [
    {
      icon: <LocalOffer sx={{ fontSize: 48 }} />,
      title: "Affordable Travel Solutions",
      description: "Budget-friendly packages designed for everyone"
    },
    {
      icon: <TravelExplore sx={{ fontSize: 48 }} />,
      title: "Personalized Packages",
      description: "Customized itineraries tailored to your needs"
    },
    {
      icon: <SupportAgent sx={{ fontSize: 48 }} />,
      title: "24/7 Support",
      description: "Round-the-clock guidance and assistance"
    },
    {
      icon: <VerifiedUser sx={{ fontSize: 48 }} />,
      title: "Trusted Services",
      description: "Customer-first approach with reliability"
    }
  ];

  const values = [
    {
      icon: <VerifiedUser />,
      title: "Trust",
      description: "Building long-term relationships with honesty and transparency"
    },
    {
      icon: <LocalOffer />,
      title: "Affordability",
      description: "Making travel possible for everyone with cost-effective solutions"
    },
    {
      icon: <SupportAgent />,
      title: "Customer Care",
      description: "Always putting our customers first and ensuring hassle-free journeys"
    },
    {
      icon: <Lightbulb />,
      title: "Innovation",
      description: "Continuously improving our services to provide unique travel experiences"
    },
    {
      icon: <EmojiEvents />,
      title: "Excellence",
      description: "Delivering high-quality service with attention to detail"
    }
  ];

  return (
    <Box sx={{ bgcolor: "#f8f9fa", minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box 
        sx={{ 
          bgcolor: "#183932",
          pt: { xs: 12, md: 16 },
          pb: { xs: 8, md: 12 },
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            right: 0,
            width: "40%",
            height: "100%",
            bgcolor: "#ecbf52",
            opacity: 0.05,
            transform: "skewX(-15deg)",
            transformOrigin: "top right"
          }
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ position: "relative", zIndex: 1 }}>
            <Typography 
              variant="overline"
              sx={{ 
                color: "#ecbf52",
                fontSize: { xs: "0.75rem", md: "0.875rem" },
                fontWeight: 600,
                letterSpacing: 2,
                mb: 2,
                display: "block"
              }}
            >
              WHO WE ARE
            </Typography>
            <Typography 
              variant="h2" 
              sx={{ 
                fontWeight: 700,
                color: "white",
                mb: 3,
                fontSize: { xs: "2rem", sm: "2.75rem", md: "3.5rem" },
                lineHeight: 1.2,
                maxWidth: "800px"
              }}
            >
              Transforming Travel Dreams Into Reality
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                color: "rgba(255, 255, 255, 0.85)",
                fontWeight: 400,
                lineHeight: 1.6,
                maxWidth: "700px",
                fontSize: { xs: "1rem", md: "1.25rem" }
              }}
            >
              A passionate startup dedicated to making travel affordable, accessible, and unforgettable for everyone.
            </Typography>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: { xs: -4, md: -6 }, position: "relative", zIndex: 2 }}>
        {/* Main Content Card */}
        <Paper 
          elevation={0}
          sx={{ 
            p: { xs: 4, md: 6 }, 
            mb: 8,
            bgcolor: "white",
            borderRadius: 2,
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)"
          }}
        >
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography 
                variant="h5" 
                sx={{ 
                  fontWeight: 600,
                  color: "#183932",
                  mb: 3,
                  fontSize: { xs: "1.25rem", md: "1.5rem" }
                }}
              >
                Our Story
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: "#555",
                  lineHeight: 1.8,
                  mb: 3,
                  fontSize: { xs: "0.95rem", md: "1rem" }
                }}
              >
                We are a passionate startup travel company, born with a simple dream – to make travel affordable, easy, and memorable for everyone. Our journey started with the belief that travel is not just about visiting places, but about creating stories and experiences that last forever.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography 
                variant="h5" 
                sx={{ 
                  fontWeight: 600,
                  color: "#183932",
                  mb: 3,
                  fontSize: { xs: "1.25rem", md: "1.5rem" }
                }}
              >
                What We Offer
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: "#555",
                  lineHeight: 1.8,
                  fontSize: { xs: "0.95rem", md: "1rem" }
                }}
              >
                At Hooplaa Holidays, we provide budget-friendly holiday packages, customized itineraries, flight & hotel bookings, visa support, and complete travel assistance. Whether it's a family trip, a friends' getaway, a honeymoon, or a spiritual journey, we are here to make your travel smooth and stress-free.
              </Typography>
            </Grid>
          </Grid>
        </Paper>

        {/* Why Choose Us */}
        <Box sx={{ mb: 10 }}>
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography 
              variant="overline"
              sx={{ 
                color: "#ecbf52",
                fontSize: "0.875rem",
                fontWeight: 600,
                letterSpacing: 2,
                mb: 1,
                display: "block"
              }}
            >
              OUR ADVANTAGES
            </Typography>
            <Typography 
              variant="h3" 
              sx={{ 
                fontWeight: 700,
                color: "#183932",
                fontSize: { xs: "1.75rem", md: "2.5rem" }
              }}
            >
              Why Choose Hooplaa Holidays
            </Typography>
          </Box>
          <Grid container spacing={3}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: "100%",
                    bgcolor: "white",
                    borderRadius: 2,
                    border: "1px solid #e0e0e0",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 12px 40px rgba(24, 57, 50, 0.15)",
                      borderColor: "#ecbf52"
                    }
                  }}
                >
                  <Box 
                    sx={{ 
                      color: "#183932",
                      mb: 2.5,
                      opacity: 0.9
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      fontWeight: 600,
                      color: "#183932",
                      mb: 1.5,
                      fontSize: "1.1rem"
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#666", lineHeight: 1.7, fontSize: "0.9rem" }}>
                    {feature.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Mission & Vision */}
        <Grid container spacing={4} sx={{ mb: 10 }}>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 4, md: 5 },
                height: "100%",
                bgcolor: "#183932",
                color: "white",
                borderRadius: 2,
                position: "relative",
                overflow: "hidden"
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: -40,
                  right: -40,
                  width: 180,
                  height: 180,
                  bgcolor: "#ecbf52",
                  opacity: 0.08,
                  borderRadius: "50%"
                }}
              />
              <Typography 
                variant="overline"
                sx={{ 
                  color: "#ecbf52",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: 2,
                  mb: 2,
                  display: "block"
                }}
              >
                OUR MISSION
              </Typography>
              <Typography 
                variant="h5" 
                sx={{ 
                  fontWeight: 600,
                  mb: 2.5,
                  fontSize: { xs: "1.25rem", md: "1.5rem" }
                }}
              >
                Empowering Every Journey
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8, opacity: 0.95, fontSize: { xs: "0.95rem", md: "1rem" } }}>
                To provide affordable and reliable travel services that help people explore the world without limits. We aim to create memorable journeys filled with comfort, happiness, and value for money.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 4, md: 5 },
                height: "100%",
                bgcolor: "white",
                border: "1px solid #e0e0e0",
                borderRadius: 2,
                position: "relative",
                overflow: "hidden"
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: -40,
                  right: -40,
                  width: 180,
                  height: 180,
                  bgcolor: "#183932",
                  opacity: 0.03,
                  borderRadius: "50%"
                }}
              />
              <Typography 
                variant="overline"
                sx={{ 
                  color: "#ecbf52",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: 2,
                  mb: 2,
                  display: "block"
                }}
              >
                OUR VISION
              </Typography>
              <Typography 
                variant="h5" 
                sx={{ 
                  fontWeight: 600,
                  mb: 2.5,
                  color: "#183932",
                  fontSize: { xs: "1.25rem", md: "1.5rem" }
                }}
              >
                Building India's Most Trusted Travel Brand
              </Typography>
              <Typography variant="body1" sx={{ color: "#555", lineHeight: 1.8, fontSize: { xs: "0.95rem", md: "1rem" } }}>
                To become one of the most trusted travel brands in India, known for our customer care, innovative services, and commitment to making travel accessible for everyone.
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* Core Values */}
        <Box sx={{ pb: 10 }}>
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography 
              variant="overline"
              sx={{ 
                color: "#ecbf52",
                fontSize: "0.875rem",
                fontWeight: 600,
                letterSpacing: 2,
                mb: 1,
                display: "block"
              }}
            >
              WHAT DRIVES US
            </Typography>
            <Typography 
              variant="h3" 
              sx={{ 
                fontWeight: 700,
                color: "#183932",
                mb: 2,
                fontSize: { xs: "1.75rem", md: "2.5rem" }
              }}
            >
              Our Core Values
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                color: "#666",
                maxWidth: "600px",
                mx: "auto",
                fontSize: { xs: "0.95rem", md: "1rem" }
              }}
            >
              The principles that guide every decision we make and every journey we create
            </Typography>
          </Box>
          <Grid container spacing={3}>
            {values.map((value, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3.5,
                    height: "100%",
                    bgcolor: "white",
                    borderRadius: 2,
                    border: "1px solid #e0e0e0",
                    borderLeft: "4px solid #ecbf52",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      boxShadow: "0 8px 24px rgba(24, 57, 50, 0.1)",
                      transform: "translateY(-4px)"
                    }
                  }}
                >
                  <Box 
                    sx={{ 
                      display: "flex", 
                      alignItems: "center", 
                      mb: 2,
                      color: "#183932"
                    }}
                  >
                    {value.icon}
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontWeight: 600,
                        ml: 1.5,
                        color: "#183932",
                        fontSize: "1.1rem"
                      }}
                    >
                      {value.title}
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ color: "#666", lineHeight: 1.7, fontSize: "0.9rem" }}>
                    {value.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
