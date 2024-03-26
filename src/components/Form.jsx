import React, {useState} from 'react';
import { Formik } from 'formik';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CssBaseline from '@mui/material/CssBaseline';
import Add from '@mui/icons-material/Add';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Form({handlerAddTask}) {
  const isSmallScreen = useMediaQuery('(max-width:1200px)');
  
  const [nuevaTarea, setNuevaTarea]=useState({
    id: "",
    tarea: "",
    hecha: false
  })

  const inputNuevaTarea=(e)=>{
    setNuevaTarea({...nuevaTarea, tarea: e.target.value, id: crypto.randomUUID()})
  }

  return (
    <>
      <CssBaseline />
      {isSmallScreen ?
        <FormGroup onSubmit={Formik.handleSubmit} display="flex"
          sx={{
            flexDirection: "row",
            justifyContent: "space-around",
            backgroundColor: "white",
            borderRadius: "50px",
            boxShadow: "rgb(211,200,204) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
          }}>
          <TextField
            value={nuevaTarea.tarea}
            id="nuevaTarea"
            label="Nueva tarea"
            placeholder='Ingrese nueva tarea'
            variant="standard"
            color="secondary"
            onChange={inputNuevaTarea}
            sx={{ width: "80%", margin: "7px" }} />
          <IconButton type="submit" onClick={() => handlerAddTask(nuevaTarea)} sx={{ margin: "4px 0px" }}>
            <Add />
          </IconButton>
        </FormGroup>
        :
        <FormGroup onSubmit={(e) => e.preventDefault(e)} display="flex" sx={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          backgroundColor: "white",
          border: "1px solid transparent",
          borderRadius: "50px",
          borderShadow: "rgb(211,200,204) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
        }}>
          <TextField
            value={nuevaTarea.tarea}
            id="nuevaTarea"
            label="Nueva tarea"
            placeholder='Ingrese nueva tarea'
            variant="standard"
            color="secondary"
            onChange={inputNuevaTarea}
            sx={{ width: "70%", margin: "2px 8px" }} />
          <IconButton type="submit" onClick={() => handlerAddTask(nuevaTarea)} sx={{ margin: "4px 0px" }}><Add /></IconButton>
        </FormGroup>}

    </>
  )
}
