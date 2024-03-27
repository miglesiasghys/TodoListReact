import React from 'react'
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Checkbox from '@mui/material/Checkbox';
import Delete from '@mui/icons-material/Delete';

export default function Cards({
  tarea,
  estado,
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
          <Grid item xs={9} display="flex" sx={{ margin: "0px 10px", justifyContent: "space-araund", alignItems: "center" }}>
            <Typography variant="h6"
              sx={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "400"
              }}>
              {tarea}
            </Typography>
          </Grid>
          <Grid item>
            <IconButton onClick={() => completeTaskBtn(id)}>
              <Checkbox />
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
