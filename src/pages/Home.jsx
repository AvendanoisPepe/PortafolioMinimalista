import img from "../assets/imagenes/yop.png";
import { Link } from "react-router-dom";
import "./home.scss";
import { useGlobal } from "../context/GlobalContext";
import {
  FaCode,
  FaGraduationCap,
  FaUsers,
  FaArrowRight,
  FaDownload,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaReact,
  FaNodeJs,
  FaJs,
  FaJava,
  FaStar,
  FaRocket,
} from "react-icons/fa"
import { SiNextdotjs } from "react-icons/si"
import { GrMysql } from "react-icons/gr";
import { useEffect, useState } from "react";
import img1 from "../assets/imagenes/trabajos/Colpatria/V2/col13.png"
import img2 from "../assets/imagenes/trabajos/JetSmart/jet10.png"
import img3 from "../assets/imagenes/trabajos/Bsc/bsc8.png"
function Home() {
  const [currentSkill, setCurrentSkill] = useState(0)
  const { sistemaLenguaje } = useGlobal();
  const skills = [
    { name: "React", icon: <FaReact className="text-cyan-500" />, level: 90 },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500" />, level: 100 },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" />, level: 70 },
    { name: "Java", icon: <FaJava className="text-red-600" />, level: 70 },
    { name: "MySql", icon: <GrMysql className="text-blue-600" />, level: 100 },
    { name: "Next.js", icon: <SiNextdotjs className="text-slate-700" />, level: 50 },
  ]
  const projects = [
    {
      title: "Web Training Colpatria",
      description: "Biblioteca de información con variación de documentos tantos pdfa, excel, power ponts, words, entre otros. Seccionado de forma ordenada con buscador general y global",
      image: img1,
      tech: ["React", "Node.js", "LocalBase"],
      link: "/colpatriaWebV2",
    },
    {
      title: "Web Training JetSmart",
      description: "Sistema de visualización de escenarios con herramientas clave para guiar a nuevos usuarios en la resolución de sus necesidades.",
      image: img2,
      tech: ["React", "JavaScript", "Node.js"],
      link: "/jetsmart",
    },
    {
      title: "Web Training Bsc Inbound",
      description: "Este proyecto representa un desafío importante al apostar por herramientas modernas como React, shadcn UI y Tailwind CSS",
      image: img3,
      tech: ["React","Tailwind","Ui shadcn"],
      link: "/bsc",
    },
  ]
  const stats = [
    { number: "30+", label: "Proyectos Completados", icon: <FaCode /> },
    { number: "5+", label: "Años de Experiencia", icon: <FaGraduationCap /> },
    { number: "5★", label: "Calificación Promedio", icon: <FaUsers /> },
  ]
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [skills.length])
  return (
    <main className="min-h-screen overflow-x-hidden">
      <section className="Inicio w-full max-w-screen-2xl mx-auto px-4 flex items-center justify-between gap-8 flex-col lg:flex-row sm:px-8 xl:px-24 md:p-16 overflow-hidden">
        <div className="textual w-full space-y-8 lg:w-[60%] mb-10 mt-10 lg:m-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-light tracking-tight">
            {sistemaLenguaje === "Es" ? (
              <>
                <span className="font-bold">Portafolio</span> Minimalista
              </>
            ) : (
              <>
                <span className="font-bold">Minimalist</span> Portfolio
              </>
            )}
          </h1>

          <div className="textualUno space-y-6">
            {sistemaLenguaje === "Es" ? (
              <>
                <p className="leading-relaxed text-base sm:text-lg 2xl:text-2xl">
                  Bienvenido a mi portafolio minimalista en proceso (Versión
                  1.2.0), esta es la segunda versión de mi portafolio, la idea es
                  correr el riesgo con estilos minimalistas para ver cómo nos va y
                  salir de la zona de conform.
                </p>

                <p className="textualDos leading-relaxed text-base sm:text-lg 2xl:text-xl italic pl-4 py-1">
                  Entre más diferente sea el desarrollo, más interés me genera,
                  todo sea por la anécdota.
                </p>
              </>
            ) : (
              <>
                <p className="leading-relaxed text-lg 2xl:text-2xl">
                  Welcome to my minimalist portfolio in progress (Version 1.2.0),
                  this is the second version of my portfolio, the idea is to take
                  a risk with minimalist styles to see how we do and get out of
                  the comfort zone.
                </p>

                <p className="textualDos text-sm italic pl-4 py-1 2xl:text-lg">
                  The more different the development, the more interest it
                  generates for me, just for the anecdote.
                </p>
              </>
            )}
          </div>

          <div className="otroP pt-6">
            <Link href="/v1">
              <button className="px-6 py-3 transition-colors rounded-none tracking-wide text-xs sm:text-sm md:text-base 2xl:text-2xl md:w-[46%] 2xl:w-[50%]">
                {sistemaLenguaje === "Es"
                  ? "Portafolio Versión 1.0.0"
                  : "Portfolio Version 1.0.0"}
              </button>
            </Link>
          </div>
        </div>

        <div className="derecha w-full relative lg:w-[30%] ">
          <div className="unidad relative mx-auto w-[280px] h-[360px] sm:w-[300px] sm:h-[380px] md:w-[380px] md:h-[480px] lg:w-[280px] lg:h-[380px] xl:w-[400px] xl:h-[500px] 2xl:w-[420px] 2xl:h-[520px]">
            <div className="cuadrado absolute top-[-40px] left-[-40px] w-[200px] h-[200px] z-0"></div>

            <div className="imagen relative z-10 h-full w-full border">
              <div className="relative h-full w-full overflow-hidden">
                <img src={img} alt="" />
              </div>
            </div>

            <div className="cuadrado absolute bottom-[-40px] right-[-40px] w-[200px] h-[200px] z-0"></div>
          </div>
        </div>
      </section>
      {/* Sección de Estadísticas */}
      <section className="numeros relative py-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              {sistemaLenguaje === "Es" ? "En" : "In"} <span className="font-bold">Números</span>
            </h2>
            <p className="text-lg">
              {sistemaLenguaje === "Es"
                ? "Algunos datos sobre mi trayectoria profesional"
                : "Some data about my professional journey"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="conte backdrop-blur-sm rounded-xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 border border-white/50"
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold mb-2">{stat.number}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Sección de Habilidades */}
      <section className="habilidades relative py-10 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              {sistemaLenguaje === "Es" ? "Mis" : "My"} <span className="font-bold">Habilidades</span>
            </h2>
            <p className="text-lg">
              {sistemaLenguaje === "Es"
                ? "Tecnologías que domino y utilizo en mis proyectos"
                : "Technologies I master and use in my projects"}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`cont border-1 border-amber-50 rounded-xl p-6 text-center hover:transition-all duration-300 hover:scale-105 ${
                  currentSkill === index ? "ring-2 active shadow-lg" : ""
                }`}
              >
                <div className="text-4xl mb-4">{skill.icon}</div>
                <h3 className="font-semibold mb-2">{skill.name}</h3>
                <div className="w-full bg-gray-300 rounded-full h-2">
                  <div
                    className="barra h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="text-sm mt-1 block">{skill.level}%</span>
              </div>
            ))}
          </div>
        </div>
      </section>
       {/* Sección de Proyectos Destacados */}
      <section className="proyectos relative py-20 bg-gradient-to-br overflow-hidden">        
        <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              {sistemaLenguaje === "Es" ? "Proyectos" : "Featured"}{" "}
              <span className="font-bold">Destacados</span>
            </h2>
            <p className="text-lg">
              {sistemaLenguaje === "Es" ? "Algunos de mis trabajos más recientes" : "Some of my most recent work"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="cont backdrop-blur-sm rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group hover:scale-105 border"
              >
                <div className="aspect-video flex justify-center items-center img overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold mb-2">{project.title}</h3>
                  <p className="mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={project.link}
                    className="inline-flex items-center gap-2 font-medium transition-colors"
                  >
                    {sistemaLenguaje === "Es" ? "Ver Proyecto" : "View Project"}
                    <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="todos text-center mt-12">
            <Link
              to="/CompletoEstudios"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg transition-all duration-300 font-semibold hover:scale-105 shadow-lg"
            >
              {sistemaLenguaje === "Es" ? "Ver Todos los Proyectos" : "View All Projects"}
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>
      {/* Sección de Referencias */}
      <section className="referencia relative py-10 bg-gradient-to-br overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
          <div className="cabecera text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-4">
              {sistemaLenguaje === "Es" ? "Lo que dicen" : "What they say"}{" "}
              <span className="font-bold">de mí</span>
            </h2>
            <p className="text-lg">
              {sistemaLenguaje === "Es"
                ? "Testimonios de colegas y clientes con los que he trabajado"
                : "Testimonials from colleagues and clients I've worked with"}
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl max-w-4xl mx-auto border border-white/50 hover:shadow-2xl transition-shadow">
            <div className="text-center">
              <div className="w-20 h-20 bg-pink-100 rounded-full mx-auto mb-6 overflow-hidden">
                <img
                  src="/placeholder.svg?height=80&width=80&text=MG"
                  alt="María González"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-lg" />
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl font-light text-gray-800 mb-6 italic">
                "
                {sistemaLenguaje === "Es"
                  ? "Un desarrollador excepcional y confiable. Su capacidad para resolver problemas complejos es impresionante."
                  : "An exceptional and reliable developer. His ability to solve complex problems is impressive."}
                "
              </blockquote>
              <div className="text-center">
                <h4 className="font-semibold text-gray-800">María González</h4>
                <p className="text-pink-600 font-medium">Project Manager</p>
                <p className="text-gray-500 text-sm">TechSolutions Inc.</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/references"
              className="inline-flex items-center gap-2 px-8 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-all duration-300 font-semibold hover:scale-105 shadow-lg"
            >
              {sistemaLenguaje === "Es" ? "Ver Todas las Referencias" : "View All References"}
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>
      {/* Sección de Contacto/CTA */}
      <section className="relative py-20 bg-gray-900 text-white overflow-hidden">
        {/* Elementos de fondo */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 text-gray-700 text-8xl opacity-30">
            <FaEnvelope />
          </div>
          <div className="absolute bottom-20 left-20 text-gray-700 text-6xl opacity-20">
            <FaRocket />
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            {sistemaLenguaje === "Es" ? "¿Tienes un proyecto en" : "Do you have a project in"}{" "}
            <span className="font-bold text-blue-400">mente?</span>
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            {sistemaLenguaje === "Es"
              ? "Me encantaría ayudarte a convertir tu idea en realidad. Hablemos sobre tu próximo proyecto."
              : "I'd love to help you turn your idea into reality. Let's talk about your next project."}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold hover:scale-105 shadow-lg">
              <FaEnvelope />
              {sistemaLenguaje === "Es" ? "Contactar Ahora" : "Contact Now"}
            </button>
            <button className="inline-flex items-center gap-2 px-8 py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 transition-all duration-300 font-semibold hover:scale-105">
              <FaDownload />
              {sistemaLenguaje === "Es" ? "Descargar CV" : "Download CV"}
            </button>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="#"
              className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-all duration-300 hover:scale-110"
            >
              <FaGithub className="text-xl" />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-all duration-300 hover:scale-110"
            >
              <FaLinkedin className="text-xl" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
