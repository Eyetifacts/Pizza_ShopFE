import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import CardCarousel from "../components/CardCarousel";
import MenuMap from "../components/MenuMap";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <CardCarousel />
      <MenuMap />
      <Footer />
    </div>
  );
};

export default HomePage;
