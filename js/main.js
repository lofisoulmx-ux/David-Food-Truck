/**
 * ============================================================
 * MAIN.JS — Motor de renderizado. No editar entre proyectos.
 * Lee SITE_CONFIG (config.js) y construye cada componente.
 * ============================================================
 */

(function () {
  const cfg = window.SITE_CONFIG;
  if (!cfg) {
    console.error("SITE_CONFIG no encontrado. Revisa que config.js se cargue antes que main.js.");
    return;
  }

  const ARROW_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="19" x2="19" y2="5"></line><polyline points="9 5 19 5 19 15"></polyline></svg>`;

  // ---------- 1. Inyectar tema (colores/fuentes) como variables CSS ----------
  function applyTheme() {
    const t = cfg.theme || {};
    const root = document.documentElement.style;
    if (t.colorBg) root.setProperty("--bg", t.colorBg);
    if (t.colorOverlay) root.setProperty("--overlay", t.colorOverlay);
    if (t.colorText) root.setProperty("--text", t.colorText);
    if (t.colorTextMuted) root.setProperty("--text-muted", t.colorTextMuted);
    if (t.colorAccent) root.setProperty("--accent", t.colorAccent);
    if (t.colorAccentSoft) root.setProperty("--accent-soft", t.colorAccentSoft);
    if (t.fontDisplay) root.setProperty("--font-display", t.fontDisplay);
    if (t.fontBody) root.setProperty("--font-body", t.fontBody);
    document.title = cfg.brand?.name || "Sitio";
  }

  // ---------- 2. Topbar (redes sociales) ----------
  function renderTopbar() {
    const socials = cfg.socials || [];
    const links = socials
      .map((s) => `<a href="${s.url}" target="_blank" rel="noopener">${s.label}</a>`)
      .join("");
    return `
      <div class="topbar">
        <div class="container topbar__inner">${links}</div>
      </div>`;
  }

  // ---------- 3. Header (logo + nav) ----------
  function renderHeader() {
    const nav = (cfg.nav || [])
      .map((item) => `<a href="${item.href}">${item.label}</a>`)
      .join("");
    return `
      <header class="site-header">
        <div class="container site-header__inner">
          <a href="#inicio" class="brand-logo">
            <img src="${cfg.brand.logo}" alt="${cfg.brand.logoAlt || cfg.brand.name}">
          </a>
          <nav class="main-nav">${nav}</nav>
        </div>
      </header>`;
  }

  // ---------- 4. Hero ----------
  function renderHero() {
    const h = cfg.hero;
    return `
      <section id="inicio" class="hero">
        <img class="hero__bg" src="${h.image}" alt="${h.imageAlt || ""}">
        <div class="hero__overlay"></div>
        <div class="hero__content container">
          <p class="hero__eyebrow">${h.eyebrow}</p>
          <h1 class="hero__title">
            ${h.titleLine1}
            <span class="hero__title-accent">${h.titleLine2}</span>
          </h1>
          <p class="hero__description">${h.description}</p>
          <a class="hero__cta" href="${h.ctaHref}">${h.ctaText} ${ARROW_ICON}</a>
        </div>
        <a class="hero__side-label" href="${h.sideHref}">
          <span>${h.sideLabel}</span>
          ${ARROW_ICON}
        </a>
      </section>`;
  }

  // ---------- 5. Galería ----------
  function renderGallery() {
    const g = cfg.gallery;
    if (!g) return "";
    const items = (g.items || [])
      .map(
        (item) => `
        <div class="gallery-item">
          <img src="${item.image}" alt="${item.alt || ""}" loading="lazy">
          ${item.caption ? `<div class="gallery-item__caption">${item.caption}</div>` : ""}
        </div>`
      )
      .join("");
    return `
      <section id="galeria" class="section">
        <div class="container">
          <p class="section__eyebrow">Galería</p>
          <h2 class="section__title">${g.title}</h2>
          <p class="section__description">${g.description}</p>
          <div class="gallery-grid">${items}</div>
        </div>
      </section>`;
  }

  // ---------- 6. Acerca de ----------
  function renderAbout() {
    const a = cfg.about;
    if (!a) return "";
    const stats = (a.stats || [])
      .map(
        (s) => `
        <div class="about-stat">
          <div class="about-stat__value">${s.value}</div>
          <div class="about-stat__label">${s.label}</div>
        </div>`
      )
      .join("");
    return `
      <section id="acerca" class="section">
        <div class="container">
          <p class="section__eyebrow">Acerca de</p>
          <h2 class="section__title">${a.title}</h2>
          <p class="section__description">${a.description}</p>
          <div class="about-stats">${stats}</div>
        </div>
      </section>`;
  }

  // ---------- 7. Contacto ----------
  function renderContact() {
    const c = cfg.contact;
    if (!c) return "";
    return `
      <section id="contacto" class="section contact">
        <div class="container contact__row">
          <div>
            <p class="section__eyebrow">Contacto</p>
            <h2 class="section__title">${c.title}</h2>
            <p class="section__description">${c.description}</p>
          </div>
          <div class="contact__links">
            ${c.email ? `<a href="mailto:${c.email}">${c.email}</a>` : ""}
            ${c.phone ? `<a href="tel:${c.phone.replace(/\s+/g, "")}">${c.phone}</a>` : ""}
            ${c.whatsappUrl ? `<a href="${c.whatsappUrl}" target="_blank" rel="noopener">WhatsApp</a>` : ""}
          </div>
        </div>
      </section>`;
  }

  // ---------- 8. Footer ----------
  function renderFooter() {
    return `
      <footer class="site-footer">
        <div class="container">${cfg.footer?.copyright || ""}</div>
      </footer>`;
  }

  // ---------- Montaje ----------
  function mount() {
    applyTheme();
    const app = document.getElementById("app");
    app.innerHTML =
      renderTopbar() +
      renderHeader() +
      renderHero() +
      renderGallery() +
      renderAbout() +
      renderContact() +
      renderFooter();
  }

  document.addEventListener("DOMContentLoaded", mount);
})();
