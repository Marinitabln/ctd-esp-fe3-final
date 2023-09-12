import React from 'react'
import InputController from './InputController';
import { useFormContext } from 'react-hook-form';


const FormDeliveryAddress = () => {

    const { control, formState: { errors } } = useFormContext();

    return (
        <>
            <InputController
                name='address'
                label='Dirección'
                type='text'
                control={control}
                error={errors.address ? true : false}
                message={errors.address?.message as string} />

            <InputController
                name='apartment'
                label='Departamento - Piso'
                type='text'
                control={control}
                error={errors.apartment ? true : false}
                message={errors.apartment?.message as string} />

            <InputController
                name='city'
                label='Ciudad'
                type='text'
                control={control}
                error={errors.city ? true : false}
                message={errors.city?.message as string} />

            <InputController
                name='state'
                label='Estado / Provincia'
                type='text'
                control={control}
                error={errors.state ? true : false}
                message={errors.state?.message as string} />

            <InputController
                name='zipCode'
                label='Código postal'
                type='text'
                control={control}
                error={errors.zipCode ? true : false}
                message={errors.zipCode?.message as string} />
        </>
    )
}

export default FormDeliveryAddress