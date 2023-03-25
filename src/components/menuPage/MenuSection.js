import React from "react"
import ProductCard from "./ProductCard"
import FancierProductCard from "./FancierProductCard"
import BannerCard from "./BannerCard"

const MenuSection = ({ sectionObject }) => {
	if (sectionObject.type === "bannerCard") {
		return <BannerCard cardDetails={sectionObject.bannerCard} />
	}
	return (
		<section>
			<div className="ml-20 mt-5 text-5xl font-black uppercase">
				{sectionObject.title}
			</div>
			<div className="flex flex-row ml-20 flex-wrap">
				{sectionObject.productCards.map((productCard) => {
					if (productCard.cardType === "ProductCard") {
						return (
							<ProductCard key={productCard.id} cardDetails={productCard} />
						)
					} else {
						return (
							<FancierProductCard
								key={productCard.id}
								cardDetails={productCard}
							/>
						)
					}
				})}
			</div>
		</section>
	)
}

export default MenuSection
