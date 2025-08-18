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
import { FaPhp, FaJava } from "react-icons/fa"
import { SiMysql, SiMongodb } from "react-icons/si"
import { useGlobal } from "../../context/GlobalContext";
export default function EstudiosUniversitarios() {
  const { sistemaLenguaje } = useGlobal();
  const [personalComment, setPersonalComment] = useState(
    "Aprender es un arte y en esta epoca fui tan feliz aprendiendo con mis compañeros, con los retos de los profesores, con los proyectos que combinaban todo, era felicidad pura, aunque a veces me costaba entender conceptos nuevos, siempre encontraba la manera de superarlos."
  )
    const technologies = [
        {
          name: "PHP",
          icon: <FaPhp className="text-6xl text-purple-600" />,
          description: {
            Es: "Lenguaje de programación del lado del servidor",
            En: "Server-side programming language"
          },
          detailedInfo: {
            Es: "Durante la etapa universitaria aprendí fundamentos de backend con PHP: programación orientada a objetos, manejo de sesiones, formularios seguros y consumo/creación de APIs REST. Practiqué patrones básicos y separación de capas.",
            En: "During college, I learned backend fundamentals with PHP: object-oriented programming, session management, secure forms, and REST API creation and consumption. I practiced basic patterns and layer separation."
          },
          skills: [
              {
                Es: "POO (clases, interfaces, namespaces)",
                En: "OOP (classes, interfaces, namespaces)",
              },
              {
                Es: "Manejo de sesiones y autenticación",
                En: "Session management and authentication",
              },
              {
                Es: "Validación de formularios y seguridad básica",
                En: "Form validation and basic security",
              },
              {
                Es: "Consumo y creación de APIs REST",
                En: "Consuming and creating REST APIs",
              },
              {
                Es: "Composer y autoloading",
                En: "Composer and autoloading",
              },
          ],
          level: {
            Es: "Avanzado",
            En: "Advanced"
          },
          duration:  {
            Es: "4 semestres",
            En: "4 semesters"
          },
          year: "2020-2022",
          projects: {
            Es: "CRUDs, sistemas de login, pequeños paneles administrativos",
            En: "CRUDs, login systems, small administrative panels"
          },
          color: "purple",
        },
        {
          name: "Java",
          icon: <FaJava className="text-6xl text-red-600" />,
          description: {
            Es: "Lenguaje de programación orientado a objetos",
            En: "Object-oriented programming language"
          },
          detailedInfo: {
            Es: "Con Java reforcé conceptos de POO, estructuras de datos, manejo de excepciones y principios SOLID. Construí aplicaciones de consola y desktop sencillas y practiqué buenas prácticas.",
            En: "With Java, I reinforced concepts of OOP, data structures, exception handling, and SOLID principles. I built simple console and desktop applications and practiced best practices."
          },
          skills: [
              {
                Es: "Colecciones (List, Map, Set)",
                En: "Collections (List, Map, Set)",
              },
              {
                Es: "Manejo de excepciones",
                En: "Exception Handling",
              },
              {
                Es: "Principios SOLID",
                En: "SOLID Principles",
              },
              {
                Es: "POO avanzada (herencia, polimorfismo)",
                En: "Advanced OOP (Inheritance, Polymorphism)",
              },
              {
                Es: "Patrones básicos",
                En: "Basic Patterns",
              },
          ],
          level: {
            Es: "Intermedio",
            En: "Intermediate"
          },
          duration:  {
            Es: "3 semestres",
            En: "3 semesters"
          },
          year: "2020-2022",
          projects: {
            Es: "Aplicaciones de consola y ejercicios de estructuras de datos",
            En: "Console applications and data structures exercises"
          },
          color: "red",
        },
        {
          name: "MySQL",
          icon: <SiMysql className="text-6xl text-blue-700" />,
          description: {
            Es: "Sistema de gestión de bases de datos relacionales",
            En: "Relational database management system"
          },
          detailedInfo: {
            Es: "Modelado de bases de datos relacionales, consultas SQL, joins, vistas e índices. Práctica de normalización y diseño eficiente para rendimiento y consistencia.",
            En: "Relational database modeling, SQL queries, joins, views, and indexes. Normalization and efficient design practices for performance and consistency."
          },
          skills: [
              {
                Es: "Modelado relacional y normalización",
                En: "Relational Modeling and Normalization,"
              },
              {
                Es: "Consultas SQL con JOINs",
                En: "SQL Queries with JOINs,"
              },
              {
                Es: "Índices y vistas",
                En: "Indexes and Views,"
              },
              {
                Es: "Procedimientos almacenados básicos",
                En: "Basic Stored Procedures,"
              },
              {
                Es: "Backups y restauración",
                En: "Backups and Restorations,"
              },
          ],
          level: {
            Es: "Avanzado",
            En: "Advanced"
          },
          duration:  {
            Es: "4 semestres",
            En: "4 semesters"
          },
          year: "2020 - 2022",
          projects: {
            Es: "Modelos de datos para sistemas académicos y comerciales",
            En: "Data models for academic and commercial systems"
          },
          color: "blue",
        },
        {
          name: "MongoDB",
          icon: <SiMongodb className="text-6xl text-green-700" />,
          description: {
            Es: "Base de datos NoSQL orientada a documentos",
            En: "Document-oriented NoSQL database"
          },
          detailedInfo: {
            Es: "Introducción a documentos, colecciones, agregaciones y diseño de esquemas flexibles para aplicaciones modernas con necesidades de escalado horizontal.",
            En: "Introduction to documents, collections, aggregations, and flexible schema design for modern applications with horizontal scaling needs."
          },
          skills: [
              {
                Es: "Documentos y colecciones",
                En: "Documents and Collections",
              },
              {
                Es: "Consultas y proyecciones",
                En: "Queries and Projections",
              },
              {
                Es: "Pipeline de agregación básico",
                En: "Basic Aggregation Pipeline",
              },
              {
                Es: "Índices y rendimiento",
                En: "Indexes and Performance",
              },
              {
                Es: "Estrategias de modelado NoSQL",
                En: "NoSQL Modeling Strategies",
              },
          ],
          level: {
            Es: "Básico",
            En: "Essential"
          },
          duration:  {
            Es: "1 semestres",
            En: "1 semesters"
          },
          year: "2020",
          projects: {
            Es: "Prototipos y ejercicios de consultas/agregaciones",
            En: "Prototypes and query/aggregation exercises"
          },
          color: "green",
        },
    ] 

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
  }
  const colorClasses = {
    purple: "bg-violet-50 border-violet-100",
    blue: "bg-blue-50 border-blue-100",
    red: "bg-red-50 border-red-100",
    green: "bg-green-50 border-green-100",
  };
  const colorClassesUl = {
    purple: "bg-violet-500 border-violet-100",
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
              {sistemaLenguaje === "Es" ? "Formación Universitaria": "University Education"}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-light mb-4">            
            {sistemaLenguaje === "Es" ? <>Estudios <span className="font-bold">Universitarios</span></> : <><span className="font-bold">University</span> Studies</>}
          </h1>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed">            
            {sistemaLenguaje === "Es" ? "Fundamentos de backend y bases de datos, fortaleciendo la programación orientada a objetos y el diseño de datos." : "Backend and database fundamentals, strengthening object-oriented programming and data design."}
          </p>
        </div>
        <div className="infoG grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="unidad rounded-xl p-6 shadow-sm border text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaCheckCircle className="text-green-600 text-xl" />
            </div>
            <h3 className="font-semibold mb-2">
              {sistemaLenguaje === "Es" ? "Estado": "State"}
            </h3>
            <p className="font-medium">{sistemaLenguaje === "Es" ? "Completado": "Filled"}</p>
          </div>

          <div className="unidad rounded-xl p-6 shadow-sm border text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaCalendarAlt className="text-blue-600 text-xl" />
            </div>
            <h3 className="font-semibold mb-2">
              {sistemaLenguaje === "Es" ? "Período": "Period"}
            </h3>
            <p className="font-medium">2020 - 2022</p>
          </div>

          <div className="unidad rounded-xl p-6 shadow-sm border text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaClock className="text-purple-600 text-xl" />
            </div>
            <h3 className="font-semibold mb-2">
              {sistemaLenguaje === "Es" ? "Duración Total" : "Total Duration"}
            </h3>
            <p className="font-medium">
              {sistemaLenguaje === "Es" ? "4 semestres" : "4 semesters"}
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
            <p className="leading-relaxed italic text-lg">"{sistemaLenguaje === "Es" ? personalComment : "Learning is an art, and during this time I was so happy learning with my classmates, with the challenges from the teachers, with the projects that combined everything. It was pure happiness. Although I sometimes struggled to understand new concepts, I always found a way to overcome them."}"</p>
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
              to="/laborales"
              className="px-6 py-3 rounded-lg hover:transition-colors font-bold"
            >
              {sistemaLenguaje === "Es" ? "Estudios Laborales →" : "Work Studies →"}
            </Link>
            <Link
              to="/proximosEstudios"
              className="px-6 py-3 rounded-lg hover:transition-colors font-bold"
            >
              {sistemaLenguaje === "Es" ? "Próximos Estudios →" : "Upcoming Studies →"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
