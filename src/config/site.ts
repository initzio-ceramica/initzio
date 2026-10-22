export interface NavLink {
  label: string;
  sectionId: string;
}

export type Theme = "light" | "dark";

export const site = {
  brandName: "Initzio",
  whatsappNumber: "+5493516418153",
  instagramHandle: "initzio.ceramica",
  navLinks: [
    { label: "Inicio", sectionId: "inicio" },
    { label: "Productos", sectionId: "productos" },
    { label: "Personalizados", sectionId: "personalizados" },
    { label: "Talleres & Eventos", sectionId: "eventos" },
  ] as NavLink[],
  footerLinks: [
    { label: "Cerámica", sectionId: "productos" },
    { label: "Arte", sectionId: "personalizados" },
    { label: "Experiencias", sectionId: "eventos" },
  ] as NavLink[],
};

export const instagramUrl = `https://instagram.com/${site.instagramHandle}`;
