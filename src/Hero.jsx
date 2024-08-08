import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Hero = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Parallax effect
    gsap.to(".hero-bg", {
      y: "20%",
      ease: "none",
      scrollTrigger: {
        trigger: ".hero",
        start: "top",
        end: "100%",
        scrub: true,
      },
    });

    // Entry animations
    gsap.from(".animate-in", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
    });
  }, []);

  return (
    <section className="hero relative h-screen flex items-center justify-center bg-dark">
      <div className="hero-bg absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-30"></div>
      <div className="content z-10 text-center animate-in">
        <h1 className="text-4xl font-bold mb-4">
          Transforming Investments, Empowering Your Financial Future
        </h1>
        <p className="text-lg mb-8">
          Our expert investment consultants are here to guide you towards your
          financial goals.
        </p>
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
