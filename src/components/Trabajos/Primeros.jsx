import "./Estudios.scss"
import { useState } from "react"
import { Link } from "react-router-dom";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaCalendarAlt,
  FaClock,
  FaCheckCircle,
  FaLightbulb,
  FaCode,
} from "react-icons/fa"
import { useGlobal } from "../../context/GlobalContext";

export default function PrimerosEstudios() {
  const { sistemaLenguaje } = useGlobal();
  const [personalComment, setPersonalComment] = useState(
    "Mis primeros pasos en el desarrollo web fueron tortuosos, me costaban cosas como 'poner una imagen' pero el reto siempre fue creciendo, la motivacion y creacion de cosas 'simples' pero raras para alguien que nunca habua codificado, eran mi motor."
  )
  const technologies = [
    {
      name: "HTML5",
      icon: <FaHtml5 className="text-6xl text-orange-600" />,
      description: {
        Es: "Lenguaje de marcado para estructurar contenido web",
        En: "Markup language for structuring web content"
      },
      detailedInfo: {
        Es: "HTML5 fue mi primera introducción al desarrollo web. Aprendí sobre elementos semánticos, formularios, multimedia y las mejores prácticas para crear estructuras web sólidas y accesibles.",
        En: "HTML5 was my first introduction to web development. I learned about semantic elements, forms, multimedia, and best practices for creating robust and accessible web structures."
      },
      skills: [
        {
          Es: "Elementos semánticos (header, nav, main, footer)",
          En: "Semantic elements (header, nav, main, footer)"
        },
        {
          Es: "Formularios avanzados con validación",
          En: "Advanced forms with validation",
        },
        {
          Es: "Multimedia (audio, video, canvas)",
          En: "Multimedia (audio, video, canvas)",
        },
        {
          Es: "APIs de HTML5 (localStorage, geolocation)",
          En: "HTML5 APIs (localStorage, geolocation)",
        },
        {
          Es: "Accesibilidad web (ARIA, roles)",
          En: "Web accessibility (ARIA, roles)",
        },
      ],
      level: {
        Es: "Avanzado",
        En: "Advanced"
      },
      duration:  {
        Es: "3 meses",
        En: "3 months"
      },
      year: "2019",
      projects: {
        Es: "15+ (páginas / proyectos) de web estáticas",
        En: "15+ (pages/projects) of static websites"
      },
      color: "red",
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt className="text-6xl text-blue-600" />,
      description: {
        Es: "Hojas de estilo para diseño y presentación visual",
        En: "Style sheets for design and visual presentation"
      },
      detailedInfo: {
        Es: "CSS3 me abrió las puertas al mundo del diseño web. Desde selectores básicos hasta animaciones complejas, aprendí a dar vida visual a las estructuras HTML.",
        En: "CSS3 opened the door to the world of web design for me. From basic selectors to complex animations, I learned how to bring HTML structures to visual life."
      },
      skills: [
        {
          Es: "Flexbox y CSS Grid para layouts",
          En: "Flexbox and CSS Grid for layouts"
        },
        {
          Es: "Animaciones y transiciones",
          En: "Animations and Transitions"
        },
        {
          Es: "Responsive design con media queries",
          En: "Responsive Design with Media Queries"
        },
        {
          Es: "Preprocesadores (Sass/SCSS)",
          En: "Preprocessors (Sass/SCSS)"
        },
        {
          Es: "Metodologías (BEM, OOCSS)",
          En: "Methodologies (BEM, OOCSS)"
        },
      ],
      level: {
        Es: "Avanzado",
        En: "Advanced"
      },
      duration:  {
        Es: "4 meses",
        En: "4 months"
      },
      year: "2019",
      projects: {
        Es: "20+ diseños responsive",
        En: "20+ responsive designs"
      },
      color: "blue",
    },
    {
      name: "JavaScript",
      icon: <FaJs className="text-6xl text-yellow-500" />,
      description: {
        Es: "Lenguaje de programación para interactividad web",
        En: "Programming language for web interactivity"
      },
      detailedInfo: {
        Es: "JavaScript fue el punto de inflexión en mi aprendizaje. Pasar de páginas estáticas a aplicaciones interactivas fue fascinante. Aprendí desde conceptos básicos hasta manipulación del DOM.",
        En: "JavaScript was the turning point in my learning. Moving from static pages to interactive applications was fascinating. I learned everything from basic concepts to DOM manipulation."
      },
      skills: [
        {
          Es: "Sintaxis y conceptos fundamentales",
          En: "Syntax and Fundamental Concepts"
        },
        {
          Es: "Manipulación del DOM",
          En: "DOM Manipulation",
        },
        {
          Es: "Eventos y event listeners",
          En: "Events and Event Listeners",
        },
        {
          Es: "AJAX y fetch API",
          En: "AJAX and Fetch API",
        },
        {
          Es: "ES6+ (arrow functions, destructuring, modules)",
          En: "ES6+ (Arrow Functions, Destructuring, Modules)",
        },
      ],
      level: {
        Es: "Avanzado",
        En: "Advanced"
      },
      duration:  {
        Es: "6 meses",
        En: "6 months"
      },
      year: "2019",
      projects: {
        Es: "10+ aplicaciones interactivas",
        En: "10+ interactive apps"
      },
      color: "yellow",
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
      case "Básico":
        return "bg-blue-100 text-blue-800 border-blue-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }
  const colorClasses = {
    yellow: "bg-yellow-50 border-yellow-100",
    blue: "bg-blue-50 border-blue-100",
    red: "bg-red-50 border-red-100",
    green: "bg-green-50 border-green-100",
  };
  const colorClassesUl = {
    yellow: "bg-yellow-500 border-yellow-100",
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
            <span className="font-semibold">{sistemaLenguaje === "Es" ? "Inicio": "Start"}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-light mb-4">
            {sistemaLenguaje === "Es" ? <>Mis <span className="font-bold">Primeros Pasos</span></> : <>My <span className="font-bold">First Steps</span></>}
          </h1>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed">            
            {sistemaLenguaje === "Es" ? "El comienzo de mi viaje en el desarrollo web. Aquí aprendí los fundamentos que siguen siendo la base de todo lo que hago hoy.": "The beginning of my web development journey. Here I learned the fundamentals that remain the foundation of everything I do today."}
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
            <p className="font-medium">2019</p>
          </div>

          <div className="unidad rounded-xl p-6 shadow-sm border text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaClock className="text-purple-600 text-xl" />
            </div>
            <h3 className="font-semibold mb-2">              
              {sistemaLenguaje === "Es" ? "Duración Total" : "Total Duration"}
            </h3>
            <p className="font-medium">              
              {sistemaLenguaje === "Es" ? "6 meses" : "6 months"}
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
            <p className="leading-relaxed italic text-lg">"{sistemaLenguaje === "Es" ? personalComment : "My first steps in web development were tortuous, I found things like 'putting an image' difficult, but the challenge always grew. The motivation and creation of 'simple' but strange things for someone who had never coded were my driving force."}"</p>
          </div>
        </div>
        <div className="navegacion mt-16 text-center">
          <h3 className="text-xl font-semibold mb-6">
            {sistemaLenguaje === "Es" ? "Continúa explorando mi formación" : "Continue exploring my training"}
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
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
