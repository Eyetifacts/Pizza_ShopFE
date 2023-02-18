import React from "react";
import Card from "./Card";

const CardCarousel = () => {
  return (
    <div className="w-screen scrollbar-thin scrollbar-track-gray-light scrollbar-thumb-gray-dark flex flex-row my-10 mx-3">
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
