import Image from "next/image";

const WHATSAPP_NUMBER = "YOUR_WHATSAPP_NUMBER"; // e.g. 13051234567 (no + or dashes)
const CONTACT_EMAIL = "hello@fixmia.com"; // replace with your Cloudflare email

const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi!%20I'd%20like%20to%20book%20a%20pickup%20for%20my%20device.`;

const services = [
  { icon: "📱", name: "Phones", desc: "Screen replacements, battery, charging port, water damage & more." },
  { icon: "💻", name: "Laptops & Computers", desc: "Screen repairs, keyboard, RAM upgrades, virus removal & more." },
  { icon: "📟", name: "Tablets", desc: "iPad & Android tablet screen, battery, and port repairs." },
  { icon: "🎮", name: "Game Consoles", desc: "PS4, PS5, Xbox, Nintendo Switch — HDMI, disk drive & more." },
  { icon: "⌚", name: "Smartwatches", desc: "Screen and battery replacements for Apple Watch & others." },
];

const steps = [
  { number: "01", title: "Contact Us", desc: "Reach out via WhatsApp or email. Tell us what's wrong with your device and where you're located." },
  { number: "02", title: "We Pick It Up", desc: "We come to your home, office, or wherever you are in our service area — at a time that works for you." },
  { number: "03", title: "We Fix It", desc: "Our technicians diagnose and repair your device. We'll keep you updated along the way." },
  { number: "04", title: "We Drop It Off", desc: "Once fixed, we bring it back to you. No store visits, no hassle." },
];

const areas = [
  "Downtown Miami", "Miami Beach", "Hialeah", "Coral Gables", "Doral", "South Miami",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#1a1a2e]">

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src="/logo.jpeg" alt="FixMia Logo" width={40} height={40} className="rounded-full" />
          <span className="font-bold text-xl text-[#1a1a2e]">FixMia</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#services" className="hover:text-[#E8614A] transition-colors">Services</a>
          <a href="#how-it-works" className="hover:text-[#E8614A] transition-colors">How It Works</a>
          <a href="#areas" className="hover:text-[#E8614A] transition-colors">Service Areas</a>
          <a href="#contact" className="hover:text-[#E8614A] transition-colors">Contact</a>
        </div>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#E8614A] hover:bg-[#d0503a] text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors"
        >
          Book a Pickup
        </a>
      </nav>

      {/* HERO */}
      <section className="pt-28 pb-20 px-6 text-center bg-gradient-to-b from-[#fff5ee] to-white">
        <div className="max-w-3xl mx-auto">
          <Image
            src="/logo.jpeg"
            alt="FixMia Logo"
            width={120}
            height={120}
            className="rounded-full mx-auto mb-6 shadow-lg"
          />
          <h1 className="text-5xl md:text-6xl font-black mb-4 leading-tight">
            Fix<span className="text-[#E8614A]">Mia</span>
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-[#3AADA8] mb-3">
            We pick up, fix up, drop off.
          </p>
          <p className="text-gray-500 text-lg mb-8 max-w-xl mx-auto">
            Miami&apos;s mobile electronics repair service. We come to you — no store visits, no waiting in line.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#E8614A] hover:bg-[#d0503a] text-white font-bold px-8 py-4 rounded-full text-lg transition-colors shadow-md"
            >
              📲 Book a Pickup on WhatsApp
            </a>
            <a
              href="#services"
              className="border-2 border-[#3AADA8] text-[#3AADA8] hover:bg-[#3AADA8] hover:text-white font-bold px-8 py-4 rounded-full text-lg transition-colors"
            >
              See What We Fix
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-3">What We Fix</h2>
          <p className="text-center text-gray-500 mb-12">Modern devices — phones, laptops, consoles, and more.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.name}
                className="bg-[#fff5ee] rounded-2xl p-6 border border-orange-100 hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-3">{s.icon}</div>
                <h3 className="text-lg font-bold mb-2">{s.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
            {/* CTA card */}
            <div className="bg-[#E8614A] rounded-2xl p-6 flex flex-col justify-between text-white">
              <div>
                <div className="text-4xl mb-3">🔧</div>
                <h3 className="text-lg font-bold mb-2">Something Else?</h3>
                <p className="text-orange-100 text-sm leading-relaxed">
                  Not sure if we fix it? Just ask — we&apos;ll let you know.
                </p>
              </div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 bg-white text-[#E8614A] font-bold text-sm px-4 py-2 rounded-full text-center hover:bg-orange-50 transition-colors"
              >
                Ask Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-20 px-6 bg-[#f0fafa]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-3">How It Works</h2>
          <p className="text-center text-gray-500 mb-12">Simple, fast, and done at your door.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {steps.map((step) => (
              <div key={step.number} className="bg-white rounded-2xl p-6 shadow-sm border border-teal-50">
                <div className="text-4xl font-black text-[#3AADA8] opacity-30 mb-2">{step.number}</div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#3AADA8] hover:bg-[#2e9490] text-white font-bold px-8 py-4 rounded-full text-lg transition-colors shadow-md inline-block"
            >
              Get Started — It&apos;s Free to Ask
            </a>
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section id="areas" className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-3">Service Areas</h2>
          <p className="text-gray-500 mb-10">We currently serve the following areas in Miami-Dade County.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {areas.map((area) => (
              <span
                key={area}
                className="bg-[#fff5ee] border border-orange-200 text-[#E8614A] font-semibold px-5 py-2 rounded-full text-sm"
              >
                📍 {area}
              </span>
            ))}
          </div>
          <p className="text-gray-400 text-sm mt-8">
            Don&apos;t see your area? Message us — we&apos;re expanding.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-b from-[#fff5ee] to-white">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-3">Get in Touch</h2>
          <p className="text-gray-500 mb-10">
            Ready to get your device fixed? Reach out and we&apos;ll get back to you fast.
          </p>
          <div className="flex flex-col gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe59] text-white font-bold px-8 py-4 rounded-2xl text-lg transition-colors shadow-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="flex items-center justify-center gap-3 border-2 border-[#E8614A] text-[#E8614A] hover:bg-[#E8614A] hover:text-white font-bold px-8 py-4 rounded-2xl text-lg transition-colors"
            >
              ✉️ Email Us
            </a>
          </div>
          <p className="text-gray-400 text-sm mt-6">We typically respond within 1 hour.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1a1a2e] text-white py-10 px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Image src="/logo.jpeg" alt="FixMia Logo" width={32} height={32} className="rounded-full" />
          <span className="font-bold text-lg">FixMia</span>
        </div>
        <p className="text-gray-400 text-sm mb-1">We pick up, fix up, drop off.</p>
        <p className="text-gray-500 text-xs">© {new Date().getFullYear()} FixMia. Miami, FL. All rights reserved.</p>
      </footer>

    </main>
  );
}
