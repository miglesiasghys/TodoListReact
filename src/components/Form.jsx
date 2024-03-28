import React, { useState } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import IconButton from '@mui/material/IconButton';
import CssBaseline from '@mui/material/CssBaseline';
import Add from '@mui/icons-material/Add';
import useMediaQuery from '@mui/material/useMediaQuery';
import _default from '@mui/material/styles/identifier';

export default function Form({ handlerAddTask, setTaskList }) {
  const [newTask, setNewTask] = useState({
    id: "",
    task: "",
    state: Boolean
  })

  const [state, setState] = useState('Todas')

  const inputNewTask = (e) => {
    setNewTask({ ...newTask, task: e.target.value, id: crypto.randomUUID(), state: false })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handlerAddTask(newTask)
    setNewTask({
      task: ''
    })
  }

  const handleChange = (e) => {
    setState(e.target.value)
    const completeTask = JSON.parse(localStorage.getItem('TAREAS')).filter((task) => {
      if (e.target.value === "Completas") {
        return task.state == true
      } else if (e.target.value === "Incompletas") {
        return task.state == false
      } else {
        return true
      }
    })
    setTaskList(completeTask)
  }

  return (
    <>
      <CssBaseline />
      <Grid container spacing={3} display="flex" sx={{width:"95%", flexDirection: "row", padding:"10px" }}>
        <Grid item xs={12} md={6}>
          <FormGroup onSubmit={(e) => e.preventDefault(e)} display="flex"
            sx={{
              width:"100%",
              flexDirection: "row",
              alignContent: "center",
              justifyContent: "center",
              backgroundColor: "white",
              borderRadius: "50px",
              boxShadow: "rgb(211,200,204) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
            }}>
            <Box sx={{ width: "80%" }} >
              <TextField
                fullWidth
                required
                inputProps={{ maxLength: 50, minLength: 1 }}
                value={newTask.task}
                type='text'
                id="newTask"
                label="Nueva tarea"
                placeholder='Ingrese nueva tarea'
                variant="standard"
                color="secondary"
                onChange={inputNewTask}
                helperText={"Caracteres disponibles: " + (50 - newTask.task.length)}
                />
            </Box>
            <Box sx={{ display:"flex", alignItems:"center"}}>
              <IconButton type="submit" onClick={handleSubmit} >
                <Add />
              </IconButton>
            </Box>
          </FormGroup>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ width: 250, backgroundColor: "white", margin: "10px", padding: "5px", color: "black" }}>
            <FormControl fullWidth >
              <Select
                color="secondary"
                value={state}
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
        </Grid>
      </Grid>
    </>
  )
}
