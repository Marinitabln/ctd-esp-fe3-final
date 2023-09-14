import { useForm, SubmitHandler } from 'react-hook-form'
import InputController from './InputController'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { yupResolver } from '@hookform/resolvers/yup'
import { schemaPersonalData } from 'rules'

interface Props {
    handlerPersonalData: (data: any) => void,

}

const FormPersonalData = ({ handlerPersonalData }: Props) => {

    const { control, formState: { errors }, handleSubmit } = useForm({
        resolver: yupResolver(schemaPersonalData)
    });

    const onSubmit: SubmitHandler<any> = (data) => {
        handlerPersonalData(data)
    }

    return (

        <form onSubmit={handleSubmit(onSubmit)}>
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