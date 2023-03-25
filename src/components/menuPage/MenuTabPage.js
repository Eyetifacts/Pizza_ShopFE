import React, { useState } from "react"
import { useParams } from "react-router-dom"
import menuInitialState from "../../productDef/menuInitialHomeState"
import MenuSection from "./MenuSection"

const MenuTabPage = ({ params }) => {
	function getCategory(menuSelection) {
		switch (menuSelection) {
			case "pizza":
				return 0
				break
			case "papa-bowls":
				return 1
				break
			case "papadias":
				return 2
				break
			case "papa-bites":
				return 3
				break
			case "wings":
				return 4
				break
			case "sides":
				return 5
				break
			case "desserts":
				return 6
				break
			case "drinks":
				return 7
				break
			case "extras":
				return 8
				break
			default:
				return 0
				break
		}
	}

	let cat = useParams()
	let x = getCategory(cat.category)

	const [menuState, setMenuState] = useState(menuInitialState)
	const category = menuState[x].menuSections[0]

	return (
		<div>
			<MenuSection key={category.id} sectionObject={category} />
		</div>
	)
}

export default MenuTabPage
