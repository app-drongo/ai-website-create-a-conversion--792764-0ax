// Herohomepage Component
// Generated: 2025-08-30T11:03:12.617Z
// Template: hero-s001
// Context: Homepage
// Position: pages.0.sections.0

// components/hero/SplitHero.tsx
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Play } from "lucide-react"
import Image from "next/image"

export default function Herohomepage() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Gaming-inspired gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/15" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.04)_1px,transparent_1px)] [background-size:24px_24px] opacity-50" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 py-20 sm:py-24 lg:grid-cols-2 lg:gap-20 lg:py-32">
          {/* LEFT: Content */}
          <div className="flex flex-col justify-center">
            {/* Badge */}
            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary">
              <span className="inline-block h-2 w-2 rounded-full bg-primary animate-pulse"></span>
              New: Latest Game Releases
            </div>

            {/* Headline */}
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Level up your gaming with
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                GameVerse Store
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Discover the ultimate game marketplace with thousands of titles, exclusive deals, and instant downloads. Your next gaming adventure starts here.
            </p>

            {/* Feature list */}
            <ul className="mt-6 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
              {[
                "Instant game downloads",
                "Exclusive gaming deals",
                "Latest AAA releases",
                "24/7 gaming support",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary" />
                  {item}
                </li>
              ))}
            </ul>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="group px-7 text-base bg-primary hover:bg-primary/90">
                Browse Games
                <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="text-base border-primary/20 hover:bg-primary/5">
                <Play className="mr-2 size-5" /> Watch Trailer
              </Button>
            </div>
          </div>

          {/* RIGHT: Visual */}
          <div className="relative">
            {/* Mockup container */}
            <div className="relative overflow-hidden rounded-2xl border border-primary/10 bg-card shadow-2xl">
              <div className="aspect-[16/10] relative">
                <Image
                  src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1920&auto=format&fit=crop"
                  alt="GameVerse gaming marketplace interface"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Tag overlay */}
              <div className="absolute left-4 top-4 rounded-full bg-primary/90 px-3 py-1 text-xs font-medium text-primary-foreground shadow">
                Live Store
              </div>
            </div>

            {/* Floating accents */}
            <div className="absolute -right-6 -top-6 hidden w-36 rounded-xl border border-primary/10 bg-background/90 p-3 shadow-xl sm:block">
              <p className="text-xs text-muted-foreground">Game Library</p>
              <p className="text-sm">
                <span className="font-semibold text-primary">50K+</span> Titles
              </p>
            </div>
            <div className="absolute -left-6 -bottom-6 hidden w-36 rounded-xl border border-primary/10 bg-background/90 p-3 shadow-xl sm:block">
              <p className="text-xs text-muted-foreground">Active Gamers</p>
              <p className="text-sm">
                <span className="font-semibold text-primary">2M+</span> Players
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}