// App.jsx
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Testimonial from "./Testimonial";
import Products from "./Products";
import Footer from "./Footer";
import "./index.css"; // Import TailwindCSS styles

const App = () => {
  return (
    <Router>
      <div className="App bg-black text-white">
        <Navbar />
        <Hero />
        {/* <Switch> */}
        {/* <Route path="/testimonials" component={Testimonial} />
        <Route path="/products" component={Products} /> */}
        <Testimonial />
        <Products />
        {/* Additional routes can be added here */}
        {/* </Switch> */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
