import React, { useEffect, useState } from "react"
import MenuCarouselCard from "../components/menuPage/MenuCarouselCard"
import LeadCard from "../components/menuPage/LeadCard"
import { images } from "../constants"
import MenuSection from "../components/menuPage/MenuSection"

const MenuPage = () => {
	const [menuState, setMenuState] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch(`http://localhost:3000/menu/menuItems`)
		.then(res => res.json())
		.then(
		  (result) => {
			console.log(result);
			setLoading(false);
			setMenuState(result, () => {
				console.log(result)
			});
		  }
		)
		.catch((err) => {
		  console.error(`An error occurred: ${err}`)
		});
	  }, [])

	  console.log(menuState);
	const carouselItems = menuState[0].menuSections[0].menuCarousel.carouselCards
	const leadItem = menuState[0].menuSections[0].menuCarousel.leadCard
	const sectionTwo = menuState[1]
	const sectionThree = menuState[2]
	const sectionFour = menuState[3]
	const sectionFive = menuState[4]
	const sectionSix = menuState[5]
	const sectionSeven = menuState[6]
	const sectionEight = menuState[7]


	return (
		<>
			{loading && <p>Loading...</p>}
			{menuState != null ? (
				<div>
					<section>
						<h1>{menuState[0].menuSections[0].title}</h1>
						<h1>{menuState[1].menuSections[0].title}</h1>
						<h1>{menuState[2].menuSections[0].title}</h1>
						{<div className="flex flex-row items-center scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-slate-800 mx-auto p-5">
							<LeadCard item={leadItem} />
							{carouselItems.map((item) => (
								<MenuCarouselCard
									item={item}
									key={item._id}
									bgImg={images.pizza}
								/>
							))}
						</div>}
					</section>
					{/* <MenuSection key={sectionTwo.id} sectionObject={sectionTwo} />
					<MenuSection key={sectionThree.id} sectionObject={sectionThree} />
					<MenuSection key={sectionFour.id} sectionObject={sectionFour} />
					<MenuSection key={sectionFive.id} sectionObject={sectionFive} />
					<MenuSection key={sectionSix.id} sectionObject={sectionSix} />
					<MenuSection key={sectionSeven.id} sectionObject={sectionSeven} />
					<MenuSection key={sectionEight.id} sectionObject={sectionEight} /> */}
				</div>
			) : <p>There was a problem...</p>}
		</>
	)
}

export default MenuPage
