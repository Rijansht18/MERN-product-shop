import { Box, useColorModeValue } from "@chakra-ui/react";
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/create" element={<CreatePage />} />
        </Routes>
      </Box>
    </>
  )
}

export default App
