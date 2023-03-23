import React from "react"
import pizzaHeroVideo from "../../videos/pizzaHeroVideo.mp4"

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
					<div className="ml-5">
						<h1 className="text-white bg-black px-3 py-2mb-8 text-4xl font-semibold -skew-y-6 items-start flex flex-row w-80 justify-center">
							STARTING AT $12{" "}
							<span className="text-xl underline ml-1"> 99</span>
						</h1>
						<div className="mt-12 w-44 flex">
							<p className="bg-red-600 font-bold pl-3 pr-1 ml-[-2px] text-white text-2xl uppercase tracking-tighter">
								Limited time
							</p>
							<div className="w-0 h-0 border-y-[16px] border-x-[10px] border-solid border-transparent border-l-red-600 border-t-red-600"></div>
						</div>
						<h2 className="text-white text-5xl font-bold p-3 mt-5 drop-shadow-xl">
							CRISPY PARM PIZZA
						</h2>
						<h2 className="text-white text-2xl font-bold px-3 drop-shadow-xl">
							CHEESE ON THE BOTTOM? FLIPPIN'AWESOME!
						</h2>
						<div className="mt-8 -mb-20 flex flex-row gap-3">
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
