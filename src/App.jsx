import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import AppRoutes from "./routes/AppRoutes";
import "./App.css";

const theme = createTheme();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <main>
          <AppRoutes />
        </main>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}
