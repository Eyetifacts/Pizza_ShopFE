import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import CardCarousel from "../components/CardCarousel";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <CardCarousel />
      <Footer />
    </div>
  );
};

export default HomePage;
