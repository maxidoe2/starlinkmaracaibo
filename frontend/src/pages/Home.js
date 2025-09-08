// src/pages/Home.js
import React from "react";
import { Box, Typography, Button } from "@mui/material";

function Home() {
  return (
    <Box
  sx={{
    minHeight: "calc(100vh - 64px)", // Ajusta si tu navbar tiene otra altura
    width: "100vw",                // 👉 Esto elimina márgenes laterales
    margin: 0,                     // 👉 Esto asegura que no haya márgenes externos
    padding: 0,                    // 👉 Esto asegura que no haya padding interno
    backgroundImage: "url('/stars-background.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    textAlign: "center",
  }}
>

      <Typography
        variant="h2"
        sx={{
          fontWeight: "bold",
          mb: 2,
          textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
          fontSize: { xs: "2.5rem", sm: "3rem", md: "4rem" },
        }}
      >
        Starlink Maracaibo
      </Typography>
      <Typography
        variant="h5"
        sx={{
          mb: 4,
          textShadow: "1px 1px 3px rgba(0,0,0,0.7)",
          fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
        }}
      >
        El Internet satelital más rápido y estable en Venezuela
      </Typography>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#00bcd4",
          color: "white",
          fontWeight: "bold",
          px: 4,
          py: 1.5,
          fontSize: "1rem",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
          '&:hover': { backgroundColor: "#0097a7" }
        }}
        href="/tienda"
      >
        Ir a Tienda
      </Button>
    </Box>
  );
}

export default Home;
