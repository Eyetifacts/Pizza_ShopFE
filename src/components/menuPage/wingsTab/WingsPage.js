import React, { useState } from "react"
import menuInitialState from "../../../productDef/menuInitialHomeState"
import MenuSection from "../MenuSection"

const WingsPage = () => {
	const [menuState, setMenuState] = useState(menuInitialState)

	const wings = menuState[4].menuSections[0]

	console.log(wings)
	return (
		<div>
			<MenuSection key={wings.id} sectionObject={wings} />
		</div>
	)
}

export default WingsPage
