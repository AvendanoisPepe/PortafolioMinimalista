import {
    FaExternalLinkAlt,
} from "react-icons/fa";
import { VscGraph } from "react-icons/vsc";
import { TbApps } from "react-icons/tb";
import { FaList } from "react-icons/fa6";
import { IoLibrary } from "react-icons/io5";
import { FaGlobeAmericas } from "react-icons/fa";
import { RxLetterSpacing } from "react-icons/rx";


import jet1 from "../../../assets/imagenes/trabajos/JetSmart/jet1.png";
import jet2 from "../../../assets/imagenes/trabajos/JetSmart/jet2.png";
import jet3 from "../../../assets/imagenes/trabajos/JetSmart/jet3.png";
import jet4 from "../../../assets/imagenes/trabajos/JetSmart/jet4.png";
import jet5 from "../../../assets/imagenes/trabajos/JetSmart/jet5.png";
import jet6 from "../../../assets/imagenes/trabajos/JetSmart/jet6.png";
import jet7 from "../../../assets/imagenes/trabajos/JetSmart/jet7.png";
import jet8 from "../../../assets/imagenes/trabajos/JetSmart/jet8.png";
import jet9 from "../../../assets/imagenes/trabajos/JetSmart/jet16.png";
import jet10 from "../../../assets/imagenes/trabajos/JetSmart/jet17.png";
import jet11 from "../../../assets/imagenes/trabajos/JetSmart/jet9.png";
import jet12 from "../../../assets/imagenes/trabajos/JetSmart/jet10.png";
import jet13 from "../../../assets/imagenes/trabajos/JetSmart/jet11.png";
import jet14 from "../../../assets/imagenes/trabajos/JetSmart/jet14.png";
import jet15 from "../../../assets/imagenes/trabajos/JetSmart/jet15.png";
import jet16 from "../../../assets/imagenes/trabajos/JetSmart/jet12.png";
import jet17 from "../../../assets/imagenes/trabajos/JetSmart/jet13.png";
import jet18 from "../../../assets/imagenes/trabajos/JetSmart/jet18.png";

const images = [jet1, jet2, jet3, jet4, jet5, jet6, jet7, jet8, jet9, jet10, jet11, jet12, jet13, jet14, jet15, jet16, jet17, jet18];

const JetSmart = {
  title: "Web Training JetSmart",
  dates: {
    Es: "2024 Marzo - 2024 Mayo",
    En: "March 2024 - May 2024",
  },
  description: {
    Es: "Este sistema está diseñado para visualizar múltiples escenarios posibles ante una situación específica, integrando diversos scripts y procesos clave. Se desarrollaron herramientas como casos DINSIDE, aplicaciones, asistentes de comandos, glosarios y vocabularios, todos enfocados en ofrecer a nuevos usuarios una ruta clara y detallada para solucionar sus necesidades rápidamente.",
    En: "This system is designed to visualize multiple possible scenarios for a specific situation, integrating various key scripts and processes. Tools such as DINSIDE cases, applications, command assistants, glossaries, and vocabularies were developed, all focused on offering new users a clear and detailed path to quickly resolve their needs."
  },
  technologies: [
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "LocalBase", icon: "🍃" },
    { name: "JavaScript", icon: "🟨" },
    { name: "WebPack", icon: "🚀" },
  ],
  images: [images[0], images[17], images[1], images[5], images[10], images[13]],
  projectIcon: "🛒",
  actionIcon: <FaExternalLinkAlt />,
  slideDescription: {
    Es: "Sistema de visualización de escenarios con herramientas clave para guiar a nuevos usuarios en la resolución de sus necesidades.",
    En: "Scenario visualization system with key tools to guide new users in solving their needs."
  },
  developments: [
    {
      id: "scripts",
      name: {
        Es: "Scripts",
        En: "Scripts"
      },
      icon: <FaList />,
      description: {
        Es: "La principal funcionalidad del sistema, puesto que se ven multiples casos de uso y se deben dar multiples opciones de solucion para resolver los problemas identificados. Los datos se suben por medio de excel y se guardan en el LocalBase y dependiendo la estructura de datos, el scripts sera diferente en el diseño.",
        En: "The system's main functionality is that it addresses multiple use cases and requires multiple solution options to resolve the identified problems. Data is uploaded via Excel and saved in LocalBase. Depending on the data structure, the scripts will be designed differently."
      },
      images: [images[12], images[15], images[16], images[17]],
    },
    {
      id: "casos",
      name: {
        Es: "Casos DINSIDE",
        En: "DINSIDE Cases"
      },
      icon: <IoLibrary />,
      description: {
        Es: "Casos divididos por multiples casos donde se da la guia del proceso a seguir, contando con diferentes componentes y secciones tanto para resaltar como ajuntar imagenes ejemplo del caso.",
        En: "Cases divided into multiple cases where the process to follow is guided, with different components and sections to both highlight and add example images of the case."
      },
      images: [images[1], images[2], images[3]],
    },
    {
      id: "aplicativos",
      name: {
        Es: "Aplicativos Web",
        En: "Web Applications"
      },
      icon: <TbApps />,
      description: {
        Es: "Sistema a base JSON que contiene toda la informacion de los aplicativos referentes que necesita el cliente para tener un acceso directo y rapido.",
        En: "JSON-based system that contains all the information on the relevant applications that the client needs for quick and direct access."
      },
      images: [images[4], images[8], images[9]],
    },
    {
      id: "ayudante",
      name: {
        Es: "Ayudante de Comandos",
        En: "Command Assistant"
      },
      icon: <FaList />,
      description: {
        Es: "A base de los multiples atajos del sistema pues se busca generar una guia del actuar al digitar cualquiera de los comandos actuales que tenga el cliente.",
        En: "Based on the system's multiple shortcuts, the goal is to generate a guide for how to proceed when typing any of the client's current commands."
      },
      images: [images[5], images[6], images[7]],
    },
    {
      id: "glosario",
      name: {
        Es: "Glosario",
        En: "Glossary"
      },
      icon: <FaGlobeAmericas />,
      description: {
        Es: "Diferentes conjuntos de informacion como 'Opcionales', 'Abreviacion Moneda' entre otros, cada uno cuenta con sus propias palabras y significados. Este sistema a base LOCALBASE contiene toda la informacion de las palabras y su significado para el usuario.",
        En: "Different sets of information, such as 'Optionals', 'Currency Abbreviation', and others, each have their own words and meanings. This LOCALBASE-based system contains all the information about the words and their meaning for the user."
      },
      images: [images[10], images[11]],
    },
    {
      id: "vocabulario",
      name: {
        Es: "Vocabulario",
        En: "Vocabulary"
      },
      icon: <RxLetterSpacing />,
      description: {
        Es: "Cada empresa cuenta con sus propios terminos tecnicos para el uso de sus productos, servicios y procesos. Este sistema a base LOCALBASE contiene toda la informacion de los terminos y su significado para el usuario.",
        En: "Each company has its own technical terms for its products, services, and processes. This LOCALBASE-based system contains all the information on the terms and their meaning for the user."
      },
      images: [images[13], images[14]],
    },
    {
      id: "default",
      name: {
        Es: "Resumen del Proyecto",
        En: "Project Summary"
      },
      icon: <FaExternalLinkAlt />,
      hidden: true,
      description: {
        Es: "Sistema de visualización de escenarios con herramientas clave para guiar a nuevos usuarios en la resolución de sus necesidades.",
        En: "Scenario visualization system with key tools to guide new users in solving their needs."
      },
      description:
        "",
      images: [
        images[0],
        images[2],
        images[9],
        images[5],
        images[11],
        images[14],
      ],
    },
  ],
};
export default JetSmart;
