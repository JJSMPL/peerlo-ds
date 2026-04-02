import { Sidebar } from "@/components/docs/sidebar"
import { Input } from "@/components/ui/input"

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

export default function InputPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 px-10 py-10 max-w-3xl">
        <div className="mb-10">
          <p className="text-sm text-muted-foreground mb-1 font-mono">components / input</p>
          <h1 className="text-3xl font-semibold text-foreground mb-3">Input</h1>
          <p className="text-muted-foreground leading-relaxed">
            Text fields used in login, peer registration, org code entry, and profile forms.
          </p>
        </div>

        <Section title="Default">
          <Preview>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">E-post</label>
              <Input placeholder="Placeholder" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Passord</label>
              <Input type="password" placeholder="Placeholder" />
            </div>
          </Preview>
        </Section>

        <Section title="States">
          <Preview>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Default</label>
              <Input placeholder="Placeholder" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Filled</label>
              <Input defaultValue="hei@peerlo.no" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Disabled</label>
              <Input placeholder="Disabled" disabled />
            </div>
            <div>
              <label className="block text-sm font-medium text-destructive mb-1.5">Error</label>
              <Input placeholder="Ugyldig e-post" aria-invalid="true" className="border-destructive focus-visible:ring-destructive/30" />
              <p className="text-xs text-destructive mt-1.5">Vennligst oppgi en gyldig e-postadresse.</p>
            </div>
          </Preview>
        </Section>

        <Section title="Usage">
          <pre className="rounded-2xl bg-neutral-900 text-neutral-100 p-6 text-sm font-mono overflow-x-auto leading-relaxed">
{`import { Input } from "@/components/ui/input"

<Input placeholder="E-post" />
<Input type="password" placeholder="Passord" />
<Input disabled placeholder="Deaktivert" />
<Input aria-invalid="true" className="border-destructive" />`}
          </pre>
        </Section>
      </main>
    </div>
  )
}
