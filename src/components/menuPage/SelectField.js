import React from "react";
import { Formik, Field, Form } from "formik";

const productCardForm = {
  size: {
    isDisplayed: true,
    value: "Large",
    options: [
      { key: "small", value: "Small" },
      { key: "medium", value: "Medium" },
      { key: "large", value: "Large" },
      { key: "extraLarge", value: "Extra Large" },
    ],
  },
  quantity: {
    isDisplayed: true,
    value: 1,
    options: [
      { key: "1", value: 1 },
      { key: "2", value: 2 },
      { key: "3", value: 3 },
      { key: "4", value: 4 },
      { key: "5", value: 5 },
      { key: "6", value: 6 },
      { key: "7", value: 7 },
    ],
  },
  type: {
    isDisplayed: true,
    value: "Original Crust",
    options: [
      { key: "original", value: "Original Crust" },
      { key: "crispyParm", value: "Crispy Parm Crust" },
      { key: "epicStuffed", value: "Epic Stuffed Crust" },
      { key: "epicPepperoniStuffed", value: "Epic Pepperoni-Stuffed Crust" },
      { key: "nyStyle", value: "NY Style Crust" },
      { key: "thin", value: "Thin Crust" },
      { key: "glutenFree", value: "Gluten-Free Crust" },
    ],
  },
  flavor: {
    isDisplayed: true,
    value: "Add Crust Flavor",
    options: ["None", "Garlic Parmesan Cheese"],
  },
};
const pizzaSize = productCardForm.size.options;

const SelectField = () => {
  return (
    <Field
      name="size"
      as="select"
      className="border-3 ml-2 mr-1 mt-3 mb-1 pl-2 py-3 rounded-lg text-xl border-gray-300 w-72"
    >
      {pizzaSize.map((size) => {
        return (
          <option id={size.key} key={size.key}>
            {size.value}
          </option>
        );
      })}
    </Field>
  );
};

export default SelectField;
