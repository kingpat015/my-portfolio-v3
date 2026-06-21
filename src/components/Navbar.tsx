import { useEffect, useState } from 'react'
import { useTheme } from '../hooks/useTheme'

const LINKS = [
  { id: 'about', label: 'about' },
  { id: 'experience', label: 'experience' },
  { id: 'projects', label: 'projects' },
  { id: 'skills', label: 'skills' },
  { id: 'infrastructure', label: 'infra' },
  { id: 'contact', label: 'contact' },
]

export default function Navbar() {
  const { theme, toggle } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id: string) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a href="#" className="navbar-logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
          <span className="navbar-logo-bracket">{'<'}</span>PLA<span className="navbar-logo-bracket">{'/>'}</span>
        </a>

        <nav className="navbar-links">
          {LINKS.map((l) => (
            <button key={l.id} onClick={() => go(l.id)}>{l.label}</button>
          ))}
        </nav>

        <div className="navbar-actions">
          <button className="theme-toggle" aria-label="Toggle theme" onClick={toggle}>
            <span className={`theme-toggle-knob ${theme === 'light' ? 'is-light' : ''}`}>
              <i className={theme === 'dark' ? 'pi pi-moon' : 'pi pi-sun'} />
            </span>
          </button>
          <button className="navbar-burger" onClick={() => setOpen((o) => !o)} aria-label="Menu">
            <i className={open ? 'pi pi-times' : 'pi pi-bars'} />
          </button>
        </div>
      </div>

      {open && (
        <div className="navbar-mobile">
          {LINKS.map((l) => (
            <button key={l.id} onClick={() => go(l.id)}>{l.label}</button>
          ))}
        </div>
      )}
    </header>
  )
}
