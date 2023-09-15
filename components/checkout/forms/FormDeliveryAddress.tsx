import React from 'react'
import InputController from './InputController';
import { SubmitHandler, useForm } from 'react-hook-form';
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaPeliveryAddress } from 'rules';
import { CheckoutInput } from 'dh-marvel/features/checkout/checkout.types';


interface Props {
    handlerDeliveryAddress: (data: any) => void,
    defaultValues: CheckoutInput
}

const FormDeliveryAddress = ({ handlerDeliveryAddress, defaultValues }: Props) => {

    const { control, formState: { errors }, handleSubmit } = useForm({
        resolver: yupResolver(schemaPeliveryAddress)
    });

    const onSubmit: SubmitHandler<any> = (data) => {
        handlerDeliveryAddress(data)       
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <InputController
                name='address'
                label='Dirección'
                type='text'
                defaultValue={defaultValues.deliveryAddress.address}
                control={control}
                error={errors.address ? true : false}
                message={errors.address?.message as string} />

            <InputController
                name='apartment'
                label='Departamento - Piso'
                type='text'
                defaultValue={defaultValues.deliveryAddress.apartment}
                control={control}
                error={errors.apartment ? true : false}
                message={errors.apartment?.message as string} />

            <InputController
                name='city'
                label='Ciudad'
                type='text'
                defaultValue={defaultValues.deliveryAddress.city}
                control={control}
                error={errors.city ? true : false}
                message={errors.city?.message as string} />

            <InputController
                name='state'
                label='Estado / Provincia'
                type='text'
                defaultValue={defaultValues.deliveryAddress.state}
                control={control}
                error={errors.state ? true : false}
                message={errors.state?.message as string} />

            <InputController
                name='zipCode'
                label='Código postal'
                type='text'
                defaultValue={defaultValues.deliveryAddress.zipCode}
                control={control}
                error={errors.zipCode ? true : false}
                message={errors.zipCode?.message as string} />

            <Box display={'flex'} justifyContent={'end'} position={'relative'} bottom={'-38px'}>
                <Button type='submit'>Siguiente</Button>
            </Box>
        </form>
    )
}

export default FormDeliveryAddress