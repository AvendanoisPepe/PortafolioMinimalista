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
import { useGlobal } from "../../context/GlobalContext";

export default function StudiesDetail() {
  const { sistemaLenguaje } = useGlobal();
  const [activeCategory, setActiveCategory] = useState("primeros")
  const [comments, setComments] = useState({
    Es: {
      primeros:
        "Mis primeros pasos en el desarrollo web fueron tortuosos, me costaban cosas como 'poner una imagen' pero el reto siempre fue creciendo, la motivacion y creacion de cosas 'simples' pero raras para alguien que nunca habua codificado, eran mi motor.",
      universitarios:
        "Aprender es un arte y en esta epoca fui tan feliz aprendiendo con mis compañeros, con los retos de los profesores, con los proyectos que combinaban todo, era felicidad pura, aunque a veces me costaba entender conceptos nuevos, siempre encontraba la manera de superarlos.",
      laborales:
        "Aca era aprender o aprender, ya que si no rendía no comía, pero la verdad es que me encantaba, cada día era un nuevo desafío, cada proyecto una nueva oportunidad de crecer y aprender, y aunque a veces me sentía abrumado, siempre encontraba la manera de seguir adelante.",
      proximos:
        "Estas son las tecnologías que planeo dominar próximamente para mantenerme actualizado con las últimas tendencias del desarrollo web moderno.",
    },
    En: {
      primeros:
        "My first steps in web development were tortuous, even something like 'adding an image' was hard. But challenges kept growing, and the motivation of creating 'simple' things that felt magical to someone who had never coded before was my engine.",
      universitarios:
        "Learning is an art, and at this time I was so happy learning with classmates, facing professors' challenges, building projects that combined everything. It was pure joy, even when I struggled with new concepts, I always found a way to overcome them.",
      laborales:
        "Here it was 'learn or learn', because if I didn’t perform, I didn’t eat. But truth is, I loved it. Each day was a new challenge, each project a new opportunity to grow. Even when I felt overwhelmed, I always found a way to keep going.",
      proximos:
        "These are the technologies I plan to master soon to stay up-to-date with the latest trends in modern web development.",
    },
  })

  const studiesData = {
    primeros: {
      title: {
        Es: "Primeros Estudios",
        En: "First Studies"
      },
      icon: <FaGraduationCap className="text-blue-600" />,
      color: "blue",
      status: {
        Es: "Completado",
        En: "Filled"
      },
      technologies: [
        {
          name: "HTML5",
          icon: <FaHtml5 className="text-orange-600" />,
          description: {
            Es: "Lenguaje de marcado para estructurar contenido web",
            En: "Markup language for structuring web content"
          },
          level: {
            Es: "Avanzado",
            En: "Advanced"
          },
          year: {
            Es: "2019",
            En: "2019"
          },
        },
        {
          name: "CSS3",
          icon: <FaCss3Alt className="text-blue-600" />,
          description: {
            Es: "Hojas de estilo para diseño y presentación visual",
            En: "Style sheets for design and visual presentation"
          },
          level: {
            Es: "Avanzado",
            En: "Advanced"
          },
          year: {
            Es: "Todos los años",
            En: "Every year"
          },
        },
        {
          name: "JavaScript",
          icon: <FaJs className="text-yellow-500" />,
          description: {
            Es: "Lenguaje de programación para interactividad web",
            En: "Programming language for web interactivity"
          },
          level: {
            Es: "Avanzado",
            En: "Advanced"
          },
          year: {
            Es: "Todos los años",
            En: "Every year"
          },
        },
      ],
    },
    universitarios: {
      title: {
        Es: "Estudios Universitarios",
        En: "University Studies"
      },
      icon: <FaGraduationCap className="text-green-600" />,
      color: "green",
      status: {
        Es: "Completado",
        En: "Filled"
      },
      technologies: [
        {
          name: "PHP",
          icon: <FaPhp className="text-purple-600" />,
          description: {
            Es: "Lenguaje de programación del lado del servidor",
            En: "Server-side programming language"
          },
          level: {
            Es: "Intermedio",
            En: "Intermediate"
          },
          year: {
            Es: "2020-2022",
            En: "2020-2022"
          }
        },
        {
          name: "Java",
          icon: <FaJava className="text-red-600" />,
          description: {
            Es: "Lenguaje de programación orientado a objetos",
            En: "Object-oriented programming language"
          },
          level: {
            Es: "Intermedio",
            En: "Intermediate"
          },
          year: {
            Es: "2020-2022",
            En: "2020-2022"
          }
        },
        {
          name: "MySQL",
          icon: <SiMysql className="text-blue-700" />,
          description: {
            Es: "Sistema de gestión de bases de datos relacionales",
            En: "Relational database management system"
          },
          level: {
            Es: "Avanzado",
            En: "Advanced"
          },
          year: {
            Es: "Todos los años",
            En: "Every year"
          },
        },
        {
          name: "MongoDB",
          icon: <SiMongodb className="text-green-700" />,
          description: {
            Es: "Base de datos NoSQL orientada a documentos",
            En: "Document-oriented NoSQL database"
          },
          level: {
            Es: "Básico",
            En: "Essential"
          },
          year: {
            Es: "2020",
            En: "2020"
          }
        },
      ],
    },
    laborales: {
      title: {
        Es: "Estudios Laborales",
        En: "Labor Studies"
      },
      icon: <FaBriefcase className="text-purple-600" />,
      color: "purple",
      status: {
        Es: "Completado",
        En: "Filled"
      },
      technologies: [
        {
          name: "React.js",
          icon: <FaReact className="text-cyan-500" />,
          description: {
            Es: "Biblioteca de JavaScript para interfaces de usuario",
            En: "JavaScript library for user interfaces"
          },
          level: {
            Es: "Avanzado",
            En: "Advanced"
          },
          year: {
            Es: "2023-Actualidad",
            En: "2023-Present"
          }
        },
        {
          name: "Node.js",
          icon: <FaNodeJs className="text-green-600" />,
          description: {
            Es: "Base de datos NoSQL orientada a documentos",
            En: "Server-side JavaScript runtime environment"
          },
          level: {
            Es: "Intermedio",
            En: "Intermediate"
          },
          year: {
            Es: "2023-Actualidad",
            En: "2023-Present"
          }
        },
        {
          name: "Webpack",
          icon: <SiWebpack className="text-blue-500" />,
          description: {
            Es: "Empaquetador de módulos para aplicaciones JavaScript",
            En: "Module packager for JavaScript applications"
          },
          level: {
            Es: "Intermedio",
            En: "Intermediate"
          },
          year: {
            Es: "2023-Actualidad",
            En: "2023-Present"
          }
        },
      ],
    },
    proximos: {
      title: {
        Es: "Próximos Estudios",
        En: "Upcoming Studies"
      },
      icon: <FaRocket className="text-orange-600" />,
      color: "orange",
      status: {
        Es: "En progreso",
        En: "In progress"
      },
      technologies: [
        {
          name: "Next.js",
          icon: <SiNextdotjs className="text-black" />,
          description: {
            Es: "Framework de React para aplicaciones web de producción",
            En: "React Framework for Production Web Applications"
          },
          level: {
            Es: "En aprendizaje",
            En: "In learning"
          },
          year: {
            Es: "2025",
            En: "2025"
          }
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-cyan-400" />,
          description: {
            Es: "Framework de CSS utilitario para diseño rápido",
            En: "Utilitarian CSS framework for rapid design"
          },
          level: {
            Es: "En aprendizaje",
            En: "In learning"
          },
          year: {
            Es: "2025",
            En: "2025"
          }
        },
        {
          name: "TypeScript",
          icon: <SiTypescript className="text-blue-600" />,
          description: {
            Es: "Superset de JavaScript con tipado estático",
            En: "Statically Typed JavaScript Superset"
          },
          level: {
            Es: "Planificado",
            En: "Planned"
          },
          year: {
            Es: "2025",
            En: "2025"
          }
        },
      ],
    },
  }

  const currentStudy = studiesData[activeCategory]

  const getLevelColor = (level) => {
    switch (level) {
      case "Avanzado":
        return "bg-green-100 text-green-800"
      case "Advanced":
        return "bg-green-100 text-green-800"
      case "Intermedio":
        return "bg-yellow-100 text-yellow-800"
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800"
      case "Básico":
        return "bg-blue-100 text-blue-800"
      case "Essential":
        return "bg-blue-100 text-blue-800"
      case "En aprendizaje":
        return "bg-purple-100 text-purple-800"
      case "In learning":
        return "bg-purple-100 text-purple-800"
      case "Planificado":
        return "bg-gray-100 text-gray-800"
      case "Planned":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (status) => {
    return status === "Completado" || status === "Filled" ? (
      <FaCheckCircle className="text-green-500" />
    ) : (
      <FaClock className="text-orange-500" />
    )
  }
  const colorClasses = {
    blue: "bg-blue-50 text-blue-700 border border-blue-200",
    green: "bg-green-50 text-green-700 border border-green-200",
    purple: "bg-purple-50 text-purple-700 border border-purple-200",
    orange: "bg-orange-50 text-orange-700 border border-orange-200",
  }

  return (
    <div className="trabajos min-h-screen py-20">
      <div className="max-w-7xl 2xl:max-w-11/12 mx-auto px-4 md:px-8">
        <div className="header text-center mb-12">
          <h1 className="text-4xl 2xl:text-6xl md:text-5xl font-light mb-4">
            {sistemaLenguaje === "Es" ? <>Mi Trayectoria de <span className="font-bold">Estudios</span></> : <>My Study  <span className="font-bold">Path</span></>}            
          </h1>
          <p className="text-lg 2xl:text-xl max-w-2xl 2xl:max-w-3xl mx-auto">
            {sistemaLenguaje === "Es" ? "Un recorrido por mi formación académica y profesional en el desarrollo web" : "A tour of my academic and professional training in web development"}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sticky top-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {sistemaLenguaje === "Es" ? "Categorías" : "Categories"}
              </h3>
              <nav className="space-y-2">
                {Object.entries(studiesData).map(([key, study]) => (
                  <button
                    key={key}
                    onClick={() => setActiveCategory(key)}
                    className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all border border-gray-100 ${
                      activeCategory === key
                        ? colorClasses[study.color]
                        : "hover:bg-gray-50 text-gray-600"
                    }`}
                  >
                    <div className="text-xl">{study.icon}</div>
                    <div className="text-left">
                      <div className="font-medium text-base">{study.title[sistemaLenguaje]}</div>
                      <div className="text-sm opacity-75">{study.technologies.length} {sistemaLenguaje === "Es" ? "tecnologías" : "technologies"}</div>
                    </div>
                  </button>
                ))}
              </nav>
            </div>
          </div>
          <div className="lg:w-3/4">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className={`bg-${currentStudy.color}-50 border-b border-${currentStudy.color}-100 p-6`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">{currentStudy.icon}</div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800">{currentStudy.title[sistemaLenguaje]}</h2>
                      <div className="flex items-center gap-2 mt-1">
                        {getStatusIcon(currentStudy.status[sistemaLenguaje])}
                        <span className="text-sm text-gray-600">{currentStudy.status[sistemaLenguaje]}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  {sistemaLenguaje === "Es" ? "Tecnologías Estudiadas" : "Technologies Studied"}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {currentStudy.technologies.map((tech, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                      <div className="flex items-start gap-3">
                        <div className="text-2xl mt-1">{tech.icon}</div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-gray-800">{tech.name}</h4>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(tech.level[sistemaLenguaje])}`}>
                              {tech.level[sistemaLenguaje]}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{tech.description[sistemaLenguaje]}</p>
                          <div className="text-xs text-gray-500">{sistemaLenguaje === "Es" ? "Estudiado en:" : "Studied in:"} {tech.year[sistemaLenguaje]}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Comentario personal */}
                <div className={`rounded-lg p-6 ${colorClasses[studiesData[activeCategory].color]}`}>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-800">{sistemaLenguaje === "Es" ? "Mi Experiencia Personal" : "My Personal Experience"}</h3>                    
                  </div>
                    <p className="text-gray-700 leading-relaxed italic">"{comments[sistemaLenguaje][activeCategory]}"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}