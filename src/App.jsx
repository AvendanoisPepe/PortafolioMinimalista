import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Contacto from './pages/Contacto/PopupContacto'
import { Toaster } from "react-hot-toast";
import Temas from "./pages/moods/Temas";
import { GlobalProvider, useGlobal } from './context/GlobalContext'; // Ajusta ruta si cambias carpeta
import { themeBackgrounds } from "./pages/moods/themeBackgrounds";
import SobreMi from "./components/SobreMi/SobreMi";
import Colpatria from "./components/Estudios/Colpatria";
// BASES
import ColpatriaV1 from "./components/Estudios/Bases/ColpatriaV1";
import ColpatriaV2 from "./components/Estudios/Bases/ColpatriaV2";
import ClaroTmk from "./components/Estudios/Bases/ClaroTmk";
import JetSmart from "./components/Estudios/Bases/JetSmart";
import TelColombia from "./components/Estudios/Bases/TeleventasCol";
import Bsc from "./components/Estudios/Bases/Bsc";
import Completo from "./components/Estudios/Completo";
import Trabajos from "./components/Trabajos/Trabajos";
import PrimerosEstudios from "./components/Trabajos/Primeros";
import EstudiosUniversitarios from "./components/Trabajos/Universitarios";
import EstudiosLaborales from "./components/Trabajos/Laborales";
import ProximosEstudios from "./components/Trabajos/Proximo";
import ScrollToTop from "./components/Scroll/ScrollToTop";
import References from "./components/Referencias/Referencias";
import { useEffect, useState } from "react";
function App() {
  const { temaNombre } = useGlobal();
  const fondo = themeBackgrounds[temaNombre] || "";
  const [index, setIndex] = useState(0);
  const [actual, setActual] = useState(fondo[0] || "");

  // 🔄 cada 10s cambia de fondo SOLO si hay más de 1
  useEffect(() => {
    if (fondo.length > 1) {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % fondo.length);
      }, 10000);
      return () => clearInterval(interval);
    } else {
      setActual(fondo[0] || "");
    }
  }, [fondo]);

  // cuando index cambia → cambia el fondo con efecto fade
  useEffect(() => {
    if (fondo.length > 0) {
      setActual(fondo[index]);
    }
  }, [index, fondo]);
  const style = {
    backgroundImage: `url(${actual})`,
    backgroundSize: "cover",       // Se ajusta al viewport, sin estirarse
    backgroundPosition: "center",
    backgroundAttachment: "fixed", // 🔑 Hace que el fondo quede fijo
    minHeight: "100vh",
    transition: "background-image 0.5s ease-in-out",
  };

  return (
    <div style={style}>
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="contact" element={<Contacto />} />
        <Route path="about" element={<SobreMi />} />
        <Route
          path="colpatriaWebV2" 
          element={<Colpatria projectData={ColpatriaV2} />}
        />
        <Route
          path="colpatriaWeb"
          element={<Colpatria projectData={ColpatriaV1} />}
        />
        <Route
          path="claroTmk"
          element={<Colpatria projectData={ClaroTmk} />}
        />
        <Route
          path="jetsmart"
          element={<Colpatria projectData={JetSmart} />}
        />
        <Route
          path="televentasCol"
          element={<Colpatria projectData={TelColombia} />}
        />
        <Route path="bsc" element={<Colpatria projectData={Bsc} />} />
        <Route path="CompletoEstudios" element={<Completo />} />
        <Route path="allStudies" element={<Trabajos />} />
        <Route path="primerosEstudios" element={<PrimerosEstudios />} />
        <Route path="universityStudies" element={<EstudiosUniversitarios />} />
        <Route path="laborales" element={<EstudiosLaborales />} />
        <Route path="proximosEstudios" element={<ProximosEstudios />} />
        <Route path="referencias" element={<References />} />
      </Routes>
      <Temas />
    </div>
  );
}

export default App;
