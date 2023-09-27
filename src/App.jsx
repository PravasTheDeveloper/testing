import React from 'react'
import { Routes, Route } from "react-router-dom"
import HomePage from './HomePage'
import ChatPage from './ChatPage'

function App() {
  return (
    <Routes  basename="/testing-jet-seven.vercel.app">
      <Route path="/" element={<HomePage />}></Route>
      <Route path='/chat' element={<ChatPage />} />
    </Routes>
  )
}

export default App
