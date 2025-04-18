// components/PopupContacto.jsx
import "./popupContacto.scss";
import { IoMdPhonePortrait  } from "react-icons/io";
import { IoClose, IoReload } from "react-icons/io5";
import { FiUser, FiMail, FiMessageSquare, FiSend } from "react-icons/fi";
import { useState } from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

function PopupContacto({ isOpen, onClose }) {
    // Estados de cada campo para el color de validación
    const [nombreCompleto, setNombreCompleto] = useState('')
    const [telefono, setTelefono] = useState('')
    const [correo, setCorreo] = useState('')
    const [asunto, setAsunto] = useState('')
    const [mensaje, setMensaje] = useState('')

    const [validaciones, setValidaciones] = useState({
        nombreCompleto: null,
        correo: null,
        asunto: null,
        mensaje: null,
    })

    const validacionesP = () => {
        const newValidaciones = {
            nombreCompleto: nombreCompleto.length > 0,
            correo: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo),
            asunto: asunto.length > 0,
            mensaje: mensaje.length > 0,
        };
        setValidaciones(newValidaciones);
        return Object.values(newValidaciones).every(Boolean); // Retorna true si todas las validaciones son correctas
    };
    const envioCorreo = (e) => {
        e.preventDefault();

        if (validacionesP()) {
            emailjs
            .sendForm(
                "service_p0isud6",
                "template_ptdu5mc",
                e.target,
                "BSr2O9OTJrxx6wDbI"
            )
            .then(
                () => {
                    toast.success("Correo enviado exitosamente ✉️", {
                    duration: 6000,
                    style: {
                        fontSize: "18px",
                        padding: "16px",
                        background: "#f0fdf4",
                        color: "#065f46",
                        border: "2px solid #34d399",
                        width: "800px",
                        textAlign: "center"
                    },
                    });
                    resetForm();
                },
                (error) => {
                    toast.error(`Error al enviar correo: ${error.text}`, {
                    duration: 8000,
                    style: {
                        fontSize: "16px",
                        background: "#fef2f2",
                        color: "#991b1b",
                        border: "2px solid #fca5a5",
                    },
                    });
                }
                );

        } else {
            Swal.fire({
            icon: "error",
            title: "Por favor, completa todos los campos correctamente.",
            });
        }
    };
    if (!isOpen) return null;
    const resetForm = () => {
        setNombreCompleto("");
        setCorreo("");
        setAsunto("");
        setMensaje("");
        setTelefono("");
        setValidaciones({
            nombreCompleto: null,
            correo: null,
            asunto: null,
            mensaje: null,
        });
    };
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
                <form onSubmit={envioCorreo} className="space-y-6 flex justify-between align-center flex-wrap">
                    <div className="relative flex align-center w-full">
                        <div className="absolute left-6 top-4 z-1">
                            <FiUser className="w-[18px] h-[18px]" />
                        </div>
                        <input
                            type="text"
                            name="nombre_completo"
                            value={nombreCompleto}
                            onChange={e => setNombreCompleto(e.target.value)}
                            placeholder="Nombre"
                            className="form-input w-full text-base p-3 pl-13"
                            required
                            autoComplete="off"
                            style={{
										borderColor:
											validaciones.nombreCompleto === null
												? ''
												: validaciones.nombreCompleto
												? 'green'
												: 'red',
									}}
                        />
                    </div>

                    <div className="relative flex align-center w-[49%]">
                        <div className="absolute left-6 top-4 z-1">
                            <FiMail className="w-[18px] h-[18px]" />
                        </div>
                        <input
                            type="email"
                            name="from_email"
                            value={correo}
                            onChange={e => setCorreo(e.target.value)}
                            style={{
                                borderColor:
                                    validaciones.correo === null ? '' : validaciones.correo ? 'green' : 'red',
                            }}
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
                            name="telefono"
                            value={telefono}
                            onChange={e => setTelefono(e.target.value)}
                            style={{
                                borderColor:
                                    validaciones.asunto === null ? '' : validaciones.asunto ? 'green' : 'red',
                            }}
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
                            name="asunto"
                            value={asunto}
                            onChange={e => setAsunto(e.target.value)}
                            style={{
                                borderColor:
                                    validaciones.asunto === null ? '' : validaciones.asunto ? 'green' : 'red',
                            }}
                            placeholder="Asunto"
                            className="form-input w-full text-base p-3 pl-13"
                            autoComplete="off"
                        />
                    </div>
                    <div className="relative flex align-center w-full">
                        <textarea
                            name="mensaje"
                            value={mensaje}
								onChange={e => setMensaje(e.target.value)}
								style={{
									borderColor:
										validaciones.mensaje === null ? '' : validaciones.mensaje ? 'green' : 'red',
								}}
                            placeholder="Tu mensaje"
                            className="form-textarea w-full text-base p-3 pl-11"
                            rows="4"
                            required
                        ></textarea>
                    </div>

                    <div className="flex justify-center items-center w-full">
                        <button type="reset" onClick={resetForm} className="reset-button inline-flex justify-center items-center px-8 py-3 text-xl mr-6">
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
