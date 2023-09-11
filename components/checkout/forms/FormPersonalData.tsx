import React from 'react'
import { useFormContext } from 'react-hook-form'
import InputController from './InputController'
import { Typography } from '@mui/material';


const FormPersonalData = () => {

    const { control, formState: { errors } } = useFormContext();

    return (
        <>
            <InputController
                name='name'
                label='Nombre'
                type='text'
                control={control}
                error={errors.name ? true : false}
               /*  message={errors.name?.message} */ />
            
           {/*  <Typography variant="caption" color="red">
                {errors.name?.message}
			</Typography> */}

            <InputController
                name='lastName'
                label='Apellido'
                type='text'
                control={control}
                error={errors.lastName ? true : false}
               /*  message={errors.lastName?.message} */ />

            <InputController
                name='email'
                label='Email'
                type='email'
                control={control}
                error={errors.email ? true : false}
              /*   message={errors.email?.message} */ />
        </>
    )
}

export default FormPersonalData