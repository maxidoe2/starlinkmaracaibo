import { useState } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import DefaultNavbarMobile from "./DefaultNavbarMobile";
import DefaultNavbarDropdown from "./DefaultNavbarDropdown";

const routes = [
  { name: "Home", route: "/" },
  { name: "Área Clientes", route: "/area-clientes" },
  { name: "Nuestra Empresa", route: "/nuestra-empresa" },
  { name: "Tienda", route: "/tienda" },
  { name: "Contacto", route: "/contacto" },
];

function DefaultNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <AppBar position="static" sx={{ backgroundColor: "#000000" }}>
      <Toolbar>
      <Box sx={{ flexGrow: 1 }}>
    <Link to="/">
        <img
            src="/logo.png"
            alt="Starlink Maracaibo"
            style={{
                height: "35px",
                width: "auto",
                objectFit: "contain",
                marginTop: "5px"
            }}
        />
    </Link>
</Box>


        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          {routes.map((route) => (
            <DefaultNavbarDropdown key={route.name} name={route.name} route={route.route} />
          ))}
        </Box>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton color="inherit" onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>
      <DefaultNavbarMobile routes={routes} open={mobileOpen} />
    </AppBar>
  );
}

export default DefaultNavbar;