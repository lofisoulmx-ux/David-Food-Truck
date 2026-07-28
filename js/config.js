/**
 * ============================================================
 * CONFIG.JS — Único archivo que debes editar para un proyecto nuevo
 * ============================================================
 * Cambia textos, imágenes, colores, enlaces y logo aquí.
 * No necesitas tocar HTML, CSS ni JS de estructura.
 * ============================================================
 */

const SITE_CONFIG = {

  // ---------- MARCA ----------
  brand: {
    name: "David Food Trailers",
    logo: "assets/logo.png",
    logoAlt: "David Food Trailers",
  },

  // ---------- COLORES (tokens de tema) ----------
  theme: {
    colorBg: "#0c0d0f",          // fondo general (negro azulado)
    colorOverlay: "rgba(8,10,14,0.55)", // overlay sobre el hero
    colorText: "#f4f2ee",        // texto principal (blanco hueso)
    colorTextMuted: "rgba(244,242,238,0.72)",
    colorAccent: "#c98a2c",      // dorado/ámbar (acento, links, líneas)
    colorAccentSoft: "rgba(201,138,44,0.35)",
    fontDisplay: "'Playfair Display', Georgia, serif",
    fontBody: "'Inter', 'Helvetica Neue', Arial, sans-serif",
  },

  // ---------- REDES SOCIALES (barra superior) ----------
  socials: [
    { label: "Instagram", url: "https://instagram.com/" },
    { label: "Facebook", url: "https://www.facebook.com/share/19NSgF3MDu/" },
    { label: "TikTok", url: "https://tiktok.com/" },
  ],

  // ---------- NAVEGACIÓN ----------
  nav: [
    { label: "Inicio", href: "#inicio" },
    { label: "Galería", href: "#galeria" },
    { label: "Acerca de", href: "#acerca" },
  ],

  // ---------- HERO ----------
  hero: {
    image: "assets/hero.jpg",
    imageAlt: "Food trailer personalizado al atardecer",
    eyebrow: "Diseñamos · Fabricamos · Hacemos realidad",
    titleLine1: "Food Trailers",
    titleLine2: "Hechos para tu éxito.", // línea en itálica/acento
    description: "Fabricamos food trailers personalizados con la más alta calidad, funcionalidad y acabados profesionales.",
    ctaText: "Cuéntanos tu proyecto",
    ctaHref: "#contacto",
    sideLabel: "Ver galería",
    sideHref: "#galeria",
  },

  // ---------- GALERÍA ----------
  gallery: {
    title: "Nuestros trabajos",
    description: "Cada trailer es diseñado y construido a la medida del negocio de nuestros clientes.",
    // Agrega/quita objetos aquí. "image" es la ruta del archivo.
    items: [
      { image: "assets/gallery/trailer-vino.jpg", alt: "Food trailer color vino con logo azul", caption: "Trailer color vino" },
      { image: "assets/gallery/trailer-gris.jpg", alt: "Food trailer gris con logo dorado", caption: "Trailer color gris" },
      { image: "assets/gallery/trailer-rojo.jpg", alt: "Food trailer rojo con acabados en aluminio", caption: "Trailer color rojo" },
    ],
  },

  // ---------- ACERCA DE ----------
  about: {
    title: "Construidos para durar.",
    description: "Cada food trailer pasa por un proceso de diseño, ingeniería y fabricación pensado para que tu negocio funcione sin contratiempos, todos los días.",
    stats: [
      { value: "10+", label: "Años de experiencia" },
      { value: "150+", label: "Trailers entregados" },
      { value: "100%", label: "Personalizados" },
    ],
  },

  // ---------- CONTACTO / FOOTER ----------
  contact: {
    title: "Hablemos de tu proyecto.",
    description: "Cuéntanos qué necesitas y te ayudamos a diseñarlo.",
    email: "contacto@davidfoodtrailers.com",
    phone: "+52 000 000 0000",
    whatsappUrl: "https://wa.me/520000000000",
    address: "",
  },

  footer: {
    copyright: "© 2026 David Food Trailers. Todos los derechos reservados.",
  },
};
