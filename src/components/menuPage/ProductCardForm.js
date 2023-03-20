import React from "react";
import { Formik, Form } from "formik";
import SelectField from "./SelectField";

const ProductCardForm = ({ fields }) => {
  console.log(fields);
  return (
    <Formik>
      <Form>
        <div>
          {fields.map(
            (field) =>
              field.isDisplayed && (
                <SelectField key={field.id} fieldObject={field} />
              )
          )}
        </div>
      </Form>
    </Formik>
  );
};

export default ProductCardForm;
