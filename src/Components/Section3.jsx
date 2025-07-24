import React from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Section3 = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section3",
        start: "top 80%",
        end: "top 30%",
        scrub: false,
        markers: false,
      },
    });

    tl.from(".sec3Text", {
      x: -100,
      opacity: 0,
      duration: 0.6,
    })
      .from(
        ".sec3Text h4, .sec3Text h1, .sec3Text p",
        {
          opacity: 0,
          y: 40,
          duration: 0.5,
          stagger: 0.2,
        },
        "-=0.4"
      )
      .from(
        ".sec3btn h3",
        {
          opacity: 0,
          scale: 0.8,
          duration: 0.5,
          stagger: 0.1,
        },
        "-=0.5"
      )
      .from(
        ".bigImg img",
        {
          y: 100,
          opacity: 0,
          scale: 0.8,
          duration: 0.6,
          stagger: 0.2,
        },
        "-=0.4"
      )
      .from(
        ".smallImg img",
        {
          y: 100,
          opacity: 0,
          duration: 0.4,
          stagger: 0.15,
        },
        "-=0.5"
      )
      .from(
        ".sec3Img button",
        {
          scale: 0.8,
          opacity: 0,
          duration: 0.5,
        },
        "-=0.4"
      );
  }, []);

  return (
    <div className="section3">
      <div className="sec3Text">
        <h4>Only the best cars</h4>
        <h1>Our Vehicle Fleet</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          <br /> Repellendus expedita nobis impedit dolorem est itaque incidunt
          sed adipisci accusamus nesciunt!
          <br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut tempora
          error pariatur architecto <br /> odit nesciunt natus debitis
          recusandae ipsam voluptates.
        </p>
        <div className="sec3btn">
          <h3>Premium</h3>
          <h3>Coupe</h3>
          <h3>Hypercars</h3>
          <h3>Sportcar</h3>
          <h3>Cabriolet</h3>
          <h3>Limousines</h3>
        </div>
      </div>

      <div className="sec3Img">
        <div className="bigImg">
          <img
            src="https://images.unsplash.com/photo-1554223090-7e482851df45?w=600&auto=format&fit=crop&q=60"
            alt="Big Car 1"
          />
          <img
            src="https://images.unsplash.com/photo-1469285994282-454ceb49e63c?q=80&w=1171&auto=format"
            alt="Big Car 2"
          />
          <img
            src="https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1172&auto=format"
            alt="Big Car 3"
          />
        </div>

        <div
          className="smallImg"
          style={{
            display: "flex",
            gap: "15px",
            flexWrap: "wrap",
            marginBottom: "20px",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1283&auto=format"
            style={{ width: "23%" }}
            alt="Small Car 1"
          />
          <img
            src="https://images.unsplash.com/photo-1511994477422-b69e44bd4ea9?q=80&w=1379&auto=format"
            style={{ width: "23%" }}
            alt="Small Car 2"
          />
          <img
            src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?q=80&w=1228&auto=format"
            style={{ width: "23%" }}
            alt="Small Car 3"
          />
          <img
            src="https://images.unsplash.com/photo-1674514377288-96cbff0551fb?w=600&auto=format"
            style={{ width: "23%" }}
            alt="Small Car 4"
          />
        </div>

        <button
          style={{
            padding: "10px 30px",
            borderRadius: "50px",
            background: "#000",
            color: "#fff",
            border: "none",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Show All
        </button>
      </div>
    </div>
  );
};

export default Section3;
