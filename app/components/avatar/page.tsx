import { Sidebar } from "@/components/docs/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

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
    <div className="rounded-2xl border border-border bg-neutral-50 p-8 flex flex-wrap gap-6 items-center">
      {children}
    </div>
  )
}

export default function AvatarPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 px-10 py-10 max-w-3xl">
        <div className="mb-10">
          <p className="text-sm text-muted-foreground mb-1 font-mono">components / avatar</p>
          <h1 className="text-3xl font-semibold text-foreground mb-3">Avatar</h1>
          <p className="text-muted-foreground leading-relaxed">
            Peer profile photos in the browse list, chat header, and peer profile screen. Falls back to initials when no image is set.
          </p>
        </div>

        <Section title="Sizes">
          <Preview>
            {[
              { size: "size-8", label: "sm" },
              { size: "size-10", label: "md" },
              { size: "size-14", label: "lg (default)" },
              { size: "size-20", label: "xl" },
            ].map(({ size, label }) => (
              <div key={size} className="flex flex-col items-center gap-2">
                <Avatar className={size}>
                  <AvatarFallback className="bg-accent text-green-700 font-medium">AS</AvatarFallback>
                </Avatar>
                <p className="text-xs text-muted-foreground font-mono">{label}</p>
              </div>
            ))}
          </Preview>
        </Section>

        <Section title="With availability indicator" description="Green = online now, Yellow = active past 7 days, Red = not recently active. Matches the Peer browse screen.">
          <Preview>
            {[
              { color: "bg-green-500", label: "Online" },
              { color: "bg-yellow-400", label: "Away" },
              { color: "bg-red-500", label: "Offline" },
            ].map(({ color, label }) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <div className="relative">
                  <Avatar className="size-14">
                    <AvatarFallback className="bg-accent text-green-700 font-medium">PE</AvatarFallback>
                  </Avatar>
                  <span className={`absolute bottom-0.5 right-0.5 size-3 rounded-full border-2 border-white ${color}`} />
                </div>
                <p className="text-xs text-muted-foreground">{label}</p>
              </div>
            ))}
          </Preview>
        </Section>

        <Section title="Verified badge" description="Blue verified badge for Peerlo-certified peers. Rendered on peer cards and profile view.">
          <Preview>
            <div className="flex flex-col items-center gap-2">
              <div className="relative">
                <Avatar className="size-14">
                  <AvatarFallback className="bg-accent text-green-700 font-medium">JL</AvatarFallback>
                </Avatar>
                <span className="absolute -bottom-1 -right-1 size-5 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center">
                  <svg className="size-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
              </div>
              <p className="text-xs text-muted-foreground">Certified Peer</p>
            </div>
          </Preview>
        </Section>

        <Section title="Usage">
          <pre className="rounded-2xl bg-neutral-900 text-neutral-100 p-6 text-sm font-mono overflow-x-auto leading-relaxed">
{`import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

// With image
<Avatar className="size-14">
  <AvatarImage src="/peer-photo.jpg" alt="Anna S." />
  <AvatarFallback>AS</AvatarFallback>
</Avatar>

// Initials fallback
<Avatar className="size-14">
  <AvatarFallback className="bg-accent text-green-700">
    AS
  </AvatarFallback>
</Avatar>

// With availability dot
<div className="relative">
  <Avatar className="size-14">
    <AvatarFallback>PE</AvatarFallback>
  </Avatar>
  <span className="absolute bottom-0.5 right-0.5 size-3 rounded-full border-2 border-white bg-green-500" />
</div>`}
          </pre>
        </Section>
      </main>
    </div>
  )
}
