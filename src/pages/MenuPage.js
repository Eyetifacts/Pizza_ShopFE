import React, { useState } from "react";
import MenuCarouselCard from "../components/menuPage/MenuCarouselCard";
import LeadCard from "../components/menuPage/LeadCard";
import menuInitialState from "../productDef/menuInitialHomeState";
import { images } from "../constants";
import MenuSection from "../components/menuPage/MenuSection";

const MenuPage = () => {
  const [menuState, setMenuState] = useState(menuInitialState);

  const carouselItems = menuState[0].menuSections[0].menuCarousel.carouselCards;
  const leadItem = menuState[0].menuSections[0].menuCarousel.leadCard;
  const sectionTwo = menuState[0].menuSections[1];
  const sectionFour = menuState[0].menuSections[3];
  const sectionFive = menuState[0].menuSections[4];
  const sectionSix = menuState[0].menuSections[5];
  const sectionSeven = menuState[0].menuSections[6];
  const sectionEight = menuState[0].menuSections[7];

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
      <MenuSection key={sectionTwo.id} sectionObject={sectionTwo} />
      <MenuSection key={sectionFour.id} sectionObject={sectionFour} />
      <MenuSection key={sectionFive.id} sectionObject={sectionFive} />
      <MenuSection key={sectionSix.id} sectionObject={sectionSix} />
      <MenuSection key={sectionSeven.id} sectionObject={sectionSeven} />
      <MenuSection key={sectionEight.id} sectionObject={sectionEight} />
    </>
  );
};

export default MenuPage;
