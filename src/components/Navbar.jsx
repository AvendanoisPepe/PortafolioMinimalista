import { Link } from "react-router-dom";
import "./navbar.scss"; // Importa el archivo SASS
import { FaArrowTrendDown } from "react-icons/fa6";
import { useState, useRef, useEffect } from "react";
import {
  FaChevronDown,
  FaCode,
  FaGlobe,
  FaDatabase,
  FaLayerGroup,
  FaArrowRight,
} from "react-icons/fa";
function Navbar() {
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isStudiesOpen, setIsStudiesOpen] = useState(false);
  const projectsRef = useRef(null);
  const projectsButtonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        projectsRef.current &&
        !projectsRef.current.contains(event.target) &&
        projectsButtonRef.current &&
        !projectsButtonRef.current.contains(event.target)
      ) {
        setIsProjectsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <header className="w-full flex justify-between items-center flex-wrap p-4 2xl:p-6">
      <div className="contentLogo md:w-[20%] flex items-center justify-center gap-4 mb-4 md:mb-0">
        <span className="logo lg:text-4xl 2xl:text-5xl">JS</span>
        <p className="nombre lg:text-3xl 2xl:text-4xl">Avendaño</p>
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
        {/* Dropdown de Proyectos */}
        <div className="relative">
          <button
            ref={projectsButtonRef}
            className="flex items-center gap-1 transition text-xs lg:text-lg 2xl:text-2xl hover:text-zinc-500"
            onClick={() => setIsProjectsOpen(!isProjectsOpen)}
          >
            Proyectos
            <FaChevronDown
              className={`h-4 w-4 transition-transform ${
                isProjectsOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isProjectsOpen && (
            <div
              ref={projectsRef}
              className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-[1000px] bg-white shadow-lg rounded-sm border border-zinc-100 z-50"
            >
              {/* Flecha superior */}
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-t border-l border-zinc-100 rotate-45"></div>

              <div className="flex">
                {/* Sección izquierda - Lista de enlaces */}
                <div className="w-[60%] p-6 border-r border-zinc-100">
                  <h3 className="text-lg font-medium mb-4">Mis Proyectos</h3>

                  <div className="grid grid-cols-2 gap-4">
                    {/* Proyecto 1 */}
                    <Link
                      href="/projects/web"
                      className="flex gap-3 p-3 hover:bg-zinc-50 rounded-sm group"
                    >
                      <div className="shrink-0 mt-1">
                        <div className="bg-zinc-100 p-2 rounded-sm group-hover:bg-zinc-200 transition-colors">
                          <FaGlobe className="h-5 w-5 text-zinc-700" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">Desarrollo Web</h4>
                        <p className="text-xs text-zinc-500 mt-1">
                          Sitios y aplicaciones web
                        </p>
                      </div>
                    </Link>

                    {/* Proyecto 2 */}
                    <Link
                      href="/projects/mobile"
                      className="flex gap-3 p-3 hover:bg-zinc-50 rounded-sm group"
                    >
                      <div className="shrink-0 mt-1">
                        <div className="bg-zinc-100 p-2 rounded-sm group-hover:bg-zinc-200 transition-colors">
                          <FaLayerGroup className="h-5 w-5 text-zinc-700" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">Apps Móviles</h4>
                        <p className="text-xs text-zinc-500 mt-1">
                          Aplicaciones iOS y Android
                        </p>
                      </div>
                    </Link>

                    {/* Proyecto 3 */}
                    <Link
                      href="/projects/backend"
                      className="flex gap-3 p-3 hover:bg-zinc-50 rounded-sm group"
                    >
                      <div className="shrink-0 mt-1">
                        <div className="bg-zinc-100 p-2 rounded-sm group-hover:bg-zinc-200 transition-colors">
                          <FaDatabase className="h-5 w-5 text-zinc-700" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">Backend</h4>
                        <p className="text-xs text-zinc-500 mt-1">
                          APIs y servicios
                        </p>
                      </div>
                    </Link>

                    {/* Proyecto 4 */}
                    <Link
                      href="/projects/other"
                      className="flex gap-3 p-3 hover:bg-zinc-50 rounded-sm group"
                    >
                      <div className="shrink-0 mt-1">
                        <div className="bg-zinc-100 p-2 rounded-sm group-hover:bg-zinc-200 transition-colors">
                          <FaCode className="h-5 w-5 text-zinc-700" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">Otros Proyectos</h4>
                        <p className="text-xs text-zinc-500 mt-1">
                          Experimentos y más
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>

                {/* Sección derecha - Contenido libre */}
                <div className="w-[40%] p-6">
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-medium mb-2">
                        Proyecto Destacado
                      </h3>
                      <p className="text-sm text-zinc-600 mb-4">
                        E-commerce desarrollado con React y Node.js para una
                        tienda de productos artesanales.
                      </p>

                      <div className="aspect-video bg-zinc-100 rounded-sm mb-4 overflow-hidden">
                        <img
                          src="/placeholder.svg?height=150&width=200"
                          alt="Proyecto destacado"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    <Link
                      href="/projects"
                      className="inline-flex items-center text-sm font-medium hover:underline"
                    >
                      Ver todos los proyectos
                      <FaArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <Link
          to="/contact"
          className="transition text-xs lg:text-lg 2xl:text-2xl"
        >
          Estudios
          <FaArrowTrendDown />
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
