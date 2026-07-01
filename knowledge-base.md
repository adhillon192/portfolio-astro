# Knowledge Base (living doc)

Recurring reference for this project — unlike `portfolio-reference-v1.md` and
`site-build-spec-v1.md` (the original pre-build planning docs, now historical),
this file is meant to be updated as the build and Amardeep's context evolve.
Read this first in any new session working on the site.

---

## 1. Site build status (current)

**Stack:** Astro (static output) + Tailwind CSS v4 + TypeScript. Hosting: Railway
(planned, not yet deployed from this repo). Palette A ("Ink & warm white") is
locked: background `#F7F5F1`, ink `#111113`, amber accent `#D9A441`, light-mode
only.

**Routes live:** `/`, `/projects`, `/about`, `/writing` (Technical/Journals
toggle over the `blog` and `journal` content collections), `/ideas`, `/contact`,
`/links`. `/blog` and `/journal` redirect to `/writing`.

**Nav:** Projects · About · Writing · Ideas · Contact. No Resume tab — resume
lives as a download on `/contact`. Mobile collapses to an animated slide-down
menu (hamburger ↔ ✕).

### Decisions locked so far
- Location: **Vancouver, Canada** (was Calgary in the original planning docs — superseded).
- Credentials list spells out **"CompTIA Security+"** in full, not abbreviated.
- Finlador carries a role tag: **"Founding Engineer · equity stake"** — Amardeep
  co-owns this one, it's not a client contract, so it's framed differently from
  Velarisse (client build, no role tag).
- Stack copy says **Postgres**, not **Supabase**, everywhere it's mentioned
  (Supabase is the hosted-Postgres provider; Postgres is the more universally
  recognizable/technical term to lead with).
- WCC's homepage/projects copy uses **KPI tiles + short technical tags**, not
  long narrative paragraphs — this was an explicit correction from Amardeep
  (see Decisions Log). Applies to any future case-study copy too: lead with
  numbers and tags, keep prose short.
- WCC scope has grown beyond the original "five-department automation" story:
  it now includes a **technical audit of the college's existing internal tech
  stack** and a **public website rebuild**. Site copy reflects this (KPI tile
  + `wcc.tags` in `src/data/site.ts`, and the compact card on `/projects`).
- Blog + Journal are unified under one `/writing` hub with a toggle
  (**Technical** / **Journals**), not two separate nav tabs — avoids the
  "why are there two blogs" confusion a visitor would otherwise hit. The
  underlying content collections (`blog`, `journal`) stay separate so
  `/journal` gating can still be added later without restructuring routes.
- Contact page includes a link out to **Linktree** (or the on-site `/links`
  hub — currently pointed at `/links` until an actual linktr.ee URL exists).

### Open items — need Amardeep's input
- **GitHub username is unresolved.** The site currently links to
  `github.com/adhillon`, which is a placeholder guessed early in the build —
  verified via the GitHub API that this account belongs to someone else (not
  Amardeep). **Do not treat this as correct.** Candidates tried
  (`amardeepdhillon`, `amardeep-dhillon`) exist but show 0 public repos, so
  activity visibility is also an open question. Needed: (1) real username,
  (2) confirmation that contribution activity is public (or willingness to
  enable "show private contributions" on the GitHub profile).
- **Hero embed decision made, blocked on the above.** Amardeep chose a GitHub
  contribution-activity embed under the hero tagline. Not yet built — needs
  the real username + public-activity confirmation first.
- **WCC technology specifics.** The current tags (`Full-stack web
  development`, `Technical audits`, `Systems integration`, etc.) are
  intentionally category-level, not specific framework/hosting names, per
  Amardeep's own flag ("I will let you know if things need to change there").
  Swap in real stack names once confirmed.
- **"Currently reading"** — category confirmed (philosophy, see §2), specific
  title still TBD. Now tile shows "Philosophy (title TBD)" as an honest
  placeholder rather than a generic "A book."
- Everything listed as still-open in `site-build-spec-v1.md` §9 remains open
  unless noted as resolved above (hero positioning line, Finlador
  bookings/transactions question, Community Support Worker inclusion, real
  resume PDF, `/ideas` page naming, `/journal` gated-vs-open decision, actual
  blog/journal post content).

---

## 2. Personal profile — voice, interests, influences

Captured directly from Amardeep, for shaping tone on `/writing` (especially
the Journals side), the `/about` narrative, and the homepage "Now" tile —
not for direct verbatim use as site copy unless he says so.

- **Reads philosophy.** Books, not just articles — this is a real, ongoing
  interest, not a one-off mention. Good fodder for the Journals side of
  `/writing` and for a more specific "currently reading" Now-tile entry once
  he names a title.
- **Daily news reader — The New York Times, every morning.** Reads beyond
  headlines: opinion pieces specifically, not just straight news.
- **Follows technical/engineering blogs** to stay current in the field —
  this is a deliberate habit, framed as staying sharp/informed rather than
  passive scrolling.
- **Voice implication:** someone who reads broadly (philosophy → opinion
  journalism → engineering blogs) and synthesizes across registers. This
  supports a Journals voice that can move between personal reflection and
  informed technical/current-events commentary without it feeling like two
  different people wrote it — useful context if/when he starts writing for
  `/writing` → Journals or the Technical side.
- Not yet captured: specific philosophers/books, specific technical blogs
  followed, whether he wants any of this referenced directly in site copy
  (e.g. a "currently reading" credit, a "recommended reading" list) or kept
  as background influence only. Ask before publishing anything specific.

---

## 3. Decisions log (dated, most recent first)

- **2026-06-30** — Batch update: Vancouver location, CompTIA Security+ spelled
  out, Finlador → "Founding Engineer · equity stake" + Postgres over Supabase,
  Writing toggle relabeled "Technical / Journals", Linktree link added to
  Contact, WCC copy trimmed of the old department-list pills (replaced with
  KPI tiles + tags) — **this was an explicit correction from Amardeep**, and
  the same "numbers + tags over paragraphs" instinct was reapplied when WCC
  scope grew to include the audit + website work later the same session.
  Hero-embed choice: GitHub contribution activity (blocked — see Open Items).
- **2026-06-30 (earlier same day)** — Initial build: Astro + Tailwind scaffold,
  full site per `site-build-spec-v1.md`, Palette A selected, Blog/Journal
  originally shipped as two separate nav tabs before being unified into
  `/writing` later the same day, Resume tab replaced by a dedicated `/contact`
  page.

---

## 4. How to keep this doc useful

- When a fact changes (title, location, project status, a "confirm this"
  item gets resolved), update the relevant section above — don't leave stale
  facts for a future session to trip over.
- When Amardeep shares something personal/durable (an interest, a working
  style, a preference for how copy should read), add it to §2 rather than
  letting it live only in chat history.
- Keep the Decisions Log append-only and dated — it's the fastest way for a
  future session to see *why* something is the way it is without re-reading
  the whole conversation.
