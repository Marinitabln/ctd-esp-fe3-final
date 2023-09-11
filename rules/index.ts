import * as yup from "yup"

export const schema = yup
.object({
    name: yup.string().required().min(3, 'El nombre debe tener un mínimo de 3 caracteres'),
    lastName: yup.string().required().min(3, 'El apellido debe tener un mínimo de 3 caracteres'),
    email: yup.string().required().email('El correo no es válido').matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Debe ser un email valido"),
    address: yup.string().required(),
    apartment: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    zipCode: yup.string().required(),
    creditCardNumber: yup.string().required().length(16, 'El número de tarjeta debe ser de 16 dígitos'),
    cardHolderName: yup.string().required(),
    expirationDate: yup.string().required(),
    securityCode: yup.string().required().length(3, 'El código de seguridad debe ser de 3 dígitos'),
})
.required()


