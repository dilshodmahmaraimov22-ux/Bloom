import React from 'react'
import Layout from './Components/Layout/Layout'
import Home from './Page/HomePage/Home'
import Collection from './Page/CollectionsPage/Collection'
import About from './Page/AboutPage/About'
import Custom from './Page/CustomPage/Custom'
import Contact from './Page/ContactPage/Contact'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <>
     <BrowserRouter>
                   <Routes>
                          <Route path='/' element={<Layout/>}>
                                 <Route path='/' element={<Home/>}/>
                                 <Route path='/collection' element={<Collection/>}/>
                                 <Route path='/about' element={<About/>}/>
                                 <Route path='/custom' element={<Custom/>}/>
                                 <Route path='/contact' element={<Contact/>}/>
                          </Route>
                   </Routes>
     </BrowserRouter>
    </>
  )
}

export default App