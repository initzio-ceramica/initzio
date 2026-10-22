import { Mail, Phone } from "lucide-react";
import { buildWhatsappMessageLink } from "../config/utils";

/**
 * lucide-react no incluye íconos de marcas (los sacaron hace varias
 * versiones por temas de uso de marca registrada), así que este Instagram
 * se dibuja a mano con el mismo estilo que los íconos de lucide: trazo
 * `currentColor`, viewBox 24x24, esquinas redondeadas.
 */
function InstagramIcon({
  className,
  strokeWidth = 1.5,
}: {
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

/**
 * ─────────────────────────────────────────────────────────────
 * Footer
 * ─────────────────────────────────────────────────────────────
 * Franja final del sitio, con foto del taller de fondo y overlay oscuro
 * (independiente del tema claro/oscuro de la web, como un hero final).
 * - Columna izquierda: pregunta + CTA de contacto.
 * - Divisor vertical (horizontal en mobile).
 * - Columna derecha: datos de contacto con íconos.
 * - Hojas decorativas en las esquinas inferiores.
 */

const PHONE_DISPLAY = "+54 351-6418153";
const PHONE_HREF = "+543516418153";
const INSTAGRAM_HANDLE = "@Initzio_Studio";
const INSTAGRAM_HREF = "https://instagram.com/Initzio_Studio";
const EMAIL = "InitzioStudio@gmail.com";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__overlay" aria-hidden="true" />



      <div className="footer__inner">
        <div className="footer__intro">
          <h2 className="footer__title">
            ¿Te gustaría una pieza
            <br />
            de cerámica o un evento?
          </h2>
          <span className="footer__underline" />
          <a
            className="footer__cta"
            href={buildWhatsappMessageLink("Hola! Quiero consultar por una pieza de cerámica.")}
            target="_blank"
            rel="noreferrer"
          >
            Escribinos, estamos para ayudarte.
          </a>
        </div>

        <div className="footer__divider" aria-hidden="true" />

        <ul className="footer__contact">
          <li className="footer__contact-item">
            <Phone className="footer__icon" strokeWidth={1.5} aria-hidden="true" />
            <a href={`tel:${PHONE_HREF}`}>{PHONE_DISPLAY}</a>
          </li>
          <li className="footer__contact-item">
            <InstagramIcon className="footer__icon" strokeWidth={1.5} />
            <a href={INSTAGRAM_HREF} target="_blank" rel="noreferrer">
              {INSTAGRAM_HANDLE}
            </a>
          </li>
          <li className="footer__contact-item">
            <Mail className="footer__icon" strokeWidth={1.5} aria-hidden="true" />
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}