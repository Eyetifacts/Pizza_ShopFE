import React from "react";
import pizzaHeroVideo from "../videos/pizzaHeroVideo.mp4";

const Hero = () => {
  return (
    <div className="relative w-full">
      <video autoPlay loop muted className="w-full">
        <source src={pizzaHeroVideo} type="video/mp4" />
      </video>
      <div className="absolute flex flex-col top-0 bottom-0 left-0 right-0 justify-center items-start">
        <h1 className="text-white bg-opacity-50 bg-purple p-3 ml-5">
          Here is some text for Papa Thomas
        </h1>
      </div>
    </div>
  );
};

export default Hero;
