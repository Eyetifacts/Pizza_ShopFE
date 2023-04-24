import React from "react"
import { images } from "../../constants"
import { NavLink } from "react-router-dom";

const menuItems = [
	{
		title: "Specials",
		imageUrl: "https://drive.google.com/file/d/1Cm5N4FKKGLtNZI1iAzmIFaTgZbtN4qYc/view?usp=share_link",
		NavLink: "",
	},
	{
		title: "Pizza",
		imageUrl: images.pizza,
		link: "",
	},
	{
		title: "Papa Bowls",
		imageUrl: images.pizza,
		link: "",
	},
	{
		title: "Papa Bites",
		imageUrl: images.pizza,
		link: "",
	},
	{
		title: "Papadias",
		imageUrl: images.pizza,
		link: "",
	},
	{
		title: "Wraps",
		imageUrl: images.pizza,
		link: "",
	},
	{
		title: "Sides",
		imageUrl: images.sides,
		link: "",
	},
	{
		title: "Desserts",
		imageUrl: images.pizza,
		link: "",
	},
	{
		title: "Drinks",
		imageUrl: images.pizza,
		link: "",
	},
	{
		title: "Extras",
		imageUrl: images.pizza,
		link: "",
	},
]

const MenuMap = () => {
	return (
		<div className=" flex flex-col justify-center items-center xl:mx-64 2xl:mx-96 mb-20">
			<div className="justify-center items-center ">
				<h2 className="text-2xl font-extrabold my-3">EXPLORE OUR MENU</h2>
			</div>

			<div className="flex flex-row justify-center items-center my-3 gap-4 flex-wrap">
				{menuItems.map((item) => (
					<div key={item.title} className="group hover:cursor-pointer">
						<div className="h-min overflow-hidden rounded-full">
							<img
								src={item.imageUrl}
								alt={item.title}
								className="rounded-full w-32 h-32 group-hover:scale-125 transition-all duration-300"
							/>
						</div>
						<p className="text-center font-semibold my-3 group-hover:underline">
							{item.title}
						</p>
					</div>
				))}
			</div>
		</div>
	)
}

export default MenuMap
