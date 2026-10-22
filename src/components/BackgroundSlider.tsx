import { useEffect, useState } from "react";
import { pad2 } from "../config/utils";

interface Props {
  /** Lista de URLs de imagen a rotar como fondo */
  images: string[];
  /** Texto alternativo genérico para las imágenes de fondo (decorativas) */
  alt: string;
  /** Milisegundos entre cada cambio automático de imagen. Default: 6000 */
  intervalMs?: number;
}

/**
 * ─────────────────────────────────────────────────────────────
 * BackgroundSlider
 * ─────────────────────────────────────────────────────────────
 * Fondo de imagen con crossfade automático y el indicador "01 — 0N"
 * que aparece en el Hero y en la sección de Eventos del diseño.
 *
 * - Avanza sola cada `intervalMs`, en loop.
 * - Se pausa mientras el mouse/foco está sobre el contenedor.
 * - Si el usuario prefiere "reduced motion", no autoavanza y
 *   directamente muestra la primera imagen fija.
 * - Las imágenes son puramente decorativas (el contenido real de
 *   la sección va por encima, en un <div> hermano), por eso llevan
 *   `alt=""` y `aria-hidden`.
 */
export default function BackgroundSlider({ images, intervalMs = 6000 }: Props) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = images.length;

  // useState con inicializador perezoso: se evalúa una sola vez, en el
  // primer render, sin volver a leer `window.matchMedia` en cada re-render.
  const [prefersReducedMotion] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    if (total <= 1 || paused || prefersReducedMotion) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [total, paused, intervalMs, prefersReducedMotion]);

  if (total === 0) return null;

  return (
    <div
      className="bg-slider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {images.map((src, i) => (
        <div
          key={src + i}
          className="bg-slider__slide"
          style={{
            backgroundImage: `url(${src})`,
            opacity: i === index ? 1 : 0,
          }}
          aria-hidden="true"
        />
      ))}

      {total > 1 && (
        <div className="bg-slider__counter" aria-hidden="true">
          <span>{pad2(index)}</span>
          <span className="bg-slider__counter-line" />
          <span>{pad2(total - 1)}</span>
        </div>
      )}
    </div>
  );
}
