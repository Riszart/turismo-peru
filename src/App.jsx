import { Home } from './pages/Home'
import { Navbar } from "./components/Navbar/Navbar"
import { Footer } from './components/Footer/Footer'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Navbar />
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
