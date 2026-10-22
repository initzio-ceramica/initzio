import BackgroundSlider from "./BackgroundSlider";
import { heroImages } from "../config/events";
import { scrollToSection } from "../config/utils";

/**
 * ─────────────────────────────────────────────────────────────
 * Hero
 * ─────────────────────────────────────────────────────────────
 * Primera sección de la landing: fondo fotográfico rotativo,
 * eyebrow "Cerámica con alma", título principal y CTA hacia el
 * catálogo de productos.
 */
export default function Hero() {
  return (
    <section id="inicio" className="hero" aria-label="Presentación">
      <BackgroundSlider images={heroImages} alt="Piezas de cerámica hechas a mano" />

      <div className="hero__content">
        <p className="hero__eyebrow">Cerámica con alma</p>
        <h1 className="hero__title">
          Piezas únicas,
          <br />
          hechas a mano
        </h1>
        <p className="hero__copy">
          Cada pieza nace de un proceso creativo íntimo, donde moldear, tocar y transformar la tierra, la marca para siempre.
        </p>
        <button
          type="button"
          className="btn-solid"
          onClick={() => scrollToSection("productos")}
        >
          Ver productos
          <span aria-hidden="true"> →</span>
        </button>
      </div>
    </section>
  );
}
