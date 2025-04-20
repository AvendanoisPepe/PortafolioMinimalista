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

const Temas = () => {
    const [isThemeOpen, setIsThemeOpen] = useState(false);
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);
    const [currentTheme, setCurrentTheme] = useState("light");
    const [currentLanguage, setCurrentLanguage] = useState("es");

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
        {
            id: "blue",
            name: "Blue",
            icon: <FaCircle className="text-blue-500" />,
        },
    ];

    // Idiomas disponibles
    const languages = [
        { id: "es", name: "Español", flag: "🇪🇸" },
        { id: "en", name: "English", flag: "🇺🇸" },
    ];

    // Función para cambiar tema (solo UI, sin lógica real)
    const handleThemeChange = (themeId) => {
        setCurrentTheme(themeId);
        setIsThemeOpen(false);
    };

    // Función para cambiar idioma (solo UI, sin lógica real)
    const handleLanguageChange = (langId) => {
        setCurrentLanguage(langId);
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
    return (
        <div className="Temas fixed bottom-3 left-6 z-40 flex flex-row space-y-3 space-x-4">
            {/* Selector de Tema */}
            <div className="primero relative">
                <button
                    onClick={() => {
                        setIsThemeOpen(!isThemeOpen);
                        setIsLanguageOpen(false);
                    }}
                    className="flex items-center space-x-2 py-2 px-4 shadow-sm hover:shadow-md transition-all duration-300">
                    <span className="letras 2xl:text-xl font-bold">Tema</span>
                    <span className="iconos 2xl:text-2xl flex items-center justify-center 2xl:w-10 2xl:h-8">
                        {getCurrentTheme().icon}
                    </span>
                    <FaChevronUp
                        className={`text-zinc-400 text-xs transition-transform duration-300 ${
                        isThemeOpen ? "" : "rotate-180"
                    }`}
                    />
                </button>

                {/* Dropdown de Temas */}
                {isThemeOpen && (
                    <div className="absolute bottom-full left-0 mb-2 bg-white border border-zinc-200 rounded-lg shadow-lg overflow-hidden min-w-[180px] animate-fadeIn">
                        <div className="py-1">
                            {themes.map((theme) => (
                                <button
                                    key={theme.id}
                                    onClick={() => handleThemeChange(theme.id)}
                                        className={`w-full flex items-center justify-between px-4 py-2.5 hover:bg-zinc-50 transition-colors ${
                                        currentTheme === theme.id ? "bg-zinc-50" : ""
                                    }`}>
                                    <div className="flex items-center space-x-3">
                                        <span className="flex items-center justify-center w-5 h-5">
                                            {theme.icon}
                                        </span>
                                        <span className="text-sm text-zinc-800">
                                            {theme.name}
                                        </span>
                                    </div>
                                    {currentTheme === theme.id && (
                                        <FaCheck className="text-green-500 text-xs" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Selector de Idioma */}
            <div className="relative">
                <button
                    onClick={() => {
                        setIsLanguageOpen(!isLanguageOpen);
                        setIsThemeOpen(false);
                    }}
                    className="flex items-center space-x-2 bg-white border border-zinc-200 rounded-full py-2 px-4 shadow-sm hover:shadow-md transition-all duration-300">
                    <FaGlobe className="text-zinc-600 text-sm" />
                    <span className="text-zinc-800 text-sm font-medium">
                        {getCurrentLanguage().name}
                    </span>
                    <span className="text-base">{getCurrentLanguage().flag}</span>
                    <FaChevronUp
                        className={`text-zinc-400 text-xs transition-transform duration-300 ${
                            isLanguageOpen ? "" : "rotate-180"
                        }`}/>
                </button>

                {/* Dropdown de Idiomas */}
                {isLanguageOpen && (
                    <div className="absolute bottom-full left-0 mb-2 bg-white border border-zinc-200 rounded-lg shadow-lg overflow-hidden min-w-[180px] animate-fadeIn">
                        <div className="py-1">
                            {languages.map((language) => (
                                <button
                                    key={language.id}
                                    onClick={() => handleLanguageChange(language.id)}
                                    className={`w-full flex items-center justify-between px-4 py-2.5 hover:bg-zinc-50 transition-colors ${
                                    currentLanguage === language.id ? "bg-zinc-50" : ""
                                    }`}>
                                    <div className="flex items-center space-x-3">
                                    <span className="text-base">{language.flag}</span>
                                    <span className="text-sm text-zinc-800">
                                        {language.name}
                                    </span>
                                    </div>
                                    {currentLanguage === language.id && (
                                        <FaCheck className="text-green-500 text-xs" />
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
