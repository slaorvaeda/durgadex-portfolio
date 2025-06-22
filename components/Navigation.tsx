"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import gsap from "gsap"
import ScrollToPlugin from "gsap/ScrollToPlugin"

gsap.registerPlugin(ScrollToPlugin)

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = ["home", "about", "projects", "contact"]
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      // If we're at the very top, always show home as active
      if (scrollPosition < 100) {
        setActiveSection("home")
        return
      }

      // If we're near the bottom of the page, show contact as active
      if (scrollPosition + windowHeight >= documentHeight - 100) {
        setActiveSection("contact")
        return
      }

      // Find the current section based on which section's center is closest to the viewport center
      let currentSection = "home"
      let minDistance = Number.POSITIVE_INFINITY

      sections.forEach((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          const elementCenter = rect.top + rect.height / 2
          const viewportCenter = windowHeight / 2
          const distance = Math.abs(elementCenter - viewportCenter)

          // If the element is in the viewport and closer to center
          if (rect.top < windowHeight && rect.bottom > 0 && distance < minDistance) {
            minDistance = distance
            currentSection = section
          }
        }
      })

      setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Call once to set initial state

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ]

  const scrollToSection = (href: string) => {
    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)

    if (element) {
      let offsetTop = element.offsetTop

      // For home section, scroll to the very top
      if (targetId === "home") {
        offsetTop = 0
      } else {
        offsetTop = offsetTop - 80 // Account for fixed navbar height
      }

      gsap.to(window, {
        duration: 1.5,
        scrollTo: {
          y: offsetTop,
          autoKill: false,
        },
        ease: "power3.inOut",
      })
    }
    setIsOpen(false)
  }

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !(event.target as Element).closest("nav")) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isOpen])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled ? "bg-black/90 backdrop-blur-xl border-b border-white/10 shadow-2xl" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div
            className="text-2xl font-bold cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => scrollToSection("#home")}
          >
            <span className="text-white">Durga</span>
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">DEX</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-2">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`relative text-white hover:text-blue-400 transition-all duration-300 py-3 px-6 rounded-full font-medium ${
                  activeSection === item.href.slice(1) ? "bg-white/10 text-blue-400 shadow-lg" : "hover:bg-white/5"
                }`}
              >
                {item.label}
                {activeSection === item.href.slice(1) && (
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-white/10 hover:scale-110 transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100 visible" : "max-h-0 opacity-0 invisible overflow-hidden"
          }`}
        >
          <div className="bg-black/95 backdrop-blur-xl rounded-2xl mt-2 p-6 border border-white/10 shadow-2xl">
            {navItems.map((item, index) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left py-4 text-white hover:text-blue-400 transition-all duration-200 border-b border-white/10 last:border-b-0 hover:bg-white/5 rounded-lg px-4 ${
                  activeSection === item.href.slice(1) ? "text-blue-400 bg-white/5" : ""
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
