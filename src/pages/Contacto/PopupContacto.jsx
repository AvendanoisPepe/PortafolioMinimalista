// components/PopupContacto.jsx
import "./popupContacto.scss";
import { IoMdPhonePortrait  } from "react-icons/io";
import { IoClose, IoReload } from "react-icons/io5";
import { FiUser, FiMail, FiMessageSquare, FiSend } from "react-icons/fi";
import { useState } from "react";
function PopupContacto({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para enviar el formulario
        console.log("Formulario enviado:", formData);
        // Opcional: cerrar el popup después de enviar
        // onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="popup-overlay w-full h-full flex justify-center items-center z-50 top-0 left-0 fixed">
            <div className="popup-content p-8 md:p-10 relative w-[95%] md:w-[80%] max-w-3xl rounded-lg overflow-hidden">
            <button
                className="close-btn absolute top-4 right-5 z-10"
                onClick={onClose}
            >
                <IoClose className="w-10 h-10" />
            </button>

            <div className="relative z-10">
                <div className="text-center mb-8">
                    <h2 className="text-5xl font-bold gradient-text">¡Hablemos!</h2>
                    <p className="text-gray-600 mt-2">
                        Completa el formulario y me pondré en contacto contigo pronto
                    </p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6 flex justify-between align-center flex-wrap">
                    <div className="relative flex align-center w-full">
                        <div className="absolute left-6 top-4 z-1">
                            <FiUser className="w-[18px] h-[18px]" />
                        </div>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Nombre"
                            className="form-input w-full text-base p-3 pl-13"
                            required
                            autoComplete="off"
                        />
                    </div>

                    <div className="relative flex align-center w-[49%]">
                        <div className="absolute left-6 top-4 z-1">
                            <FiMail className="w-[18px] h-[18px]" />
                        </div>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            className="form-input w-full text-base p-3 pl-13"
                            required
                            autoComplete="off"
                        />
                    </div>

                    <div className="relative flex align-center w-[49%]">
                        <div className="absolute left-6 top-4 z-1">
                            <IoMdPhonePortrait   className="w-[18px] h-[18px]" />
                        </div>
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Celular"
                            className="form-input w-full text-base p-3 pl-13"
                            autoComplete="off"
                        />
                    </div>
                    <div className="relative flex align-center w-full">
                        <div className="absolute left-6 top-4 z-1">
                            <FiMessageSquare className="w-[18px] h-[18px]" />
                        </div>
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Asunto"
                            className="form-input w-full text-base p-3 pl-13"
                            autoComplete="off"
                        />
                    </div>
                    <div className="relative flex align-center w-full">
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Tu mensaje"
                            className="form-textarea w-full text-base p-3 pl-11"
                            rows="4"
                            required
                        ></textarea>
                    </div>

                    <div className="flex justify-center items-center w-full">
                        <button type="submit" className="reset-button inline-flex justify-center items-center px-8 py-3 text-xl mr-6">
                        <span>Resetear</span>
                            <IoReload className="ml-2" />
                        </button>
                        <button type="submit" className="submit-button inline-flex justify-center items-center px-8 py-3 text-xl">
                        <span>Enviar mensaje</span>
                            <FiSend className="ml-2" />
                        </button>
                    </div>
                </form>

                <div className="color-dots">
                    <div className="dot dot-1"></div>
                    <div className="dot dot-2"></div>
                    <div className="dot dot-3"></div>
                    <div className="dot dot-4"></div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default PopupContacto;
