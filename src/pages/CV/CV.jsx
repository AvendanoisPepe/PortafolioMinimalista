import "./CV.scss";
import { IoMdPhonePortrait  } from "react-icons/io";
import { IoClose, IoReload } from "react-icons/io5";
import { FiUser, FiMail, FiMessageSquare, FiSend } from "react-icons/fi";
import { useState } from "react";
import PdfEn from "../../assets/documents/En.pdf";
import PdfEs from "../../assets/documents/Es.pdf";
import { useGlobal } from "../../context/GlobalContext";

const CV = ({ isOpen, onClose }) => {
    const { sistemaLenguaje, setSistemaLenguaje } = useGlobal();
    const [language, setLanguage] = useState(
        sistemaLenguaje === "Es" ? "Español" : "Ingles"
    );

    if (!isOpen) return null;

    return (
        <div className="popup-overlay w-full h-full flex justify-center items-center z-50 top-0 left-0 fixed">
            <div className="popup-content p-10 relative max-w-6xl 2xl:w-[80%] md:w-[70%] rounded-lg overflow-hidden">
            <button
                className="close-btn absolute top-4 right-5 z-10"
                onClick={onClose}
            >
                <IoClose className="2xl:w-10 2xl:h-10 md:w-10 md:h-10" />
            </button>

            <div className="relative z-10">
                <div className="text-center">
                    <h2 className="2xl:text-5xl md:text-4xl font-bold gradient-text">¡CV Personal hecho con amor!</h2>
                    <p className="ptexto 2xl:text-lg md:text-sm 2xl:mb-4 md:mb-3 2xl:mt-2 md:mt-1">
                        Seleccion el Cv de tu idioma de preferencia
                    </p>
                    <div className="opciones w-full flex justify-center align-center">
                        <button
                            className={`botones 2xl:p-4 md:p-2 2xl:text-lg md:text-xs w-[50%] ${language === "Español" ? "active" : ""}`}
                            onClick={() => setLanguage("Español")}>
                            Español
                        </button>

                        <button
                            className={`botones 2xl:p-4 md:p-2 2xl:text-lg md:text-sm w-[50%] ${language === "Ingles" ? "active" : ""}`}
                            onClick={() => setLanguage("Ingles")}>
                            Ingles
                        </button>

                    </div>
                    <div className="ifrma w-full 2xl:h-[440px] md:h-[340px] p-4 mt-4">
                        <iframe className="w-full h-full" src={language === "Español" ? PdfEs : PdfEn}></iframe>
                    </div>
                </div>
                
                <div className="color-dots">
                    <div className="dot dot-1"></div>
                    <div className="dot dot-2"></div>
                    <div className="dot dot-3"></div>
                    <div className="dot dot-4"></div>
                </div>
            </div>
            </div>
        </div>
    )
};

export default CV;