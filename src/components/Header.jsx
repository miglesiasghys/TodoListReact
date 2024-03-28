import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import Check from '@mui/icons-material/Check';

export default function Header() {
    const isSmallScreen = useMediaQuery('(max-width:1000px)');

    return (
        <>
            <CssBaseline />
            <Box minHeight={200}
                width={'100%'}
                display="flex"
                sx={{ flexGrow: 1 }}
            >
                <AppBar>
                    <Grid container position="static" display="flex"
                        sx={{ flexDirection: "row", backgroundColor: "black" }}>
                        <Grid item xs display="flex" sx={{ justifyContent: "center", alignItems: 'center' }}>
                            <img style={{ width: "25vh" }}
                                src="https://i.pinimg.com/564x/d9/0c/a5/d90ca563692d3a651d5813956355b13e.jpg"
                                alt="Todo List" />
                        </Grid>
                        {isSmallScreen ? ('') : <Grid item xs={9}
                            display="flex"
                            sx={{ justifyContent: "flex-star", alignItems: 'center', margin: "0px 20px" }}>
                            <Typography
                                variant="h3"
                                sx={{
                                    margin: "10px", padding: "10px 30px", color: "#EE5D17", backgroundColor: "#E786E4", border: "1px solid transparent", borderRadius: "50px", fontFamily: "Abril Fatface, sans-serif", boxShadow: "rgb(211,200,204) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                                    textShadow: "1px 1px 3px rgb(211,200,204)"
                                }}>
                                Todo List <Check fontSize="large" />
                            </Typography>
                        </Grid>}
                    </Grid>
                </AppBar>
            </Box>
        </>
    )
}

