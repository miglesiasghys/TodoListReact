import React from 'react'
import Cards from './Cards'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';

export default function ContainCards({ listaTareas, btnEliminar, btnHecho }) {
  return (
    <>
      <CssBaseline />
      <Box>
        <Grid>
          {
            listaTareas ? listaTareas.map((tarea) =>
              <Cards
                key={crypto.randomUUID()}
                id={tarea.id}
                tarea={tarea.tarea}
                hecha={tarea.hecha}
                btnEliminar={btnEliminar}
                btnHecho={btnHecho}
              />) : <alert>Sin tareas</alert>}
        </Grid>
      </Box>
    </>
  )
}
