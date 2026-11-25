# Shifana | Portfolio

A premium, single-page developer portfolio for Shifana, built with React, Vite, and Tailwind CSS. It is a self-contained frontend: there is no backend, database, or authentication.

## Getting started

```bash
npm install
npm run dev       # local development server
```

For a production build and local preview:

```bash
npm run build
npm run preview
```

## Where to edit content

All editable content lives in `src/data/portfolio.ts`:

- Personal details (name, title, intro, location, email, phone, GitHub).
- Navigation items.
- About text and current focus.
- Skill groups.
- Experience.
- Projects, including their source-code and live-demo links.
- Education, languages, and professional strengths.

## Replacing placeholders

### Resume

The "Download Resume" button points to `/Shifana-Resume.pdf`. Place the real PDF at:

```text
public/Shifana-Resume.pdf
```

The file is not included in the project. Until it is added, the download will fail.

### Profile photo

No photo is included, so the hero shows a monogram fallback. To use a photo, add it at `public/images/shifana-profile.jpg` and replace the monogram block in `src/components/HeroPortrait.tsx` with an `<img>` tag that uses that path and has descriptive alt text.

### Project links

Each project's links are in `src/data/portfolio.ts`, under `links`. Replace every value that starts with `#replace-` with the real URL, for example `https://github.com/your-username/your-repo`. Until a link is replaced, the site shows a "Link coming soon" label instead of a link.

### Contact form

The contact form is in demo mode and does not send messages. To enable delivery, connect a submission service inside `submitContactMessage` in `src/lib/contactService.ts`. The form already validates input and shows loading and error states.

## Project structure

```text
public/                  Static files (favicon, resume)
src/
  components/            One component per section, plus shared UI pieces
  data/portfolio.ts      All portfolio content and project link placeholders
  hooks/                 Scroll-spy hook for the navigation
  lib/                   Link helpers and the contact submission service
  App.tsx                Page composition
  index.css              Theme styles, animations, and reduced-motion rules
```

## Accessibility and motion

- Animations respect the operating system's "reduce motion" setting.
- Keyboard focus is visible throughout, and the mobile menu closes with Escape.
- The page includes a skip link and uses semantic section landmarks.
