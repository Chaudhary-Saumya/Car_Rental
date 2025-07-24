import { useGSAP } from "@gsap/react";
import React from "react";
import { gsap } from "gsap";

const Navbaar = () => {
  useGSAP(() => {
    gsap.from(".navMenu h3", {
      duration: 0.4,
      y: -100,
      ease: "power2.out",
      stagger: 0.3,
      opacity: 0,
    });
  });
  return (
    <div className="navbaar">
      <div className="navLogo">
        <h1>Unique</h1>
      </div>
      <div className="navMenu">
        <h3>About Us</h3>
        <h3>Cars</h3>
        <h3>Futures</h3>
        <h3>Download App</h3>
      </div>
    </div>
  );
};

export default Navbaar;
