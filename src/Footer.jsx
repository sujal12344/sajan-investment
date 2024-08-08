// Footer.jsx
import React from "react";
import { gsap } from "gsap";

const Footer = () => {
  React.useEffect(() => {
    gsap.from(".footer", { opacity: 0, y: 50, duration: 1 });
  }, []);

  return (
    <footer className="footer bg-green-500 text-white py-6">
      <div className="container mx-auto text-center">
        <p>
          &copy; 2024 Sajan Investment Consulting Services. All Rights Reserved.
        </p>
        <div className="mt-4">
          <a
            href="mailto:sajaninvestmentconsultant@gmail.com"
            className="underline"
          >
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
