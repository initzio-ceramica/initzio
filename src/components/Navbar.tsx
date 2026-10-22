import { useState } from "react";
import { site, instagramUrl } from "../config/site";
import type { Theme } from "../config/site";
import { scrollToSection } from "../config/utils";

interface NavbarProps {
  theme: Theme;
  onToggleTheme: () => void;
}

/**
 * ─────────────────────────────────────────────────────────────
 * Navbar
 * ─────────────────────────────────────────────────────────────
 * Header fijo (sticky) con logo, navegación principal y link a
 * Instagram. En mobile colapsa a un menú desplegable.
 */
export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [open, setOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    setOpen(false);
    scrollToSection(sectionId);
  };

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <button
          type="button"
          className="navbar__logo"
          onClick={() => handleNavClick("inicio")}
          aria-label={`${site.brandName} — volver al inicio`}
        >
          
          <span className="navbar__logo-text" >{site.brandName}</span>
        </button>

        <nav className="navbar__nav" aria-label="Navegación principal">
          <ul className="navbar__links">
            {site.navLinks.map((link) => (
              <li key={link.sectionId}>
                <button type="button" onClick={() => handleNavClick(link.sectionId)}>
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar__actions">
          <a
            className="navbar__icon-link"
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Abrir Instagram de Initzio"
          >
            <InstagramIcon />
          </a>

          <button
            type="button"
            className="navbar__theme-toggle"
            role="switch"
            aria-checked={theme === "dark"}
            aria-label={`Cambiar a tema ${theme === "dark" ? "claro" : "oscuro"}`}
            onClick={onToggleTheme}
          >
            <span className="navbar__theme-icon" aria-hidden="true">☀</span>
            <span className="navbar__theme-icon" aria-hidden="true">☾</span>
            <span className="navbar__theme-thumb" />
          </button>

          <button
            type="button"
            className="navbar__toggle"
            aria-expanded={open}
            aria-controls="navbar-mobile-menu"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <nav
        id="navbar-mobile-menu"
        className={`navbar__mobile ${open ? "navbar__mobile--open" : ""}`}
        aria-label="Navegación principal (mobile)"
      >
        <ul>
          {site.navLinks.map((link) => (
            <li key={link.sectionId}>
              <button type="button" onClick={() => handleNavClick(link.sectionId)}>
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  );
}
