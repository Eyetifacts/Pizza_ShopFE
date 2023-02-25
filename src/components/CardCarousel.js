import React from "react";
import Card from "./Card";

const CardCarousel = () => {
  return (
    <div className="justify-content-center items-center scrollbar-thin scrollbar-track-gray-light scrollbar-thumb-gray-dark flex flex-row my-10 mx-48">
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
