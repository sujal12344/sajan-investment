import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Contact = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Form validation animation
    gsap.from(".form-input.error", {
      x: -10,
      duration: 0.3,
      repeat: 1,
      yoyo: true,
    });

    // Button hover effect
    gsap.to(".submit-btn", {
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out",
      paused: true,
      onEnter: () => gsap.to(".submit-btn", { scale: 1.05 }),
      onLeave: () => gsap.to(".submit-btn", { scale: 1 }),
    });
  }, []);

  return (
    <section className="contact py-20 bg-dark">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <form className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-400 font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="form-input bg-gray-700 text-white py-2 px-4 rounded-lg w-full"
              />
            </div>
            {/* Add more form fields */}
            <button
              type="submit"
              className="submit-btn bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full w-full"
            >
              Submit
            </button>
          </form>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
            <p className="mb-2">123 Main Street</p>
            <p className="mb-2">Anytown, USA 12345</p>
            <p className="mb-2">Phone: (123) 456-7890</p>
            <p className="mb-2">Email: info@sajaninvestment.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
