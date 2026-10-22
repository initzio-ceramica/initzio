import { site } from "./site";
import type { Product } from "./products";


export function buildWhatsappMessageLink(message: string, customLink?: string): string {
  if (customLink) return customLink;
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${site.whatsappNumber}?text=${encoded}`;
}


export function buildWhatsappLink(product: Product): string {
  return buildWhatsappMessageLink(product.whatsappMessage, product.customLink);
}

export function scrollToSection(sectionId: string): void {
  const el = document.getElementById(sectionId);
  if (!el) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({
    behavior: prefersReducedMotion ? "auto" : "smooth",
    block: "start",
  });
}

export function pad2(n: number): string {
  return String(n + 1).padStart(2, "0");
}
