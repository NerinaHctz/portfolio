import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/common/Footer'
import Container from './components/common/Container'
// import './index.css'

function App() {

  return <Container className='flex flex-col min-h-screen bg-cyan-950 text-gray-300'>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
  </Container>
}

export default App