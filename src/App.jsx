import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home'
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      {/* <Route path="/download" element={<Downloading />} /> */}
      <Route path="/contact" element={<Contacts />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
