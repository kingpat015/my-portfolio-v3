# Patrick Leimuel Aganos — Portfolio

React + TypeScript + Vite + PrimeReact portfolio site.

## Run locally

```bash
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Structure

```
src/
  components/   Navbar, Footer, Reveal (scroll animation), BootIntro
  sections/     Hero, About, Experience, Projects, Skills, Infrastructure, Contact
  hooks/        useTheme (dark/light), useReveal (scroll-triggered reveal)
  data/         projects.ts — edit this to add/change project case studies
  styles/       tokens.css (design tokens) + one CSS file per section
```

## Customize

- **Colors / theme**: edit `src/styles/tokens.css`.
- **Projects**: edit `src/data/projects.ts`.
- **CV download**: replace `/public/Patrick_Aganos_CV.pdf` with your real CV (same filename, or update the link in `src/sections/Hero.tsx`).
- **Contact form**: currently UI-only (shows a success state on submit). Wire it to a real backend or a service like Formspree/EmailJS when ready.
- **Social links**: update the placeholder `href="#"` links in `src/sections/Contact.tsx`.

## Notes

- The terminal boot intro only plays once per browser session (stored in `sessionStorage`). Clear session storage or open an incognito tab to see it again.
- Theme preference is saved to `localStorage`.
