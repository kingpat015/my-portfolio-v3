import { useState } from 'react'
import Reveal from '../components/Reveal'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact">
      <div className="container">
        <div className="contact-grid">
          <Reveal>
            <span className="eyebrow">CONTACT</span>
            <h2>Open to remote and on-site roles.</h2>
            <p style={{ marginTop: 14, maxWidth: 420 }}>
              Frontend, full-stack, or IT infrastructure — if it involves making systems
              more reliable or workflows less manual, let's talk.
            </p>

            <div className="contact-socials">
              <a href="https://github.com/kingpat015" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="pi pi-github" />
              </a>
              <a href="https://www.linkedin.com/in/patrick-leimuel-aganos-0a4609221" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="pi pi-linkedin" />
              </a>
              <a href="mailto:kingpatrickleimuel15@gmail.com" aria-label="Email">
                <i className="pi pi-envelope" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <form className="contact-form card" onSubmit={submit}>
              {sent ? (
                <div className="contact-success">
                  <i className="pi pi-check-circle" />
                  <p>Message sent. I'll get back to you soon.</p>
                </div>
              ) : (
                <>
                  <label>
                    Name
                    <input required type="text" placeholder="Your name" />
                  </label>
                  <label>
                    Email
                    <input required type="email" placeholder="you@company.com" />
                  </label>
                  <label>
                    Message
                    <textarea required rows={5} placeholder="What are you building?" />
                  </label>
                  <button className="btn btn-primary" type="submit">
                    <i className="pi pi-send" /> Send Message
                  </button>
                </>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}