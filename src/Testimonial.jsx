// Testimonial.jsx
import React from "react";
import { gsap } from "gsap";

const testimonials = [
  {
    name: "John Doe",
    feedback: "Outstanding service and incredible insights!",
  },
  {
    name: "Jane Smith",
    feedback: "Helped me achieve my financial goals quickly and effectively.",
  },
  // Add more testimonials if needed
];

const Testimonial = () => {
  React.useEffect(() => {
    gsap.from(".testimonial", { opacity: 0, y: 20, stagger: 0.3, duration: 1 });
  }, []);

  return (
    <section className="testimonials py-12 bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          What Our Clients Say
        </h2>
        <div className="flex flex-wrap justify-center">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="testimonial bg-white text-black p-6 m-4 rounded shadow-lg max-w-xs"
            >
              <p className="mb-4">"{item.feedback}"</p>
              <p className="font-semibold">- {item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
