import { useState } from "react";
import "./Temas.scss"
import {
    FaMoon,
    FaSun,
    FaCircle,
    FaChevronUp,
    FaGlobe,
    FaCheck,
} from "react-icons/fa";
import { useGlobal } from "../../context/GlobalContext";

const Temas = () => {
    const [isThemeOpen, setIsThemeOpen] = useState(false);
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);
    const [currentTheme, setCurrentTheme] = useState("light");
    const [currentLanguage, setCurrentLanguage] = useState("Es");
    const { setSistemaLenguaje, setTemaNombre, sistemaLenguaje } = useGlobal();

    // Temas disponibles
    const themes = [
        {
            id: "light",
            name: "Light",
            icon: <FaSun className="text-amber-400" />,
        },
        {
            id: "dark",
            name: "Dark",
            icon: <FaMoon className="text-indigo-400" />,
        },
        {
            id: "purple",
            name: "Purple",
            icon: <FaCircle className="text-purple-500" />,
        },
        { id: "red", name: "Red", icon: <FaCircle className="text-red-500" /> },
        { id: "green", name: "Green", icon: <FaCircle className="text-lime-900" /> },
    ];

    // Idiomas disponibles
    const languages = [
        { id: "Es", name: "Español", flag: "🇪🇸" },
        { id: "En", name: "English", flag: "🇺🇸" },
    ];

    
    const handleThemeChange = (themeId) => {
        setCurrentTheme(themeId);
        setTemaNombre(convertirNombreTema(themeId));
        setIsThemeOpen(false);
    };

    
    const handleLanguageChange = (langId) => {
        setCurrentLanguage(langId);
        setSistemaLenguaje(langId);
        setIsLanguageOpen(false);
    };

    // Obtener el tema actual
    const getCurrentTheme = () => {
        return themes.find((theme) => theme.id === currentTheme);
    };

    // Obtener el idioma actual
    const getCurrentLanguage = () => {
        return languages.find((lang) => lang.id === currentLanguage);
    };
    const convertirNombreTema = (id) => {
        switch (id) {
            case "light":
                return "claro";
            case "dark":
                return "oscuro";
            case "purple":
                return "violeta";
            case "red":
                return "rojo";
            case "green":
                return "camila";
            default:
                return "claro";
        }
    };

    return (
        <div className="Temas fixed bottom-3 left-6 z-40 flex flex-row space-y-3 space-x-4">
            {/* Selector de Tema */}
            <div className="primero relative">
                <button
                    onClick={() => {
                        setIsThemeOpen(!isThemeOpen);
                        setIsLanguageOpen(false);
                    }}
                    className="butonT flex items-center space-x-2 py-2 px-4 shadow-sm hover:shadow-md transition-all duration-300">
                    <span className="letras 2xl:text-xl font-bold">{sistemaLenguaje === "Es" ? "Tema" : "Theme"}</span>
                    <span className="iconos 2xl:text-2xl flex items-center justify-center 2xl:w-10 2xl:h-8">
                        {getCurrentTheme().icon}
                    </span>
                    <FaChevronUp
                        className={`flechita 2xl:text-base transition-transform duration-300 ${
                        isThemeOpen ? "" : "rotate-180"
                    }`}
                    />
                </button>

                {/* Dropdown de Temas */}
                {isThemeOpen && (
                    <div className="listado absolute bottom-full left-0 mb-2 border shadow-lg overflow-hidden min-w-[180px]">
                        <div className="py-1">
                            {themes.map((theme) => (
                                <button
                                    key={theme.id}
                                    onClick={() => handleThemeChange(theme.id)}
                                        className={`w-full flex items-center justify-between px-4 py-2.5 transition-colors ${
                                        currentTheme === theme.id ? "seleccionado" : ""
                                    }`}>
                                    <div className="flex items-center space-x-3">
                                        <span className="flex items-center justify-center 2xl:w-5 2xl:h-5 2xl:text-base">
                                            {theme.icon}
                                        </span>
                                        <span className="nombre 2xl:text-sm">
                                            {theme.name}
                                        </span>
                                    </div>
                                    {currentTheme === theme.id && (
                                        <FaCheck className="check 2xl:text-base" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Selector de Idioma */}
            <div className="primero relative">
                <button
                    onClick={() => {
                        setIsLanguageOpen(!isLanguageOpen);
                        setIsThemeOpen(false);
                    }}
                    className="butonT flex items-center space-x-2 py-2 px-4 shadow-sm hover:shadow-md transition-all duration-300">
                    <FaGlobe className="text-zinc-600 2xl:text-xl" />
                    <span className="letras 2xl:text-xl font-bold">
                        {getCurrentLanguage().name}
                    </span>
                    <span className="iconos 2xl:text-2xl flex items-center justify-center 2xl:w-8">{getCurrentLanguage().flag}</span>
                    <FaChevronUp
                        className={`flechita 2xl:text-base transition-transform duration-300 ${
                            isLanguageOpen ? "" : "rotate-180"
                        }`}/>
                </button>

                {/* Dropdown de Idiomas */}
                {isLanguageOpen && (
                    <div className="listado absolute bottom-full left-0 mb-2 border shadow-lg overflow-hidden min-w-[180px]">
                        <div className="py-1">
                            {languages.map((language) => (
                                <button
                                    key={language.id}
                                    onClick={() => handleLanguageChange(language.id)}
                                    className={`w-full flex items-center justify-between px-4 py-2.5 transition-colors ${
                                    currentLanguage === language.id ? "seleccionado" : ""
                                    }`}>
                                    <div className="flex items-center space-x-3">
                                        <span className="flex items-center justify-center 2xl:w-5 2xl:h-5 2xl:text-base">{language.flag}</span>
                                        <span className="nombre 2xl:text-sm">
                                            {language.name}
                                        </span>
                                    </div>
                                    {currentLanguage === language.id && (
                                        <FaCheck className="check 2xl:text-base" />
                                    )}
                                </button>
                            ))}
                        </div>  
                    </div>
                )}
            </div>
        </div>
    );
};

export default Temas;
