import React, { useEffect, useState } from "react";
import Hero from "../components/homePage/Hero";
import CardCarousel from "../components/homePage/CardCarousel";
import MenuMap from "../components/footer/MenuMap";
import MobileAppBanner from "../components/homePage/MobileAppBanner";
import PromoCards from "../components/homePage/PromoCards";

const HomePage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch(`http://localhost:3000/menu/menuItems`)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          setLoading(false);
          setData(result);
        })
        .catch((e) => {
          console.error(`An error occurred: ${e}`)
        });
  }, [])

  return (
    <>
      <Hero />
      <CardCarousel />
      <MenuMap />
      <MobileAppBanner />
      <PromoCards />
      <div>
        {loading && <p>Loading...</p>}
        {!loading && data}
      </div>
    </>
  );
};

export default HomePage;
