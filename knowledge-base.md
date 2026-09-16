# Knowledge Base (living doc)

Recurring reference for this project — unlike `portfolio-reference-v1.md` and
`site-build-spec-v1.md` (the original pre-build planning docs, now historical),
this file is meant to be updated as the build and Amardeep's context evolve.
Read this first in any new session working on the site.

---

## 1. Site build status (current)

**Stack:** Astro (static output) + Tailwind CSS v4 + TypeScript. Hosting: Railway
(planned, not yet deployed from this repo).

**Palette B ("Ledger")** — current as of 2026-08-23, supersedes Palette A
("Ink & warm white"). Cool blue-grey paper: base `#ECEFF3`, surface `#FBFCFD`,
quiet surface `#F5F7F9`, ink `#12161C`, **oxblood** accent `#7A2230`.
Light-mode only. **Type:** IBM Plex Sans for prose, IBM Plex Mono reserved for
"instrument voice" (eyebrows, KPI figures, tags) — replaced Inter. Both changes
were made to move the site off a recognisably generic-AI look; see Decisions
Log entries (d) and (e) for the full reasoning and the revert path.

**Routes live:** `/`, `/projects`, `/about`, `/writing` (Technical/Journals
toggle over the `blog` and `journal` content collections), `/contact`,
`/links`. `/blog` and `/journal` redirect to `/writing`. `/ideas` was removed
2026-08-23 (see Decisions Log) — don't re-add without Amardeep asking.

**Nav:** Projects · About · Writing · Contact. No Resume tab — resume
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
- **WCC KPIs — partially resolved 2026-08-23 by removal.** The two impact
  claims (100s hrs/yr, 5 departments) were pulled rather than shipped as
  placeholders; only the two institutional scale facts ($50M, 300+ staff)
  remain, relabelled as scale. **Still blocked on Amardeep for real impact
  figures** — see Decisions Log entry (e). Don't pad this out with softer
  claims to compensate in the meantime.
- **"Currently reading"** — was shown as "Philosophy (title TBD)". The Now tile
  was removed entirely 2026-08-23 (entry (d)), so this is no longer surfaced
  anywhere; the open question only matters again if a Now tile comes back.
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
- **The "On repeat" homepage tile — RESOLVED 2026-08-23 (dropped).** It was
  showing literal placeholder instruction text and would have looked broken at
  launch; rather than fill it, the tile was removed along with the "Now" tile
  (see Decisions Log entry (d)). The homepage now carries no placeholder copy.
- **Launch-readiness flag:** `/writing` (one "hello world" placeholder per
  tab) is currently empty. Fine mid-build; worth a deliberate call before
  going live. (`/ideas` — the other empty destination this flag originally
  named — was removed outright 2026-08-23, see Decisions Log.)
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

- **2026-08-23 (d) (Homepage hierarchy rebalance + typeface change)** — Amardeep
  said the homepage type felt oversized, that the WCC KPI tile was crowding the
  Credentials tile out of view ("so someone actually scrolls down and sees the
  certifications, which gives things more authority"), and that the site as a
  whole "feels vibe coded." Changes made:
  - **Sizes down:** `h1` (name) `text-4xl sm:text-5xl` → `text-3xl sm:text-4xl`;
    WCC KPI figures `text-2xl` → `text-lg` with tighter padding/gaps; WCC `h2`
    `text-2xl` → `text-lg sm:text-xl` plus `md:whitespace-nowrap` so
    "Western Community College" holds one line (verified 320/375/768/1280px).
  - **Nav:** the standalone mobile "Projects" button next to the hamburger was
    removed — Projects is now reached through the dropdown like every other
    section. The homepage hero "View work" button was explicitly kept.
  - **Two placeholder tiles dropped:** "Now" (Reading — "Philosophy (title
    TBD)") and "On repeat" (which still held literal instruction text and was
    already flagged above as the one tile that would look broken at launch).
    Removing them cut the last two visible placeholders from the homepage and
    tightened the page to Hero → WCC → Credentials → Fairhand/Contact.
  - **Grid rebalanced** so nothing left a hole: Credentials widened to span 4
    (full width — the authority signal now gets the most real estate and sits
    in view without scrolling at 1280×800), Contact widened to span 2 to pair
    with Fairhand on the closing row. `BentoCard` gained a `span={4}` option.
  - **Typeface: Inter → IBM Plex Sans + IBM Plex Mono.** Inter is the single
    biggest "AI-generated template" tell, and the site's warm-cream-plus-amber
    palette already sits close to a known generic-AI look. Plex was drawn for
    an enterprise-technology context, reads institutional rather than
    startup-default, and its Mono is now reserved for *instrument voice* only —
    section eyebrows, KPI figures, and technical tags (the parts that are
    readings and labels, not sentences). This supersedes the Spec §4 "one
    family (Inter), two weights" decision. Revert = restore the Inter link in
    `BaseHead.astro` + `--font-sans` in `global.css`.
- **2026-08-23 (e) (Palette B "Ledger"; container hierarchy; placeholder KPIs
  pulled)** — Same session as (d), after Amardeep chose "repalette + container
  hierarchy" and "keep only what's true" on the KPIs.
  - **Palette A ("Ink & warm white", Spec §4) is superseded by Palette B
    ("Ledger").** Warm cream + amber is one of the most recognisable signatures
    of generic AI-generated design — it was the safe answer, not a chosen one,
    and it was a big part of the "vibe coded" read. Palette B commits the other
    way on both axes: cool pale blue-grey paper (`#eceff3` base / `#fbfcfd`
    surface) and an **oxblood** accent (`#7a2230`) — the colour of seals,
    ledgers and legal binding, chosen for institutional gravity without the
    corporate-blue cliché and deliberately away from the amber/terracotta and
    acid-green defaults. Still exactly one accent, still no gradients.
  - **Accessibility improved as a side effect.** Every text/surface pair now
    passes WCAG AA (weakest 4.68:1). The old `--color-ink-faint` (`#8a8a8f`)
    measured **3.41:1** on card surface — it was failing AA for the caption
    text it was used on. New value `#5d6773` measures 4.98–5.60:1.
  - **Container hierarchy — depth by surface VALUE, not shadows.** Every tile
    used to be the identical surface, so the page read as one flat texture and
    hierarchy lived only in font size. `BentoCard` gained a `tone` prop:
    `raised` (lightest, more padding — Hero + WCC), `default`, `quiet`
    (mid value, less padding — Fairhand + Contact), and `recessed` (darkest —
    Credentials). Shadows were deliberately NOT used; "a soft shadow on every
    card" is itself a template tell, and value-based depth is more disciplined.
  - **Credentials uses inverted nesting** as the page's one signature device:
    the tile sits back on `--color-base` and its contents come forward as light
    `--color-surface` chips — the reverse of every other tile (surface tile,
    base-coloured inner chips). This makes the credentials read as a distinct
    band rather than one more card, which is exactly the authority emphasis
    Amardeep asked for. A dark/ink treatment was considered for this tile and
    rejected: `mru-logo.jpg` is an opaque JPEG and would have shown a white box.
    (Bonus: on the old cream chips that white JPEG box was faintly visible —
    on the new near-white chips the delta is 4/255, i.e. invisible.)
  - **Two WCC KPIs pulled.** "100s hrs/yr of manual reporting eliminated" and
    "5 departments unified" were impact claims still marked placeholder, and
    Amardeep is pitching with this page — presenting numbers he couldn't source
    on the spot was the risk. Remaining two (`$50M`, `300+`) are institutional
    scale facts, relabelled to read as scale rather than outcomes. The WCC
    paragraph was rewritten so it no longer repeats those same two figures.
    **This tile is now under-selling him — restore real impact numbers as soon
    as he supplies them** (`wcc.kpis` in `site.ts`, TODO left in place).
  - Revert path if any of this is unwanted: palette lives entirely in the
    `@theme` block of `global.css` (all components read the tokens, so one
    block controls it); tones are the `.card--*` rules plus `toneClass` in
    `BentoCard.astro`.
- **Open / not yet done — mono "instrument voice" is homepage-only.** `/projects`
  has the same class of content (stack tags, year labels) still set in the sans
  face. Extending Plex Mono to those would complete the system; not done in the
  (d)/(e) pass to keep scope contained.
- **NOT done — framework/standard names on the Credentials tile.** Was proposed
  in-session (NIST / ISO 27001 / SOC 2 as a GRC-relevance signal), then
  withdrawn on reading this doc: there is no confirmed record of Amardeep
  working with any named framework, and the "WCC technology specifics" note
  above already locks tags as deliberately category-level. Adding them would
  have been invented scope. **Needs real names from Amardeep before it can be
  built** — see the open question raised with him 2026-08-23.
- **2026-08-23 (c) (Real credential logos wired in)** — Amardeep confirmed he
  has permission for the CompTIA, Mount Royal University, and University of
  the People marks and supplied the actual files himself (pasted into the
  session); downloading them was still not something done on his behalf (see
  entry (b) below — that boundary is about who fetches the file, not whether
  usage is authorized). Files renamed to kebab-case for consistency with
  other `public/` assets and saved as `public/comptia-security-plus.svg`,
  `public/mru-logo.jpg`, `public/uopeople-logo.png`. `credentials` in
  `site.ts` now carries an optional `logo` field; the homepage badge grid
  (`index.astro`) renders the real logo image (`object-contain`, no extra
  icon-circle background since the CompTIA SVG is already a self-contained
  circular seal) when one is set, falling back to the generic outline icon
  otherwise. Google Analytics, Google Ads, and HubSpot still use generic
  icons — no logo files provided for those. If Amardeep supplies more logos
  later, add the file to `public/` and set `logo` on that credential's entry.
- **2026-08-23 (b) (Credential org attribution added; official logos declined;
  Master's status corrected)** — Follow-up to the Credentials-tile upgrade
  below, same day. Amardeep asked for the actual official logos (CompTIA,
  Mount Royal University, Google Analytics, University of the People) on the
  homepage credential badges. **Declined the logo-fetching part specifically**
  — reproducing third-party trademarked/copyrighted brand marks without a
  confirmed license isn't something to just scrape off the web; if Amardeep
  supplies the actual files himself (e.g. from each org's official
  brand-asset page) they can be dropped in `public/logos/` and wired in.
  Instead, did the achievable part of the ask: `credentials` in `site.ts` now
  carries an `org` field, and the homepage badge grid + `/about` Certifications
  list show the issuing institution by name under each credential where one
  applies ("B.Sc. Computer Information Systems — Mount Royal University").
  Also corrected: **Master's in Information Technology is now "in progress"
  at University of the People**, not a future "planned"/"Next" item — moved
  out of the homepage "Now" tile (which previously listed it under "Next")
  and into the Credentials badge grid alongside HubSpot, consistent with how
  in-progress credentials are already shown there. `/about`'s Certifications
  list updated to match. **Don't add real logo image assets without Amardeep
  supplying the files himself.**
- **2026-08-23 (a) (Credentials promoted on homepage; Velarisse tile and /ideas
  removed)** — Three changes from Amardeep's direct request. (1) **Homepage
  Credentials tile upgraded** from a small row of text pills to a wide
  (`span=3`) icon-badge grid — each credential now gets a circular icon badge
  (shield for Security+, cap for the degree, chart/target for Google
  Analytics/Ads, lightning bolt for HubSpot) plus its label, and the tile
  moved up to sit right after the WCC tile instead of near the bottom, so
  credentials read as a real credibility signal, not an afterthought. Real
  brand logos (CompTIA's mark, Google's, HubSpot's) were **not** reproduced —
  generic outline icon metaphors were used instead, both to avoid
  trademark/copyright issues and to stay visually consistent with the site's
  existing outline icon set (`Icon.astro`). New icon names (`shield`,
  `graduation-cap`, `chart`, `target`, `spark`) added there; `credentials` in
  `site.ts` now carries an `icon` field per entry. (2) **Velarisse tile
  removed from the homepage bento** — it already has a full case study on
  `/projects` (problem/built/state/stack), so nothing was lost, just
  de-duplicated; the homepage bento no longer has any "Project"-labeled tile.
  Freed the slot the Credentials tile now expands into. Added
  `md:grid-flow-row-dense` to the bento grid container so the resulting
  span-3 Credentials + span-2 Fairhand + three span-1 tiles pack cleanly
  without a trailing gap. (3) **`/ideas` page removed entirely** — deleted
  `src/pages/ideas.astro`, dropped its `nav` entry in `site.ts` (Nav.astro
  reads `nav` dynamically, so both desktop and mobile menus updated
  automatically), and updated `README.md`'s route table. It had zero real
  entries in either section (flagged as a launch-readiness gap in the
  2026-06-30 review below) and Amardeep called it clutter rather than
  something to eventually fill in — don't re-add without him asking. No
  redirect existed for `/ideas` in `astro.config.mjs`, so no config change
  needed there.
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
