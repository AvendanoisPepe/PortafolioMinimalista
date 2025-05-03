import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Contacto from './pages/Contacto/PopupContacto'
import { Toaster } from "react-hot-toast";
import Temas from "./pages/moods/Temas";
import { GlobalProvider, useGlobal } from './context/GlobalContext'; // Ajusta ruta si cambias carpeta
import { themeBackgrounds } from "./pages/moods/themeBackgrounds";
function App() {
  const { temaNombre } = useGlobal();
  const fondo = themeBackgrounds[temaNombre] || "";
  console.log(fondo);
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
      </Routes>
      <Temas />
    </div>
  );
}

export default App;
