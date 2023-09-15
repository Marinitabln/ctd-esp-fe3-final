import { useForm, SubmitHandler } from 'react-hook-form';
import InputController from './InputController';
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { schemaPaymentData } from 'rules';
import { yupResolver } from '@hookform/resolvers/yup';

interface Props {
    handlerPaymentData: (data: any) => void
}

const FormPaymentData = ({ handlerPaymentData }: Props) => {

    const { control, formState: { errors }, handleSubmit } = useForm({
        resolver: yupResolver(schemaPaymentData)
    });

    const onSubmit: SubmitHandler<any> = (data) => {
        handlerPaymentData(data)
    }

    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <InputController
                name='creditCardNumber'
                label='Numero de tarjeta'
                type='text'
                defaultValue=''
                control={control}
                error={errors.creditCardNumber ? true : false}
                message={errors.creditCardNumber?.message as string} />

            <InputController
                name='cardHolderName'
                label='Nombre del titular'
                type='text'
                defaultValue=''
                control={control}
                error={errors.cardHolderName ? true : false}
                message={errors.cardHolderName?.message as string} />

            <InputController
                name='expirationDate'
                label='Fecha de expiración'
                type='text'
                defaultValue=''
                control={control}
                error={errors.expirationDate ? true : false}
                message={errors.expirationDate?.message as string} />

            <InputController
                name='securityCode'
                label='CVC'
                type='pass'
                defaultValue=''
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