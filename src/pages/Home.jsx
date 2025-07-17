import img from "../assets/imagenes/yop.png";
import { Link } from "react-router-dom";
import "./home.scss";
import { useGlobal } from "../context/GlobalContext";
function Home() {
  const { sistemaLenguaje } = useGlobal();
  
  return (
    <section className="Inicio w-full max-w-screen-2xl mx-auto px-4 flex items-center justify-between gap-8 flex-col lg:flex-row sm:px-8 xl:px-24 md:p-16 overflow-hidden">
      <div className="textual w-full space-y-8 lg:w-[60%] mb-10 mt-10 lg:m-0">
        <h1 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl font-light tracking-tight">
          {sistemaLenguaje === "Es" ? (
            <>
              <span className="font-bold">Portafolio</span> Minimalista
            </>
          ) : (
            <>
              <span className="font-bold">Minimalist</span> Portfolio
            </>
          )}
        </h1>

        <div className="textualUno space-y-6">
          {sistemaLenguaje === "Es" ? (
            <>
              <p className="leading-relaxed text-base sm:text-lg 2xl:text-2xl">
                Bienvenido a mi portafolio minimalista en proceso (Versión
                1.2.0), esta es la segunda versión de mi portafolio, la idea es
                correr el riesgo con estilos minimalistas para ver cómo nos va y
                salir de la zona de conform.
              </p>

              <p className="textualDos leading-relaxed text-base sm:text-lg 2xl:text-xl italic pl-4 py-1">
                Entre más diferente sea el desarrollo, más interés me genera,
                todo sea por la anécdota.
              </p>
            </>
          ) : (
            <>
              <p className="leading-relaxed text-lg 2xl:text-2xl">
                Welcome to my minimalist portfolio in progress (Version 1.2.0),
                this is the second version of my portfolio, the idea is to take
                a risk with minimalist styles to see how we do and get out of
                the comfort zone.
              </p>

              <p className="textualDos text-sm italic pl-4 py-1 2xl:text-lg">
                The more different the development, the more interest it
                generates for me, just for the anecdote.
              </p>
            </>
          )}
        </div>

        <div className="otroP pt-6">
          <Link href="/v1">
            <button className="px-6 py-3 transition-colors rounded-none tracking-wide text-xs sm:text-sm md:text-base 2xl:text-2xl md:w-[46%] 2xl:w-[50%]">
              {sistemaLenguaje === "Es"
                ? "Portafolio Versión 1.0.0"
                : "Portfolio Version 1.0.0"}
            </button>
          </Link>
        </div>
      </div>

      <div className="derecha w-full relative lg:w-[30%] ">
        <div className="unidad relative mx-auto w-[280px] h-[360px] sm:w-[300px] sm:h-[380px] md:w-[380px] md:h-[480px] lg:w-[280px] lg:h-[380px] xl:w-[400px] xl:h-[500px] 2xl:w-[420px] 2xl:h-[520px]">
          <div className="cuadrado absolute top-[-40px] left-[-40px] w-[200px] h-[200px] z-0"></div>

          <div className="imagen relative z-10 h-full w-full border">
            <div className="relative h-full w-full overflow-hidden">
              <img src={img} alt="" />
            </div>
          </div>

          <div className="cuadrado absolute bottom-[-40px] right-[-40px] w-[200px] h-[200px] z-0"></div>
        </div>
      </div>
    </section>
  );
}

export default Home;
