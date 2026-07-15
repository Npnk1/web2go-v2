import { ImageResponse } from "next/og";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale } from "@/i18n/locales";

export async function GET(_request: Request, { params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const messages = getDictionary(isLocale(locale) ? locale : "en");

  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", background: "#f5f3ec", color: "#091126", fontFamily: "Arial, sans-serif", padding: "64px" }}>
      <div style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", border: "2px solid rgba(9,17,38,.16)", borderRadius: 18, padding: "42px", background: "#fbfaf7" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 54, height: 54, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 8, background: "#091126", color: "white", fontWeight: 700, fontSize: 24 }}>W</div>
          <div style={{ display: "flex", fontWeight: 700, fontSize: 30 }}>Web<span style={{ color: "#2457f5" }}>2</span>Go</div>
        </div>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 50 }}>
          <div style={{ maxWidth: 820, display: "flex", flexDirection: "column" }}>
            <div style={{ color: "#2457f5", fontSize: 18, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase" }}>{messages.hero.eyebrow}</div>
            <div style={{ marginTop: 24, fontSize: 64, lineHeight: 1.02, fontWeight: 700 }}>{messages.hero.title}</div>
          </div>
          <div style={{ width: 150, height: 150, borderRadius: 16, background: "#2457f5", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: 54, fontWeight: 700 }}>82</div>
        </div>
      </div>
    </div>,
    { width: 1200, height: 630 }
  );
}
