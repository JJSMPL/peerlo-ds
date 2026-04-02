import { Sidebar } from "@/components/docs/sidebar"
import { Checkbox } from "@/components/ui/checkbox"

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
    <div className="rounded-2xl border border-border bg-neutral-50 p-8 flex flex-col gap-4 max-w-sm">
      {children}
    </div>
  )
}

export default function CheckboxPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 px-10 py-10 max-w-3xl">
        <div className="mb-10">
          <p className="text-sm text-muted-foreground mb-1 font-mono">components / checkbox</p>
          <h1 className="text-3xl font-semibold text-foreground mb-3">Checkbox</h1>
          <p className="text-muted-foreground leading-relaxed">
            Used in the Expectation Setting screen (pre-chat checklist) and peer onboarding sensitive topic opt-outs.
          </p>
        </div>

        <Section title="States">
          <Preview>
            <div className="flex items-center gap-3">
              <Checkbox id="c1" />
              <label htmlFor="c1" className="text-sm text-foreground cursor-pointer">Unchecked</label>
            </div>
            <div className="flex items-center gap-3">
              <Checkbox id="c2" defaultChecked />
              <label htmlFor="c2" className="text-sm text-foreground cursor-pointer">Checked</label>
            </div>
            <div className="flex items-center gap-3">
              <Checkbox id="c3" disabled />
              <label htmlFor="c3" className="text-sm text-muted-foreground cursor-not-allowed">Disabled</label>
            </div>
          </Preview>
        </Section>

        <Section title="Expectation setting (Figma reference)" description="Pre-chat checklist — seeker sets intent before being matched.">
          <Preview>
            <p className="text-sm font-medium text-foreground mb-1">Hva ønsker du fra denne samtalen?</p>
            {[
              "Jeg vil bare prate",
              "Jeg trenger råd",
              "Jeg har det vanskelig",
              "Jeg trenger noen å lytte",
            ].map((label, i) => (
              <div key={i} className="flex items-center gap-3">
                <Checkbox id={`exp-${i}`} defaultChecked={i === 0} />
                <label htmlFor={`exp-${i}`} className="text-sm text-foreground cursor-pointer">{label}</label>
              </div>
            ))}
          </Preview>
        </Section>

        <Section title="Usage">
          <pre className="rounded-2xl bg-neutral-900 text-neutral-100 p-6 text-sm font-mono overflow-x-auto leading-relaxed">
{`import { Checkbox } from "@/components/ui/checkbox"

<div className="flex items-center gap-3">
  <Checkbox id="terms" />
  <label htmlFor="terms">Jeg godtar vilkårene</label>
</div>

// Pre-checked
<Checkbox defaultChecked />

// Disabled
<Checkbox disabled />`}
          </pre>
        </Section>
      </main>
    </div>
  )
}
