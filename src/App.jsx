import { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Header from './components/Header';
import Form from './components/Form';
import ContainCard from './components/ContainCards';
import Footer from './components/Footer';

function App() {

  const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem('TAREAS')) || []);

  const handlerAddTask = (newTaskForm) => {
    setTaskList([...taskList, newTaskForm])
    localStorage.setItem('TAREAS', JSON.stringify([...taskList, newTaskForm]))
  }

  const deleteBtn = (id) => {
    setTaskList(taskList.filter(task => task.id != id))
    localStorage.setItem('TAREAS', JSON.stringify(taskList.filter(task => task.id != id)))
  }

  const completeTaskBtn = (id) => {
    setTaskList()
    setTaskList(taskList.map(task => {
      if (task.id === id) {
        return { ...task, state: !task.state }
      } return task
    })
    )
    localStorage.setItem('TAREAS', JSON.stringify(taskList.map(task => {
      if (task.id === id) {
        return { ...task, state: !task.state }
      } return task
    })))
  }

  return (
    <>
      <CssBaseline />
      <Container maxWidth="false" sx={{ backgroundColor: "black" }}>
        <Header />
        <Box maxWidth="false" display= "flex" sx={{ flexDirection: "column", alignContent: "center", alignItems:"center" }}>
            <Form handlerAddTask={handlerAddTask} setTaskList={setTaskList} />
            <ContainCard taskList={taskList} deleteBtn={deleteBtn} completeTaskBtn={completeTaskBtn} />
        </Box>
        <Footer />
      </Container>
    </>
  )
}

export default App