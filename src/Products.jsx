// Products.jsx
import React from "react";
import { gsap } from "gsap";

const products = [
  {
    title: "Investment Plan A",
    description: "A comprehensive investment plan for maximizing returns.",
  },
  {
    title: "Investment Plan B",
    description: "A conservative investment approach with lower risk.",
  },
  // Add more products if needed
];

const Products = () => {
  React.useEffect(() => {
    gsap.from(".product", {
      opacity: 0,
      scale: 0.9,
      stagger: 0.3,
      duration: 1,
    });
  }, []);

  return (
    <section className="products py-12 bg-gray-900 text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
        <div className="flex flex-wrap justify-center">
          {products.map((item, index) => (
            <div
              key={index}
              className="product bg-green-500 p-6 m-4 rounded shadow-lg max-w-xs"
            >
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
