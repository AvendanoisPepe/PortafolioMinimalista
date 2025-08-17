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
  dates: {
    Es: "Noviembre 2022 - Enero 2024",
    En: "November 2022 - January 2024"
  },
  description:{
    Es: "Variacion en procesos como (Checklist, Generadores de notas, Macros, Tipificadores, Galerías), con un buscador general y un menú diseñado por secciones principales como (Personas, Empresas, Fidelización, etc.) y submenús para cada sección previamente mencionada, en los cuales se dividió la información de forma clara.",
    En: "Variation in processes such as (Checklists, Note Generators, Macros, Typifiers, Galleries), with a general search engine and a menu designed by main sections such as (People, Companies, Loyalty, etc.) and submenus for each previously mentioned section, in which the information was divided clearly."
  },
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
  slideDescription:{
    Es: "Biblioteca de información con variación de documentos tantos pdfa, excel, power ponts, words, entre otros. Seccionado de forma ordenada con buscador general y global",
    En: "Information library with a variety of documents, including PDF, Excel, PowerPoint, Word, and more. Organized with a general and global search engine."
  },
  button: {
    text: {
      Es: "Version Anterior",
      En: "Previous Version"
    },
    url: "/colpatriaWebV2",
  },
  developments: [
    {
      id: "checklist",
      name: {
        Es: "Checklist",
        En: "Checklist"
      },
      icon: <FaCheckSquare />,
      description:{
        Es: "Compilacion de procesos y paso a paso para optimizar flujos de trabajo repetitivos. Para minimizar tareas manuales y aumentar la eficiencia. Incluyendo todo tipo de contenido, imagenes, Pdfs, Listas desplegables, Recopilacion de datos, entre otras cosas.",
        En: "Compilation of processes and step-by-step instructions to optimize repetitive workflows. To minimize manual tasks and increase efficiency. Including all types of content, images, PDFs, drop-down lists, data collection, among other things."
      },
      images: [images[3], images[4], images[5]],
    },
    {
      id: "macros",
      name: {
        Es: "Macros",
        En: "Macros"
      },
      icon: <FaCog />,
      description:{
        Es: "Buscador basado en un codigo macro, que cuenta con contenido diverso al encontrar coincidencia para informar en todo aspecto al usuario, al igual que mostrarle que conjunto de datos debe ingresar para completar el proceso.",
        En: "A macro-based search engine that provides diverse content when matching to inform the user about every aspect and shows them which data set they should enter to complete the process."
      },
      images: [images[2], images[6]],
    },
    {
      id: "notes",
      name: {
        Es: "Generador de Notas",
        En: "Note Generator"
      },
      icon: <FaStickyNote />,
      description:{
        Es: "Sistema avanzado para crear y gestionar notas con formato enriquecido, donde se verifica campo por campo con sus diferentes validaciones, recolectando datos para formar la nota deseada.",
        En: "An advanced system for creating and managing rich-format notes, where field-by-field verification is performed with various validations, collecting data to create the desired note."
      },
      images: [images[7], images[8], images[9]],
    },
    {
      id: "documentacion",
      name: {
        Es: "Consulta de documentacion",
        En: "Documentation Query"
      },
      icon: <BsFileEarmarkPdfFill />,
      description:{
        Es: "Sistema de consulta de documentación para todo tipo de formato PDF, WORD, EXCEL, POWER POINT, etc.",
        En: "Documentation query system for all types of formats: PDF, WORD, EXCEL, POWER POINT, etc."
      },
      images: [images[0]],
    },
    {
      id: "tipificacion",
      name: {
        Es: "Tipificador",
        En: "Typifier"
      },
      icon: <FaRobot />,
      description:{
        Es: "Sistema de decision donde el usuario debe seguir las ramificaciones dadas por el sistemas para hayar la respuesta correcta al caso de uso en este caso, de igual forma como es un ayudante se debe medir el tiempo de respuesta del mismo.",
        En: "Decision system where the user must follow the branches given by the system to find the correct answer to the use case in this case, in the same way as it is an assistant, its response time must be measured."
      },
      images: [images[10], images[11]],
    },
    {
        id: "default",
        name: {
        Es: "Resumen del Proyecto",
        En: "Project Summary"
      },
        icon: <FaExternalLinkAlt />,
        hidden: true,
        description:{
          Es: "Biblioteca de información con variación de documentos tantos pdfa, excel, power ponts, words, entre otros. Seccionado de forma ordenada con buscador general y global",
          En: "Information library with a variety of documents, including PDF, Excel, PowerPoint, Word, and more. Organized with a general and global search engine."
        },
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
