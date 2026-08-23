# portfolio-astro

Personal portfolio site for Amardeep Dhillon. Built with **Astro + Tailwind CSS + TypeScript**, per `site-build-spec-v1.md`. Static output, light-mode only (Palette A — "Ink & warm white", amber accent).

**Start here:** [`knowledge-base.md`](knowledge-base.md) is the living reference for current build status, locked decisions, open items, and Amardeep's personal context (voice/interests) — read it before making content changes. `portfolio-reference-v1.md`, `site-build-spec-v1.md`, and `second-blog-plan.md` are the original pre-build planning docs (historical, superseded where the knowledge base says so).

## Commands

```bash
npm install      # install dependencies
npm run dev      # local dev server → http://localhost:4321
npm run build    # static build → dist/
npm run preview  # serve the built dist/ locally
```

## Structure

```
src/
  data/site.ts            Single source of truth for site-wide copy/content
  content.config.ts       Content collections (blog, journal)
  content/blog/           Professional blog posts (markdown)
  content/journal/        Personal journal posts (markdown)
  layouts/                BaseLayout, PostLayout
  components/             Nav, Footer, BaseHead (SEO/OG/GA), BentoCard, PostList
  pages/                  Routes (see below)
public/                   favicon.svg, og-default.svg, resume.pdf (placeholder)
```

### Routes

| Path | Description |
|------|-------------|
| `/` | Homepage — bento grid (7 tiles) |
| `/projects` | Case studies (Finlador, Velarisse, WCC) + hackathons strip |
| `/about` | Bio, education, certs, career narrative |
| `/writing` | Unified writing hub with a Technical / Journals toggle |
| `/blog/[slug]` | Technical post pages (surfaced under Writing → Technical) |
| `/journal/[slug]` | Personal post pages (surfaced under Writing → Journals) |
| `/contact` | Contact page (email, socials, resume download) |
| `/links` | Linktree-style shareable page |
| `/resume.pdf` | Downloadable resume (placeholder) — linked from Contact |

`/blog` and `/journal` redirect to `/writing` (kept for old links). The top nav
is: Projects · About · Writing · Contact. On mobile it collapses to an
animated slide-down menu (hamburger → ✕).

## Analytics

Google Analytics loads only when `PUBLIC_GA_ID` is set (e.g. in `.env`):

```
PUBLIC_GA_ID=G-XXXXXXXXXX
```

Left unset, GA is skipped entirely (keeps it out of local dev).

## Deferred / open decisions, and provisional copy

Search the codebase for `PROVISIONAL` / `PLACEHOLDER` to find flagged copy.
The full, current list of open items (GitHub username, hero embed, WCC stack
specifics, gating decision for `/journal`, etc.) lives in
[`knowledge-base.md`](knowledge-base.md) §1 — that file is kept up to date as
items get resolved, so treat it as the source of truth over this README.
