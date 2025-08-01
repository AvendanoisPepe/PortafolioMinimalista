import "./Trabajos.scss"
import { useState } from "react"
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPhp,
  FaJava,
  FaReact,
  FaNodeJs,
  FaCheckCircle,
  FaClock,
  FaGraduationCap,
  FaBriefcase,
  FaRocket,
  FaEdit,
} from "react-icons/fa"
import { SiMysql, SiMongodb, SiWebpack, SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si"

export default function StudiesDetail() {
  const [activeCategory, setActiveCategory] = useState("primeros")
  const [editingComment, setEditingComment] = useState(null)
  const [comments, setComments] = useState({
    primeros:
      "Mis primeros pasos en el desarrollo web fueron emocionantes y desafiantes. HTML me enseñó la estructura, CSS la belleza visual, y JavaScript le dio vida a todo.",
    universitarios:
      "Durante mis estudios universitarios profundicé en tecnologías backend y bases de datos. PHP y Java me dieron una base sólida en programación orientada a objetos.",
    laborales:
      "En el ámbito laboral me especialicé en tecnologías modernas de frontend y herramientas de desarrollo que me permitieron crear aplicaciones más robustas y escalables.",
    proximos:
      "Estas son las tecnologías que planeo dominar próximamente para mantenerme actualizado con las últimas tendencias del desarrollo web moderno.",
  })

  const studiesData = {
    primeros: {
      title: "Primeros Estudios",
      icon: <FaGraduationCap className="text-blue-600" />,
      color: "blue",
      status: "Completado",
      technologies: [
        {
          name: "HTML5",
          icon: <FaHtml5 className="text-orange-600" />,
          description: "Lenguaje de marcado para estructurar contenido web",
          level: "Avanzado",
          year: "2019",
        },
        {
          name: "CSS3",
          icon: <FaCss3Alt className="text-blue-600" />,
          description: "Hojas de estilo para diseño y presentación visual",
          level: "Avanzado",
          year: "2019",
        },
        {
          name: "JavaScript",
          icon: <FaJs className="text-yellow-500" />,
          description: "Lenguaje de programación para interactividad web",
          level: "Intermedio",
          year: "2019",
        },
      ],
    },
    universitarios: {
      title: "Estudios Universitarios",
      icon: <FaGraduationCap className="text-green-600" />,
      color: "green",
      status: "Completado",
      technologies: [
        {
          name: "PHP",
          icon: <FaPhp className="text-purple-600" />,
          description: "Lenguaje de programación del lado del servidor",
          level: "Intermedio",
          year: "2020-2021",
        },
        {
          name: "Java",
          icon: <FaJava className="text-red-600" />,
          description: "Lenguaje de programación orientado a objetos",
          level: "Intermedio",
          year: "2020-2021",
        },
        {
          name: "MySQL",
          icon: <SiMysql className="text-blue-700" />,
          description: "Sistema de gestión de bases de datos relacionales",
          level: "Intermedio",
          year: "2020-2021",
        },
        {
          name: "MongoDB",
          icon: <SiMongodb className="text-green-700" />,
          description: "Base de datos NoSQL orientada a documentos",
          level: "Básico",
          year: "2021",
        },
      ],
    },
    laborales: {
      title: "Estudios Laborales",
      icon: <FaBriefcase className="text-purple-600" />,
      color: "purple",
      status: "Completado",
      technologies: [
        {
          name: "React.js",
          icon: <FaReact className="text-cyan-500" />,
          description: "Biblioteca de JavaScript para interfaces de usuario",
          level: "Avanzado",
          year: "2022-2023",
        },
        {
          name: "Node.js",
          icon: <FaNodeJs className="text-green-600" />,
          description: "Entorno de ejecución de JavaScript del lado del servidor",
          level: "Intermedio",
          year: "2022-2023",
        },
        {
          name: "Webpack",
          icon: <SiWebpack className="text-blue-500" />,
          description: "Empaquetador de módulos para aplicaciones JavaScript",
          level: "Intermedio",
          year: "2023",
        },
      ],
    },
    proximos: {
      title: "Próximos Estudios",
      icon: <FaRocket className="text-orange-600" />,
      color: "orange",
      status: "En progreso",
      technologies: [
        {
          name: "Next.js",
          icon: <SiNextdotjs className="text-black" />,
          description: "Framework de React para aplicaciones web de producción",
          level: "En aprendizaje",
          year: "2024",
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-cyan-400" />,
          description: "Framework de CSS utilitario para diseño rápido",
          level: "En aprendizaje",
          year: "2024",
        },
        {
          name: "TypeScript",
          icon: <SiTypescript className="text-blue-600" />,
          description: "Superset de JavaScript con tipado estático",
          level: "Planificado",
          year: "2024",
        },
      ],
    },
  }

  const currentStudy = studiesData[activeCategory]

  const handleCommentEdit = (category) => {
    setEditingComment(category)
  }

  const handleCommentSave = (category, newComment) => {
    setComments((prev) => ({
      ...prev,
      [category]: newComment,
    }))
    setEditingComment(null)
  }

  const getLevelColor = (level) => {
    switch (level) {
      case "Avanzado":
        return "bg-green-100 text-green-800"
      case "Intermedio":
        return "bg-yellow-100 text-yellow-800"
      case "Básico":
        return "bg-blue-100 text-blue-800"
      case "En aprendizaje":
        return "bg-purple-100 text-purple-800"
      case "Planificado":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (status) => {
    return status === "Completado" ? (
      <FaCheckCircle className="text-green-500" />
    ) : (
      <FaClock className="text-orange-500" />
    )
  }

  return (
    <div className="trabajos min-h-screen py-20">
      <div className="max-w-7xl 2xl:max-w-11/12 mx-auto px-4 md:px-8">
        <div className="header text-center mb-12">
          <h1 className="text-4xl 2xl:text-6xl md:text-5xl font-light mb-4">
            Mi Trayectoria de <span className="font-bold">Estudios</span>
          </h1>
          <p className="text-lg 2xl:text-xl max-w-2xl 2xl:max-w-3xl mx-auto">
            Un recorrido por mi formación académica y profesional en el desarrollo web
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar de categorías */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sticky top-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Categorías</h3>
              <nav className="space-y-2">
                {Object.entries(studiesData).map(([key, study]) => (
                  <button
                    key={key}
                    onClick={() => setActiveCategory(key)}
                    className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all ${
                      activeCategory === key
                        ? `bg-${study.color}-50 text-${study.color}-700 border border-${study.color}-200`
                        : "hover:bg-gray-50 text-gray-600"
                    }`}
                  >
                    <div className="text-xl">{study.icon}</div>
                    <div className="text-left">
                      <div className="font-medium text-sm">{study.title}</div>
                      <div className="text-xs opacity-75">{study.technologies.length} tecnologías</div>
                    </div>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Contenido principal */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              {/* Header de la categoría */}
              <div className={`bg-${currentStudy.color}-50 border-b border-${currentStudy.color}-100 p-6`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">{currentStudy.icon}</div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800">{currentStudy.title}</h2>
                      <div className="flex items-center gap-2 mt-1">
                        {getStatusIcon(currentStudy.status)}
                        <span className="text-sm text-gray-600">{currentStudy.status}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tecnologías */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Tecnologías Estudiadas</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {currentStudy.technologies.map((tech, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                      <div className="flex items-start gap-3">
                        <div className="text-2xl mt-1">{tech.icon}</div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-gray-800">{tech.name}</h4>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(tech.level)}`}>
                              {tech.level}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{tech.description}</p>
                          <div className="text-xs text-gray-500">Estudiado en: {tech.year}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Comentario personal */}
                <div className="bg-blue-50 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-800">Mi Experiencia Personal</h3>
                    <button
                      onClick={() => handleCommentEdit(activeCategory)}
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm"
                    >
                      <FaEdit />
                      Editar
                    </button>
                  </div>

                  {editingComment === activeCategory ? (
                    <div className="space-y-3">
                      <textarea
                        defaultValue={comments[activeCategory]}
                        className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                        rows="4"
                        id={`comment-${activeCategory}`}
                      />
                      <div className="flex gap-2">
                        <button
                          onClick={() => {
                            const textarea = document.getElementById(`comment-${activeCategory}`)
                            handleCommentSave(activeCategory, textarea.value)
                          }}
                          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm"
                        >
                          Guardar
                        </button>
                        <button
                          onClick={() => setEditingComment(null)}
                          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 text-sm"
                        >
                          Cancelar
                        </button>
                      </div>
                    </div>
                  ) : (
                    <p className="text-gray-700 leading-relaxed italic">"{comments[activeCategory]}"</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}