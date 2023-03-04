import React from "react"
import pizzaHeroVideo from "../videos/pizzaHeroVideo.mp4"

const Hero = () => {
	return (
		<div className="relative w-full">
			<div className="h-120 lg:h-128 overflow-hidden">
				<video
					autoPlay
					loop
					muted
					className="object-cover items-center overflow-x-hidden h-128 w-full">
					<source src={pizzaHeroVideo} type="video/mp4" />
				</video>
				<div className="absolute flex flex-col top-0 bottom-0 left-0 right-0 justify-center items-start bg-black bg-opacity-10">
					<div>
						<h1 className="text-white bg-black px-3 py-2 ml-5 mb-8 text-4xl font-semibold -skew-y-6 items-start flex flex-row w-80 justify-center">
							STARTING AT $12{" "}
							<span className="text-xl underline ml-1"> 99</span>
						</h1>
						<h2 className="text-white bg-red-600 px-3 text-xl py-1 ml-5 w-36 font-semibold text-center">
							LIMITED TIME
						</h2>
						<h2 className="text-white text-5xl font-bold p-3 ml-5 mt-5 drop-shadow-xl">
							CRISPY PARM PIZZA
						</h2>
						<h2 className="text-white text-2xl font-bold px-3 ml-5 drop-shadow-xl">
							CHEESE ON THE BOTTOM? FLIPPIN'AWESOME!
						</h2>
						<div className="ml-5 mt-8 -mb-20 flex flex-row gap-3">
							<button className="btn-primary-lg border-2 border-white">
								ORDER DELIVERY
							</button>
							<button className="btn-secondary-lg">ORDER DELIVERY</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero
