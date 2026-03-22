'use client'

import { useState } from "react";

const WHATSAPP_NUMBER = "YOUR_WHATSAPP_NUMBER";
const CONTACT_EMAIL = "hello@fixmia.com";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi!%20I'd%20like%20to%20book%20a%20pickup%20for%20my%20device.`;
const WHATSAPP_URL_ES = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola!%20Quiero%20reservar%20un%20recogido%20para%20mi%20dispositivo.`;

const content = {
  en: {
    nav: {
      services: "Services",
      howItWorks: "How It Works",
      areas: "Areas",
      contact: "Contact",
      book: "Book Pickup",
    },
    hero: {
      tagline: "WE FIX IT. PERIOD.",
      desc: "Miami's mobile electronics repair — we come to you. No store visits. No waiting.",
      cta1: "Book a Pickup — WhatsApp",
      cta2: "See What We Fix",
    },
    services: {
      title: "WHAT WE FIX",
      items: [
        { name: "Phones", sub: "Screen, battery, charging port, water damage & more." },
        { name: "Laptops & Computers", sub: "Screen, keyboard, RAM upgrades, virus removal & more." },
        { name: "Tablets", sub: "iPad & Android — screen, battery, ports & more." },
        { name: "Game Consoles", sub: "PS5, Xbox, Switch — HDMI, disk drives & more." },
        { name: "Smartwatches", sub: "Apple Watch & others — screen & battery." },
        { name: "Something Else?", sub: "If it has a screen, we probably fix it. Just ask." },
      ],
    },
    howItWorks: {
      title: "HOW IT WORKS",
      sub: "Simple. Fast. At your door.",
      steps: [
        { number: "01", title: "HIT US UP", desc: "WhatsApp or email. Tell us what's broken and where you're at." },
        { number: "02", title: "WE COME TO YOU", desc: "We pick it up from your home, office — wherever you are." },
        { number: "03", title: "WE FIX IT. PERIOD.", desc: "Fast diagnosis, quality repair. We keep you posted." },
        { number: "04", title: "BACK IN YOUR HANDS", desc: "We drop it off. Done. No store, no wait, no stress." },
      ],
      cta: "Get Started — It's Free to Ask",
    },
    areas: {
      title: "WHERE WE ROLL",
      sub: "Serving Miami-Dade County — more areas coming soon.",
    },
    contact: {
      title: "HIT US UP",
      sub: "Ready to fix it? We respond within the hour.",
      whatsapp: "WhatsApp Us",
      email: "Email Us",
    },
    footer: "WE FIX IT. PERIOD.",
  },
  es: {
    nav: {
      services: "Servicios",
      howItWorks: "Cómo Funciona",
      areas: "Áreas",
      contact: "Contacto",
      book: "Reservar",
    },
    hero: {
      tagline: "LO ARREGLAMOS. PUNTO.",
      desc: "Reparación móvil de electrónica en Miami — venimos a ti. Sin tiendas. Sin esperar.",
      cta1: "Reservar — WhatsApp",
      cta2: "Ver Qué Reparamos",
    },
    services: {
      title: "QUÉ REPARAMOS",
      items: [
        { name: "Teléfonos", sub: "Pantallas, batería, puertos, daño por agua y más." },
        { name: "Laptops y Computadoras", sub: "Pantalla, teclado, RAM, eliminación de virus y más." },
        { name: "Tabletas", sub: "iPad y Android — pantalla, batería, puertos y más." },
        { name: "Consolas de Juegos", sub: "PS5, Xbox, Switch — HDMI, lectores y más." },
        { name: "Relojes Inteligentes", sub: "Apple Watch y otros — pantalla y batería." },
        { name: "¿Algo Más?", sub: "Si tiene pantalla, probablemente lo arreglamos. Pregúntanos." },
      ],
    },
    howItWorks: {
      title: "CÓMO FUNCIONA",
      sub: "Simple. Rápido. En tu puerta.",
      steps: [
        { number: "01", title: "ESCRÍBENOS", desc: "WhatsApp o email. Dinos qué está roto y dónde estás." },
        { number: "02", title: "VAMOS A TI", desc: "Recogemos el dispositivo en tu casa, oficina — donde estés." },
        { number: "03", title: "LO ARREGLAMOS. PUNTO.", desc: "Diagnóstico rápido, reparación de calidad. Te mantenemos informado." },
        { number: "04", title: "DE VUELTA EN TUS MANOS", desc: "Te lo entregamos. Listo. Sin tienda, sin espera, sin estrés." },
      ],
      cta: "Empieza — Preguntar es Gratis",
    },
    areas: {
      title: "DÓNDE LLEGAMOS",
      sub: "Servimos Miami-Dade — más áreas próximamente.",
    },
    contact: {
      title: "ESCRÍBENOS",
      sub: "¿Listo para arreglarlo? Respondemos en menos de una hora.",
      whatsapp: "WhatsApp",
      email: "Correo Electrónico",
    },
    footer: "LO ARREGLAMOS. PUNTO.",
  },
};

const areaBgs = ["#FF6B35", "#FFD600", "#00C2CB", "#0d0d0d", "#FF6B35", "#FFD600"];
const areaText = ["#fff", "#0d0d0d", "#0d0d0d", "#FFD600", "#fff", "#0d0d0d"];
const serviceBgs = ["#00C2CB", "#FFD600", "#FF6B35", "#0d0d0d", "#00C2CB", "#FF6B35"];
const serviceText = ["#0d0d0d", "#0d0d0d", "#fff", "#FFD600", "#0d0d0d", "#fff"];

const areas = ["Downtown Miami", "Miami Beach", "Hialeah", "Coral Gables", "Doral", "South Miami"];

export default function Home() {
  const [lang, setLang] = useState<"en" | "es">("en");
  const t = content[lang];
  const whatsappLink = lang === "en" ? WHATSAPP_URL : WHATSAPP_URL_ES;

  return (
    <main className="min-h-screen bg-white text-[#0d0d0d]">

      {/* NAV */}
      <nav className="bg-[#0d0d0d] px-4 py-3 border-b-4 border-[#FFD600] flex items-center justify-between">
        {/* Left: logo */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <div className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0">
            <img src="/logo.jpeg" alt="FixMia Logo" className="w-full h-full object-cover scale-[2.35] object-center" />
          </div>
          <span className="font-bebas text-white text-2xl tracking-widest">FIXMIA</span>
        </div>
        {/* Center: nav links (desktop only) */}
        <div className="hidden md:flex items-center justify-center gap-6">
          <a href="#services" className="font-bebas text-white text-lg tracking-widest hover:text-[#FFD600] transition-colors">{t.nav.services}</a>
          <a href="#how-it-works" className="font-bebas text-white text-lg tracking-widest hover:text-[#FFD600] transition-colors">{t.nav.howItWorks}</a>
          <a href="#areas" className="font-bebas text-white text-lg tracking-widest hover:text-[#FFD600] transition-colors">{t.nav.areas}</a>
          <a href="#contact" className="font-bebas text-white text-lg tracking-widest hover:text-[#FFD600] transition-colors">{t.nav.contact}</a>
        </div>
        {/* Right: language toggle + book */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={() => setLang(lang === "en" ? "es" : "en")}
            className="font-bebas text-base tracking-widest px-2 py-1 border-2 border-[#FFD600] text-[#FFD600] hover:bg-[#FFD600] hover:text-[#0d0d0d] transition-colors"
          >
            {lang === "en" ? "ES" : "EN"}
          </button>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="font-bebas bg-[#FFD600] text-[#0d0d0d] text-sm md:text-base tracking-widest px-3 py-2 border-2 border-[#0d0d0d] md:border-3 shadow-[3px_3px_0px_#FFD600] hover:translate-x-[1px] hover:translate-y-[1px] transition-transform whitespace-nowrap">
            {t.nav.book}
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#FF6B35] border-b-4 border-[#0d0d0d]">
        <div className="absolute inset-0 sunray opacity-30 pointer-events-none" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 flex flex-col items-center text-center">
          <div className="w-36 h-36 rounded-full overflow-hidden flex-shrink-0 border-4 border-[#0d0d0d] shadow-[6px_6px_0px_#0d0d0d] mb-6">
            <img src="/logo.jpeg" alt="FixMia Logo" className="w-full h-full object-cover scale-[2.35] object-center" />
          </div>
          <h1 className="font-bebas text-[7rem] md:text-[10rem] leading-none text-white text-stroke tracking-tight mb-2">
            FIXMIA
          </h1>
          <p className="font-bebas text-3xl md:text-5xl text-[#FFD600] text-stroke-sm tracking-widest mb-4">
            {t.hero.tagline}
          </p>
          <p className="text-white text-lg md:text-xl max-w-xl font-medium mb-0">
            {t.hero.desc}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center mt-10">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-bold text-xl">
              📲 {t.hero.cta1}
            </a>
            <a href="#services" className="btn-bold-white text-xl">
              {t.hero.cta2}
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-bebas text-6xl md:text-7xl text-center tracking-wide mb-10">{t.services.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.services.items.map((s, i) => (
              <div key={i} className="card-bold p-6" style={{ backgroundColor: serviceBgs[i], color: serviceText[i] }}>
                <h3 className="font-bebas text-3xl tracking-wide mb-1">{s.name}</h3>
                <p className="text-sm opacity-80 leading-relaxed">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-16 px-6 bg-[#0d0d0d]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-bebas text-6xl md:text-7xl text-center text-white tracking-wide mb-2">{t.howItWorks.title}</h2>
          <p className="text-center text-gray-400 mb-10 text-lg">{t.howItWorks.sub}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {t.howItWorks.steps.map((step) => (
              <div key={step.number} className="bg-white card-bold p-6">
                <div className="font-bebas text-6xl text-[#FF6B35] leading-none mb-2">{step.number}</div>
                <h3 className="font-bebas text-2xl tracking-wide mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-bold text-xl">
              {t.howItWorks.cta}
            </a>
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section id="areas" className="py-16 px-6 bg-[#00C2CB]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-bebas text-6xl md:text-7xl mb-2 tracking-wide text-[#0d0d0d]">{t.areas.title}</h2>
          <p className="text-[#0d0d0d] mb-10 text-lg font-medium">{t.areas.sub}</p>
          <div className="flex flex-wrap justify-center gap-3">
            {areas.map((area, i) => (
              <span key={area} className="font-bebas text-xl tracking-wide px-6 py-2 card-bold" style={{ backgroundColor: areaBgs[i], color: areaText[i] }}>
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 px-6 bg-[#FFD600] border-t-4 border-[#0d0d0d]">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-bebas text-6xl md:text-7xl mb-2 tracking-wide">{t.contact.title}</h2>
          <p className="text-[#0d0d0d] mb-10 text-lg font-medium">{t.contact.sub}</p>
          <div className="flex flex-col gap-4">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-bold-white text-2xl">
              {t.contact.whatsapp}
            </a>
            <a href={`mailto:${CONTACT_EMAIL}`} className="btn-bold-white text-2xl">
              {t.contact.email}
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0d0d0d] text-white py-8 px-6 text-center border-t-4 border-[#FFD600]">
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
            <img src="/logo.jpeg" alt="FixMia Logo" className="w-full h-full object-cover scale-[2.35] object-center" />
          </div>
          <span className="font-bebas text-2xl tracking-widest">FIXMIA</span>
        </div>
        <p className="text-gray-400 text-sm mb-1">{t.footer}</p>
        <p className="text-gray-600 text-xs">© {new Date().getFullYear()} FixMia. Miami, FL.</p>
      </footer>

    </main>
  );
}
