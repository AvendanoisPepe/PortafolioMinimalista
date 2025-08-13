import { useState } from "react"
import { FaChevronLeft, FaChevronRight, FaQuoteLeft, FaStar, FaLinkedin, FaEnvelope } from "react-icons/fa"

export default function References() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "María González",
      position: "Project Manager",
      company: "TechSolutions Inc.",
      image: "/placeholder.svg?height=120&width=120&text=MG",
      quote: "Un desarrollador excepcional y confiable.",
      testimonial:
        "Trabajé con JS durante 8 meses en varios proyectos web. Su capacidad para resolver problemas complejos y entregar código limpio es impresionante. Siempre cumple con los plazos y su comunicación es excelente. Lo recomiendo sin dudarlo.",
      rating: 5,
      color: "blue",
      linkedin: "https://linkedin.com/in/maria-gonzalez",
      email: "maria.gonzalez@techsolutions.com",
    },
    {
      id: 2,
      name: "Carlos Rodríguez",
      position: "Lead Developer",
      company: "Digital Innovations",
      image: "/placeholder.svg?height=120&width=120&text=CR",
      quote: "Código de calidad y gran capacidad de aprendizaje.",
      testimonial:
        "JS se integró perfectamente a nuestro equipo. Su dominio de React y Node.js nos permitió acelerar el desarrollo significativamente. Es proactivo, creativo y siempre busca las mejores soluciones. Un gran profesional.",
      rating: 5,
      color: "green",
      linkedin: "https://linkedin.com/in/carlos-rodriguez",
      email: "carlos.rodriguez@digitalinnovations.com",
    },
    {
      id: 3,
      name: "Ana Martínez",
      position: "UX/UI Designer",
      company: "Creative Studio",
      image: "/placeholder.svg?height=120&width=120&text=AM",
      quote: "Colaboración perfecta entre diseño y desarrollo.",
      testimonial:
        "La colaboración con JS fue fantástica. Entiende perfectamente los diseños y los implementa con precisión pixel-perfect. Su atención al detalle y conocimiento de UX hacen que trabajar juntos sea muy fluido y productivo.",
      rating: 5,
      color: "purple",
      linkedin: "https://linkedin.com/in/ana-martinez",
      email: "ana.martinez@creativestudio.com",
    },
  ]

  const currentRef = testimonials[currentTestimonial]

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
    <div className={`min-h-screen bg-gradient-to-br ${colorClasses.bg} py-20 transition-all duration-700`}>
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full mb-6 shadow-sm">
            <FaQuoteLeft className={`${colorClasses.text} text-xl`} />
            <span className="text-gray-800 font-semibold">Referencias Profesionales</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-light mb-4">
            Lo que dicen mis <span className={`font-bold ${colorClasses.text}`}>Colegas</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Testimonios de profesionales con los que he tenido el placer de trabajar
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all duration-300 hover:scale-110"
          >
            <FaChevronLeft className="text-gray-600" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all duration-300 hover:scale-110"
          >
            <FaChevronRight className="text-gray-600" />
          </button>

          {/* Main Card */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 mx-8 transition-all duration-500">
            {/* Profile Image */}
            <div className="text-center mb-8">
              <div className="relative inline-block">
                <img
                  src={currentRef.image || "/placeholder.svg"}
                  alt={currentRef.name}
                  className="w-24 h-24 rounded-full mx-auto shadow-lg object-cover"
                />
                <div
                  className={`absolute -bottom-2 -right-2 w-8 h-8 ${colorClasses.accent} rounded-full flex items-center justify-center shadow-lg`}
                >
                  <FaStar className="text-white text-sm" />
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 leading-tight">"{currentRef.quote}"</h2>

              {/* Rating */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(currentRef.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-lg" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto mb-8">{currentRef.testimonial}</p>

              {/* Author Info */}
              <div className="text-center">
                <h3 className="font-semibold text-gray-800 text-lg">{currentRef.name}</h3>
                <p className={`${colorClasses.text} font-medium`}>{currentRef.position}</p>
                <p className="text-gray-500 text-sm">{currentRef.company}</p>
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
                href={`mailto:${currentRef.email}`}
                className="w-10 h-10 bg-gray-600 text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <FaEnvelope />
              </a>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <button
                className={`px-8 py-3 ${colorClasses.button} text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
              >
                Ver Más Referencias
              </button>
            </div>
          </div>
        </div>

        {/* Indicators */}
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

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-sm">
            <div
              className={`w-12 h-12 ${colorClasses.accent} rounded-full flex items-center justify-center mx-auto mb-4`}
            >
              <span className="text-white font-bold text-xl">8+</span>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Proyectos Completados</h3>
            <p className="text-gray-600 text-sm">Con diferentes equipos y empresas</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-sm">
            <div
              className={`w-12 h-12 ${colorClasses.accent} rounded-full flex items-center justify-center mx-auto mb-4`}
            >
              <span className="text-white font-bold text-xl">5★</span>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Calificación Promedio</h3>
            <p className="text-gray-600 text-sm">En todas las colaboraciones</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-sm">
            <div
              className={`w-12 h-12 ${colorClasses.accent} rounded-full flex items-center justify-center mx-auto mb-4`}
            >
              <span className="text-white font-bold text-xl">3+</span>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Años de Experiencia</h3>
            <p className="text-gray-600 text-sm">Desarrollando soluciones web</p>
          </div>
        </div>
      </div>
    </div>
  )
}