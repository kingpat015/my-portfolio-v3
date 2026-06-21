import Reveal from '../components/Reveal'

const RESPONSIBILITIES = [
  { text: 'Internal web tool development for workflow automation', frontend: true },
  { text: 'ERP/SAP system UI migration and maintenance', frontend: true },
  { text: 'Tier 1 & 2 IT support for 30+ users', frontend: false },
  { text: 'Network infrastructure maintenance — routers, switches, servers', frontend: false },
  { text: 'Windows system deployment, updates, and patching', frontend: false },
  { text: 'Cybersecurity training for employees', frontend: false },
  { text: 'Vendor coordination and IT procurement', frontend: false },
]

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <span className="eyebrow">EXPERIENCE</span>
            <h2>Started in IT support, grew into frontend.</h2>
            <p>May 2021 — Present, Exelpack Corporation.</p>
          </Reveal>
        </div>

        <div className="timeline">
          <Reveal className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <div className="timeline-meta">
                <span className="timeline-date">May 2021 — Present</span>
                <h3>Frontend / Full-Stack Developer <span className="timeline-role-sub">(from IT Support)</span></h3>
                <span className="timeline-company">Exelpack Corporation</span>
              </div>
              <ul className="timeline-list">
                {RESPONSIBILITIES.map((r) => (
                  <li key={r.text} className={r.frontend ? 'timeline-item-frontend' : ''}>
                    <i className={r.frontend ? 'pi pi-code' : 'pi pi-check'} /> {r.text}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
