import * as yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const registerValidatorSchema = yup.object({
  name: yup.string().required("El nombre es obligatorio"),
  identification_number: yup.number().required("El campo es obligatorio"),
  phone: yup
  .string()
  .matches(phoneRegExp, "Número de teléfono no válido")
  .required("El numero de telefono es obligatorio"),
  email: yup
    .string("Ingresa tu correo electrónico")
    .email("Ingresa un correo electrónico válido")
    .required("El correo electrónico es obligatorio"),
  password: yup
    .string("Ingresa tu contraseña.")
    .min(8, 'La contraseña debe tener mínimo 8 caracteres')
    .required("La contraseña es obligatoria."),
  repeat_password: yup
    .string()
    .oneOf([yup.ref("password"), null], "Las contraseñas deben coincidir"),
});

export default registerValidatorSchema;
