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
      icon: <LocalOffer sx={{ fontSize: 40 }} />,
      title: "Affordable Travel Solutions",
      description: "Budget-friendly packages designed for everyone"
    },
    {
      icon: <TravelExplore sx={{ fontSize: 40 }} />,
      title: "Personalized Packages",
      description: "Customized itineraries tailored to your needs"
    },
    {
      icon: <SupportAgent sx={{ fontSize: 40 }} />,
      title: "24/7 Support",
      description: "Round-the-clock guidance and assistance"
    },
    {
      icon: <VerifiedUser sx={{ fontSize: 40 }} />,
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
    <Box sx={{ bgcolor: "#fafafa", minHeight: "100vh", pt: 12, pb: 6 }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box 
          sx={{ 
            textAlign: "center", 
            mb: 6,
            animation: "fadeIn 0.8s ease-out",
            "@keyframes fadeIn": {
              from: { opacity: 0, transform: "translateY(-20px)" },
              to: { opacity: 1, transform: "translateY(0)" }
            }
          }}
        >
          <Typography 
            variant="h2" 
            sx={{ 
              fontWeight: 800,
              color: "#183932",
              mb: 2,
              fontSize: { xs: "2.5rem", md: "3.5rem" }
            }}
          >
            About Us
          </Typography>
          <Box 
            sx={{ 
              width: 100, 
              height: 4, 
              bgcolor: "#ecbf52", 
              mx: "auto",
              borderRadius: 2,
              mb: 3
            }} 
          />
          <Typography 
            variant="h5" 
            sx={{ 
              color: "#183932",
              fontWeight: 600,
              mb: 2
            }}
          >
            Welcome to Hooplaa Holidays!
          </Typography>
        </Box>

        {/* Main Content */}
        <Paper 
          elevation={0}
          sx={{ 
            p: { xs: 3, md: 5 }, 
            mb: 6,
            bgcolor: "white",
            borderRadius: 3,
            boxShadow: "0 4px 20px rgba(24, 57, 50, 0.08)"
          }}
        >
          <Typography 
            variant="body1" 
            sx={{ 
              color: "#555",
              lineHeight: 1.8,
              fontSize: { xs: "1rem", md: "1.1rem" },
              mb: 3
            }}
          >
            We are a passionate startup travel company, born with a simple dream – to make travel 
            affordable, easy, and memorable for everyone. Our journey started with the belief that 
            travel is not just about visiting places, but about creating stories and experiences 
            that last forever.
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: "#555",
              lineHeight: 1.8,
              fontSize: { xs: "1rem", md: "1.1rem" }
            }}
          >
            At Hooplaa Holidays, we provide budget-friendly holiday packages, customized itineraries, 
            flight & hotel bookings, visa support, and complete travel assistance. Whether it's a 
            family trip, a friends' getaway, a honeymoon, or a spiritual journey, we are here to 
            make your travel smooth and stress-free.
          </Typography>
        </Paper>

        {/* Why Choose Us */}
        <Box sx={{ mb: 6 }}>
          <Typography 
            variant="h4" 
            sx={{ 
              fontWeight: 700,
              color: "#183932",
              mb: 4,
              textAlign: "center"
            }}
          >
            🌍 Why Choose Us?
          </Typography>
          <Grid container spacing={3}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    height: "100%",
                    textAlign: "center",
                    bgcolor: "white",
                    borderRadius: 3,
                    border: "2px solid transparent",
                    transition: "all 0.4s ease",
                    "&:hover": {
                      transform: "translateY(-10px)",
                      borderColor: "#ecbf52",
                      boxShadow: "0 8px 24px rgba(24, 57, 50, 0.12)"
                    }
                  }}
                >
                  <Box 
                    sx={{ 
                      color: "#ecbf52", 
                      mb: 2,
                      display: "flex",
                      justifyContent: "center"
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      fontWeight: 600,
                      color: "#183932",
                      mb: 1,
                      fontSize: "1.1rem"
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#666" }}>
                    {feature.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Mission & Vision */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                height: "100%",
                bgcolor: "#183932",
                color: "white",
                borderRadius: 3,
                position: "relative",
                overflow: "hidden",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: -50,
                  right: -50,
                  width: 150,
                  height: 150,
                  bgcolor: "#ecbf52",
                  opacity: 0.1,
                  borderRadius: "50%"
                }
              }}
            >
              <Typography 
                variant="h5" 
                sx={{ 
                  fontWeight: 700,
                  mb: 2,
                  color: "#ecbf52"
                }}
              >
                Our Mission
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                To provide affordable and reliable travel services that help people explore the 
                world without limits. We aim to create memorable journeys filled with comfort, 
                happiness, and value for money.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                height: "100%",
                bgcolor: "white",
                border: "2px solid #183932",
                borderRadius: 3,
                position: "relative",
                overflow: "hidden",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: -50,
                  right: -50,
                  width: 150,
                  height: 150,
                  bgcolor: "#183932",
                  opacity: 0.05,
                  borderRadius: "50%"
                }
              }}
            >
              <Typography 
                variant="h5" 
                sx={{ 
                  fontWeight: 700,
                  mb: 2,
                  color: "#183932"
                }}
              >
                🌟 Our Vision
              </Typography>
              <Typography variant="body1" sx={{ color: "#555", lineHeight: 1.8 }}>
                To become one of the most trusted travel brands in India, known for our customer 
                care, innovative services, and commitment to making travel accessible for everyone.
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* Core Values */}
        <Box>
          <Typography 
            variant="h4" 
            sx={{ 
              fontWeight: 700,
              color: "#183932",
              mb: 4,
              textAlign: "center"
            }}
          >
            💎 Our Core Values
          </Typography>
          <Grid container spacing={3}>
            {values.map((value, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    height: "100%",
                    bgcolor: "white",
                    borderRadius: 3,
                    borderLeft: "4px solid #ecbf52",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateX(10px)",
                      boxShadow: "0 4px 20px rgba(24, 57, 50, 0.1)"
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
                        ml: 1,
                        color: "#183932"
                      }}
                    >
                      {value.title}
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ color: "#666", lineHeight: 1.7 }}>
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