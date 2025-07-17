"use client"
import { useState, useEffect } from "react"

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/70 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Your Name */}
        <span className="text-lg md:text-xl font-semibold tracking-wide text-white">
          Vaishali
        </span>

      <nav className="space-x-6 text-white text-sm font-medium">
  <a href="#about" className="hover:text-pink-400 transition">About</a>
  <a href="#skills" className="hover:text-pink-400 transition">Skills</a>
  <a href="#projects" className="hover:text-pink-400 transition">Projects</a>
  <a href="#contact" className="hover:text-pink-400 transition">Contact</a>
</nav>

      </div>
    </header>
  )
}
