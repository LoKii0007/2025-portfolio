import { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../context/globalContext";
import { motion } from "motion/react";
import { Github, Linkedin, Mail, Play, X } from "lucide-react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const { darkTheme } = useContext(GlobalContext);
  const [title, setTitle] = useState("Design");
  const [count, setCount] = useState(0);

  const socialLinks = [
    {
      icon: <Github size={28} strokeWidth={1.5} />,
      link: "https://github.com/LoKii0007",
      label: "Github",
    },
    {
      icon: <Linkedin size={28} strokeWidth={1.5} />,
      link: "https://www.linkedin.com/in/yadav-lokesh/",
      label: "LinkedIn",
    },
    {
      icon: <X size={28} strokeWidth={1.5} />,
      link: "https://www.x.com/pixelflowui/",
      label: "X",
    },
    {
      icon: <Mail size={28} strokeWidth={1.5} />,
      link: "mailto:lokeshyadv8177@gmail.com",
      label: "Email",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (count % 2 === 0) {
        setTitle("Frontend");
      } else {
        setTitle("Design");
      }
      setCount((prev) => prev + 1);
    }, 2000);

    return () => clearTimeout(timer);
  }, [count]);

  const conatinerVariants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.5,
      },
    },
  };

  const descVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <div
        className={`portfolio-main w-screen overflow-x-hidden transition-all duration-500 ease-in-out font-mono leading-tight tracking-[-3%] ${
          darkTheme ? "dark-theme-bg" : "light-theme-bg"
        } `}
      >
        <section className="portfolio min-h-screen md:h-screen transition-all duration-500 ease-in-out w-full md:w-screen flex relative">
          <div className="portfolio-section w-full md:w-screen transition-all duration-500 ease-in-out flex flex-col-reverse gap-10 md:gap-0 md:flex-row justify-center md:justify-around items-center">
            <div className=" flex flex-col ">
              <motion.div
                initial={{
                  opacity: 0,
                  filter: "blur(5px)",
                  x: "-10%",
                  scale: 1.1,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  filter: "blur(0px)",
                  scale: 1,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="portfolio-desc flex flex-col cursor-pointer"
              >
                <div
                  className={`${
                    darkTheme ? "dark-theme-stroke" : "light-theme-stroke"
                  } desc-1 uppercase relative text-transparent text-[32px] md:text-[50px] lg:text-[70px] font-bold transition-all duration-500 ease-in-out before:content-[attr(data-text)] before:w-0 before:absolute before:overflow-hidden before:transition-all before:duration-300 before:ease-out before:z-10 before:whitespace-nowrap hover:before:w-full hover:before:transition-all hover:before:duration-500 hover:before:ease-linear`}
                  id="portfolio-desc"
                  data-text="Hi i'm"
                >
                  Hi i'm{" "}
                  <span className="name text-[rgba(161,196,253,1)] [-webkit-text-stroke:1px black] before:z-20 before:text-[rgba(161,196,253,1)]">
                    Lokesh
                  </span>
                </div>
                <div
                  className={`${
                    darkTheme ? "dark-theme-stroke" : "light-theme-stroke"
                  } desc-2 uppercase relative text-transparent text-[32px] md:text-[50px] lg:text-[70px] font-bold transition-all duration-500 ease-in-out before:content-[attr(data-text)] before:w-0 before:absolute before:overflow-hidden before:transition-all before:duration-300 before:ease-out before:z-10 before:whitespace-nowrap hover:before:w-full hover:before:transition-all hover:before:duration-500 hover:before:ease-linear`}
                  id="portfolio-desc"
                  data-text={`A ${title}`}
                >
                  A {title}
                </div>
                <div
                  className={`${
                    darkTheme ? "dark-theme-stroke" : "light-theme-stroke"
                  } desc-3 uppercase relative text-transparent text-[32px] md:text-[50px] lg:text-[70px] font-bold transition-all duration-500 ease-in-out before:content-[attr(data-text)] before:w-0 before:absolute before:overflow-hidden before:transition-all before:duration-300 before:ease-out before:z-10 before:whitespace-nowrap hover:before:w-full hover:before:transition-all hover:before:duration-500 hover:before:ease-linear`}
                  id="portfolio-desc"
                  data-text="Engineer."
                >
                  Engineer.
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mt-8 flex flex-col gap-6"
              >
                {/* Buttons */}
                <div className="flex gap-4">
                  <button
                    onClick={() => {
                      window.scrollTo({
                        top: document.getElementById("projects").offsetTop,
                        behavior: "smooth",
                      });
                    }}
                    className={`px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 ${
                      darkTheme
                        ? "bg-white text-black hover:bg-gray-200"
                        : "bg-black text-white hover:bg-gray-800"
                    }`}
                  >
                    View Projects
                  </button>
                  <button
                    onClick={() => {
                      window.scrollTo({
                        top: document.getElementById("contact").offsetTop,
                        behavior: "smooth",
                      });
                    }}
                    className={`px-8 py-3 rounded-full border font-semibold transition-all hover:bg-opacity-10 ${
                      darkTheme
                        ? "border-white text-white hover:bg-white hover:text-black"
                        : "border-black text-black hover:bg-black hover:text-white"
                    }`}
                  >
                    Contact Me
                  </button>
                </div>

                <motion.div
                  variants={conatinerVariants}
                  initial="hidden"
                  animate="show"
                  className="flex gap-6 items-center mt-2 ms-6"
                >
                  {socialLinks.map((link, index) => (
                    <motion.div
                      variants={descVariants}
                      key={index}
                      className="flex items-center"
                    >
                      <Link
                        to={link.link}
                        target="_blank"
                        className={`transition-transform hover:scale-110 ${
                          darkTheme
                            ? "text-gray-400 hover:text-white"
                            : "text-gray-600 hover:text-black"
                        }`}
                        aria-label={link.label}
                      >
                        {link.icon}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>

            <motion.div
              initial={{
                opacity: 0,
                filter: "blur(5px)",
                x: "10%",
                scale: 1.1,
              }}
              animate={{
                opacity: 1,
                x: 0,
                filter: "blur(0px)",
                scale: 1,
              }}
              transition={{
                duration: 0.5,
              }}
              className="pe-2 flex justify-center items-center relative"
            >
              <img
                className={`${
                  darkTheme ? "dark-theme-border" : "light-theme-border"
                } md:w-[400px] md:h-[400px] sm:w-[300px] sm:h-[300px] w-[250px] h-[250px] rounded-full shadow-lg transition-all duration-500 ease-in-out`}
                src="images/portfolio.jpg"
                alt=""
              />
            </motion.div>
          </div>

          {/* <div className="absolute bottom-10 left-0 w-full z-10 flex justify-center items-center">
            <div className=" w-full max-w-7xl rounded-[20px] flex justify-between items-center ">
              <div>Local time : 10:00 AM</div>
              <div className="p-3 flex items-center gap-3">
                <div className="flex flex-col justify-center items-center h-full gap-3">
                  <div className="flex justify-between items-center w-full">
                    <button className=" text-black px-4 py-2 rounded-md">
                      <Play size={20} />
                    </button>
                    <p>name</p>
                  </div>
                  <div className="w-[200px] h-1 rounded-full bg-gray-500"></div>
                </div>
                <div className="h-20 w-20 rounded-md bg-gray-500"></div>
              </div>
            </div>
          </div> */}
        </section>
      </div>
    </>
  );
};

export default Portfolio;
