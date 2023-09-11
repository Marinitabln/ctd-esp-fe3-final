import { useFormContext } from 'react-hook-form';
import InputController from './InputController';


const FormPaymentData = () => {
    const { control, formState: { errors } } = useFormContext();

    return (
        <>
            <InputController
                name='creditCardNumber'
                label='Numero de tarjeta'
                type='text'
                control={control}
                error={errors.creditCardNumber ? true : false}
               /*  message={errors.creditCardNumber?.message} */ />

            {/*  <Typography variant="caption" color="red">
                {errors.creditCardNumber?.message}
			</Typography> */}

            <InputController
                name='cardHolderName'
                label='Nombre del titular'
                type='text'
                control={control}
                error={errors.cardHolderName ? true : false}
               /*  message={errors.cardHolderName?.message} */ />

            <InputController
                name='expirationDate'
                label='Fecha de expiración'
                type='text'
                control={control}
                error={errors.expirationDate ? true : false}
              /*   message={errors.expirationDate?.message} */ />

            <InputController
                name='securityCode'
                label='Código de seguridad'
                type='pass'
                control={control}
                error={errors.securityCode ? true : false}
              /*   message={errors.securityCode?.message} */ />
        </>
    )
}

export default FormPaymentData