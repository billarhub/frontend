import React from "react";
import { Formik, Field, Form } from "formik";
import CommonInput from "../../../atoms/Inputs/CommonInput";
import Button from "../../../atoms/Button";
import registerValidatorSchema from "../../../../utils/validators/RegisterValidator";
import { useRegister } from "../../../../hooks/auth";

const RegisterForm = () => {
  const { mutateAsync } = useRegister();

  let initialValues = {
    name: "",
    last_name: "",
    identification_number: "",
    phone: "",
    email: "",
    password: "",
    repeat_password: ""
  };

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      validationSchema={registerValidatorSchema}
      onSubmit={async (values) => {
        try {
          console.log(values);
          await mutateAsync(values);
          
        } catch (err) {}
      }}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        touched,
        values,
      }) => (
        <React.Fragment>
          <Form  noValidate className="c-register-form" onSubmit={handleSubmit}>
            <h2>INGRESA TUS DATOS</h2>
            <CommonInput
              error={Boolean(touched.name && errors.name)}
              ErrorMessage={errors.name}
              onChange={handleChange}
              value={values.name}
              placeholder='Nombres'
              label='Nombres'
              name='name'
              id='name'
            />
            <CommonInput
              error={Boolean(touched.last_name && errors.last_name)}
              ErrorMessage={errors.last_name}         
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.last_name}
              placeholder='Apellidos'
              label='Apellidos'
              name='last_name'
              id='last_name'
            />
            <CommonInput
              error={Boolean(touched.identification_number && errors.identification_number)}
              ErrorMessage={errors.identification_number}
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.identification_number}
              placeholder='Documento de identidad'
              label='Documento de identidad'
              name='identification_number'
              id='identification_number'
            />
            <CommonInput
              error={Boolean(touched.phone && errors.phone)}
              ErrorMessage={errors.phone}
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.phone}
              placeholder='Teléfono'
              label='Teléfono'
              name='phone'
              id='phone'
            />
            <CommonInput
              error={Boolean(touched.email && errors.email)}
              ErrorMessage={errors.email}
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
              error={Boolean(touched.password && errors.password)}
              ErrorMessage={errors.password}
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
              error={Boolean(touched.repeat_password && errors.repeat_password)}
              ErrorMessage={errors.repeat_password}
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
          </Form>
        </React.Fragment>
      )}
    </Formik>
  );
};

export default RegisterForm;
