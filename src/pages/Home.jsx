import img from "../assets/imagenes/yop.png";
import { Link } from "react-router-dom";
import "./home.scss";
function Home() {
  return (
    <section className="Inicio w-full flex flex-col md:flex-row items-center justify-center gap-8 md:p-16">
      <div className="textual w-full md:w-[60%] space-y-6">
        <h1 className="md:text-4xl 2xl:text-5xl font-light tracking-tight">
          <span className="font-bold">Portafolio</span> Minimalista
        </h1>

        <div className="space-y-4 text-zinc-600">
          <p className="text-lg 2xl:text-2xl leading-relaxed">
            Bienvenido a mi portafolio minimalista en proceso (Versión 1.2.0),
            esta es la segunda versión de mi portafolio, la idea es correr el
            riesgo con estilos minimalistas para ver cómo nos va y salir de la
            zona de conform.
          </p>

          <p className="text-sm 2xl:text-lg italic border-l-2 border-zinc-300 pl-4 py-1">
            Entre más diferente sea el desarrollo, más interés me genera, todo
            sea por la anécdota.
          </p>
        </div>

        <div className="otroP pt-6">
          <Link href="/v1">
            <button className="px-6 md:w-[46%] 2xl:w-[50%] py-3 text-white hover:bg-zinc-800 transition-colors rounded-none md:text-sm 2xl:text-2xl tracking-wide">
              Portafolio Versión 1.0.0
            </button>
          </Link>
        </div>
      </div>

      <div className="derecha w-full md:w-[30%] relative">
        <div className="unidad relative mx-auto w-[280px] md:w-[320px] 2xl:w-[420px] h-[380px] md:h-[420px] 2xl:h-[520px]">
          {/* Cuadro decorativo superior izquierdo */}
          <div className="cuadrado absolute top-[-40px] left-[-40px] w-[200px] h-[200px] bg-zinc-100 z-0"></div>

          {/* Contenedor de la imagen con borde sutil */}
          <div className="imagen relative z-10 h-full w-full border">
            <div className="relative h-full w-full overflow-hidden">
              <img src={img} alt="" />
            </div>
          </div>

          {/* Cuadro decorativo inferior derecho */}
          <div className="cuadrado absolute bottom-[-40px] right-[-40px] w-[200px] h-[200px] bg-zinc-200 z-0"></div>
        </div>
      </div>
    </section>
    // DESCRIPCION COMENTARIOS PLAN INICIAL OBJETIVO ACTUAL FUERA DE LA SILLA
  );
}

export default Home;
