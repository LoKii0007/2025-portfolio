import React from "react";
import { Link } from "react-router-dom";
import { getFrequency, getTranslateX } from "../lib/helper";

const ProjectCard = ({
  data,
  index,
  darkTheme,
  scrollProgress,
  handleOpenProject,
  isMobile,
}) => {

  return (
    <div key={index} className={` w-full flex justify-center `}>
      <div
        style={{
          transform: `${isMobile ? "translateY" : "translateX"
            }(${getTranslateX(isMobile, index, scrollProgress)}px)`,
        }}
        className="h-[300px] md:h-[600px] w-full overflow-hidden flex items-center justify-center"
      >
        <Link
          to={data.link}
          target="_blank"
          className="h-[300px] w-[400px] md:h-[600px] md:w-[800px] relative flex items-center md:justify-start   overflow-visible hover:cursor-pointer group "
        >
          {/* sq edges  */}

          {/* <div className={`absolute ${getFrequency(index, scrollProgress) < 0 ? 'left-0' : 'right-0'} w-1/6 h-2 bg-red-500 -bottom-2`}></div>
          <div className={`absolute ${getFrequency(index, scrollProgress) < 0 ? '-left-2' : '-right-2'} w-2 h-1/6 bg-red-500 bottom-0`}></div> */}
          <div
            className={`h-[300px] w-[400px] md:h-[600px] md:w-[50%] overflow-hidden relative project-card-${index + 1
              }
            ${darkTheme ? "opacity-80" : "opacity-100"}
            `}
          >
            {/* description  */}
            <div className="absolute top-0 left-0 w-full h-full z-20 flex items-end justify-center">
              <div
                className={`bg-linear-to-b from-transparent to-50% to-black
                w-full flex flex-col gap-2 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 opacity-0 transition-all duration-300 group-hover:ease-out ease-in p-5`}
              >
                <div className={`text-white text-sm md:text-2xl font-bold`}>
                  {data.name}
                </div>
                <div className={`text-white/80 text-[8px] md:text-sm space-y-2`}>
                  {data.points.map((point, i) => (
                    <div
                      key={i}
                      className={`
                      ${i === data.points.length - 1
                          ? "bg-white text-black rounded-md p-1 px-2 w-fit"
                          : ""
                        }
                      `}
                    >
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <img
              src={`/${data.desktopImage}`}
              alt={data.name}
              className={`h-[300px] md:h-[600px] object-cover z-10 absolute w-[400px] md:w-[800px] scale-150 project-img-${index + 1
                }`}
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
