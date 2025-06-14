import { useState } from "react";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function Completo() {
    const [hoveredProject, setHoveredProject] = useState(null);

    // Datos de ejemplo de todos los proyectos
    const projects = [
        {
        id: "web-ecommerce",
        title: "E-commerce Platform",
        description:
            "Plataforma de comercio electrónico completa con carrito de compras, sistema de pagos integrado y panel administrativo. Desarrollada con React y Node.js.",
        deviceType: "laptop",
        image: "/placeholder.svg?height=400&width=600&text=E-commerce",
        link: "/projects/web",
        category: "Web Development",
        technologies: ["React", "Node.js", "MongoDB"],
        },
        {
        id: "mobile-fitness",
        title: "Fitness Tracker App",
        description:
            "Aplicación móvil para seguimiento de ejercicios y rutinas de entrenamiento. Incluye métricas de progreso y sincronización con dispositivos wearables.",
        deviceType: "mobile",
        image: "/placeholder.svg?height=600&width=300&text=Fitness-App",
        link: "/projects/mobile",
        category: "Mobile App",
        technologies: ["React Native", "Firebase", "Redux"],
        },
        {
        id: "web-dashboard",
        title: "Analytics Dashboard",
        description:
            "Dashboard interactivo para análisis de datos empresariales con visualizaciones en tiempo real y reportes personalizables.",
        deviceType: "tablet",
        image: "/placeholder.svg?height=500&width=700&text=Dashboard",
        link: "/projects/backend",
        category: "Web Application",
        technologies: ["Vue.js", "D3.js", "Express"],
        },
        {
        id: "web-portfolio",
        title: "Creative Portfolio",
        description:
            "Portafolio creativo para artistas y diseñadores con galería interactiva, animaciones suaves y diseño responsive.",
        deviceType: "laptop",
        image: "/placeholder.svg?height=400&width=600&text=Portfolio",
        link: "/projects/web",
        category: "Web Design",
        technologies: ["Next.js", "Framer Motion", "Tailwind"],
        },
        {
        id: "mobile-social",
        title: "Social Network App",
        description:
            "Red social móvil con funciones de chat en tiempo real, compartir contenido multimedia y sistema de notificaciones push.",
        deviceType: "mobile",
        image: "/placeholder.svg?height=600&width=300&text=Social-App",
        link: "/projects/mobile",
        category: "Mobile App",
        technologies: ["Flutter", "Firebase", "WebRTC"],
        },
    ];

    const DeviceFrame = ({ deviceType, image, title, isHovered }) => {
        const baseClasses = "transition-all duration-500 transform";
        const hoverClasses = isHovered ? "scale-105" : "scale-100";

        if (deviceType === "laptop") {
        return (
            <div className={`${baseClasses} ${hoverClasses}`}>
            <div className="relative">
                {/* Laptop frame */}
                <div className="bg-gray-800 rounded-t-lg p-2 shadow-2xl">
                <div className="bg-black rounded-lg overflow-hidden aspect-video">
                    <img
                    src={image || "/placeholder.svg"}
                    alt={title}
                    className="w-full h-full object-cover"
                    />
                </div>
                </div>
                {/* Laptop base */}
                <div className="bg-gray-300 h-4 rounded-b-xl shadow-lg transform perspective-1000 rotateX-5"></div>
                <div className="bg-gray-400 h-2 rounded-full mx-auto w-32 transform translate-y-1"></div>
            </div>
            </div>
        );
        }

        if (deviceType === "tablet") {
        return (
            <div className={`${baseClasses} ${hoverClasses}`}>
            <div className="bg-gray-800 rounded-xl p-3 shadow-2xl max-w-sm mx-auto">
                <div className="bg-black rounded-lg overflow-hidden aspect-[4/3]">
                <img
                    src={image || "/placeholder.svg"}
                    alt={title}
                    className="w-full h-full object-cover"
                />
                </div>
            </div>
            </div>
        );
        }

        if (deviceType === "mobile") {
        return (
            <div className={`${baseClasses} ${hoverClasses}`}>
            <div className="bg-gray-800 rounded-3xl p-2 shadow-2xl max-w-[200px] mx-auto">
                <div className="bg-black rounded-2xl overflow-hidden aspect-[9/16] relative">
                {/* Notch */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-gray-800 rounded-full w-16 h-4 z-10"></div>
                <img
                    src={image || "/placeholder.svg"}
                    alt={title}
                    className="w-full h-full object-cover"
                />
                </div>
            </div>
            </div>
        );
        }
    };

    return (
        <div className="min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
            {/* Header */}
            <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light mb-4">
                Todos los <span className="font-medium">Proyectos</span>
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Explora mi colección completa de proyectos web, aplicaciones móviles
                y soluciones digitales.
            </p>
            </div>

            {/* Projects Grid */}
            <div className="space-y-20">
            {projects.map((project, index) => (
                <div
                key={project.id}
                className={`flex flex-col ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-12 lg:gap-16`}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                >
                {/* Device Section */}
                <div className="w-full lg:w-1/2 flex justify-center">
                    <DeviceFrame
                    deviceType={project.deviceType}
                    image={project.image}
                    title={project.title}
                    isHovered={hoveredProject === project.id}
                    />
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2 space-y-6">
                    <div>
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-4">
                        {project.category}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {project.title}
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        {project.description}
                    </p>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                        <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-full font-medium"
                        >
                        {tech}
                        </span>
                    ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 pt-4">
                    <Link
                        href={project.link}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        <span>Ver Proyecto</span>
                        <FaExternalLinkAlt className="text-sm" />
                    </Link>
                    <button className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors">
                        <FaGithub />
                        <span>Código</span>
                    </button>
                    </div>
                </div>
                </div>
            ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-20 p-8 bg-white rounded-xl shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                ¿Tienes un proyecto en mente?
            </h3>
            <p className="text-gray-600 mb-6">
                Me encantaría ayudarte a convertir tu idea en realidad. Hablemos
                sobre tu próximo proyecto.
            </p>
            <button className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors">
                Contactar
            </button>
            </div>
        </div>
        </div>
    );
}
