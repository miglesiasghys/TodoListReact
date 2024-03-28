import React from 'react'
import Cards from './Cards'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import CssBaseline from '@mui/material/CssBaseline';

export default function ContainCards({ taskList, deleteBtn, completeTaskBtn }) {
  return (
    <>
      <CssBaseline />
      <Box sx={{
        backgroundImage: "url('https://i.pinimg.com/564x/7b/82/f5/7b82f5ff709f0ddc2ff89f3462e3117a.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "40px",
        width: "95%",
        minHeight: "60vh",
        padding: "10px"
      }}>
        <Grid container >
          {taskList ? taskList.map((task) =>
            <Cards
              key={crypto.randomUUID()}
              id={task.id}
              task={task.task}
              state={task.state}
              deleteBtn={deleteBtn}
              completeTaskBtn={completeTaskBtn}
            />) : <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">Sin tareas</Alert>}
        </Grid>
      </Box>
    </>
  )
}
