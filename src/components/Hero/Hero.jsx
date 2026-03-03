import React from "react";
import heroBg from "../../assets/hero.png";

const Hero = () => {
  return (
    <div
      className="max-w-7xl mx-auto mt-10"
      //   style={{ backgroundImage: `url(${heroBg})` }}
    >
      <img src={heroBg} alt="" />
    </div>
  );
};

export default Hero;
