import { Sidebar } from "@/components/docs/sidebar"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

function Section({ title, description, children }: { title: string; description?: string; children: React.ReactNode }) {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-semibold text-foreground mb-1">{title}</h2>
      {description && <p className="text-sm text-muted-foreground mb-6">{description}</p>}
      {children}
    </section>
  )
}

function Preview({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-neutral-50 p-8 max-w-sm">
      {children}
    </div>
  )
}

export default function RadioGroupPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 px-10 py-10 max-w-3xl">
        <div className="mb-10">
          <p className="text-sm text-muted-foreground mb-1 font-mono">components / radio-group</p>
          <h1 className="text-3xl font-semibold text-foreground mb-3">Radio Group</h1>
          <p className="text-muted-foreground leading-relaxed">
            Single-select option groups. Used in peer onboarding (availability, topics) and settings screens.
          </p>
        </div>

        <Section title="Default">
          <Preview>
            <RadioGroup defaultValue="online">
              <div className="flex items-center gap-3">
                <RadioGroupItem value="online" id="r1" />
                <label htmlFor="r1" className="text-sm text-foreground cursor-pointer">🟢 Tilgjengelig nå</label>
              </div>
              <div className="flex items-center gap-3">
                <RadioGroupItem value="away" id="r2" />
                <label htmlFor="r2" className="text-sm text-foreground cursor-pointer">🟡 Aktiv siste 7 dager</label>
              </div>
              <div className="flex items-center gap-3">
                <RadioGroupItem value="offline" id="r3" />
                <label htmlFor="r3" className="text-sm text-foreground cursor-pointer">🔴 Ikke tilgjengelig</label>
              </div>
            </RadioGroup>
          </Preview>
        </Section>

        <Section title="Usage">
          <pre className="rounded-2xl bg-neutral-900 text-neutral-100 p-6 text-sm font-mono overflow-x-auto leading-relaxed">
{`import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

<RadioGroup defaultValue="online">
  <div className="flex items-center gap-3">
    <RadioGroupItem value="online" id="online" />
    <label htmlFor="online">Tilgjengelig nå</label>
  </div>
  <div className="flex items-center gap-3">
    <RadioGroupItem value="offline" id="offline" />
    <label htmlFor="offline">Ikke tilgjengelig</label>
  </div>
</RadioGroup>`}
          </pre>
        </Section>
      </main>
    </div>
  )
}
