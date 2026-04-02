import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 text-center">
      {/* Logo mark */}
      <div className="mb-8 size-16 rounded-2xl bg-primary flex items-center justify-center shadow-md">
        <span className="text-2xl font-bold text-primary-foreground">P</span>
      </div>

      <h1 className="text-4xl font-semibold text-foreground mb-3">
        Peerlo Design System
      </h1>
      <p className="text-muted-foreground text-lg max-w-md mb-10">
        Component library and design token reference. Built from the Figma design system.
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        <Link
          href="/components/button"
          className="inline-flex h-12 items-center gap-2 rounded-3xl bg-primary px-6 text-base font-medium text-primary-foreground shadow-xs hover:bg-green-700 transition-colors"
        >
          Browse components →
        </Link>
        <Link
          href="/foundations/colors"
          className="inline-flex h-12 items-center gap-2 rounded-3xl border border-primary bg-transparent px-6 text-base font-medium text-primary hover:bg-accent transition-colors"
        >
          View foundations
        </Link>
      </div>

      {/* Status banner */}
      <div className="mt-16 rounded-2xl border border-border bg-card px-6 py-4 text-sm text-muted-foreground max-w-sm text-left">
        <p className="font-medium text-foreground mb-1">🟡 In progress</p>
        <p>This design system is actively being built alongside the Figma file. Components will be added as designs are finalised.</p>
      </div>
    </div>
  )
}
