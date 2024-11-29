import "./App.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// Define pages routes
import { Routes, Route } from "react-router-dom";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

// pages
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contacto from "./pages/contacto/Contacto";
import Rrhh from "./pages/rrhh/Rrhh";
import Terapia from "./pages/terapia-psicologica/Terapia";
import Asesoria from "./pages/asesoria-consultoria/Asesoria";
import Psicotecnico from "./pages/psicotecnico-aptopsicologico/Psicotecnico";
import Capacitaciones from "./pages/capacitaciones-entrevistas/Capacitaciones";
import Error from "./pages/error-page/Error";

// navbar
import NavigationBar from "./components/layout/navbar/Navbar";

// Footer
import Footer from "./components/layout/footer/Footer";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <NavigationBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacto" element={<Contacto />} />

        <Route path="/rrhh" element={<Rrhh />} />
        <Route path="/terapia-psicologica" element={<Terapia />} />
        <Route path="/asesoria-consultoria" element={<Asesoria />} />
        <Route
          path="/psicotecnico-aptopsicologico"
          element={<Psicotecnico />}
        />
        <Route
          path="/capacitaciones-entrevistas"
          element={<Capacitaciones />}
        />

        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
