import { About } from "./components/About"
import { Contact } from "./components/Contact"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Projects } from "./components/Projects"
import { Skills } from "./components/Skills"

export default function Home() {
  return (
   <main className="relative w-full overflow-x-hidden">
  <Header />

  {/* Background video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
  >
    <source src="/fluidArt.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  <Hero />

<div className="relative z-10 h-48 -mt-32 bg-gradient-to-b from-transparent via-stone-950/80 to-stone-950" />

  {/* Other Sections */}
  <div className="relative z-10">
    <About />
    <Skills />
    <Projects />
    <Contact />
  </div>
</main>

  )
}
