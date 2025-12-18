import { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import Home from "./screens/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Toaster } from "react-hot-toast";
import { GlobalContextProvider } from "./context/globalContext";
import "./index.css";
import "./app.css";

function App() {
  gsap.registerPlugin(ScrollTrigger);

  // ------------------------------------
  // lenis smooth scroll
  // ------------------------------------

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://silentpulse.vercel.app/script.js";
    script.defer = true;
    script.setAttribute(
      "data-website-id",
      import.meta.env.VITE_UMAMI_WEBSITE_ID
    );
    document.body.appendChild(script);

    const lenis = new Lenis();

    lenis.on("scroll", (e) => {});

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
  }, []);

  return (
    <>
      <GlobalContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
          </Routes>
          <Toaster />
        </Router>
      </GlobalContextProvider>
    </>
  );
}

export default App;
