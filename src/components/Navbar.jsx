import { Link } from "react-router-dom";
import "./navbar.scss"; // Importa el archivo SASS
import { FaArrowTrendDown } from "react-icons/fa6";
import { useState, useRef, useEffect } from "react";
import {
  FaArrowRight,
} from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { PiStudentBold } from "react-icons/pi";
import { GrCompare } from "react-icons/gr";
import { FaTree, FaReact, FaHtml5 } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { TbFileTypeSql } from "react-icons/tb";

import books from "../assets/imagenes/books.png"
import codigo from "../assets/imagenes/timeline.png"
import PopupContacto from "../pages/Contacto/PopupContacto";
function Navbar() {
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isStudiesOpen, setIsStudiesOpen] = useState(false);
  const projectsRef = useRef(null);
  const projectsButtonRef = useRef(null);
  const studiesRef = useRef(null);
  const studiesButtonRef = useRef(null);
  const [isContactoOpen, setIsContactoOpen] = useState(false);

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
      if (
        studiesRef.current &&
        !studiesRef.current.contains(event.target) &&
        studiesButtonRef.current &&
        !studiesButtonRef.current.contains(event.target)
      ) {
        setIsStudiesOpen(false);
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

        <div className="submenu relative">
          <button
            ref={projectsButtonRef}
            className="flex items-center gap-1 transition text-xs lg:text-lg 2xl:text-2xl"
            onClick={() => setIsProjectsOpen(!isProjectsOpen)}
          >
            Proyectos
            <FaArrowTrendDown
              className={`transition-transform ${
                isProjectsOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isProjectsOpen && (
            <div
              ref={projectsRef}
              className="contenedorSub absolute top-full left-1/2 transform -translate-x-1/2 mt-4 2xl:w-[1200px] md:w-[1000px]"
            >
              <div className="flechita absolute -top-2 left-1/2 transform -translate-x-1/2 rotate-45"></div>

              <div className="contenido flex">
                <div className="izquierda 2xl:w-[65%] md:w-[70%] p-6">
                  <h3 className="titular 2xl:text-2xl md:text-lg font-bold mb-4">
                    Mis Proyectos
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    <Link
                      href="/projects/web"
                      className="w-[49%] flex gap-3 p-3 rounded-sm"
                    >
                      <div className="iconico w-[30%] flex justify-center align-center">
                        <div className="p-3 flex justify-center align-center">
                          <IoLibrary className="2xl:text-3xl md:text-2xl" />
                        </div>
                      </div>
                      <div className="textito w-[70%]">
                        <h4 className="font-bold 2xl:text-xl md:text-lg">
                          Web Tr. Colpatria
                        </h4>
                        <p className="2xl:text-sm md:text-xs text-zinc-500 mt-1">
                          Biblioteca de informacion (PDF)
                        </p>
                      </div>
                    </Link>
                    <Link
                      href="/projects/mobile"
                      className="w-[49%] flex gap-3 p-3 rounded-sm"
                    >
                      <div className="iconico w-[30%] flex justify-center align-center">
                        <div className="p-3 flex justify-center align-center">
                          <PiStudentBold className="2xl:text-3xl md:text-2xl" />
                        </div>
                      </div>
                      <div className="textito w-[70%]">
                        <h4 className="font-bold 2xl:text-xl md:text-lg">
                          Web Tr. JetSmart
                        </h4>
                        <p className="2xl:text-sm md:text-xs text-zinc-500 mt-1">
                          Comandos de aprendizaje
                        </p>
                      </div>
                    </Link>

                    <Link
                      href="/projects/backend"
                      className="w-[49%] flex gap-3 p-3 rounded-sm"
                    >
                      <div className="iconico w-[30%] flex justify-center align-center">
                        <div className="p-3 flex justify-center align-center">
                          <GrCompare className="2xl:text-3xl md:text-2xl" />
                        </div>
                      </div>
                      <div className="textito w-[70%]">
                        <h4 className="font-bold 2xl:text-xl md:text-lg">
                          Web Tr. Televentas Col.
                        </h4>
                        <p className="2xl:text-sm md:text-xs text-zinc-500 mt-1">
                          Versus de datos (Graficas)
                        </p>
                      </div>
                    </Link>
                    <Link
                      href="/projects/other"
                      className="w-[49%] flex gap-3 p-3 rounded-sm"
                    >
                      <div className="iconico w-[30%] flex justify-center align-center">
                        <div className="p-3 flex justify-center align-center">
                          <FaTree className="2xl:text-3xl md:text-2xl" />
                        </div>
                      </div>
                      <div className="textito w-[70%]">
                        <h4 className="font-bold 2xl:text-xl md:text-lg">
                          Web Tr. Claro TMK
                        </h4>
                        <p className="2xl:text-sm md:text-xs mt-1">
                          Argumentarios y tipificadores
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>

                <div className="derecha 2xl:w-[35%] md:w-[30%] p-6">
                  <div className="conjunto h-full flex flex-col justify-between">
                    <div className="libre">
                      <p className="2xl:text-sm md:text-xs mb-4">
                        Conjunto de proyectos que acumulan muchos desarrollos
                        diferentes en todo sentido.
                      </p>

                      <div className="aspect-video bg-zinc-100 rounded-sm mb-4 overflow-hidden">
                        <figure className="flex justify-center items-center w-full h-full">
                          <img
                            src={books}
                            alt="Proyecto destacado"
                            className="w-[50%] object-cover"
                          />
                        </figure>
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
        <div className="submenu relative">
          <button
            ref={studiesButtonRef}
            className="flex items-center gap-1 transition text-xs lg:text-lg 2xl:text-2xl"
            onClick={() => setIsStudiesOpen(!isStudiesOpen)}
          >
            Estudios
            <FaArrowTrendDown
              className={`transition-transform ${
                isStudiesOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isStudiesOpen && (
            <div
              ref={studiesRef}
              className="contenedorSub absolute top-full left-1/2 transform -translate-x-1/2 mt-4 2xl:w-[1200px] md:w-[1000px]"
            >
              <div className="flechita absolute -top-2 left-1/2 transform -translate-x-1/2 rotate-45"></div>

              <div className="contenido flex">
                <div className="izquierda 2xl:w-[65%] md:w-[70%] p-6">
                  <h3 className="titular 2xl:text-2xl md:text-lg font-bold mb-4">
                    Mis Estudios
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <Link
                      href="/projects/web"
                      className="w-[49%] flex gap-3 p-3 rounded-sm"
                    >
                      <div className="iconico w-[30%] flex justify-center align-center">
                        <div className="p-3 flex justify-center align-center">
                          <SiTypescript className="2xl:text-3xl md:text-2xl" />
                        </div>
                      </div>
                      <div className="textito w-[70%]">
                        <h4 className="font-bold 2xl:text-xl md:text-lg">
                          Proximos Estudios
                        </h4>
                        <p className="2xl:text-sm md:text-xs text-zinc-500 mt-1">
                          Next.js - Tailwind - TypeScript
                        </p>
                      </div>
                    </Link>
                    <Link
                      href="/projects/mobile"
                      className="w-[49%] flex gap-3 p-3 rounded-sm"
                    >
                      <div className="iconico w-[30%] flex justify-center align-center">
                        <div className="p-3 flex justify-center align-center">
                          <FaReact className="2xl:text-3xl md:text-2xl" />
                        </div>
                      </div>
                      <div className="textito w-[70%]">
                        <h4 className="font-bold 2xl:text-xl md:text-lg">
                          Estudios Laborales
                        </h4>
                        <p className="2xl:text-sm md:text-xs text-zinc-500 mt-1">
                          React.js - Node.js - WebPack
                        </p>
                      </div>
                    </Link>

                    <Link
                      href="/projects/backend"
                      className="w-[49%] flex gap-3 p-3 rounded-sm"
                    >
                      <div className="iconico w-[30%] flex justify-center align-center">
                        <div className="p-3 flex justify-center align-center">
                          <TbFileTypeSql className="2xl:text-3xl md:text-2xl" />
                        </div>
                      </div>
                      <div className="textito w-[70%]">
                        <h4 className="font-bold 2xl:text-xl md:text-lg">
                          Estudios Universitarios
                        </h4>
                        <p className="2xl:text-sm md:text-xs text-zinc-500 mt-1">
                          Php - Java - Mysql - Mongo DB
                        </p>
                      </div>
                    </Link>
                    <Link
                      href="/projects/other"
                      className="w-[49%] flex gap-3 p-3 rounded-sm"
                    >
                      <div className="iconico w-[30%] flex justify-center align-center">
                        <div className="p-3 flex justify-center align-center">
                          <FaHtml5 className="2xl:text-3xl md:text-2xl" />
                        </div>
                      </div>
                      <div className="textito w-[70%]">
                        <h4 className="font-bold 2xl:text-xl md:text-lg">
                          Primeros Estudios
                        </h4>
                        <p className="2xl:text-sm md:text-xs mt-1">
                          Front-End Development
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>

                <div className="derecha 2xl:w-[35%] md:w-[30%] p-6">
                  <div className="conjunto h-full flex flex-col justify-between">
                    <div className="libre">
                      <p className="2xl:text-sm md:text-xs mb-4">
                        Un resumen de certificaciones, formaciones y títulos
                        obtenidos.
                      </p>

                      <div className="aspect-video bg-zinc-100 rounded-sm mb-4 overflow-hidden">
                        <figure className="flex justify-center items-center w-full h-full">
                          <img
                            src={codigo}
                            alt="Estudios"
                            className="w-[50%] object-cover"
                          />
                        </figure>
                      </div>
                    </div>

                    <Link
                      to="/studies"
                      className="inline-flex items-center text-sm font-medium hover:underline"
                    >
                      Ver todos los estudios
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
          Referencias
        </Link>
      </nav>
      <div className="botones w-full md:w-[30%] flex justify-center items-center gap-4 mt-4 md:mt-0">
        <button className="botonesOne w-[46%] transition text-xs md:text-sm 2xl:text-lg">
          CV
        </button>
        <button
          className="botonesTwo w-[46%] transition text-xs md:text-sm 2xl:text-lg"
          onClick={() => setIsContactoOpen(true)}
        >
          Contacto
        </button>
      </div>
      <PopupContacto
        isOpen={isContactoOpen}
        onClose={() => setIsContactoOpen(false)}
      />
    </header>
  );
}

export default Navbar;
