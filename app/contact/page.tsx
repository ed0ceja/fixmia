'use client'

import { useState, FormEvent } from "react";

const WEB3FORMS_KEY = "e7e1095f-254e-450c-ae81-635234863e8c";
const WHATSAPP_NUMBER = "YOUR_WHATSAPP_NUMBER";

const content = {
  en: {
    nav: "Back to FixMia",
    title: "HIT US UP",
    sub: "Tell us what's broken. We respond within the hour.",
    name: "Your Name",
    email: "Your Email",
    phone: "Your Phone (optional)",
    device: "What device needs fixing?",
    message: "Describe the issue",
    submit: "SEND IT",
    loading: "SENDING...",
    success: {
      title: "GOT IT.",
      body: "We'll hit you back within the hour. Keep an eye on your inbox.",
      whatsapp: "Prefer WhatsApp?",
    },
    error: "Something went wrong. Try again or WhatsApp us directly.",
    whatsapp: "Or WhatsApp Us",
  },
  es: {
    nav: "Volver a FixMia",
    title: "ESCRÍBENOS",
    sub: "Dinos qué está roto. Respondemos en menos de una hora.",
    name: "Tu Nombre",
    email: "Tu Correo",
    phone: "Tu Teléfono (opcional)",
    device: "¿Qué dispositivo necesita reparación?",
    message: "Describe el problema",
    submit: "ENVIAR",
    loading: "ENVIANDO...",
    success: {
      title: "¡RECIBIDO.",
      body: "Te respondemos en menos de una hora. Revisa tu correo.",
      whatsapp: "¿Prefieres WhatsApp?",
    },
    error: "Algo salió mal. Inténtalo de nuevo o escríbenos por WhatsApp.",
    whatsapp: "O Escríbenos por WhatsApp",
  },
};

export default function ContactPage() {
  const [lang, setLang] = useState<"en" | "es">("en");
  const t = content[lang];
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi!%20I'd%20like%20to%20book%20a%20pickup.`;

  const [form, setForm] = useState({ name: "", email: "", phone: "", device: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `FixMia — New repair request from ${form.name}`,
          ...form,
        }),
      });
      const data = await res.json();
      setStatus(data.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="min-h-screen bg-[#FF6B35]">

      {/* NAV */}
      <nav className="bg-[#0d0d0d] px-6 py-3 border-b-4 border-[#FFD600] flex items-center justify-between">
        <a href="https://fixmia.com" className="font-bebas text-white text-2xl tracking-widest hover:text-[#FFD600] transition-colors">
          ← {t.nav}
        </a>
        <button
          onClick={() => setLang(lang === "en" ? "es" : "en")}
          className="font-bebas text-base tracking-widest px-2 py-1 border-2 border-[#FFD600] text-[#FFD600] hover:bg-[#FFD600] hover:text-[#0d0d0d] transition-colors"
        >
          {lang === "en" ? "ES" : "EN"}
        </button>
      </nav>

      {/* FORM CARD */}
      <div className="flex items-center justify-center min-h-[calc(100vh-60px)] px-4 py-12">
        <div className="w-full max-w-lg">

          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="font-bebas text-7xl md:text-8xl text-white text-stroke tracking-tight leading-none mb-2">
              {t.title}
            </h1>
            <p className="text-white font-medium text-lg">{t.sub}</p>
          </div>

          {status === "success" ? (
            <div className="card-bold bg-[#0d0d0d] p-10 text-center">
              <div className="font-bebas text-6xl text-[#FFD600] mb-3">{t.success.title}</div>
              <p className="text-white text-lg mb-8">{t.success.body}</p>
              <p className="text-gray-400 text-sm mb-4">{t.success.whatsapp}</p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-bold text-xl"
              >
                WhatsApp
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="card-bold bg-white p-8 flex flex-col gap-4">
              <input
                type="text"
                placeholder={t.name}
                required
                value={form.name}
                onChange={e => setForm(s => ({ ...s, name: e.target.value }))}
                className="w-full border-2 border-[#0d0d0d] px-4 py-3 font-medium text-[#0d0d0d] placeholder-gray-400 focus:outline-none focus:border-[#FF6B35]"
              />
              <input
                type="email"
                placeholder={t.email}
                required
                value={form.email}
                onChange={e => setForm(s => ({ ...s, email: e.target.value }))}
                className="w-full border-2 border-[#0d0d0d] px-4 py-3 font-medium text-[#0d0d0d] placeholder-gray-400 focus:outline-none focus:border-[#FF6B35]"
              />
              <input
                type="tel"
                placeholder={t.phone}
                value={form.phone}
                onChange={e => setForm(s => ({ ...s, phone: e.target.value }))}
                className="w-full border-2 border-[#0d0d0d] px-4 py-3 font-medium text-[#0d0d0d] placeholder-gray-400 focus:outline-none focus:border-[#FF6B35]"
              />
              <input
                type="text"
                placeholder={t.device}
                required
                value={form.device}
                onChange={e => setForm(s => ({ ...s, device: e.target.value }))}
                className="w-full border-2 border-[#0d0d0d] px-4 py-3 font-medium text-[#0d0d0d] placeholder-gray-400 focus:outline-none focus:border-[#FF6B35]"
              />
              <textarea
                placeholder={t.message}
                rows={4}
                value={form.message}
                onChange={e => setForm(s => ({ ...s, message: e.target.value }))}
                className="w-full border-2 border-[#0d0d0d] px-4 py-3 font-medium text-[#0d0d0d] placeholder-gray-400 focus:outline-none focus:border-[#FF6B35] resize-none"
              />
              {status === "error" && (
                <p className="text-[#FF6B35] font-medium text-sm">{t.error}</p>
              )}
              <button
                type="submit"
                disabled={status === "loading"}
                className="btn-bold text-xl w-full disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "loading" ? t.loading : t.submit}
              </button>
              <div className="text-center mt-2">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bebas text-lg tracking-widest text-[#0d0d0d] underline underline-offset-4 hover:text-[#FF6B35] transition-colors"
                >
                  {t.whatsapp}
                </a>
              </div>
            </form>
          )}
        </div>
      </div>

    </main>
  );
}
