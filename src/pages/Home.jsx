import img from "../assets/imagenes/yop.png";
import { Link } from "react-router-dom";
import "./home.scss";
function Home() {
  return (
    <section className="Inicio w-full flex flex-col items-center justify-center gap-8 md:flex-row md:p-16">
      <div className="textual w-full  space-y-8 md:w-[60%]">
        <h1 className="font-light tracking-tight md:text-4xl 2xl:text-5xl">
          <span className="font-bold">Portafolio</span> Minimalista
        </h1>

        <div className="textualUno space-y-4">
          <p className="leading-relaxed text-lg 2xl:text-2xl">
            Bienvenido a mi portafolio minimalista en proceso (Versión 1.2.0),
            esta es la segunda versión de mi portafolio, la idea es correr el
            riesgo con estilos minimalistas para ver cómo nos va y salir de la
            zona de conform.
          </p>

          <p className="textualDos text-sm italic pl-4 py-1 2xl:text-lg">
            Entre más diferente sea el desarrollo, más interés me genera, todo
            sea por la anécdota.
          </p>
        </div>

        <div className="otroP pt-6">
          <Link href="/v1">
            <button className="px-6 py-3 transition-colors rounded-none tracking-wide md:w-[46%] 2xl:w-[50%] md:text-sm 2xl:text-2xl">
              Portafolio Versión 1.0.0
            </button>
          </Link>
        </div>
      </div>

      <div className="derecha w-full relative md:w-[30%]">
        <div className="unidad relative mx-auto md:w-[320px] 2xl:w-[420px] h-[380px] md:h-[420px] 2xl:h-[520px]">
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
    // DESCRIPCION COMENTARIOS PLAN INICIAL OBJETIVO ACTUAL FUERA DE LA SILLA
  );
}

export default Home;
