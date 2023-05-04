import React from "react";
import MenuSection from "./MenuSection";


const MenuBody = ({menuSelectionData}) => {
  return (
    menuSelectionData?.map((item, index) => (
      <MenuSection item={item} key={index} />
    ))
  )
};

export default MenuBody;