import { Sidebar } from "@/components/docs/sidebar"

const palette = [
  {
    name: "Brand Green",
    description: "Primary brand color. Used for CTAs, active states, and brand moments.",
    swatches: [
      { step: "50", hex: "#e3fcf2", label: "Soft fill, card backgrounds" },
      { step: "100", hex: "#c1f7e1", label: "" },
      { step: "200", hex: "#bde1d2", label: "" },
      { step: "300", hex: "#8dc5ac", label: "" },
      { step: "400", hex: "#5ea589", label: "" },
      { step: "500", hex: "#388566", label: "Primary brand" },
      { step: "600", hex: "#305043", label: "" },
      { step: "700", hex: "#223c30", label: "Hover state" },
      { step: "800", hex: "#162a21", label: "" },
      { step: "900", hex: "#0c1a14", label: "CTA button (#13281c)" },
      { step: "950", hex: "#060e0b", label: "" },
    ],
  },
  {
    name: "Brand Blue",
    description: "Secondary brand color. Used for seeker flow, cards, and secondary actions.",
    swatches: [
      { step: "50", hex: "#e9fcff", label: "" },
      { step: "100", hex: "#cbf8ff", label: "" },
      { step: "200", hex: "#a7eaff", label: "" },
      { step: "300", hex: "#6ccbec", label: "Secondary / seeker blue" },
      { step: "400", hex: "#7abde4", label: "" },
      { step: "500", hex: "#86aed8", label: "" },
      { step: "600", hex: "#25609f", label: "" },
      { step: "700", hex: "#1d4a7e", label: "" },
      { step: "800", hex: "#143460", label: "" },
      { step: "900", hex: "#0c2040", label: "" },
      { step: "950", hex: "#060f20", label: "" },
    ],
  },
  {
    name: "Neutral",
    description: "Warm gray scale. Used for text, borders, backgrounds, and disabled states.",
    swatches: [
      { step: "50", hex: "#faf9f7", label: "Page background" },
      { step: "100", hex: "#f5f3f0", label: "Paper / muted background" },
      { step: "200", hex: "#d7d5d3", label: "Borders" },
      { step: "300", hex: "#b8b7b5", label: "" },
      { step: "400", hex: "#9a9998", label: "" },
      { step: "500", hex: "#7c7b7a", label: "Muted text" },
      { step: "600", hex: "#5d5d5d", label: "" },
      { step: "700", hex: "#3f3f3f", label: "" },
      { step: "800", hex: "#262525", label: "" },
      { step: "900", hex: "#141313", label: "Primary text" },
      { step: "950", hex: "#0a0a09", label: "" },
    ],
  },
]

const semantic = [
  { token: "--primary", value: "#13281c", usage: "CTA button fill" },
  { token: "--primary-foreground", value: "#ffffff", usage: "Button label on dark fill" },
  { token: "--secondary", value: "#6ccbec", usage: "Seeker flow button / card" },
  { token: "--background", value: "#faf9f7", usage: "Page background" },
  { token: "--foreground", value: "#141313", usage: "Primary text" },
  { token: "--muted", value: "#f5f3f0", usage: "Muted / paper background" },
  { token: "--muted-foreground", value: "#7c7b7a", usage: "Secondary / placeholder text" },
  { token: "--accent", value: "#e3fcf2", usage: "Soft green fill (green-50)" },
  { token: "--border", value: "#d7d5d3", usage: "Default border" },
  { token: "--destructive", value: "#dc2626", usage: "Error states" },
]

function isDark(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return (r * 299 + g * 587 + b * 114) / 1000 < 128
}

export default function ColorsPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 px-10 py-10 max-w-4xl">
        <div className="mb-10">
          <p className="text-sm text-muted-foreground mb-1 font-mono">foundations / colors</p>
          <h1 className="text-3xl font-semibold text-foreground mb-3">Colors</h1>
          <p className="text-muted-foreground leading-relaxed">
            Two brand scales (green + blue) and a warm neutral gray. All values extracted directly from the Figma variables.
          </p>
        </div>

        {/* Palette */}
        {palette.map((group) => (
          <section key={group.name} className="mb-12">
            <h2 className="text-xl font-semibold text-foreground mb-1">{group.name}</h2>
            <p className="text-sm text-muted-foreground mb-5">{group.description}</p>
            <div className="flex rounded-2xl overflow-hidden border border-border">
              {group.swatches.map((s) => (
                <div
                  key={s.step}
                  className="flex-1 flex flex-col"
                  style={{ backgroundColor: s.hex }}
                >
                  <div className="h-16" />
                  <div
                    className="px-2 py-2"
                    style={{ backgroundColor: s.hex }}
                  >
                    <p
                      className="text-xs font-mono font-medium"
                      style={{ color: isDark(s.hex) ? "#ffffff" : "#141313" }}
                    >
                      {s.step}
                    </p>
                    <p
                      className="text-xs font-mono opacity-70"
                      style={{ color: isDark(s.hex) ? "#ffffff" : "#141313" }}
                    >
                      {s.hex}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/* Labels */}
            <div className="mt-3 flex flex-wrap gap-3">
              {group.swatches.filter(s => s.label).map(s => (
                <div key={s.step} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <span
                    className="size-3 rounded-full border border-border"
                    style={{ backgroundColor: s.hex }}
                  />
                  <span className="font-mono">{s.step}</span>
                  <span>— {s.label}</span>
                </div>
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
                          className="size-4 rounded border border-border"
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
