import { useFormContext, useForm, FieldValues, UseFormHandleSubmit } from 'react-hook-form'
import InputController from './InputController'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

interface Props {
    handlerPersonalData: (data: any) => void,
    /* handleSubmit: UseFormHandleSubmit<FieldValues, undefined> */
}

const FormPersonalData = ({ handlerPersonalData/* , handleSubmit */ }: Props) => {

   const { control, formState: { errors }, handleSubmit } = useForm();

    

    /*   useEffect(() => {
         // console.log(errors.name, errors.lastName, errors.email);
          setHasErrors(!!Object.keys(errors).length);
      }, [errors.name, errors.lastName, errors.email]); */


    return (

        <form onSubmit={handleSubmit(handlerPersonalData)}>
            <InputController
                name='name'
                label='Nombre'
                type='text'
                defaultValue=''
                control={control}
                error={errors.name ? true : false}
                message={errors.name?.message as string} />

            <InputController
                name='lastName'
                label='Apellido'
                type='text'
                defaultValue=''
                control={control}
                error={errors.lastName ? true : false}
                message={errors.lastName?.message as string} />

            <InputController
                name='email'
                label='Email'
                type='email'
                defaultValue=''
                control={control}
                error={errors.email ? true : false}
                message={errors.email?.message as string} />

            <Box display={'flex'} justifyContent={'end'} position={'relative'} bottom={'-38px'}>
                <Button type='submit' >Siguiente</Button>
            </Box>
        </form>
    )
}

export default FormPersonalData