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
import { MdCalculate  } from "react-icons/md";
import { MdOutlineMenuBook } from "react-icons/md";

import books from "../assets/imagenes/books.png"
import codigo from "../assets/imagenes/timeline.png"
import PopupContacto from "../pages/Contacto/PopupContacto";
import PopupCv from "../pages/CV/CV";
import Movil from "./Movil"
import { useGlobal } from "../context/GlobalContext";
function Navbar() {
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isStudiesOpen, setIsStudiesOpen] = useState(false);
  const projectsRef = useRef(null);
  const projectsButtonRef = useRef(null);
  const studiesRef = useRef(null);
  const studiesButtonRef = useRef(null);
  const [isContactoOpen, setIsContactoOpen] = useState(false);
  const [cv, setCv] = useState(false);
  const { sistemaLenguaje } = useGlobal();
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    // Bloquear/desbloquear scroll del body
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }
  return (
    <header className="w-full flex justify-between items-center flex-wrap p-4 2xl:p-6">
      <div className="contentLogo w-[50%] md:w-auto lg:w-[10%] xl:w-[20%] flex items-center justify-center gap-4 mb-4 md:mb-0">
        <span className="logo text-xl md:text-3xl lg:text-4xl 2xl:text-5xl">JS</span>
        <p className="nombre text-3xl lg:hidden xl:flex lg:text-3xl 2xl:text-4xl">Avendaño</p>
      </div>
      <div className="menupeque flex lg:hidden text-5xl mb-4 md:mb-0"><MdOutlineMenuBook onClick={toggleMenu}/></div>
      <nav className="menu w-full hidden md:w-[50%] lg:flex justify-center items-center gap-6">
        <Link to="" className="transition text-sm lg:text-lg 2xl:text-2xl">
          {sistemaLenguaje === "Es" ? "Inicio" : "Home"}
        </Link>
        <Link
          to="/about"
          className="transition text-center text-sm lg:text-lg 2xl:text-2xl"
        >
          {sistemaLenguaje === "Es" ? "Sobre mí" : "About me"}
        </Link>

        <div className="submenu relative">
          <button
            ref={projectsButtonRef}
            className="flex items-center gap-1 transition text-sm lg:text-lg 2xl:text-2xl"
            onClick={() => setIsProjectsOpen(!isProjectsOpen)}
          >
            {sistemaLenguaje === "Es" ? "Proyectos" : "Projects"}
            <FaArrowTrendDown
              className={`transition-transform ${
                isProjectsOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isProjectsOpen && (
            <div
              ref={projectsRef}
              className="contenedorSub absolute top-full lg:left-[200px] 2xl:left-1/2 transform -translate-x-1/2 mt-4 2xl:w-[1200px] md:w-[1000px]"
            >
              <div className="flechita absolute -top-2 lg:left-1/3 2xl:left-1/2 transform -translate-x-1/2 rotate-45"></div>

              <div className="contenido flex">
                <div className="izquierda 2xl:w-[65%] md:w-[70%] p-6">
                  <h3 className="titular 2xl:text-2xl md:text-lg font-bold mb-4">
                    {sistemaLenguaje === "Es" ? "Mis Proyectos" : "My projects"}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    <Link
                      to="/colpatriaWebV2"
                      className="w-[49%] flex gap-3 p-3 rounded-sm"
                      onClick={() => setIsProjectsOpen(!isProjectsOpen)}
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
                          {sistemaLenguaje === "Es"
                            ? "Biblioteca de informacion (PDF)"
                            : "Library of information (PDF)"}
                        </p>
                      </div>
                    </Link>
                    <Link
                      to="/jetsmart"
                      className="w-[49%] flex gap-3 p-3 rounded-sm"
                      onClick={() => setIsProjectsOpen(!isProjectsOpen)}
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
                          {sistemaLenguaje === "Es"
                            ? "Comandos de aprendizaje"
                            : "Learning commands"}
                        </p>
                      </div>
                    </Link>

                    <Link
                      to="/televentasCol"
                      className="w-[49%] flex gap-3 p-3 rounded-sm"
                      onClick={() => setIsProjectsOpen(!isProjectsOpen)}
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
                          {sistemaLenguaje === "Es"
                            ? "Versus de datos (Graficas)"
                            : "Data versus (Charts)"}
                        </p>
                      </div>
                    </Link>
                    <Link
                      to="/claroTmk"
                      className="w-[49%] flex gap-3 p-3 rounded-sm"
                      onClick={() => setIsProjectsOpen(!isProjectsOpen)}
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
                          {sistemaLenguaje === "Es"
                            ? "Argumentarios y tipificadores"
                            : "Argumentators and typifiers"}
                        </p>
                      </div>
                    </Link>
                    <Link
                      to="/bsc"
                      className="w-[49%] flex gap-3 p-3 rounded-sm"
                      onClick={() => setIsProjectsOpen(!isProjectsOpen)}
                    >
                      <div className="iconico w-[30%] flex justify-center align-center">
                        <div className="p-3 flex justify-center align-center">
                          <MdCalculate className="2xl:text-3xl md:text-2xl" />
                        </div>
                      </div>
                      <div className="textito w-[70%]">
                        <h4 className="font-bold 2xl:text-xl md:text-lg">
                          Web Tr. Bsc Inbound
                        </h4>
                        <p className="2xl:text-sm md:text-xs mt-1">
                          {sistemaLenguaje === "Es"
                            ? "Calculadoras y estados"
                            : "Calculators and states"}
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>

                <div className="derecha 2xl:w-[35%] md:w-[30%] p-6">
                  <div className="conjunto h-full flex flex-col justify-between">
                    <div className="libre">
                      <p className="2xl:text-sm md:text-xs mb-4">
                        {sistemaLenguaje === "Es"
                          ? "Conjunto de proyectos que acumulan muchos desarrollos diferentes en todo sentido."
                          : "Set of projects that accumulate many different developments in every aspect."}
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
                      to="/CompletoEstudios"
                      className="inline-flex items-center text-sm font-medium hover:underline"
                      onClick={() => setIsProjectsOpen(!isProjectsOpen)}
                    >
                      {sistemaLenguaje === "Es"
                        ? "Ver todos los proyectos"
                        : "See all projects"}
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
            className="flex items-center gap-1 transition text-sm lg:text-lg 2xl:text-2xl"
            onClick={() => setIsStudiesOpen(!isStudiesOpen)}
          >
            {sistemaLenguaje === "Es" ? "Estudios" : "Studies"}
            <FaArrowTrendDown
              className={`transition-transform ${
                isStudiesOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isStudiesOpen && (
            <div
              ref={studiesRef}
              className="contenedorSub absolute top-full lg:left-[70px] 2xl:left-1/2 transform -translate-x-1/2 mt-4 2xl:w-[1200px] md:w-[1000px]"
            >
              <div className="flechita absolute -top-2 left-1/2 transform -translate-x-1/2 rotate-45"></div>

              <div className="contenido flex">
                <div className="izquierda 2xl:w-[65%] md:w-[70%] p-6">
                  <h3 className="titular 2xl:text-2xl md:text-lg font-bold mb-4">
                    {sistemaLenguaje === "Es" ? "Mis Estudios" : "My Studies"}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <Link
                      to="/proximosEstudios"
                      className="w-[49%] flex gap-3 p-3 rounded-sm"
                      onClick={() => setIsStudiesOpen(!isStudiesOpen)}
                    >
                      <div className="iconico w-[30%] flex justify-center align-center">
                        <div className="p-3 flex justify-center align-center">
                          <SiTypescript className="2xl:text-3xl md:text-2xl" />
                        </div>
                      </div>
                      <div className="textito w-[70%]">
                        <h4 className="font-bold 2xl:text-xl md:text-lg">
                          {sistemaLenguaje === "Es"
                            ? "Proximos Estudios"
                            : "Future Studies"}
                        </h4>
                        <p className="2xl:text-sm md:text-xs text-zinc-500 mt-1">
                          Next.js - Tailwind - TypeScript
                        </p>
                      </div>
                    </Link>
                    <Link
                      to="/laborales"
                      className="w-[49%] flex gap-3 p-3 rounded-sm"
                      onClick={() => setIsStudiesOpen(!isStudiesOpen)}
                    >
                      <div className="iconico w-[30%] flex justify-center align-center">
                        <div className="p-3 flex justify-center align-center">
                          <FaReact className="2xl:text-3xl md:text-2xl" />
                        </div>
                      </div>
                      <div className="textito w-[70%]">
                        <h4 className="font-bold 2xl:text-xl md:text-lg">
                          {sistemaLenguaje === "Es"
                            ? "Estudios Laborales"
                            : "Work Studies"}
                        </h4>
                        <p className="2xl:text-sm md:text-xs text-zinc-500 mt-1">
                          React.js - Node.js - WebPack
                        </p>
                      </div>
                    </Link>
                    <Link
                      to="/universityStudies"
                      className="w-[49%] flex gap-3 p-3 rounded-sm"
                      onClick={() => setIsStudiesOpen(!isStudiesOpen)}
                    >
                      <div className="iconico w-[30%] flex justify-center align-center">
                        <div className="p-3 flex justify-center align-center">
                          <TbFileTypeSql className="2xl:text-3xl md:text-2xl" />
                        </div>
                      </div>
                      <div className="textito w-[70%]">
                        <h4 className="font-bold 2xl:text-xl md:text-lg">
                          {sistemaLenguaje === "Es"
                            ? "Estudios Universitarios"
                            : "University Studies"}
                        </h4>
                        <p className="2xl:text-sm md:text-xs text-zinc-500 mt-1">
                          Php - Java - Mysql - Mongo DB
                        </p>
                      </div>
                    </Link>
                    <Link
                      to="/primerosEstudios"
                      className="w-[49%] flex gap-3 p-3 rounded-sm"
                      onClick={() => setIsStudiesOpen(!isStudiesOpen)}
                    >
                      <div className="iconico w-[30%] flex justify-center align-center">
                        <div className="p-3 flex justify-center align-center">
                          <FaHtml5 className="2xl:text-3xl md:text-2xl" />
                        </div>
                      </div>
                      <div className="textito w-[70%]">
                        <h4 className="font-bold 2xl:text-xl md:text-lg">
                          {sistemaLenguaje === "Es"
                            ? "Primeros Estudios"
                            : "First Studies"}
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
                        {sistemaLenguaje === "Es"
                          ? "Un resumen de certificaciones, formaciones y títulos obtenidos."
                          : "A summary of certifications, training and titles obtained."}
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
                      to="/allStudies"
                      className="inline-flex items-center text-sm font-medium hover:underline"
                      onClick={() => setIsStudiesOpen(!isStudiesOpen)}
                    >
                      {sistemaLenguaje === "Es"
                        ? "Ver todos los estudios"
                        : "See all studies"}
                      <FaArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <Link
          to="/referencias"
          className="transition text-sm lg:text-lg 2xl:text-2xl"
        >
          {sistemaLenguaje === "Es" ? "Referencias" : "References"}
        </Link>
      </nav>
      <div className="botones w-full md:w-[30%] flex justify-center items-center gap-4 mt-4 md:mt-0">
        <button
          className="botonesOne w-[46%] transition text-xs md:text-sm 2xl:text-lg"
          onClick={() => setCv(true)}
        >
          CV
        </button>
        <button
          className="botonesTwo w-[46%] transition text-xs md:text-sm 2xl:text-lg"
          onClick={() => setIsContactoOpen(true)}
        >
          {sistemaLenguaje === "Es" ? "Contacto" : "Contact"}
        </button>
      </div>
      <PopupContacto
        isOpen={isContactoOpen}
        onClose={() => setIsContactoOpen(false)}
      />
      <PopupCv isOpen={cv} onClose={() => setCv(false)} />
      {isMenuOpen && (
        <Movil toggleMenu={toggleMenu}/>
      )}
    </header>
  );
}

export default Navbar;
