import React from "react";

// title, bgImg, buttonText, description

const LeadCard = ({ item }) => {
  return (
    <div className="m-5 mb-10 w-80 shrink-0 flex flex-col justify-center">
      <h1 className="ml-5 text-5xl font-black uppercase">{item.title}</h1>
      <p className="ml-5 text-3xl">{item.description}</p>
    </div>
  );
};

export default LeadCard;
