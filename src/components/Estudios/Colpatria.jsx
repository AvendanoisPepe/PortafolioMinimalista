import './Colpatria.scss'
import { useState } from "react";
import {
    FaChevronLeft,
    FaChevronRight,
    FaCalendarAlt,
    FaInfoCircle,
    FaCode,
    FaTimes,
} from "react-icons/fa";

const Colpatria = ({ projectData }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [activePopup, setActivePopup] = useState(null);
    const [popupImageIndex, setPopupImageIndex] = useState(0);
    const [isImageTransitioning, setIsImageTransitioning] = useState(false);

    const project = projectData || defaultProject;
    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex(
            (prev) => (prev - 1 + project.images.length) % project.images.length
        );
    };

    const openPopup = (id) => {
        setActivePopup(id);
        setPopupImageIndex(0); // Reset a la primera imagen cuando se abre el popup
        setIsImageTransitioning(false);
        // Bloquear el scroll del body cuando el popup está abierto
        document.body.style.overflow = "hidden";
    };

    const closePopup = () => {
        setActivePopup(null);
        // Restaurar el scroll del body cuando el popup se cierra
        document.body.style.overflow = "auto";
    };
    // Función para cambiar la imagen del popup con transición
    const changePopupImage = (index) => {
        if (index === popupImageIndex) return
            setIsImageTransitioning(true)
            setTimeout(() => {
            setPopupImageIndex(index)
            setIsImageTransitioning(false)
        }, 300)
    }
    // Encontrar el desarrollo activo
    const activeDevelopment = project.developments.find((dev) => dev.id === activePopup)

    return (
        <div className="estudio min-h-screen py-6">
            <div className="mx-auto px-10 mb-20">
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
                                src={project.images[currentImageIndex]}
                                alt={`${project.title} - Imagen ${currentImageIndex + 1}`}
                                className="w-full h-full object-cover"
                            />

                            {/* Overlay con gradiente */}
                            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/100"></div>

                            {/* Información superpuesta */}
                            <div className="absolute inset-0 flex flex-col justify-between p-6 mb-8 ">
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

                                    <button className="p-3 transition-colors 2xl:text-4xl lg:text-3xl rounded-lg">
                                        {project.actionIcon}
                                    </button>
                                </div>

                                {/* Descripción en la parte inferior */}
                                <div className="abajo rounded-lg p-4 2xl:w-3/4 lg:w-3/4">
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
                        <div className="adicional 2xl:mt-6 lg:mt-4 flex justify-between items-center border-b-6 pb-6">
                            <span className="2xl:text-xl lg:text-lg">
                                {currentImageIndex + 1} de {project.images.length}
                            </span>
                            <div className="flex gap-2">
                                <button className="flex items-center gap-2 px-4 py-2 rounded-lg transition-colors">
                                    <FaTimes className='2xl:text-3xl mr-1'/>
                                    <span className="2xl:text-xl">Version Actual</span>
                                </button>
                            </div>
                        </div>
                        {/* Nueva sección de Desarrollos */}
                        <div className="desarrollos mt-6">
                            <h3 className="2xl:text-3xl lg:text-2xl font-semibold mb-6">Desarrollos</h3>
                            <div className="card w-auto flex justify-center items-center flex-wrap gap-4">
                                {project.developments.map((dev) => (
                                <button
                                    key={dev.id}
                                    onClick={() => openPopup(dev.id)}
                                    className="min-w-[32%] flex flex-col items-center justify-center p-4 rounded-lg border-4 transition-all duration-300"
                                >
                                    <div className="2xl:text-4xl 2xl:p-5 lg:text-4xl lg:p-4 rounded-full flex items-center justify-center">
                                        {dev.icon}
                                    </div>
                                    <span className="2xl:text-2xl font-medium text-center mt-3">{dev.name}</span>
                                </button>
                                ))} 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Popup mejorado con galería de imágenes */}
            {activeDevelopment && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
                    style={{
                    opacity: activePopup ? 1 : 0,
                    visibility: activePopup ? "visible" : "hidden",
                    }}
                >
                    <div className="poput flex justify-center align-center flex-wrap rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden transform transition-transform duration-300"
                        style={{
                            transform: activePopup ? "scale(1)" : "scale(0.9)",
                        }}
                    >
                    {/* Header del popup */}
                    <div className="header flex justify-between items-center p-4 border-b w-[94%]">
                        <div className="union flex items-center gap-3">
                            <div className="p-2 rounded-lg 2xl:text-4xl lg:text-3xl">{activeDevelopment.icon}</div>
                            <h3 className="font-semibold 2xl:text-3xl lg:text-3xl">{activeDevelopment.name}</h3>
                        </div>
                        <button onClick={closePopup} className="p-2 rounded-full transition-colors">
                            <FaTimes className="2xl:text-4xl lg:text-3xl" />
                        </button>
                    </div>

                    {/* Contenido del popup */}
                    <div className="contenido p-5 overflow-y-auto max-h-[calc(90vh-130px)]">
                        {/* Descripción */}
                        <p className="2xl:text-base lg:text-lg mb-6 leading-relaxed rounded-lg p-4">{activeDevelopment.description}</p>

                        {/* Imagen principal */}
                        <div className="principal relative w-full pt-6 pb-6 rounded-lg overflow-hidden mb-4">
                            <img
                                src={activeDevelopment.images[popupImageIndex] || "/placeholder.svg"}
                                alt={`${activeDevelopment.name} - Imagen ${popupImageIndex + 1}`}
                                className={`w-full h-full object-contain transition-opacity duration-300 ${
                                isImageTransitioning ? "opacity-0" : "opacity-100"
                                }`}
                            />
                        </div>

                        {/* Carrusel de miniaturas */}
                        <div className="carrusel flex justify-center align-center gap-4 overflow-x-auto p-4 snap-x rounded-lg">
                            {activeDevelopment.images.map((img, index) => (
                                <button key={index} onClick={() => changePopupImage(index)}
                                    className={`flex-shrink-0 w-30 h-30 rounded-md overflow-hidden snap-start transition-all duration-200 ${
                                    popupImageIndex === index
                                    ? "ring-3 ring-blue-500 ring-offset-2"
                                    : "opacity-70 hover:opacity-100"
                                }`}>
                                <img
                                    src={img || "/placeholder.svg"}
                                    alt={`Miniatura ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                                </button>
                            ))}
                        </div>

                        {/* Contador de imágenes */}
                        <div className="mt-3 2xl:text-base text-gray-500 text-right">
                            {popupImageIndex + 1} de {activeDevelopment.images.length}
                        </div>
                    </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Colpatria;
