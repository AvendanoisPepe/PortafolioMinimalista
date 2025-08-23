import "./Movil.scss"; // Importa el archivo SASS
import PopupContacto from "../pages/Contacto/PopupContacto";
import PopupCv from "../pages/CV/CV";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  MdCalculate,
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
  FaTree,
  FaReact,
  FaCode,
  FaExternalLinkAlt,
  FaHtml5
} from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

import { PiStudentBold } from "react-icons/pi";
import { IoLibrary } from "react-icons/io5";
import { GrCompare } from "react-icons/gr";
import { TbFileTypeSql } from "react-icons/tb";

export default function Movil({ onContactClick, toggleMenu }) {
  const [isProjectsExpanded, setIsProjectsExpanded] = useState(false);
  const [isStudiesExpanded, setIsStudiesExpanded] = useState(false);
  const [isContactoOpen, setIsContactoOpen] = useState(false);
  const [cv, setCv] = useState(false);
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
    { name: "Web Tr. Colpatria", icon: <IoLibrary />, link: "/colpatriaWebV2" },
    { name: "Web Tr. JetSmart", icon: <PiStudentBold />, link: "/jetsmart" },
    { name: "Web Tr. Televentas Col.", icon: <GrCompare />, link: "/televentasCol" },
    { name: "Web Tr. Claro TMK", icon: <FaTree />, link: "/claroTmk" },
    { name: "Web Tr. Bsc Inbound", icon: <MdCalculate />, link: "/bsc" },
    { name: "Ver todos los proyectos", icon: <FaCode />, link: "/CompletoEstudios" },
  ];
  const estudi = [
    { name: "Proximos Estudios", icon: <SiTypescript />, link: "/colpatriaWebV2" },
    { name: "Estudios Laborales", icon: <FaReact />, link: "/jetsmart" },
    { name: "Estudios Universitarios", icon: <TbFileTypeSql />, link: "/televentasCol" },
    { name: "Primeros Estudios", icon: <FaHtml5 />, link: "/claroTmk" },
  ];

  return (
    <div className="movil fixed inset-0 z-50 lg:hidden">
      {/* Fondo con blur */}
      <div className="fondo absolute inset-0 bg-gradient-to-br backdrop-blur-sm" />

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
            <div className="pere rounded-xl">
              <Link
                to=""
                onClick={closeMenu}
                className="transition-all duration-300 group">
                  <div className="flex gap-4 p-4  items-center w-[100%] ">
                    <div className="icono py-2 pr-2 rounded-lg group-hover:bg-blue-200 transition-colors">
                        <MdHome className="text-xl" />
                    </div>
                    <span className="font-medium">Inicio</span>
                  </div>
                </Link>     
            </div>    
            <div className="pere rounded-xl">
              <Link
                  to="/about"
                  onClick={closeMenu}
                  className="transition-all duration-300 group"
              >
                <div className="flex gap-4 p-4  items-center w-[100%] rounded-xl">
                  <div className="icono py-2 pr-2 rounded-lg group-hover:bg-green-200 transition-colors">
                      <MdPerson className="text-xl" />
                  </div>
                  <span className="font-medium">Sobre mí</span>
                </div>
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
                      to={project.link}
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
                    to="/CompletoEstudios"
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
                <div className="submenu px-4 py-4 space-y-2 animate-fadeIn">
                  {estudi.map((estu, index) => (
                    <Link
                      key={index}
                      to={estu.link}
                      onClick={closeMenu}
                      className="flex items-center p-3 rounded-lg hover:bg-gray-100/80 transition-colors"
                    >
                      <div className="w-full flex items-start gap-2">
                        <div className="">{estu.icon}</div>
                        <span className="text-sm">
                          {estu.name}
                        </span>
                      </div>
                    </Link>
                  ))}
                  <Link
                    to="/CompletoEstudios"
                    onClick={closeMenu}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-100/80 transition-colors"
                  >
                    <FaExternalLinkAlt className="" />
                    <span className="text-sm font-medium">
                      Ver todos los estudios
                    </span>
                  </Link>
                </div>
              )}
            </div>
            <div className="pere rounded-xl">
              <Link
                  to="/references"
                  onClick={closeMenu}
                  className="transition-all duration-300 group"
              >
                <div className="flex gap-4 p-4 items-center w-[100%] rounded-xl">
                  <div className="icono py-2 pr-2 rounded-lg group-hover:bg-pink-200 transition-colors">
                      <MdContacts className="text-xl" />
                  </div>
                  <span className="font-medium">Referencias</span>
                </div>
              </Link>
            </div>       
          </nav>
        </div>
        <div className="botones p-6 border-t space-y-4">
          <div className="flex gap-3">
            <button onClick={() => setCv(true)} className="flex-1 py-3 px-4 bg-white/80 hover:bg-white text-gray-800 font-medium rounded-lg transition-colors">
              CV
            </button>
            <button
              onClick={() => setIsContactoOpen(true)}
              className="flex-1 py-3 px-4 hover:bg-gray-700 font-medium rounded-lg transition-colors"
            >
              Contacto
            </button>
          </div>
        </div>
      </div>
      <PopupContacto
        isOpen={isContactoOpen}
        onClose={() => setIsContactoOpen(false)}
      />
      <PopupCv isOpen={cv} onClose={() => setCv(false)} />
    </div>
  );
}
