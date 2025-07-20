import "./Movil.scss"; // Importa el archivo SASS
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  MdOutlineMenuBook,
  MdClose,
  MdExpandMore,
  MdExpandLess,
  MdHome,
  MdPerson,
  MdWork,
  MdSchool,
  MdContacts,
} from "react-icons/md";
import {
  FaGlobe,
  FaLayerGroup,
  FaDatabase,
  FaCode,
  FaExternalLinkAlt,
} from "react-icons/fa";

export default function Movil({ onContactClick, toggleMenu }) {
  const [isProjectsExpanded, setIsProjectsExpanded] = useState(false);
  const [isStudiesExpanded, setIsStudiesExpanded] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  const handleContactClick = () => {
    closeMenu();
    if (onContactClick) {
      onContactClick();
    }
  };

  // Proyectos del submenú
  const projects = [
    { name: "Desarrollo Web", icon: <FaGlobe />, link: "/projects/web" },
    { name: "Apps Móviles", icon: <FaLayerGroup />, link: "/projects/mobile" },
    { name: "Backend", icon: <FaDatabase />, link: "/projects/backend" },
    { name: "Otros Proyectos", icon: <FaCode />, link: "/projects/other" },
  ];

  return (
    <div className="movil fixed inset-0 z-50 sm:hidden">
      {/* Fondo con blur */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 backdrop-blur-sm" />

      {/* Contenido del menú */}
      <div className="relative h-full flex flex-col">
        {/* Header del menú */}
        <div className="arriba flex justify-between items-center p-6 border-b">
          <div className="flex items-center gap-4">
            <span className="text-4xl font-bold">JS</span>
            <span className="text-2xl font-light">Avendaño</span>
          </div>
          <button
            onClick={toggleMenu}
            className="p-1 rounded-full transition-colors shadow-sm"
          >
            <MdClose className="text-3xl font-bold" />
          </button>
        </div>

        {/* Navegación principal */}
        <div className="flex-1 overflow-y-auto p-6">
          <nav className="space-y-2">
            <div className="fondo flex flex-col gap-2 items-start w-[100%] rounded-xl">
                <Link
                    to="/pedro"
                    onClick={closeMenu}
                    className=" flex items-center gap-4 p-4 rounded-xl transition-all duration-300 group"
                >
                    <div className="py-2 pr-2 rounded-lg group-hover:bg-blue-200 transition-colors">
                        <MdHome className="text-xl" />
                    </div>
                    <span className="font-medium">Inicio</span>
                </Link>
            </div>
            <div className="fondo flex flex-col gap-2 items-start w-[100%] rounded-xl">
                <Link
                    to="/about"
                    onClick={closeMenu}
                    className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 group"
                >
                <div className="py-2 pr-2 rounded-lg group-hover:bg-green-200 transition-colors">
                    <MdPerson className="text-xl" />
                </div>
                <span className="font-medium">Sobre mí</span>
                </Link>
            </div>
            <div className="fondo2 rounded-xl overflow-hidden">
              <button
                onClick={() => setIsProjectsExpanded(!isProjectsExpanded)}
                className="w-full flex items-center justify-between gap-4 p-4 hover:bg-white/80 transition-all duration-300 group"
              >
                <div className="icono flex items-center gap-4">
                  <div className="p-2 rounded-lg group-hover:bg-purple-200 transition-colors">
                    <MdWork className="text-xl" />
                  </div>
                  <span className="font-medium">Proyectos</span>
                </div>
                {isProjectsExpanded ? (
                  <MdExpandLess className="text-gray-500 text-xl" />
                ) : (
                  <MdExpandMore className="text-gray-500 text-xl" />
                )}
              </button>
              {isProjectsExpanded && (
                <div className="submenu px-4 py-4 space-y-2 animate-fadeIn">
                  {projects.map((project, index) => (
                    <Link
                      key={index}
                      href={project.link}
                      onClick={closeMenu}
                      className="flex items-center p-3 rounded-lg hover:bg-gray-100/80 transition-colors"
                    >
                      <div className="w-full flex items-start gap-2">
                        <div className="">{project.icon}</div>
                        <span className="text-sm">
                          {project.name}
                        </span>
                      </div>
                    </Link>
                  ))}
                  <Link
                    href="/projects"
                    onClick={closeMenu}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-100/80 transition-colors"
                  >
                    <FaExternalLinkAlt className="" />
                    <span className="text-sm font-medium">
                      Ver todos los proyectos
                    </span>
                  </Link>
                </div>
              )}
            </div>

            <div className="fondo2 rounded-xl overflow-hidden">
              <button
                onClick={() => setIsStudiesExpanded(!isStudiesExpanded)}
                className="w-full flex items-center justify-between gap-4 p-4 hover:bg-white/80 transition-all duration-300 group"
              >
                <div className="icono flex items-center gap-4">
                  <div className="p-2 rounded-lg group-hover:bg-orange-200 transition-colors">
                    <MdSchool className="text-xl" />
                  </div>
                  <span className="font-medium">Estudios</span>
                </div>
                {isStudiesExpanded ? (
                  <MdExpandLess className="text-gray-500 text-xl" />
                ) : (
                  <MdExpandMore className="text-gray-500 text-xl" />
                )}
              </button>
              {isStudiesExpanded && (
                <div className="px-4 pb-4 space-y-2 animate-fadeIn">
                  <Link
                    href="/studies/formal"
                    onClick={closeMenu}
                    className="flex items-center gap-3 p-3 ml-4 rounded-lg bg-gray-50/80 hover:bg-gray-100/80 transition-colors"
                  >
                    <span className="text-gray-700 text-sm">
                      Educación Formal
                    </span>
                  </Link>
                  <Link
                    href="/studies/certifications"
                    onClick={closeMenu}
                    className="flex items-center gap-3 p-3 ml-4 rounded-lg bg-gray-50/80 hover:bg-gray-100/80 transition-colors"
                  >
                    <span className="text-gray-700 text-sm">
                      Certificaciones
                    </span>
                  </Link>
                </div>
              )}
            </div>
            <div className="fondo flex flex-col gap-2 items-start w-[100%] rounded-xl">
                <Link
                    href="/references"
                    onClick={closeMenu}
                    className="flex items-center gap-4 p-4 transition-all duration-300 group"
                >
                <div className="py-2 pr-2 rounded-lg group-hover:bg-pink-200 transition-colors">
                    <MdContacts className="text-xl" />
                </div>
                <span className="font-medium">Referencias</span>
                </Link>
            </div>
          </nav>
        </div>
        <div className="p-6 border-t border-gray-200/50 space-y-4">
          <div className="flex gap-3">
            <button className="flex-1 py-3 px-4 bg-white/80 hover:bg-white text-gray-800 font-medium rounded-lg transition-colors">
              CV
            </button>
            <button
              onClick={handleContactClick}
              className="flex-1 py-3 px-4 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors"
            >
              Contacto
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
