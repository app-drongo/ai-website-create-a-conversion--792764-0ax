// Features Component
// Generated: 2025-08-30T11:03:12.617Z
// Template: features-c001
// Context: Homepage
// Position: pages.0.sections.1

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Zap, 
  Shield, 
  Smartphone, 
  Download, 
  Trophy, 
  Gamepad2,
  Users,
  Headphones,
  Star
} from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: "Instant Downloads",
      description: "Get your games immediately with our lightning-fast download servers and zero wait times.",
      badge: "Speed"
    },
    {
      icon: Shield,
      title: "Secure Purchases",
      description: "Shop with confidence using our encrypted payment system and fraud protection.",
      badge: "Security"
    },
    {
      icon: Smartphone,
      title: "Cross-Platform",
      description: "Access your game library on PC, console, and mobile devices seamlessly.",
      badge: "Compatibility"
    },
    {
      icon: Download,
      title: "Cloud Saves",
      description: "Never lose your progress with automatic cloud backup and sync across devices.",
      badge: "Storage"
    },
    {
      icon: Trophy,
      title: "Achievement System",
      description: "Track your gaming milestones and compete with friends on global leaderboards.",
      badge: "Gaming"
    },
    {
      icon: Gamepad2,
      title: "Controller Support",
      description: "Full compatibility with all major gaming controllers and input devices.",
      badge: "Hardware"
    },
    {
      icon: Users,
      title: "Gaming Community",
      description: "Connect with millions of gamers, join tournaments, and share your victories.",
      badge: "Social"
    },
    {
      icon: Headphones,
      title: "Gamer Support",
      description: "Get help from our gaming experts who understand your needs 24/7.",
      badge: "Support"
    },
    {
      icon: Star,
      title: "Exclusive Deals",
      description: "Access member-only discounts, early releases, and special gaming bundles.",
      badge: "Rewards"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-primary/20 text-primary">
            Gaming Features
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Everything Gamers Need to
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Dominate the Game
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Experience the ultimate gaming marketplace with features designed by gamers, 
            for gamers. Level up your gaming experience today.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs bg-secondary/10 text-secondary">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to join the ultimate gaming community?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Start Gaming Now
            </button>
            <button className="px-6 py-3 border border-primary/20 rounded-lg font-medium hover:bg-primary/5 transition-colors">
              Explore Game Library
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}