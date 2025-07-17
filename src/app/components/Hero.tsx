"use client"
import { useEffect, useState } from "react"

const words = ["Design", "Develop"]

export const Hero = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
<section className="relative z-10 flex flex-col items-center justify-center h-screen text-center text-white px-6 overflow-hidden">
  <div className="relative h-[80px] md:h-[100px] overflow-hidden flex items-center">
    <span
      key={words[index]}
      className="block text-5xl md:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 animate-fade-slide"
    >
      {words[index]}
    </span>
  </div>
  <p className="mt-6 text-lg md:text-2xl text-gray-200">
    Hey, I am <span className="font-semibold text-white">Vaishali</span> — Frontend dev • Design lover • Creative soul
  </p>
</section>

  )
}
