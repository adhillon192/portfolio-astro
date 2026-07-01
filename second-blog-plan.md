# Personal / Thought Blog — Plan

Status: **Reframed.** Not a political-advocacy blog. A separate personal/thought blog, distinct from the professional/technical blog, UI-consistent with the rest of the site. Gating, tone, and scope are explicitly still open — direct quote: "it's all up in the air." Treat everything below as a working draft, not a locked decision.

## What changed (history, for context)

1. Originally: parked entirely — a political/thought blog was seen as a real conflict with the government/consulting positioning.
2. Then: un-deferred, but gated behind a subscribe/magic-link mechanism, specifically because the content was going to be political advocacy.
3. Now: not framed as political advocacy anymore. It's a separate blog for personal thoughts/opinions, kept apart from the professional/technical blog mainly for tone and audience reasons (not because the content is inherently risky), sharing the same design system so it still feels like one site.

## Why this actually matters, not just semantics

The gating mechanism (magic link, subscriber storage, email delivery — see below) was built to answer a specific risk: political advocacy content sitting next to a government/consulting-facing professional brand. If the content isn't political advocacy, that specific risk mostly goes away, and gating becomes an open design choice rather than a risk-mitigation requirement. Worth deciding deliberately:

- **Keep it open, no gate** — simplest build, matches the "separate blog, consistent UI" framing directly, costs nothing extra. Reasonable default now that political advocacy is off the table.
- **Keep the gate anyway** — if the real reason is just "I want a more private, less-googleable space for personal writing regardless of topic," that's a legitimate and different reason than the original one, and the gate design below still works for it.

This doc doesn't assume which — flagging it as the open decision it is.

## If gating is still wanted: proposed mechanism

1. **Subscribe-to-unlock via magic link**, not a shared static password. Visitor enters email → receives a signed link → link sets a short-lived signed cookie granting access to the gated route(s).
2. **Requires a real backend**: an endpoint to issue/verify the signed link, subscriber storage, and an email-sending service (Resend or Postmark).
3. **Railway handles this cleanly** — Astro in hybrid mode (static for public pages, server-rendered for the gate check).
4. No separate password layer recommended even if gating stays — the email gate is the access control.

## If no gating: simpler version

- Same content sourcing (markdown files, Astro content collections, per-post custom layout support).
- Fully static, prerendered like the rest of the site — no backend needed for this piece at all.
- Distinguished from the professional blog by tone/voice and maybe a lighter, more personal layout treatment, not by an access wall.

## UI consistency requirement (confirmed, applies either way)

Whatever the access decision, this blog shares the site's design system — same color palette, typography, component library — so navigating from the main site to this blog doesn't feel like leaving to a different property. This was already the plan for the whole site (Site Architecture Plan section in `portfolio-reference-v1.md`) and applies here without needing a separate decision.

## Open items

- Decide: gated or open, now that it's not political advocacy (see "why this matters" above). This is the one real open question left, and it blocks `site-build-spec-v1.md` Section 3a.
- Naming/path (working suggestion: `/journal` or `/notes` on the main domain — easy to rename, low stakes).
- If gating is dropped, remove the Railway/backend requirement tied specifically to this blog from `site-build-spec-v1.md` Section 3a (the open professional blog and this one would then both be simple static content collections).
- No actual posts written yet for either blog — content creation is separate from the structural/template work.

