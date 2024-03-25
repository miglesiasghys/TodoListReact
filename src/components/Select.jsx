import React from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function Select() {
    const selectTareas = [
        { label: 'Todas' },
        { label: 'Completas' },
        { label: 'Incompletas' },
    ]
    return (
        <>
            <Autocomplete
                disablePortal
                id="select"
                options={selectTareas}
                sx={{ width: 300, backgroundColor:"white", borderRadius:"40px", margin:"5px 40px" }}
                renderInput={(params) => <TextField {...params} label="Seleccionar" />}
            />
        </>
    )
}
