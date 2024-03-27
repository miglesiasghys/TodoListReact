import React, { useState } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import IconButton from '@mui/material/IconButton';
import CssBaseline from '@mui/material/CssBaseline';
import Add from '@mui/icons-material/Add';
import useMediaQuery from '@mui/material/useMediaQuery';
import _default from '@mui/material/styles/identifier';

export default function Form({ handlerAddTask, taskList, setTaskList }) {
  const isSmallScreen = useMediaQuery('(max-width:1200px)');

  const [nuevaTarea, setNuevaTarea] = useState({
    id: "",
    tarea: "",
    estado: Boolean
  })

  const [estado, setEstado] = useState('Todas')

  const inputNuevaTarea = (e) => {
    setNuevaTarea({ ...nuevaTarea, tarea: e.target.value, id: crypto.randomUUID(), estado: false })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handlerAddTask(nuevaTarea)
    setNuevaTarea({
      tarea: ''
    })
  }

  const handleChange = (e) => {
    setEstado(e.target.value)
    const completeTask = JSON.parse(localStorage.getItem('TAREAS')).filter((task) => {
      if (e.target.value === "Completas") {
        return task.estado == true
      } else if (e.target.value === "Incompletas") {
        return task.estado == false
      }else{
        return true
      }
    })
    setTaskList(completeTask)
    console.log(completeTask)
  }

  return (
    <>
      <CssBaseline />
      <Box>

        {isSmallScreen ?
          <FormGroup onSubmit={(e) => e.preventDefault(e)} display="flex"
            sx={{
              width: "100%",
              flexDirection: "row",
              alignContent: "center",
              justifyContent: "space-around",
              backgroundColor: "white",
              borderRadius: "50px",
              boxShadow: "rgb(211,200,204) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
            }}>
            <Box sx={{ width: "80%", margin: "7px" }} >
              <TextField
                fullWidth
                required
                inputProps={{ maxLength: 50, minLength: 1 }}
                value={nuevaTarea.tarea}
                type='text'
                id="nuevaTarea"
                label="Nueva tarea"
                placeholder='Ingrese nueva tarea'
                variant="standard"
                color="secondary"
                onChange={inputNuevaTarea}
                helperText={"Caracteres disponibles: " + (50 - nuevaTarea.tarea.length)}
                sx={{ width: "100%" }} />
            </Box>
            <IconButton type="submit" onClick={handleSubmit} sx={{ margin: "4px 0px" }}>
              <Add />
            </IconButton>
          </FormGroup>
          :
          <FormGroup onSubmit={(e) => e.preventDefault(e)} display="flex" sx={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            backgroundColor: "white",
            border: "1px solid transparent",
            borderRadius: "50px",
            borderShadow: "rgb(211,200,204) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
          }}>
            <Box sx={{ width: "70%", margin: "2px 8px" }} >
              <TextField
                required
                inputProps={{ maxLength: 50, minLength: 1 }}
                value={nuevaTarea.tarea}
                type='text'
                id="nuevaTarea"
                label="Nueva tarea"
                placeholder='Ingrese nueva tarea'
                variant="standard"
                color="secondary"
                onChange={inputNuevaTarea}
                helperText={"Caracteres disponibles: " + (50 - nuevaTarea.tarea.length)}
                sx={{ width: "100%" }} />
            </Box>
            <Box>
              <IconButton type="submit" onClick={handleSubmit}><Add /></IconButton>
            </Box>
          </FormGroup>}
        <Box sx={{ width: 250, backgroundColor: "white", margin: "10px", padding: "5px", color: "black" }}>
          <FormControl fullWidth >
            <Select
              color="secondary"
              value={estado}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
              onChange={handleChange}
            >
              <MenuItem disabled value="">
                <em>Select</em>
              </MenuItem>
              <MenuItem value="Todas">Todas</MenuItem>
              <MenuItem value='Completas'>Completas</MenuItem>
              <MenuItem value='Incompletas'>Incompletas</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
    </>
  )
}
