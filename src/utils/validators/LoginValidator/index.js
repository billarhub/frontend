import * as yup from 'yup';
const loginValidatorSchema = yup.object({
    // email: yup
    //   .string('Ingresa tu correo electrónico')
    //   .email('Ingresa un correo electrónico válido')
    //   .required('El correo electrónico es obligatorio'),
    password: yup
      .string('Ingresa tu contraseña.')
      .required('La contraseña es obligatoria.'),
  });

  export default loginValidatorSchema;