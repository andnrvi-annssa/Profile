import { useTheme } from './hooks/useTheme.js'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Education from './components/Education.jsx'
import Experience from './components/Experience.jsx'
import Organization from './components/Organization.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import ActivityGallery from './components/ActivityGallery.jsx'
import Achievements from './components/Achievements.jsx'
import Journey from './components/Journey.jsx'
import Goals from './components/Goals.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const { theme, toggle } = useTheme()

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-lg focus:bg-btn focus:px-4 focus:py-2 focus:text-btn-fg"
      >
        Lewati ke konten utama
      </a>
      <Navbar theme={theme} onToggleTheme={toggle} />
      <main id="main">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Organization />
        <Skills />
        <Projects />
        <ActivityGallery />
        <Achievements />
        <Journey />
        <Goals />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
