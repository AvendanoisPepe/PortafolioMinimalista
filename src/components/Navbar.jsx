import { Link } from "react-router-dom";
import "./navbar.scss"; // Importa el archivo SASS

function Navbar() {
  return (
    <header className="w-full flex justify-between items-center">
      <div className="contentLogo w-[20%] flex items-center justify-center gap-4">
        <span className="logo">
          JS
        </span>
        <p className="nombre">Avendaño</p>
      </div>
      <nav className="menu w-[50%] flex justify-center items-center gap-6">
        <Link to="/" className="transition ">
          Inicio
        </Link>
        <Link to="/about" className="transition">
          Sobre mí
        </Link>
        <Link to="/projects" className="transition">
          Proyectos
        </Link>
        <Link to="/contact" className="transition">
          Estudios
        </Link>
        <Link to="/contact" className="transition">
          Referencias
        </Link>
      </nav>
      <div className="botones flex justify-center items-center gap-4 w-[30%] ">
        <button className="botonesOne w-[46%] transition">
          CV
        </button>
        <button className="botonesTwo w-[46%] transition">
          Contacto
        </button>
      </div>
    </header>
  );
}

export default Navbar;
