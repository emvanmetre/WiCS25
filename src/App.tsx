import React, { useLayoutEffect } from 'react'
import { Navbar } from './components'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { Home, Create, Explore, Modify } from './pages'
import './App.css'
import './style.css'

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
        <Route path="/explore" element={<Explore />} />
        <Route path="/create" element={<Create />} />
        <Route path="/component/:id" element={<Modify />} />
      </Routes>
    </Router>
  )
}

export default App
