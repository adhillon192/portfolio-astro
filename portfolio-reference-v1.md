# Portfolio Reference Doc (v1) — Amardeep

Internal reference for building the portfolio site. Not all of this is meant for the public site — some is context to shape tone and direction only.

## Snapshot

- 24 years old
- B.S./B.A. in Computer Information Systems
- CompTIA Security+
- Google Ads and Google Analytics certifications
- Pursuing HubSpot certifications through current employer
- Planning a Master's in Information Technology (or adjacent) in the near future

## Current Role

Title: Technical Project Coordinator (flexible/self-described — actual scope is broader than the title)
Tenure: ~3 months
Sector: Education

Actual scope of work:
- Project coordination
- Hands-on coding
- Business/technical consulting — solving business case problems for internal stakeholders
- Automation initiatives

## Current Role — Case Study Material (Western Community College)

Org scale: 300+ staff, ~$50M annual revenue. This scale matters — it's what makes the automation work below consequential rather than a student exercise, and should be stated explicitly on the site.

Cross-functional project leadership across:
- **Admissions** — KPI tracking automation, performance optimization of existing workflows
- **Registrar** — same
- **Records** — same
- **Marketing** — same
- **Finance** — planning and executing workflow automation (newer initiative)

Core narrative: pulling teams off manual Excel-based tracking and into automated systems, working across departments that don't normally coordinate with each other. This is the strongest leadership/cross-functional evidence in the whole profile — it's real scope, real org size, real stakeholders, not a hackathon or a solo build.

**Rough number (usable now):** trackers that previously took an estimated hundreds of hours to manually compile by hand, spread across multiple teams, just to produce a single org-level overview — replaced with a master-level tracker that's now automated and shows live revenue and finance stats. That's a strong before/after: manual, hundreds of hours, siloed by team → automated, live, org-wide. Worth tightening into a real number if possible (e.g. "~X hours/month reclaimed") but even the rough version is legitimate case-study material as-is.

## Verified Projects (from resume + live sites)

**Finlador** — https://finlador.com — Feb 2025
Full-stack marketplace connecting outdoor guides/outfitters with clients booking hunting trips. Niche, high-value B2B-leaning marketplace, not a volume play — some "users" are companies representing multiple guides, some are individual specialized guides. Trip pricing runs ~$5K/week. 50 live users so far, but the pitch is quality/refinement over count — the platform serves a market where a single connection can be worth thousands.
- Real-time messaging via Ably, presence tracking, automated email notifications
- Profile management with role-based access control, SEO-friendly public profiles
- Media uploads via Cloudinary
- PostgreSQL schema with Row Level Security policies (Supabase)
- SSR auth flow via Supabase Auth with OAuth
- Stack: **Next.js**, Tailwind, TypeScript, Supabase. *(Correction log: resume said Next.js → last turn said Astro → confirmed back to Next.js this turn. Treating Next.js as final. Flagging this because it's the third different answer on this one fact — worth a 30-second gut check against the actual repo/package.json before it's printed anywhere, so this doesn't flip a fourth time.)*
- Future features planned — worth naming 1-2 on the site to signal it's a living product, not abandoned
- Open question: has any actual booking/transaction happened through the platform, or is it currently connection/messaging only? That distinction changes how the case study should be framed (facilitated $X in bookings vs. enables discovery in a market where trips cost $5K/week).

**Velarisse Leather** — https://velarisseleather.com — Jan 2025 — **primary e-commerce case study**
E-commerce platform for a handcrafted leather goods brand.
- Shopping cart with real-time tax calculation, multiple shipping options
- Product filtering/search by category, price, attributes
- Secure payment gateway integration
- Stack: Next.js, Tailwind, TypeScript

~~**Full-Stack E-Commerce Application** — Dec 2025~~ — **cut.** Same feature set as Velarisse (cart, tax, shipping, filtering); decided not to mention it separately since Velarisse already covers that ground with a real client/brand behind it.

### Older / hackathon projects (separate tier, not headline case studies)

**CalgaryHacks2025 — "Wild Vision"** — Feb 2025
Full-stack app with AI/ML classification component; managed backend + frontend + data preprocessing. "Measurable improvements in classification accuracy" claimed on resume — get the actual number or cut the claim.

**MRU Hacks 2023 — "Secure Student"** — Oct 2023
Cross-platform (Windows/macOS/Linux) app with role-based secure auth for admins/teachers/students.

These are older and lower-stakes than Finlador/Velarisse/WCC — treat as a small "hackathons" strip on the site (logos/names + one line each), not full case-study tiles in the main bento grid.

## Prior Experience

- **DentHire** — Software Developer (Casual, Remote), **Jan 2026–Apr 2026** (ended; resume's "Present" was stale). Full-stack dev on a dental staffing platform (job postings, candidate matching, practice management). React + Node.js. Cross-functional work with product/design/business teams.
- **Western Community College** — Technical Project Coordinator, **Mar 2026–present** (current primary role). Overlaps DentHire by about a month (Mar–Apr 2026) before DentHire ended — worth having a one-line explanation ready for why, if asked, though it's a non-issue (short overlap during a transition).
- **City of Calgary** — Content Developer, Jan–Jul 2024. Coordinated administrative/operational launch of a Technology Integration Center (Smart Cities division); liaised between city officials, tech vendors, community stakeholders. Conducted AR/VR emerging-tech research and briefing materials for decision-makers. Public sector — useful for the government-track narrative later.
- **Student Changemaker Network** — Campaign Lead, Sept 2023–Sept 2024. Led campus sustainability initiatives; built/maintained relationships with 15+ internal and external stakeholders; ran media/comms strategy. Good evidence for the "people-facing, stakeholder management" side of the future consultant/PM pitch.
- **Alex Community Centre** — Community Support Worker, Jul–Dec 2025. Operational/service role, not technical. Still undecided ("I don't know" as of this turn) — working recommendation: no dedicated bento tile on the homepage (it doesn't serve the consultant/technical narrative directly), but keep it as one line in a fuller About/resume page if you want the reliability/service-orientation angle. Low stakes either way; revisit when the about page gets written.
- No strong quantified outcomes captured yet from Calgary or Denthire specifically — Finlador, Velarisse, and the WCC automation work are the stronger case-study candidates.

## Career Direction

Near-term (primary focus for this site): positioning as a rising technical consultant — someone who bridges technical execution (coding, automation) and business problem-solving.

Long-term (secondary, shapes tone not headline content):
- Eventual people-facing role: consultant, or a Product Manager-of-execution/growth type role — bills for time/expertise, gets brought in to solve problems.
- Interest in government / military cybersecurity contractor work. Contingent on Canadian permanent residency being secured first.
- Fallback if military path doesn't materialize: government roles, while retaining flexibility to do high-value consulting on the side.
- Will continue pursuing certifications over time. Next one identified: AWS Solutions Architect.
- Positioning angle worth using deliberately: don't lead with age, lead with scale. The credibility problem for a 24-year-old isn't solved by hiding the age, it's solved by putting the $50M-org/300-staff/cross-department WCC work and named client builds (Finlador, Velarisse) front and center — the org scale and named clients do the "worked with professionals and organizations, executed real things" work implicitly, without needing a line that says "I'm young but capable."

Positioning implication: don't state military/PR intent on the public site. Let it influence tone (disciplined, security-minded, public-service-oriented) instead. The site's public-facing story should work regardless of whether the military path happens.

## Ideas & Archive Page (new)

New concept, floated as "wall of shame": two genuinely different things that got bundled under one working name.

1. **Ideas** — things never built, but that Amardeep thinks should exist. Forward-looking, shows curiosity and product thinking beyond just execution.
2. **Archive** — old projects that were significant at the time, even if unremarkable by current standards. Backward-looking, shows growth trajectory.

Take on the name: "wall of shame" is memorable and self-aware, but "shame" reads negatively if a client or recruiter takes it literally rather than ironically — worth weighing against the "professional-first, credible despite being young" goal this whole site is built around. Neither idea/archive item is actually shameful (an unbuilt idea is ambition, an old project is a growth marker), so the content doesn't match the name. Alternative names that keep the personality without the negative framing: "Ideas & artifacts," "The workshop," "Unbuilt," "Someday / archive," or just two plainly labeled sections ("Ideas I haven't built" / "Early work"). Low-stakes creative call — flagging the tension, not blocking on it.

This is low-risk content (no political/reputational exposure like the second blog) and genuinely reinforces the positioning — curiosity plus a visible growth arc. Recommend as a real static page, not gated, not on the homepage bento (would dilute the strongest tiles), but linked from `/projects` or its own nav item.

Scope note: this is a small addition relative to the blog/gating work — a static list, no backend — but it's still one more surface added to an already-growing v1. Fine to include, just noting the running total of "things in scope" keeps climbing.

## Site Architecture Plan (proposed)

Central homepage (Astro) with consistent sub-pages for:
- Professional/portfolio content (projects, resume, about) — primary, work-facing, v1 scope
- Technical projects, organized — v1 scope
- A linktree-equivalent — v1/v1.5 scope
- Spotify embed (personality/vibe) — v1.5 scope
- **Second blog** — reframed as a separate personal/thought blog (not political advocacy). UI-consistent with the main site. Gated vs. open is still an open decision — see `second-blog-plan.md` for the current version (this line previously said "deferred," which is stale as of the latest revision).

Intent: professional-first site that still lets personality show through, without putting personal/political content front and center.

**Take: the professional core and the personality extras (linktree, Spotify, project index) can and should live in one Astro site with shared layout/components — that's cheap, and "sub-deployed but consistent" is much easier to guarantee inside one project than across separate deployments. Don't over-engineer this into multiple deployed apps; use Astro content collections / routes (`/`, `/projects`, `/links`, `/now`) instead.**

## Design Direction

- Bento-grid style layout (modular grid of cards/tiles). Well-supported choice for this profile — bento grids are built for exactly the "several different proof points at a glance" situation you're in (projects, current focus, certs, a stat), and 2026 design trend data backs it as a strong-converting, scannable pattern for portfolios/dashboards.
- Risk to manage: bento grids expose thin content fast — each tile needs a real, specific fact or result, not filler. Content needs to be sourced before the grid gets built out. (Largely resolved now — see Verified Projects and WCC case study above.)
- Countertrend worth knowing: some of the most-cited 2026 developer portfolios are going the opposite direction — no animation, no gradients, just clean typography and fast load. That's not a reason to drop the bento grid, but it's a reason to keep each tile restrained (real content, minimal decoration) rather than leaning on the grid format itself to look impressive.

### Color scheme recommendation

Given the positioning (technical + business-facing, government/consulting-adjacent, wants trustworthy not flashy, personality allowed to peek through in small doses): lean toward a **near-monochromatic neutral base + one deliberate accent color**, not a multi-color gradient-heavy palette. Reasoning: neutral bases read as credible/trustworthy (this is the same instinct that makes blues common in professional/consulting branding) and age well; a single accent gives you a personal signature without undercutting the "professional first" goal, and it's cheap to swap later if the direction changes.

Two concrete directions:
1. **Ink & warm white:** near-black (`#111113`) or deep charcoal background or text, warm off-white (`#F7F5F1`) base, one accent — amber/gold (`#D9A441`) or a muted teal (`#2E7D74`). Reads calm, editorial, slightly premium. Good fit if the site leans dark-mode-first.
2. **Deep navy & ink with electric accent:** navy/near-black base (`#0B1220`), light neutral text/background (`#F4F5F7`), one saturated accent used sparingly — electric blue (`#3D7DFF`) or amber (`#E8A33D`). More "SaaS dashboard" feeling, which pairs well with the bento format and the automation/data-tracker story from WCC.

Either way: pick exactly one accent color, use neutrals for 90%+ of the UI, and don't use accent-on-accent (e.g., gradient blends) — that's what separates "clean bento grid" from "generic template" in the examples reviewed.

## Homepage Content Plan (draft)

Bento tiles, roughly in priority order:

1. **Hero tile** — name, one-line positioning statement (the "primary lane" from Flaw #1 needs to be locked before this gets written).
2. **Current work tile** — Western Community College, one line + the hundreds-of-hours-to-automated stat. This is your strongest single proof point — give it real space.
3. **Featured project tile — Finlador** — niche marketplace framing, live users, link out.
4. **Featured project tile — Velarisse** — e-commerce, link out.
5. **Skills/credentials tile** — compact, not a wall of badges: Security+, Google Analytics/Ads, HubSpot (in progress) as small marks, not the headline.
6. **Now tile** — what you're currently focused on/learning. This is a real, established pattern (the IndieWeb "/now page," popularized by Derek Sivers) — a contained, low-risk personality signal. **"Currently reading" fits perfectly here** — recommend including it, small and simple (title + author, updated occasionally). Could also fold in a line about the upcoming Master's.
7. **Contact/links tile** — email, LinkedIn, GitHub, resume link. Doubles as your linktree-equivalent so you may not need a separate linktree page at all for v1.
8. **Personality tile (small)** — Spotify "now playing" or similar, low-key, one tile, not a section.

Hackathons (CalgaryHacks2025, MRU Hacks 2023) — small strip below the main grid, not their own tiles.

Note: hiring managers and clients scanning portfolios consistently look for three things per research — evidence of real work, ability to explain what you built and why, and technical judgment. The tile order above is built around surfacing those three fast, before anything decorative.

## Known Flaws / Gaps (unhinged version, no sugarcoating)

1. **No clear lane.** Security+, Google Ads/Analytics, HubSpot, "technical project coordinator," "consultant," "growth PM," and "government/military contractor" is seven different identities stapled together. Nobody looking at this for 10 seconds will know what you actually do. Pick a primary lane for the site's headline and let the rest live as supporting detail, or the whole thing reads as directionless.

2. **Not enough runway to call yourself a consultant yet.** Total real-world experience across three roles is roughly a year, spread across content, software dev, and coordination. "Consultant" implies depth and proof of judgment under pressure. Right now the site would be asserting seniority the track record doesn't back up yet. That's fine as a direction to grow into, but if the copy leans too hard into "I consult," it'll read as inflated to anyone who actually hires consultants.

3. **Zero case-study material.** ~~Resolved.~~ Finlador (50 users, niche high-value market), Velarisse, and the WCC automation work (hundreds of manual hours → automated, live finance/revenue tracker) are all real, specific, and now have at least a rough number attached. Only remaining soft spot: the hackathon "measurable improvements in classification accuracy" claim has no actual figure — confirm it or cut it.

4. **Cert stacking risk.** Security+, two Google certs, HubSpot in progress, a Master's on deck — listed together this reads as "collects credentials" rather than "does great work." Certs should back up claims, not be the claim.

5. **Bento grid will amplify problem #3, not fix it.** A trendy grid layout with thin, vague content in each tile looks worse than a plain page with the same thin content — the format promises punchy, scannable proof points, and right now there aren't enough of those to fill it honestly. Don't lock into the visual design before the content exists to fill it.

6. **The military/government angle is a bet on an uncertain, multi-year timeline (PR first).** Building any part of the current site's identity around it is risky if plans shift. Keep it out of the public narrative entirely for now — treat it as a "watch this space" internal note, not a pillar.

7. **Title vs. self-description mismatch.** Calling the day job "Technical Project Coordinator" while describing the actual work as coding + consulting + automation + coordination is either underselling (junior title, senior scope) or overselling (senior scope, junior tenure) depending on who's reading it. The site needs to pick one framing and be consistent, not let the ambiguity sit.

8. **Resume is stale — confirmed, not just suspected.** Timeline is now fixed in this doc (DentHire Jan–Apr 2026, WCC Mar 2026–present), but that's two factual corrections in one conversation (dates, and Finlador's tech stack). The actual resume file needs a full pass before it's used anywhere alongside this site, not just patched here.

9. **Community Support Worker role is a narrative wildcard.** Jul–Dec 2025, between Calgary and the current tech-adjacent work. Not wrong to have it, but it doesn't obviously serve "rising technical consultant" — it needs a deliberate decision (include with a spin, or leave off the site and keep it resume-only), not a default.

10. **Two nearly identical e-commerce projects.** Velarisse Leather and the "Full-Stack E-Commerce Application" have the same feature set (cart, real-time tax, shipping, filtering). Showing both back-to-back makes the project list look padded rather than broad. Pick the stronger one for the headline case study and either cut the other or demote it to a one-liner.

11. **Scope creep risk on the site build itself.** The plan just grew from "portfolio site" to "portfolio + blog + linktree + Spotify + political writing, all consistent, some sub-deployed." That's a real platform, not a v1. The professional core (home, projects, about) isn't built yet and doesn't have its numbers finalized — layering four more surfaces on top before that ships is how this becomes a permanent side project instead of a live site. Sequence it: ship the professional core first, add the rest after.

12. **Second blog — reframed again, still unresolved.** No longer framed as political advocacy — now a separate personal/thought blog, UI-consistent with the main site, gating/scope explicitly undecided ("it's all up in the air"). This has changed direction three times in one conversation (parked → gated political blog → open-ended personal blog). Not a criticism, just a flag: this is the least-settled piece of the whole plan, and it's the one most likely to still be different by the time it's actually built. Full detail in `second-blog-plan.md`.

13. **Scope grew significantly in one conversation.** Original ask: a portfolio site. Current v1: portfolio + open technical blog + a second personal blog (gating status still undecided) + a separately-hosted links page, all on Railway. Each individual addition makes sense on its own, but stacked together this is now a small platform, not a portfolio site. If gating ends up confirmed, that piece alone (auth flow, email deliverability, token handling) is realistically its own weekend of work, separate from the rest of the site. See sequencing recommendation in `site-build-spec-v1.md` Section 10.

## Open Items

- Tighten the WCC "hundreds of hours" figure into a real number if possible (hours/month, error rate, adoption). Rough version is usable as-is if not.
- Confirm hackathon accuracy figure or cut that specific claim.
- Confirm Finlador stack one more time against the actual repo (Next.js vs. Astro has flipped twice) and whether any bookings/transactions have occurred.
- Decide whether Community Support Worker appears anywhere on the site — working answer: about-page line only, no bento tile.
- Full resume rewrite/correction pass (not just the fixes made here).
- ~~Decide whether to keep both e-commerce projects~~ — decided: Velarisse only, cut the redundant one.
- Decide the primary lane for this version of the site (rising technical consultant is the working answer — confirm before copy is written).
- Decide gated vs. open for the personal blog (`/journal`) — still unresolved, "all up in the air" as of the latest turn. See `second-blog-plan.md`.
- Pick final naming for the gated blog route (working name `/journal`) and confirm password-on-top vs. email-gate-only (recommendation: email-gate only).
- Confirm exact `links.adhillon.net`-style subdomain and register/configure DNS on Railway.
- ~~Confirm bento grid stays~~ — confirmed, real content now supports it; color scheme and tile plan drafted above.
- Sequencing: build professional core first, treat blog/linktree/Spotify as phase 2.
- **adhillon.net (current live site) couldn't be checked** — it's JS-rendered and returned empty on fetch, and there's no browser tool connected in this session to render it. If there's existing content/copy worth carrying over, paste it in or connect the Claude in Chrome browser extension so it can be pulled directly.
