import React from 'react'
import Layout from './Components/Layout/Layout'
import Home from './Page/HomePage/Home'
import Collection from './Page/CollectionsPage/Collection'
import About from './Page/AboutPage/About'
import Custom from './Page/CustomPage/Custom'
import Contact from './Page/ContactPage/Contact'
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'

const App = () => {
  return (
    <>
     <BrowserRouter>
                   <Routes>
                          <Router>
                                 <Router/>
                                 <Router/>
                                 <Router/>
                          </Router>
                   </Routes>
     </BrowserRouter>
    </>
  )
}

export default App