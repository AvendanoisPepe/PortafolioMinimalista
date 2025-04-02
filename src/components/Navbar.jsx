import { Link } from "react-router-dom";
import "./navbar.scss"; // Importa el archivo SASS

function Navbar() {
  return (
    <header className="w-full flex justify-between items-center flex-wrap p-4 2xl:p-6">
      <div className="contentLogo md:w-[20%] flex items-center justify-center gap-4 mb-4 md:mb-0">
        <span className="logo">JS</span>
        <p className="nombre">Avendaño</p>
      </div>
      <nav className="menu w-full md:w-[50%] flex justify-center items-center gap-6">
        <Link to="/" className="transition text-xs lg:text-lg 2xl:text-2xl">
          Inicio
        </Link>
        <Link
          to="/about"
          className="transition text-xs lg:text-lg 2xl:text-2xl"
        >
          Sobre mí
        </Link>
        <Link
          to="/projects"
          className="transition text-xs lg:text-lg 2xl:text-2xl"
        >
          Proyectos
        </Link>
        <Link
          to="/contact"
          className="transition text-xs lg:text-lg 2xl:text-2xl"
        >
          Estudios
        </Link>
        <Link
          to="/contact"
          className="transition text-xs lg:text-lg 2xl:text-2xl"
        >
          Referencias
        </Link>
      </nav>
      <div className="botones w-full md:w-[30%] flex justify-center items-center gap-4 mt-4 md:mt-0">
        <button className="botonesOne w-[46%] transition text-xs md:text-sm">
          CV
        </button>
        <button className="botonesTwo w-[46%] transition text-xs md:text-sm">
          Contacto
        </button>
      </div>
    </header>
  );
}

export default Navbar;
