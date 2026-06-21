import Reveal from '../components/Reveal'

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <Reveal>
          <span className="eyebrow">ABOUT</span>
          <h2>Five years building frontends and web apps that real teams run on.</h2>
        </Reveal>

        <div className="about-grid">
          <Reveal delay={80} className="about-text">
            <p>
              Frontend is where I live — turning messy real-world workflows into
              interfaces people actually enjoy using. React and TypeScript are my main
              tools, and I care a lot about the details most devs skip: the transition
              that feels right, the state that never flickers, the layout that holds up
              on a cramped screen.
            </p>
            <p style={{ marginTop: 18 }}>
              I built and shipped internal tools end-to-end: ticketing dashboards,
              document signing workflows, ERP/SAP interfaces across seven modules — all
              React-driven, all designed for people who don't have time to figure out a
              confusing UI.
            </p>

            <Reveal delay={220} className="about-sidequest">
              <span className="about-sidequest-badge">
                <i className="pi pi-bolt" /> side quest
              </span>
              <p className="about-sidequest-text">
                Also: I keep servers, networks, and 30+ users running because someone has
                to — IT support is the origin story, not the main one.
              </p>
            </Reveal>
          </Reveal>

          <Reveal delay={160} className="about-panel">
            <div className="terminal-card">
              <div className="terminal-card-bar">
                <span /><span /><span />
                <span className="terminal-card-title">profile.json</span>
              </div>
              <pre className="terminal-card-body">{`{
  "name": "Patrick Leimuel Aganos",
  "role": "IT Support / Programmer",
  "company": "Exelpack Corporation",
  "since": "2021-05",
  "stack": ["React", "TypeScript",
    "Laravel", "PHP", "MySQL", "AWS"],
  "focus": [
    "Frontend / web development",
    "Internal tooling UIs",
    "ERP/SAP module interfaces"
  ],
  "status": "shipping"
}`}</pre>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
