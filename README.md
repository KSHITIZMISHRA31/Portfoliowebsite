# Kshitiz Mishra — Portfolio

A Java Backend Engineer portfolio built with React, TypeScript, Tailwind CSS, and Framer Motion. Content is data-driven — you don't need to touch component code to update experience, projects, or links.

## Project structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   └── resume.pdf              ← swap this file to update the downloadable resume
├── src/
│   ├── data/                   ← EDIT THESE to change site content
│   │   ├── siteConfig.ts       ← name, email, social links, resume path
│   │   ├── experience.ts       ← work experience timeline
│   │   ├── projects.ts         ← project cards + Job Agent case study content
│   │   └── techStack.ts        ← tech stack groups, DSA categories
│   ├── components/             ← presentation only, reads from src/data
│   └── App.tsx                 ← section order
└── index.html                  ← SEO meta tags, page title
```

## Run locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Build for production

```bash
npm run build
npm run preview   # sanity-check the production build locally
```

Output goes to `dist/`.

## Environment variables

None required. The site has no backend calls, so there's nothing to configure — it's a fully static build. If you later add live GitHub API stats, do it as a client-side fetch to the public (unauthenticated) GitHub REST API — no token needed for public repo data, so nothing to keep secret.

## How to deploy

**GitHub Pages** (matches your existing `kshitizmishra31.github.io` domain):
1. `npm run build`
2. Push the contents of `dist/` to a `gh-pages` branch (or use the `gh-pages` npm package / a GitHub Action)
3. If deploying to `kshitizmishra31.github.io` (the root user-page repo, not a project page), no base-path config is needed

**Vercel / Netlify** (simpler, recommended if you don't need the exact current URL):
1. Connect the repo
2. Build command: `npm run build`, output directory: `dist`
3. Done — auto-deploys on push

## How to change content

- **Resume**: replace `public/resume.pdf` with a new export. The download button always points at `/resume.pdf`, so no code changes needed.
- **Social links / email**: edit `src/data/siteConfig.ts`.
- **Experience**: edit `src/data/experience.ts` — add a new object to the array for a new role.
- **Projects**: edit `src/data/projects.ts`. Add a new object to `projects[]`. Set `featured: true` and fill in `problem`, `solution`, `architecture`, `engineeringDecisions`, `challenges`, and `futureImprovements` to get the full case-study modal; omit them for a simple card.
- **Tech stack**: edit `src/data/techStack.ts`.

## Known gaps (flagged honestly, not fixed silently)

- **No `og:image` / social preview image** — I didn't have a real screenshot or graphic to use, and didn't want to fabricate one. `index.html` has the Open Graph tags ready; just add an image at `public/og-image.png` (1200×630) and uncomment the two `<meta property="og:image">` / `<meta name="twitter:image">` lines.
- **No custom domain configured** — deploy instructions above assume GitHub Pages' default `.github.io` URL or a Vercel/Netlify subdomain.
- **"Backend Microservices (JWT + Kafka)" project is not included** — per your confirmation, it doesn't have a public repo, so it's omitted rather than linked to nothing.
- **No live GitHub API integration** — repo/contribution stats are not pulled live; the Projects section is authored directly from the repos I actually inspected. Static was the right call here per your own brief (point 12: prefer a clean static representation if live integration adds unnecessary complexity) since your GitHub account doesn't have enough repo/contribution volume yet for a stats widget to look substantive.
