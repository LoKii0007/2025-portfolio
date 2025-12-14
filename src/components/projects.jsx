import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { projectsList } from "../constants/projectData";
import { useContext } from "react";
import { GlobalContext } from "../context/globalContext";
import { gsap } from "gsap";
import useWindow from "../hooks/useWindow";

function Projects() {
  const { isMobile } = useWindow();

  const { darkTheme } = useContext(GlobalContext);

  useGSAP(() => {
    const height = window.innerHeight;

    gsap.to(".work-project", {
      opacity: 0,
      scrollTrigger: {
        trigger: ".work-project",
        start: "top top",
        end: `+=${height}`,
        pin: true,
        pinSpacing: false,
        scrub: 1,
      },
    });

    if (!isMobile) {
      const pinnedSections = gsap.utils.toArray(".pinned");

      pinnedSections.forEach((section, index, sections) => {
        gsap.to(section, {
          scrollTrigger: {
            trigger: section,
            start: "top 15%",
            end: `+=${window.innerHeight * 0.8 * (sections.length - index)}`,
            pin: true,
            scrub: 1,
          },
        });

        gsap.to(section, {
          scale: 0.5,
          scrollTrigger: {
            trigger: section,
            start: "top 15%",
            end: `+=400`,
            scrub: 1,
          },
        });
      });
    }
  }, [isMobile]);

  return (
    <>
      <div
        id="projects"
        className={` ${
          darkTheme
            ? "dark-theme-bg dark-theme-text"
            : "light-theme-bg light-theme-text"
        } projects overflow-hidden flex flex-col justify-center items-center z-50 relative`}
      >
        <div
          className={`work-project h-screen w-screen flex flex-col justify-center items-center`}
        >
          <div className="main flex">
            <div className="main-left text-xs font-normal">
              <div className="w-full text-end">SOME</div> <div>SELECTED</div>
            </div>
            <div className="main-middle text-[130px] font-bold leading-[95px] px-[10px]">
              PROJECTS
            </div>
            <div className="main-right text-xs font-normal">
              WEB <br />
              DEVOLOPMENT
            </div>
          </div>
          <div className="text-center main-bottom text-xs font-normal py-10 px-3">
            CUSTOMER PROJECTS , PERSONAL PROJECTS <br />
            SOME RESEARCH AND PLAYGROUND.
          </div>
        </div>

        {projectsList?.map((data, index) => (
          <div
            key={index}
            className={`${
              projectsList.length - 1 === index ? "scroll" : "pinned"
            } ${
              darkTheme ? "dark-theme-bg" : "light-theme-bg"
            } project-wrapper w-screen flex flex-col items-center justify-center`}
          >
            <div
              style={{ transform: `translateX(${Math.sin(index) * 100}px)` }}
              className={` ${
                darkTheme
                  ? "dark-theme-bg dark-theme-text light-theme-shadow dark-theme-gradient "
                  : "light-theme-bg light-theme-text light-theme-shadow light-theme-gradient"
              } project-card relative overflow-hidden w-[80vw] transition-all duration-500 rounded-[32px] gap-3 flex project-${
                index + 1
              } p-3`}
            >
              <div className="project-left w-[30%] flex flex-col justify-between">
                <div className="left-top p-3">
                  <div className="project-name text-lg font-semibold pb-4">
                    {data.name}
                  </div>
                  <div className="project-desc text-sm max-[800px]:text-[11px] flex flex-col">
                    {data.points.map((point, index) => (
                      <div key={index} className="pb-2">
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
                <Link target="_blank" to={data.link} className={`button-left`}>
                  <button
                    className={`${
                      darkTheme
                        ? "dark-theme-bg dark-theme-text"
                        : "light-theme-bg light-theme-text"
                    } project-button font-medium text-lg w-full transition-all duration-500 rounded-full flex justify-between items-center p-3 border-0`}
                  >
                    <div className="button-left">View Project</div>
                    <div className="button-right">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-arrow-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                        />
                      </svg>
                    </div>
                  </button>
                </Link>
              </div>
              <div className="project-right flex justify-center items-center">
                <Link to={data.link} target="blank">
                  <img
                    className="img project-img w-[54vw] rounded-[22px]"
                    src={`/${data.desktopImage}`}
                    alt="image"
                  />
                </Link>
              </div>
            </div>
            {projectsList.length - 1 !== index && (
              <div
                className={`w-full ${
                  darkTheme ? "dark-theme-bg" : "light-theme-bg"
                } pb-5`}
              ></div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default Projects;
