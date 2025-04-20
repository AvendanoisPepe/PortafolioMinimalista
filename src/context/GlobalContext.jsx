// components/GlobalContext.jsx
import { createContext, useContext, useState } from "react";

// 1. Crear el contexto
const GlobalContext = createContext();

// 2. Crear el provider
export const GlobalProvider = ({ children }) => {
    const [usuario, setUsuario] = useState(null);
    const [temaOscuro, setTemaOscuro] = useState(false);
    const [sistemaLenguaje, setSistemaLenguaje] = useState('Es');
    return (
        <GlobalContext.Provider
            value={{
            usuario,
            setUsuario,
            temaOscuro,
            setTemaOscuro,
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
