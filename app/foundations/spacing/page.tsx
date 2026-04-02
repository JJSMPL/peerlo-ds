import { Sidebar } from "@/components/docs/sidebar"

const spacing = [
  { token: "Spacing/1", value: 4 },
  { token: "Spacing/2", value: 8 },
  { token: "Spacing/3", value: 12 },
  { token: "Spacing/4", value: 16 },
  { token: "Spacing/5", value: 20 },
  { token: "Spacing/6", value: 24 },
  { token: "Spacing/7", value: 28 },
  { token: "Spacing/8", value: 32 },
  { token: "Spacing/9", value: 36 },
  { token: "Spacing/10", value: 40 },
  { token: "Spacing/12", value: 48 },
  { token: "Spacing/15", value: 60 },
  { token: "Spacing/20", value: 80 },
  { token: "Spacing/25", value: 100 },
  { token: "Spacing/30", value: 120 },
]

const radius = [
  { token: "Radius/none", value: 0, label: "none" },
  { token: "Radius/sm", value: 4, label: "sm" },
  { token: "Radius/md", value: 8, label: "md" },
  { token: "Radius/lg", value: 12, label: "lg" },
  { token: "Radius/xl", value: 16, label: "xl" },
  { token: "Radius/2xl", value: 20, label: "2xl" },
  { token: "Radius/3xl", value: 24, label: "3xl — buttons" },
  { token: "Radius/4xl", value: 32, label: "4xl — large buttons, cards" },
  { token: "Radius/max", value: 9999, label: "max — pills, avatars" },
]

export default function SpacingPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 px-10 py-10 max-w-4xl">
        <div className="mb-10">
          <p className="text-sm text-muted-foreground mb-1 font-mono">foundations / spacing & radius</p>
          <h1 className="text-3xl font-semibold text-foreground mb-3">Spacing & Radius</h1>
          <p className="text-muted-foreground leading-relaxed">
            4px base grid. All spacing and radius values extracted from Figma variables.
          </p>
        </div>

        {/* Spacing */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-foreground mb-5">Spacing</h2>
          <div className="space-y-2">
            {spacing.map((s) => (
              <div key={s.token} className="flex items-center gap-4">
                <div className="w-32 shrink-0">
                  <p className="font-mono text-xs text-muted-foreground">{s.value}px</p>
                </div>
                <div
                  className="bg-green-500 h-4 rounded"
                  style={{ width: Math.min(s.value * 2, 240) + "px" }}
                />
                <p className="font-mono text-xs text-muted-foreground">{s.token}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Border radius */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-foreground mb-5">Border radius</h2>
          <div className="grid grid-cols-3 gap-4">
            {radius.map((r) => (
              <div key={r.token} className="rounded-2xl border border-border bg-card p-4 flex flex-col gap-3">
                <div
                  className="size-16 bg-green-100 border-2 border-green-400"
                  style={{ borderRadius: Math.min(r.value, 32) + "px" }}
                />
                <div>
                  <p className="font-mono text-xs font-medium text-foreground">{r.value === 9999 ? "9999px" : r.value + "px"}</p>
                  <p className="font-mono text-xs text-muted-foreground mt-0.5">{r.label}</p>
                  {r.label.includes("button") || r.label.includes("card") || r.label.includes("pill") ? (
                    <p className="text-xs text-green-600 mt-1">{r.label.split("—")[1]?.trim()}</p>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
