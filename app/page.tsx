import Head from "next/head"
import Navigation from "@/components/Navigation"
import Hero from "@/components/Hero"
import MainContent from "@/components/MainContent"
import ScrollImageReveal from "@/components/ScrollImageReveal"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Portfolio() {
  const projectImages = [
    "https://www.apple.com/v/iphone-16/f/images/overview/photographic-styles/hero_style1__fvgk8kgjnumy_medium.jpg",
    "https://www.apple.com/v/iphone-16/f/images/overview/photographic-styles/hero_style2__egviy3dh914y_medium.jpg",
    "https://www.apple.com/v/iphone-16/f/images/overview/photographic-styles/hero_style3__d31mzro7g4ia_medium_2x.jpg",
  ]

  const projectCaptions = ["Mobile Photography App", "Social Media Platform", "Creative Portfolio"]

  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Head>
        <title>DURGADEX – Creative Developer</title>
        <meta
          name="description"
          content="Explore my portfolio with featured projects including apps, platforms, and creative work."
        />
      </Head>
      <Navigation />
      <Hero />
      <MainContent />
      <section id="projects" className="relative">
        <ScrollImageReveal
          images={projectImages}
          captions={projectCaptions}
          showLabel={true}
          labelClass="text-xl md:text-3xl font-bold bg-black/80 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-2xl"
        />
      </section>
      <div className="relative z-[60] bg-black">
        <Contact />
        <Footer />
      </div>
    </div>
  )
}
