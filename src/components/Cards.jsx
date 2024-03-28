import React from 'react'
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Checkbox from '@mui/material/Checkbox';
import Delete from '@mui/icons-material/Delete';
import AutoAwesome from '@mui/icons-material/AutoAwesome'

export default function Cards({
  task,
  state,
  deleteBtn,
  completeTaskBtn,
  id
}) {

  return (
    <>
      <CssBaseline />
      <Card
        sx={{
          margin: "1px 10px",
          padding: "10px",
          width: "100%",
          borderRadius: "50px",
          border: "2px solid white",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
        }}>
        <Grid container sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          <Grid item md= {10} xs={6} display="flex" sx={{ margin: "0px 8px", justifyContent: "space-araund", alignItems: "center" }}>
            <AutoAwesome fontSize="small"/>
            <Typography variant="body1"
              sx={{
                padding:"0px 10px",
                fontFamily: "Poppins, sans-serif",
                fontWeight: "400"
              }}>
              {task}
            </Typography>
          </Grid>
          <Grid item>
            <IconButton >
              <Checkbox checked={state} onChange={() => completeTaskBtn(id)}/>
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton onClick={() => deleteBtn(id)}>
              <Delete />
            </IconButton>
          </Grid>
        </Grid>
      </Card>
    </>
  )
}
