import React, { useState, useEffect } from "react";
import MenuCarouselCard from "../components/menuPage/MenuCarouselCard";
import LeadCard from "../components/menuPage/LeadCard";
// import menuInitialState from "../productDef/menuInitialHomeState";
import { images } from "../constants";
import MenuSection from "../components/menuPage/MenuSection";

const MenuPage = () => {
  const [menuState, setMenuState] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/menu/menuItems`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setLoading(false);
        setMenuState(result[0]);
      })
      .catch((err) => {
        console.error(`An error occurred: ${err}`);
      });
  }, []);

  const carouselItems =
    menuState && menuState[0].menuSections[0].menuCarousel.carouselCards;
  const leadItem =
    menuState && menuState[0].menuSections[0].menuCarousel.leadCard;
  const sectionTwo = menuState && menuState[0].menuSections[1];
  const sectionThree = menuState && menuState[0].menuSections[2];
  const sectionFour = menuState && menuState[0].menuSections[3];
  const sectionFive = menuState && menuState[0].menuSections[4];
  const sectionSix = menuState && menuState[0].menuSections[5];
  const sectionSeven = menuState && menuState[0].menuSections[6];
  const sectionEight = menuState && menuState[0].menuSections[7];

  return (
    <>
      <section>
        <div className="flex flex-row items-center scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-slate-800 mx-auto p-5">
          <LeadCard item={leadItem} />
          {carouselItems?.map((item) => (
            <MenuCarouselCard item={item} key={item.id} bgImg={images.pizza} />
          ))}
        </div>
      </section>
      {sectionTwo && (
        <MenuSection key={sectionTwo.id} sectionObject={sectionTwo} />
      )}
      {sectionThree && (
        <MenuSection key={sectionThree.id} sectionObject={sectionThree} />
      )}
      {sectionFour && (
        <MenuSection key={sectionFour.id} sectionObject={sectionFour} />
      )}
      {sectionFive && (
        <MenuSection key={sectionFive.id} sectionObject={sectionFive} />
      )}
      {sectionSix && (
        <MenuSection key={sectionSix.id} sectionObject={sectionSix} />
      )}
      {sectionSeven && (
        <MenuSection key={sectionSeven.id} sectionObject={sectionSeven} />
      )}
      {sectionEight && (
        <MenuSection key={sectionEight.id} sectionObject={sectionEight} />
      )}
    </>
  );
};

export default MenuPage;
