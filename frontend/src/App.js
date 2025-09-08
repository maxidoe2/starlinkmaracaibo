import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/DefaultNavbar";
import Home from "./pages/Home";
import AreaClientes from "./pages/AreaClientes";
import NuestraEmpresa from "./pages/NuestraEmpresa";
import Tienda from "./pages/Tienda";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: "2rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/area-clientes" element={<AreaClientes />} />
          <Route path="/nuestra-empresa" element={<NuestraEmpresa />} />
          <Route path="/tienda" element={<Tienda />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
