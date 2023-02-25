import React from "react";
import { HiShoppingCart } from 'react-icons/hi'

const Navbar = () => {
  return (
    <div className="flex flex-row items-center gap-3 text-2xl  h-20 items-center">

      <div className="flex-row flex flex-1 items-center border-r border-r-gray h-20">

        <div className="flex flex-row gap-6 ml-5 font-semibold">
          <div>MENU</div>
          <div>SPECIALS</div>
          <div>PAPA REWARDS</div>
        </div>

        <form className="ml-auto h-10 items-center flex flex-row">
          <input type="text" className="pl-2 border rounded-l-md h-10 italic text-base w-60" placeholder="Enter a promo code" />
          <button className="bg-black text-white text-sm p-2 h-10 rounded-r-md my-0 font-semibold mr-5">APPLY</button>
        </form>

      </div>

      <div className="ml-auto mr-5 flex-none font-semibold">
        <div className="flex flex-row">
          <HiShoppingCart size={40} style={{ color: '#333333' }} />
          <h2 className="text-4xl" style={{ color: 'darkred'}}>$0.00</h2>
        </div>
      </div>

    </div>
  );
};

export default Navbar;
