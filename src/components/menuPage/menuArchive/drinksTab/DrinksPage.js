import React, { useState } from "react"
import menuInitialState from "../../../productDef/menuInitialHomeState"
import MenuSection from "../MenuSection"

const DrinksPage = () => {
	const [menuState, setMenuState] = useState(menuInitialState)

	const drinks = menuState[7].menuSections[0]

	console.log(drinks)
	return (
		<div>
			<MenuSection key={drinks.id} sectionObject={drinks} />
		</div>
	)
}

export default DrinksPage
