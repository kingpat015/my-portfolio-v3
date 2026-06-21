import Reveal from '../components/Reveal'

const STACKS = [
  {
    title: 'AWS',
    icon: 'pi pi-cloud',
    points: ['EC2 — Windows Server 2025', 'IAM roles & security groups', 'RDP hardening & remote access'],
  },
  {
    title: 'ERP / SAP',
    icon: 'pi pi-sitemap',
    points: ['7 modules: PMMS, CPOSMS, PRMS…', 'Data migration & system optimization', 'Cross-department access control'],
  },
  {
    title: 'Networking',
    icon: 'pi pi-wifi',
    points: ['Routers, switches, server maintenance', 'Patching & update deployment', 'Cybersecurity training for staff'],
  },
]

export default function Infrastructure() {
  return (
    <section id="infrastructure">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <span className="eyebrow">BACKGROUND: SYSTEMS &amp; INFRASTRUCTURE</span>
            <h2>The layer my UIs sit on top of.</h2>
            <p>Not my main focus anymore, but it's why I build frontends that hold up in production — I've seen what's underneath.</p>
          </Reveal>
        </div>

        <div className="infra-grid">
          {STACKS.map((s, i) => (
            <Reveal key={s.title} delay={i * 90} className="infra-card card">
              <div className="infra-icon"><i className={s.icon} /></div>
              <h3>{s.title}</h3>
              <ul>
                {s.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
