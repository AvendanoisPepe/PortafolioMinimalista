import {
    FaExternalLinkAlt,
} from "react-icons/fa";
import { VscGraph } from "react-icons/vsc";
import { TbApps } from "react-icons/tb";
import { FaList } from "react-icons/fa6";
import { IoLibrary } from "react-icons/io5";
import { FaGlobeAmericas } from "react-icons/fa";


import jet1 from "../../../assets/imagenes/trabajos/Colombia/tel1.png";
import jet2 from "../../../assets/imagenes/trabajos/Colombia/tel2.png";
import jet3 from "../../../assets/imagenes/trabajos/Colombia/tel3.png";
import jet4 from "../../../assets/imagenes/trabajos/Colombia/tel4.png";
import jet5 from "../../../assets/imagenes/trabajos/Colombia/tel5.png";
import jet6 from "../../../assets/imagenes/trabajos/Colombia/tel6.png";
import jet7 from "../../../assets/imagenes/trabajos/Colombia/tel7.png";
import jet8 from "../../../assets/imagenes/trabajos/Colombia/tel8.png";
import jet9 from "../../../assets/imagenes/trabajos/Colombia/tel16.png";
import jet10 from "../../../assets/imagenes/trabajos/Colombia/tel17.png";
import jet11 from "../../../assets/imagenes/trabajos/Colombia/tel9.png";
import jet12 from "../../../assets/imagenes/trabajos/Colombia/tel10.png";
import jet13 from "../../../assets/imagenes/trabajos/Colombia/tel11.png";
import jet14 from "../../../assets/imagenes/trabajos/Colombia/tel14.png";
import jet15 from "../../../assets/imagenes/trabajos/Colombia/tel15.png";
import jet16 from "../../../assets/imagenes/trabajos/Colombia/tel12.png";
import jet17 from "../../../assets/imagenes/trabajos/Colombia/tel13.png";

const images = [jet1, jet2, jet3, jet4, jet5, jet6, jet7, jet8, jet9, jet10, jet11, jet12, jet13, jet14, jet15, jet16, jet17];

const TelColombia = {
  title: "Web Training Televentas Colombia",
  dates: "2024 Junio - 2024 Septiembre",
  description:
    "Este sistema representa un hito en mi desarrollo, ya que fue mi primera incursión en la creación de gráficos comparativos aplicados a distintos planos de datos. A lo largo del proceso, se implementaron múltiples actualizaciones con el objetivo de perfeccionar su funcionalidad y mejorar la precisión de las comparaciones. Además, se integraron herramientas clave como scripts de ventas, noticias relevantes, argumentarios estratégicos y un sistema de seguimiento de indicadores, proporcionando un marco completo para la toma de decisiones basada en datos.",
  technologies: [
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "LocalBase", icon: "🍃" },
    { name: "JavaScript", icon: "🟨" },
    { name: "WebPack", icon: "🚀" },
    { name: "Chart.js", icon: "📊" },
  ],
  images: [
    images[0],
    images[12],
    images[15],
    images[10],
    images[4],
    images[14],
  ],
  projectIcon: "🛒",
  actionIcon: <FaExternalLinkAlt />,
  slideDescription:
    "Primer proyecto de gráficas comparativas, optimizado con varias actualizaciones e integrando herramientas clave como scripts de ventas, noticias y seguimiento de indicadores",
  developments: [
    {
      id: "versus",
      name: "Movistar Vs Operadores",
      icon: <VscGraph />,
      description:
        "Este sistema permite comparar hasta cuatro operadores móviles, facilitando la selección del mejor plan según un valor ingresado. Muestra los precios más cercanos, visualiza la relación entre costo y gigas con una gráfica tipo pastel, y presenta una tabla detallada con información clave de los planes seleccionados, permitiendo una decisión informada",
      images: [images[11], images[12], images[15], images[16]],
    },
    {
      id: "scripts",
      name: "Scripts Ventas",
      icon: <TbApps />,
      description:
        "El sistema organiza los scripts de ventas por mes, ofreciendo tres opciones diferentes para cada uno. Según la selección, se muestra el contenido correspondiente, permitiendo una gestión estructurada y personalizada. Todos los datos se suben desde Excel al localbase, asegurando accesibilidad y actualización eficiente.",
      images: [images[3], images[4], images[5]],
    },
    {
      id: "argumentario",
      name: "Argumentario Ventas",
      icon: <IoLibrary />,
      description:
        "Argumentario gestionado mediante Excel, subiendo la data al localbase y cargándola en un selector. Se muestran todas las opciones disponibles, pero inicialmente solo la primera es legible. Para fomentar la interacción didáctica, las demás opciones deben seleccionarse una por una si se requiere más información, asegurando una exploración guiada y estructurada.",
      images: [images[6], images[7], images[10]],
    },
    {
      id: "seguimiento",
      name: "Seguimiento Indicadores",
      icon: <FaList />,
      description:
        "El sistema de seguimiento de indicadores carga los datos desde Excel al localbase, generando una lista con los nombres de los usuarios. Al seleccionar un usuario, se muestran sus datos completos y se habilitan diversas gráficas de análisis como ratio, legalización y novedades, entre otras. La visualización es interactiva, permitiendo elegir cada gráfico para evaluar el rendimiento promedio de los indicadores correspondientes.",
      images: [images[13], images[14], images[8], images[9]],
    },
    {
      id: "noticias",
      name: "Noticias",
      icon: <FaGlobeAmericas />,
      description:
        "Sistema de noticias para que el cliente actualice sus eventos, anuncios, entre otras.",
      images: [images[1], images[2]],
    },
    {
      id: "default",
      name: "Resumen del Proyecto",
      icon: <FaExternalLinkAlt />,
      hidden: true,
      description:
        "Primer proyecto de gráficas comparativas, optimizado con varias actualizaciones e integrando herramientas clave como scripts de ventas, noticias y seguimiento de indicadores",
      images: [images[0], images[3], images[10], images[12], images[15], images[14]],
    },
  ],
};
export default TelColombia;