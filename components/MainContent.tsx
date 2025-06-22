"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Zap, Smartphone, Globe, Database, Rocket, Users } from "lucide-react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function MainContent() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Title animation
    gsap.fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    )

    // Subtitle animation
    gsap.fromTo(
      subtitleRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: subtitleRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    )

    // Cards animation
    const cards = cardsRef.current?.children
    if (cards) {
      gsap.fromTo(
        cards,
        {
          y: 100,
          opacity: 0,
          scale: 0.8,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }

    // CTA animation
    gsap.fromTo(
      ctaRef.current,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    )
  }, [])

  const services = [
    {
      icon: <Code className="h-8 w-8 text-blue-400" />,
      title: "Frontend Development",
      description:
        "Building responsive, interactive web applications with React, Next.js, and modern JavaScript frameworks.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      icon: <Smartphone className="h-8 w-8 text-green-400" />,
      title: "Mobile Development",
      description: "Creating cross-platform mobile applications with React Native and Flutter for iOS and Android.",
      technologies: ["React Native", "Flutter", "iOS", "Android"],
    },
    {
      icon: <Database className="h-8 w-8 text-purple-400" />,
      title: "Backend Development",
      description: "Developing robust server-side applications with Node.js, Python, and cloud-based solutions.",
      technologies: ["Node.js", "Python", "PostgreSQL", "AWS"],
    },
    {
      icon: <Palette className="h-8 w-8 text-pink-400" />,
      title: "UI/UX Design",
      description: "Designing beautiful, user-centered interfaces that provide exceptional user experiences.",
      technologies: ["Figma", "Adobe XD", "Sketch", "Prototyping"],
    },
    {
      icon: <Globe className="h-8 w-8 text-cyan-400" />,
      title: "Web Performance",
      description: "Optimizing applications for speed, SEO, and accessibility to ensure the best user experience.",
      technologies: ["Lighthouse", "Core Web Vitals", "SEO", "A11y"],
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-400" />,
      title: "Animation & Effects",
      description: "Creating engaging animations and interactive effects using GSAP, Framer Motion, and CSS.",
      technologies: ["GSAP", "Framer Motion", "CSS3", "WebGL"],
    },
  ]

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "5+", label: "Years Experience" },
    { number: "30+", label: "Happy Clients" },
    { number: "99%", label: "Client Satisfaction" },
  ]

  return (
    <section id="about" ref={sectionRef} className="py-20 px-4 bg-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 ref={titleRef} className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            What I Do
          </h2>
          <p ref={subtitleRef} className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            I specialize in creating digital experiences that combine beautiful design with powerful functionality.
            Here's how I can help bring your ideas to life.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-500 group hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <CardContent className="p-8">
                <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-6 text-center">{service.description}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {service.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-full border border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div ref={ctaRef} className="text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-12 backdrop-blur-sm border border-gray-700/50 hover:border-gray-600 transition-all duration-500">
            <Rocket className="h-16 w-16 text-blue-400 mx-auto mb-6" />
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Your Project?</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Let's collaborate to create something amazing together. I'm always excited to work on new challenges and
              innovative projects that push the boundaries of what's possible.
            </p>
            <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
              Get In Touch
              <Users className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
