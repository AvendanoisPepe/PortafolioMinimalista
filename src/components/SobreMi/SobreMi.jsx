import './SobreMi.scss';
const SobreMi = () => {
    return (
        <section className="SobreMi w-full flex flex-col items-center justify-between gap-6 md:flex-row md:p-10">
            <div className="primero w-[32%] p-6 flex items-center justify-center flex-wrap">
                <h3>Inicios</h3>
                <p>
                    Empece desde el 2019 cuando no tenia ninguna idea de lo que queria hacer, se me dio la oportunidad de estudiar
                    gracias a mi hermanos y programas gratuitos, inicialmente era horrible y muy complicado para mi, mas el tiempo y la
                    necesidad de completar el desafio me llevaron al dia de hoy, me dedico de forma muy satisfactoria a mi trabajo.
                </p>
            </div>
            <div className="segundo w-[32%] p-6 flex items-center justify-center flex-wrap">
                <h3>Objetivo actual</h3>
                <p>
                    En lo personal me apasiona mucho mas el desarrollo forntend que el backend, mas igual combinarlo le da el toque de innovacion, ya que
                    la logica siempre permitira generar cosas muy variadas, sea una interfaz, un sistema completo o un aplicativo, doy todo lo que puedo 
                    por aprender y hacer que mis desarrollos y los clientes se sientan confiados en que su desarrollo tendra la mejor calidad posible.
                </p>
            </div>
            <div className="tercero w-[32%] p-6 flex items-center justify-center flex-wrap">
                <h3>Pasatiempos</h3>
                <p>
                    Como programar requiere estar sentado mucho tiempo, mi tiempo libre debe ser muy motriz, en este caso el deporte y el ejerciio es la
                    mejor manera para mantener mi cuerpo y mente en calma, en conjunto con que leer libros es demasiado relajante y entretenido, como mi misma 
                    pasion por el anime y el manga.
                </p>
            </div>
        </section>
    );
};

export default SobreMi;