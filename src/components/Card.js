import React from "react";
import normalBake from "../images/normal-bake.png";

const Card = () => {
  return (
    <div className="mx-5 mb-10 w-96 shrink-0">
      <img src={normalBake} className="w-full" alt="Greasy pepperoni pizza serve on a circular wooden cutting board" />
    </div>
  );
};

export default Card;
