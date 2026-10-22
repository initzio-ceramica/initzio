import type { ReactElement } from "react";
import { buildWhatsappMessageLink } from "../config/utils";

/**
 * ─────────────────────────────────────────────────────────────
 * CustomOrder ("Tu idea, en cerámica")
 * ─────────────────────────────────────────────────────────────
 * Bloque de dos columnas: foto de proceso (torno) a la izquierda,
 * copy + lista de beneficios + CTA de WhatsApp a la derecha.
 */

interface Benefit {
  label: string;
  icon: ReactElement;
}

const benefits: Benefit[] = [
  { label: "Diseños a medida", icon: <RulerIcon /> },
  { label: "Colores personalizados", icon: <PaletteIcon /> },
  { label: "Para regalar o para vos", icon: <GiftIcon /> },
];

export default function CustomOrder() {
  return (
    <section id="personalizados" className="section-custom-order">
      <img src="/plant2.svg" className="custom-section__background-plant" alt="planta" />
      <div  className="custom-order" aria-label="Pedidos personalizados">
        <div className="custom-order__media">
          <img
            src="/CustomOrder/2.png"
            alt="Torno"
            loading="lazy"
          />
        </div>

        <div className="custom-order__content">
          <p className="section-head__eyebrow">Piezas Personalizadas</p>
          <h2 className="custom-order__title">Tu idea, en cerámica</h2>
          <p className="custom-order__copy">
            ¿Tenés una idea en mente? Podemos crear juntos una pieza única, con la forma, color o
            diseño que quieras. Ya sea para regalar, decorar o simplemente porque te gusta.
          </p>

          <a
            className="btn-solid boton-custom-order"
            href={buildWhatsappMessageLink(
              "Hola! Quiero hacer un pedido personalizado, ¿me contás cómo funciona?",
            )}
            target="_blank"
            rel="noreferrer"
          >
            Solicitar un pedido
            <span aria-hidden="true"> →</span>
          </a>
        </div>

        <ul className="custom-order__benefits">
          {benefits.map((b) => (
            <li key={b.label}>
              <span className="custom-order__benefit-icon" aria-hidden="true">
                {b.icon}
              </span>
              <span>{b.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function RulerIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <rect
        x="3"
        y="8"
        width="18"
        height="8"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path d="M7 8v3M11 8v3M15 8v3" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

function PaletteIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <path
        d="M12 3.5a8.2 8.2 0 1 0 0 16.4c1 0 1.7-.8 1.7-1.7 0-.5-.2-.9-.5-1.2-.3-.3-.5-.7-.5-1.2 0-.9.8-1.7 1.7-1.7H16a4.5 4.5 0 0 0 4.5-4.5C20.5 6 16.7 3.5 12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <circle cx="8" cy="10.5" r="1" fill="currentColor" />
      <circle cx="11.5" cy="7.5" r="1" fill="currentColor" />
      <circle cx="15.5" cy="9" r="1" fill="currentColor" />
    </svg>
  );
}

function GiftIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <rect x="4" y="9" width="16" height="11" rx="1" stroke="currentColor" strokeWidth="1.2" />
      <path d="M4 9h16M12 9v11" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M12 9S9.5 4.5 7 5.5C4.8 6.4 6.5 9 12 9Zm0 0s2.5-4.5 5-3.5c2.2.9.5 3.5-5 3.5Z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  );
}
