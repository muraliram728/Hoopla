import React, { useEffect, useRef, useState } from 'react';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import locations from './data/locations';

export default function LocationCard() {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollSpeed = 0.5; // pixels per frame
    let animationFrameId;

    const autoScroll = () => {
      if (!isPaused && scrollContainer) {
        scrollAmount += scrollSpeed;
        
        // Check if we've scrolled past half the content (since we duplicated it)
        const maxScroll = scrollContainer.scrollWidth / 2;
        
        if (scrollAmount >= maxScroll) {
          scrollAmount = 0;
          scrollContainer.scrollLeft = 0;
        } else {
          scrollContainer.scrollLeft = scrollAmount;
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isPaused]);

  // Duplicate locations array for seamless loop
  const duplicatedLocations = [...locations, ...locations];

  return (
    <Box
      ref={scrollRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      sx={{
        display: 'flex',
        gap: 2,
        flexWrap: 'nowrap',
        overflowX: 'auto',
        py: 2,
        px: 1,
        scrollBehavior: 'auto',
        '&::-webkit-scrollbar': {
          display: 'none', // hide scrollbar
        },
        msOverflowStyle: 'none', // IE and Edge
        scrollbarWidth: 'none', // Firefox
        cursor: isPaused ? 'grab' : 'default',
        '&:active': {
          cursor: isPaused ? 'grabbing' : 'default',
        }
      }}
    >
      {duplicatedLocations.map((loc, index) => (
        <Card
          key={`${loc.id}-${index}`}
          sx={{
            width: 270,
            flexShrink: 0,
            boxShadow: 'none',
            border: 'none',
            transition: 'transform 0.3s ease',
            '&:hover': { 
              boxShadow: 'none',
              transform: 'translateY(-8px)',
            },
          }}
        >
          <CardMedia
            component="img"
            image={loc.image}
            alt={loc.title}
            sx={{
              width: '100%',
              height: 360,
              objectFit: 'cover',
              transition: 'transform 0.5s ease',
              '&:hover': {
                transform: 'scale(1.05)',
              },
            }}
          />
          <CardContent sx={{ height: 120 }}>
            <Typography variant="h6">{loc.title}</Typography>
            <Typography variant="body2" color="text.secondary">
              {loc.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}