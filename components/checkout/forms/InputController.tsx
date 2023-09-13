import { Controller, Control, FieldError, Merge, FieldErrorsImpl } from 'react-hook-form'
import { TextField } from '@mui/material'

interface Props {
    name: string,
    label: string,
    type: string,
    required?: boolean,
    control: Control<any>,
    defaultValue?: string,
    error?: boolean;
    message?: string | undefined;
    textFieldProps?: Record<string, any>
}

const InputController= ({
    name,
    label,
    type,
    required,
    control,
    defaultValue,
    textFieldProps,
    error,
    message,
  }: Props) => {


    return (
        <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => (
          <TextField
            {...field}
            type={type}
            label={label}
            variant="outlined"
            fullWidth
            required={required}
            error={error}
            helperText={message}
            sx={{ mb: 2 }}
            {...textFieldProps}
          />
        )}
      />
    )
}

export default InputController