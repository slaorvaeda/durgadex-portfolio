"use client"

import { useEffect, useRef } from "react"
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import ScrollToPlugin from "gsap/ScrollToPlugin"

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    gsap.from(footerRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 90%",
        toggleActions: "play none none reverse",
      },
    })
  }, [])

  const scrollToTop = () => {
    gsap.to(window, {
      duration: 1.5,
      scrollTo: 0,
      ease: "power3.inOut",
    })
  }

  return (
    <footer ref={footerRef} className="bg-gray-900 border-t border-gray-800 py-16 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold text-white mb-6">
              <span className="text-white">Durga</span>
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">DEX</span>
            </h3>
            <p className="text-gray-400 leading-relaxed text-lg mb-6 max-w-md">
              Creative developer passionate about building exceptional digital experiences with modern web technologies
              and beautiful design. Let's create something amazing together.
            </p>
            <div className="flex space-x-4">
              <Button
                size="icon"
                variant="outline"
                className="border-gray-600 text-gray-400 hover:text-white hover:border-blue-400 hover:bg-blue-400/10 rounded-2xl w-12 h-12 transition-all duration-300 hover:scale-110"
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="border-gray-600 text-gray-400 hover:text-white hover:border-blue-400 hover:bg-blue-400/10 rounded-2xl w-12 h-12 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="border-gray-600 text-gray-400 hover:text-white hover:border-blue-400 hover:bg-blue-400/10 rounded-2xl w-12 h-12 transition-all duration-300 hover:scale-110"
              >
                <Twitter className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="border-gray-600 text-gray-400 hover:text-white hover:border-blue-400 hover:bg-blue-400/10 rounded-2xl w-12 h-12 transition-all duration-300 hover:scale-110"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors text-lg">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors text-lg">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors text-lg">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors text-lg">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              <li className="text-gray-400 text-lg">Web Development</li>
              <li className="text-gray-400 text-lg">Mobile Apps</li>
              <li className="text-gray-400 text-lg">UI/UX Design</li>
              <li className="text-gray-400 text-lg">Consulting</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-lg mb-4 md:mb-0">© 2024 DurgaDEX. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <p className="text-gray-400 text-lg flex items-center">
              Made with <Heart className="h-5 w-5 text-red-500 mx-2 animate-pulse" /> using Next.js & GSAP
            </p>
            <Button
              onClick={scrollToTop}
              size="icon"
              variant="outline"
              className="border-gray-600 text-gray-400 hover:text-white hover:border-blue-400 hover:bg-blue-400/10 rounded-2xl w-12 h-12 transition-all duration-300 hover:scale-110"
            >
              <ArrowUp className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
