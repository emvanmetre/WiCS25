import React from 'react'
import { Navbar } from './components'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages'
// import About from "./pages/about";
// import Blogs from "./pages/blogs";
// import SignUp from "./pages/signup";
// import Contact from "./pages/contact";
import './App.css'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Home />} />
        <Route path="/contact" element={<Home />} />
        <Route path="/sign-up" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
