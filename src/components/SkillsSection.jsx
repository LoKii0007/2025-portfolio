import React, { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlobalContext } from "../context/globalContext";

const categories = ["All", "Frontend", "Backend", "Languages"];

const skills = [
  { name: "React", category: "Frontend", icon: "⚛️" },
  { name: "Next.js", category: "Frontend", icon: "▲" },
  { name: "TypeScript", category: "Frontend", icon: "📘" },
  { name: "Tailwind CSS", category: "Frontend", icon: "🎨" },
  { name: "Three.js", category: "Frontend", icon: "🎨" },
  { name: "GSAP", category: "Frontend", icon: "🎨" },
  { name: "Motion", category: "Frontend", icon: "🎨" },
  { name: "Bootstrap", category: "Frontend", icon: "🎨" },
  { name: "shadcn/ui", category: "Frontend", icon: "🎨" },
  { name: "Redux", category: "Frontend", icon: "🎨" },
  { name: "Zustand", category: "Frontend", icon: "🎨" },

  { name: "Node.js", category: "Backend", icon: "🟢" },
  { name: "PostgreSQL", category: "Backend", icon: "🐘" },
  { name: "MongoDB", category: "Backend", icon: "🐘" },
  { name: "Express.js", category: "Backend", icon: "🐘" },
  { name: "Prisma", category: "Backend", icon: "🐘" },
  { name: "GraphQL", category: "Backend", icon: "🕸️" },
  { name: "Pub/Subs", category: "Backend", icon: "🕸️" },
  { name: "Redis", category: "Backend", icon: "🕸️" },
  { name: "Websockets", category: "Backend", icon: "🕸️" },

  { name: "Figma", category: "Design", icon: "🖌️" },

  { name: "Docker", category: "DevOps", icon: "🐳" },
  { name: "AWS", category: "DevOps", icon: "☁️" },
  { name: "Git", category: "DevOps", icon: "📦" },

  { name: "JavaScript", category: "Languages", icon: "🟢" },
  { name: "TypeScript", category: "Languages", icon: "🟢" },
  { name: "Solidity", category: "Languages", icon: "🟢" },
];

const FilterTab = ({ label, active, onClick, darkTheme }) => (
  <button
    onClick={onClick}
    className={`relative px-3 py-1.5 md:px-5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-colors duration-200 
      ${
        active
          ? darkTheme
            ? "text-white"
            : "text-white"
          : darkTheme
          ? "text-white/60 hover:text-white"
          : "text-[#212529]/60 hover:text-[#212529]"
      }`}
  >
    {active && (
      <motion.div
        layoutId="active-pill"
        className={`absolute inset-0 rounded-full transition-colors duration-500 ${
          darkTheme ? "bg-white/20" : "bg-[#212529]/20"
        }`}
        transition={{ type: "spring", duration: 0.6 }}
      />
    )}
    <span className="relative z-10">{label}</span>
  </button>
);

const SkillBadge = ({ skill, darkTheme }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.5 }}
    whileHover={{
      scale: 1.05,
      backgroundColor: darkTheme
        ? "rgba(33, 37, 41, 1)"
        : "rgba(255, 255, 255, 1)",
      boxShadow: darkTheme
        ? "0px 8px 15px rgba(161, 196, 253, 0.2)"
        : "0px 8px 15px rgba(0, 0, 0, 0.1)",
    }}
    transition={{ duration: 0.2 }}
    className={`
      cursor-default group flex items-center gap-2 md:gap-3 px-4 py-2 md:px-5 md:py-3 
      backdrop-blur-sm rounded-xl md:rounded-2xl shadow-sm transition-all duration-300
      ${
        darkTheme
          ? "bg-[#212529]/80 border border-white/20 hover:border-white/40"
          : "bg-white/80 border border-[#212529]/20 hover:border-[#212529]/40"
      }
    `}
  >
    <span className="text-lg md:text-xl filter grayscale group-hover:grayscale-0 transition-all duration-300">
      {skill.icon}
    </span>
    <span
      className={`font-medium text-xs md:text-sm transition-colors duration-300 ${
        darkTheme ? "text-white/90" : "text-[#212529]/90"
      }`}
    >
      {skill.name}
    </span>
  </motion.div>
);

export default function SkillsSection() {
  const { darkTheme } = useContext(GlobalContext);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section
      id="skills"
      className={`py-12 px-4 md:py-24 md:px-6 min-h-[400px] flex flex-col items-center skills-section transition-all duration-500 ease-in-out ${
        darkTheme ? "dark-theme-bg" : "light-theme-bg"
      }`}
    >
      <div className="max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16 space-y-3 md:space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className={`text-3xl md:text-4xl font-bold tracking-tight transition-colors duration-500 ${
              darkTheme ? "text-white" : "text-[#212529]"
            }`}
          >
            Technical Proficiency
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={`max-w-lg mx-auto text-sm md:text-base px-2 transition-colors duration-500 ${
              darkTheme ? "text-white/70" : "text-[#212529]/70"
            }`}
          >
            A curated list of the technologies I use to build robust and
            scalable digital products.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <div className=" mb-8 flex md:mb-12 w-full md:w-fit mx-auto justify-center">
          <div
            className={`flex flex-wrap justify-center gap-2 rounded-full p-2 transition-all duration-500 ${
              darkTheme ? "bg-white/10" : "bg-[#212529]/10"
            }`}
          >
            {categories.map((cat) => (
              <FilterTab
                key={cat}
                label={cat}
                active={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
                darkTheme={darkTheme}
              />
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="flex flex-wrap justify-center gap-3 md:gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <SkillBadge
                key={skill.name}
                skill={skill}
                darkTheme={darkTheme}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
