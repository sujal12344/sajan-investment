import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Navbar = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Sticky navbar animation
    gsap.to(".navbar", {
      scrollTrigger: {
        trigger: ".hero",
        start: "top",
        end: "100%",
        scrub: true,
      },
      y: 0,
      opacity: 1,
      duration: 0.5,
    });

    // Logo/menu hover effects
    gsap.from(".nav-link", {
      y: 10,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
    });
  }, []);

  return (
    <nav className="navbar fixed top-0 left-0 w-full z-50 bg-dark py-4 px-6 flex justify-between items-center shadow-lg">
      <div className="logo text-2xl font-bold">Sajan Investment</div>
      <ul className="nav-links flex space-x-6">
        <li className="nav-link hover:text-green-500 cursor-pointer bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full">
          Home
        </li>
        <li className="nav-link hover:text-green-500 cursor-pointer bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full">
          Services
        </li>
        <li className="nav-link hover:text-green-500 cursor-pointer bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full">
          Testimonials
        </li>
        <li className="nav-link hover:text-green-500 cursor-pointer bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full">
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
