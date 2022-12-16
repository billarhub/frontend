import React from "react";
import { Formik, Field } from "formik";
import CommonInput from "../../../atoms/Inputs/CommonInput";
import Button from "../../../atoms/Button";

const LoginForm = () => {
  let initialValues = {
    email: "",
    password: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      // validationSchema={}
      onSubmit={async (
        values,
        { resetForm, setErrors, setStatus, setSubmitting }
      ) => {
        try {
        } catch (err) {}
      }}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        touched,
        setFieldValue,
        values,
      }) => (
        <React.Fragment>
          <form className="c-login-form" onSubmit={handleSubmit}>
            <h2>Inicia Sesión</h2>
            <CommonInput
            //   error={Boolean(touched.email && errors.email)}
              helperText={touched.email && errors.email}
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
              placeholder='Correo Electronico'
              label='Correo Electronico'
              name='email'
              id='email'
            />

            <CommonInput
            //   error={Boolean(touched.password && errors.password)}
              helperText={touched.password && errors.password}
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.password}
              placeholder='Contraseña'
              label='Contraseña'
              type='password'
              name='password'
              id='password'
            />
            <Button >
                Ingresar
            </Button>
          </form>
        </React.Fragment>
      )}
    </Formik>
  );
};

export default LoginForm;
