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
  dates: {
    Es: "2024 Junio - 2024 Septiembre",
    En: "June 2024 - September 2024",
  },
  description: {
    Es: "Este sistema representa un hito en mi desarrollo, ya que fue mi primera incursión en la creación de gráficos comparativos aplicados a distintos planos de datos. A lo largo del proceso, se implementaron múltiples actualizaciones con el objetivo de perfeccionar su funcionalidad y mejorar la precisión de las comparaciones. Además, se integraron herramientas clave como scripts de ventas, noticias relevantes, argumentarios estratégicos y un sistema de seguimiento de indicadores, proporcionando un marco completo para la toma de decisiones basada en datos.",
    En: "This system represents a milestone in my development, as it was my first foray into creating comparative charts applied to different data planes. Throughout the process, multiple updates were implemented to refine its functionality and improve the accuracy of comparisons. In addition, key tools such as sales scripts, relevant news, strategic narratives, and an indicator tracking system were integrated, providing a complete framework for data-driven decision-making."
  },
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
  slideDescription: {
    Es: "Primer proyecto de gráficas comparativas, optimizado con varias actualizaciones e integrando herramientas clave como scripts de ventas, noticias y seguimiento de indicadores",
    En: "First comparative chart project, optimized with several updates and integrating key tools such as sales scripts, news, and indicator tracking."
  },
  developments: [
    {
      id: "versus",
      name: {
        Es: "Movistar Vs Operadores",
        En: "Movistar vs. Operators"
      },
      icon: <VscGraph />,
      description: {
        Es: "Este sistema permite comparar hasta cuatro operadores móviles, facilitando la selección del mejor plan según un valor ingresado. Muestra los precios más cercanos, visualiza la relación entre costo y gigas con una gráfica tipo pastel, y presenta una tabla detallada con información clave de los planes seleccionados, permitiendo una decisión informada",
        En: "This system allows you to compare up to four mobile operators, making it easier to select the best plan based on an entered value. It displays the closest prices, visualizes the relationship between cost and gigabytes using a pie chart, and presents a detailed table with key information about the selected plans, allowing for an informed decision."
      },
      images: [images[11], images[12], images[15], images[16]],
    },
    {
      id: "scripts",
      name: {
        Es: "Scripts Ventas",
        En: "Sales Scripts"
      },
      icon: <TbApps />,
      description: {
        Es: "El sistema organiza los scripts de ventas por mes, ofreciendo tres opciones diferentes para cada uno. Según la selección, se muestra el contenido correspondiente, permitiendo una gestión estructurada y personalizada. Todos los datos se suben desde Excel al localbase, asegurando accesibilidad y actualización eficiente.",
        En: "The system organizes sales scripts by month, offering three different options for each. Based on the selection, the corresponding content is displayed, allowing for structured and personalized management. All data is uploaded from Excel to LocalBase, ensuring accessibility and efficient updating."
      },
      images: [images[3], images[4], images[5]],
    },
    {
      id: "argumentario",
      name: {
        Es: "Argumentario Ventas",
        En: "Sales Plot"
      },
      icon: <IoLibrary />,
      description: {
        Es: "Argumentario gestionado mediante Excel, subiendo la data al localbase y cargándola en un selector. Se muestran todas las opciones disponibles, pero inicialmente solo la primera es legible. Para fomentar la interacción didáctica, las demás opciones deben seleccionarse una por una si se requiere más información, asegurando una exploración guiada y estructurada.",
        En: "The argument is managed through Excel, uploading the data to the local database and loading it into a selector. All available options are displayed, but initially only the first is readable. To encourage educational interaction, the remaining options must be selected one by one if more information is required, ensuring guided and structured exploration."
      },
      images: [images[6], images[7], images[10]],
    },
    {
      id: "seguimiento",
      name: {
        Es: "Seguimiento Indicadores",
        En: "Monitoring Indicators"
      },
      icon: <FaList />,
      description: {
        Es: "El sistema de seguimiento de indicadores carga los datos desde Excel al localbase, generando una lista con los nombres de los usuarios. Al seleccionar un usuario, se muestran sus datos completos y se habilitan diversas gráficas de análisis como ratio, legalización y novedades, entre otras. La visualización es interactiva, permitiendo elegir cada gráfico para evaluar el rendimiento promedio de los indicadores correspondientes.",
        En: "The indicator tracking system uploads data from Excel to LocalBase, generating a list of user names. Selecting a user displays their complete data and enables various analysis graphs, such as ratio, legalization, and updates, among others. The display is interactive, allowing users to select each graph to evaluate the average performance of the corresponding indicators."
      },
      images: [images[13], images[14], images[8], images[9]],
    },
    {
      id: "noticias",
      name: {
        Es: "Noticias",
        En: "News"
      },
      icon: <FaGlobeAmericas />,
      description: {
        Es: "Sistema de noticias para que el cliente actualice sus eventos, anuncios, entre otras.",
        En: "News system for the client to update their events, announcements, among others."
      },
      images: [images[1], images[2]],
    },
    {
      id: "default",
      name: {
        Es: "Resumen del Proyecto",
        En: "Project Summary"
      },
      icon: <FaExternalLinkAlt />,
      description: {
        Es: "Primer proyecto de gráficas comparativas, optimizado con varias actualizaciones e integrando herramientas clave como scripts de ventas, noticias y seguimiento de indicadores",
        En: "First comparative chart project, optimized with several updates and integrating key tools such as sales scripts, news, and indicator tracking."
      },
      hidden: true,
      images: [images[0], images[3], images[10], images[12], images[15], images[14]],
    },
  ],
};
export default TelColombia;