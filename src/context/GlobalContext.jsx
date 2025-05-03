// components/GlobalContext.jsx
import { createContext, useContext, useEffect, useState } from "react";

// 1. Crear el contexto
const GlobalContext = createContext();
const themes = {
    claro: {},
    oscuro: {},
    violeta: {},
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
