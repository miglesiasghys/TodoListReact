import React, {useState} from 'react'
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Delete from '@mui/icons-material/Delete';
import CheckBoxOutlineBlanck from '@mui/icons-material/CheckBoxOutlineBlank'
import CheckBox from '@mui/icons-material/CheckBox'

export default function Cards({
  tarea,
  hecha,
  deleteBtn,
  id
}) {

  const [isBoolean, setIsBoolean] = useState(true);

  const toggleBoolean = () => {
    setIsBoolean(prevState => !prevState);
    console.log(isBoolean)
  }


  return (
    <>
      <CssBaseline />
      <Card 
      sx={{margin: "1px 10px", 
      padding:"10px", 
      width:"100%", 
      borderRadius:"50px", 
      border:"2px solid white", 
      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
      <Grid container>
        <Grid item xs={9} display="flex" sx={{margin:"0px 10px",justifyContent:"space-araund", alignItems:"center"}}>
          <Typography variant="h6" 
          sx={{fontFamily: "Poppins, sans-serif", 
          fontWeight: "400"}}>
            {tarea}
          </Typography>
        </Grid>
        <Grid item>
          <IconButton onClick={(e) => toggleBoolean(hecha)}>
          {isBoolean ? <CheckBoxOutlineBlanck/> : <CheckBox/>}
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
