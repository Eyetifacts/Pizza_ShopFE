import React from "react";
import Hero from "../components/homePage/Hero";
import CardCarousel from "../components/homePage/CardCarousel";
import MenuMap from "../components/footer/MenuMap";
import MobileAppBanner from "../components/homePage/MobileAppBanner";
import PromoCards from "../components/homePage/PromoCards";

const HomePage = () => {
  return (
    <>
      <Hero />
      <CardCarousel />
      <MenuMap />
      <MobileAppBanner />
      <PromoCards />
    </>
  );
};

export default HomePage;
