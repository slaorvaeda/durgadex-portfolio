"use client"

import { useEffect, useRef } from "react"
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import ScrollToPlugin from "gsap/ScrollToPlugin"

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const backgroundRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Initial animations
    const tl = gsap.timeline()

    tl.from(titleRef.current, {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    })
      .from(
        subtitleRef.current,
        {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.6",
      )
      .from(
        buttonsRef.current?.children,
        {
          y: 30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
        },
        "-=0.4",
      )

    // Parallax background effect
    gsap.to(backgroundRef.current, {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    })

    // Floating animation for elements
    gsap.to(titleRef.current, {
      y: -20,
      duration: 3,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
    })
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      gsap.to(window, {
        duration: 1.5,
        scrollTo: element,
        ease: "power3.inOut",
      })
    }
  }

  return (
    <section id="home" ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div ref={backgroundRef} className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="text-center z-10 px-4 max-w-6xl mx-auto">
        <h1 ref={titleRef} className="text-5xl md:text-8xl lg:text-9xl font-bold mb-8 leading-tight">
          <span className="block bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Creative
          </span>
          <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Developer
          </span>
        </h1>

        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto font-light"
        >
          Crafting exceptional digital experiences with modern web technologies,
          <br className="hidden md:block" />
          beautiful animations, and pixel-perfect design
        </p>

        <div ref={buttonsRef} className="flex flex-col items-center gap-8">
          <Button
            size="lg"
            onClick={() => scrollToSection("#projects")}
            className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
          >
            View My Work
            <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          <div className="flex items-center justify-center gap-6">
            <Button
              size="icon"
              variant="outline"
              className="border-gray-600 text-gray-300 hover:text-white hover:border-blue-400 hover:bg-blue-400/10 rounded-full w-14 h-14 transition-all duration-300 hover:scale-110"
            >
              <Github className="h-6 w-6" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              className="border-gray-600 text-gray-300 hover:text-white hover:border-blue-400 hover:bg-blue-400/10 rounded-full w-14 h-14 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="h-6 w-6" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => scrollToSection("#contact")}
              className="border-gray-600 text-gray-300 hover:text-white hover:border-blue-400 hover:bg-blue-400/10 rounded-full w-14 h-14 transition-all duration-300 hover:scale-110"
            >
              <Mail className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
        onClick={() => scrollToSection("#about")}
      >
        <div className="flex flex-col items-center animate-bounce">
          <span className="text-white text-sm mb-2 opacity-70">Scroll Down</span>
          <ArrowDown className="h-6 w-6 text-white opacity-70" />
        </div>
      </div>
    </section>
  )
}
