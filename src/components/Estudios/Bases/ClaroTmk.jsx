import {
    FaExternalLinkAlt,
} from "react-icons/fa";
import { VscGraph } from "react-icons/vsc";
import { TbApps } from "react-icons/tb";
import { FaList } from "react-icons/fa6";


import cla1 from "../../../assets/imagenes/trabajos/ClaroTmk/cla1.png";
import cla2 from "../../../assets/imagenes/trabajos/ClaroTmk/cla2.png";
import cla3 from "../../../assets/imagenes/trabajos/ClaroTmk/cla3.png";
import cla4 from "../../../assets/imagenes/trabajos/ClaroTmk/cla4.png";
import cla5 from "../../../assets/imagenes/trabajos/ClaroTmk/cla5.png";
import cla6 from "../../../assets/imagenes/trabajos/ClaroTmk/cla6.png";
import cla7 from "../../../assets/imagenes/trabajos/ClaroTmk/cla7.png";
import cla8 from "../../../assets/imagenes/trabajos/ClaroTmk/cla8.png";

const images = [cla1, cla2, cla3, cla4, cla5, cla6, cla7, cla8];

const ClaroTmk = {
  title: "Web Training Claro Tmk",
  dates: {
    Es: "Enero 2024 - Marzo 2024",
    En: "January 2024 - March 2024",
  },
  description: {
    Es: "Este proyecto llevó la visualización de datos al siguiente nivel, con un nuevo sistema que compara múltiples características entre dos celulares y destaca cuál es la mejor opción. Además, se incorporaron desarrollos clave como aplicaciones web y un argumentario TYT, organizado en las tres secciones principales del sistema para una mejor experiencia y análisis.",
    En: "This project took data visualization to the next level, with a new system that compares multiple features between two cell phones and highlights which is the best option. Key developments were also incorporated, such as web applications and a TYT storyboard, organized into the system's three main sections for improved experience and analysis."
  },
  technologies: [
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "LocalBase", icon: "🍃" },
    { name: "Chart.js", icon: "📊" },
    { name: "WebPack", icon: "🚀" },
  ],
  images: [images[0], images[2], images[4], images[5]],
  projectIcon: "🛒",
  actionIcon: <FaExternalLinkAlt />,
  slideDescription: {
    Es: "Se optimiza el sistema de gráficos para comparar distintas características entre dos celulares, logrando una visualización más clara e intuitiva que facilita la toma de decisiones.",
    En: "The graphics system has been optimized to compare different features between two cell phones, achieving a clearer and more intuitive display that facilitates decision-making."
  },
  developments: [
    {
      id: "versus",
      name: {
        Es: "Versus Producto",
        En: "Versus Product"
      },
      icon: <VscGraph />,
      description: {
        Es: "Usando Chart.js se crean graficas para comparar distintas características entre dos celulares, logrando una visualización más clara e intuitiva que facilita la toma de decisiones, donde se sobresalta la superioridad del producto.",
        En: "Using Chart.js, graphs are created to compare different features between two cell phones, achieving a clearer and more intuitive visualization that facilitates decision-making and highlights the superiority of the product."
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
      images: [images[7], images[4]],
    },
    {
      id: "argumentario",
      name: {
        Es: "Argumentario TYT",
        En: "TYT Argument"
      },
      icon: <FaList />,
      description: {
        Es: "Sistema a base LOCALBASE en el cual se cargan los datos, se recorren y muestran todas las opciones posibles para los multiples casos, donde puedes tener una amplia variedad de respuestas.",
        En: "LOCALBASE-based system in which data is loaded, traversed, and all possible options for multiple cases are displayed, where you can have a wide variety of responses."
      },
      images: [images[5], images[6]],
    },
    {
      id: "default",
      name: {
        Es: "Resumen del Proyecto",
        En: "Project Summary"
      },
      icon: <FaExternalLinkAlt />,
      description: {
        Es: "Se optimiza el sistema de gráficos para comparar distintas características entre dos celulares, logrando una visualización más clara e intuitiva que facilita la toma de decisiones.",
        En: "The graphics system has been optimized to compare different features between two cell phones, achieving a clearer and more intuitive display that facilitates decision-making."
      },
      hidden: true,
      images: [images[0], images[1], images[2], images[4], images[6]],
    },
  ],
};
export default ClaroTmk;
