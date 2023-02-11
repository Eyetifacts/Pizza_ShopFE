import React from "react";
import pizzaImage from "../images/papa-thomas.png";

const LogoBar = () => {
  return (
    <div className="flex flex-row items-center gap-3">
      <img width="200px" src={pizzaImage} />
      <div>My Address</div>
      <div>My Language</div>
      <div>My Login</div>
      <button>Sign Up</button>
    </div>
  );
};

export default LogoBar;
