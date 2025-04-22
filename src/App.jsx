import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/common/Footer'
import Container from './components/common/Container'

function App() {

  return <Container>
    <div className="p-8">
      <h1 className="text-5xl font-molle text-pink-500">
        ¡Hola con Molle desde Tailwind!
      </h1>
    </div>
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