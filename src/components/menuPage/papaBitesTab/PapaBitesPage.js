import React, { useState } from "react"
import menuInitialState from "../../../productDef/menuInitialHomeState"
import MenuSection from "../MenuSection"

const PapaBitesPage = () => {
	const [menuState, setMenuState] = useState(menuInitialState)

	const papaBites = menuState[3].menuSections[0]

	console.log(papaBites)
	return (
		<div>
			<MenuSection key={papaBites.id} sectionObject={papaBites} />
		</div>
	)
}

export default PapaBitesPage
