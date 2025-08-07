import { useState } from "react"
import { Link } from "react-router-dom";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaArrowLeft,
  FaCalendarAlt,
  FaClock,
  FaCheckCircle,
  FaLightbulb,
  FaCode,
  FaEdit,
  FaSave,
  FaTimes,
} from "react-icons/fa"

export default function PrimerosEstudios() {
  const [editingComment, setEditingComment] = useState(false)
  const [personalComment, setPersonalComment] = useState(
    "Mis primeros pasos en el desarrollo web fueron emocionantes y desafiantes. HTML me enseñó la estructura, CSS la belleza visual, y JavaScript le dio vida a todo. Recuerdo la satisfacción de crear mi primera página web interactiva - fue el momento en que supe que esto era lo mío. Cada línea de código era un pequeño logro, cada error una lección valiosa."
  )
  const [tempComment, setTempComment] = useState(personalComment)

  const handleSaveComment = () => {
    setPersonalComment(tempComment)
    setEditingComment(false)
  }

  const handleCancelEdit = () => {
    setTempComment(personalComment)
    setEditingComment(false)
  }

  const technologies = [
    {
      name: "HTML5",
      icon: <FaHtml5 className="text-6xl text-orange-600" />,
      description: "Lenguaje de marcado para estructurar contenido web",
      detailedInfo:
        "HTML5 fue mi primera introducción al desarrollo web. Aprendí sobre elementos semánticos, formularios, multimedia y las mejores prácticas para crear estructuras web sólidas y accesibles.",
      skills: [
        "Elementos semánticos (header, nav, main, footer)",
        "Formularios avanzados con validación",
        "Multimedia (audio, video, canvas)",
        "APIs de HTML5 (localStorage, geolocation)",
        "Accesibilidad web (ARIA, roles)",
      ],
      level: "Avanzado",
      duration: "3 meses",
      year: "2019",
      projects: "15+ páginas web estáticas",
      color: "orange",
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt className="text-6xl text-blue-600" />,
      description: "Hojas de estilo para diseño y presentación visual",
      detailedInfo:
        "CSS3 me abrió las puertas al mundo del diseño web. Desde selectores básicos hasta animaciones complejas, aprendí a dar vida visual a las estructuras HTML.",
      skills: [
        "Flexbox y CSS Grid para layouts",
        "Animaciones y transiciones",
        "Responsive design con media queries",
        "Preprocesadores (Sass/SCSS)",
        "Metodologías (BEM, OOCSS)",
      ],
      level: "Avanzado",
      duration: "4 meses",
      year: "2019",
      projects: "20+ diseños responsive",
      color: "blue",
    },
    {
      name: "JavaScript",
      icon: <FaJs className="text-6xl text-yellow-500" />,
      description: "Lenguaje de programación para interactividad web",
      detailedInfo:
        "JavaScript fue el punto de inflexión en mi aprendizaje. Pasar de páginas estáticas a aplicaciones interactivas fue fascinante. Aprendí desde conceptos básicos hasta manipulación del DOM.",
      skills: [
        "Sintaxis y conceptos fundamentales",
        "Manipulación del DOM",
        "Eventos y event listeners",
        "AJAX y fetch API",
        "ES6+ (arrow functions, destructuring, modules)",
      ],
      level: "Intermedio",
      duration: "6 meses",
      year: "2019-2020",
      projects: "10+ aplicaciones interactivas",
      color: "yellow",
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

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Breadcrumb y navegación */}
        <div className="mb-8">
          <Link
            href="/studies"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            <FaArrowLeft />
            <span>Volver a Estudios</span>
          </Link>
        </div>

        {/* Header principal */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-blue-100 px-6 py-3 rounded-full mb-6">
            <FaLightbulb className="text-blue-600 text-xl" />
            <span className="text-blue-800 font-semibold">Primeros Estudios</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-light mb-4">
            Mis <span className="font-bold text-blue-600">Primeros Pasos</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            El comienzo de mi viaje en el desarrollo web. Aquí aprendí los fundamentos que siguen siendo la base de
            todo lo que hago hoy.
          </p>
        </div>

        {/* Información general */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaCheckCircle className="text-green-600 text-xl" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Estado</h3>
            <p className="text-green-600 font-medium">Completado</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaCalendarAlt className="text-blue-600 text-xl" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Período</h3>
            <p className="text-gray-600 font-medium">2019 - 2020</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaClock className="text-purple-600 text-xl" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Duración Total</h3>
            <p className="text-gray-600 font-medium">13 meses</p>
          </div>
        </div>

        {/* Tecnologías detalladas */}
        <div className="space-y-12">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
            >
              {/* Header de la tecnología */}
              <div className={`bg-${tech.color}-50 border-b border-${tech.color}-100 p-8`}>
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
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                      <FaCode className="text-gray-600" />
                      Mi Experiencia
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{tech.detailedInfo}</p>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Proyectos Realizados</h4>
                      <p className="text-gray-600 text-sm">{tech.projects}</p>
                    </div>
                  </div>

                  {/* Habilidades aprendidas */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Habilidades Desarrolladas</h3>
                    <ul className="space-y-3">
                      {tech.skills.map((skill, skillIndex) => (
                        <li key={skillIndex} className="flex items-start gap-3">
                          <div className={`w-2 h-2 bg-${tech.color}-500 rounded-full mt-2 flex-shrink-0`}></div>
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
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <FaLightbulb className="text-blue-600" />
              </div>
              Mi Reflexión Personal
            </h3>
            {!editingComment && (
              <button
                onClick={() => setEditingComment(true)}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <FaEdit />
                Editar
              </button>
            )}
          </div>

          {editingComment ? (
            <div className="space-y-4">
              <textarea
                value={tempComment}
                onChange={(e) => setTempComment(e.target.value)}
                className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                rows="6"
                placeholder="Comparte tu experiencia personal..."
              />
              <div className="flex gap-3">
                <button
                  onClick={handleSaveComment}
                  className="flex items-center gap-2 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  <FaSave />
                  Guardar
                </button>
                <button
                  onClick={handleCancelEdit}
                  className="flex items-center gap-2 px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
                >
                  <FaTimes />
                  Cancelar
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-white/70 rounded-lg p-6 border border-blue-200">
              <p className="text-gray-700 leading-relaxed italic text-lg">"{personalComment}"</p>
            </div>
          )}
        </div>

        {/* Navegación a otras secciones */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Continúa explorando mi formación</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/studies/universitarios"
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              Estudios Universitarios →
            </Link>
            <Link
              href="/studies/laborales"
              className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
            >
              Estudios Laborales →
            </Link>
            <Link
              href="/studies/proximos"
              className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-medium"
            >
              Próximos Estudios →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
