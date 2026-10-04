import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Services from './sections/Services'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Education from './sections/Education'
import Achievements from './sections/Achievements'
import Contact from './sections/Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
