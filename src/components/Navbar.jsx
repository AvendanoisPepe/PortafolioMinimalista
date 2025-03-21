import { Link } from "react-router-dom";
import "./navbar.scss"; // Importa el archivo SASS

function Navbar() {
  return (
    <header className="w-full text-black p-8 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-4">
        <span className="p-4 text-5xl rounded-[12px]  logo">JS</span>
        <p>Avendaño</p>
      </div>

      {/* Navegación */}
      <nav className="flex gap-6 rounded-[12px] bg-gray-500 p-4">
        <Link to="/" className="hover:text-blue-400 transition ">
          Inicio
        </Link>
        <Link to="/about" className="hover:text-blue-400 transition">
          Sobre mí
        </Link>
        <Link to="/projects" className="hover:text-blue-400 transition">
          Proyectos
        </Link>
        <Link to="/contact" className="hover:text-blue-400 transition">
          Estudios
        </Link>
        <Link to="/contact" className="hover:text-blue-400 transition">
          Referencias
        </Link>
      </nav>

      {/* Botones */}
      <div className="flex gap-4">
        <button className="border border-blue-400 text-blue-400 px-4 py-2 rounded hover:bg-blue-400 hover:text-white transition">
          CV
        </button>
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
          Contacto
        </button>
      </div>
    </header>
  );
}

export default Navbar;
