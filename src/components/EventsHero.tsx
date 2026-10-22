import BackgroundSlider from "./BackgroundSlider";
import { eventsImages } from "../config/events";
import { buildWhatsappMessageLink } from "../config/utils";

/**
 * ─────────────────────────────────────────────────────────────
 * EventsHero ("Tu evento. Nuestras manos. Una pieza para recordar.")
 * ─────────────────────────────────────────────────────────────
 * Bloque de dos columnas: copy + CTA a la izquierda, imagen
 * rotativa (con el mismo contador "01 — 0N" del Hero) a la derecha.
 */
export default function EventsHero() {
  return (
    <section id="eventos" className="events-hero" aria-label="Eventos y experiencias">
      <div className="events-hero__content">
        <p className="section-head__eyebrow">Eventos &amp; experiencias</p>
        <h2 className="events-hero__title">
          Tu evento.
          <br />
          Nuestras manos.
          <br />
          Una pieza para recordar.
        </h2>
        <p className="events-hero__copy">
          Llevamos la experiencia de la cerámica a tu evento. Creamos un espacio donde tus
          invitados pueden ensuciarse las manos, aprender, compartir y llevarse su propia pieza.
        </p>
        <a
          className="btn-solid"
          href={buildWhatsappMessageLink(
            "Hola! Quiero llevar cerámica a mi evento, ¿me pasás más información?",
          )}
          target="_blank"
          rel="noreferrer"
        >
          Quiero llevar cerámica a mi evento
          <span aria-hidden="true"> →</span>
        </a>
      </div>

      <div className="events-hero__media">
        <BackgroundSlider
          images={eventsImages}
          alt="Piezas de cerámica cruda recién torneadas"
        />
      </div>
    </section>
  );
}
