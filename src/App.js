import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Router, Routes, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'
import UserPage from './pages/UserPage'
import EChartsPage from './pages/EChartsPage'

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<HomePage/>} /> */}
      <Route path="/" element={<EChartsPage/>} />
      <Route path="/users/:id" element={<UserPage/>} />
    </Routes>
  )
}

export default App;
