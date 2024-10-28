import './App.css'
import About from './components/About/About'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/projects/Projects'

function App() {


  return (
    <>
      <header>
        <Navbar />
      </header>
      <Hero />
      <About />
      <Projects />

    </>
  )
}

export default App
