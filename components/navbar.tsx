"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"

export function Navbar() {
  const pathname = usePathname()
  const isMobile = useMobile()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
    { label: "Documention", href: "/documentation" },
    { label: "How it works", href: "/how-it-works" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-background/90 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="font-semibold text-2xl text-blue-400 tracking-tight" onClick={closeMenu}>
          STUDIO
        </Link>

        {isMobile ? (
          <>
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>

            {isMenuOpen && (
              <div className="fixed inset-0 top-16 bg-background/98 backdrop-blur-sm z-40 p-6 animate-fade-in">
                <nav className="flex flex-col space-y-6">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "text-xl py-2 border-b border-muted transition-colors",
                        pathname === item.href
                          ? "text-primary font-medium border-primary"
                          : "text-muted-foreground hover:text-foreground",
                      )}
                      onClick={closeMenu}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Button asChild size="lg" className="mt-4 w-full">
                    <Link href="/contact" onClick={closeMenu}>
                      Get in Touch
                    </Link>
                  </Button>
                </nav>
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center space-x-2">
            <nav className="flex items-center space-x-1 mr-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-4 py-2 text-sm font-medium transition-colors rounded-md",
                    pathname === item.href
                      ? "text-primary bg-primary/5"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Button asChild size="sm" className="px-6">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  )
}

