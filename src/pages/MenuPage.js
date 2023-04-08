import React, { useEffect, useState } from "react";
import MenuCarouselCard from "../components/menuPage/MenuCarouselCard";
import LeadCard from "../components/menuPage/LeadCard";
import { images } from "../constants";
import MenuSection from "../components/menuPage/MenuSection";

// test again

const MenuPage = () => {
  const [menuState, setMenuState] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/menu/menuItems`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setLoading(false);
        setMenuState(result);
      })
      .catch((err) => {
        console.error(`An error occurred: ${err}`);
      });
  }, []);

  const carouselItems = menuState && menuState[0].menuItems;
  const leadItem = menuState && menuState[0];
  const sectionTwo = menuState && menuState[1];
  const sectionThree = menuState && menuState[2];
  const sectionFour = menuState && menuState[3];
  const sectionFive = menuState && menuState[4];
  const sectionSix = menuState && menuState[5];
  const sectionSeven = menuState && menuState[6];
  const sectionEight = menuState && menuState[7];

  return (
    <>
      {loading && <p>Loading...</p>}
      {menuState ? (
        <div>
          <section>
            <h1>
              {menuState.map((item, index) => (
                <p key={index}>{item.title}</p>
              ))}
            </h1>
            {
              <div className="flex flex-row items-center scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-slate-800 mx-auto p-5">
                <LeadCard item={leadItem} />
                {carouselItems?.map((item) => (
                  <MenuCarouselCard
                    item={item}
                    key={item.title}
                    bgImg={images.pizza}
                  />
                ))}
              </div>
            }
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
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default MenuPage;
