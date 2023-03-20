import React from "react";
import { Field } from "formik";

const SelectField = ({ fieldObject }) => {
  console.log(fieldObject);
  return (
    <Field
      name="formField"
      as="select"
      className={fieldObject.className}
      key={fieldObject.id}
    >
      {fieldObject &&
        fieldObject.options.map((option) => {
          return (
            <option id={option.key} key={option.key}>
              {option.value}
            </option>
          );
        })}
    </Field>
  );
};

export default SelectField;
