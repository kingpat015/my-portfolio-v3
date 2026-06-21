import { useState } from 'react'
import { ThemeProvider } from './hooks/useTheme'
import BootIntro from './components/BootIntro'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Infrastructure from './sections/Infrastructure'
import Contact from './sections/Contact'

import './styles/navbar.css'
import './styles/hero.css'
import './styles/about.css'
import './styles/experience.css'
import './styles/projects.css'
import './styles/skills.css'
import './styles/infrastructure.css'
import './styles/contact.css'
import './styles/boot.css'
import './styles/footer.css'

export default function App() {
  const [booted, setBooted] = useState(false)

  return (
    <ThemeProvider>
      {!booted && <BootIntro onDone={() => setBooted(true)} />}
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Infrastructure />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  )
}
