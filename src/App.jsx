import { ThemeProvider, createTheme, CssBaseline, Toolbar, Box, Typography } from '@mui/material';
import Header from './components/header/Header';
import LocationCard from './LocationCard';
import './App.css';

const theme = createTheme();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />


      <main>
        {/* Hero section */}
        <section className="hero">
          <div className="hero-inner">
            <h1>Explore Thailand with Greenmind</h1>
            <p>Handcrafted tours, local guides, unforgettable experiences.</p>
          </div>
        </section>

        {/* Locations section */}
        <Box sx={{ py: 4, px: 2 }}>
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              fontSize: 'clamp(20px, 4vw, 28px)',
              fontWeight: 600,
              fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
              color: '#333',
              mt: 4,
              mb: 2,
              textAlign: 'left',
            }}
          >
            Locations You Should Visit
          </Typography>

          <LocationCard />
        </Box>
      </main>
    </ThemeProvider>
  );
}
