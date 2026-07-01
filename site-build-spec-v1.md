# Portfolio Site — Build Specification (v1)

Companion to `portfolio-reference-v1.md` (positioning/content source of truth) and `second-blog-plan.md` (personal/thought blog — reframed away from political advocacy; gating status still open, see that doc). This doc defines what actually gets built.

## 1. Goal

Ship a professional-first personal site that positions Amardeep as a rising technical consultant — someone who bridges hands-on software work and business/automation outcomes. Personality is allowed to show in small, contained doses (a "now" tile, and a separate personal blog). No multi-domain, multi-deploy complexity in v1 beyond the one confirmed links subdomain — one main site, one deploy.

**Status note (this doc has been revised twice since first drafted):** scope grew to include two blogs and a standalone links page. The professional blog and the personal blog's *content/publishing* are both buildable now. Whether the personal blog is gated (auth, email, backend) or fully open (simple, static) is **not yet decided** — see Section 3a and `second-blog-plan.md`. Do not build the auth/email/Postgres infrastructure until that's confirmed; build everything else.

## 2. Tech stack

- **Framework:** Astro. Static prerendering for home, projects, about, and both blogs' content pages. Server-rendered only if/when the personal blog ends up gated (see Section 3a) — that part of the stack is conditional, not committed.
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Hosting:** Railway (confirmed, independent of the gating decision — chosen regardless of whether auth ends up being built).
- **Auth/subscriber store (conditional — only if gating is chosen):** Railway Postgres or a lightweight KV/flat store for subscriber emails + signed-link tokens.
- **Email delivery (conditional — only if gating is chosen, or if a simple newsletter signup is wanted on the open blog):** Resend or Postmark.
- **Analytics:** Google Analytics (already certified in this — use it, natural fit for putting the Analytics cert to work on a real property)
- **Fonts:** one Google Font or system stack — pick one, don't mix
- **Icons:** one consistent outline icon set (e.g. Tabler, Lucide) — don't mix families

No traditional user accounts/passwords for regular visitors. If gating is chosen for the personal blog, the only auth surface is a magic-link email gate (see 3a) — no separate password layer.

## 3. Site map (v1 scope)

```
/                 Home — bento grid (see Section 5)
/projects         Full project list (Finlador, Velarisse, WCC case study, hackathons strip)
/about             Fuller bio — education, certs, career narrative, optional Community Support Worker line
/resume           Downloadable PDF (kept current — see Open Items in reference doc)
/blog             Open professional/technical blog — write-ups, project breakdowns, industry commentary
/journal          Personal/thought blog (working name, easy to rename) — see 3a for gated-vs-open status
/ideas            "Wall of shame" concept, working name TBD — two sections: unbuilt ideas, and old/early projects worth preserving for the growth story (see reference doc)
```

**Separate subdomain (decided):** `links.adhillon.net` (exact subdomain TBD) — standalone shareable link page, functions as the linktree-alternative for bios/QR codes. Everything else stays on the main domain as paths, per the "links page only" subdomain decision — full subdomain-per-section (blog.*, projects.*) was considered and intentionally not chosen, to keep the build to one deploy target instead of a multi-service split.

### 3a. Personal blog (`/journal`) — gated vs. open is UNRESOLVED, build accordingly

Full detail in `second-blog-plan.md`. This is a genuinely open decision, not a formality — build the site in a way that doesn't block on it:

- **Buildable now, no blocker:** the blog's content system (markdown files, Astro content collections, per-post custom layouts) and its public-facing entry point on the site nav.
- **Not buildable yet — needs a decision first:** the auth layer. If gating is confirmed:
  1. Visitor hits `/journal`, sees a locked landing state with an email field ("subscribe to read").
  2. Submits email → backend generates a signed, expiring token → emails a magic link via Resend/Postmark.
  3. Clicking the link sets a signed cookie; `/journal/*` routes check that cookie server-side before rendering (this is why this route can't be statically prerendered if gating is chosen — it needs a server check on each request).
  4. No separate password layer (recommendation) — the email gate is the access control.
- **If open is chosen instead:** `/journal` is just another static content-collection route, identical in structure to `/blog`, no backend needed for it at all.

**Recommendation for execution order:** build the site assuming `/journal` is open/static by default, since that's unblocked today. Treat the gating layer as an additive follow-up task once the decision is actually made — don't have an autonomous build agent guess on this one, since the two outcomes (static page vs. full auth backend) are meaningfully different amounts of work and Railway/Postgres/Resend setup that shouldn't happen speculatively.

## 4. Design system

**Palette** — neutral base, one accent, no gradients. Two options from the reference doc, pick one before build starts:

- Option A — Ink & warm white: background `#F7F5F1`, text/ink `#111113`, accent amber `#D9A441` (or muted teal `#2E7D74` as alt accent)
- Option B — Navy dashboard: background `#0B1220` (dark-first) / `#F4F5F7` (light), accent electric blue `#3D7DFF` (or amber `#E8A33D` as alt accent)

Rule regardless of option: neutrals for ~90%+ of the UI, exactly one accent color, no accent-on-accent gradients, no drop shadows beyond a subtle card border.

**Typography:** one heading font, one body font (can be the same family at different weights). Two weights max in practice (regular + medium/semibold) — don't reach for a third.

**Layout primitive:** bento grid on the homepage — a responsive grid of cards of varying sizes (see Section 5 for the specific tiles). Cards: consistent corner radius (12–16px), thin border or subtle background differentiation, generous internal padding, no drop shadows.

**Responsive behavior:** bento grid should collapse to a single column (stacked cards, same content, same order of priority) on mobile — do not try to preserve the exact desktop grid shape below ~640px.

## 5. Homepage — bento tile spec

Reference the visual mockup shared in chat for shape/proportions. Tiles, in priority order (top-left/largest = highest priority):

1. **Hero** (largest tile) — name, one-line positioning statement, 1–2 small tags (location, "open to consulting" or similar). The positioning statement is blocked on locking the "primary lane" decision in the reference doc — do not finalize copy here until that's confirmed.
2. **Current work / WCC** — "Western Community College," the hundreds-of-hours → automated-tracker stat, department list (Admissions, Registrar, Records, Marketing, Finance), org scale (300+ staff, $50M/yr). Strongest tile in the grid — give it real visual weight.
3. **Finlador** — one-line description (niche marketplace, guides/outfitters, $5K+/week trips, 50 curated members), stack tags, live link: `https://finlador.com`.
4. **Velarisse Leather** — one-line description (e-commerce, handcrafted leather goods), stack tags, live link: `https://velarisseleather.com`.
5. **Credentials** (small) — Security+, Google Analytics, Google Ads, HubSpot (in progress). Compact list or small badge row — not a wall.
6. **Now** (small) — currently reading (title/author), what's being pursued next (Master's). Update cadence: whenever it's actually true, no fixed schedule needed.
7. **Contact** (small) — email, LinkedIn, GitHub, resume download. This tile functions as the linktree — no separate linktree page needed for v1.
8. **Personality** (small) — Spotify "now playing" or a simple static "on repeat" track. Lowest priority, smallest tile, purely a texture element.

Hackathons (CalgaryHacks2025, MRU Hacks 2023) do not get homepage tiles — they live on `/projects` as a small strip (name + one line each), below the main case studies.

## 6. /projects page spec

- Finlador — full case study: problem, what was built, stack, current state (50 members, niche market), open question on booking volume (resolve before writing final copy), live link `https://finlador.com`
- Velarisse Leather — full case study: problem, what was built, stack, live link `https://velarisseleather.com`
- Western Community College — full case study: org context, the automation work across five departments, the hours-saved narrative, framed as leadership/cross-functional delivery at real organizational scale
- Hackathons strip: CalgaryHacks2025 ("Wild Vision"), MRU Hacks 2023 ("Secure Student") — one line each, no full write-up unless a real number surfaces for the accuracy claim

Do not include the cut "Full-Stack E-Commerce Application" project — folded into the Velarisse decision already made.

## 6a. /ideas page spec

Static page, two clearly separated sections (structurally simple — no backend, just markdown/content-collection entries like everything else):

- **Ideas** — short entries: what the idea is, why it'd be worth building, one or two sentences each. No content written yet — structural template only until real entries exist.
- **Archive** — old/early projects kept for the growth narrative, not the polish. Candidates: earlier hackathon-adjacent or learning projects not already covered as headline case studies. One line + rough date each.

Naming still open (see reference doc — "wall of shame" vs. alternatives). Use a placeholder page title until confirmed; don't hardcode "Wall of Shame" as final copy.

## 7. /about page spec

- Education: Bachelor of Computer Information Systems, Mount Royal University
- Certifications: Security+, Google Analytics/Ads, HubSpot (in progress), Master's in IT (planned)
- Career narrative: City of Calgary (Smart Cities, public sector), Student Changemaker Network (stakeholder leadership), DentHire (full-stack dev), current WCC role
- Optional one-liner on Community Support Worker — include only if it supports a reliability/versatility angle; skip if it dilutes the narrative. Final call is Amardeep's.
- No mention of military/PR intent on this page. The personal blog (`/journal`) is a separate, distinct surface from this page — its existence isn't excluded, just its content stays off the /about narrative.

## 7a. Blog content sourcing

Both blogs are sourced from physical markdown files, using Astro content collections — this is a natural fit, not a stretch:

- Each post is a `.md` (or `.mdx`) file with frontmatter (title, date, tags, summary).
- "Each blog post is customized" is supported natively — a post's frontmatter can specify a custom layout component, so a given post can override the default post template without any extra infrastructure.
- Professional blog (`/blog`) — fully static, prerendered like the rest of the public site.
- Personal blog (`/journal`) — same markdown-sourcing approach either way. If gating ends up confirmed, that route is server-rendered (see 3a) so the cookie check can happen before content is served; if open is chosen, it's fully static like `/blog`. The content itself is just markdown files in the repo regardless.
- Optional lightweight subscribe box on `/blog` (open blog) — no gating logic needed there, just an email capture into the same or a separate mailing list.
- No content has been written for either blog yet. Do not invent posts/placeholder blog content beyond structural examples (e.g. one dummy "hello world" post to prove the template works) — flag this as an open item, don't fabricate personal writing.

## 8. Functional requirements

- Fast load — this is a static Astro site, there's no excuse for a slow homepage. Target sub-1s to interactive on a normal connection.
- Fully responsive (mobile, tablet, desktop) — mobile is not an afterthought given how portfolios get shared (LinkedIn, text messages, QR codes on a resume).
- Basic accessibility: semantic HTML, sufficient color contrast (check both palette options against WCAG AA before finalizing), alt text on any images, keyboard-navigable links.
- SEO basics: proper meta tags, OG image for link previews (LinkedIn/social shares), descriptive page titles.
- No dark-mode requirement unless Option B (navy) is chosen as dark-first — if Option A is chosen, light mode only is fine for v1.

## 9. Content dependencies — must be resolved before final copy is written

Pulled from `portfolio-reference-v1.md` Open Items — build should not proceed to final copy until these are closed:

- Primary lane / hero positioning statement confirmed
- Finlador tech stack confirmed once more against the actual repo (has changed twice in conversation)
- WCC hours figure tightened if possible (rough version is acceptable if not)
- Confirm whether Finlador has had any bookings/transactions, or is connection/messaging-only
- Community Support Worker inclusion decision finalized
- Resume file corrected and current (dates, stack references)
- Color palette option (A or B) selected
- "Currently reading" book title (or confirm placeholder/rotating format)
- **`/journal` gated vs. open — the one architecture-level decision still blocking Section 3a.** Everything else in this doc is buildable without waiting.
- Actual blog post content (both blogs currently have zero written posts — structural/template work can proceed without this, publishing cannot)

## 10. Phasing

- **v1, buildable now:** Home, Projects, About, Resume, standalone links page (`links.adhillon.net`), open professional blog (`/blog` — structure and template, pending actual posts), personal blog structure at `/journal` built as a static/open route by default (see 3a), `/ideas` page structure (pending actual entries and final naming).
- **Blocked, needs a decision before building:** `/journal` auth/gating (Railway Postgres, Resend/Postmark, signed-link flow) — only build this if/when gating is confirmed. Do not build it speculatively.
- **v1.5+:** Dedicated `/now` page if the homepage tile isn't enough room.
