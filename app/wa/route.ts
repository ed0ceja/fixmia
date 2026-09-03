import { NextRequest, NextResponse } from "next/server";
import { getCloudflareContext } from "@opennextjs/cloudflare";

// Always run at request time — never cache/prerender this redirect.
export const dynamic = "force-dynamic";

// The real WhatsApp number, in wa.me format (country code + number, digits only).
// +1 305 784 7648 -> 13057847648. It lives here on the server, never on the page.
const WHATSAPP_NUMBER = "13057847648";

const PREFILL: Record<"en" | "es", string> = {
  en: "Hi! I'd like to book a pickup for my device.",
  es: "Hola! Quiero reservar un recogido para mi dispositivo.",
};

/**
 * Tracked WhatsApp redirect.
 *
 * Every "Book Pickup" / "WhatsApp Us" button points here (e.g. /wa?lang=en&src=hero).
 * We count the click in Cloudflare KV, then 302-redirect to the real WhatsApp chat.
 * Counting is best-effort: if KV isn't configured yet, we still redirect, so the
 * buttons can never break.
 */
export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const lang: "en" | "es" = url.searchParams.get("lang") === "es" ? "es" : "en";
  // Which button was clicked — sanitized, capped, used only as a counter label.
  const src = (url.searchParams.get("src") || "unknown")
    .replace(/[^a-z0-9_-]/gi, "")
    .slice(0, 32) || "unknown";

  const target = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(PREFILL[lang])}`;

  try {
    const { env } = getCloudflareContext();
    // Typed loosely so the build doesn't require @cloudflare/workers-types.
    const kv = (env as unknown as { CLICKS?: KVLike }).CLICKS;
    if (kv) {
      const now = new Date();
      // Group "days" by Miami local time so the owner's dashboard matches their day.
      const day = new Intl.DateTimeFormat("en-CA", {
        timeZone: "America/New_York",
      }).format(now); // YYYY-MM-DD

      const read = async (k: string) =>
        parseInt((await kv.get(k)) || "0", 10) || 0;

      const [total, langCount, dayCount, srcCount, rawLog] = await Promise.all([
        read("total"),
        read(`lang:${lang}`),
        read(`day:${day}`),
        read(`src:${src}`),
        kv.get("log"),
      ]);

      let log: Array<{ t: string; lang: string; src: string }> = [];
      try {
        log = rawLog ? JSON.parse(rawLog) : [];
      } catch {
        log = [];
      }
      log.unshift({ t: now.toISOString(), lang, src });

      await Promise.all([
        kv.put("total", String(total + 1)),
        kv.put(`lang:${lang}`, String(langCount + 1)),
        kv.put(`day:${day}`, String(dayCount + 1)),
        kv.put(`src:${src}`, String(srcCount + 1)),
        kv.put("last", now.toISOString()),
        kv.put("log", JSON.stringify(log.slice(0, 100))),
      ]);
    }
  } catch {
    // KV unavailable (not set up, or dev without bindings) — redirect anyway.
  }

  return NextResponse.redirect(target, 302);
}

// Minimal shape of the Cloudflare KV binding we use.
interface KVLike {
  get(key: string): Promise<string | null>;
  put(key: string, value: string): Promise<void>;
}
