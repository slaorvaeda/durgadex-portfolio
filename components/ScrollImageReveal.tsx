"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const ScrollImageReveal = ({
  images = [
    "https://www.apple.com/v/iphone-16/f/images/overview/photographic-styles/hero_style1__fvgk8kgjnumy_medium.jpg",
    "https://www.apple.com/v/iphone-16/f/images/overview/photographic-styles/hero_style2__egviy3dh914y_medium.jpg",
    "https://www.apple.com/v/iphone-16/f/images/overview/photographic-styles/hero_style3__d31mzro7g4ia_medium_2x.jpg",
  ],
  showLabel = true,
  labelClass = "",
  captions = [],
}) => {
  const containerRef = useRef(null)
  const imageRefs = useRef([])
  const [activeIndex, setActiveIndex] = useState(0)

  const addToRefs = (el) => {
    if (el && !imageRefs.current.includes(el)) {
      imageRefs.current.push(el)
    }
  }

  useEffect(() => {
    imageRefs.current.forEach((img, i) => {
      gsap.set(img, {
        "--clip-progress": i === 0 ? 0 : 1,
        opacity: i === 0 ? 1 : 0,
      })

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: `${i * 100}vh top`,
        end: `${(i + 1) * 100}vh top`,
        scrub: true,
        onUpdate: (self) => {
          if (img) {
            img.style.setProperty("--clip-progress", 1 - self.progress)
            gsap.to(img, {
              opacity: self.progress,
              duration: 0.2,
              ease: "none",
            })
          }
        },
        onEnter: () => setActiveIndex(i),
        onEnterBack: () => setActiveIndex(i),
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div ref={containerRef} className="relative h-[150vh] mb-20">
      {images.map((src, i) => (
        <div
          key={i}
          ref={addToRefs}
          className="fixed top-0 left-0 w-full h-screen bg-cover bg-center transition-opacity duration-300"
          style={{
            backgroundImage: `url(${src})`,
            zIndex: i,
            "--clip-progress": i === 0 ? 0 : 1,
            opacity: i === 0 ? 1 : 0,
            clipPath: `inset(0 calc(var(--clip-progress, ${i === 0 ? 0 : 1}) * 100%) 0 0)`,
          }}
        />
      ))}

      {showLabel && (
        <div className={`absolute bottom-10 left-4 md:left-10 text-white text-xl md:text-3xl ${labelClass}`}>
          {captions[activeIndex] || `Active Image: ${activeIndex + 1}`}
        </div>
      )}
    </div>
  )
}

export default ScrollImageReveal
