import { Home } from './pages/Home'
import { Navbar,NavbarMobile } from "./components/Navbar/Navbar"
import { Footer } from './components/Footer/Footer'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { useState } from 'react'


function App() {
  const [isMobbile] = useState(window.innerWidth > 768)

  return (
    <>
      <Router>
        {isMobbile ? <Navbar/> : <NavbarMobile/>}
        <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Contact' element={<Contact/>}/>
        </Routes>
        </main>
        <Footer />
      </Router>
    </>
  )
}

export default App
