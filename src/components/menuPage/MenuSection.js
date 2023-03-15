import React from "react";
import ProductCard from "./ProductCard";

const MenuSection = (sectionObject) => {
  return (
    <section className="bg-slate-100">
      <div className="ml-20 mt-5 text-5xl font-black uppercase">
        {sectionObject.sectionObject.title}
      </div>
      <div className="flex flex-row ml-20">
        {sectionObject.sectionObject.productCards.productCardArray.map(
          (productCard) => {
            return (
              <ProductCard key={productCard.id} cardDetails={productCard} />
            );
          }
        )}
      </div>
    </section>
  );
};

export default MenuSection;
