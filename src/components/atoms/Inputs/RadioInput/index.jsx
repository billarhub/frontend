import { Field } from "formik";
import React from "react";

const RadioInput = (props) => {
  const { label, name, options, ...rest } = props;
  return (
    <div className="c-radio-input">
      <label className="c-radio-input__label">{label}</label>
      <div className="c-radio-input__content">
        <Field name={name} {...rest} >
          {({ field }) => {
            return options.map((option) => {
              return (
                <div key={option.key} >
                  <input
                    type="radio"
                    id={option.value}
                    {...field}
                    value={option.value}
                    checked={field.value === option.value}
                  />
                  <label htmlFor={option.vale}>{option.key}</label>
                </div>
              );
            });
          }}
        </Field>
      </div>
    </div>
  );
};

export default RadioInput;
