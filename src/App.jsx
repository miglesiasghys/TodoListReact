import { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Header from './components/Header';
import Form from './components/Form';
import ContainCard from './components/ContainCards';
import Footer from './components/Footer';
import useMediaQuery from '@mui/material/useMediaQuery';

//localStorage.clear()

function App() {
  const isSmallScreen = useMediaQuery('(max-width:1200px)');

  const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem('TAREAS'))||[]);

  console.log(taskList)

  const handlerAddTask=(nuevaTareaForm)=>{
    setTaskList([...taskList, nuevaTareaForm])
    localStorage.setItem('TAREAS', JSON.stringify([...taskList, nuevaTareaForm]))
  }

  const deleteBtn=(id)=>{
    setTaskList(taskList.filter(task => task.id != id))
    localStorage.setItem('TAREAS', JSON.stringify(taskList.filter(task => task.id != id)))
  }

  const completeTaskBtn = (id) => {
  }

  return (
    <>
      <CssBaseline />
      <Container maxWidth="false" sx={{ backgroundColor: "black" }}>
        <Header />
        {isSmallScreen ?
          <Grid container sx={{ display: "flex", flexDirection: "column", alignContent: "center" }}>
            <Grid item xs={12}>
              <Form handlerAddTask={handlerAddTask} taskList={taskList} />
            </Grid>
            <Grid item xs={12} sx={{display:"flex", flexDirection:"column", alignItems:"center"}}>
              <ContainCard taskList={taskList} deleteBtn={deleteBtn} completeTaskBtn={completeTaskBtn} />
            </Grid>
          </Grid>
          :
          <Grid container sx={{ display: "flex", flexDirection: "row", alignContent: "center" }}>
            <Grid item xs={5}>
              <Form handlerAddTask={handlerAddTask} taskList={taskList} setTaskList={setTaskList}/>
            </Grid>
            <Grid item xs={7} sx={{display:"flex", flexDirection:"column", alignItems:"center"}}>
              <ContainCard taskList={taskList} deleteBtn={deleteBtn} completeTaskBtn={completeTaskBtn} />
            </Grid>
          </Grid>}
        <Footer />
      </Container>
    </>
  )
}

export default App