/**
 * ─────────────────────────────────────────────────────────────
 * CONFIGURACIÓN DE EVENTOS Y TALLERES
 * ─────────────────────────────────────────────────────────────
 * Contenido de la sección "Cómo funciona" (timeline de 4 pasos),
 * la lista de "Ideal para" (tipos de evento) y las imágenes de
 * fondo rotativas del Hero y de la sección de Eventos.
 */

export interface ProcessStep {
  /** Número de paso, se muestra como "01", "02", etc. */
  order: number;
  /** Título corto del paso */
  title: string;
  /** Descripción de una o dos oraciones */
  description: string;
  /** Imagen que ilustra el paso */
  image: string;
}

/** Los 4 pasos de "Una experiencia simple y completa" */
export const processSteps: ProcessStep[] = [
  {
    order: 1,
    title: "Elegimos el proyecto",
    description:
      "Hablamos sobre el tipo de evento, la cantidad de personas y la duración. Juntos diseñamos la experiencia ideal para vos.",
    image:
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=800&auto=format&fit=crop",
  },
  {
    order: 2,
    title: "Llevamos materiales",
    description:
      "Transportamos todo lo necesario: arcilla, herramientas, mesas, delantales y todos los insumos para que la experiencia sea completa.",
    image:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=800&auto=format&fit=crop",
  },
  {
    order: 3,
    title: "Creamos juntos",
    description:
      "Ana y su equipo guían paso a paso a cada invitado, adaptándose al nivel y al ritmo de cada uno. Acá no hay experiencia previa necesaria.",
    image:
      "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?q=80&w=800&auto=format&fit=crop",
  },
  {
    order: 4,
    title: "Te llevás tu pieza",
    description:
      "Al finalizar, cada invitado se lleva su creación, como recuerdo único de una experiencia compartida.",
    image:
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=800&auto=format&fit=crop",
  },
];

/** Tipos de evento listados en "Ideal para", separados por punto medio en pantalla */
export const eventTypes: string[] = [
  "Cumpleaños",
  "Casamientos",
  "Despedidas",
  "Reuniones",
  "Eventos de marcas",
  "Celebraciones",
];


export const heroImages: string[] = [
  "/Hero/DSC_5081.jpg",
  "/Hero/DSC_5047.jpg",
  "/Hero/DSC_5111.jpg"
];


export const eventsImages: string[] = [
  "/Talleres/4.png",
  "/Talleres/5.png",
  "/Talleres/6.png",
  "/Talleres/7.png",
  "/Talleres/9.png",
  "/Talleres/10.png",
];
