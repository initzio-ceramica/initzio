# Initzio — Landing Page

SPA de una sola página construida con **Vite + React + TypeScript**, basada en el
diseño de referencia de la landing de Initzio (cerámica hecha a mano).

## Requisitos

- Node.js 20+ (probado en un devcontainer Debian 12 "bookworm")
- npm 10+

## Puesta en marcha

```bash
npm install
npm run dev       # http://localhost:5173
```

## Scripts disponibles

| Script                 | Qué hace                                              |
| ----------------------- | ------------------------------------------------------ |
| `npm run dev`           | Servidor de desarrollo con hot-reload                  |
| `npm run build`         | Type-check (`tsc -b`) + build de producción a `dist/`  |
| `npm run preview`       | Sirve el build de `dist/` localmente                   |
| `npm run lint`          | Corre `oxlint` (linter rápido, incluye reglas de React)|
| `npm run lint:fix`      | Igual que `lint` pero aplica fixes automáticos         |
| `npm run format`        | Formatea todo el proyecto con Prettier                 |
| `npm run format:check`  | Verifica formato sin escribir cambios                  |
| `npm run typecheck`     | Solo type-check, sin build                              |

## Estructura del proyecto

```
src/
├─ main.tsx              # Entry point, monta <App /> en #root
├─ App.tsx                # Compone todas las secciones en orden
├─ index.css              # Importa tokens.css + base.css + CSS de cada sección
│
├─ components/
│  ├─ Navbar.tsx           # Header sticky, nav + menú mobile
│  ├─ Hero.tsx              # Sección "Piezas únicas, hechas a mano"
│  ├─ BackgroundSlider.tsx  # Fondo rotativo reutilizable (Hero y EventsHero)
│  ├─ Carousel.tsx          # Slider de productos (scroll + snap + flechas)
│  ├─ ProductCard.tsx       # Card individual dentro del carrusel
│  ├─ CustomOrder.tsx       # "Tu idea, en cerámica" (pedidos personalizados)
│  ├─ EventsHero.tsx        # "Tu evento. Nuestras manos..."
│  ├─ HowItWorks.tsx        # Timeline "Cómo funciona" (4 pasos)
│  ├─ EventTypes.tsx        # "Ideal para" (tipos de evento)
│  ├─ ClosingCTA.tsx        # CTA final oscuro con wave SVG
│  └─ Footer.tsx            # Pie de página
│
├─ config/
│  ├─ site.ts               # Marca, número de WhatsApp, nav links
│  ├─ products.ts           # Catálogo de productos del carrusel
│  ├─ events.ts             # Pasos del proceso, tipos de evento, imágenes
│  └─ utils.ts               # Helpers: links de WhatsApp, scroll suave, pad2
│
└─ styles/
   ├─ tokens.css             # Paleta, tipografías, escalas, spacing
   ├─ base.css                # Reset + botones + section-head compartido
   └─ *.css                   # Un archivo por sección/componente
```

## Cómo editar contenido

### Productos del carrusel

Editá `src/config/products.ts`. Cada objeto es una pieza individual (no una
categoría): `name`, `image`, `price`, `detail` y `whatsappMessage`. El
carrusel, el contador ("01 / 0N") y la barra de progreso se recalculan
solos según cuántos productos haya en la lista.

```ts
{
  id: "mi-pieza",
  name: "Nombre de la pieza",
  image: "https://... (foto cuadrada o 4:5)",
  price: "$ 20.000",
  detail: "Gres · 22 cm",
  whatsappMessage: "Hola! Me interesa Mi Pieza, ¿está disponible?",
}
```

### Número de WhatsApp / Instagram / links del menú

Editá `src/config/site.ts` (`whatsappNumber`, `instagramHandle`, `navLinks`,
`footerLinks`).

### Pasos del proceso y tipos de evento

Editá `src/config/events.ts` (`processSteps`, `eventTypes`, `heroImages`,
`eventsImages`).

## Notas de implementación

- **Sin CSS-in-JS ni frameworks de UI**: CSS plano con variables (custom
  properties) definidas en `tokens.css`, para que el proyecto sea liviano y
  fácil de tocar sin dependencias extra.
- **Accesibilidad**: foco visible (`:focus-visible`), `aria-label` en
  botones e íconos, `alt` en imágenes de contenido, y `prefers-reduced-motion`
  respetado tanto en el carrusel de productos como en los sliders de fondo.
- **Imágenes**: por ahora usan URLs de Unsplash como placeholder con la
  estética correcta (cerámica, tonos tierra). Reemplazalas por las fotos
  reales del catálogo en `products.ts` y `events.ts` antes de publicar.
- **WhatsApp**: todos los botones de contacto arman un link `wa.me` con un
  mensaje pre-cargado específico de cada sección/producto (ver
  `config/utils.ts`).
