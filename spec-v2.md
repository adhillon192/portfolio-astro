# Personal Portfolio — Suggested Modifications

Site reviewed: https://portfolio-astro-snowy-eta.vercel.app/ (Astro v5.18.2). This is notes on what to change, not a rebuild brief — the site is already in good shape and already doing the right thing in a few places worth calling out explicitly, not just fixing.

## What's already right — don't change this

**Velarisse Leather is presented as a clean e-commerce case study** (cart, real-time tax calculation, product filtering) with no mention of the kink-adjacent nature of the business. That's exactly the compartmentalization strategy already agreed for this site: technical merit on display, not everything about every client. Keep doing this for any future edgy-adjacent client work — describe the engineering, not the business's full nature.

**The tech stack is Astro** — which is also what's recommended for the Fairhold IT (MSP) site. Not a coincidence worth forcing, just worth knowing: the MSP site can credibly point back to "the same stack I use for my own site," which is a small, real credibility thread rather than an arbitrary tool choice.

## 0. Title correction: Technical Consultant — Risk & Compliance

Founder confirmed the actual title at Western Community College is **Technical Consultant — Risk & Compliance**, not "Technical Project Coordinator" as this review's initial read of the page had it (either the page needs updating to reflect this, or the fetch mis-parsed the current title — check the live page and correct it if it's actually out of date). This isn't just a title fix, though — it changes how strong the rest of the positioning already is.

**Risk & Compliance is a better hook than generic IT project work for everything else this portfolio needs to do.** The site's own tagline is "Technical consultant for business automation — built with a security- and governance-minded approach" — a Risk & Compliance title *substantiates* that tagline directly, far more than a project-coordination title does. It's also the single most relevant credential for Fairhold IT's trust-building problem: SMB clients evaluating an MSP care about exactly this (data handling, PIPEDA compliance, security posture — the MSP brief's §3 Canadian-context section is built around these same concerns). A founder with actual Risk & Compliance experience at a $50M institution is a concrete, checkable answer to "why should I trust this MSP with my data," stronger than "has a CIS degree" alone.

Recommend leading the About section with this title prominently, not burying it under the automation/KPI-dashboard achievements — those are still good proof points, but the Risk & Compliance framing is the one that does the most work for the MSP-adjacent audience this site increasingly needs to serve well.

## 1. Add the CIS degree explicitly

The credentials list currently shows CompTIA Security+, Google Analytics, Google Ads, and HubSpot (in progress) — no mention of the Bachelor's in Computer Information Systems found in this review. If it's genuinely not on the page, add it; it's a concrete credential and the master site's Founders page is about to reference it ("Founder, B.Sc. Computer Information Systems") — the two properties should say the same thing about the same credential, not have the personal site be the one place it's missing.

## 2. Resolve the "Founder" identity gap before the master site links here — CONFIRMED, implement

The master site's Founders page is being built to link out to this portfolio as "[Name], Founder, B.Sc. Computer Information Systems." Right now this portfolio doesn't mention being a founder of anything — it's framed entirely as a technical consultant + Technical Project Coordinator + individual project credits (Finlador as Founding Engineer, Velarisse Leather as a build). That's a real inconsistency once the link goes live: a visitor clicking through from "Founder" expects to land somewhere that at least acknowledges the word.

Given the explicit decision to keep the other ventures (Havenline, Fairhold IT, Rent a Feeling, etc.) off this site, the fix isn't to detail them here — it's one low-key line, e.g. "Also building Fairhand, a small technology studio" with no further elaboration, or folded into the About section as a single sentence. Enough to make the link make sense, not enough to import the master site's full scope onto a resume-facing page.

## 3. The Calgary connection is a real asset that isn't being used yet — CONFIRMED accurate

The About section already mentions experience with confidential systems at the City of Calgary. That's not just a resume line — it's genuine, checkable proof of institutional experience in exactly the second city Fairhold IT is targeting (Vancouver + Calgary). Most MSPs claiming a two-city service area are just saying so; this founder actually has real prior work history in both. Worth making sure this doesn't get lost or under-emphasized — it's a stronger Calgary credibility signal than anything currently planned for the MSP site itself, and the MSP's About/Why Us page could reasonably reference it ("prior experience with institutional systems in both Vancouver and Calgary" — true, specific, and unlike most MSP trust copy, verifiable).

## 4. AreTheyCringe → Priorcheck — add to Projects, framed as engineering — CONFIRMED, name locked in

AreTheyCringe turned out not to be live — the current site is a demand-testing landing page, not a shipped product — so the rename was cheap. **Confirmed: Priorcheck** (was AreTheyCringe) — see the standalone brief, `priorcheck-brief.md`, for the naming rationale, the repositioning from "judgment tool" to "safety-check tool," and the legal/platform-risk notes (different category from Havenline's — platform ToS and scraping risk, not criminal liability).

For this portfolio specifically: add it to Projects as "Priorcheck — Cross-Platform Social Graph Risk Analysis," leading with the technical architecture (data pipeline, classification approach, what made it hard to build) rather than a consumer pitch — same instinct already applied well to Velarisse Leather. One line acknowledging awareness of platform ToS/scraping-policy considerations is worth including — it reads as engineering maturity, not something to hide.

## 5. Minor consistency check: Finlador description

This review surfaced a more specific, better description than what was in the master site's "Built With" section — this portfolio describes Finlador as booking high-value guided hunts (~$5K/week), which is more concrete than the master brief's broader "adventure marketplace" framing. Already fixed in master-site-brief.md to match. Worth keeping the two descriptions roughly aligned going forward since they're describing the same company to different audiences — doesn't need to be word-for-word, just not contradictory.

## 6. Writing / Ideas sections — an underused asset for later

Both sections exist already, which is good — most portfolios skip this. Once Fairhold IT needs content marketing (MSP lead-gen leans heavily on local SEO and demonstrated expertise, per the MSP brief), this is a natural place to have already been building a track record of systems/security/governance-minded writing, rather than starting a company blog from zero credibility. Not an immediate change, just worth keeping in mind as these two efforts are actually the same muscle.

## 7. College-era hackathon projects — add to Projects, pending access/content confirmation

Three links raised for inclusion: `calgaryhacks2025.adhillon.net`, `datingcoach.adhillon.net`, `mruhacks2023.adhillon.net`. Recommendation on placement: **Projects, not Blog** — Blog is for writing/reflection, Projects is for demonstrable builds, and hackathon work reads well specifically because it shows building fast under pressure (and often with a team), which a portfolio of polished client work doesn't otherwise demonstrate.

There's also a genuine bonus here: MRUHacks is Mount Royal University's hackathon, based in **Calgary**. That's a third independent data point (alongside the City of Calgary work history and Fairhold IT's own service area) for the same real Calgary connection flagged in point 3 — worth treating as one credibility thread across the whole site rather than three separate facts.

**Status update: all three confirmed by founder.** `datingcoach.adhillon.net` is confirmed live and correct (not a URL mix-up). `calgaryhacks2025.adhillon.net` and `mruhacks2023.adhillon.net` still return a 403 on repeated fetch attempts here — founder confirms they load fine normally, so this looks like a bot-blocking layer on the fetching side rather than a broken link. Content for those two hasn't been directly verified by this review as a result; described here based on founder's own characterization (CalgaryHacks 2025 / MRUHacks 2023 hackathon projects) rather than independently confirmed page content. Worth a quick manual look before writing final case-study copy for those two specifically.

## 8. Design/color — one honest note, not a set of hex codes

Worth flagging plainly: unlike the four company briefs, no specific color palette or typography is being recommended here. This review is based on a text fetch of the live site (Astro v5.18.2), not a visual inspection — attempting to pull up the site in a connected browser for a proper look wasn't possible this session, so any hex values offered here would be guessing at colors on a page not actually seen, which isn't a place to start fabricating specifics.

What's safe to say without seeing it: keep this site visually distinct from the warmer, mission-driven Fairhand-family palette (§10d of master-site-brief.md) — that's the correct choice already, per the Non-suggestions note below, and nothing in this design pass should push toward matching them. If a genuine design refresh is ever wanted here, worth doing a live look at the site together (screen share, or reconnecting a browser session) rather than working from assumptions.

## Non-suggestions (deliberately left alone)

- Not recommending adding Havenline, Rent a Feeling, or the MSP itself to this site — that's the correct compartmentalization already agreed, and this document isn't reopening it.
- Not recommending a redesign — the professional/approachable tone and the security-and-governance positioning are working and shouldn't be diluted by scope creep from the master site's warmer, more mission-driven voice. These are two different documents for two different audiences on purpose.