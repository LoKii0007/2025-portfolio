"use client";

import Portfolio from "@/components/portfolio";
import Contact from "@/components/contact";
import SnowflakeCursor from "@/components/ui/SnowflakeCursor";
import Section3 from "@/components/Section3";
import Projectsv2 from "@/components/Projectsv2";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/Experience";
import "@/css/home.css";

export default function HomePage() {
  return (
    <>
      <SnowflakeCursor />
      <Portfolio />
      <Section3 />
      <Projectsv2 />
      <ExperienceSection />
      {/* <SkillsSection /> */}
      <Contact />
    </>
  );
}
