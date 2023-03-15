import React, { useState } from "react";
import MenuCarouselCard from "../components/menuPage/MenuCarouselCard";
import LeadCard from "../components/menuPage/LeadCard";
import menuInitialState from "../productDef/menuInitialHomeState";
import ProductCard from "../components/menuPage/ProductCard2";
import { images } from "../constants";

const MenuPage = () => {
  const [menuState, setMenuState] = useState(menuInitialState);
  const titleProperty =
    menuState[0].menuSections[0].menuCarousel.carouselCards[0].title;
  const descriptionProperty =
    menuState[0].menuSections[0].menuCarousel.carouselCards[0].description;
  const imgProperty = images.pizza;

  const carouselItems = menuState[0].menuSections[0].menuCarousel.carouselCards;
  const leadItem = menuState[0].menuSections[0].menuCarousel.leadCard;
  const sectionTwo = menuState[0].menuSections[1];

  return (
    <>
      <section className="bg-slate-100">
        <div className="flex flex-row mx-20">
          <LeadCard item={leadItem} />
          <div className="flex flex-row items-center scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-slate-800 mx-auto p-5">
            {carouselItems.map((item) => (
              <MenuCarouselCard
                item={item}
                key={item.title}
                bgImg={images.pizza}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-slate-100">
        <div className="ml-20 mt-5 text-5xl font-black uppercase">
          PAPA PICKS
        </div>
        <div className="ml-20">
          <ProductCard bgImg={images.pizza} />
        </div>
      </section>
    </>
  );
};

export default MenuPage;
