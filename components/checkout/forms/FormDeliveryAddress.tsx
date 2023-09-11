import React from 'react'
import Paper from '@mui/material/Paper'
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
               /*  message={errors.address?.message} */ />

            {/*  <Typography variant="caption" color="red">
                {errors.address?.message}
			</Typography> */}

            <InputController
                name='apartment'
                label='Departamento - Piso'
                type='text'
                control={control}
                error={errors.apartment ? true : false}
               /*  message={errors.apartment?.message} */ />

            <InputController
                name='city'
                label='Ciudad'
                type='text'
                control={control}
                error={errors.city ? true : false}
              /*   message={errors.city?.message} */ />

            <InputController
                name='state'
                label='Estado / Provincia'
                type='text'
                control={control}
                error={errors.state ? true : false}
              /*   message={errors.state?.message} */ />

            <InputController
                name='zipCode'
                label='Código postal'
                type='text'
                control={control}
                error={errors.zipCode ? true : false}
              /*   message={errors.zipCode?.message} */ />
        </>
    )
}

export default FormDeliveryAddress