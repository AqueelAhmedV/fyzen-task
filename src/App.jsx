import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import AddUser from './pages/AddUser'
import ViewUsers from './pages/ViewUsers'
import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import { Container } from '@mui/material'

function App() {
 

  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Container sx={{
        pt: {xl: 34, lg: 24, sm: 24, xs: 24},
        height: "100vh",
        alignItems: "center",
        display: "flex",
        justifyContent: "center"
      }}>
      <Routes>
        <Route exact path="/" element={<Landing/>}/>
        <Route path="/view-users" element={<ViewUsers/>}/>
        <Route path="/add-user" element={<AddUser/>}/>
      </Routes>
      </Container>
    </div>
    </BrowserRouter>
  )
}

export default App
