import { useEffect, useState } from 'react'

const ROLES = ['Frontend Developer', 'React / TypeScript Engineer', 'Full-Stack Developer']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const full = ROLES[roleIndex]
    const speed = deleting ? 35 : 65
    const t = setTimeout(() => {
      if (!deleting) {
        if (text.length < full.length) setText(full.slice(0, text.length + 1))
        else setTimeout(() => setDeleting(true), 1400)
      } else {
        if (text.length > 0) setText(text.slice(0, -1))
        else { setDeleting(false); setRoleIndex((i) => (i + 1) % ROLES.length) }
      }
    }, speed)
    return () => clearTimeout(t)
  }, [text, deleting, roleIndex])

  return (
    <section id="hero" className="hero">
      <div className="hero-bg" aria-hidden="true" />
      <div className="container hero-inner">
        <span className="eyebrow hero-enter" style={{ animationDelay: '.05s' }}>BUILDING INTERFACES, NOT JUST FIXING THEM</span>
        <h1 className="hero-name hero-enter" style={{ animationDelay: '.15s' }}>Patrick Leimuel Aganos</h1>
        <div className="hero-role hero-enter" style={{ animationDelay: '.25s' }}>
          <span>{text}</span>
          <span className="hero-caret">|</span>
        </div>
        <p className="hero-summary hero-enter" style={{ animationDelay: '.35s' }}>
          Frontend developer who builds polished, production-grade interfaces with
          React and TypeScript — backed by a full-stack and infrastructure background
          that means I understand the systems my UIs sit on top of, from ERP/SAP
          dashboards to AWS-hosted internal tools.
        </p>
        <div className="hero-cta hero-enter" style={{ animationDelay: '.45s' }}>
          <a className="btn btn-primary" href="#projects" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}>
            <i className="pi pi-folder-open" /> View Projects
          </a>
          <a className="btn" href="/Patrick_Aganos_CV.pdf" download>
            <i className="pi pi-download" /> Download CV
          </a>
        </div>

        <div className="hero-stats hero-enter" style={{ animationDelay: '.55s' }}>
          <div><strong>5+</strong><span>years building UIs</span></div>
          <div><strong>React</strong><span>primary stack</span></div>
          <div><strong>7</strong><span>production systems shipped</span></div>
        </div>
      </div>
      <div className="hero-scroll-hint"><span /></div>
    </section>
  )
}
