// components/GlobalContext.jsx
import { createContext, useContext, useEffect, useState } from "react";

// 1. Crear el contexto
const GlobalContext = createContext();
const themes = {
    claro: {
        "--primary-color": "#000054",
        "--secondary-color": "#000000",
        "--text-color": "#333",
        "--bg-color": "#ffffff",
    },
    oscuro: {
        "--primary-color": "#0d04a6",
        "--secondary-color": "#041b2c",
        "--text-color": "#f5f5f5",
        "--bg-color": "#121212",
    },
    violeta: {
        "--primary-color": "#6b21a8",
        "--secondary-color": "#3f0e63",
        "--text-color": "#ffffff",
        "--bg-color": "#1f1b2e",
    },
};

// 2. Crear el provider
export const GlobalProvider = ({ children }) => {
    const [usuario, setUsuario] = useState(null);
    const [temaNombre, setTemaNombre] = useState("claro");
    const [sistemaLenguaje, setSistemaLenguaje] = useState('Es');

    // Cada vez que cambia el tema, actualiza las variables CSS
    useEffect(() => {
        const theme = themes[temaNombre];
        if (theme) {
            Object.entries(theme).forEach(([key, value]) => {
                document.documentElement.style.setProperty(key, value);
            });
            // Aplica la clase de tema correspondiente al <html>
            document.documentElement.className = `tema-${temaNombre}`;
        }
    }, [temaNombre]);

    return (
        <GlobalContext.Provider
            value={{
            usuario,
            setUsuario,
            temaNombre,
            setTemaNombre,
            sistemaLenguaje,
            setSistemaLenguaje,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

// 3. Custom hook para usar el contexto más fácil
export const useGlobal = () => useContext(GlobalContext);
