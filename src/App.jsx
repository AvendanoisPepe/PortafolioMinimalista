import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Contacto from './pages/Contacto/PopupContacto'
import { Toaster } from "react-hot-toast";
import Temas from "./pages/moods/Temas";
function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contacto />} />
      </Routes>
      <Temas />
    </>
  );
}

export default App;
