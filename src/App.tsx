import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Carousel from "./components/Carousel";
import CustomOrder from "./components/CustomOrder";
import EventsHero from "./components/EventsHero";
import HowItWorks from "./components/HowItWorks";
import EventTypes from "./components/EventTypes";
import ClosingCTA from "./components/ClosingCTA";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import type { Theme } from "./config/site";

/**
 * App
 * ─────────────────────────────────────────────────────────────
 * Landing page de una sola página (SPA): compone cada sección
 * en el orden en que aparecen en el diseño. Cada sección es un
 * componente autocontenido con su propio id de anclaje para la
 * navegación interna (ver src/config/site.ts y config/utils.ts).
 */

/*  
Las secciones de 
<EventTypes />
<ClosingCTA />
fueron eliminadas, para restaurarlas simplemente ubicarlas entre  howitworks y main
*/

export default function App() {
  const [theme, setTheme] = useState<Theme>(() =>
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light",
  );
  const [hasManualTheme, setHasManualTheme] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    if (hasManualTheme) return;

    const preference = window.matchMedia("(prefers-color-scheme: dark)");
    const updateTheme = (event: MediaQueryListEvent) => {
      setTheme(event.matches ? "dark" : "light");
    };

    preference.addEventListener("change", updateTheme);
    return () => preference.removeEventListener("change", updateTheme);
  }, [hasManualTheme]);

  const toggleTheme = () => {
    setHasManualTheme(true);
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Carousel />
        <CustomOrder />
        <EventsHero />
        <HowItWorks />
      </main>
      <Footer/>
      <WhatsAppButton />
    </>
  );
}
