import { Button } from "@/components/ui/button"
import { Sidebar } from "@/components/docs/sidebar"

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
    <div className="rounded-2xl border border-border bg-neutral-50 p-8 flex flex-wrap gap-4 items-center">
      {children}
    </div>
  )
}

function Token({ name, value }: { name: string; value: string }) {
  return (
    <div className="flex items-baseline gap-2 text-sm">
      <code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded text-foreground">{name}</code>
      <span className="text-muted-foreground">{value}</span>
    </div>
  )
}

export default function ButtonPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 px-10 py-10 max-w-3xl">
        {/* Header */}
        <div className="mb-10">
          <p className="text-sm text-muted-foreground mb-1 font-mono">components / button</p>
          <h1 className="text-3xl font-semibold text-foreground mb-3">Button</h1>
          <p className="text-muted-foreground leading-relaxed">
            Interactive elements that trigger actions. Peerlo uses 5 variants — solid, outline, soft, link, and secondary (seeker blue). All default to <code className="font-mono text-xs bg-muted px-1 rounded">48px</code> height with <code className="font-mono text-xs bg-muted px-1 rounded">24px</code> radius per the Figma spec.
          </p>
        </div>

        {/* Variants */}
        <Section title="Variants" description="Use solid for primary CTAs. Outline for secondary actions. Soft for low-emphasis. Secondary (blue) for the seeker flow.">
          <Preview>
            <Button variant="solid">Start</Button>
            <Button variant="outline">Logg inn</Button>
            <Button variant="soft">Les mer</Button>
            <Button variant="secondary">Kontakt Peer</Button>
            <Button variant="link">Glemt passord?</Button>
          </Preview>
        </Section>

        {/* Sizes */}
        <Section title="Sizes" description="sm = 36px, md = 48px (default), lg = 56px. Full-width is a prop, not a size.">
          <Preview>
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </Preview>
        </Section>

        {/* Full width */}
        <Section title="Full width" description="Use fullWidth on all primary CTAs in mobile screens — matches the Figma pattern.">
          <div className="rounded-2xl border border-border bg-neutral-50 p-8 flex flex-col gap-3 max-w-xs">
            <Button fullWidth>Start</Button>
            <Button variant="outline" fullWidth>Logg inn</Button>
          </div>
        </Section>

        {/* States */}
        <Section title="Disabled state">
          <Preview>
            <Button disabled>Disabled solid</Button>
            <Button variant="outline" disabled>Disabled outline</Button>
            <Button variant="soft" disabled>Disabled soft</Button>
          </Preview>
        </Section>

        {/* Design tokens */}
        <Section title="Design tokens" description="CSS variables used by this component.">
          <div className="rounded-2xl border border-border bg-card p-6 space-y-3">
            <Token name="--primary" value="#13281c — solid button fill" />
            <Token name="--primary-foreground" value="#ffffff — solid button label" />
            <Token name="--accent" value="#e3fcf2 — soft button fill (green-50)" />
            <Token name="--secondary" value="#6ccbec — secondary button fill (brand-blue-300)" />
            <Token name="--radius-3xl" value="24px — button border radius" />
            <Token name="--radius-4xl" value="32px — large button radius" />
            <Token name="--shadow-xs" value="0 1px 2px 0 rgb(0 0 0 / 5%) — solid button shadow" />
          </div>
        </Section>

        {/* Usage */}
        <Section title="Usage">
          <pre className="rounded-2xl bg-neutral-900 text-neutral-100 p-6 text-sm font-mono overflow-x-auto leading-relaxed">
{`import { Button } from "@/components/ui/button"

// Primary CTA (Figma: Buttons/Primary)
<Button variant="solid">Start</Button>

// Outline (Figma: Buttons/Outline)
<Button variant="outline">Logg inn</Button>

// Full-width mobile CTA
<Button variant="solid" fullWidth>Neste</Button>

// Seeker flow (brand blue)
<Button variant="secondary">Kontakt Peer</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>`}
          </pre>
        </Section>
      </main>
    </div>
  )
}
