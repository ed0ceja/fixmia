import { getCloudflareContext } from "@opennextjs/cloudflare";

export const dynamic = "force-dynamic";

interface KVLike {
  get(key: string): Promise<string | null>;
}

const box: React.CSSProperties = {
  fontFamily: "Inter, system-ui, sans-serif",
  minHeight: "100vh",
  background: "#0d0d0d",
  color: "#fff",
  padding: "48px 20px",
};

function Locked({ message }: { message: string }) {
  return (
    <main style={box}>
      <div style={{ maxWidth: 420, margin: "0 auto" }}>
        <h1 style={{ fontFamily: "Bebas Neue, sans-serif", fontSize: 56, letterSpacing: 4, color: "#FFD600", margin: 0 }}>
          FIXMIA STATS
        </h1>
        <p style={{ color: "#9ca3af", marginBottom: 24 }}>{message}</p>
        <form method="get" style={{ display: "flex", gap: 8 }}>
          <input
            type="password"
            name="key"
            placeholder="Access key"
            style={{ flex: 1, padding: "12px 14px", border: "2px solid #FFD600", background: "#000", color: "#fff", borderRadius: 4 }}
          />
          <button type="submit" style={{ padding: "12px 18px", background: "#FFD600", color: "#0d0d0d", border: "none", fontWeight: 700, borderRadius: 4, cursor: "pointer" }}>
            View
          </button>
        </form>
      </div>
    </main>
  );
}

function Stat({ label, value, accent }: { label: string; value: string | number; accent?: string }) {
  return (
    <div style={{ background: "#161616", border: "2px solid #262626", borderRadius: 8, padding: "20px 22px" }}>
      <div style={{ fontSize: 13, letterSpacing: 1, color: "#9ca3af", textTransform: "uppercase" }}>{label}</div>
      <div style={{ fontFamily: "Bebas Neue, sans-serif", fontSize: 52, lineHeight: 1, color: accent || "#fff", marginTop: 6 }}>{value}</div>
    </div>
  );
}

export default async function StatsPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const sp = await searchParams;
  const key = typeof sp.key === "string" ? sp.key : "";

  let env: Record<string, unknown> = {};
  try {
    env = getCloudflareContext().env as unknown as Record<string, unknown>;
  } catch {
    return <Locked message="Counter isn't running yet — deploy on Cloudflare with the CLICKS KV namespace set up." />;
  }

  const token = env.STATS_TOKEN as string | undefined;
  if (!token) {
    return <Locked message="No access key is set. Run: wrangler secret put STATS_TOKEN" />;
  }
  if (key !== token) {
    return <Locked message="Enter your access key to view click stats." />;
  }

  const kv = env.CLICKS as KVLike | undefined;
  if (!kv) {
    return <Locked message="The CLICKS KV namespace isn't bound yet. See wrangler.toml." />;
  }

  const num = async (k: string) => parseInt((await kv.get(k)) || "0", 10) || 0;

  // Last 7 days (Miami time) for the weekly total + a tiny per-day breakdown.
  const days: string[] = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date(Date.now() - i * 86400000);
    days.push(new Intl.DateTimeFormat("en-CA", { timeZone: "America/New_York" }).format(d));
  }

  const [total, en, es, last, rawLog, ...dayCounts] = await Promise.all([
    num("total"),
    num("lang:en"),
    num("lang:es"),
    kv.get("last"),
    kv.get("log"),
    ...days.map((d) => num(`day:${d}`)),
  ]);

  const week = dayCounts.reduce((a, b) => a + b, 0);
  const today = dayCounts[dayCounts.length - 1];

  let log: Array<{ t: string; lang: string; src: string }> = [];
  try {
    log = rawLog ? JSON.parse(rawLog) : [];
  } catch {
    log = [];
  }

  const fmt = (iso: string | null) =>
    iso
      ? new Intl.DateTimeFormat("en-US", {
          timeZone: "America/New_York",
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "2-digit",
        }).format(new Date(iso))
      : "—";

  const maxDay = Math.max(1, ...dayCounts);

  return (
    <main style={box}>
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <h1 style={{ fontFamily: "Bebas Neue, sans-serif", fontSize: 56, letterSpacing: 4, color: "#FFD600", margin: 0 }}>
          FIXMIA STATS
        </h1>
        <p style={{ color: "#9ca3af", marginTop: 0, marginBottom: 28 }}>WhatsApp click tracker · last click {fmt(last)}</p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 14 }}>
          <Stat label="Total clicks" value={total} accent="#FFD600" />
          <Stat label="Today" value={today} accent="#FF6B35" />
          <Stat label="This week" value={week} accent="#00C2CB" />
          <Stat label="English" value={en} />
          <Stat label="Spanish" value={es} />
        </div>

        <h2 style={{ fontFamily: "Bebas Neue, sans-serif", fontSize: 30, letterSpacing: 2, marginTop: 36, marginBottom: 12 }}>LAST 7 DAYS</h2>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 8, height: 120 }}>
          {days.map((d, i) => (
            <div key={d} style={{ flex: 1, textAlign: "center" }}>
              <div style={{ fontSize: 12, color: "#9ca3af", marginBottom: 4 }}>{dayCounts[i]}</div>
              <div style={{ background: "#FFD600", height: `${(dayCounts[i] / maxDay) * 90}px`, minHeight: 2, borderRadius: 3 }} />
              <div style={{ fontSize: 11, color: "#6b7280", marginTop: 6 }}>{d.slice(5)}</div>
            </div>
          ))}
        </div>

        <h2 style={{ fontFamily: "Bebas Neue, sans-serif", fontSize: 30, letterSpacing: 2, marginTop: 36, marginBottom: 12 }}>RECENT CLICKS</h2>
        {log.length === 0 ? (
          <p style={{ color: "#6b7280" }}>No clicks yet.</p>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {log.slice(0, 30).map((e, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "10px 14px", background: i % 2 ? "#111" : "#161616", borderRadius: 4, fontSize: 14 }}>
                <span style={{ color: "#e5e7eb" }}>{fmt(e.t)}</span>
                <span style={{ color: "#9ca3af" }}>
                  <span style={{ color: "#00C2CB", textTransform: "uppercase" }}>{e.lang}</span> · {e.src}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
