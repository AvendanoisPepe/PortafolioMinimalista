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
  images: [images[0], images[17], images[1], images[5], images[10], images[13]],
  projectIcon: "🛒",
  actionIcon: <FaExternalLinkAlt />,
  slideDescription:
    "Sistema de visualización de escenarios con herramientas clave para guiar a nuevos usuarios en la resolución de sus necesidades.",
  developments: [
    {
      id: "scripts",
      name: "Scripts",
      icon: <FaList />,
      description:
        "La principal funcionalidad del sistema, puesto que se ven multiples casos de uso y se deben dar multiples opciones de solucion para resolver los problemas identificados. Los datos se suben por medio de excel y se guardan en el LocalBase y dependiendo la estructura de datos, el scripts sera diferente en el diseño.",
      images: [images[12], images[15], images[16], images[17]],
    },
    {
      id: "casos",
      name: "Casos DINSIDE",
      icon: <IoLibrary />,
      description:
        "Casos dividos por multiples casos donde se da la guia del proceso a seguir, contando con diferentes componentes y secciones tanto para resaltar como ajuntar imagenes ejemplo del caso.",
      images: [images[1], images[2], images[3]],
    },
    {
      id: "aplicativos",
      name: "Aplicativos Web",
      icon: <TbApps />,
      description:
        "Sistema a base JSON que contiene toda la informacion de los aplicativos referentes que necesita el cliente para tener un acceso directo y rapido.",
      images: [images[4], images[8], images[9]],
    },
    {
      id: "ayudante",
      name: "Ayudante de Comandos",
      icon: <FaList />,
      description:
        "A base de los multiples atajos del sistema pues se busca generar una guia del actuar al digitar cualquiera de los comandos actuales que tenga el cliente.",
      images: [images[5], images[6], images[7]],
    },
    {
      id: "glosario",
      name: "Glosario",
      icon: <FaGlobeAmericas />,
      description:
        "Diferentes conjuntos de informacion como 'Opcionales', 'Abreviacion Moneda' entre otros, cada uno cuenta con sus propias palabras y significados. Este sistema a base LOCALBASE contiene toda la informacion de las palabras y su significado para el usuario.",
      images: [images[10], images[11]],
    },
    {
      id: "vocabulario",
      name: "Vocabulario",
      icon: <RxLetterSpacing />,
      description:
        "Cada empresa cuenta con sus propios terminos tecnicos para el uso de sus productos, servicios y procesos. Este sistema a base LOCALBASE contiene toda la informacion de los terminos y su significado para el usuario.",
      images: [images[13], images[14]],
    },
  ],
};
export default JetSmart;
