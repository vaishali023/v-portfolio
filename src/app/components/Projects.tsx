"use client"
import { motion } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    title: "Qbit Pay",
    description: "Developed a blockchain explorer to visualize and track transactionsonArweave, including pending and completed payments. Implemented user-friendly  features for enhanced transparency and improved blockchain accessibility.",
    image: "/q-bit.png",
    liveLink: "https://qbit-explorer.netlify.app/",
    githubLink: "https://github.com/vaishali023/qbit-pay",
  },
  {
    title: "Analytics Dashboard",
    description: "A comprehensive analytics dashboard with data visualization and insights.",
    image: "/analytics.png",
    liveLink: "https://chain-analytics-dashboard.netlify.app/",
    githubLink: "https://github.com/vaishali023/analytics-dashboard",
  },
  {
    title: "aoVest",
    description: "A decentralized application (dApp) on the Arweave blockchain enabling users to mint tokens with advanced features, including token airdrop distribution and customizable vesting schedules",
    image: "/aovest.png",
    liveLink: "https://aovest.stream/",
    githubLink: "", 
  },
  {
    title: "Echogram",
    description: "A modern social app with a stunning UI with a native mobile feel,a special tech stack, an infinite scroll feature, and amazing performance using React JS, Appwrite, TypeScript, and more",
    image: "/echogram.png",
    liveLink: "https://echogram-demo.netlify.app/",
    githubLink: "https://github.com/vaishali023/echogram",
  },
]

export const Projects = () => {
  return (
    <section id="projects" className="min-h-screen py-24 px-6 bg-stone-950 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Projects</h2>

        <div className="grid gap-10 md:grid-cols-2">
          {projects.map(({ title, description, image, liveLink, githubLink }) => (
            <motion.div
              key={title}
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative group rounded-xl bg-stone-900 border border-white/10 overflow-hidden shadow-md"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 z-0 bg-gradient-to-br from-pink-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition duration-300 blur-2xl" />

              {/* Project Image */}
              <div className="relative w-full h-52 overflow-hidden rounded-t-xl">
                <Image
                  src={image}
                  alt={title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>

              {/* Card Content */}
              <div className="p-5 relative z-10 text-left">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-sm text-gray-300 mb-4">{description}</p>
                <div className="flex gap-4 text-sm flex-wrap">
                  {liveLink && (
                    <a
                      href={liveLink}
                      target="_blank"
                      className="px-4 py-2 rounded-lg bg-pink-500 text-white hover:bg-pink-600 transition"
                    >
                      View Live
                    </a>
                  )}
                  {githubLink && githubLink.trim() !== "" && (
                    <a
                      href={githubLink}
                      target="_blank"
                      className="px-4 py-2 rounded-lg border border-white/20 hover:border-white/40 transition"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
