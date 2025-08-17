import "./Complejo.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import img1 from "../../assets/imagenes/trabajos/Bsc/bsc2.png";
import img2 from "../../assets/imagenes/trabajos/Colpatria/V2/col13.png";
import img3 from "../../assets/imagenes/trabajos/ClaroTmk/cla10.png";
import img4 from "../../assets/imagenes/trabajos/Colombia/tel11.png";
import img5 from "../../assets/imagenes/trabajos/JetSmart/jet10.png";
import PopupContacto from "../../pages/Contacto/PopupContacto";
import { useGlobal } from "../../context/GlobalContext";

export default function Completo() {
    const { sistemaLenguaje } = useGlobal();
    const [hoveredProject, setHoveredProject] = useState(null);
    const [isContactoOpen, setIsContactoOpen] = useState(false);
    // Datos de ejemplo de todos los proyectos
    const projectsEs = [
      {
        id: "web-ecommerce",
        title: "Web Training Colpatria Sac",
        description:
          "Biblioteca de información con varacion de documentos tantos pdfs, excel, power ponts, words, entre otros. Seccionado de forma ordenada con buscador general y global",
        deviceType: "laptop",
        image: img2,
        link: "/colpatriaWebV2",
        category: "Web Development",
        technologies: ["React", "Node.js", "WebPack", "LocalBase"],
      },
      {
        id: "web-dashboard",
        title: "Web Training Bsc Inbound",
        description:
          "Este proyecto representa un desafío importante al apostar por herramientas modernas como React, shadcn UI y Tailwind CSS.  Bsc Inbound no solo moderniza los procesos, sino que también refleja el compromiso por mejorar la interacción y accesibilidad para los usuarios.",
        deviceType: "tablet",
        image: img1,
        link: "/bsc",
        category: "Web Application",
        technologies: [
          "React",
          "Tailwind",
          "Ui shadcn",
          "Node.js",
          "LocalBase",
        ],
      },
      {
        id: "web-portfolio",
        title: "Web Training Televentas Colombia",
        description:
          "Primer proyecto de gráficas comparativas, optimizado con varias actualizaciones e integrando herramientas clave como scripts de ventas, noticias y seguimiento de indicadores",
        deviceType: "laptop",
        image: img4,
        link: "/televentasCol",
        category: "Web Design",
        technologies: ["React", "Node.js", "LocalBase", "Chart.js", "WebPack"],
      },
      {
        id: "mobile-social",
        title: "Web Training JetSmart",
        description:
          "Sistema de visualización de escenarios con herramientas clave para guiar a nuevos usuarios en la resolución de sus necesidades.",
        deviceType: "tablet",
        image: img5,
        link: "/jetsmart",
        category: "Web Design",
        technologies: [
          "React",
          "Node.js",
          "LocalBase",
          "WebPack",
          "JavaScript",
        ],
      },
      {
        id: "mobile-fitness",
        title: "Web Training Claro Tmk",
        description:
          "Se optimizó el sistema de gráficos para comparar distintas características entre dos celulares, logrando una visualización más clara e intuitiva que facilita la toma de decisiones.",
        deviceType: "mobile",
        image: img3,
        link: "/claroTmk",
        category: "Mobile App",
        technologies: [
          "React Native",
          "Node.js",
          "LocalBase",
          "Chart.js",
          "WebPack",
        ],
      },
    ];
    const projectsEn = [
      {
        id: "web-ecommerce",
        title: "Web Training Colpatria Sac",
        description:
          "Information library with a variety of documents such as PDFs, Excel files, PowerPoints, Word documents, among others. Organized in sections with a global search engine.",
        deviceType: "laptop",
        image: img2,
        link: "/colpatriaWebV2",
        category: "Web Development",
        technologies: ["React", "Node.js", "WebPack", "LocalBase"],
      },
      {
        id: "web-dashboard",
        title: "Web Training Bsc Inbound",
        description:
          "This project represents an important challenge by leveraging modern tools such as React, shadcn UI, and Tailwind CSS. Bsc Inbound not only modernizes processes but also reflects the commitment to improve interaction and accessibility for users.",
        deviceType: "tablet",
        image: img1,
        link: "/bsc",
        category: "Web Application",
        technologies: ["React", "Tailwind", "Ui shadcn", "Node.js", "LocalBase"],
      },
      {
        id: "web-portfolio",
        title: "Web Training Televentas Colombia",
        description:
          "First project with comparative charts, optimized with several updates and integrating key tools such as sales scripts, news, and indicator tracking.",
        deviceType: "laptop",
        image: img4,
        link: "/televentasCol",
        category: "Web Design",
        technologies: ["React", "Node.js", "LocalBase", "Chart.js", "WebPack"],
      },
      {
        id: "mobile-social",
        title: "Web Training JetSmart",
        description:
          "Scenario visualization system with key tools to guide new users in solving their needs.",
        deviceType: "tablet",
        image: img5,
        link: "/jetsmart",
        category: "Web Design",
        technologies: ["React", "Node.js", "LocalBase", "WebPack", "JavaScript"],
      },
      {
        id: "mobile-fitness",
        title: "Web Training Claro Tmk",
        description:
          "The chart system was optimized to compare different features between two phones, achieving a clearer and more intuitive visualization that facilitates decision-making.",
        deviceType: "mobile",
        image: img3,
        link: "/claroTmk",
        category: "Mobile App",
        technologies: [
          "React Native",
          "Node.js",
          "LocalBase",
          "Chart.js",
          "WebPack",
        ],
      },
    ];
    const projects = sistemaLenguaje === "Es" ? projectsEs : projectsEn
    const DeviceFrame = ({ deviceType, image, title, isHovered }) => {
        const baseClasses = "transition-all duration-500 transform";
        

        if (deviceType === "laptop") {
            return (
            <div>
                <div className="relative">
                {/* Laptop frame */}
                <div className="bg-gray-800 rounded-t-lg p-2 shadow-2xl">
                    <div className="bg-black rounded-lg overflow-hidden aspect-video">
                    <img
                        src={image || "/placeholder.svg"}
                        alt={title}
                        className="w-full h-full object-contain bg-gray-600"
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
            <div>
            <div className="bg-gray-800 rounded-xl p-3 shadow-2xl max-w-lg mx-auto">
                <div className="bg-black rounded-lg overflow-hidden aspect-[4/2]">
                <img
                    src={image || "/placeholder.svg"}
                    alt={title}
                    className="w-full h-full object-contain bg-gray-700"
                />
                </div>
            </div>
            </div>
        );
        }

        if (deviceType === "mobile") {
        return (
          <div>
            <div className="bg-gray-800 rounded-3xl p-2 shadow-2xl max-w-[300px] mx-auto">
              <div className="bg-black rounded-2xl overflow-hidden aspect-[2/3] relative">
                {/* Notch */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-gray-800 rounded-full w-16 h-4 z-10"></div>
                <img
                  src={image || "/placeholder.svg"}
                  alt={title}
                  className="w-full h-full object-contain rounded-2xl bg-gray-700"
                />
              </div>
            </div>
          </div>
        );
        }
    };

    return (
        <div className="completo min-h-screen p-10">
            <div className="max-w-7xl mx-auto ">
                {/* Header */}
                <div className="header text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-light mb-4">
                        {sistemaLenguaje === "Es" ? <>Todos los <span className="font-bold">Proyectos</span></> : <>All <span className="font-bold">Projects</span></>}
                    </h1>
                    <p className="text-lg max-w-2xl mx-auto">
                        {sistemaLenguaje === "Es" ? "Explora mi colección completa de proyectos web, aplicaciones móviles y soluciones digitales." : "Explore my complete collection of web projects, mobile apps, and digital solutions"}                        
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="proyect space-y-20">
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
                            <div className="w-full lg:w-[80%] flex justify-center">
                                <DeviceFrame
                                deviceType={project.deviceType}
                                image={project.image}
                                title={project.title}
                                isHovered={hoveredProject === project.id}
                                />
                            </div>

                            {/* Content Section */}
                            <div className="contenido w-full lg:w-1/2 space-y-6">
                                <div className="primero">
                                    <span className="inline-block px-3 py-1 text-sm font-medium rounded-full mb-4">
                                        {project.category}
                                    </span>
                                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                        {project.title}
                                    </h2>
                                    <p className="text-lg leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Technologies */}
                                <div className="segundo flex flex-wrap gap-2">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-3 py-1 text-sm rounded-full font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="tercero flex gap-4 pt-4">
                                    <Link
                                        to={project.link}
                                        className="enlace inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-lg transition-colors"
                                    >
                                        <span>{sistemaLenguaje === "Es" ? "Ver Proyecto" : "See Project"}</span>
                                        <FaExternalLinkAlt className="text-sm" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="footer text-center mt-20 p-8 rounded-xl shadow-sm">
                    <h3 className="text-3xl font-semibold mb-4">                        
                        {sistemaLenguaje === "Es" ? "¿Tienes un proyecto en mente?" : "Do you have a project in mind?"}
                    </h3>
                    <p className="mb-6">                        
                        {sistemaLenguaje === "Es" ? "Me encantaría ayudarte a convertir tu idea en realidad. Hablemos sobre tu próximo proyecto." : "I'd love to help you turn your idea into reality. Let's talk about your next project."}
                    </p>
                    <button onClick={() => setIsContactoOpen(true)} className="inline-flex items-center gap-2 px-8 py-3 font-semibold rounded-lg transition-colors">                        
                        {sistemaLenguaje === "Es" ? "Contactar" : "Contact"}
                    </button>
                </div>
            </div>
            <PopupContacto
              isOpen={isContactoOpen}
              onClose={() => setIsContactoOpen(false)}
            />
        </div>
    );
}
