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
import { FaReact, FaNodeJs } from "react-icons/fa"
import { SiWebpack } from "react-icons/si"
export default function EstudiosLaborales() {
    const [personalComment, setPersonalComment] = useState(
        "Aca era aprender o aprender, ya que si no rendía no comía, pero la verdad es que me encantaba, cada día era un nuevo desafío, cada proyecto una nueva oportunidad de crecer y aprender, y aunque a veces me sentía abrumado, siempre encontraba la manera de seguir adelante."
    )
    const technologies = [
        {
            name: "React.js",
            icon: <FaReact className="text-6xl text-cyan-500" />,
            description: "Biblioteca de JavaScript para construir interfaces",
            detailedInfo:
                "En el entorno laboral me especialicé en React: componentes reutilizables, hooks, manejo de estado y performance. Construí interfaces robustas y accesibles.",
            skills: [
                "Hooks (useState, useEffect, useMemo)",
                "React Router y rutas protegidas",
                "Context API y patrones de estado",
                "Optimización y memoización",
                "Buenas prácticas y accesibilidad",
            ],
            level: "Avanzado",
            duration: "12 meses",
            year: "Actualidad",
            projects: "Dashboards, paneles administrativos, sitios corporativos",
            color: "cyan",
        },
        {
            name: "Node.js",
            icon: <FaNodeJs className="text-6xl text-green-600" />,
            description: "Entorno de ejecución para JavaScript del lado del servidor",
            detailedInfo:
                "Construcción de APIs REST con Express, autenticación, validación, middlewares y despliegues. Integraciones con bases de datos y servicios externos.",
            skills: [
                "Express y middlewares",
                "Autenticación JWT",
                "Validación y sanitización",
                "Manejo de errores",
                "Integración con BD y servicios",
            ],
            level: "Intermedio",
            duration: "24 meses",
            year: "Actualidad",
            projects: "APIs para consumo por SPA y aplicaciones móviles",
            color: "green",
        },
        {
            name: "Webpack",
            icon: <SiWebpack className="text-6xl text-blue-500" />,
            description: "Empaquetador de módulos para aplicaciones JS modernas",
            detailedInfo:
                "Configuración de loaders y plugins, optimización de bundles, code splitting y manejo de assets para mejorar rendimiento y DX.",
            skills: [
                "Loaders y plugins",
                "Code splitting y lazy loading",
                "Optimización de producción",
                "Dev server y HMR",
                "Integración con Babel",
            ],
            level: "Intermedio",
            duration: "24 meses",
            year: "Actualidad",
            projects: "Configuraciones base y avanzadas para proyectos SPA",
            color: "blue",
        },
    ]

  const getLevelColor = (level) => {
    switch (level) {
      case "Avanzado":
        return "bg-green-100 text-green-800 border-green-200"
      case "Intermedio":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "Básico":
        return "bg-blue-100 text-blue-800 border-blue-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }
  const colorClasses = {
    cyan: "bg-cyan-50 border-cyan-100",
    blue: "bg-blue-50 border-blue-100",
    red: "bg-red-50 border-red-100",
    green: "bg-green-50 border-green-100",
  };
  const colorClassesUl = {
    cyan: "bg-cyan-500 border-cyan-100",
    blue: "bg-blue-500 border-blue-100",
    red: "bg-red-500 border-red-100",
    green: "bg-green-500 border-green-100",
  };
  return (
    <div className="estudios py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Header principal */}
        <div className="header text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full mb-6">
            <FaLightbulb className="text-xl" />
            <span className="font-semibold">Formación Profecional</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-light mb-4">
            Estudios <span className="font-bold">Laborales</span>
          </h1>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed">
            Tecnologías y herramientas aplicadas en proyectos reales, priorizando calidad y escalabilidad.
          </p>
        </div>

        {/* Información general */}
        <div className="infoG grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="unidad rounded-xl p-6 shadow-sm border text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaCheckCircle className="text-green-600 text-xl" />
            </div>
            <h3 className="font-semibold mb-2">Estado</h3>
            <p className="font-medium">Actualidad</p>
          </div>

          <div className="unidad rounded-xl p-6 shadow-sm border text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaCalendarAlt className="text-blue-600 text-xl" />
            </div>
            <h3 className="font-semibold mb-2">Período</h3>
            <p className="font-medium">2022 - 2025</p>
          </div>

          <div className="unidad rounded-xl p-6 shadow-sm border text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaClock className="text-purple-600 text-xl" />
            </div>
            <h3 className="font-semibold mb-2">Duración Total</h3>
            <p className="font-medium">Actualidad</p>
          </div>
        </div>

        {/* Tecnologías detalladas */}
        <div className="space-y-12">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="info rounded-2xl shadow-sm border overflow-hidden hover:shadow-md transition-shadow"
            >
              {/* Header de la tecnología */}
              <div className={`p-8 ${colorClasses[tech.color]}`}>
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="flex-shrink-0">{tech.icon}</div>
                  <div className="text-center md:text-left flex-1">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">{tech.name}</h2>
                    <p className="text-gray-600 text-lg mb-4">{tech.description}</p>
                    <div className="flex flex-wrap justify-center md:justify-start gap-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getLevelColor(tech.level)}`}>
                        {tech.level}
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                        {tech.duration}
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                        {tech.year}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contenido detallado */}
              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Información detallada */}
                  <div className="detalles">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <FaCode className="" />
                      Mi Experiencia
                    </h3>
                    <p className="leading-relaxed mb-6">{tech.detailedInfo}</p>

                    <div className="resaltar rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Proyectos Realizados</h4>
                      <p className="text-sm">{tech.projects}</p>
                    </div>
                  </div>

                  {/* Habilidades aprendidas */}
                  <div className="habilidades">
                    <h3 className="text-xl font-semibold mb-4">Habilidades Desarrolladas</h3>
                    <ul className="space-y-3">
                      {tech.skills.map((skill, skillIndex) => (
                        <li key={skillIndex} className="flex items-start gap-3">
                          <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${colorClassesUl[tech.color] || ""}`}></div>
                          <span className="text-gray-600">{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comentario personal */}
        <div className="personal mt-16 bg-gradient-to-r rounded-2xl p-8 border">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center">
                <FaLightbulb />
              </div>
              Mi Reflexión Personal
            </h3>
          </div>
          <div className="texto rounded-lg p-6 border">
            <p className="leading-relaxed italic text-lg">"{personalComment}"</p>
          </div>
        </div>

        {/* Navegación a otras secciones */}
        <div className="navegacion mt-16 text-center">
          <h3 className="text-xl font-semibold mb-6">Continúa explorando mi formación</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/primerosEstudios"
              className="px-6 py-3 rounded-lg hover:transition-colors font-bold"
            >
              Primeros Estudios →
            </Link>
            <Link
              to="/universityStudies"
              className="px-6 py-3 rounded-lg hover:transition-colors font-bold"
            >
              Estudios Universitarios →
            </Link>
            <Link
              to="/proximosEstudios"
              className="px-6 py-3 rounded-lg hover:transition-colors font-bold"
            >
              Próximos Estudios →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
