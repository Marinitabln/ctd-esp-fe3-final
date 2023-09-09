import React from 'react'
import Paper from '@mui/material/Paper'


const FormPersonalData = () => {
    return (
        <Paper
            sx={{
                p: 2,
                margin: 'auto',
                maxWidth: 400,
                flexGrow: 1,
                backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}>


        </Paper>
    )
}

export default FormPersonalData