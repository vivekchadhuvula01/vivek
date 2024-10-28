import './App.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/projects/Projects'
import Skills from './components/Skills/Skills'

function App() {


  return (
    <>
      <header>
        <Navbar />
      </header>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />

    </>
  )
}

export default App
