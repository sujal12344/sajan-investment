// Hero.jsx
import React from "react";
import { gsap } from "gsap";

const Hero = () => {
  React.useEffect(() => {
    gsap.from(".hero-content", { opacity: 0, y: 50, duration: 1.5 });
  }, []);

  return (
    <section className="hero bg-black text-white h-screen flex items-center justify-center relative">
      <div className="hero-content text-center">
        <h1 className="text-4xl font-bold mb-4">Transforming Investments</h1>
        <p className="text-xl mb-8">Empowering Your Financial Future</p>
        <button className="bg-green-500 text-white px-6 py-3 rounded">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
