import React from "react";
import Card from "./Card";

const CardCarousel = () => {
  return (
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
