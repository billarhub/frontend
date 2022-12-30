import React from "react";
import { Field } from "formik";
const CommonInput = ({error, helperText, onChange, onBlur, value, placeholder, label, name, id, type,as}) => {
  return (
    <Field
      className='c-common-input'
      error={error}
      helperText={helperText}
      onBlur={onBlur}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      label={label}
      name={name}
      id={id}
      type={type}
      as={as}
    />
  );
};

export default CommonInput;
