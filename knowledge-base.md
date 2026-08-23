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
- **Title: "Technical Consultant — Risk & Compliance"** (was "Technical Project
  Coordinator") — corrected per spec-v2.md §0, applied everywhere the role
  appears (`site.ts`, About hero + experience entry, WCC tiles on `/` and
  `/projects`). About's intro paragraph now leads with this title rather than
  the automation angle, since Risk & Compliance is the stronger hook for the
  cybersecurity/governance positioning and substantiates the hero tagline.
- **Founder line added to About**: "Also building Fairhand, a small
  technology studio." — one low-key sentence, no further detail, so the
  master site's "[Name], Founder..." link-out to this portfolio makes sense
  without importing the master site's full scope onto this resume-facing page.
- **CIS degree added to the homepage Credentials tile** (site.ts
  `credentials`) — it already lived in About → Education, but was missing
  from the pills row referenced by the master site's Founders page copy.
- **Hackathons: live links added** to Wild Vision (calgaryhacks2025.adhillon.net)
  and Secure Student (mruhacks2023.adhillon.net) on `/projects`.
- **datingcoach.adhillon.net — intentionally NOT added as a hackathon
  project.** Investigated per spec-v2.md §7 and found to be a live 1-on-1
  dating-coaching business site, not a hackathon build — doesn't fit the
  hackathon-strip framing or naming pattern. Amardeep asked for it to be
  acknowledged somewhere low-key and hard to discover instead: added as one
  small muted line at the very bottom of `/about`, below the Experience list,
  not on any nav-visible/prominent section. Don't move this more prominently
  without him asking.
- **Priorcheck (was AreTheyCringe) added to `/projects`** as a modest,
  not-yet-shipped entry — framed as "cross-platform social graph risk
  analysis," explicitly noted as a demand-testing landing page rather than a
  shipped product, with one line on ToS/scraping-policy awareness. Kept
  deliberately light on technical specifics (no invented data-pipeline or
  classification-approach detail) since the referenced `priorcheck-brief.md`
  wasn't available in this repo — Amardeep confirmed "keep it minimal for
  now" rather than supplying the real architecture detail. No live URL set
  (none confirmed) and no stack tags (unknown) — revisit both if/when he
  provides them.
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
  it now also includes **technical audits of the college's existing internal
  tech stack**, plus **some website work — explicitly a small side thing, not
  a flagship "rebuild."** First-pass copy overstated this (said "leading... a
  public website rebuild" and invented a "went in to X, ended up Y" narrative
  arc that didn't happen) — Amardeep corrected it; current copy is
  deliberately modest (see Decisions Log, 2026-06-30 correction entry). Don't
  re-inflate this without him saying so.
- Blog + Journal are unified under one `/writing` hub with a toggle
  (**Technical** / **Journals**), not two separate nav tabs — avoids the
  "why are there two blogs" confusion a visitor would otherwise hit. The
  underlying content collections (`blog`, `journal`) stay separate so
  `/journal` gating can still be added later without restructuring routes.
- Contact page includes a link out to **Linktree** (or the on-site `/links`
  hub — currently pointed at `/links` until an actual linktr.ee URL exists).

### Resolved: GitHub username + embed (no longer open)
- **Real username confirmed: `adhillon192`** (9 public repos, real account —
  verified via API). The earlier placeholder `github.com/adhillon` belonged to
  a stranger and has been corrected everywhere it appeared (`src/data/site.ts`,
  `src/pages/contact.astro`).
- **No GitHub activity embed/graph/stat will be built — decided against, not
  just deferred.** Amardeep originally asked for one under the hero tagline;
  after discussion he concluded it doesn't fit his positioning as a technical
  consultant / cybersecurity-governance profile: that audience hires for
  judgment, discretion, and named org-scale delivery (WCC, Finlador,
  Velarisse), not public commit cadence — most of his real work is
  client/private by nature anyway, so a public contribution graph would
  measure the wrong thing and sit oddly next to a trust-first positioning.
  Separately, it also would have added real visual weight (a dense grid
  clashing with the site's "one clean fact per tile" language) and
  performance drag (live client-side API calls are rate-limited; a
  build-time version would need a stored token for a secondary signal).
  **Don't re-propose this** unless Amardeep raises it again himself.
- **WCC technology specifics.** The current tags (`Workflow automation`,
  `Technical audits`, `KPI dashboards`, `Website support`) are intentionally
  category-level and modest, not specific framework/hosting names, per
  Amardeep's own flag ("I will let you know if things need to change there").
  Swap in real stack names once confirmed — don't add scope/weight beyond
  what he's confirmed in the meantime.
- **WCC KPIs are placeholders.** The four figures (100s hrs/yr, 5 departments,
  $50M, 300+ staff) are rough/illustrative. Amardeep has said real KPIs will
  be provided later — it's fine for this section to stay sparse until then,
  don't pad it out with more claims to compensate.
- **"Currently reading"** — category confirmed (philosophy, see §2), specific
  title still TBD. Now tile shows "Philosophy (title TBD)" as an honest
  placeholder rather than a generic "A book."
- Everything listed as still-open in `site-build-spec-v1.md` §9 remains open
  unless noted as resolved above (hero positioning line, Finlador
  bookings/transactions question, Community Support Worker inclusion, real
  resume PDF, `/ideas` page naming, `/journal` gated-vs-open decision, actual
  blog/journal post content).

### Full-site review findings (2026-06-30)
- **Hero tagline — RESOLVED.** Now: "Technical consultant for business
  automation — built with a security- and governance-minded approach." A new
  quiet, small (`text-xs`, ink-faint) credibility line sits just below it in
  the hero tile: "CompTIA Security+ · Confidential systems in education ·
  Previously City of Calgary" — plain text, not another row of badge pills,
  specifically so it doesn't read as credential-stacking (reference doc
  Flaw #4) directly under the name. The OG social-share image
  (`public/og-default.svg`) was updated to match. Verified at 1280px, 782px,
  and 375px widths: no overflow, hero/WCC tile heights still match, button
  row stays inside the card with room to spare.
- **The "On repeat" homepage tile is showing literal placeholder instruction
  text** ("A track goes here — a small Spotify embed or a static 'on repeat'
  line"), not a provisional-but-real value like the other tiles have. If the
  site went live today this is the one tile that would visibly look broken/
  unfinished rather than just "not yet final." Fill it or drop the tile before
  any real launch.
- **Launch-readiness flag:** `/ideas` (zero entries either section) and
  `/writing` (one "hello world" placeholder per tab) mean 2 of 5 top-level nav
  destinations are currently empty. Fine mid-build; worth a deliberate call
  before going live (hide from nav vs. wait for at least one real entry each).
- **WCC write-up is thinner than Finlador/Velarisse's.** Correct for now
  (KPIs are still placeholders, and "keep it simple" was explicit direction),
  but once real KPI figures land, WCC — the largest-scale, current-role proof
  point — probably deserves one more beat of substance on `/projects` so it
  doesn't read as an afterthought next to a side project.

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

- **2026-08-22 (Fairhand promoted to homepage, Finlador reframed)** —
  Follow-up to the spec-v2.md batch below, same day. Finlador's equity now
  sits with **Fairhand** (the studio), not Amardeep personally, so the
  homepage bento was restructured: the Finlador tile was removed and replaced
  in the same slot by a new **Fairhand** tile (eyebrow "Studio", not
  "Project" — Velarisse is now the only Project-labeled tile on the
  homepage), tagged "Founder", one-liner "A small technology studio — the
  founding entity behind Finlador." New `fairhand` export added to `site.ts`.
  Finlador itself isn't gone — it still has its full case study on
  `/projects` and still appears on `/links` (both read from the unchanged
  `projects` array in `site.ts`) — just its role tag there and on `/projects`
  now reads "Founding Engineer · equity held via Fairhand" instead of
  "· equity stake". About's Founder line updated to say "Founder of Fairhand"
  explicitly (was "building Fairhand"), matching the master site's Founders
  page wording. Also added a persistent "Projects" shortcut button in the
  mobile sticky header (`Nav.astro`), next to the hamburger toggle — reason:
  most traffic to this site is mobile, and Projects is the primary
  destination; it previously required opening the hamburger menu to reach
  (the Hero's "View work" button covers first-screen visitors but disappears
  once scrolled past). Verified at 375px and default widths, no console/
  server errors.
- **2026-08-22 (spec-v2.md batch)** — Implemented the well-specified items
  from spec-v2.md: title correction to "Technical Consultant — Risk &
  Compliance" everywhere, CIS degree added to the homepage credentials pills,
  a one-line Founder acknowledgment on About, hackathon live links, and a
  modest Priorcheck entry on `/projects`. Two items required a judgment call
  mid-session rather than following the doc verbatim: (1) datingcoach.adhillon.net
  turned out to be a live dating-coaching business, not a hackathon project —
  fetched and confirmed live, then buried as one small line at the bottom of
  `/about` per Amardeep's explicit ask, rather than added to the Hackathons
  strip as the doc implied; (2) Priorcheck's technical-architecture detail
  (referenced via a `priorcheck-brief.md` not present in this repo) was left
  out rather than invented — Amardeep confirmed "keep it minimal" over
  supplying the real detail. See [[feedback-no-overclaiming]] and
  [[feedback-positioning-filter]] — both applied directly in this session's
  calls, not just cited as background.
- **2026-06-30 (hero tagline fixed)** — After the full-site review flagged the
  tagline as out of step with Amardeep's actual pitch, he asked to fold in
  CompTIA Security+, "confidential systems in education" (current WCC role),
  and prior City of Calgary (public sector) experience — but wasn't sure how
  to do it without cluttering the hero. Solution: kept the tagline itself as
  one clean sentence with the security/governance angle now explicit, and
  added those three specific facts as a separate small muted text line below
  it (not more badges) so the hero doesn't turn into a credential wall.
- **2026-06-30 (GitHub embed dropped)** — Confirmed real username
  (`adhillon192`) and fixed it everywhere the wrong placeholder appeared.
  Then, talking through the hero-embed idea, Amardeep reconsidered against
  his actual positioning (technical consultant / cybersecurity-governance)
  and decided a GitHub activity embed doesn't fit that audience — decided
  against outright, not just deferred for later. See §1 "Resolved: GitHub
  username + embed."
- **2026-06-30 (correction)** — Pulled back the WCC copy after Amardeep flagged
  it as overclaiming/"cocky": removed "public website rebuild" language
  (website work is a **side thing**, not a flagship deliverable), removed an
  invented narrative arc ("went in to automate manual tracking, ended up
  auditing... and taking on a full rebuild" — not how it happened), dropped
  the "Full-stack web development" tag, and cut the second WCC paragraph
  entirely rather than replace it (his words: "it is okay to have less
  information... keep it simple"). WCC KPIs are explicitly placeholders —
  real ones to be provided later, don't dress them up meanwhile. Also
  simplified `/projects` by having it reuse `wcc.tags` directly instead of
  maintaining a near-duplicate local tag list.
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
