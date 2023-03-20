import React from "react";
import { Formik, Form } from "formik";
import SelectField from "./SelectField";

const ProductCardForm = ({ fields }) => {
  return (
    <Formik>
      <Form>
        <div>
          {fields.map((field) => (
            <SelectField key={field.id} fieldObject={field} />
          ))}
        </div>
      </Form>
    </Formik>
  );
};

export default ProductCardForm;
