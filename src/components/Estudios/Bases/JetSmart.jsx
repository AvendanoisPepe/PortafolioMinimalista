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

const JetSmart = {
  title: "Web Training JetSmart",
  dates: "2024 Marzo - 2024 Mayo",
  description:
    "Este sistema está diseñado para visualizar múltiples escenarios posibles ante una situación específica, integrando diversos scripts y procesos clave. Se desarrollaron herramientas como casos DINSIDE, aplicaciones, asistentes de comandos, glosarios y vocabularios, todos enfocados en ofrecer a nuevos usuarios una ruta clara y detallada para solucionar sus necesidades rápidamente.",
  technologies: [
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "LocalBase", icon: "🍃" },
    { name: "JavaScript", icon: "🟨" },
    { name: "WebPack", icon: "🚀" },
  ],
  images: [images[0], images[2], images[4], images[5]],
  projectIcon: "🛒",
  actionIcon: <FaExternalLinkAlt />,
  slideDescription:
    "Se optimizó el sistema de gráficos para comparar distintas características entre dos celulares, logrando una visualización más clara e intuitiva que facilita la toma de decisiones.",
  developments: [
    {
      id: "versus",
      name: "Versus Producto",
      icon: <VscGraph />,
      description:
        "Usando Chart.js se crean graficas para comparar distintas características entre dos celulares, logrando una visualización más clara e intuitiva que facilita la toma de decisiones, donde se sobresalta la superioridad del producto.",
      images: [images[1], images[2], images[3]],
    },
    {
      id: "aplicativos",
      name: "Aplicativos Web",
      icon: <TbApps />,
      description:
        "Sistema a base JSON que contiene toda la informacion de los aplicativos referentes que necesita el cliente para tener un acceso directo y rapido.",
      images: [images[7], images[4]],
    },
    {
      id: "argumentario",
      name: "Argumentario TYT",
      icon: <FaList />,
      description:
        "Sistema a base LOCALBASE en el cual se cargan los datos, se recorren y muestran todas las opciones posibles para los multiples casos, donde puedes tener una amplia variedad de respuestas.",
      images: [images[5], images[6]],
    },
  ],
};
export default JetSmart;
