# Mohamed Elhoufy — Portfolio Website

Single-page portfolio built with **React + Vite + Tailwind CSS + Lucide icons**.

## 1. Install dependencies

Requires [Node.js](https://nodejs.org) 18 or newer.

```bash
cd portfolio
npm install
```

## 2. Run locally

```bash
npm run dev
```

Open the address it prints (usually http://localhost:5173).

Production build (output in `dist/`):

```bash
npm run build
npm run preview   # optional: preview the build locally
```

## 3. Replace the profile photo

Put your photo at:

```
public/assets/profile.jpg
```

Same file name, that's all. Recommended: portrait, about 4:5 ratio (e.g. 800 × 1000 px), under 300 KB.
Until the file exists, the site shows a placeholder frame.

Using PNG/WebP instead? Change the `photo` line in `src/data/portfolio.js`.

## 4. Edit personal information

Everything lives in **`src/data/portfolio.js`**: name, contact details, About text,
services, skills, projects, experience, education, achievements.
Edit the text there and the site updates. Layout code is in `src/sections/` and `src/components/`.

Colors are defined in `tailwind.config.js` (`navy`, `accent`, `paper`, `ink`).

## 5. Add future projects

Open `src/data/portfolio.js` and add an object to the `projects` array:

```js
{
  icon: 'Bot',                       // any name registered in src/components/Icon.jsx
  category: 'AI Agents',
  title: 'My New Project',
  description: 'One or two honest sentences about what it does.',
  tags: ['Python', 'LangGraph'],
  status: 'Case Study / In Progress',
  link: 'https://github.com/you/repo',   // optional — only add a real public URL
}
```

If `link` is empty or missing, the card shows the `status` badge instead of a link.

## Notes

- **Contact form** is frontend-only: "Send Message" opens the visitor's email app with the message pre-filled
  (to `m.m.elhoufy@gmail.com`). There is no backend. To receive messages directly, connect a form service later
  and replace the `onSubmit` handler in `src/sections/Contact.jsx`.
- **Deploying to a sub-path** (e.g. GitHub Pages `/repo-name/`): set `base: '/repo-name/'` in `vite.config.js`.
  Netlify, Vercel and Cloudflare Pages work with the defaults (build command `npm run build`, output `dist`).
- Fonts (Inter, JetBrains Mono) load from Google Fonts; the site falls back to system fonts if offline.
- Animations respect the visitor's "reduce motion" setting.

## Structure

```
public/assets/profile.jpg   ← your photo goes here
src/data/portfolio.js       ← all content
src/components/             ← Navbar, Footer, Button, ProfilePhoto, Reveal, ...
src/sections/               ← Hero, About, Services, Skills, Projects, ...
```
