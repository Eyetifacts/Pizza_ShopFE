import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import CardCarousel from "../components/CardCarousel";
import MenuMap from "../components/MenuMap";
import MobileAppBanner from "../components/MobileAppBanner";
import PromoCards from "../components/PromoCards";

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <CardCarousel />
      <MenuMap />
      <MobileAppBanner />
      <PromoCards />
      <Footer />
    </>
  );
};

export default HomePage;
