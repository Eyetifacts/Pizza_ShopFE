import React, { useState, useEffect } from "react";
import MenuCarouselCard from "../components/menuPage/MenuCarouselCard";
import LeadCard from "../components/menuPage/LeadCard";
// import menuInitialState from "../productDef/menuInitialHomeState";
import { images } from "../constants";
import MenuPageTabBar from "../components/menuPage/MenuPageTabBar";
import MenuBody from "../components/menuPage/MenuBody";

const MenuPage = () => {
  const [menuState, setMenuState] = useState(null);
  const [tabState, setTabState] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/menu/menuItems`)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          setMenuState(result);
          setTabState(menuState && menuState[0].menuSections[0]);
          console.log(tabState);
        })
        .catch((e) => {
          console.error(`An error occurred: ${e}`)
        });
  }, [])

  // const carouselItems =
  //   tabState && tabState.menuCarousel.carouselCards;
  // const leadItem =
  //   tabState && tabState.menuCarousel.leadCard;
  // const sectionTwo = menuState && menuState[0].menuSections[1];
  // const sectionThree = menuState && menuState[0].menuSections[2];
  // const sectionFour = menuState && menuState[0].menuSections[3];
  // const sectionFive = menuState && menuState[0].menuSections[4];
  // const sectionSix = menuState && menuState[0].menuSections[5];
  // const sectionSeven = menuState && menuState[0].menuSections[6];
  // const sectionEight = menuState && menuState[0].menuSections[7];
  // console.log(tabState && tabState);

  return (
    <>
      <MenuPageTabBar />
      <MenuBody menuSelectionData={tabState && tabState} />
      {/* <section>
        <div className="flex flex-row items-center scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-slate-800 mx-auto p-5">
          {leadItem && (<LeadCard item={leadItem} />)}
          {carouselItems?.map((item, index) => (
            <MenuCarouselCard item={item} key={index} bgImg={images.pizza} />
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
      )} */}
    </>
  );
};

export default MenuPage;
