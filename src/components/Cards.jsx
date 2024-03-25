import React from 'react'
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Delete from '@mui/icons-material/Delete';
import CheckBoxOutlineBlanck from '@mui/icons-material/CheckBoxOutlineBlank'


export default function Cards({
  tarea,
  hecha,
  btnEliminar,
  btnHecho,
  id
}) {
  return (
    <>
      <CssBaseline />
      <Grid container>
        <Grid>
          <Typography>
            {tarea}
          </Typography>
        </Grid>
        <Grid>
          <Button variant="contained" onClick={() => btnHecho(id)}>
            <CheckBoxOutlineBlanck />
          </Button>
        </Grid>
        <Grid>
          <Button variant="contained" onClick={() => btnEliminar(id)}>
            <Delete />
          </Button>
        </Grid>
      </Grid>
    </>
  )
}
