import React from "react";
import { Ri24HoursLine } from "react-icons/ri";
import { MdOutlineContactSupport } from "react-icons/md";
import { IoLogoModelS } from "react-icons/io";
import { AiOutlineSafety } from "react-icons/ai";

const Section4 = () => {
  return (
    <div className="section4">
      <div className="sec4One">
        <h3>(Taking care of every client)</h3>
        <h1>Key Futures</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis a
          voluptates <br /> ex deleniti itaque natus architecto tempore
          molestias veniam sit dolorum deserunt,
        </p>
      </div>
      <div className="sec4Two">
        <div className="sec4Box1">
          <span>
            <Ri24HoursLine />
          </span>
          <h3>24-hours car delivery</h3>
        </div>
        <div className="sec4Box1">
          <span>
            <MdOutlineContactSupport />
          </span>
          <h3>24/7 technicle support</h3>
        </div>
        <div className="sec4Box1">
          <span>
            <IoLogoModelS />
          </span>
          <h3>All model have premium package</h3>
        </div>
        <div className="sec4Box1">
          <span>
            <AiOutlineSafety />
          </span>
          <h3>Absolute confidentially</h3>
        </div>
      </div>
    </div>
  );
};

export default Section4;
