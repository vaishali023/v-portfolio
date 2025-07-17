"use client"

import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTailwindcss,
  SiFigma,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobelightroom,
  SiNodedotjs,
  SiMongodb,
} from "react-icons/si"

import { motion } from "framer-motion"

const skills = [
  { name: "TypeScript", icon: SiTypescript, glow: "from-blue-400 to-cyan-500" },
  { name: "React", icon: SiReact, glow: "from-cyan-400 to-sky-500" },
  { name: "Next.js", icon: SiNextdotjs, glow: "from-gray-300 to-gray-100" },
  { name: "JavaScript", icon: SiJavascript, glow: "from-yellow-400 to-orange-300" },
  { name: "Tailwind CSS", icon: SiTailwindcss, glow: "from-teal-400 to-cyan-400" },
  { name: "Figma", icon: SiFigma, glow: "from-pink-400 to-purple-500" },
  { name: "Photoshop", icon: SiAdobephotoshop, glow: "from-blue-600 to-indigo-500" },
  { name: "Illustrator", icon: SiAdobeillustrator, glow: "from-orange-400 to-yellow-400" },
  { name: "Lightroom", icon: SiAdobelightroom, glow: "from-sky-500 to-blue-500" },
  { name: "Node.js", icon: SiNodedotjs, glow: "from-green-400 to-lime-400" },
  { name: "MongoDB", icon: SiMongodb, glow: "from-emerald-400 to-green-500" },
]

export const Skills = () => {
  return (
    <section id="skills" className="min-h-screen py-24 px-6 bg-stone-950 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12"> Skills</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map(({ name, icon: Icon, glow }) => (
            <motion.div
              key={name}
              whileHover={{ scale: 1.08 }}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className={`relative bg-stone-900 p-6 rounded-2xl border border-white/10 shadow-sm group overflow-hidden`}
            >
              {/* Glow border on hover */}
              <div
                className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${glow} blur-lg z-0`}
              />

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center">
                <Icon className="text-4xl mb-3" />
                <p className="text-sm font-medium">{name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
