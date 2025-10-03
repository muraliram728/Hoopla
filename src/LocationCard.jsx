import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import locations from './data/locations';

export default function LocationCard() {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 2,
        flexWrap: 'nowrap',
        overflowX: 'auto',
        py: 2,
        px: 1,
        marginLeft:'52px'
      }}
    >
      {locations.map((loc) => (
        <Card
          key={loc.id}
          sx={{
            width: 270,
            flexShrink: 0,
            boxShadow: 'none',       // no shadow
            border: 'none',           // no border
            '&:hover': { boxShadow: 'none' }, // prevent shadow on hover
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
                transform: 'scale(1.05)', // slight zoom
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
