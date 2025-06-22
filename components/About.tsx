"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Zap } from "lucide-react"

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".about-card")
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("animate-fade-in-up")
              }, index * 200)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I'm a passionate full-stack developer with over 5 years of experience creating digital solutions that make
              a difference. I specialize in modern web technologies and love bringing creative ideas to life through
              code.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
              sharing knowledge with the developer community.
            </p>
          </div>
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg opacity-80" />
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=400')] bg-cover bg-center rounded-lg" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="about-card opacity-0 bg-gray-800 border-gray-700">
            <CardContent className="p-6 text-center">
              <Code className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Clean Code</h3>
              <p className="text-gray-300">Writing maintainable, scalable code that stands the test of time</p>
            </CardContent>
          </Card>

          <Card className="about-card opacity-0 bg-gray-800 border-gray-700">
            <CardContent className="p-6 text-center">
              <Palette className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Design Focus</h3>
              <p className="text-gray-300">Creating beautiful, user-centered interfaces that delight users</p>
            </CardContent>
          </Card>

          <Card className="about-card opacity-0 bg-gray-800 border-gray-700">
            <CardContent className="p-6 text-center">
              <Zap className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Performance</h3>
              <p className="text-gray-300">Optimizing applications for speed and exceptional user experience</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
