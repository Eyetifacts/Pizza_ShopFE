import React from "react";
import { Formik, Form } from "formik";
import SelectField from "./SelectField";
import SelectField2 from "./SelectField2";
import SelectField3 from "./SelectField3";
import SelectField4 from "./SelectField4";

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
