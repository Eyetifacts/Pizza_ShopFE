import specials1 from "../images/specials/specials1.webp"

const specialsState = [
	{
		title: "Specials Menu",
		menuSections: [
			{
				title: "All Specials",
				description: null,
				id: "S1",
				type: "specialsCard",
				specialsCards: [
					{
						id: 1,
						image: {
							imageName: "specials1",
							imageUrl: specials1,
						},
						title: "Papa pairings",
						price: 6.99,
						featureCard: false,
						interestFlag: { isDisplayed: true, text: "New items" },
						carryoutFlag: false,
						description:
							"Craving what you see? Our newest addition to your Papa Pairing possibilities: Wings! Get any of these and more delectable Papa Johns favorites for just $6.99 each whe you pair two or more.",
						buttonGroup: [
							{
								id: "BTN08",
								buttonStyle: "dark",
								buttonText: "order now",
								buttonFunction: "customizeFunction",
							},
						],
					},
					{
						id: 2,
						image: {
							imageName: "specials1",
							imageUrl: specials1,
						},
						title: "Papa bites: savory. spicy. sweet.",
						price: 5.49,
						featureCard: false,
						interestFlag: { isDisplayed: false, text: null },
						carryoutFlag: false,
						description:
							"Eight tasty pop-able morsels can be enjoyed in three exciting new flavors: Chicken Parmesan, Jalapeño, and Cookie. Get a shareable treat that's easy to eat!",
						buttonGroup: [
							{
								id: "BTN08",
								buttonStyle: "dark",
								buttonText: "order now",
								buttonFunction: "customizeFunction",
							},
						],
					},
					{
						id: 3,
						image: {
							imageName: "specials1",
							imageUrl: specials1,
						},
						title: "Carryout only",
						price: 8.99,
						featureCard: false,
						interestFlag: { isDisplayed: false, text: "New items" },
						carryoutFlag: true,
						description:
							"Choose your favorite topping on our large original or thin crust pizza!",
						buttonGroup: [
							{
								id: "BTN08",
								buttonStyle: "dark",
								buttonText: "order now",
								buttonFunction: "customizeFunction",
							},
						],
					},
					{
						id: 4,
						image: {
							imageName: "specials1",
							imageUrl: specials1,
						},
						title: "Try our new crispy parm pizza",
						price: 12.99,
						featureCard: true,
						interestFlag: { isDisplayed: true, text: "Limited time" },
						carryoutFlag: false,
						description:
							"Our Crispy Parm Pizza features crispy Parmesan and Romano cheeses baked right onto the bottom of the crust. That’s right. It has cheese on the bottom! Flip pizza night on its head with extra flavor and extra cheese in every deliciously crispy bite.",
						buttonGroup: [
							{
								id: "BTN08",
								buttonStyle: "dark",
								buttonText: "ADD & CUSTOMIZE",
								buttonFunction: "customizeFunction",
							},
						],
					},
					{
						id: 5,
						image: {
							imageName: "specials1",
							imageUrl: specials1,
						},
						title: "New York Style",
						price: 13.99,
						featureCard: false,
						interestFlag: { isDisplayed: false, text: null },
						carryoutFlag: false,
						description: "New Yorl Style Two Topping Pizza",
						buttonGroup: [
							{
								id: "BTN08",
								buttonStyle: "dark",
								buttonText: "Order Now",
								buttonFunction: "customizeFunction",
							},
						],
					},
				],
			},
		],
	},
	{
		title: "Large Orders",
		menuSections: [
			{
				title: "Large Orders",
				description: null,
				id: "S2",
				type: "specialsCard",
				specialsCards: [
					{
						id: 1,
						title: "Five large",
						image: {
							imageName: "specials1",
							imageUrl: specials1,
						},
						price: 54.99,
						featureCard: false,
						interestFlag: { isDisplayed: false, text: null },
						carryoutFlag: false,
						description: "Five large 1-topping pizzas. Serves 10-15",
						buttonGroup: [
							{
								id: "BTN08",
								buttonStyle: "dark",
								buttonText: "order now",
								buttonFunction: "customizeFunction",
							},
						],
					},
					{
						id: 2,
						title: "Feast of favorites",
						image: {
							imageName: "specials1",
							imageUrl: specials1,
						},
						price: 72.99,
						featureCard: false,
						interestFlag: { isDisplayed: false, text: null },
						carryoutFlag: false,
						description:
							"Five large 1-topping pizzas & 3 desserts. Serves 10-15.",
						buttonGroup: [
							{
								id: "BTN08",
								buttonStyle: "dark",
								buttonText: "order now",
								buttonFunction: "customizeFunction",
							},
						],
					},
					{
						id: 3,
						title: "Crowd Pleaser",
						image: {
							imageName: "specials1",
							imageUrl: specials1,
						},
						price: 89.99,
						featureCard: false,
						interestFlag: { isDisplayed: false, text: null },
						carryoutFlag: false,
						description:
							"Five large 1-Topping pizzas plus 3 bread sides & 3 desserts. Serves 10-15.",
						buttonGroup: [
							{
								id: "BTN08",
								buttonStyle: "dark",
								buttonText: "order now",
								buttonFunction: "customizeFunction",
							},
						],
					},
					{
						id: 4,
						title: "Pepsi pack",
						image: {
							imageName: "specials1",
							imageUrl: specials1,
						},
						price: 8.99,
						featureCard: false,
						interestFlag: { isDisplayed: false, text: null },
						carryoutFlag: false,
						description: "Four 2-liter Pepsi products.",
						buttonGroup: [
							{
								id: "BTN08",
								buttonStyle: "dark",
								buttonText: "order now",
								buttonFunction: "customizeFunction",
							},
						],
					},
				],
			},
		],
	},
]

export default specialsState
