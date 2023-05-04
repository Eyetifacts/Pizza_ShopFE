import React from "react";
import ProductCard from "./ProductCard";
import FancierProductCard from "./FancierProductCard";
import BannerCard from "./BannerCard";
import LeadCard from "./LeadCard";
import MenuCarouselCard from "./MenuCarouselCard";

const MenuSection = ({ sectionObject }) => {
  if (sectionObject.menuCarousel.type === "menuCarousel") {
    return (
      <div className="flex flex-row items-center scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-slate-800 mx-auto p-5">
        {leadItem && <LeadCard item={sectionObject.menuCarousel.leadItem} />}
        {sectionObject.menuCarousel.carouselCards?.map((item, index) => (
          <MenuCarouselCard item={item} key={index} bgImg={images.pizza} />
        ))}
      </div>
    );
  } else if (sectionObject.type === "bannerCard") {
    return <BannerCard cardDetails={sectionObject.bannerCard} />;
  } else {
		return (
			<section>
				<div className="uppercase text-4xl tracking-tight font-extrabold py-4">
					{sectionObject.title}
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
					{sectionObject.productCards?.map((productCard, index) => {
						if (productCard.cardType === "ProductCard") {
							return <ProductCard key={index} cardDetails={productCard} />;
						} else {
							return <FancierProductCard key={index} cardDetails={productCard} />;
						}
					})}
				</div>
			</section>
		);
	}
};

export default MenuSection;
