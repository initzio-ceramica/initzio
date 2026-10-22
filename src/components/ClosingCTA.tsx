import { buildWhatsappMessageLink } from "../config/utils";

/**
 * ─────────────────────────────────────────────────────────────
 * ClosingCTA ("Hagamos algo que tus invitados puedan llevarse a casa")
 * ─────────────────────────────────────────────────────────────
 * Cierre de la página antes del footer: fondo oscuro con textura,
 * mensaje final y CTA de WhatsApp para consultar por un evento.
 */
export default function ClosingCTA() {
  return (
    <section className="closing-cta" aria-label="Consultanos por tu evento">
      <img src="/plant3.svg" className="lastcta-section__background-plant3" alt="planta" />
      <img src="/plant4.svg" className="lastcta-section__background-plant4" alt="planta" />
      <div className="">
        <svg
          className="closing-cta__wave"
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,0 L0,28 C 240,52 480,4 720,18 C 960,32 1200,54 1440,22 L1440,0 Z"
            fill="currentColor"
          />
        </svg>
        
        <div className="closing-cta__content">
          <h2 className="closing-cta__title">
            Hagamos algo que tus invitados puedan llevarse a casa.
          </h2>
          <p className="closing-cta__copy">
            Una experiencia diferente, creativa y significativa para hacer de tu evento un momento
            inolvidable.
          </p>
          <a
            className="btn-outline btn-outline--light boton-cta"
            href={buildWhatsappMessageLink("Hola! Quiero consultar por mi evento con Initzio.")}
            target="_blank"
            rel="noreferrer"
          >
            Consultar por mi evento
            <span aria-hidden="true"> →</span>
          </a>
        </div>
      </div>
    </section>
  );
}
