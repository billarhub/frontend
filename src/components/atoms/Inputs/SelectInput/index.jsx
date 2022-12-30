import { Field } from "formik";
import React from "react";

const SelecInput = (props) => {
  const { label, name, options, ...rest } = props;
  return (
    <div className="c-select-input">
      <label htmlFor={name} className="c-select-input__label">{label}</label>
      <Field id={name} name={name} as="select" {...rest} className="c-select-input__content">
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          );
        })}
      </Field>
    </div>
  );
};

export default SelecInput;
