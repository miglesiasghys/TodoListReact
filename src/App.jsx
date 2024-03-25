import { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Header from './components/Header';
import Form from './components/Form';
import ContainCard from './components/ContainCards';
import Footer from './components/Footer';
import Select from './components/Select'

//localStorage.clear()

function App() {
  const [listaTareas, setListaTareas] = useState(JSON.parse(localStorage.getItem('TAREAS'))||[]);

  console.log(listaTareas)

  const handlerAgregarTarea=(nuevaTareaForm)=>{
    setListaTareas([...listaTareas, nuevaTareaForm])

    localStorage.setItem('TAREAS', JSON.stringify([...listaTareas, nuevaTareaForm]))
  }

  const btnEliminar=(id)=>{
    setListaTareas(listaTareas.filter(tarea => tarea.id != id))
  }
  
  const btnHecho=(id)=>{
    console.log(id)
  }

  return (
    <>
    <CssBaseline />
    <Container maxWidth="false" sx={{backgroundColor: "black"}}>
      <Header/>
      <Grid container>
        <Grid item xs={5}>
          <Form handlerAgregarTarea={handlerAgregarTarea}/>
        </Grid>
        <Grid item xs={7}>
          <Select/>
          <ContainCard listaTareas={listaTareas} btnEliminar={btnEliminar} btnHecho={btnHecho}/>
        </Grid>
      </Grid>
      <Footer />
    </Container>
    </>
  )
}

export default App
