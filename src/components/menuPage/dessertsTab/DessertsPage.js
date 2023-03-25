import React, { useState } from "react"
import menuInitialState from "../../../productDef/menuInitialHomeState"
import MenuSection from "../MenuSection"

const DessertsPage = () => {
	const [menuState, setMenuState] = useState(menuInitialState)

	const desserts = menuState[6].menuSections[0]

	console.log(desserts)
	return (
		<div>
			<MenuSection key={desserts.id} sectionObject={desserts} />
		</div>
	)
}

export default DessertsPage
