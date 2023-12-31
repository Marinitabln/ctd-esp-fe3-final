import * as yup from "yup";

export const schemaPersonalData = yup
  .object({
    name: yup
      .string()
      .required("Nombre es un campo requerido")
      .min(3, "El nombre debe tener un mínimo de 3 caracteres")
      .max(20, "El nombre debe tener un máximo de 20 caracteres"),
    lastName: yup
      .string()
      .required("Apellido es un campo requerido")
      .min(3, "El apellido debe tener un mínimo de 3 caracteres")
      .max(10, "El apellido debe tener un máximo de 10 caracteres"),
    email: yup
      .string()
      .required("Email es un campo requerido")
      .email("El correo no es válido")
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Debe ser un email valido"),
  })
  .required();

export const schemaPeliveryAddress = yup
  .object({
    address: yup.string().required("Dirección es un campo requerido"),
    apartment: yup.string().optional(),
    city: yup.string().required("Ciudad es un campo requerido"),
    state: yup.string().required("Estado / Provincia es un campo requerido"),
    zipCode: yup.string().required("Codigo postal es un campo requerido"),
  })
  .required();

export const schemaPaymentData = yup
  .object({
    creditCardNumber: yup
      .string()
      .required("Número de tarjeta es un campo requerido")
      .matches(/^[0-9]{16}$/, "El número de tarjeta debe ser de 16 dígitos"),
    cardHolderName: yup
      .string()
      .required("Nombre del titular es un campo requerido")
      .min(3, "El nombre debe tener un mínimo de 3 caracteres")
      .max(20, "El nombre debe tener un máximo de 20 caracteres"),
    expirationDate: yup
      .string()
      .required("Fecha de expiración es un campo requerido"),
    securityCode: yup
      .string()
      .required("CVC es un campo requerido")
      .length(3, "El código de seguridad debe ser de 3 dígitos"),
  })
  .required();
