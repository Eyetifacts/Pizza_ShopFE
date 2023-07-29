import React, { useState } from "react"
import menuInitialState from "../../../productDef/menuInitialHomeState"
import MenuSection from "../MenuSection"

const ExtrasPage = () => {
	const [menuState, setMenuState] = useState(menuInitialState)

	const extras = menuState[8].menuSections[0]

	console.log(extras)
	return (
		<div>
			<MenuSection key={extras.id} sectionObject={extras} />
		</div>
	)
}

export default ExtrasPage
