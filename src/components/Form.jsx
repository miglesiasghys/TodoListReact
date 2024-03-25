import React, {useState} from 'react';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Add from '@mui/icons-material/Add';

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
      <FormGroup display= "flex" sx={{flexDirection:"row",
      justifyContent:"space-between", 
      margin: "10px", 
      padding:"10px", 
      backgroundColor:"white",
      border:"1px solid transparent", 
      borderRadius:"50px", 
      borderShadow:"rgb(211,200,204) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"}}>
        <TextField 
        id="nuevaTarea" 
        label="Nueva tarea" 
        placeholder='Ingrese nueva tarea' 
        variant="standard" 
        color="secondary"
        onChange={inputNuevaTarea}
        sx={{width:"70%", margin:"4px"}}/>
        <Button variant="outlined" onClick={()=>handlerAgregarTarea(nuevaTarea)} sx={{backgroundColor:"#e786e4", color:"white", border:"1px solid white" ,borderRadius:"50px"}}><Add/> Agregar</Button>
      </FormGroup>
    </>
  )
}
