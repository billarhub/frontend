import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import CommonInput from "../../../atoms/Inputs/CommonInput";
import Button from "../../../atoms/Button";
import { useLogin } from "../../../../hooks/auth";
import loginValidatorSchema from "../../../../utils/validators/LoginValidator";

const LoginForm = () => {
  const { mutateAsync } = useLogin();
  let initialValues = {
    email: "",
    password: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginValidatorSchema}
      enableReinitialize
      // validationSchema={}
      onSubmit={async (values) => {
        try {
          await mutateAsync({ email: values.email, password: values.password });
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
          <Form noValidate className="c-login-form" onSubmit={handleSubmit}>
            <h2>Inicia Sesión</h2>

            <CommonInput
              error={Boolean(touched.email && errors.email)}
              ErrorMessage={errors.email}
              onChange={handleChange}
              value={values.email}
              placeholder="Correo Electronico"
              label="Correo Electronico"
              name="email"
              id="email"
            />

            <CommonInput
              error={Boolean(touched.password && errors.password)}
              ErrorMessage={errors.password}
              onChange={handleChange}
              value={values.password}
              placeholder="Contraseña"
              label="Contraseña"
              type="password"
              name="password"
              id="password"
            />

            <Button disabled={isSubmitting} type="submit">
              Ingresar
            </Button>
          </Form>
        </React.Fragment>
      )}
    </Formik>
  );
};

export default LoginForm;
