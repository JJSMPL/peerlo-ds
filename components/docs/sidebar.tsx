import Link from "next/link"

const nav = [
  {
    section: "Foundations",
    items: [
      { label: "Colors", href: "/foundations/colors" },
      { label: "Typography", href: "/foundations/typography" },
      { label: "Spacing & Radius", href: "/foundations/spacing" },
    ],
  },
  {
    section: "Components",
    items: [
      { label: "Button", href: "/components/button" },
      { label: "Input", href: "/components/input" },
      { label: "Checkbox", href: "/components/checkbox" },
      { label: "Radio Group", href: "/components/radio-group" },
      { label: "Avatar", href: "/components/avatar" },
    ],
  },
]

export function Sidebar() {
  return (
    <aside className="w-56 shrink-0 border-r border-border bg-neutral-50 min-h-screen px-4 py-8">
      {/* Logo */}
      <div className="mb-8 px-2">
        <span className="text-lg font-semibold text-green-800 tracking-tight">
          Peerlo DS
        </span>
        <span className="ml-2 text-xs text-muted-foreground font-normal">v0.1</span>
      </div>

      <nav className="space-y-6">
        {nav.map((group) => (
          <div key={group.section}>
            <p className="mb-2 px-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {group.section}
            </p>
            <ul className="space-y-0.5">
              {group.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center rounded-xl px-2 py-1.5 text-sm text-foreground/80 hover:bg-accent hover:text-green-800 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  )
}
