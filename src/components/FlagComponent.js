import React from "react";

const FlagComponent = ({ text }) => {
	return (
		<div className="absolute top-5 left-0 w-44 flex">
			<p className="bg-red-600 font-bold pl-3 pr-1 ml-[-2px] text-white text-2xl uppercase tracking-tighter">
				{text}
			</p>
			<div className="w-0 h-0 border-y-[16px] border-x-[10px] border-solid border-transparent border-l-red-600 border-t-red-600"></div>
		</div>
	);
};

export default FlagComponent;