import { processSteps } from "../config/events";
import { pad2 } from "../config/utils";

/**
 * ─────────────────────────────────────────────────────────────
 * HowItWorks ("Una experiencia simple y completa")
 * ─────────────────────────────────────────────────────────────
 * Timeline horizontal de 4 pasos (numerados, porque el contenido
 * realmente es una secuencia): imagen, número, título y descripción,
 * con una flecha entre paso y paso en pantallas grandes.
 */
export default function HowItWorks() {
  return (
    <section className="how-it-works" aria-label="Cómo funciona la experiencia">
      <div className="how-it-works__head">
        <div>
          
          <h2 className="how-it-works__title">¿Cómo funciona?</h2>
        </div>
        
      </div>

      <ol className="how-it-works__steps">
        {processSteps.map((step, i) => (
          <li key={step.order} className="how-it-works__step">
            <figure className="how-it-works__figure">
              <img src={step.image} alt="" loading="lazy" />
            </figure>
            <div className="how-it-works__step-head">
              <span className="how-it-works__step-number">{pad2(i)}</span>
              {i < processSteps.length - 1 && (
                <span className="how-it-works__step-arrow" aria-hidden="true">
                  →
                </span>
              )}
            </div>
            <h3 className="how-it-works__step-title">{step.title}</h3>
            <p className="how-it-works__step-copy">{step.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
