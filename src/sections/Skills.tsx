import Reveal from '../components/Reveal'

const CATEGORIES = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React + TypeScript', level: 94 },
      { name: 'PrimeReact / Ant Design', level: 88 },
      { name: 'Modern CSS & Animation', level: 90 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'PHP / Laravel', level: 80 },
      { name: 'MySQL', level: 78 },
      { name: 'Node.js / Express', level: 72 },
    ],
  },
  {
    title: 'Infrastructure (background)',
    skills: [
      { name: 'AWS (EC2, IAM, S3)', level: 65 },
      { name: 'Windows Server / Networking', level: 70 },
      { name: 'Git & Version Control', level: 86 },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <span className="eyebrow">SKILLS</span>
            <h2>What I reach for, by layer.</h2>
          </Reveal>
        </div>

        <div className="skills-grid">
          {CATEGORIES.map((cat, ci) => (
            <Reveal key={cat.title} delay={ci * 80} className="skills-col">
              <h3 className="skills-col-title">{cat.title}</h3>
              {cat.skills.map((s) => (
                <div key={s.name} className="skill-row">
                  <div className="skill-row-label">
                    <span>{s.name}</span>
                    <span className="skill-row-pct">{s.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-bar-fill" style={{ width: `${s.level}%` }} />
                  </div>
                </div>
              ))}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
