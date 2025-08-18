import "./Estudios.scss"
import { useState } from "react"
import { Link } from "react-router-dom";
import {
  FaCalendarAlt,
  FaClock,
  FaCheckCircle,
  FaLightbulb,
  FaCode,
} from "react-icons/fa"
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si"
import { useGlobal } from "../../context/GlobalContext";
export default function ProximosEstudios() {
    const { sistemaLenguaje } = useGlobal();
    const [personalComment, setPersonalComment] = useState(
      "Estas son las tecnologías que planeo dominar próximamente para mantenerse actualizado con las últimas tendencias del desarrollo web moderno."
    )
    const technologies = [
      {
        name: "Next.js",
        icon: <SiNextdotjs className="text-6xl text-gray-900" />,
        description: {
          Es: "Framework de React para apps de producción",
          En: "React Framework for Production Apps",
        },
        detailedInfo: {
          Es: "Planeo profundizar en App Router, Server Components, data fetching, caché y despliegues. También prácticas de rendimiento como streaming e ISR.",
          En: "I plan to delve deeper into App Router, Server Components, data fetching, caching, and deployments, as well as performance practices like streaming and ISR.",
        },
        skills: [
          {
            Es: "App Router y layouts",
            En: "App Router and Layouts",
          },
          {
            Es: "Server/Client Components",
            En: "Server/Client Components",
          },
          {
            Es: "Data Fetching y caché",
            En: "Data Fetching and Caching",
          },
          {
            Es: "ISR y SEO",
            En: "ISR and SEO",
          },
          {
            Es: "Optimización de rendimiento",
            En: "Performance Optimization",
          },
        ],
        level: {
          Es: "En aprendizaje",
          En: "In learning"
        },
        duration: {
          Es: "En curso",
          En: "In progress"
        },
        year: "2024",
        projects: {
          Es: "Prototipos y migración de proyectos a Next.js",
          En: "Prototyping and migrating projects to Next.js"
        },
        color: "neutral",
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-6xl text-cyan-400" />,
        description: {
          Es: "Framework CSS utilitario para construir UI rápido",
          En: "Utility CSS framework for building UIs quickly",
        },
        detailedInfo: {
          Es: "Adoptar un flujo de trabajo utility-first, crear componentes consistentes y aplicar temas (modo oscuro). Integración con shadcn/ui.",
          En: "Adopt a utility-first workflow, create consistent components, and apply themes (dark mode). Integration with shadcn/ui.",
        },
        skills: [
          {
            Es: "Responsive y breakpoints",
            En: "Responsive and Breakpoints",
          },
          {
            Es: "Dark mode y theming",
            En: "Dark Mode and Theming",
          },
          {
            Es: "Plugins y configuración",
            En: "Plugins and Configuration",
          },
          {
            Es: "Componentes reutilizables",
            En: "Reusable Components",
          },
          {
            Es: "Accesibilidad y buenas prácticas",
            En: "Accessibility and Best Practices",
          },
        ],
        level: {
          Es: "En aprendizaje",
          En: "In learning"
        },        
        duration: {
          Es: "En curso",
          En: "In progress"
        },
        year: "2024",
        projects: {
          Es: "Sistemas de diseño y UIs escalables",
          En: "Scalable design systems and UIs"
        },
        color: "cyan",
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-6xl text-blue-600" />,
        description: {
          Es: "Superset de JavaScript con tipado estático",
          En: "Statically Typed JavaScript Superset",
        },
        detailedInfo: {
          Es: "Incorporar tipado a proyectos para mejorar robustez: tipos, interfaces, genéricos y utilidades. Integración con React y Node.",
          En: "Incorporate typing into projects to improve robustness: types, interfaces, generics, and utilities. Integration with React and Node.",
        },
        skills: [
          {
            Es: "Tipos de interfaces",
            En: "Types of interfaces",
          },
          {
            Es: "Genéricos y utilidades",
            En: "Generics and utilities",
          },
          {
            Es: "Narrowing y discriminated unions",
            En: "Narrowing y discriminated unions",
          },
          {
            Es: "Tipos para React/JSX",
            En: "Types for React/JSX",
          },
          {
            Es: "Configuración tsconfig",
            En: "tsconfig configuration",
          },
        ],
        level: {
          Es: "Planificado",
          En: "Planned"
        },
        duration: {
          Es: "Próximamente",
          En: "Soon"
        },
        year: "2024",
        projects: {
          Es: "Refactor de proyectos JS a TS",
          En: "Refactor JS projects to TS"
        },
        color: "blue",
      },
    ]
    const getLevelColor = (level) => {
      switch (level) {
        case "Avanzado":
          return "bg-green-100 text-green-800 border-green-200"
        case "Advanced":
          return "bg-green-100 text-green-800 border-green-200"
        case "En aprendizaje":
          return "bg-yellow-100 text-yellow-800 border-yellow-200"
        case "In learning":
          return "bg-yellow-100 text-yellow-800 border-yellow-200"
        case "Planificado":
          return "bg-blue-100 text-blue-800 border-blue-200"
        case "Planned":
          return "bg-blue-100 text-blue-800 border-blue-200"
        default:
        return "bg-gray-100 text-gray-800 border-gray-200"
        }
    }
    const colorClasses = {
        cyan: "bg-cyan-50 border-cyan-100",
        blue: "bg-blue-50 border-blue-100",
        red: "bg-red-50 border-red-100",
        neutral: "bg-slate-50 border-slate-100",
    };
    const colorClassesUl = {
        cyan: "bg-cyan-500 border-cyan-100",
        blue: "bg-blue-500 border-blue-100",
        red: "bg-red-500 border-red-100",
        neutral: "bg-slate-500 border-slate-100",
    };
  return (
    <div className="estudios py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="header text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full mb-6">
            <FaLightbulb className="text-xl" />
            <span className="font-semibold">
              {sistemaLenguaje === "Es" ? "Aprendizaje Continuo" : "Continuous Learning"}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-light mb-4">            
            {sistemaLenguaje === "Es" ? (
              <>
                Próximos <span className="font-bold">Estudios</span>
              </>
            ) : (
              <>
                <span className="font-bold">Upcoming</span> Studies
              </>
            )}
          </h1>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed">            
            {sistemaLenguaje === "Es" ? "Las siguientes tecnologías están en mi plan de estudio para fortalecer mi stack y mantenerme actualizado." : "The following technologies are in my curriculum to strengthen my stack and keep me up to date."}
          </p>
        </div>
        <div className="infoG grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="unidad rounded-xl p-6 shadow-sm border text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaCheckCircle className="text-green-600 text-xl" />
            </div>
            <h3 className="font-semibold mb-2">
              {sistemaLenguaje === "Es" ? "Estado" : "State"}              
            </h3>
            <p className="font-medium">
              {sistemaLenguaje === "Es" ? "En progreso" : "In progress"}
            </p>
          </div>

          <div className="unidad rounded-xl p-6 shadow-sm border text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaCalendarAlt className="text-blue-600 text-xl" />
            </div>
            <h3 className="font-semibold mb-2">
              {sistemaLenguaje === "Es" ? "Período" : "Period"}              
            </h3>
            <p className="font-medium">
              {sistemaLenguaje === "Es" ? "Actual" : "Current"}              
            </p>
          </div>

          <div className="unidad rounded-xl p-6 shadow-sm border text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaClock className="text-purple-600 text-xl" />
            </div>
            <h3 className="font-semibold mb-2">
              {sistemaLenguaje === "Es" ? "Duración Total" : "Total Duration"}              
            </h3>
            <p className="font-medium">
              {sistemaLenguaje === "Es" ? "En curso" : "In progress"}            
            </p>
          </div>
        </div>
        <div className="space-y-12">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="info rounded-2xl shadow-sm border overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className={`p-8 ${colorClasses[tech.color]}`}>
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="flex-shrink-0">{tech.icon}</div>
                  <div className="text-center md:text-left flex-1">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">{tech.name}</h2>
                    <p className="text-gray-600 text-lg mb-4">{tech.description[sistemaLenguaje]}</p>
                    <div className="flex flex-wrap justify-center md:justify-start gap-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getLevelColor(tech.level[sistemaLenguaje])}`}>
                        {tech.level[sistemaLenguaje]}
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                        {tech.duration[sistemaLenguaje]}
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                        {tech.year}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="detalles">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <FaCode className="" />
                      {sistemaLenguaje === "Es" ? "Mi Experiencia" : "My Experience"}
                    </h3>
                    <p className="leading-relaxed mb-6">{tech.detailedInfo[sistemaLenguaje]}</p>

                    <div className="resaltar rounded-lg p-4">
                      <h4 className="font-semibold mb-2">
                        {sistemaLenguaje === "Es" ? "Proyectos Realizados" : "Completed Projects"}
                      </h4>
                      <p className="text-sm">{tech.projects[sistemaLenguaje]}</p>
                    </div>
                  </div>
                  <div className="habilidades">
                    <h3 className="text-xl font-semibold mb-4">
                      {sistemaLenguaje === "Es" ? "Habilidades Desarrolladas" : "Developed Skills"}
                    </h3>
                    <ul className="space-y-3">
                      {tech.skills.map((skill, skillIndex) => (
                        <li key={skillIndex} className="flex items-start gap-3">
                          <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${colorClassesUl[tech.color] || ""}`}></div>
                          <span className="text-gray-600">{skill[sistemaLenguaje]}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="personal mt-16 bg-gradient-to-r rounded-2xl p-8 border">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center">
                <FaLightbulb />
              </div>
              {sistemaLenguaje === "Es" ? "Mi Reflexión Personal" : "My Personal Reflection"}
            </h3>
          </div>
          <div className="texto rounded-lg p-6 border">
            <p className="leading-relaxed italic text-lg">
              "{sistemaLenguaje === "Es" ? personalComment : "These are the technologies I plan to master next to stay up-to-date with the latest trends in modern web development."}"
            </p>
          </div>
        </div>
        <div className="navegacion mt-16 text-center">
          <h3 className="text-xl font-semibold mb-6">
            {sistemaLenguaje === "Es" ? "Continúa explorando mi formación" : "Continue exploring my training"}
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/primerosEstudios"
              className="px-6 py-3 rounded-lg hover:transition-colors font-bold"
            >
              {sistemaLenguaje === "Es" ? "Primeros Estudios →" : "First Studies →"}
            </Link>
            <Link
              to="/universityStudies"
              className="px-6 py-3 rounded-lg hover:transition-colors font-bold"
            >
              {sistemaLenguaje === "Es" ? "Estudios Universitarios →" : "University Studies →"}
            </Link>
            <Link
              to="/laborales"
              className="px-6 py-3 rounded-lg hover:transition-colors font-bold"
            >
              {sistemaLenguaje === "Es" ? "Estudios Laborales →" : "Work Studies →"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
