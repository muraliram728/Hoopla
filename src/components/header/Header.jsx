import React, { useState, useEffect } from "react";
import {
    AppBar,
    Toolbar,
    Box,
    Button,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Collapse,
    Menu,
    MenuItem,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.jpg";
import itineraries from "../../data/itineraries";

const StyledAppBar = styled(AppBar, { shouldForwardProp: (prop) => prop !== "scrolled" })(
    ({ theme, ownerState }) => ({
        backgroundColor: ownerState.scrolled ? "#183932" : "transparent",
        color: "white",
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
    const [drawerOpen, setDrawerOpen] = useState(false);

    // Mobile Drawer collapse states
    const [destOpen, setDestOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);

    // Desktop dropdown anchors
    const [anchorDestination, setAnchorDestination] = useState(null);
    const [anchorServices, setAnchorServices] = useState(null);

    const services = [
        { name: "Flight Ticket", path: "/flight" },
        { name: "Train/Bus Booking", path: "/trainandbus" },
        { name: "Hotel Booking", path: "/hotel" },
        { name: "Money Exchange", path: "/moneyexchange" },
        { name: "Visa Services", path: "/visaservice" },
    ];

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <StyledAppBar ownerState={{ scrolled }}>
                <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                    {/* Logo */}
                    <Link to="/">
                        <img
                            src={Logo}
                            alt="Logo"
                            style={{ height: 60, marginRight: 8, borderRadius: 5, marginTop: 10, cursor: "pointer" }}
                        />
                    </Link>

                    {/* Desktop Menu */}
                    {!isMobile && (
                        <Box sx={{ display: "flex", gap: 2 }}>
                            {/* Destinations Dropdown */}
                            <Button
                                sx={{ color: scrolled ? "white" : "black", textTransform: "none" }}
                                onClick={(e) => setAnchorDestination(e.currentTarget)}
                            >
                                Destination
                            </Button>
                            <Menu
                                anchorEl={anchorDestination}
                                open={Boolean(anchorDestination)}
                                onClose={() => setAnchorDestination(null)}
                                sx={{ mt: 1 }}
                            >
                                <Box sx={{ display: "flex", gap: 1, px: 1 }}>
                                    {/* Domestic */}
                                    <Box sx={{ display: "flex", flexDirection: "column", pr: 2 }}>
                                        <h5>Domestic</h5>
                                        {itineraries
                                            .filter((d) => d.type === "domestic")
                                            .map((dest) => (
                                                <MenuItem
                                                    key={dest.id}
                                                    onClick={() => {
                                                        setAnchorDestination(null);
                                                        navigate(`/itinerary/${dest.id}`);
                                                    }}
                                                >
                                                    {dest.title}
                                                </MenuItem>
                                            ))}
                                    </Box>

                                    {/* Vertical Line */}
                                    <Box sx={{ width: "2px", backgroundColor: "#ecbf52" }} />

                                    {/* International */}
                                    <Box sx={{ display: "flex", flexDirection: "column", pl: 2 }}>
                                        <h5>International</h5>
                                        {itineraries
                                            .filter((d) => d.type === "international")
                                            .map((dest) => (
                                                <MenuItem
                                                    key={dest.id}
                                                    onClick={() => {
                                                        setAnchorDestination(null);
                                                        navigate(`/itinerary/${dest.id}`);
                                                    }}
                                                >
                                                    {dest.title}
                                                </MenuItem>
                                            ))}
                                    </Box>
                                </Box>
                            </Menu>


                            {/* Services Dropdown */}
                            <Button
                                sx={{ color: scrolled ? "white" : "black", textTransform: "none" }}
                                onClick={(e) => setAnchorServices(e.currentTarget)}
                            >
                                Services
                            </Button>
                            <Menu
                                anchorEl={anchorServices}
                                open={Boolean(anchorServices)}
                                onClose={() => setAnchorServices(null)}
                            >
                                {services.map((s) => (
                                    <MenuItem
                                        key={s.name}
                                        onClick={() => {
                                            setAnchorServices(null);
                                            navigate(s.path);
                                        }}
                                    >
                                        {s.name}
                                    </MenuItem>
                                ))}
                            </Menu>

                            <Button sx={{ color: scrolled ? "white" : "black", textTransform: "none" }} onClick={() => navigate("/about")}>
                                About Us
                            </Button>
                            <Button sx={{ color: scrolled ? "white" : "black", textTransform: "none" }} onClick={() => navigate("/contact")}>
                                Contact Us
                            </Button>
                        </Box>
                    )}

                    {/* Mobile Hamburger */}
                    {isMobile && (
                        <IconButton onClick={() => setDrawerOpen(true)} sx={{ color: scrolled ? "black" : "#fff" }}>
                            <MenuIcon />
                        </IconButton>
                    )}
                </Toolbar>
            </StyledAppBar>

            {/* Mobile Drawer */}
            <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                <Box sx={{ width: 250 }} role="presentation">
                    <List>
                        {/* Destinations Collapse */}
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => setDestOpen(!destOpen)}>
                                <ListItemText primary="Destination" />
                                {destOpen ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>
                        </ListItem>
                        <Collapse in={destOpen} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                {itineraries.map((dest) => (
                                    <ListItemButton
                                        key={dest.id}
                                        sx={{ pl: 4 }}
                                        onClick={() => {
                                            navigate(`/itinerary/${dest.id}`);
                                            setDrawerOpen(false);
                                        }}
                                    >
                                        <ListItemText primary={dest.title} />
                                    </ListItemButton>
                                ))}
                            </List>
                        </Collapse>

                        {/* Services Collapse */}
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => setServicesOpen(!servicesOpen)}>
                                <ListItemText primary="Services" />
                                {servicesOpen ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>
                        </ListItem>
                        <Collapse in={servicesOpen} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                {services.map((s) => (
                                    <ListItemButton
                                        key={s.name}
                                        sx={{ pl: 4 }}
                                        onClick={() => {
                                            navigate(s.path);
                                            setDrawerOpen(false);
                                        }}
                                    >
                                        <ListItemText primary={s.name} />
                                    </ListItemButton>
                                ))}
                            </List>
                        </Collapse>

                        {/* About / Contact */}
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => { navigate("/about"); setDrawerOpen(false); }}>
                                <ListItemText primary="About Us" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => { navigate("/contact"); setDrawerOpen(false); }}>
                                <ListItemText primary="Contact Us" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </>
    );
}
