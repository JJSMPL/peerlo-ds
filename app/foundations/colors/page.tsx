import { Sidebar } from "@/components/docs/sidebar"

interface Swatch {
  step: string
  hex: string
  label?: string
  brandName?: string   // named brand color — shown as pill badge
  isPrimary?: boolean  // dot marker for the primary anchor
}

const palette: { name: string; description: string; swatches: Swatch[] }[] = [
  {
    name: "Brand Green",
    description: "Primary brand color. Steps 100, 200, 500, 600 are fixed brand anchors — all other steps are interpolated to blend smoothly between them.",
    swatches: [
      { step: "50",  hex: "#e7f8f1", label: "Soft fill, card backgrounds" },
      { step: "100", hex: "#c1f7e1", brandName: "Bright Forest" },
      { step: "200", hex: "#bde1d2", brandName: "Pastel Forest" },
      { step: "300", hex: "#86caae" },
      { step: "400", hex: "#54b58d" },
      { step: "500", hex: "#388566", brandName: "Forest-primary", isPrimary: true, label: "Primary brand" },
      { step: "600", hex: "#305043", brandName: "Evening Forest" },
      { step: "700", hex: "#273f35" },
      { step: "800", hex: "#1e2f28" },
      { step: "900", hex: "#121c18" },
      { step: "950", hex: "#080c0a" },
    ],
  },
  {
    name: "Brand Blue",
    description: "Secondary brand color. Used for seeker flow, cards, and secondary actions.",
    swatches: [
      { step: "50",  hex: "#e9fcff" },
      { step: "100", hex: "#cbf8ff" },
      { step: "200", hex: "#a7eaff" },
      { step: "300", hex: "#6ccbec", label: "Secondary / seeker blue" },
      { step: "400", hex: "#7abde4" },
      { step: "500", hex: "#86aed8" },
      { step: "600", hex: "#25609f" },
      { step: "700", hex: "#1d4a7e" },
      { step: "800", hex: "#143460" },
      { step: "900", hex: "#0c2040" },
      { step: "950", hex: "#060f20" },
    ],
  },
  {
    name: "Neutral",
    description: "Warm gray scale. Used for text, borders, backgrounds, and disabled states.",
    swatches: [
      { step: "50",  hex: "#faf9f8", label: "Page background" },
      { step: "100", hex: "#f5f3f0", label: "Paper / muted background" },
      { step: "200", hex: "#d7d6d3", label: "Borders" },
      { step: "300", hex: "#bab8b6" },
      { step: "400", hex: "#9c9b99" },
      { step: "500", hex: "#7f7d7c", label: "Muted text" },
      { step: "600", hex: "#61605f" },
      { step: "700", hex: "#444242", label: "Primary text" },
      { step: "800", hex: "#262525" },
      { step: "900", hex: "#141313" },
      { step: "950", hex: "#0a0a09" },
    ],
  },
]

const semantic = [
  // Background
  { token: "Background/Page",             value: "#f5f3f0", usage: "Screen / page background" },
  { token: "Background/Surface",          value: "#ffffff", usage: "Card, sheet, modal" },
  { token: "Background/Surface 1",        value: "#faf9f8", usage: "Subtle elevated surface" },
  { token: "Background/Surface 2",        value: "#f5f3f0", usage: "Second-level surface" },
  { token: "Background/Disabled",         value: "#d7d6d3", usage: "Disabled element fill" },
  { token: "Background/Brand",            value: "#388566", usage: "Brand green fill" },
  { token: "Background/Brand secondary",  value: "#6ccbec", usage: "Seeker blue fill" },
  // Text
  { token: "Text/Primary",   value: "#444242", usage: "Primary body & heading text" },
  { token: "Text/Secondary", value: "#61605f", usage: "Supporting / description text" },
  { token: "Text/Tertiary",  value: "#7f7d7c", usage: "Placeholder & caption text" },
  { token: "Text/Disable",   value: "#9c9b99", usage: "Disabled text" },
  { token: "Text/Inverse",   value: "#ffffff", usage: "Text on dark backgrounds" },
  { token: "Text/Brand",     value: "#388566", usage: "Brand-coloured text" },
  { token: "Text/Error",     value: "#dc2626", usage: "Error / destructive text" },
  // Stroke
  { token: "Stroke/Soft",             value: "#f5f3f0", usage: "Subtle divider" },
  { token: "Stroke/Default",          value: "#d7d6d3", usage: "Default border" },
  { token: "Stroke/Strong",           value: "#9c9b99", usage: "Emphasis border" },
  { token: "Stroke/Brand",            value: "#388566", usage: "Focused / active border" },
  { token: "Stroke/Brand secondary",  value: "#6ccbec", usage: "Seeker flow border" },
  { token: "Stroke/Error",            value: "#ef4444", usage: "Error border" },
  // Button
  { token: "Button/Primary/Solid/Default",  value: "#223c30", usage: "Primary CTA fill" },
  { token: "Button/Secondary/Default",      value: "#6ccbec", usage: "Seeker CTA fill" },
]

function isDark(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return (r * 299 + g * 587 + b * 114) / 1000 < 128
}

function SwatchCard({ s }: { s: Swatch }) {
  const dark = isDark(s.hex)
  return (
    <div className="flex flex-col rounded-xl border border-border overflow-hidden w-[120px] shrink-0">
      {/* Color block */}
      <div className="relative h-20" style={{ backgroundColor: s.hex }}>
        {/* Primary dot marker */}
        {s.isPrimary && (
          <div className="absolute top-2 right-2 size-2.5 rounded-full bg-white/60" />
        )}
        {/* Brand name pill */}
        {s.brandName && (
          <div className="absolute bottom-2 left-2">
            <span
              className="inline-block px-2 py-0.5 rounded-full text-[9px] leading-tight whitespace-nowrap font-medium"
              style={{
                backgroundColor: "rgba(0,0,0,0.28)",
                color: "#ffffff",
                fontFamily: "var(--font-ui, 'Geist', sans-serif)",
              }}
            >
              {s.brandName}
            </span>
          </div>
        )}
      </div>

      {/* Text */}
      <div className="px-2.5 py-2 bg-card flex flex-col gap-0.5 flex-1">
        <p className="text-xs font-mono font-medium text-foreground">{s.step}</p>
        <p className="text-[10px] font-mono text-muted-foreground uppercase">{s.hex}</p>
        {s.label && (
          <p className="text-[9px] text-muted-foreground mt-0.5 leading-tight">{s.label}</p>
        )}
      </div>
    </div>
  )
}

export default function ColorsPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 px-10 py-10 max-w-5xl">
        <div className="mb-10">
          <p className="text-sm text-muted-foreground mb-1 font-mono">foundations / colors</p>
          <h1 className="text-3xl font-semibold text-foreground mb-3">Colors</h1>
          <p className="text-muted-foreground leading-relaxed">
            Two brand scales (green + blue) and a warm neutral gray. Named pills indicate fixed brand anchor colors — all other steps are interpolated to blend smoothly between them.
          </p>
        </div>

        {/* Palette */}
        {palette.map((group) => (
          <section key={group.name} className="mb-12">
            <h2 className="text-xl font-semibold text-foreground mb-1">{group.name}</h2>
            <p className="text-sm text-muted-foreground mb-5">{group.description}</p>
            <div className="flex flex-wrap gap-3">
              {group.swatches.map((s) => (
                <SwatchCard key={s.step} s={s} />
              ))}
            </div>
          </section>
        ))}

        {/* Semantic tokens */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-foreground mb-1">Semantic tokens</h2>
          <p className="text-sm text-muted-foreground mb-5">CSS variables used throughout components.</p>
          <div className="rounded-2xl border border-border overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted">
                  <th className="text-left px-4 py-3 font-medium text-muted-foreground">Token</th>
                  <th className="text-left px-4 py-3 font-medium text-muted-foreground">Value</th>
                  <th className="text-left px-4 py-3 font-medium text-muted-foreground">Usage</th>
                </tr>
              </thead>
              <tbody>
                {semantic.map((row, i) => (
                  <tr key={row.token} className={i % 2 === 0 ? "bg-card" : "bg-muted/40"}>
                    <td className="px-4 py-3 font-mono text-xs text-foreground">{row.token}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <span
                          className="size-4 rounded border border-border shrink-0"
                          style={{ backgroundColor: row.value }}
                        />
                        <span className="font-mono text-xs">{row.value}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">{row.usage}</td>
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
