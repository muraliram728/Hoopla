// src/components/pages/ItineraryPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import itineraries from "../../data/itineraries";
import { Box, Typography, Container, Chip, Divider } from "@mui/material";
import { CalendarMonth, CheckCircle } from "@mui/icons-material";

export default function ItineraryPage() {
  const { id } = useParams();
  const itinerary = itineraries.find((item) => item.id === id);

  if (!itinerary) return <Typography>Itinerary not found</Typography>;

  return (
    <Box sx={{ bgcolor: "#f8f9fa", minHeight: "100vh", pt: 12, pb: 8 }}>
      <Container maxWidth="lg">
        {/* Hero Section with Main Image */}
        <Box
          sx={{
            mb: 8,
            animation: "fadeIn 0.6s ease-out",
            "@keyframes fadeIn": {
              from: { opacity: 0, transform: "translateY(-20px)" },
              to: { opacity: 1, transform: "translateY(0)" }
            }
          }}
        >
          {/* Hero Image */}
          <Box
            sx={{
              position: "relative",
              height: { xs: 300, md: 450 },
              borderRadius: 4,
              overflow: "hidden",
              mb: 4,
              boxShadow: "0 8px 32px rgba(24, 57, 50, 0.15)",
              "&::before": {
                content: '""',
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to bottom, rgba(24, 57, 50, 0.3) 0%, rgba(24, 57, 50, 0.7) 100%)",
                zIndex: 1
              }
            }}
          >
            <Box
              component="img"
              src={itinerary.image}
              alt={itinerary.title}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover"
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 2,
                p: { xs: 3, md: 5 }
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  color: "white",
                  mb: 2,
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                  letterSpacing: "-0.01em",
                  textShadow: "0 2px 12px rgba(0,0,0,0.4)"
                }}
              >
                {itinerary.title}
              </Typography>
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                <Chip
                  icon={<CalendarMonth sx={{ color: "#183932 !important" }} />}
                  label={`${itinerary.days.length} Days Journey`}
                  sx={{
                    bgcolor: "#ecbf52",
                    color: "#183932",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    px: 1.5,
                    py: 2.5
                  }}
                />
                <Chip
                  label={itinerary.type === "international" ? "International" : "Domestic"}
                  sx={{
                    bgcolor: "white",
                    color: "#183932",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    px: 1.5,
                    py: 2.5
                  }}
                />
              </Box>
            </Box>
          </Box>

          <Typography
            sx={{
              fontSize: { xs: "1rem", md: "1.1rem" },
              color: "#4a5568",
              lineHeight: 1.8,
              mb: 3
            }}
          >
            Experience the perfect blend of culture, adventure, and relaxation on this carefully curated journey.
          </Typography>

          <Divider sx={{ borderColor: "rgba(24, 57, 50, 0.2)", borderWidth: 1 }} />
        </Box>

        {/* Itinerary Days */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {itinerary.days.map((day, index) => (
            <Box
              key={index}
              sx={{
                animation: `slideUp 0.5s ease-out ${index * 0.08}s backwards`,
                "@keyframes slideUp": {
                  from: {
                    opacity: 0,
                    transform: "translateY(20px)"
                  },
                  to: {
                    opacity: 1,
                    transform: "translateY(0)"
                  }
                }
              }}
            >
              {/* Day Card */}
              <Box
                sx={{
                  bgcolor: "white",
                  borderRadius: 3,
                  overflow: "hidden",
                  boxShadow: "0 2px 12px rgba(24, 57, 50, 0.06)",
                  border: "1px solid rgba(24, 57, 50, 0.08)",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  "&:hover": {
                    boxShadow: "0 8px 24px rgba(24, 57, 50, 0.12)",
                    transform: "translateY(-2px)",
                    borderColor: "#ecbf52"
                  }
                }}
              >
                {/* Day Header */}
                <Box
                  sx={{
                    bgcolor: index % 2 === 0 ? "#183932" : "#ecbf52",
                    p: { xs: 2.5, md: 3 },
                    display: "flex",
                    alignItems: "center",
                    gap: 2
                  }}
                >
                  <Box
                    sx={{
                      px: { xs: 2, md: 3 }, // padding left-right
                      py: { xs: 0.5, md: 1 }, // padding top-bottom
                      minWidth: { xs: 60, md: 80 },
                      borderRadius: "30px", // rounded pill shape
                      bgcolor: index % 2 === 0 ? "#ecbf52" : "#183932",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                      fontSize: { xs: "0.875rem", md: "1rem" },
                      color: index % 2 === 0 ? "#183932" : "#ecbf52",
                      border: `2px solid ${index % 2 === 0
                          ? "rgba(236, 191, 82, 0.4)"
                          : "rgba(24, 57, 50, 0.4)"
                        }`,
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                    }}
                  >
                    Day {index + 1}
                  </Box>

                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      color: index % 2 === 0 ? "white" : "#183932",
                      fontSize: { xs: "1.15rem", md: "1.4rem" },
                      letterSpacing: "-0.01em"
                    }}
                  >
                    {day.day.replace(/Day \d+:\s*/, "")}
                  </Typography>
                </Box>

                {/* Day Content */}
                <Box sx={{ p: { xs: 3, md: 4 } }}>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
                    {day.description.map((point, i) => (
                      <Box
                        key={i}
                        sx={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 2,
                          pl: 1,
                          transition: "all 0.2s ease",
                          "&:hover": {
                            transform: "translateX(4px)",
                            "& .check-icon": {
                              transform: "scale(1.2)"
                            }
                          }
                        }}
                      >
                        <Box
                          className="check-icon"
                          sx={{
                            mt: 0.3,
                            minWidth: 28,
                            height: 28,
                            borderRadius: "50%",
                            bgcolor: "rgba(236, 191, 82, 0.12)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            transition: "transform 0.2s ease"
                          }}
                        >
                          <CheckCircle
                            sx={{
                              color: "#ecbf52",
                              fontSize: 18
                            }}
                          />
                        </Box>
                        <Typography
                          variant="body1"
                          sx={{
                            color: "#4a5568",
                            lineHeight: 1.8,
                            fontSize: { xs: "1rem", md: "1.05rem" },
                            fontWeight: 400,
                            flex: 1
                          }}
                        >
                          {point}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>

        {/* End CTA */}
        <Box
          sx={{
            mt: 8,
            p: { xs: 4, md: 5 },
            bgcolor: "#183932",
            borderRadius: 3,
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "4px",
              bgcolor: "#ecbf52"
            }
          }}
        >
          <Typography
            sx={{
              color: "#ecbf52",
              fontSize: { xs: "1.25rem", md: "1.5rem" },
              fontWeight: 700,
              mb: 1.5,
              letterSpacing: "-0.01em"
            }}
          >
            Ready for Your {itinerary.title} Adventure?
          </Typography>
          <Typography
            sx={{
              color: "rgba(255,255,255,0.85)",
              fontSize: { xs: "0.95rem", md: "1.05rem" },
              maxWidth: "600px",
              mx: "auto",
              lineHeight: 1.7
            }}
          >
            Contact us to customize this itinerary or book your journey today
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}