import { useContext, useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GlobalContext } from "../context/globalContext";
import { Sun, Moon } from "lucide-react";
import useWindow from "../hooks/useWindow";

const NAVBAR_COLLAPSED_H = 56;
const NAVBAR_EXPANDED_H = 260;

const Navbar = () => {
  const { isMobile } = useWindow();
  const { darkTheme, setDarkTheme } = useContext(GlobalContext);

  const [handleView, setHandleView] = useState("portfolio");
  const [navbarHidden, setNavbarHidden] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const navItems = [
    { label: "Projects", view: "projects" },
    { label: "Skills", view: "skills" },
    { label: "Connect", view: "contact" },
    // { label: "Say, Hi", view: null },
  ];

  /* ---------------------------------- */
  /* Theme persistence                  */
  /* ---------------------------------- */
  useEffect(() => {
    const cached = localStorage.getItem("darkTheme");
    if (cached) setDarkTheme(JSON.parse(cached));
  }, []);

  useEffect(() => {
    localStorage.setItem("darkTheme", JSON.stringify(darkTheme));
  }, [darkTheme]);

  /* ---------------------------------- */
  /* Scroll hide / show navbar          */
  /* ---------------------------------- */
  useEffect(() => {
    let last = window.scrollY;

    const onScroll = () => {
      const curr = window.scrollY;
      setNavbarHidden(curr > last);
      last = curr;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ---------------------------------- */
  /* Scroll to section                  */
  /* ---------------------------------- */
  useEffect(() => {
    const el = document.getElementById(handleView);
    if (!el) return;

    window.scrollTo({
      top: el.offsetTop,
      behavior: "smooth",
    });

    setExpanded(false);
  }, [handleView]);

  /* ---------------------------------- */
  /* Reset expanded state on resize     */
  /* ---------------------------------- */
  useEffect(() => {
    setExpanded(false);
    setNavbarHidden(false); // Reset navbar visibility on resize
  }, [isMobile]);

  /* ---------------------------------- */
  /* Animations                         */
  /* ---------------------------------- */
  const navbarVariants = useMemo(() => ({
    hidden: {
      y: isMobile ? 150 : -150,
    },
    visible: {
      y: 0,
    },
  }), [isMobile]);

  const mobileItemsVariants = {
    hidden: {
      opacity: 0,
      y: 12,
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.08 * i,
      },
    }),
    exit: {
      opacity: 0,
      y: 10,
    },
  };

  /* ---------------------------------- */
  return (
    <nav
      className={`fixed z-200 w-screen flex justify-center ${isMobile ? "bottom-4" : "top-4"
        }`}
    >
      <motion.div
        variants={navbarVariants}
        animate={navbarHidden ? "hidden" : "visible"}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="w-full flex justify-center"
        key={`navbar-${isMobile}`}
      >
        <motion.div
          animate={{
            height: isMobile
              ? expanded
                ? NAVBAR_EXPANDED_H
                : NAVBAR_COLLAPSED_H
              : NAVBAR_COLLAPSED_H,
            width: isMobile ? "92vw" : "80vw",
          }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          className={`overflow-hidden custom-navbar rounded-[30px] shadow-lg flex flex-col ${darkTheme ? "bg-[#212529]" : "bg-[whitesmoke]"
            }`}
        >
          {/* ---------------- Mobile ---------------- */}
          {isMobile ? (
            <>
              {/* Top bar */}
              <div className="h-14 px-6 flex items-center justify-between shrink-0">
                {/* Menu */}
                <button
                  onClick={() => setExpanded((p) => !p)}
                  className="flex flex-col gap-1.5"
                >
                  <span
                    className={`w-6 h-0.5 transition ${darkTheme ? "bg-white" : "bg-black"
                      } ${expanded ? "rotate-45 translate-y-2" : ""}`}
                  />
                  <span
                    className={`w-6 h-0.5 transition ${darkTheme ? "bg-white" : "bg-black"
                      } ${expanded ? "opacity-0" : ""}`}
                  />
                  <span
                    className={`w-6 h-0.5 transition ${darkTheme ? "bg-white" : "bg-black"
                      } ${expanded ? "-rotate-45 -translate-y-2" : ""}`}
                  />
                </button>

                {/* Theme toggle */}
                <button
                  onClick={() => setDarkTheme((p) => !p)}
                  className="h-6 overflow-hidden"
                >
                  <div
                    className={`flex flex-col transition-transform duration-300 ${darkTheme ? "-translate-y-6" : "translate-y-0"
                      }`}
                  >
                    <Sun size={24} />
                    <Moon size={24} className="text-white" />
                  </div>
                </button>
              </div>

              {/* Mobile menu */}
              <AnimatePresence>
                {expanded && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center gap-4 py-4"
                  >
                    {navItems.map((item, i) => (
                      <motion.div
                        key={item.label}
                        custom={i}
                        variants={mobileItemsVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={() => {
                          if (item.view) setHandleView(item.view);
                        }}
                        className={`text-lg font-medium cursor-pointer ${darkTheme ? "text-white" : "text-black"
                          }`}
                      >
                        {item.label}
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          ) : (
            /* ---------------- Desktop ---------------- */
            <div className="h-14 px-4 flex items-center justify-between">
              <button
                onClick={() => setDarkTheme((p) => !p)}
                className="h-6 overflow-hidden"
              >
                <div
                  className={`flex flex-col transition-transform duration-300 ${darkTheme ? "-translate-y-6" : "translate-y-0"
                    }`}
                >
                  <Sun size={24} />
                  <Moon size={24} className="text-white" />
                </div>
              </button>

              <div className="flex gap-4">
                {navItems.map((item) => (
                  <div
                    key={item.label}
                    onClick={() =>
                      item.view && setHandleView(item.view)
                    }
                    className={`cursor-pointer px-3 py-1 rounded-full transition ${darkTheme
                        ? "text-white hover:bg-white/10"
                        : "text-black hover:bg-black/10"
                      }`}
                  >
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
