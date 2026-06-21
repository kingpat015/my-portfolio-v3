export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} Patrick Leimuel Aganos</span>
        <span className="footer-tag">built with React · TypeScript · PrimeReact</span>
      </div>
    </footer>
  )
}
