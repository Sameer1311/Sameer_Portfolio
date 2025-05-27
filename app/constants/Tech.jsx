"use client";
import Image from "next/image";
import React from "react";

const techStack = [
  { name: "React", icon: "/images/react.svg" },
  { name: "Three.js", icon: "/images/threejs.svg" },
  { name: "React Three Fiber", icon: "/images/atom.png" },
  { name: "Tailwind CSS", icon: "/images/tailwindcss.svg" },
  { name: "JavaScript", icon: "/images/javascript.svg" },
  { name: "Socket.IO", icon: "/images/plug.png" },
  { name: "WebSockets", icon: "/images/web.png" },
  { name: "Next.js", icon: "/images/next-js (1).svg" },
  { name: "Node.js", icon: "/images/node-js-svgrepo-com.svg" },
  { name: "Express.js", icon: "/images/express-svgrepo-com.svg" },
  { name: "MongoDB", icon: "/images/mongodb-svgrepo-com.svg" },
  { name: "Firebase", icon: "/images/icons8-firebase.svg" },
  { name: "Git / GitHub", icon: "/images/github.svg" },
  { name: "OpenAI", icon: "/images/icons8-brave-ai.svg" },
  { name: "API", icon: "/images/cloud-api.png" },
  { name: "Public API", icon: "/images/public.png" },
  { name: "AI API", icon: "/images/artificial-intelligence.png" },
];

const TechGrid = () => {
  return (
    <div className="bg-[#16161a] rounded-2xl p-6 col-span-1 lg:col-span-2 shadow-xl border border-[#262626]">
      <h2 className="font-semibold text-xl md:text-2xl mb-6 text-white text-center md:text-left">
        🚀 Tech Stack
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 sm:gap-6">
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className="group flex flex-col items-center justify-center rounded-2xl p-4 sm:p-5 backdrop-blur-md bg-white/5 border border-white/10 hover:bg-purple-600/30 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.05]"
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-14 md:h-14 relative">
              <Image
                src={tech.icon}
                alt={tech.name}
                fill
                className="object-contain invert brightness-0 "
              />
            </div>
            <span className="mt-2 text-xs sm:text-sm text-center text-white font-medium hidden md:block">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechGrid;
