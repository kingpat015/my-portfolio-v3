import { useState } from 'react'
import { Dialog } from 'primereact/dialog'
import Reveal from '../components/Reveal'
import { PROJECTS, type Project } from '../data/projects'

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null)

  return (
    <section id="projects">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <span className="eyebrow">PROJECTS</span>
            <h2>Interfaces I designed and shipped.</h2>
            <p>Four systems, all React-first, that moved real work off spreadsheets, paper, and manual tracking.</p>
          </Reveal>
        </div>

        <div className="project-grid">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.id} delay={i * 70}>
              <button className="project-card card" onClick={() => setActive(p)}>
                <div className="project-icon"><i className={p.icon} /></div>
                <h3>{p.name}</h3>
                <p>{p.tagline}</p>
                <div className="project-tags">
                  {p.stack.slice(0, 3).map((s) => <span key={s} className="chip">{s}</span>)}
                </div>
                <span className="project-link">View case study <i className="pi pi-arrow-right" /></span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Dialog
        visible={!!active}
        onHide={() => setActive(null)}
        header={active?.name}
        className="project-dialog"
        dismissableMask
      >
        {active && (
          <div>
            <p className="project-dialog-tagline">{active.tagline}</p>
            <p style={{ marginTop: 16 }}>{active.description}</p>

            <h4 className="project-dialog-sub">Impact</h4>
            <ul className="project-dialog-impact">
              {active.impact.map((i) => <li key={i}><i className="pi pi-bolt" /> {i}</li>)}
            </ul>

            <h4 className="project-dialog-sub">Stack</h4>
            <div className="project-tags">
              {active.stack.map((s) => <span key={s} className="chip">{s}</span>)}
            </div>
          </div>
        )}
      </Dialog>
    </section>
  )
}
