"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, CheckCircle } from "lucide-react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const sectionRef = useRef<HTMLElement>(null)
  const formRef = useRef<HTMLDivElement>(null)
  const infoRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)

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

    // Content animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    })

    tl.from(infoRef.current, {
      x: -100,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    }).from(
      formRef.current,
      {
        x: 100,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.5",
    )
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", message: "" })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" ref={sectionRef} className="py-20 px-4 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.4),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.4),transparent_50%)]" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[radial-gradient(circle,rgba(59,130,246,0.3),transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 ref={titleRef} className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your vision to life and
            create something extraordinary together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div ref={infoRef}>
            <h3 className="text-3xl md:text-4xl font-semibold text-white mb-8">Get In Touch</h3>
            <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed">
              I'm always interested in new opportunities and exciting projects. Whether you have a question, want to
              collaborate, or just want to say hi, I'll try my best to get back to you within 24 hours!
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-center space-x-6 group">
                <div className="bg-blue-600/20 p-4 rounded-2xl group-hover:bg-blue-600/30 transition-all duration-300 group-hover:scale-110">
                  <Mail className="h-7 w-7 text-blue-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Email</p>
                  <p className="text-white text-lg md:text-xl font-medium">hello@durgadex.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-6 group">
                <div className="bg-green-600/20 p-4 rounded-2xl group-hover:bg-green-600/30 transition-all duration-300 group-hover:scale-110">
                  <Phone className="h-7 w-7 text-green-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Phone</p>
                  <p className="text-white text-lg md:text-xl font-medium">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center space-x-6 group">
                <div className="bg-purple-600/20 p-4 rounded-2xl group-hover:bg-purple-600/30 transition-all duration-300 group-hover:scale-110">
                  <MapPin className="h-7 w-7 text-purple-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Location</p>
                  <p className="text-white text-lg md:text-xl font-medium">San Francisco, CA</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <Button
                size="icon"
                variant="outline"
                className="border-gray-600 text-gray-300 hover:text-white hover:border-blue-400 hover:bg-blue-400/10 rounded-2xl w-14 h-14 transition-all duration-300 hover:scale-110"
              >
                <Github className="h-6 w-6" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="border-gray-600 text-gray-300 hover:text-white hover:border-blue-400 hover:bg-blue-400/10 rounded-2xl w-14 h-14 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-6 w-6" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="border-gray-600 text-gray-300 hover:text-white hover:border-blue-400 hover:bg-blue-400/10 rounded-2xl w-14 h-14 transition-all duration-300 hover:scale-110"
              >
                <Twitter className="h-6 w-6" />
              </Button>
            </div>
          </div>

          <div ref={formRef}>
            <Card className="bg-gray-900/50 border-gray-700/50 backdrop-blur-xl rounded-3xl overflow-hidden">
              <CardHeader className="pb-6">
                <CardTitle className="text-white text-2xl md:text-3xl">Send a Message</CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-semibold text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-300">Thank you for reaching out. I'll get back to you soon!</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-blue-400/20 h-14 text-lg rounded-xl"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-blue-400/20 h-14 text-lg rounded-xl"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <Textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-blue-400/20 resize-none text-lg rounded-xl"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white h-14 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending...
                        </div>
                      ) : (
                        <>
                          <Send className="h-5 w-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
