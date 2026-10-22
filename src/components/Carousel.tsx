import { useCallback, useEffect, useRef, useState } from "react";
import { products } from "../config/products";
import { buildWhatsappMessageLink } from "../config/utils";
import ProductCard from "./ProductCard";

/**
 * ─────────────────────────────────────────────────────────────
 * Carousel ("Piezas que cuentan historias")
 * ─────────────────────────────────────────────────────────────
 * Slider horizontal de productos con:
 * - scroll nativo con snap (funciona con swipe/trackpad tal cual).
 * - flechas prev/next que animan el scroll a mano, con loop infinito.
 * - una barra de progreso continua (no puntos), que refleja tanto el
 *   swipe manual como los clicks en las flechas.
 * - un contador "01 / 0N" que se recalcula solo según `products`.
 */

/** Convierte un índice a formato "01" */
function pad(n: number): string {
  return String(n).padStart(2, "0");
}

/** easeInOutQuad — arranca y frena suave, pero corre rápido en el medio */
function easeInOutQuad(t: number): number {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

export default function Carousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLElement | null>>([]);
  const animationRef = useRef<number | null>(null);
  const total = products.length;

  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState({ left: 0, width: 100 / Math.max(total, 1) });

  const updateFromScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const maxScroll = track.scrollWidth - track.clientWidth;

    // índice activo: la card cuyo borde izquierdo está más cerca del scroll actual
    let closest = 0;
    let closestDistance = Infinity;
    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      const distance = Math.abs(card.offsetLeft - track.scrollLeft);
      if (distance < closestDistance) {
        closestDistance = distance;
        closest = i;
      }
    });

    // En pantallas donde se ven varias cards a la vez (desktop), la última
    // card puede no tener espacio para desplazarse hasta su offsetLeft
    // exacto: el navegador clampea el scroll antes de llegar ahí. Sin este
    // chequeo, "closest" nunca marca el último índice y el botón "→" queda
    // trabado pensando que falta una card más.
    if (maxScroll > 0 && track.scrollLeft >= maxScroll - 1) {
      closest = total - 1;
    }

    setActiveIndex(closest);

    // barra de progreso continua
    const fraction = maxScroll > 0 ? track.scrollLeft / maxScroll : 0;
    const barWidth = Math.max(100 / total, 12);
    setProgress({ left: fraction * (100 - barWidth), width: barWidth });
  }, [total]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(updateFromScroll);
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    updateFromScroll();
    return () => {
      track.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [updateFromScroll]);

  useEffect(() => {
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  /**
   * Anima el scroll del carrusel a mano (en vez de dejarlo en manos del
   * navegador) para que la duración sea siempre la misma, corta y prolija,
   * sin importar si el salto es a la card de al lado o un salto largo de
   * vuelta al principio (loop infinito).
   *
   * Mientras dura la animación, se desactiva el `scroll-snap` del track:
   * si lo dejamos activo, el navegador intenta "snapear" a la card más
   * cercana en paralelo a nuestra animación por frame, y esas dos fuerzas
   * compitiendo entre sí es lo que se sentía como tirones/saltos.
   */
  const animateScrollTo = (target: number, duration: number) => {
    const track = trackRef.current;
    if (!track) return;
    if (animationRef.current) cancelAnimationFrame(animationRef.current);

  

    track.style.scrollSnapType = "none";

    // clampeamos el destino al máximo scrolleable real: en desktop, donde
    // se ven varias cards a la vez, el offsetLeft de la última card puede
    // superar lo que el track puede desplazarse.
    const maxScroll = track.scrollWidth - track.clientWidth;
    const clampedTarget = Math.max(0, Math.min(target, maxScroll));

    

    const start = track.scrollLeft;
    const change = clampedTarget - start;
    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const t = Math.min(elapsed / duration, 1);
      track.scrollLeft = start + change * easeInOutQuad(t);
      if (t < 1) {
        animationRef.current = requestAnimationFrame(step);
      } else {
        animationRef.current = null;
        // restauramos el snap normal para que el swipe manual siga
        // encajando en cada card como antes
        track.style.scrollSnapType = "";
      }
    };
    animationRef.current = requestAnimationFrame(step);
  };

const goTo = (index: number) => {
  const card = cardRefs.current[index];
  if (!card) return;
  animateScrollTo(card.offsetLeft, 380);
};

const goNext = () => {
  const track = trackRef.current;
  if (!track) return;
  const maxScroll = track.scrollWidth - track.clientWidth;
  const atEnd = track.scrollLeft >= maxScroll - 1;

  if (atEnd) {
    animateScrollTo(0, 380);
  } else {
    goTo(Math.min(activeIndex + 1, total - 1));
  }
};

const goPrev = () => {
  const track = trackRef.current;
  if (!track) return;
  const maxScroll = track.scrollWidth - track.clientWidth;
  const atStart = track.scrollLeft <= 1;

  if (atStart) {
    animateScrollTo(maxScroll, 380);
  } else {
    goTo(Math.max(activeIndex - 1, 0));
  }
};
  if (total === 0) return null;

  return (
    <section id="productos" className="carousel-section" aria-label="Catálogo de piezas">
      <img src="/plant1.svg" className="carousel-section__background-plant" alt="planta" />
      <div className="contenedor-carrusel">
        <div className="section-head">
          <div className="section-head__intro">
            <p className="section-head__eyebrow">Nuestra selección</p>
            <h2 className="section-head__title">Piezas que cuentan historias</h2>
          </div>

          <div className="section-head__aside">
            <a
              className="section-head__link"
              href={buildWhatsappMessageLink("Hola! Quiero ver el catálogo completo de piezas.")}
              target="_blank"
              rel="noreferrer"
            >
              Ver todos los productos <span aria-hidden="true">→</span>
            </a>
            <span className="section-head__count" aria-hidden="true">
              {pad(activeIndex + 1)} / {pad(total)}
            </span>
          </div>
        </div>

        <div className="carousel">
          <div className="carousel__track" ref={trackRef} role="list">
            {products.map((product, i) => (
              <ProductCard
                key={product.id}
                product={product}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
              />
            ))}
          </div>

          <div className="carousel__controls">
            <button
              type="button"
              className="carousel__arrow-btn"
              onClick={goPrev}
              aria-label="Pieza anterior"
            >
              ←
            </button>

            <div className="carousel__progress">
              <div
                className="carousel__progress-bar"
                style={{ left: `${progress.left}%`, width: `${progress.width}%` }}
              />
            </div>

            <button
              type="button"
              className="carousel__arrow-btn"
              onClick={goNext}
              aria-label="Pieza siguiente"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
