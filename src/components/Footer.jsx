import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Loyalty from '@mui/icons-material/Loyalty'

export default function Footer() {
  return (
    <Box display="flex" sx={{height:"100px", alignItems:"center", justifyContent:"center"}}>
      <Typography variant="p" sx={{color:"#e786e4", fontFamily: "Poppins, sans-serif", 
          fontWeight: "400"}}>
        <Loyalty fontSize="small" sx={{color:"#ee5d17"}}/> Hecho por Maca Iglesias Ghys.
      </Typography>
    </Box>
  )
}
