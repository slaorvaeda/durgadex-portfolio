"use client"

import ScrollImageReveal from "./ScrollImageReveal"

export default function Projects() {
  const projectImages = [
    "https://www.apple.com/v/iphone-16/f/images/overview/photographic-styles/hero_style1__fvgk8kgjnumy_medium.jpg",
    "https://www.apple.com/v/iphone-16/f/images/overview/photographic-styles/hero_style2__egviy3dh914y_medium.jpg",
    "https://www.apple.com/v/iphone-16/f/images/overview/photographic-styles/hero_style3__d31mzro7g4ia_medium_2x.jpg",
  ]

  const projectCaptions = [
    "Mobile Photography App - Advanced Camera Controls",
    "Social Media Platform - Real-time Photo Filters",
    "Creative Portfolio - Dynamic Image Galleries",
  ]

  return (
    <section id="projects" className="relative">
      <div className="absolute top-0 left-0 right-0 z-10 bg-black/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-8">Featured Projects</h2>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
            Scroll down to explore my latest work and see how I bring ideas to life
          </p>
        </div>
      </div>

      <ScrollImageReveal
        images={projectImages}
        captions={projectCaptions}
        showLabel={true}
        labelClass="text-2xl md:text-3xl font-bold bg-black/70 backdrop-blur-sm p-4 rounded-lg"
      />
    </section>
  )
}
