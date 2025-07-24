import React from "react";
import img from "../assets/phone.jpg";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Section2 = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".sec2Text",
        start: "top 80%",
        end: "top 30%", // required for scrub to work properly
        scrub: true, // ✅ Makes it scroll-linked
        markers: false, // set true for debugging
      },
    });

    tl.from(".sec2Text h4", {
      x: 100,
      opacity: 0,
      duration: 0.3,
    })
      .from(".sec2Text h1", {
        x: 100,
        opacity: 0,
        duration: 0.3,
      })
      .from(".sec2Text p", {
        x: 100,
        opacity: 0,
        duration: 0.3,
      })
      .from(".sec2Text button", {
        x: 30,
        scale: 0.95,
        opacity: 0,
        duration: 0.3,
      });
  }, []);

  return (
    <div className="section2">
      <div className="sec2Img">
        <img src={img} style={{ height: "600px" }} alt="App" />
      </div>
      <div className="sec2Text">
        <h4>Convenient Interaction</h4>
        <h1>Modern App</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
          maxime aperiam sunt officiis quasi corporis, praesentium libero
          ratione, omnis cumque magni blanditiis mollitia hic earum vero
          possimus inventore labore ipsam quaerat quod saepe. Temporibus?
        </p>
        <button>Download App</button>
      </div>
    </div>
  );
};

export default Section2;
