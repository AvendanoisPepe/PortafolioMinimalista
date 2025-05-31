import {
    FaExternalLinkAlt,
    FaCheckSquare,
    FaRobot,
    FaStickyNote,
    FaCog,
} from "react-icons/fa";
import { BsFileEarmarkPdfFill } from "react-icons/bs";

import col1 from "../../../assets/imagenes/trabajos/col1.png";
import col2 from "../../../assets/imagenes/trabajos/col2.png";
import col3 from "../../../assets/imagenes/trabajos/Colpatria/macro1.png";
import col4 from "../../../assets/imagenes/trabajos/Colpatria/check1.png";
import col5 from "../../../assets/imagenes/trabajos/Colpatria/check2.png";
import col6 from "../../../assets/imagenes/trabajos/Colpatria/check3.png";
import col7 from "../../../assets/imagenes/trabajos/Colpatria/macro2.png";
import col8 from "../../../assets/imagenes/trabajos/Colpatria/notas1.png";
import col9 from "../../../assets/imagenes/trabajos/Colpatria/notas2.png";
import col10 from "../../../assets/imagenes/trabajos/Colpatria/notas3.png";
import col11 from "../../../assets/imagenes/trabajos/Colpatria/tipificador1.png";
import col12 from "../../../assets/imagenes/trabajos/Colpatria/tipificador2.png";

const images = [col1, col2, col3, col4, col5, col6, col7, col8, col9, col10, col11, col12];

const ColpatriaV1 = {
    title: "Web Training Colpatria Sac",
    dates: "Noviembre 2022 - Enero 2025",
    description:
        "Variacion en procesos como (Checklist, Generadores de notas, Macros, Tipificadores, Galerías), con un buscador general y un menú diseñado por secciones principales como (Personas, Empresas, Fidelización, etc.) y submenús para cada sección previamente mencionada, en los cuales se dividió la información de forma clara.",
    technologies: [
        { name: "HTML", icon: "📄" },
        { name: "JSON", icon: "🧾" },
        { name: "SASS", icon: "🎀" },
        { name: "jQuery", icon: "💠" },
        { name: "JavaScript", icon: "📜" },
        // { name: "React", icon: "⚛️" },
        // { name: "Node.js", icon: "🟢" },
        // { name: "MongoDB", icon: "🍃" },
        // { name: "Tailwind", icon: "🎨" },
        // { name: "Express", icon: "🚀" },
    ],
    images: [images[0], images[1], images[2]],
    projectIcon: "🛒",
    actionIcon: <FaExternalLinkAlt />,
    slideDescription:
        "Biblioteca de información con varacion de documentos tantos pdfs, excel, power ponts, words, entre otros. Seccionado de forma ordenada con buscador general y global",
    developments: [
        {
            id: "checklist",
            name: "Checklist",
            icon: <FaCheckSquare />,
            description:
                "Sistema de checklist interactivo que permite a los usuarios crear, organizar y completar tareas de manera eficiente. Incluye categorías, prioridades y fechas de vencimiento.",
            images: [images[3], images[4], images[5]],
            },
        {
            id: "macros",
            name: "Macros",
            icon: <FaCog />,
            description:
                "Herramienta de automatización que permite crear secuencias de acciones personalizadas para optimizar flujos de trabajo repetitivos. Incluye editor visual y programación de eventos.",
            images: [images[2], images[6]],
        },
        {
        id: "notes",
        name: "Generador de Notas",
        icon: <FaStickyNote />,
        description:
            "Sistema avanzado para crear y gestionar notas con formato enriquecido, etiquetas, búsqueda inteligente y sincronización entre dispositivos.",
            images: [images[7], images[8], images[9]],
        },
        {
        id: "documentacion",
        name: "Consulta de documentacion",
        icon: <BsFileEarmarkPdfFill />,
        description:
            "Panel de análisis de datos con visualizaciones interactivas, informes personalizables y métricas en tiempo real para tomar decisiones basadas en datos.",
        images: [images[0]],
        },
        {
        id: "tipificacion",
        name: "Tipificador",
        icon: <FaRobot />,
        description:
            "Sistema de automatización inteligente que utiliza reglas y condiciones para ejecutar acciones predefinidas, optimizando procesos y reduciendo tareas manuales.",
        images: [
            images[10], images[11]
        ],
        },
    ],
};
export default ColpatriaV1;
