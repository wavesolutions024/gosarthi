import React from 'react'

import './App.scss'
import Herosection from './comp/herosection/Herosection'
import Facilities from './comp/facilities/Facilities'
import About from './comp/about/About'
import Footer from './comp/footer/Footer'
import BeforeFooter from './comp/before-footer/BeforeFooter'

function App() {


  return (
    <>
      <div class="app">
        <Herosection/>
        <About />
        <Facilities />
        <BeforeFooter />
        <Footer />
      </div>
    </>
  )
}

export default App
