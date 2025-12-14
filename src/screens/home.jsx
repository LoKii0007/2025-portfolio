import Portfolio from "../components/portfolio";
import Projects from "../components/projects";
import TechStack from "../components/techstack";
import Contact from "../components/contact";
import "../css/home.css";
import SnowflakeCursor from "../components/ui/SnowflakeCursor";
import Section3 from "../components/Section3";
import Projectsv2 from "../components/Projectsv2";
import SkillsSection from "../components/SkillsSection";
import ExperienceSection from "../components/Experience";

const Home = () => {
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
};

export default Home;
