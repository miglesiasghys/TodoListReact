import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';

export default function Header() {
    return (
        <>
            <CssBaseline />
            <Box minHeight={200}
                width={'100%'}
                display="flex"
                sx={{ flexGrow: 1 }}>
                <AppBar>
                    <Grid container position="static" display= "flex"
                    sx={{flexDirection: "row", backgroundColor: "black" }}>
                        <Grid item xs display= "flex" sx={{justifyContent: "center", alignItems: 'center'}}>
                            <img style={{ width: "25vh" }}
                                src="https://i.pinimg.com/564x/d9/0c/a5/d90ca563692d3a651d5813956355b13e.jpg"
                                alt="Todo List" />
                        </Grid>
                        <Grid item xs={9}
                            display="flex"
                            sx={{ justifyContent: "flex-star", alignItems: 'center', margin: "0px 30px" }}>
                            <Typography
                                variant="h4"
                                sx={{
                                    margin: "10px", padding: "10px 30px", color: "#EE5D17", backgroundColor: "#E786E4", border: "1px solid transparent", borderRadius: "50px", fontFamily: "Abril Fatface, sans-serif"
                                }}>
                                Todo List
                            </Typography>
                        </Grid>
                    </Grid>
                </AppBar>
            </Box>
        </>
    )
}

