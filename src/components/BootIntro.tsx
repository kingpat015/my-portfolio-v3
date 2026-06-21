import { useEffect, useState } from 'react'

const LINES = [
  '$ ssh aganos@portfolio.dev',
  'Connecting... done.',
  '$ whoami',
  'patrick.aganos — IT Support Specialist / Programmer',
  '$ uptime',
  '3+ years, 0 unplanned downtime',
  '$ ./launch-portfolio.sh',
  'Access granted. Rendering interface...',
]

export default function BootIntro({ onDone }: { onDone: () => void }) {
  const [shown, setShown] = useState<number>(0)
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem('booted')) {
      onDone()
      return
    }
    if (shown < LINES.length) {
      const t = setTimeout(() => setShown((s) => s + 1), shown === 0 ? 250 : 220)
      return () => clearTimeout(t)
    } else {
      const t = setTimeout(() => {
        setExiting(true)
        sessionStorage.setItem('booted', '1')
        setTimeout(onDone, 500)
      }, 500)
      return () => clearTimeout(t)
    }
  }, [shown, onDone])

  if (sessionStorage.getItem('booted')) return null

  return (
    <div className={`boot-overlay ${exiting ? 'boot-exit' : ''}`}>
      <div className="boot-window">
        {LINES.slice(0, shown).map((line, i) => (
          <div key={i} className={line.startsWith('$') ? 'boot-cmd' : 'boot-out'}>
            {line}
          </div>
        ))}
        {shown < LINES.length && <span className="boot-cursor">█</span>}
      </div>
    </div>
  )
}
