import "./Referencias.scss"
import { useState } from "react"
import { FaChevronLeft, FaChevronRight, FaQuoteLeft, FaStar, FaLinkedin } from "react-icons/fa"
import { PiGithubLogoBold } from "react-icons/pi";
import { useGlobal } from "../../context/GlobalContext";
import nest from "../../assets/imagenes/referencias/nest.jpeg"
export default function References() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const { sistemaLenguaje } = useGlobal();
  const testimonials = [
    {
      id: 1,
      name: "Nestor Gomez",
      position: "Jefe de Proyectos",
      company: "Atento Colombia.",
      image: nest,
      quote: "Un desarrollador excepcional y confiable.",
      testimonial:
        "Trabajo actualmente con Juan en varios proyectos. Su capacidad para resolver problemas complejos y entregar código limpio es impresionante. Siempre cumple con los plazos y su comunicación es excelente. Lo recomiendo sin dudarlo.",
      rating: 5,
      color: "blue",
      linkedin: "https://www.linkedin.com/in/n%C3%A9stor-david-g%C3%B3mez-sanabria-385b8b211/",
      email: "https://github.com/nedagosa-cod",
    },
    {
      id: 2,
      name: "Jersson Osma",
      position: "Desarrollador Backend",
      company: "Atento Colombia.",
      image: "/placeholder.svg?height=120&width=120&text=CR",
      quote: "Código de calidad y gran capacidad de aprendizaje.",
      testimonial:
        "Juan se integró perfectamente a nuestro equipo. Su dominio de React y Node.js nos permitió acelerar el desarrollo significativamente. Es proactivo, creativo y siempre busca las mejores soluciones. Un gran profesional.",
      rating: 5,
      color: "green",
      linkedin: "https://www.linkedin.com/in/jersson-osma-3236bb2a9/?originalSubdomain=co",
      email: "https://github.com/jerssonarleyosma",
    },
    {
      id: 3,
      name: "Hugo Machacon",
      position: "Desarrollador Full Stack",
      company: "3 Metas",
      image: "/placeholder.svg?height=120&width=120&text=AM",
      quote: "Colaboración perfecta entre diseño y desarrollo.",
      testimonial:
        "La colaboración con Juan fue fantástica. Entiende perfectamente los diseños y los implementa con precisión pixel-perfect. Su atención al detalle y conocimiento de UX hacen que trabajar juntos sea muy fluido y productivo.",
      rating: 5,
      color: "purple",
      linkedin: "https://www.linkedin.com/in/hmachacom/",
      email: "ana.martinez@creativestudio.com",
    },
  ]
  const testimonialsEn = [
  {
    id: 1,
    name: "Nestor Gomez",
    position: "Project Manager",
    company: "Atento Colombia.",
    image: nest,
    quote: "An exceptional and reliable developer.",
    testimonial:
      "I currently work with Juan on several projects. His ability to solve complex problems and deliver clean code is impressive. He always meets deadlines and his communication is excellent. I highly recommend him without hesitation.",
    rating: 5,
    color: "blue",
    linkedin: "https://www.linkedin.com/in/n%C3%A9stor-david-g%C3%B3mez-sanabria-385b8b211/",
    email: "https://github.com/nedagosa-cod",
  },
  {
    id: 2,
    name: "Jersson Osma",
    position: "Backend Developer",
    company: "Atento Colombia.",
    image: "/placeholder.svg?height=120&width=120&text=CR",
    quote: "Quality code and great learning ability.",
    testimonial:
      "Juan integrated perfectly into our team. His mastery of React and Node.js allowed us to accelerate development significantly. He is proactive, creative, and always seeks the best solutions. A great professional.",
    rating: 5,
    color: "green",
    linkedin: "https://www.linkedin.com/in/jersson-osma-3236bb2a9/?originalSubdomain=co",
    email: "https://github.com/jerssonarleyosma",
  },
  {
    id: 3,
    name: "Hugo Machacon",
    position: "Full Stack Developer",
    company: "3 Metas",
    image: "/placeholder.svg?height=120&width=120&text=AM",
    quote: "Perfect collaboration between design and development.",
    testimonial:
      "Collaboration with Juan was fantastic. He perfectly understands the designs and implements them with pixel-perfect precision. His attention to detail and UX knowledge make working together smooth and productive.",
    rating: 5,
    color: "purple",
    linkedin: "https://www.linkedin.com/in/hmachacom/",
    email: "ana.martinez@creativestudio.com",
  },
];


  const currentRef = sistemaLenguaje === "Es" ? testimonials[currentTestimonial] : testimonialsEn[currentTestimonial]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: "from-blue-100 to-blue-50",
        accent: "bg-blue-500",
        text: "text-blue-600",
        button: "bg-blue-500 hover:bg-blue-600",
      },
      green: {
        bg: "from-green-100 to-green-50",
        accent: "bg-green-500",
        text: "text-green-600",
        button: "bg-green-500 hover:bg-green-600",
      },
      purple: {
        bg: "from-purple-100 to-purple-50",
        accent: "bg-purple-500",
        text: "text-purple-600",
        button: "bg-purple-500 hover:bg-purple-600",
      },
    }
    return colors[color] || colors.blue
  }

  const colorClasses = getColorClasses(currentRef.color)

  return (
    <div className="referencias min-h-screen bg-gradient-to-br py-20 transition-all duration-700">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="header text-center mb-16">
          <div className="vineta inline-flex items-center gap-3 px-6 py-3 rounded-full mb-6 shadow-sm">
            <FaQuoteLeft className={`${colorClasses.text} text-xl`} />
            <span className="font-semibold">
              {sistemaLenguaje === "Es" ? "Referencias Profesionales" : "Professional References"}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-light mb-4">
            {sistemaLenguaje === "Es" ? <>Lo que dicen mis <span className={`font-bold ${colorClasses.text}`}>Colegas</span></> : <>What my <span className={`font-bold ${colorClasses.text}`}>Colleagues say</span></>}
            
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            {sistemaLenguaje === "Es" ? "Testimonios de profesionales con los que he tenido el placer de trabajar" : "Testimonials from professionals I have had the pleasure of working with"}
          </p>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <button
            onClick={prevTestimonial}
            className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 ${colorClasses.accent} backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all duration-300 hover:scale-110`}
          >
            <FaChevronLeft className="text-gray-600" />
          </button>
          <button
            onClick={nextTestimonial}
            className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 ${colorClasses.accent} backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all duration-300 hover:scale-110`}
          >
            <FaChevronRight className="text-gray-600" />
          </button>
          <div className="cont backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 mx-8 transition-all duration-500">
            <div className="text-center mb-8">
              <div className="relative inline-block">
                <img
                  src={currentRef.image || "/placeholder.svg"}
                  alt={currentRef.name}
                  className="w-36 h-w-36 rounded-full mx-auto shadow-lg object-cover"
                />
                <div
                  className={`absolute -bottom-2 -right-2 w-12 h-12 ${colorClasses.accent} rounded-full flex items-center justify-center shadow-lg`}
                >
                  <FaStar className="text-white text-xl" />
                </div>
              </div>
            </div>
            <div className="contTe text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">"{currentRef.quote}"</h2>
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(currentRef.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-lg" />
                ))}
              </div>
              <p className="texto text-lg leading-relaxed max-w-3xl mx-auto mb-8">{currentRef.testimonial}</p>
              <div className="lista text-center">
                <h3 className="font-semibold text-lg">{currentRef.name}</h3>
                <p className={`${colorClasses.text} font-bold`}>{currentRef.position}</p>
                <p className="compa text-sm">{currentRef.company}</p>
              </div>
            </div>

            {/* Contact Links */}
            <div className="flex justify-center gap-4 mb-8">
              <a
                href={currentRef.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href={currentRef.email}
                target="_blank"
                className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center hover:bg-indigo-700 transition-colors"
              >
                <PiGithubLogoBold className="text-xl"/>
              </a>
            </div>
            <div className="text-center">
              <button
                className={`w-1/2 py-2 ${colorClasses.button} text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
              >
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial ? colorClasses.accent : "bg-white/60"
              }`}
            />
          ))}
        </div>
        <div className="final mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="uno backdrop-blur-sm rounded-2xl p-6 text-center shadow-sm">
            <div
              className={`w-12 h-12 ${colorClasses.accent} rounded-full flex items-center justify-center mx-auto mb-4`}
            >
              <span className="text-white font-bold text-xl">20+</span>
            </div>
            <h3 className="font-semibold mb-2">{sistemaLenguaje === "Es" ? "Proyectos Completados" : "Completed Projects"}</h3>
            <p className="text-sm">{sistemaLenguaje === "Es" ? "Con diferentes campañas y compañeros" : "With different campaigns and colleagues"}</p>
          </div>

          <div className="uno backdrop-blur-sm rounded-2xl p-6 text-center shadow-sm">
            <div
              className={`w-12 h-12 ${colorClasses.accent} rounded-full flex items-center justify-center mx-auto mb-4`}
            >
              <span className="text-white font-bold text-xl">5★</span>
            </div>
            <h3 className="font-semibold mb-2">{sistemaLenguaje === "Es" ? "Calificación Promedio" : "Average Rating"}</h3>
            <p className="text-sm">{sistemaLenguaje === "Es" ? "En todas las colaboraciones" : "In all collaborations"}</p>
          </div>

          <div className="uno backdrop-blur-sm rounded-2xl p-6 text-center shadow-sm">
            <div
              className={`w-12 h-12 ${colorClasses.accent} rounded-full flex items-center justify-center mx-auto mb-4`}
            >
              <span className="text-white font-bold text-xl">3+</span>
            </div>
            <h3 className="font-semibold mb-2">{sistemaLenguaje === "Es" ? "Años de Experiencia" : "Years of Experience"}</h3>
            <p className="text-sm">{sistemaLenguaje === "Es" ? "Desarrollando soluciones web" : "Developing web solutions"}</p>
          </div>
        </div>
      </div>
    </div>
  )
}