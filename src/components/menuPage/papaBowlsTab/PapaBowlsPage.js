import React, { useState } from "react"
import menuInitialState from "../../../productDef/menuInitialHomeState"
import MenuSection from "../MenuSection"

const PapaBowlsPage = () => {
	const [menuState] = useState(menuInitialState)

	const papaBowls = menuState[1].menuSections[0]

	console.log(papaBowls)
	return (
		<div>
			<MenuSection key={papaBowls.id} sectionObject={papaBowls} />
		</div>
	)
}

export default PapaBowlsPage
