import "./Estudios.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaCalendarAlt,
  FaClock,
  FaCheckCircle,
  FaLightbulb,
  FaCode,
} from "react-icons/fa";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiWebpack } from "react-icons/si";
import { useGlobal } from "../../context/GlobalContext";
export default function EstudiosLaborales() {
  const { sistemaLenguaje } = useGlobal();
  const [personalComment, setPersonalComment] = useState(
    "Aca era aprender o aprender, ya que si no rendía no comía, pero la verdad es que me encantaba, cada día era un nuevo desafío, cada proyecto una nueva oportunidad de crecer y aprender, y aunque a veces me sentía abrumado, siempre encontraba la manera de seguir adelante."
  );
  const technologies = [
    {
      name: "React.js",
      icon: <FaReact className="text-6xl text-cyan-500" />,
      description: {
        Es: "Biblioteca de JavaScript para construir interfaces",
        En: "JavaScript library for building interfaces",
      },
      detailedInfo: {
        Es: "En el entorno laboral me especialicé en React: componentes reutilizables, hooks, manejo de estado y performance. Construí interfaces robustas y accesibles.",
        En: "In my professional environment, I specialized in React: reusable components, hooks, state management, and performance. I built robust and accessible interfaces.",
      },
      skills: [
        {
          Es: "Hooks (useState, useEffect, useMemo)",
          En: "Hooks (useState, useEffect, useMemo)",
        },
        {
          Es: "React Router y rutas protegidas",
          En: "React Router and Protected Routes",
        },
        {
          Es: "Context API y patrones de estado",
          En: "Context API and State Patterns",
        },
        {
          Es: "Optimización y memoización",
          En: "Optimization and Memoization",
        },
        {
          Es: "Buenas prácticas y accesibilidad",
          En: "Best Practices and Accessibility",
        },
      ],
      level: {
        Es: "Avanzado",
        En: "Advanced"
      },
      duration:  {
        Es: "12 meses",
        En: "12 months"
      },
      year: {
        Es: "Actualidad",
        En: "Present"
      },
      projects: {
        Es: "Dashboards, paneles administrativos, sitios corporativos",
        En: "Dashboards, administrative panels, corporate sites"
      },
      color: "cyan",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-6xl text-green-600" />,
      description: {
        Es: "Entorno de ejecución para JavaScript del lado del servidor",
        En: "Execution environment for server-side JavaScript",
      },
      detailedInfo: {
        Es: "Construcción de APIs REST con Express, autenticación, validación, middlewares y despliegues. Integraciones con bases de datos y servicios externos.",
        En: "Building REST APIs with Express, including authentication, validation, middleware, and deployments. Integrations with external databases and services.",
      },
      skills: [
        {
          Es: "Express y middlewares",
          En: "Express and Middleware",
        },
        {
          Es: "Autenticación JWT",
          En: "JWT Authentication",
        },
        {
          Es: "Validación y sanitización",
          En: "Validation and Sanitization",
        },
        {
          Es: "Manejo de errores",
          En: "Error Handling",
        },
        {
          Es: "Integración con BD y servicios",
          En: "DB and Service Integration",
        },
      ],
      level: {
        Es: "Intermedio",
        En: "Intermediate"
      },
      duration:  {
        Es: "24 meses",
        En: "24 months"
      },
      year: {
        Es: "Actualidad",
        En: "Present"
      },
      projects: {
        Es: "APIs para consumo por SPA y aplicaciones móviles",
        En: "APIs for consumption by SPAs and mobile applications"
      },
      color: "green",
    },
    {
      name: "Webpack",
      icon: <SiWebpack className="text-6xl text-blue-500" />,
      description: {
        Es: "Empaquetador de módulos para aplicaciones JS modernas",
        En: "Module packager for modern JS applications",
      },
      detailedInfo: {
        Es: "Configuración de loaders y plugins, optimización de bundles, code splitting y manejo de assets para mejorar rendimiento y DX.",
        En: "Loader and plugin configuration, bundle optimization, code splitting, and asset management to improve performance and DX.",
      },
      skills: [
        {
          Es: "Loaders y plugins",
          En: "Loaders and Plugins",
        },
        {
          Es: "Code splitting y lazy loading",
          En: "Code Splitting and Lazy Loading",
        },
        {
          Es: "Optimización de producción",
          En: "Production Optimization",
        },
        {
          Es: "Dev server y HMR",
          En: "Dev Server and HMR",
        },
        {
          Es: "Integración con Babel",
          En: "Integration with Babel",
        },
      ],
      level: {
        Es: "Intermedio",
        En: "Intermediate"
      },
      duration:  {
        Es: "24 meses",
        En: "24 months"
      },
      year: {
        Es: "Actualidad",
        En: "Present"
      },
      projects: {
        Es: "Configuraciones base y avanzadas para proyectos SPA",
        En: "Basic and advanced configurations for SPA projects"
      },
      color: "blue",
    },
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case "Avanzado":
        return "bg-green-100 text-green-800 border-green-200"
      case "Advanced":
        return "bg-green-100 text-green-800 border-green-200"
      case "Intermedio":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "Básico":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "Essential":
        return "bg-blue-100 text-blue-800 border-blue-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  };
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
        <div className="header text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full mb-6">
            <FaLightbulb className="text-xl" />
            <span className="font-semibold">
              {sistemaLenguaje === "Es"
                ? "Formación Profesional"
                : "Vocational Training"}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-light mb-4">
            {sistemaLenguaje === "Es" ? (
              <>
                Estudios <span className="font-bold">Laborales</span>
              </>
            ) : (
              <>
                <span className="font-bold">Labor</span> studies
              </>
            )}
          </h1>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed">
            {sistemaLenguaje === "Es"
              ? "Tecnologías y herramientas aplicadas en proyectos reales, priorizando calidad y escalabilidad."
              : "Technologies and tools applied to real-world projects, prioritizing quality and scalability."}
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
              {sistemaLenguaje === "Es" ? "Actualidad" : "Present"}
            </p>
          </div>
          <div className="unidad rounded-xl p-6 shadow-sm border text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaCalendarAlt className="text-blue-600 text-xl" />
            </div>
            <h3 className="font-semibold mb-2">
              {sistemaLenguaje === "Es" ? "Período" : "Period"}
            </h3>
            <p className="font-medium">2022 - 2025</p>
          </div>

          <div className="unidad rounded-xl p-6 shadow-sm border text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaClock className="text-purple-600 text-xl" />
            </div>
            <h3 className="font-semibold mb-2">
              {sistemaLenguaje === "Es" ? "Duración Total" : "Total Duration"}
            </h3>
            {sistemaLenguaje === "Es" ? "Actualidad" : "Present"}
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
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">
                      {tech.name}
                    </h2>
                    <p className="text-gray-600 text-lg mb-4">
                      {tech.description[sistemaLenguaje]}
                    </p>
                    <div className="flex flex-wrap justify-center md:justify-start gap-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium border ${getLevelColor(
                          tech.level[sistemaLenguaje]
                        )}`}
                      >
                        {tech.level[sistemaLenguaje]}
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                        {tech.duration[sistemaLenguaje]}
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                        {tech.year[sistemaLenguaje]}
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
                      {sistemaLenguaje === "Es"
                        ? "Mi Experiencia"
                        : "My Experience"}
                    </h3>
                    <p className="leading-relaxed mb-6">{tech.detailedInfo[sistemaLenguaje]}</p>

                    <div className="resaltar rounded-lg p-4">
                      <h4 className="font-semibold mb-2">
                        {sistemaLenguaje === "Es"
                          ? "Proyectos Realizados"
                          : "Completed Projects"}
                      </h4>
                      <p className="text-sm">{tech.projects[sistemaLenguaje]}</p>
                    </div>
                  </div>
                  <div className="habilidades">
                    <h3 className="text-xl font-semibold mb-4">
                      {sistemaLenguaje === "Es"
                        ? "Habilidades Desarrolladas"
                        : "Developed Skills"}
                    </h3>
                    <ul className="space-y-3">
                      {tech.skills.map((skill, skillIndex) => (
                        <li key={skillIndex} className="flex items-start gap-3">
                          <div
                            className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                              colorClassesUl[tech.color] || ""
                            }`}
                          ></div>
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
              {sistemaLenguaje === "Es"
                ? "Mi Reflexión Personal"
                : "My Personal Reflection"}
            </h3>
          </div>
          <div className="texto rounded-lg p-6 border">
            <p className="leading-relaxed italic text-lg">
              "
              {sistemaLenguaje === "Es"
                ? personalComment
                : "Here it was either learn or learn, because if I didn't perform, I wouldn't eat, but the truth is that I loved it. Every day was a new challenge, every project a new opportunity to grow and learn, and although I sometimes felt overwhelmed, I always found a way to keep going."}
              "
            </p>
          </div>
        </div>
        <div className="navegacion mt-16 text-center">
          <h3 className="text-xl font-semibold mb-6">
            {sistemaLenguaje === "Es"
              ? "Continúa explorando mi formación"
              : "Continue exploring my training"}
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/primerosEstudios"
              className="px-6 py-3 rounded-lg hover:transition-colors font-bold"
            >
              {sistemaLenguaje === "Es"
                ? "Primeros Estudios →"
                : "First Studies →"}
            </Link>
            <Link
              to="/universityStudies"
              className="px-6 py-3 rounded-lg hover:transition-colors font-bold"
            >
              {sistemaLenguaje === "Es"
                ? "Estudios Universitarios →"
                : "University Studies →"}
            </Link>
            <Link
              to="/proximosEstudios"
              className="px-6 py-3 rounded-lg hover:transition-colors font-bold"
            >
              {sistemaLenguaje === "Es"
                ? "Próximos Estudios →"
                : "Upcoming Studies →"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
