import React from "react";
import ProductCardForm from "./ProductCardForm";
import { images } from "../../constants";

const ProductCard = ({ cardDetails }) => {
  return (
    <div className="relative h-650 w-96 border-2 mx-2 mt-5 rounded-3xl border-gray-300">
      <img
        src={cardDetails.image.imageUrl}
        alt=""
        className="rounded-3xl h-72 w-96 object-cover"
      />
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold mt-2 ml-3">
          {cardDetails.title}
        </h2>
        <h2 className="text-xl font-semibold mt-2 mr-3 underline">
          {cardDetails.details.text}
        </h2>
      </div>
      <div>
        <p className="text-lg mt-1 ml-3">
          {`${cardDetails.price} ${cardDetails.description}`}
        </p>
      </div>
      <div>
        <ProductCardForm fields={cardDetails.productCardForm} />
      </div>
      <div className="absolute h-20 mt-2 mb-5 pt-8 left-0 bottom-0">
        {cardDetails.buttonGroup.map((btn) => (
          <button key={btn.id} className="ml-3 btn-primary">
            {btn.buttonText}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
