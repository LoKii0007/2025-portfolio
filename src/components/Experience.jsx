import React, { useRef, useContext } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";
import { GlobalContext } from "../context/globalContext";

// --- Mock Data ---
const experiences = [
  {
    id: 1,
    role: "Interactive Full Stack Developer",
    company: "Marqueascendia",
    period: "Sep 2024 - Jul 2025",
    description:
      "Designed and built full-stack SaaS products and internal dashboards for Marqueascendia. Worked on admin panels, payment flows, invoice generation systems, and role-based dashboards that allowed admins to manage users, pricing, subscriptions, and application data in real time. Implemented secure backend APIs, database schemas, and frontend interfaces, owning features end-to-end from architecture to deployment.",
    skills: [
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
      "Stripe",
    ],
  },

  {
    id: 2,
    role: "Freelance Full Stack Developer",
    company: "Self-Employed",
    period: "2023 - Present",
    description:
      "Delivered end-to-end web solutions for startups, creators, and small businesses as a freelance developer. Built high-performance websites, dashboards, and custom web applications with a strong focus on clean UI, smooth animations, and scalable architecture. Handled everything from requirement gathering and UI development to backend APIs, deployment, and post-launch support.",
    skills: [
      "React",
      "Next.js",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
      "GSAP",
      "Stripe",
      "REST APIs",
    ],
  },
];

const Card = ({ item, index, darkTheme }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={`relative rounded-2xl font-mono ${
        darkTheme
          ? "dark-theme-bg dark-theme-shadow"
          : "light-theme-bg light-theme-shadow"
      }`}
    >
      <div
        className={`md:flex items-start justify-between group relative p-6 rounded-2xl transition-colors duration-300 overflow-hidden ${
          darkTheme
            ? " bg-[#212529]/80 hover:bg-[#212529]"
            : " bg-whitesmoke/80 hover:bg-whitesmoke"
        }`}
      >
        {/* Hover Glow Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div
            className={`absolute -inset-[1px] bg-gradient-to-r blur-sm rounded-2xl ${
              darkTheme
                ? "from-[rgba(161,196,253,0.2)] to-[rgba(194,233,251,0.2)]"
                : "from-[rgba(161,196,253,0.3)] to-[rgba(194,233,251,0.3)]"
            }`}
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 flex flex-col gap-2 md:gap-6 w-full">
          {/* Left Col: Date & Meta */}
          <div className="flex justify-between">
            <span
              className={`text-lg md:text-2xl font-bold tracking-tight mb-1 transition-colors ${
                darkTheme
                  ? "text-white group-hover:text-[rgba(161,196,253,1)]"
                  : "text-[#212529] group-hover:text-[rgba(161,196,253,1)]"
              }`}
            >
              {item.company}
            </span>
            <span
              className={`text-[10px] md:text-sm font-medium flex items-center gap-2 ${
                darkTheme ? "text-white/60" : "text-[#212529]/60"
              }`}
            >
              <Calendar className="w-4 h-4" />
              {item.period}
            </span>
          </div>

          {/* Right Col: Role & Details */}
          <div>
            <h3
              className={`text-lg md:text-xl font-semibold mb-2 flex items-center gap-2 ${
                darkTheme ? "text-white/90" : "text-[#212529]/90"
              }`}
            >
              {item.role}
              <motion.span
                className={`opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ${
                  darkTheme
                    ? "text-[rgba(161,196,253,1)]"
                    : "text-[rgba(161,196,253,1)]"
                }`}
              >
                <ChevronRight className="w-5 h-5" />
              </motion.span>
            </h3>
            <p
              className={`text-sm md:text-base leading-relaxed mb-4 ${
                darkTheme ? "text-white/70" : "text-[#212529]/70"
              }`}
            >
              {item.description}
            </p>

            {/* Micro-interaction: Staggered Tags */}
            <div className="flex flex-wrap gap-2">
              {item.skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  className={`text-xs font-medium px-2.5 py-1 rounded-full border transition-colors ${
                    darkTheme
                      ? "bg-[#212529]/50 text-white/80 border-white/20"
                      : "bg-white/50 text-[#212529]/80 border-[#212529]/20"
                  }`}
                  whileHover={{
                    scale: 1.05,
                    borderColor: darkTheme
                      ? "rgba(161, 196, 253, 0.5)"
                      : "rgba(161, 196, 253, 0.5)",
                    color: darkTheme ? "#fff" : "#212529",
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function ExperienceSection() {
  const { darkTheme } = useContext(GlobalContext);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      className={`min-h-screen p-4 sm:p-6 relative overflow-hidden transition-all duration-300 ease-in-out ${
        darkTheme ? "dark-theme-bg" : "light-theme-bg"
      }`}
    >
      <div className="max-w-4xl mx-auto relative " ref={containerRef}>
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`inline-flex items-center justify-center p-2 rounded-full border mb-4 transition-all duration-500 ${
              darkTheme
                ? "bg-[#212529] border-white/20"
                : "bg-whitesmoke border-[#212529]/20"
            }`}
          >
            <Briefcase
              className={`w-4 h-4 mr-2 ${
                darkTheme
                  ? "text-[rgba(161,196,253,1)]"
                  : "text-[rgba(161,196,253,1)]"
              }`}
            />
            <span
              className={`text-xs font-medium uppercase tracking-wider ${
                darkTheme ? "text-white/80" : "text-[#212529]/80"
              }`}
            >
              Career History
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`text-4xl md:text-5xl font-bold tracking-tight transition-colors duration-500 ${
              darkTheme ? "text-white" : "text-[#212529] "
            }`}
          >
            Experience
          </motion.h2>
        </div>

        {/* Timeline Line (Desktop Only) */}
        <div
          className={`absolute left-[24px] md:left-1/2 top-30 bottom-24 w-px -translate-x-1/2 hidden md:block transition-colors duration-500 ${
            darkTheme ? "bg-white/20" : "bg-[#212529]/20"
          }`}
        >
          <motion.div
            style={{ height }}
            className={`w-full bg-gradient-to-b to-transparent shadow-lg transition-all duration-500 ${
              darkTheme
                ? "from-[rgba(161,196,253,1)] via-[rgba(194,233,251,1)] shadow-[rgba(161,196,253,0.5)]"
                : "from-[rgba(161,196,253,1)] via-[rgba(194,233,251,1)] shadow-[rgba(161,196,253,0.3)]"
            }`}
          />
        </div>

        {/* Experience List */}
        <div className="space-y-4 md:space-y-12 relative z-10">
          {experiences.map((item, index) => (
            <div
              key={item.id}
              className={`md:flex ${
                index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              } relative`}
            >
              {/* Center Dot for Desktop */}
              <div
                className={`hidden md:flex absolute left-1/2 -translate-x-1/2 top-6 items-center justify-center w-8 h-8 rounded-full border z-20 shadow-xl transition-all duration-500 ${
                  darkTheme
                    ? "bg-[#212529] border-white/30"
                    : "bg-whitesmoke border-[#212529]/30"
                }`}
              >
                <div
                  className={`w-2 h-2 rounded-full animate-pulse ${
                    darkTheme
                      ? "bg-[rgba(161,196,253,1)]"
                      : "bg-[rgba(161,196,253,1)]"
                  }`}
                />
              </div>

              <div className="w-full md:w-[45%]">
                <Card item={item} index={index} darkTheme={darkTheme} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
