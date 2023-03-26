import React, { useState } from "react"
import { useParams } from "react-router-dom"
import menuInitialState from "../../productDef/menuInitialHomeState"
import MenuSection from "./MenuSection"

const MenuTabPage = ({ params }) => {
	function getCategory(menuSelection) {
		switch (menuSelection) {
			case "pizza":
				return 0
			case "papa-bowls":
				return 1
			case "papadias":
				return 2
			case "papa-bites":
				return 3
			case "wings":
				return 4
			case "sides":
				return 5
			case "desserts":
				return 6
			case "drinks":
				return 7
			case "extras":
				return 8
			default:
				return 0
		}
	}

	let cat = useParams()
	let x = getCategory(cat.category)

	const [menuState] = useState(menuInitialState)
	const category = menuState[x].menuSections[0]

	return (
		<div>
			<MenuSection key={category.id} sectionObject={category} />
		</div>
	)
}

export default MenuTabPage
