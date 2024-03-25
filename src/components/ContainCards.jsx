import React from 'react'
import Cards from './Cards'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import CssBaseline from '@mui/material/CssBaseline';

export default function ContainCards({ listaTareas, btnEliminar, btnHecho }) {
  return (
    <>
      <CssBaseline />
      <Box sx={{
        backgroundImage:"url('https://i.pinimg.com/564x/7b/82/f5/7b82f5ff709f0ddc2ff89f3462e3117a.jpg')", 
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        borderRadius:"40px", 
        minHeight:"60vh",
        padding:"20px", 
        margin:"0px 40px"}}>
        <Grid container >
          {listaTareas ? listaTareas.map((tarea) =>
              <Cards
                key={crypto.randomUUID()}
                id={tarea.id}
                tarea={tarea.tarea}
                hecha={tarea.hecha}
                btnEliminar={btnEliminar}
                btnHecho={btnHecho}
              />) : <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">Sin tareas</Alert>}
        </Grid>
      </Box>
    </>
  )
}
