// import React, { useState, useEffect } from 'react';
// import { AppBar, Toolbar, Box, Button, Menu, MenuItem, Typography, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, useTheme, useMediaQuery } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import { styled } from '@mui/material/styles';

// const StyledAppBar = styled(AppBar, { shouldForwardProp: (prop) => prop !== 'scrolled' })(
//   ({ theme, ownerState }) => ({
//     backgroundColor: ownerState.scrolled ? 'rgba(255,255,255,0.95)' : 'transparent',
//     boxShadow: ownerState.scrolled ? theme.shadows[4] : 'none',
//     transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     right: 0,
//     zIndex: 1200,
//   })
// );

// export default function Header() {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));

//   const [scrolled, setScrolled] = useState(false);
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const openMenu = Boolean(anchorEl);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <>
//       <StyledAppBar ownerState={{ scrolled }}>
//         <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
//           <Typography variant="h6" sx={{ color: scrolled ? 'black' : '#fff', fontWeight: 'bold' }}>
//             Hoopla
//           </Typography>

//           {isMobile ? (
//             <IconButton onClick={() => setDrawerOpen(true)} sx={{ color: scrolled ? 'black' : '#fff' }}>
//               <MenuIcon />
//             </IconButton>
//           ) : (
//             <Box sx={{ display: 'flex', gap: 2 }}>
//               <Button sx={{ color: scrolled ? 'black' : '#fff', textTransform: 'none' }} onClick={(e) => setAnchorEl(e.currentTarget)}>Destination</Button>
//               <Menu anchorEl={anchorEl} open={openMenu} onClose={() => setAnchorEl(null)}>
//                 <MenuItem onClick={() => setAnchorEl(null)}>Bangkok</MenuItem>
//                 <MenuItem onClick={() => setAnchorEl(null)}>Krabi</MenuItem>
//                 <MenuItem onClick={() => setAnchorEl(null)}>Pattaya</MenuItem>
//               </Menu>
//               <Button sx={{ color: scrolled ? 'black' : '#fff', textTransform: 'none' }}>About Us</Button>
//               <Button sx={{ color: scrolled ? 'black' : '#fff', textTransform: 'none' }}>Contact Us</Button>
//             </Box>
//           )}
//         </Toolbar>
//       </StyledAppBar>

//       {/* Mobile Drawer */}
//       <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
//         <Box sx={{ width: 250 }} role="presentation" onClick={() => setDrawerOpen(false)}>
//           <List>
//             <ListItem disablePadding>
//               <ListItemButton>
//                 <ListItemText primary="Destinations" />
//               </ListItemButton>
//             </ListItem>
//             <ListItem disablePadding>
//               <ListItemButton>
//                 <ListItemText primary="About Us" />
//               </ListItemButton>
//             </ListItem>
//             <ListItem disablePadding>
//               <ListItemButton>
//                 <ListItemText primary="Contact Us" />
//               </ListItemButton>
//             </ListItem>
//           </List>
//         </Box>
//       </Drawer>
//     </>
//   );
// }






import React, { useState, useEffect } from "react";
import {
    AppBar,
    Toolbar,
    Box,
    Button,
    Menu,
    MenuItem,
    Typography,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.jpg"

const StyledAppBar = styled(AppBar, { shouldForwardProp: (prop) => prop !== "scrolled" })(
    ({ theme, ownerState }) => ({
        backgroundColor: ownerState.scrolled ? "rgba(255,255,255,0.95)" : "transparent",
        boxShadow: ownerState.scrolled ? theme.shadows[4] : "none",
        transition: "background-color 0.3s ease, box-shadow 0.3s ease",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1200,
    })
);

export default function Header() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const navigate = useNavigate();

    const [scrolled, setScrolled] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const openMenu = Boolean(anchorEl);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <StyledAppBar ownerState={{ scrolled }}>
                <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>

                    <Link to="/">
                        <img
                            src={Logo}
                            alt="Logo"
                            style={{ height: "60px", marginRight: "8px", borderRadius: "5px", marginTop:"10px" }}
                        />
                    </Link>

                    {isMobile ? (
                        <IconButton
                            onClick={() => setDrawerOpen(true)}
                            sx={{ color: scrolled ? "black" : "#fff" }}
                        >
                            <MenuIcon />
                        </IconButton>
                    ) : (
                        <Box sx={{ display: "flex", gap: 2 }}>
                            {/* Destinations Menu */}
                            <Button
                                sx={{ color: scrolled ? "black" : "#fff", textTransform: "none" }}
                                onClick={(e) => setAnchorEl(e.currentTarget)}
                            >
                                Destination
                            </Button>
                            <Menu
                                anchorEl={anchorEl}
                                open={openMenu}
                                onClose={() => setAnchorEl(null)}
                            >
                                <MenuItem onClick={() => setAnchorEl(null)}>Bangkok</MenuItem>
                                <MenuItem onClick={() => setAnchorEl(null)}>Krabi</MenuItem>
                                <MenuItem onClick={() => setAnchorEl(null)}>Pattaya</MenuItem>
                            </Menu>

                            {/* Services Menu */}
                            <Button
                                sx={{ color: scrolled ? "black" : "#fff", textTransform: "none" }}
                                onClick={(e) => setAnchorEl(e.currentTarget)}
                            >
                                Services
                            </Button>
                            <Menu
                                anchorEl={anchorEl}
                                open={openMenu}
                                onClose={() => setAnchorEl(null)}
                            >
                                {/* ✅ Route to flight page */}
                                <MenuItem
                                    onClick={() => {
                                        setAnchorEl(null);
                                        navigate("/flight"); // navigate to FlightTicketForm
                                    }}>
                                    Flight Ticket
                                </MenuItem>
                                <MenuItem onClick={() => {
                                        setAnchorEl(null);
                                        navigate("/trainandbus"); // navigate to FlightTicketForm
                                    }}>
                                      Train/Bus Booking
                                    </MenuItem>
                                 <MenuItem onClick={() => {
                                        setAnchorEl(null);
                                        navigate("/hotel"); // navigate to FlightTicketForm
                                    }}>
                                      Hotel Booking
                                      </MenuItem>
                                 <MenuItem onClick={() => {
                                        setAnchorEl(null);
                                        navigate("/moneyexchange"); // navigate to FlightTicketForm
                                    }}>
                                      Money Exchange</MenuItem>
                                <MenuItem onClick={() => setAnchorEl(null)}>Visa Services</MenuItem>
                                <MenuItem onClick={() => setAnchorEl(null)}>Tour Packages</MenuItem>
                            </Menu>

                            <Button sx={{ color: scrolled ? "black" : "#fff", textTransform: "none" }}>
                                About Us
                            </Button>
                            <Button sx={{ color: scrolled ? "black" : "#fff", textTransform: "none" }}>
                                Contact Us
                            </Button>
                        </Box>
                    )}
                </Toolbar>
            </StyledAppBar>

            {/* Mobile Drawer */}
            <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                <Box
                    sx={{ width: 250 }}
                    role="presentation"
                    onClick={() => setDrawerOpen(false)}
                >
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary="Destinations" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            {/* ✅ Mobile drawer link to Flight page */}
                            <ListItemButton component={Link} to="/flight">
                                <ListItemText primary="Flight Ticket" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary="About Us" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary="Contact Us" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </>
    );
}
