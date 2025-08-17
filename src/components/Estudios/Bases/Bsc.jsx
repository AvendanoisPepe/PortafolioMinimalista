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
  dates: {
    Es: "2025 Mayo - 2025 Junio",
    En: "May 2025 - June 2025",
  },
  description: {
    Es: "Desarrollado con React, utilizando UI components de shadcn y diseño con Tailwind. Esta primera versión marca un avance significativo en la integración de herramientas modernas. Cuenta multiples secciones y funcionalidades avanzadas como scripts de contenido dinámicos, un árbol de tipología con múltiples niveles y un simulador diferido. Este simulador actúa como una calculadora precisa, permitiendo visualizar proyecciones financieras con tablas informativas detalladas.",
    En: "Developed with React, using shadcn UI components and designed with Tailwind, this first version marks a significant advance in the integration of modern tools. It features multiple sections and advanced features such as dynamic content scripts, a multi-level typology tree, and a deferred simulator. This simulator acts as an accurate calculator, allowing you to view financial projections with detailed tables."
  },
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
  slideDescription: {
    Es: "Este proyecto representa un desafío importante al apostar por herramientas modernas como React, shadcn UI y Tailwind CSS.  Bsc Inbound no solo moderniza los procesos, sino que también refleja el compromiso por mejorar la interacción y accesibilidad para los usuarios.",
    En: "This project represents a significant challenge, leveraging modern tools like React, Shadcn UI, and Tailwind CSS. BSC Inbound not only modernizes processes but also reflects a commitment to improving user interaction and accessibility."
  },
  developments: [
    {
      id: "simulador",
      name: {
        Es: "Simulador Deriferidos",
        En: "Deferred Simulator"
      },
      icon: <MdCalculate />,
      description: {
        Es: "El simulador diferido es el núcleo analítico de Bsc Inbound, ofreciendo cálculos detallados sobre cuotas, saldo pendiente, intereses y valores totales. Con una interfaz intuitiva, los datos ingresados generan tablas informativas precisas, permitiendo decisiones financieras fundamentadas y transparentes",
        En: "The deferred simulator is the analytical core of BSC Inbound, offering detailed calculations on installments, outstanding balances, interest, and total amounts. With an intuitive interface, the entered data generates accurate, informative tables, enabling informed and transparent financial decisions."
      },
      images: [images[7], images[8], images[9]],
    },
    {
      id: "scripts",
      name: {
        Es: "Scripts de Contención",
        En: "Containment Scripts"
      },
      icon: <TbApps />,
      description: {
        Es: "Diseñados para adaptarse dinámicamente a cada escenario, proporcionando respuestas estructuradas de 1 a 3 opciones por selección. Este sistema garantiza una comunicación clara y eficiente con los clientes, optimizando la interacción y reduciendo incertidumbres en el proceso de atención.",
        En: "Designed to dynamically adapt to each scenario, providing structured responses with one to three options per selection. This system ensures clear and efficient communication with customers, optimizing interaction and reducing uncertainty in the care process."
      },
      images: [images[1], images[2], images[3]],
    },
    {
      id: "argumentario",
      name: "",
      name: {
        Es: "Arbol de Tipologías",
        En: "Tree of Typologies"
      },
      icon: <LuTrees />,
      description: {
        Es: "Permite una clasificación precisa de los casos según el segmento correspondiente, con niveles de profundidad que van desde el nivel 2 hasta el nivel 5. Según la selección, se resaltan datos clave y se habilitan cuadros de ingreso personalizados, facilitando la gestión de información de manera ordenada y accesible.",
        En: "It allows for precise classification of cases by segment, with depth levels ranging from level 2 to level 5. Based on the selection, key data is highlighted and customized input boxes are enabled, facilitating information management in an organized and accessible manner."
      },
      images: [images[4], images[5], images[6]],
    },
    {
      id: "default",
      name: {
        Es: "Resumen del Proyecto",
        En: "Project Summary"
      },
      icon: <FaExternalLinkAlt />,
      description: {
        Es: "Este proyecto representa un desafío importante al apostar por herramientas modernas como React, shadcn UI y Tailwind CSS. Bsc Inbound no solo moderniza los procesos, sino que también refleja el compromiso por mejorar la interacción y accesibilidad para los usuarios.",
        En: "This project represents a significant challenge, leveraging modern tools like React, Shadcn UI, and Tailwind CSS. BSC Inbound not only modernizes processes but also reflects a commitment to improving user interaction and accessibility."
      },
      hidden: true,
      images: [images[0], images[7], images[1], images[4]],
    },
  ],
};
export default Bsc;