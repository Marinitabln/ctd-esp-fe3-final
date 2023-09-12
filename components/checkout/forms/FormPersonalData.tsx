import { useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import InputController from './InputController'


interface Props {
    setHasErrors: (value: boolean) => void
}

const FormPersonalData = ({ setHasErrors }: Props) => {

    const { control, formState: { errors } } = useFormContext();

    const queTrae = !!Object.keys(errors).length
    console.log({queTrae});
    

    useEffect(() => {
        console.log(errors.name, errors.lastName, errors.email);
        setHasErrors(!!Object.keys(errors).length);
    }, [errors.name, errors.lastName, errors.email]);


    return (
        <>
            <InputController
                name='name'
                label='Nombre'
                type='text'
                control={control}
                error={errors.name ? true : false}
                message={errors.name?.message as string} />

            <InputController
                name='lastName'
                label='Apellido'
                type='text'
                control={control}
                error={errors.lastName ? true : false}
                message={errors.lastName?.message as string} />

            <InputController
                name='email'
                label='Email'
                type='email'
                control={control}
                error={errors.email ? true : false}
                message={errors.email?.message as string} />
        </>
    )
}

export default FormPersonalData