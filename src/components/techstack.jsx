import { useContext, useEffect } from "react";
import { GlobalContext } from "../context/globalContext";
import SkillBtn from "./skillBtn";
import { gsap } from "gsap";


function TechStack() {
  const { darkTheme } = useContext(GlobalContext);

  useEffect(() => {
    gsap.to(".frontend", {
      width: "100%",
      y: "-20vh",
      scrollTrigger: {
        trigger: ".frontend",
        start: "top bottom",
        end: "top 20%",
        scrub: 1,
        // markers : true
      },
    });
    gsap.to(".backend-1", {
      width: "100%",
      y: "-10vh",
      scrollTrigger: {
        trigger: ".backend-1",
        start: "top bottom",
        end: "top 20%",
        scrub: 1,
        // markers : true
      },
    });
    gsap.to(".backend-2", {
      width: "100%",
      y: "10vh",
      scrollTrigger: {
        trigger: ".backend-2",
        start: "top bottom",
        end: "top 20%",
        scrub: 1,
        // markers : true
      },
    });
    gsap.to(".devops", {
      width: "100%",
      y: "20vh",
      scrollTrigger: {
        trigger: ".devops",
        start: "top bottom",
        end: "top 20%",
        scrub: 1,
        // markers : true
      },
    });
  });

  return (
    <>
      <div id="skills"
        className={` ${
          darkTheme ? "dark-theme-bg" : "light-theme-bg"
        } techstack h-screen w-screen overflow-hidden relative flex items-center justify-center`}
      >
        <div className={`${darkTheme?'light-theme-bg light-theme-text':'dark-theme-bg dark-theme-text'} rounded-full px-5 py-2`}>MY TECHSTACK</div>
        <div className="skills z-[800] w-full absolute flex flex-col items-center justify-center max-[600px]:justify-evenly">
          <div className="frontend w-1/2 flex justify-center items-center">
            <div className="front-1 w-full flex items-center justify-around">
              <SkillBtn name="Node.js" />
              <div className="react front ">
                <img className="icon-img h-[60px] max-[600px]:h-[50px]" src="/images/react.png" alt="" />
              </div>
            </div>
            <div className="front-2 w-full flex items-center justify-around">
              <div className="next front">
                <img className="icon-img h-[60px] max-[600px]:h-[50px]" src="/images/next.png" alt="" />
                {/* Next.js */}
              </div>
              <SkillBtn name="Three.js" />
            </div>
          </div>

          <div className="backend-1  flex justify-around items-center">
            <SkillBtn name="Pub/Subs" />
            <SkillBtn name="Websockets" />
          </div>

          <div className="backend-2  flex justify-around items-center">
            <SkillBtn name="GSAP" />
            <SkillBtn name="Redis" />
          </div>
          <div className="devops w-1/2 flex justify-center items-center">
            <div className="front-1 w-full flex items-center justify-around">
              <SkillBtn name="docker" />
              <div className="prometheus dev ">
                <img className="icon-img h-[60px] max-[600px]:h-[50px]" src="/images/prometheus.png" alt="" />
              </div>
            </div>
            <div className="front-2 w-full flex items-center justify-around">
              <div className="grafana dev ">
                <img className="icon-img h-[60px] max-[600px]:h-[50px]" src="/images/grafana.png" alt="" />
              </div>
              <SkillBtn name="Solidity" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TechStack;
