"use client";

import { SiLinkedin, SiGithub, SiX, SiBehance } from "react-icons/si";

const socials = [
  {
    icon: <SiLinkedin />,
    url: "https://www.linkedin.com/in/vaishali-chaudhary-475843163/",
    label: "LinkedIn",
    hoverColor: "hover:bg-[#0e76a8]",
  },
  {
    icon: <SiGithub />,
    url: "https://github.com/vaishali023",
    label: "GitHub",
    hoverColor: "hover:bg-[#333]",
  },
  {
    icon: <SiX />,
    url: "https://x.com/Vaishaliii23",
    label: "X (Twitter)",
    hoverColor: "hover:bg-[#000]",
  },
  {
    icon: <SiBehance />,
    url: "https://www.behance.net/vaishalchaudha9",
    label: "Behance",
    hoverColor: "hover:bg-[#0057ff]",
  },
];

export const SocialStack = () => {
  return (
    <>
      {/* Desktop: Vertical Stack - bottom right */}
      <div className="fixed bottom-6 right-6 z-50 hidden md:flex flex-col space-y-3">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noreferrer"
            title={social.label}
            className={`flex items-center justify-center 
              w-12 h-12 text-white text-xl rounded-full 
              bg-white/10 backdrop-blur-sm border border-white/20 
              shadow-lg transition-all duration-300 ease-in-out
              hover:scale-110 ${social.hoverColor}`}
          >
            {social.icon}
          </a>
        ))}
      </div>

      {/* Mobile: Horizontal Row - bottom center */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex md:hidden items-center space-x-4">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noreferrer"
            title={social.label}
            className={`flex items-center justify-center 
              w-10 h-10 text-white text-lg rounded-full 
              bg-white/10 backdrop-blur-sm border border-white/20 
              shadow-md transition-all duration-300 ease-in-out
              hover:scale-110 ${social.hoverColor}`}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </>
  );
};
