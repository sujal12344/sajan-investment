import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Services = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Entrance animations
    gsap.from(".service-card", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".service-card",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      },
    });

    // Hover effects
    gsap.to(".service-card", {
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out",
      paused: true,
      onEnter: () => gsap.to(".service-card", { scale: 1.05 }),
      onLeave: () => gsap.to(".service-card", { scale: 1 }),
    });
  }, []);

  return (
    <section className="services py-20 bg-dark">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="service-card bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-bold mb-4">Investment</h3>
            <p className="mb-6">
              We provide expert guidance on a wide range of investment options
              to help you reach your financial goals.
            </p>
            <a href="#" className="text-green-500 hover:text-green-600">
              Learn More
            </a>
          </div>
          {/* Add more service card components */}
        </div>
      </div>
    </section>
  );
};

export default Services;
