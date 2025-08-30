// Navigation Component
// Generated: 2025-08-30T11:03:12.616Z
// Template: navigation-c001
// Context: layout
// Position: layout.header.0

"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ShoppingCart, Gamepad2 } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Games", href: "/games" },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-primary/20 bg-secondary/95 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3">
              <div className="size-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                <Gamepad2 className="size-6 text-secondary font-bold" />
              </div>
              <span className="font-bold text-2xl text-primary">GameVerse</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary px-4 py-2 text-lg font-bold transition-all duration-200 hover:bg-primary/10 rounded-lg border-2 border-transparent hover:border-primary/30"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="lg" className="text-foreground hover:text-primary hover:bg-primary/10 font-bold border-2 border-transparent hover:border-primary/30">
              Browse
            </Button>
            <Button size="lg" className="group bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-secondary font-bold shadow-lg border-2 border-primary/50">
              Shop Now
              <ShoppingCart className="ml-2 size-5 transition-transform group-hover:scale-110" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="text-foreground hover:text-primary hover:bg-primary/10"
            >
              {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden transition-all duration-300 ease-in-out overflow-hidden",
            isOpen ? "max-h-96 pb-4" : "max-h-0"
          )}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 border-t border-primary/20">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary block px-4 py-3 text-lg font-bold transition-all duration-200 hover:bg-primary/10 rounded-lg border-2 border-transparent hover:border-primary/30"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 flex flex-col space-y-3">
              <Button variant="ghost" className="justify-start text-foreground hover:text-primary hover:bg-primary/10 font-bold border-2 border-transparent hover:border-primary/30">
                Browse
              </Button>
              <Button className="justify-start group bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-secondary font-bold shadow-lg">
                Shop Now
                <ShoppingCart className="ml-2 size-5 transition-transform group-hover:scale-110" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}