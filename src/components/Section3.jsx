import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { useContext } from "react";
import { useGSAP } from "@gsap/react";
import { GlobalContext } from "../context/globalContext";

function Section3() {
  gsap.registerPlugin(ScrollTrigger);
  const { darkTheme } = useContext(GlobalContext);

  useGSAP(() => {
    gsap.to(".word-text, .inner-circle, .middle-circle, .outer-circle", {
      rotation: 0,
      scrollTrigger: {
        trigger: ".word",
        start: "top top",
        end: `+=${window.innerHeight}`,
        scrub: 1,
      },
    });

    gsap.to(".word", {
      scrollTrigger: {
        trigger: ".word",
        start: "top top",
        end: `+=${window.innerHeight}`,
        pin: true,
        scrub: 1,
      },
    });
  }, []);

  return (
    <>
      <div
        className={` font-mono ${
          darkTheme ? "dark-theme-bg" : "light-theme-bg"
        } word h-screen z-[100] text-[150px] md:text-[210px] font-bold leading-[150px] md:leading-[230px] whitespace-normal md:whitespace-nowrap overflow-hidden flex justify-center items-center text-center`}
      >
        <div
          className={`${
            darkTheme
              ? "dark-theme-bg dark-theme-text"
              : "light-theme-bg light-theme-text"
          } word-text rotate-10 z-[100] flex justify-center items-center text-center`}
        >
          Build clean. <br />
          Ship fast.
        </div>
        <div
          className={`${
            darkTheme
              ? "dark-theme-bg-light dark-theme-text"
              : "light-theme-bg-light light-theme-text"
          } outer-circle rounded-full border-2 border-white overflow-hidden w-[100vw] h-[100vw] md:w-[45vw] md:h-[45vw] z-[120] -rotate-10 flex justify-center items-center absolute text-center`}
        >
          Build clean. <br />
          Ship fast.
        </div>
        <div
          className={`${
            darkTheme
              ? "dark-theme-bg dark-theme-text"
              : "light-theme-bg light-theme-text"
          } middle-circle rounded-full border-2 border-white overflow-hidden w-[60vw] h-[60vw] md:w-[30vw] md:h-[30vw] z-[140] rotate-10 flex justify-center items-center absolute text-center`}
        >
          Build clean. <br />
          Ship fast.
        </div>
        <div
          className={`${
            darkTheme
              ? "dark-theme-bg-light dark-theme-text"
              : "light-theme-bg-light light-theme-text"
          } inner-circle rounded-full border-2 border-white overflow-hidden w-[30vw] h-[30vw] md:w-[15vw] md:h-[15vw] z-[150] -rotate-10 flex justify-center items-center absolute text-center`}
        >
          Build clean. <br />
          Ship fast.
        </div>
      </div>
    </>
  );
}

export default Section3;
