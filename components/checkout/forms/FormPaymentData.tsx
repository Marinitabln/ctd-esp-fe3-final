import { useFormContext } from 'react-hook-form';
import InputController from './InputController';
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

interface Props {
    handlerPaymentData: (data: any) => void
}


const FormPaymentData = ({ handlerPaymentData }: Props) => {

    //const { control, formState: { errors }, handleSubmit } = useForm();
    const { control, formState: { errors }, handleSubmit } = useFormContext();

    return (

        <form onSubmit={handleSubmit(handlerPaymentData)}>
            <InputController
                name='creditCardNumber'
                label='Numero de tarjeta'
                type='text'
                control={control}
                error={errors.creditCardNumber ? true : false}
                message={errors.creditCardNumber?.message as string} />

            <InputController
                name='cardHolderName'
                label='Nombre del titular'
                type='text'
                control={control}
                error={errors.cardHolderName ? true : false}
                message={errors.cardHolderName?.message as string} />

            <InputController
                name='expirationDate'
                label='Fecha de expiración'
                type='text'
                control={control}
                error={errors.expirationDate ? true : false}
                message={errors.expirationDate?.message as string} />

            <InputController
                name='securityCode'
                label='CVC'
                type='pass'
                control={control}
                error={errors.securityCode ? true : false}
                message={errors.securityCode?.message as string} />
            <Box display={'flex'} justifyContent={'end'} position={'relative'} bottom={'-38px'}>
                <Button type='submit' >Enviar</Button>
            </Box>
        </form >
    )
}

export default FormPaymentData