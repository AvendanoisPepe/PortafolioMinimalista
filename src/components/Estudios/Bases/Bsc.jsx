import {
    FaExternalLinkAlt,
} from "react-icons/fa";
import { MdCalculate } from "react-icons/md";
import { TbApps } from "react-icons/tb";
import { LuTrees } from "react-icons/lu";


import jet1 from "../../../assets/imagenes/trabajos/Bsc/bsc1.png";
import jet2 from "../../../assets/imagenes/trabajos/Bsc/bsc2.png";
import jet3 from "../../../assets/imagenes/trabajos/Bsc/bsc3.png";
import jet4 from "../../../assets/imagenes/trabajos/Bsc/bsc4.png";
import jet5 from "../../../assets/imagenes/trabajos/Bsc/bsc5.png";
import jet6 from "../../../assets/imagenes/trabajos/Bsc/bsc6.png";
import jet7 from "../../../assets/imagenes/trabajos/Bsc/bsc7.png";
import jet8 from "../../../assets/imagenes/trabajos/Bsc/bsc8.png";
import jet9 from "../../../assets/imagenes/trabajos/Bsc/bsc9.png";
import jet10 from "../../../assets/imagenes/trabajos/Bsc/bsc10.png";

const images = [jet1, jet2, jet3, jet4, jet5, jet6, jet7, jet8, jet9, jet10,];

const Bsc = {
  title: "Web Training Bsc Inbound",
  dates: "2025 Mayo - 2025 Junio",
  description:
    "Desarrollado con React, utilizando UI components de shadcn y diseño con Tailwind. Esta primera versión marca un avance significativo en la integración de herramientas modernas. Cuenta multiples secciones y funcionalidades avanzadas como scripts de contenido dinámicos, un árbol de tipología con múltiples niveles y un simulador diferido. Este simulador actúa como una calculadora precisa, permitiendo visualizar proyecciones financieras con tablas informativas detalladas.",
  technologies: [
    { name: "React", icon: "⚛️" },
    { name: "Tailwind", icon: "🚀" },
    { name: "Ui shadcn", icon: "📊" },
    { name: "Node.js", icon: "🟢" },
    { name: "LocalBase", icon: "🍃" },
  ],
  images: [images[0], images[1], images[4], images[7], images[8]],
  projectIcon: "🛒",
  actionIcon: <FaExternalLinkAlt />,
  slideDescription:
    "Este proyecto representa un desafío importante al apostar por herramientas modernas como React, shadcn UI y Tailwind CSS.  Bsc Inbound no solo moderniza los procesos, sino que también refleja el compromiso por mejorar la interacción y accesibilidad para los usuarios.",
  developments: [
    {
      id: "simulador",
      name: "Simulador Deriferidos",
      icon: <MdCalculate />,
      description:
        "El simulador diferido es el núcleo analítico de Bsc Inbound, ofreciendo cálculos detallados sobre cuotas, saldo pendiente, intereses y valores totales. Con una interfaz intuitiva, los datos ingresados generan tablas informativas precisas, permitiendo decisiones financieras fundamentadas y transparentes",
      images: [images[7], images[8], images[9]],
    },
    {
      id: "scripts",
      name: "Scripts de Contención",
      icon: <TbApps />,
      description:
        "Diseñados para adaptarse dinámicamente a cada escenario, proporcionando respuestas estructuradas de 1 a 3 opciones por selección. Este sistema garantiza una comunicación clara y eficiente con los clientes, optimizando la interacción y reduciendo incertidumbres en el proceso de atención.",
      images: [images[1], images[2], images[3]],
    },
    {
      id: "argumentario",
      name: "Arbol de Tipologías",
      icon: <LuTrees />,
      description:
        "´Permite una clasificación precisa de los casos según el segmento correspondiente, con niveles de profundidad que van desde el nivel 2 hasta el nivel 5. Según la selección, se resaltan datos clave y se habilitan cuadros de ingreso personalizados, facilitando la gestión de información de manera ordenada y accesible.",
      images: [images[4], images[5], images[6]],
    },
    {
      id: "default",
      name: "Resumen del Proyecto",
      icon: <FaExternalLinkAlt />,
      hidden: true,
      description:
        "Este proyecto representa un desafío importante al apostar por herramientas modernas como React, shadcn UI y Tailwind CSS. Bsc Inbound no solo moderniza los procesos, sino que también refleja el compromiso por mejorar la interacción y accesibilidad para los usuarios.",
      images: [images[0], images[7], images[1], images[4]],
    },
  ],
};
export default Bsc;