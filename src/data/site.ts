/**
 * Single source of truth for site-wide copy and structured content.
 *
 * Provisional copy is flagged with PROVISIONAL comments where the build docs
 * list an unresolved content dependency (Spec §9 / reference doc Open Items).
 * These are safe defaults, not final copy — swap them when the facts are locked.
 */

export const site = {
  name: 'Amardeep Dhillon',
  // Security/governance angle made explicit 2026-06-30 per Amardeep's direction
  // (see knowledge-base.md §1). Used for the meta description and /links.
  tagline:
    'Technical consultant for business automation, with a security- and governance-minded approach.',
  role: 'Technical Consultant, Risk & Compliance',
  location: 'Vancouver, Canada',
  email: 'contact@adhillon.net',
  url: 'https://adhillon.net',
  linkedin: 'https://www.linkedin.com/in/amardeep-dhillon',
  github: 'https://github.com/adhillon192',
  resume: '/resume.pdf',
  // Standalone shareable link page. Decided as links.adhillon.net (Spec §3);
  // built here as an on-site /links route until the subdomain DNS is configured.
  links: '/links',
} as const;

export type NavItem = { href: string; label: string };

// Blog + Journal are unified under one "Writing" hub (toggle on that page);
// Resume is no longer a top-level tab — it lives on the Contact page as a download.
export const nav: NavItem[] = [
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/writing', label: 'Writing' },
  { href: '/contact', label: 'Contact' },
];

/**
 * Credentials, in the order they appear on the homepage. `logo` is only set
 * where Amardeep has supplied the file himself (knowledge-base.md, 2026-08-23
 * entries (b)/(c)); entries without one render as text only.
 */
export const credentials = [
  {
    label: 'CompTIA Security+',
    org: null,
    status: 'certified' as const,
    logo: '/comptia-security-plus.svg',
  },
  {
    label: 'B.Sc. Computer Information Systems',
    org: 'Mount Royal University',
    status: 'certified' as const,
    logo: '/mru-logo.jpg',
  },
  {
    label: 'Google Analytics',
    org: null,
    status: 'certified' as const,
    logo: null,
  },
  {
    label: 'Google Ads',
    org: null,
    status: 'certified' as const,
    logo: null,
  },
  {
    label: 'HubSpot',
    org: null,
    status: 'in progress' as const,
    logo: null,
  },
  {
    label: "Master's in Information Technology",
    org: 'University of the People',
    status: 'in progress' as const,
    logo: '/uopeople-logo.png',
  },
];

export const contactLinks: { label: string; href: string; hint: string }[] = [
  { label: 'Email', href: 'mailto:contact@adhillon.net', hint: 'contact@adhillon.net' },
  { label: 'LinkedIn', href: site.linkedin, hint: 'in/amardeep-dhillon' },
  { label: 'GitHub', href: site.github, hint: 'github.com/adhillon192' },
  { label: 'Resume', href: '/resume.pdf', hint: 'PDF' },
];

/**
 * Western Community College — current role, shown on / and /projects.
 *
 * The two figures describe the SCALE Amardeep operates at, not outcomes he
 * produced — they're institutional facts about the college, defensible on the
 * spot in an interview. Impact claims were pulled 2026-08-23 until he confirms
 * real figures.
 *
 * TODO(Amardeep): supply real impact numbers and add them back here — this is
 * the strongest proof point on the site and it's currently under-selling.
 *
 * Don't pad this out with softer claims to fill the space (Spec §9). Website
 * work is a small side thing alongside the core automation/audit role, not a
 * flagship "rebuild" — keep it framed that way, tag list stays short.
 */
export const wcc = {
  org: 'Western Community College',
  role: site.role,
  period: 'Mar 2026 – present',
  summary:
    "Workflow automation and technical audits across the college's internal systems, plus some website work on the side.",
  kpis: [
    { value: '$50M', label: 'annual revenue, institution-wide' },
    { value: '300+', label: 'staff supported' },
  ],
  tags: ['Workflow automation', 'Technical audits', 'KPI dashboards', 'Website support'],
} as const;

/**
 * Fairhand — the studio entity Amardeep founded; currently the founding/
 * equity-holding entity behind Finlador. Kept deliberately thin (name, title,
 * one line) rather than importing the master site's full multi-venture scope
 * onto this resume-facing page.
 */
export const fairhand = {
  name: 'Fairhand',
  role: 'Founder',
  oneLiner: 'A small technology studio, and the founding entity behind Finlador.',
} as const;

/** Featured projects: surfaced on /projects and /links. */
export const projects = [
  {
    slug: 'finlador',
    name: 'Finlador',
    // Founding Engineer + equity stake — this is a venture Amardeep co-owns and
    // built, not a client contract, so it carries a role rather than just a date.
    role: 'Founding Engineer',
    year: 'Feb 2025',
    live: 'https://finlador.com',
    oneLiner:
      'A niche marketplace connecting outdoor guides and outfitters with clients booking high-value hunting trips.',
    // PROVISIONAL — stack has flipped Next.js/Astro in the docs; reference doc
    // treats Next.js as final but flags a repo gut-check before publishing.
    // "Postgres" used instead of "Supabase" per preference (Supabase is Postgres).
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'Postgres'],
    featured: true,
  },
  {
    slug: 'velarisse',
    name: 'Velarisse Leather',
    role: null,
    year: 'Jan 2025',
    live: 'https://velarisseleather.com',
    oneLiner:
      'An online storefront for a handcrafted leather goods brand: cart, real-time tax, shipping options and product filtering.',
    stack: ['Next.js', 'TypeScript', 'Tailwind'],
    featured: true,
  },
] as const;

/** Older, lower-stakes builds — a strip on /projects, not homepage tiles (Spec §6). */
export const hackathons = [
  {
    name: 'Wild Vision',
    event: 'CalgaryHacks 2025',
    year: 'Feb 2025',
    oneLiner: 'Full-stack app with an AI/ML image-classification component.',
    live: 'https://calgaryhacks2025.adhillon.net',
  },
  {
    name: 'Secure Student',
    event: 'MRU Hacks 2023',
    year: 'Oct 2023',
    oneLiner: 'Cross-platform app with role-based secure auth for admins, teachers and students.',
    live: 'https://mruhacks2023.adhillon.net',
  },
] as const;
