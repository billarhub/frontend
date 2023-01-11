import React from "react";
import { Field } from "formik";
const CommonInput = ({
  error,
  helperText,
  onChange,
  onBlur,
  value,
  placeholder,
  label,
  name,
  id,
  type,
  ErrorMessage,
  as
}) => {
  return (
    <>
      <Field
        className="c-common-input"
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
      {error ? <div className="c-common-input__error">{ErrorMessage}</div> : null}
    </>
  );
};

export default CommonInput;
