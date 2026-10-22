export interface Product {
  id: string;
  name: string;
  image: string;
  price?: string;
  detail?: string;
  whatsappMessage: string;
  customLink?: string;
}

/**
 * ─────────────────────────────────────────────────────────────
 * PRODUCTOS DEL CARRUSEL
 * ─────────────────────────────────────────────────────────────
 * El carrusel muestra automáticamente TODOS los productos de esta lista,
 * en el mismo orden. Agregá o quitá objetos y el contador (01 / 0N),
 * las flechas y el indicador de progreso se actualizan solos.
 *
 * No hay un máximo fijo: si cargás 3 productos el carrusel tiene 3,
 * si cargás 8 tiene 8.
 *
 * Nota: son piezas individuales (productos reales), no categorías.
 * Reemplazá `image` por las fotos definitivas de cada pieza cuando
 * las tengas (se recomienda foto cuadrada o 4:5, buena luz natural).
 */
export const products: Product[] = [
  {
    id: "taza-esmalte-crudo",
    name: "Taza Esmalte Crudo",
    image:
      "https://images.unsplash.com/photo-1614963326505-843c4ba8e4ed?q=80&w=1200&auto=format&fit=crop",
    price: "$ 18.000",
    detail: "Gres · 300 ml",
    whatsappMessage: "Hola! Me interesa la Taza Esmalte Crudo, ¿me contás si tenés en stock?",
  },
  {
    id: "florero-organico",
    name: "Florero Orgánico",
    image:
      "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?q=80&w=1200&auto=format&fit=crop",
    price: "$ 28.000",
    detail: "Arcilla blanca · 24 cm",
    whatsappMessage: "Hola! Quiero consultar por el Florero Orgánico, ¿tenés disponible?",
  },
  {
    id: "bowl-verde-musgo",
    name: "Bowl Verde Musgo",
    image:
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=1200&auto=format&fit=crop",
    price: "$ 22.000",
    detail: "Gres esmaltado · 18 cm",
    whatsappMessage: "Hola! Me gustaría saber más sobre el Bowl Verde Musgo.",
  },
  {
    id: "farol-calado",
    name: "Farol Calado",
    image:
      "https://images.unsplash.com/photo-1616627561950-9f746e330187?q=80&w=1200&auto=format&fit=crop",
    price: "$ 15.000",
    detail: "Arcilla roja · 20 cm",
    whatsappMessage: "Hola! Me interesa el Farol Calado, ¿está disponible?",
  },
  {
    id: "vasija-tierra",
    name: "Vasija Tierra",
    image:
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=1200&auto=format&fit=crop",
    price: "$ 42.000",
    detail: "Gres · 28 cm",
    whatsappMessage: "Hola! Me interesa la Vasija Tierra, ¿me contás si tenés en stock?",
  },
  {
    id: "jarra-doble-asa",
    name: "Jarra Doble Asa",
    image:
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=1200&auto=format&fit=crop",
    price: "$ 38.500",
    detail: "Arcilla blanca · 24 cm",
    whatsappMessage: "Hola! Quiero consultar por la Jarra Doble Asa, ¿tenés disponible?",
  },
];
