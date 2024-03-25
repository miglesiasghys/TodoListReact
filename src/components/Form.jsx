import React, {useState} from 'react'
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';

export default function Form({handlerAgregarTarea}) {
  const [nuevaTarea, setNuevaTarea]=useState({
    id: crypto.randomUUID(),
    tarea: "",
    hecha: false
  })

  const inputNuevaTarea=(e)=>{
    setNuevaTarea({...nuevaTarea, tarea: e.target.value})
  }

  return (
    <>
    <CssBaseline />
    <Box sx={{ bgcolor: 'white'}}>
      <FormGroup>
        <TextField id="nuevaTarea" label="Nueva tarea" placeholder='Ingrese nueva tarea' variant="standard" onChange={inputNuevaTarea}/>
        <Button variant="outlined" onClick={()=>handlerAgregarTarea(nuevaTarea)}>+ Agregar</Button>
      </FormGroup>
    </Box>
    </>
  )
}
