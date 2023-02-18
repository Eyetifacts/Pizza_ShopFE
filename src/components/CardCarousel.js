import React from "react";
import Card from "./Card";

const CardCarousel = () => {
  return (
    // <div className="carousel carousel-center p-4 space-x-4 bg-neutral rounded-box mx-44 my-5 w-screen scroll-auto">
    //   <div className="carousel-item">
    //     <Card />
    //   </div>
    //   <div className="carousel-item">
    //     <Card />
    //   </div>
    //   <div className="carousel-item">
    //     <Card />
    //   </div>
    //   <div className="carousel-item">
    //     <Card />
    //   </div>
    //   <div className="carousel-item">
    //     <Card />
    //   </div>
    // </div>
    <div className="w-screen overflow-x-scroll flex flex-row my-10">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default CardCarousel;
