import {
    FaExternalLinkAlt,
    FaCheckSquare,
    FaRobot,
    FaStickyNote,
    FaCog,
} from "react-icons/fa";
import { BsFileEarmarkPdfFill } from "react-icons/bs";

import col1 from "../../../assets/imagenes/trabajos/Colpatria/V2/col1.png";
import col2 from "../../../assets/imagenes/trabajos/Colpatria/V2/col2.png";
import col3 from "../../../assets/imagenes/trabajos/Colpatria/V2/col6.png";
import col4 from "../../../assets/imagenes/trabajos/Colpatria/V2/col7.png";
import col5 from "../../../assets/imagenes/trabajos/Colpatria/V2/col8.png";
import col6 from "../../../assets/imagenes/trabajos/Colpatria/V2/col9.png";
import col7 from "../../../assets/imagenes/trabajos/Colpatria/V2/col10.png";
import col8 from "../../../assets/imagenes/trabajos/Colpatria/V2/col11.png";
import col9 from "../../../assets/imagenes/trabajos/Colpatria/V2/col12.png";
import col10 from "../../../assets/imagenes/trabajos/Colpatria/V2/col13.png";
import col11 from "../../../assets/imagenes/trabajos/Colpatria/V2/col14.png";
import col12 from "../../../assets/imagenes/trabajos/Colpatria/V2/col15.png";
import col13 from "../../../assets/imagenes/trabajos/Colpatria/V2/col16.png";
import col14 from "../../../assets/imagenes/trabajos/Colpatria/V2/col17.png";
import col15 from "../../../assets/imagenes/trabajos/Colpatria/V2/col3.png";
import col16 from "../../../assets/imagenes/trabajos/Colpatria/V2/col4.png";
import col17 from "../../../assets/imagenes/trabajos/Colpatria/V2/col5.png";
import col18 from "../../../assets/imagenes/trabajos/Colpatria/V2/col18.png";

const images = [col1, col2, col3, col4, col5, col6, col7, col8, col9, col10, col11, col12, col13, col14, col15, col16, col17, col18];

const ColpatriaV1 = {
    title: "Web Training Colpatria Sac",
    dates: "Enero 2024 - Actualidad",
    description:
        "Variacion en procesos como (Checklist, Generadores de notas, Macros, Tipificadores, Galerías), con un buscador general y un menú diseñado por secciones principales como (Personas, Empresas, Fidelización, etc.) y submenús para cada sección previamente mencionada, en los cuales se dividió la información de forma clara.",
    technologies: [
        { name: "React", icon: "⚛️" },
        { name: "Node.js", icon: "🟢" },
        { name: "LocalBase", icon: "🍃" },
        { name: "Sass", icon: "🎨" },
        { name: "WebPack", icon: "🚀" },
    ],
    images: [images[0], images[1], images[2], images[3], images[4]],
    projectIcon: "🛒",
    actionIcon: <FaExternalLinkAlt />,
    slideDescription:
        "Biblioteca de información con varacion de documentos tantos pdfs, excel, power ponts, words, entre otros. Seccionado de forma ordenada con buscador general y global",
        button: {
            text: "Version Anterior",
            url: "/colpatriaWeb"
        },
    developments: [
        {
            id: "checklist",
            name: "Checklist",
            icon: <FaCheckSquare />,
            description:
                "Compilacion de procesos y paso a paso para optimizar flujos de trabajo repetitivos. Para minimizar tareas manuales y aumentar la eficiencia. Incluyendo todo tipo de contenido, imagenes, Pdfs, Listas desplegables, Recopilacion de datos, entre otras cosas.",
            images: [images[3], images[5], images[6], images[7], images[8]],
        },
        {
            id: "macros",
            name: "Macros",
            icon: <FaCog />,
            description:
                "Buscador basado en un codigo macro, que cuenta con contenido diverso al encontrar coincidencia para informar en todo aspecto al usuario, al igual que mostrarle que conjunto de datos debe ingresar para completar el proceso.",
            images: [images[2], images[9], images[10]],
        },
        {
            id: "notes",
            name: "Generador de Notas",
            icon: <FaStickyNote />,
            description:
                "Sistema avanzado para crear y gestionar notas con formato enriquecido, donde se verifica campo por campo con sus diferentes validaciones, recolectando datos para formar la nota deseada. (El sistema esta enlazado con las macros)",
                images: [images[10], images[11], images[12], images[13]],
        },
        {
        id: "documentacion",
        name: "Consulta de documentacion",
        icon: <BsFileEarmarkPdfFill />,
        description:
            "Sistema de consulta de documentación para todo tipo de formato PDF, WORD, EXCEL, POWER POINT, etc.",
        images: [images[1], images[14], images[15], images[16]],
        },
        {
        id: "tipificacion",
        name: "Tipificador",
        icon: <FaRobot />,
        description:
            "Sistema de decision donde el usuario debe seguir las ramificaciones dadas por el sistemas para hayar la respuesta correcta al caso de uso en este caso, de igual forma como es un ayudante se debe medir el tiempo de respuesta del mismo.",
        images: [
            images[4], images[17]
        ],
        },
    ],
};
export default ColpatriaV1;
