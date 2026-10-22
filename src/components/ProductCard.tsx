import { forwardRef } from "react";
import type { Product } from "../config/products";
import { buildWhatsappLink } from "../config/utils";

/**
 * ─────────────────────────────────────────────────────────────
 * ProductCard
 * ─────────────────────────────────────────────────────────────
 * Card individual de una pieza dentro del carrusel: imagen,
 * nombre, detalle/precio opcionales y un botón que abre WhatsApp
 * con un mensaje pre-armado para consultar por esa pieza.
 *
 * Se define con `forwardRef` porque el Carousel necesita medir el
 * `offsetLeft` real de cada card (vía refs) para poder animar el
 * scroll del track hasta la posición exacta de cada una.
 */

interface Props {
  product: Product;
}

const ProductCard = forwardRef<HTMLElement, Props>(function ProductCard({ product }, ref) {
  return (
    <article className="carousel__card" ref={ref} role="listitem">
      <figure className="carousel__figure">
        <img src={product.image} alt={product.name} loading="lazy" />
      </figure>
      <div className="carousel__body">
        <h3 className="carousel__name">{product.name}</h3>
        <div className="carousel__meta">
          {product.detail && <span className="carousel__detail">{product.detail}</span>}
          {product.price && <span className="carousel__price">{product.price}</span>}
        </div>
        <a
          className="btn-outline btn-outline--small"
          href={buildWhatsappLink(product)}
          target="_blank"
          rel="noreferrer"
        >
          Consultar por modelo
        </a>
      </div>
    </article>
  );
});

export default ProductCard;
