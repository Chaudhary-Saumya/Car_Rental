import React from "react";
import carImage from "../assets/car2.webp";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const Section1 = () => {
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

    // Animate heading lines one-by-one
    tl.from(".sec1Text h1", {
      x: -150,
      y: 30,
      opacity: 0,
      stagger: 0.3,
    })

      // Animate the paragraph after headings
      .from(
        ".sec1Text p",
        {
          opacity: 0,
          y: 50,
          duration: 1.2,
        },
        "-=0.5"
      )

      // Animate the image (optionally)
      .from(
        ".sec1Img img",
        {
          x: 200,
          scale: 0.8,
          opacity: 0,
          duration: 1.5,
        },
        "-=1"
      );
  }, []);

  return (
    <div className="section1">
      <div className="sec1Text">
        <h1 className="">Premium</h1>
        <h1 className="">Car Rental</h1>
        <h1 className="">in India</h1>
        <p className="">
          Don't deny yourself the pleasure of driving <br /> the best premium
          car from around the world here and now
        </p>
      </div>
      <div className="sec1Img">
        <img
          src={carImage}
          style={{
            height: "110vh",
          }}
        />
      </div>
    </div>
  );
};

export default Section1;
