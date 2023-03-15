import React from "react";
import { Formik, Form } from "formik";
import SelectField from "./SelectField";
import SelectField2 from "./SelectField2";
import SelectField3 from "./SelectField3";
import SelectField4 from "./SelectField4";

const ProductCardForm = () => {
  return (
    <Formik>
      <Form>
        <div>
          <SelectField />
          <SelectField2 />
        </div>
        <div>
          <SelectField3 />
        </div>
        <div>
          <SelectField4 />
        </div>
      </Form>
    </Formik>
  );
};

export default ProductCardForm;
