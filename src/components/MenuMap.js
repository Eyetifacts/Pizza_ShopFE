import React from 'react';
import normalBake from '../images/normal-bake.png'

const MenuMap = () => {
  return (
    <div className=" flex flex-col  justify-center items-center">
          <div className="justify-center items-center ">
              <h2 className="text-2xl font-extrabold my-3">Explore Our Menu</h2>
          </div>

          <div className="flex flex-row justify-center items-center my-3 gap-4 flex-wrap">
              {['Specials', 'Pizza', 'Papa Bowls', 'Papa Bites', 'Papadias', 'Wraps', 'Sides', 'Desserts', 'Drinks', 'Extras'].map((item) => (
                <div>
                    <img src={normalBake} className="rounded-full  w-32" />
                    <p className="text-center font-semibold my-3">{item}</p>
                </div>
              ))}
          </div>
    </div>
  )
}

export default MenuMap