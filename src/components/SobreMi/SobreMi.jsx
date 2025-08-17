import { useEffect, useRef } from "react";
import { FaCode, FaLaptopCode, FaBookReader } from "react-icons/fa";
import "./SobreMi.scss";
import { useGlobal } from "../../context/GlobalContext";
export default function AboutMe() {
    const sectionRefs = [useRef(null), useRef(null), useRef(null)];
    const { sistemaLenguaje } = useGlobal();

    // Efecto para animación al hacer scroll
    useEffect(() => {
        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-fadeIn", "opacity-100");
                entry.target.classList.remove("opacity-0", "translate-y-10");
            }
            });
        },
        { threshold: 0.1 }
        );

        sectionRefs.forEach((ref) => {
        if (ref.current) {
            observer.observe(ref.current);
        }
        });

        return () => {
        sectionRefs.forEach((ref) => {
            if (ref.current) {
            observer.unobserve(ref.current);
            }
        });
        };
    }, []);

    return (
        <section className="SobreMi py-20 px-4 md:px-10">
            <div className="conjunto lg:max-w-[90%] mx-auto">
                <h2 className="text-4xl md:text-4xl xl:text-6xl font-light text-center mb-10">
                    {sistemaLenguaje === "Es" ? <>Sobre <span className="font-bold">Mí</span></> : <>About <span className="font-bold">Me</span></>}
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-6 2xl:gap-8">
                    <div
                        ref={sectionRefs[0]}
                        className="unidad overflow-hidden transition-all duration-600 opacity-0 translate-y-10"
                    >
                        <div className="gradiante h-48 relative overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center opacity-80">
                                <FaCode className="icono text-6xl 2xl:text-7xl" />
                            </div>
                            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent"></div>
                        </div>

                        <div className="contenido p-6 relative">
                            <div className="circulo absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-3">
                                <div className="w-12 h-12 flex items-center justify-center">
                                    <span className="font-medium">01</span>
                                </div>
                            </div>

                            <h3 className="text-2xl lg:text-3xl font-medium text-center mt-6 mb-4">
                                {sistemaLenguaje === "Es" ? "Inicios" : "Beginnings"}                                
                            </h3>
                            <div className="linea w-16 h-1 mx-auto mb-6"></div>

                            <p className="2xl:text-lg leading-relaxed">
                                {sistemaLenguaje === "Es" ? "Empecé desde el 2019 cuando no tenía ninguna idea de lo que quería hacer. Se me dio la oportunidad de estudiar gracias a mis hermanos y programas gratuitos. Inicialmente era horrible y muy complicado para mí, mas el tiempo y la necesidad de completar el desafío me llevaron al día de hoy. Me dedico de forma muy satisfactoria a mi trabajo." : "I started in 2019 when I had no idea what I wanted to do. I was given the opportunity to study thanks to my siblings and free programs. Initially, it was horrible and very complicated for me, but time and the need to complete the challenge led me to today. I am very fulfilling in my work."}                                
                            </p>
                        </div>
                    </div>

                    {/* Objetivo actual */}
                    <div
                        ref={sectionRefs[1]}
                        className="unidad overflow-hidden transition-all duration-300 opacity-0 translate-y-10 md:mt-10"
                        style={{ transitionDelay: "150ms" }}
                    >
                        <div className="gradiante2 h-48 relative overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center opacity-80">
                                <FaLaptopCode className="icono text-6xl 2xl:text-7xl" />
                            </div>
                            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent"></div>
                        </div>

                        <div className="contenido p-6 relative">
                            <div className="circulo absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-3">
                                <div className="w-12 h-12 flex items-center justify-center">
                                    <span className="font-medium">02</span>
                                </div>
                            </div>

                            <h3 className="text-2xl lg:text-3xl font-medium text-center mt-6 mb-4">                                
                                {sistemaLenguaje === "Es" ? "Objetivo actual" : "Current Objective"}                                
                            </h3>
                            <div className="linea w-16 h-1 mx-auto mb-6"></div>

                            <p className="2xl:text-lg leading-relaxed">
                                {sistemaLenguaje === "Es" ? "En lo personal me apasiona mucho más el desarrollo frontend que el backend, mas igual combinarlo le da el toque de innovación. La lógica siempre permitirá generar cosas muy variadas, sea una interfaz, un sistema completo o un aplicativo. Doy todo lo que puedo por aprender y hacer que mis desarrollos y los clientes se sientan confiados en que su desarrollo tendrá la mejor calidad posible." : "Personally, I'm much more passionate about front-end development than back-end development, but combining them gives it a touch of innovation. Logic will always allow you to generate a wide variety of things, be it an interface, a complete system, or an application. I give everything I can to learn and ensure that my developments and clients feel confident that their development will be of the highest possible quality."}                                
                            </p>
                        </div>
                    </div>

                    {/* Pasatiempos */}
                    <div
                        ref={sectionRefs[2]}
                        className="unidad overflow-hidden transition-all duration-300 opacity-0 translate-y-10 md:mt-20"
                        style={{ transitionDelay: "300ms" }}
                    >
                        <div className="gradiante3 h-48  relative overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center opacity-80">
                                <FaBookReader className="icono text-6xl 2xl:text-7xl" />
                            </div>
                        <   div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent"></div>
                        </div>

                        <div className="contenido p-6 relative">
                            <div className="circulo absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-3">
                                <div className="w-12 h-12 flex items-center justify-center">
                                    <span className="font-medium">03</span>
                                </div>
                            </div>

                            <h3 className="text-2xl lg:text-3xl font-medium text-center mt-6 mb-4">                                
                                {sistemaLenguaje === "Es" ? "Pasatiempos" : "Hobbies"}                                                                
                            </h3>
                            <div className="linea w-16 h-1 mx-auto mb-6"></div>

                            <p className="2xl:text-lg leading-relaxed">
                                {sistemaLenguaje === "Es" ? "PasatiemposComo programar requiere estar sentado mucho tiempo, mi tiempo libre debe ser muy motriz. En este caso el deporte y el ejercicio es la mejor manera para mantener mi cuerpo y mente en calma, en conjunto con que leer libros es demasiado relajante y entretenido, como mi misma pasión por el anime y el manga." : "Since programming requires a lot of sitting, my free time must be very active. In this case, sports and exercise are the best ways to keep my body and mind calm, along with the fact that reading books is extremely relaxing and entertaining, just like my passion for anime and manga."}                                
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}