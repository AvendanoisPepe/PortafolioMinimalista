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
function App() {
  const { temaNombre } = useGlobal();
  const fondo = themeBackgrounds[temaNombre] || "";

  const style = {
    backgroundImage: `url(${fondo})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    transition: "background-image 0.5s ease-in-out",
  };
  return (
    <div style={style}>
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contacto />} />
        <Route path="/about" element={<SobreMi />} />
        <Route
          path="/colpatriaWebV2"
          element={<Colpatria projectData={ColpatriaV2} />}
        />
        <Route
          path="/colpatriaWeb"
          element={<Colpatria projectData={ColpatriaV1} />}
        />
        <Route
          path="/claroTmk"
          element={<Colpatria projectData={ClaroTmk} />}
        />
        <Route
          path="/jetsmart"
          element={<Colpatria projectData={JetSmart} />}
        />
        <Route
          path="/televentasCol"
          element={<Colpatria projectData={TelColombia} />}
        />
        <Route path="/bsc" element={<Colpatria projectData={Bsc} />} />
        <Route path="/CompletoEstudios" element={<Completo />} />
      </Routes>
      <Temas />
    </div>
  );
}

export default App;
