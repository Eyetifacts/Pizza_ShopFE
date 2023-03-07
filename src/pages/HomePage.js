import React from "react";
import Hero from "../components/Hero";
import CardCarousel from "../components/CardCarousel";
import MenuMap from "../components/MenuMap";
import MobileAppBanner from "../components/MobileAppBanner";
import PromoCards from "../components/PromoCards";

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
