import { Sidebar } from "@/components/docs/sidebar"

const typeScale = [
  { name: "H1", size: "60px", lineHeight: "70px", weight: "500", font: "Gabarito", usage: "Hero / display headings" },
  { name: "H2", size: "48px", lineHeight: "54px", weight: "500", font: "Gabarito", usage: "Section headings" },
  { name: "H3", size: "32px", lineHeight: "36px", weight: "500", font: "Gabarito", usage: "Card headings" },
  { name: "H4", size: "24px", lineHeight: "30px", weight: "500", font: "Gabarito", usage: "Sub-headings" },
  { name: "Body lg", size: "18px", lineHeight: "28px", weight: "400", font: "Gabarito", usage: "Lead paragraph" },
  { name: "Body", size: "16px", lineHeight: "26px", weight: "400", font: "Gabarito", usage: "Default body text" },
  { name: "Body sm", size: "15px", lineHeight: "26px", weight: "400", font: "Gabarito", usage: "Secondary body" },
  { name: "Label lg", size: "16px", lineHeight: "20px", weight: "500", font: "Gabarito", usage: "Button text, labels" },
  { name: "Label sm", size: "14px", lineHeight: "20px", weight: "500", font: "Geist", usage: "Small labels, tags" },
  { name: "Caption", size: "12px", lineHeight: "18px", weight: "400", font: "Geist", usage: "Helper text, captions" },
]

export default function TypographyPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 px-10 py-10 max-w-4xl">
        <div className="mb-10">
          <p className="text-sm text-muted-foreground mb-1 font-mono">foundations / typography</p>
          <h1 className="text-3xl font-semibold text-foreground mb-3">Typography</h1>
          <p className="text-muted-foreground leading-relaxed">
            Peerlo uses <strong>Gabarito</strong> for all brand and body text, and <strong>Geist</strong> for small UI labels and code.
          </p>
        </div>

        {/* Font families */}
        <section className="mb-12 grid grid-cols-2 gap-6">
          <div className="rounded-2xl border border-border bg-card p-6">
            <p className="text-xs font-mono text-muted-foreground mb-3">Font / family / brand</p>
            <p className="text-5xl font-medium mb-2" style={{ fontFamily: "var(--font-gabarito, Gabarito, sans-serif)" }}>Gabarito</p>
            <p className="text-sm text-muted-foreground">Headings · Body · Buttons</p>
            <p className="mt-4 text-sm text-muted-foreground font-mono">400 · 500 · 600 · 700</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <p className="text-xs font-mono text-muted-foreground mb-3">Font / family / ui</p>
            <p className="text-5xl font-medium mb-2 font-mono">Geist</p>
            <p className="text-sm text-muted-foreground">Small labels · Tags · Code</p>
            <p className="mt-4 text-sm text-muted-foreground font-mono">400 · 500</p>
          </div>
        </section>

        {/* Type scale */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-foreground mb-5">Type scale</h2>
          <div className="rounded-2xl border border-border overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted">
                  <th className="text-left px-4 py-3 font-medium text-muted-foreground">Style</th>
                  <th className="text-left px-4 py-3 font-medium text-muted-foreground">Preview</th>
                  <th className="text-left px-4 py-3 font-medium text-muted-foreground">Size / LH</th>
                  <th className="text-left px-4 py-3 font-medium text-muted-foreground">Font</th>
                </tr>
              </thead>
              <tbody>
                {typeScale.map((row, i) => (
                  <tr key={row.name} className={`border-b border-border ${i % 2 === 0 ? "bg-card" : "bg-muted/30"}`}>
                    <td className="px-4 py-4">
                      <p className="font-mono text-xs text-muted-foreground">{row.name}</p>
                      <p className="text-xs text-muted-foreground/60 mt-0.5">{row.usage}</p>
                    </td>
                    <td className="px-4 py-4">
                      <p style={{ fontSize: Math.min(parseInt(row.size), 36) + "px", fontWeight: row.weight, lineHeight: "1.2", fontFamily: row.font === "Geist" ? "var(--font-geist-mono, monospace)" : "var(--font-gabarito, Gabarito, sans-serif)" }}>
                        Peerlo
                      </p>
                    </td>
                    <td className="px-4 py-4 font-mono text-xs text-muted-foreground">
                      {row.size} / {row.lineHeight}
                    </td>
                    <td className="px-4 py-4 font-mono text-xs text-muted-foreground">{row.font} {row.weight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  )
}
