import { eventTypes } from "../config/events";

/**
 * ─────────────────────────────────────────────────────────────
 * EventTypes ("Ideal para")
 * ─────────────────────────────────────────────────────────────
 * Línea de tipos de evento a los que aplica la experiencia,
 * separados por punto medio. Contenido plano, no interactivo.
 */
export default function EventTypes() {
  return (
    <section className="section-ideal-para">
      <div className="event-types" aria-label="Ideal para este tipo de eventos">
        <p className="section-head__eyebrow">— Ideal para</p>
        <div className="event-types__list">
          <p className="event-types__item">
            {eventTypes.map((type, i) => (
              <span key={type}>
                {type}
                {i < eventTypes.length - 1 && <span className="event-types__dot"> · </span>}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
