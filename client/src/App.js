import React from 'react'
import Home from './Components/HomeComponents/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Course from './Components/Course'
import Shop from './Components/Shop'
import Events from './Components/Events'
import Aboutus from './Components/Aboutus'
import Contactus from './Components/Contactus'
import FAQs from './Components/FAQs'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Course />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/events' element={<Events />} />
        <Route path='/about' element={<Aboutus />} />
        <Route path='/contact' element={<Contactus />} />
        <Route path='/faqs' element={<FAQs />} />
      </Routes>
    </Router>
  )
}

export default App
