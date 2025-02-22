import React, { useLayoutEffect } from 'react'
import { Navbar } from './components'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { Home } from './pages'
// import About from "./pages/about";
// import Blogs from "./pages/blogs";
// import SignUp from "./pages/signup";
// import Contact from "./pages/contact";
import './App.css'

const ScrollToTop = () => {
  const location = useLocation()

  useLayoutEffect(() => {
    // Scroll to the top of the page when the route changes
    window.scrollTo({ top: 0, left: 0 })
  }, [location.pathname])

  return null
}

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
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
