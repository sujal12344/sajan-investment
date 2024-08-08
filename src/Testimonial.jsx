import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Testimonials = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Carousel animation
    gsap.to(".testimonial", {
      x: "-100%",
      duration: 10,
      ease: "none",
      repeat: -1,
      scrollTrigger: {
        trigger: ".testimonials",
        start: "top",
        end: "200%",
        scrub: true,
        pin: true,
      },
    });

    // Quote animation
    gsap.from(".testimonial-quote", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
    });
  }, []);

  return (
    <section className="testimonials relative h-screen bg-dark">
      <div className="container mx-auto px-6 h-full flex items-center">
        <div className="testimonial-container w-full h-full overflow-hidden">
          <div className="testimonial flex space-x-6">
            <div className="testimonial-item flex-shrink-0 w-full h-full flex items-center justify-center">
              <div className="testimonial-quote p-8 bg-gray-800 rounded-lg shadow-lg text-center">
                <q className="text-lg mb-4">
                  The investment guidance I received from Sajan Investment has
                  been invaluable in achieving my financial goals.
                </q>
                <p className="text-green-500 font-bold">- John Doe</p>
              </div>
            </div>
            {/* Add more testimonial items */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
