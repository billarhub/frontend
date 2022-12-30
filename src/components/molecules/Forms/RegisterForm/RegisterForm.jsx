import React from "react";
import { Formik, Field } from "formik";
import CommonInput from "../../../atoms/Inputs/CommonInput";
import Button from "../../../atoms/Button";

const RegisterForm = () => {
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
          <form className="c-register-form" onSubmit={handleSubmit}>
            <h2>INGRESA TUS DATOS</h2>
            <CommonInput
              helperText={touched.name && errors.name}
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.name}
              placeholder='Nombres'
              label='Nombres'
              name='name'
              id='name'
            />
            <CommonInput
              helperText={touched.last_name && errors.last_name}
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.last_name}
              placeholder='Apellidos'
              label='Apellidos'
              name='last_name'
              id='last_name'
            />
            <CommonInput
              helperText={touched.identification_number && errors.identification_number}
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.identification_number}
              placeholder='Documento de identidad'
              label='Documento de identidad'
              name='identification_number'
              id='identification_number'
            />
            <CommonInput
              helperText={touched.phone && errors.phone}
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.phone}
              placeholder='Teléfono'
              label='Teléfono'
              name='phone'
              id='phone'
            />
            <CommonInput
              helperText={touched.email && errors.email}
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.email}
              placeholder='Correo Electronico'
              label='Correo Electronico'
              name='email'
              id='email'
              type='email'
            />

            <CommonInput
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
            <CommonInput
              helperText={touched.repeat_password && errors.repeat_password}
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.repeat_password}
              placeholder='Confirmar contraseña'
              label='Confirmar contraseña'
              type='password'
              name='repeat_password'
              id='repeat_password'
            />
            <Button>
                Crear Cuenta
            </Button>
          </form>
        </React.Fragment>
      )}
    </Formik>
  );
};

export default RegisterForm;
