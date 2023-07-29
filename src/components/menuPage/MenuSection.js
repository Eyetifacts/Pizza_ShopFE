import React from "react"
import ProductCard from "./ProductCard"
import FancierProductCard from "./FancierProductCard"
import BannerCard from "../BannerCard"

const MenuSection = ({ sectionObject }) => {
	if (sectionObject.type === "bannerCard") {
		return <BannerCard cardDetails={sectionObject.bannerCard} />
	}
	return (
		<section>
			<div className="uppercase text-4xl tracking-tight font-extrabold py-4">
				{sectionObject.title}
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
