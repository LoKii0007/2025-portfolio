import React, { useRef, useContext } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";
import { GlobalContext } from "../context/globalContext";

// --- Mock Data ---
const experiences = [
  {
    id: 2,
    role: "Software Development Engineer 1",
    company: "Quanto Consulting",
    period: "Jun 2025 - Sep 2025",
    description: [
      "Developed scalable backend services using Node.js and Express, handling API requests, business logic, and database interactions",
      "Optimized PostgreSQL queries and database schemas, improving data retrieval performance and reducing API response times",
      "Integrated third-party services and internal APIs to support core application features and improve system interoperability",
      "Participated in code reviews, debugging, and production issue resolution, ensuring code quality and system reliability",
    ],
    skills: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "REST APIs",
      "Backend Development",
      "System Design",
    ],
  },
  {
    id: 1,
    role: "Interactive Full Stack Developer",
    company: "Marqueascendia",
    period: "Sep 2024 - Jun 2025",
    description: [
      "Designed and built full-stack SaaS products and internal dashboards for Marqueascendia",
      "Worked on admin panels, payment flows, invoice generation systems, and role-based dashboards",
      "Enabled admins to manage users, pricing, subscriptions, and application data in real time",
      "Implemented secure backend APIs, database schemas, and frontend interfaces",
      "Owned features end-to-end from architecture to deployment",
    ],
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
    id: 3,
    role: "Freelance Web Developer",
    company: "Self-Employed",
    period: "2023 - Present",
    description: [
      "Crafted immersive frontend and storytelling websites for startups, creators, and brands",
      "Built visually rich, high-performance websites focused on narrative flow and user engagement",
      "Emphasized clean UI, smooth animations, and meaningful micro-interactions",
      "Translated ideas and brand stories into interactive web experiences",
      "Delivered polished, production-ready sites with ongoing improvements and refinements",
    ],
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
      className={`relative rounded-2xl font-mono ${darkTheme
        ? "dark-theme-shadow"
        : "light-theme-shadow"
        }`}
    >
      <div
        className={`md:flex items-start justify-between group relative p-4 md:p-6 rounded-2xl transition-colors duration-300 overflow-hidden ${darkTheme
          ? " bg-[#212529]/80"
          : " bg-whitesmoke/80"
          }`}
      >

        {/* Content Container */}
        <div className="relative z-10 flex flex-col gap-2 md:gap-6 w-full">
          {/* Left Col: Date & Meta */}
          <div className="flex justify-between">
            <span
              className={`text-lg md:text-2xl font-bold tracking-tight mb-1 transition-colors leading-[130%] ${darkTheme
                ? "text-white group-hover:text-[rgb(var(--theme-color-rgb))]"
                : "text-[#212529] group-hover:text-[rgb(var(--theme-color-rgb))]"
                }`}
            >
              {item.company}
            </span>
            <span
              className={`text-[10px] md:text-sm font-medium flex items-center gap-2 ${darkTheme ? "text-white/60" : "text-[#212529]/60"
                }`}
            >
              <Calendar className="w-4 h-4 hidden sm:block" />
              {item.period}
            </span>
          </div>

          {/* Right Col: Role & Details */}
          <div>
            <h3
              className={`text-lg md:text-xl font-semibold mb-2 flex items-center gap-2 ${darkTheme ? "text-white/90" : "text-[#212529]/90"
                }`}
            >
              {item.role}
              <motion.span
                className={`opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ${darkTheme
                  ? "text-[rgb(var(--theme-color-rgb))]"
                  : "text-[rgb(var(--theme-color-rgb))]"
                  }`}
              >
                <ChevronRight className="w-5 h-5" />
              </motion.span>
            </h3>
            <ul
              className={`text-xs md:text-sm leading-relaxed mb-4 space-y-3 list-disc list-inside ${darkTheme ? "text-white/70" : "text-[#212529]/70"
                }`}
            >
              {item.description.map((point, idx) => (
                <li className="leading-[130%]" key={idx}>{point}</li>
              ))}
            </ul>

            {/* Micro-interaction: Staggered Tags */}
            <div className="flex flex-wrap gap-2">
              {item.skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  className={`text-xs font-medium px-2.5 py-1 rounded-full border transition-colors ${darkTheme
                    ? "bg-[#212529]/50 text-white/80 border-white/20"
                    : "bg-white/50 text-[#212529]/80 border-[#212529]/20"
                    }`}
                  whileHover={{
                    borderColor: darkTheme
                      ? "rgba(var(--theme-color-rgb), 0.5)"
                      : "rgba(var(--theme-color-rgb), 0.5)",
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
      className={`min-h-screen p-4 sm:p-6 relative overflow-hidden transition-all duration-300 ease-in-out ${darkTheme ? "dark-theme-bg" : "light-theme-bg"
        }`}
    >
      <div className="max-w-4xl mx-auto relative " ref={containerRef}>
        {/* Header */}
        <div className="mb-8 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`text-4xl md:text-5xl font-bold tracking-tight transition-colors duration-500 ${darkTheme ? "text-white" : "text-[#212529] "
              }`}
          >
            Experience
          </motion.h2>
        </div>

        {/* Timeline Line */}
        <div
          className={`absolute left-[24px] md:left-[32px] top-30 bottom-24 w-px -translate-x-1/2 transition-colors duration-500 ${darkTheme ? "bg-white/20" : "bg-[#212529]/20"
            }`}
        >
          <motion.div
            style={{ height }}
            className={`w-full bg-linear-to-b to-transparent shadow-lg transition-all duration-500 ${darkTheme
              ? "shadow-[rgba(var(--theme-color-rgb),0.5)]"
              : "shadow-[rgba(var(--theme-color-rgb),0.3)]"
              }`}
          />
        </div>

        {/* Experience List */}
        <div className="space-y-4 md:space-y-8 relative z-10">
          {experiences.map((item, index) => (
            <div
              key={item.id}
              className={`md:flex relative pl-12 md:pl-20`}
            >
              {/* Dot */}
              <div
                className={`flex absolute left-[24px] md:left-[32px] -translate-x-1/2 top-8 items-center justify-center w-8 h-8 rounded-full border z-20 shadow-xl transition-all duration-500 ${darkTheme
                  ? "bg-[#212529] border-white/30"
                  : "bg-whitesmoke border-[#212529]/30"
                  }`}
              >
                <div
                  className={`w-2 h-2 rounded-full animate-pulse ${darkTheme
                    ? "bg-[rgb(var(--theme-color-rgb))]"
                    : "bg-[rgb(var(--theme-color-rgb))]"
                    }`}
                />
              </div>

              <div className="w-full">
                <Card item={item} index={index} darkTheme={darkTheme} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
