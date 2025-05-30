import './Colpatria.scss'
import { useState } from "react";
import {
    FaChevronLeft,
    FaChevronRight,
    FaExternalLinkAlt,
    FaGithub,
    FaCalendarAlt,
    FaInfoCircle,
    FaCode,
} from "react-icons/fa";
import img from '../../assets/imagenes/trabajos/col1.png'
const Colpatria = ({ projectData }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Datos por defecto si no se pasan props
    const defaultProject = {
        title: "E-commerce Platform",
        dates: "Enero 2024 - Marzo 2024",
        description:
            "Plataforma de comercio electrónico desarrollada con tecnologías modernas para ofrecer una experiencia de usuario excepcional.",
        technologies: [
            { name: "React", icon: "⚛️" },
            { name: "Node.js", icon: "🟢" },
            { name: "MongoDB", icon: "🍃" },
            { name: "Tailwind", icon: "🎨" },
            { name: "Express", icon: "🚀" },
        ],
        images: [
            "/col1.png",
            "/col2.png",
            "/col3.png",
        ],
        projectIcon: "🛒",
        actionIcon: <FaExternalLinkAlt />,
        slideDescription:
            "Interfaz moderna y responsive con carrito de compras, sistema de pagos y panel administrativo completo.",
        };

    const project = projectData || defaultProject;

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex(
            (prev) => (prev - 1 + project.images.length) % project.images.length
        );
    };
    return (
        <div className="estudio min-h-screen py-6">
            <div className="mx-auto px-10">
                <div className="flex flex-col justify-around md:flex-row gap-6">
                    {/* Primera sección - Información del proyecto (26% aprox) */}
                    <div className="primero w-full md:w-[26%] space-y-6 border-l-2 rounded-lg">
                        {/* Fechas */}
                        <div className="fecha rounded-lg p-5 shadow-sm border-4 border-l-8">
                            <div className="arriba flex items-center gap-3 mb-3">
                                <div className="p-2 rounded-lg">
                                    <FaCalendarAlt className="2xl:text-2xl lg:text-lg" />
                                </div>
                                <h3 className="2xl:text-xl lg:text-lg font-semibold">
                                    Fechas del Proyecto
                                </h3>
                            </div>
                            <p className="pUno font-medium 2xl:text-lg lg:text-base">{project.dates}</p>
                        </div>

                        {/* Descripción */}
                        <div className="fecha rounded-lg p-5 shadow-sm border-4 border-l-8">
                            <div className="arriba flex items-center gap-3 mb-3">
                                <div className="p-2 rounded-lg">
                                    <FaInfoCircle className="2xl:text-2xl lg:text-lg" />
                                </div>
                                <h3 className="2xl:text-xl lg:text-lg font-semibold">
                                    Descripción
                                </h3>
                            </div>
                            <p className="pUno leading-relaxed 2xl:text-base lg:text-base">
                                {project.description}
                            </p>
                        </div>

                        {/* Tecnologías utilizadas */}
                        <div className="fecha rounded-lg p-5 shadow-sm border-4 border-l-8">
                            <div className="arriba flex items-center gap-3 mb-3">
                                <div className="p-2 rounded-lg">
                                    <FaCode className="2xl:text-2xl lg:text-lg" />
                                </div>
                                <h3 className="2xl:text-xl lg:text-lg font-semibold">
                                    Tecnologías
                                </h3>
                            </div>
                            <div className="lista flex flex-col gap-2">
                                {project.technologies.map((tech, index) => (
                                    <div key={index} className="flex items-center gap-2 p-2 rounded-lg transition-colors">
                                        <span className="2xl:text-2xl lg:text-lg">{tech.icon}</span>
                                        <span className="nombre 2xl:text-base lg:text-lg font-medium">
                                            {tech.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Segunda sección - Slider de imágenes (70% aprox) */}
                    <div className="w-full md:w-[70%]">
                        <div className="segundo relative 2xl:h-[520px] lg:h-[400px] rounded-xl overflow-hidden shadow-lg">
                            {/* Imagen de fondo */}
                            <img
                                src={`../../assets/imagenes/trabajos${project.images[currentImageIndex]}`}
                                alt={`${project.title} - Imagen ${currentImageIndex + 1}`}
                                className="w-full h-full object-cover"
                            />

                            {/* Overlay con gradiente */}
                            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/10 to-black/60"></div>

                            {/* Información superpuesta */}
                            <div className="absolute inset-0 flex flex-col justify-between p-6 mb-4">
                                {/* Header con iconos */}
                                <div className="arriba flex justify-between items-start">
                                    <div className="flex items-center gap-3">
                                        <div className="icon w-auto h-auto p-3 backdrop-blur-sm rounded-lg flex items-center justify-center 2xl:text-4xl">
                                            {project.projectIcon}
                                        </div>
                                        <h2 className="font-bold 2xl:text-3xl">
                                            {project.title}
                                        </h2>
                                    </div>

                                    <button className="p-3 transition-colors 2xl:text-4xl lg:text-3xl">
                                        {project.actionIcon}
                                    </button>
                                </div>

                                {/* Descripción en la parte inferior */}
                                <div className="abajo rounded-lg p-4 2xl:w-3/5 lg:w-3/4">
                                    <p className="2xl:text-xl leading-relaxed">
                                        {project.slideDescription}
                                    </p>
                                </div>
                            </div>

                            {/* Controles del slider */}
                            <button
                                onClick={prevImage}
                                className="control absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full transition-colors"
                                >
                                <FaChevronLeft className="2xl:text-2xl" />
                            </button>

                            <button
                                onClick={nextImage}
                                className="control absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full transition-colors"
                                >
                                <FaChevronRight className="2xl:text-2xl" />
                            </button>

                            {/* Indicadores */}
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                                {project.images.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentImageIndex(index)}
                                        className={`w-2 h-2 rounded-full transition-colors ${
                                            index === currentImageIndex ? "bg-white" : "bg-white/50"
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Información adicional debajo del slider */}
                        <div className="adicional 2xl:mt-6 lg:mt-4 flex justify-between items-center">
                            <span className="2xl:text-xl lg:text-lg">
                                {currentImageIndex + 1} de {project.images.length}
                            </span>
                            <div className="flex gap-2">
                                <button className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors">
                                    <FaGithub className='2xl:text-3xl mr-1'/>
                                    <span className="2xl:text-xl">Ver código</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Colpatria;
