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
  dates: "Noviembre 2022 - Enero 2024",
  description:
    "Variacion en procesos como (Checklist, Generadores de notas, Macros, Tipificadores, Galerías), con un buscador general y un menú diseñado por secciones principales como (Personas, Empresas, Fidelización, etc.) y submenús para cada sección previamente mencionada, en los cuales se dividió la información de forma clara.",
  technologies: [
    { name: "HTML", icon: "📄" },
    { name: "JSON", icon: "🧾" },
    { name: "SASS", icon: "🎀" },
    { name: "jQuery", icon: "💠" },
    { name: "JavaScript", icon: "📜" },
  ],
  images: [images[0], images[1], images[2]],
  projectIcon: "🛒",
  actionIcon: <FaExternalLinkAlt />,
  slideDescription:
    "Biblioteca de información con varacion de documentos tantos pdfs, excel, power ponts, words, entre otros. Seccionado de forma ordenada con buscador general y global",
  button: {
    text: "Version Actual",
    url: "/colpatriaWebV2",
  },
  developments: [
    {
      id: "checklist",
      name: "Checklist",
      icon: <FaCheckSquare />,
      description:
        "Compilacion de procesos y paso a paso para optimizar flujos de trabajo repetitivos. Para minimizar tareas manuales y aumentar la eficiencia. Incluyendo todo tipo de contenido, imagenes, Pdfs, Listas desplegables, Recopilacion de datos, entre otras cosas.",
      images: [images[3], images[4], images[5]],
    },
    {
      id: "macros",
      name: "Macros",
      icon: <FaCog />,
      description:
        "Buscador basado en un codigo macro, que cuenta con contenido diverso al encontrar coincidencia para informar en todo aspecto al usuario, al igual que mostrarle que conjunto de datos debe ingresar para completar el proceso.",
      images: [images[2], images[6]],
    },
    {
      id: "notes",
      name: "Generador de Notas",
      icon: <FaStickyNote />,
      description:
        "Sistema avanzado para crear y gestionar notas con formato enriquecido, donde se verifica campo por campo con sus diferentes validaciones, recolectando datos para formar la nota deseada.",
      images: [images[7], images[8], images[9]],
    },
    {
      id: "documentacion",
      name: "Consulta de documentacion",
      icon: <BsFileEarmarkPdfFill />,
      description:
        "Sistema de consulta de documentación para todo tipo de formato PDF, WORD, EXCEL, POWER POINT, etc.",
      images: [images[0]],
    },
    {
      id: "tipificacion",
      name: "Tipificador",
      icon: <FaRobot />,
      description:
        "Sistema de decision donde el usuario debe seguir las ramificaciones dadas por el sistemas para hayar la respuesta correcta al caso de uso en este caso, de igual forma como es un ayudante se debe medir el tiempo de respuesta del mismo.",
      images: [images[10], images[11]],
    },
    {
        id: "default",
        name: "Resumen del Proyecto",
        icon: <FaExternalLinkAlt />,
        hidden: true,
        description:
            "Biblioteca de información con varacion de documentos tantos pdfs, excel, power ponts, words, entre otros. Seccionado de forma ordenada con buscador general y global",
        images: [
            images[1],
            images[0],
            images[2],
            images[5],
            images[6],
            images[11],
        ],
    },
  ],
};
export default ColpatriaV1;
