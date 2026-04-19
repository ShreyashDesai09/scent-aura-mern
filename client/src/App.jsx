import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import './index.css' 


// Component Imports
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Page Imports
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App