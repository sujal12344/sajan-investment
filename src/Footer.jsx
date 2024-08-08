import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Footer = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Entrance animations
    gsap.from(".footer-item", {
      opacity: 0,
      y: 20,
      duration: 0.5,
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".footer",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      },
    });

    // Social icon hover effects
    gsap.to(".social-icon", {
      scale: 1.2,
      duration: 0.3,
      ease: "power2.out",
      paused: true,
      onEnter: () => gsap.to(".social-icon", { scale: 1.2 }),
      onLeave: () => gsap.to(".social-icon", { scale: 1 }),
    });
  }, []);

  return (
    <footer className="footer bg-dark py-8">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="footer-item text-gray-400 hover:text-green-500 cursor-pointer">
          &copy; 2024 Sajan Investment. All rights reserved.
        </div>
        <div className="footer-item space-x-4">
          <a
            href="#"
            className="social-icon text-gray-400 hover:text-green-500"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="#"
            className="social-icon text-gray-400 hover:text-green-500"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="#"
            className="social-icon text-gray-400 hover:text-green-500"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
