"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null)

  const skills = [
    { name: "React/Next.js", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "Python", level: 80 },
    { name: "AWS/Cloud", level: 75 },
    { name: "UI/UX Design", level: 85 },
  ]

  const technologies = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Docker",
    "GraphQL",
    "Tailwind CSS",
    "Figma",
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll(".skill-progress")
            progressBars.forEach((bar, index) => {
              setTimeout(() => {
                bar.classList.add("animate-progress")
              }, index * 100)
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
    <section id="skills" ref={sectionRef} className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">Skills & Technologies</h2>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-blue-400">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="skill-progress h-2 bg-gray-700" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white mb-8">Technologies</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {technologies.map((tech, index) => (
                <Card key={tech} className="bg-gray-800 border-gray-700 hover:bg-gray-700 transition-colors">
                  <CardContent className="p-4 text-center">
                    <span className="text-gray-300">{tech}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
