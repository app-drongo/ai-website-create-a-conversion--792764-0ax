// Features1 Component
// Generated: 2025-08-30T11:03:12.618Z
// Template: features-c001
// Context: Product Grid
// Position: pages.1.sections.2

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Gamepad2, 
  Shield, 
  Smartphone, 
  Zap, 
  Trophy, 
  Headphones,
  ShoppingCart,
  Clock,
  Star
} from "lucide-react"

export default function Features1() {
  const features = [
    {
      icon: Zap,
      title: "Instant Digital Delivery",
      description: "Get your games immediately after purchase with our lightning-fast digital delivery system.",
      badge: "Speed"
    },
    {
      icon: Shield,
      title: "Secure Transactions",
      description: "Shop with confidence using our encrypted payment system and fraud protection.",
      badge: "Security"
    },
    {
      icon: Smartphone,
      title: "Mobile Gaming Hub",
      description: "Browse, buy, and manage your game library seamlessly across all your devices.",
      badge: "Mobile"
    },
    {
      icon: Trophy,
      title: "Gamer Rewards Program",
      description: "Earn GameVerse points with every purchase and unlock exclusive discounts.",
      badge: "Rewards"
    },
    {
      icon: Star,
      title: "Verified Game Reviews",
      description: "Read authentic reviews from real gamers to make informed purchasing decisions.",
      badge: "Community"
    },
    {
      icon: Headphones,
      title: "Premium Gaming Gear",
      description: "Discover top-tier gaming accessories from leading brands like Razer, SteelSeries, and more.",
      badge: "Hardware"
    },
    {
      icon: ShoppingCart,
      title: "Pre-Order Benefits",
      description: "Secure upcoming releases early and get exclusive bonuses and early access perks.",
      badge: "Pre-Orders"
    },
    {
      icon: Clock,
      title: "24/7 Gamer Support",
      description: "Get help from fellow gamers and tech experts whenever you need assistance.",
      badge: "Support"
    },
    {
      icon: Gamepad2,
      title: "Multi-Platform Library",
      description: "Manage games across PC, PlayStation, Xbox, Nintendo Switch, and mobile platforms.",
      badge: "Cross-Platform"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Why Choose GameVerse
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Everything Gamers Need in
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              One Epic Marketplace
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From the latest AAA releases to professional gaming equipment, GameVerse delivers 
            the ultimate shopping experience for serious gamers.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
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
            Ready to join the GameVerse community?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Browse All Games
            </button>
            <button className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
              Shop Gaming Gear
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}