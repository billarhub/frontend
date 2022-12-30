import React from "react";
import DateView from "react-datepicker";
import { Field, FormikConsumer } from "formik";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerInput = (props) => {
  const { label, name, ...rest } = props;
  return (
    <div >
      <label htmlFor={name} className='c-datepicker-input__label'>{label}</label>
      <Field name={name} >
        {({ field, form }) => {
          const { setFieldValue } = form;
          const { value } = field;
          return (
            <DateView
              id={name}
              className='c-datepicker-input__content'
              {...field}
              {...rest}
              selected={value}
              onChange={(val) => setFieldValue(name, val)}
            />
          );
        }}
      </Field>
    </div>
  );
};

export default DatePickerInput;
