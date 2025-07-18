"use client"
import { useEffect, useState } from "react"
import { SocialStack } from "./ui/SocialStack"

const words = ["Design", "Build"]

export const Hero = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative z-10 flex flex-col items-center justify-center h-screen text-center text-white px-6 overflow-hidden font-sans">
      {/* Rotating text */}
      <div className="relative h-[80px] md:h-[100px] overflow-hidden flex items-center">
        <span
          key={words[index]}
          className="block text-5xl md:text-6xl font-bold tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-rose-500 animate-fade-slide"
        >
          {words[index]}
        </span>
      </div>

      <p className="mt-6 text-lg md:text-2xl text-gray-200 max-w-xl leading-relaxed font-light">
        Hello, I'm <span className="font-semibold text-white">Vaishali</span> — a designer at heart who crafts beautiful, user-friendly interfaces that bridge creativity and functionality.
      </p>
    </section>
  )
}
