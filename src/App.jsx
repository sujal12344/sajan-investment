import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Services from "./Services";
import Footer from "./Footer";
import "./index.css";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    gsap.from(".animate-fade-in", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".animate-fade-in",
        start: "top 80%",
      },
    });
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
