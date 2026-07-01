/**
 * Single source of truth for site-wide copy and structured content.
 *
 * Provisional copy is flagged with PROVISIONAL comments where the build docs
 * list an unresolved content dependency (Spec §9 / reference doc Open Items).
 * These are safe defaults, not final copy — swap them when the facts are locked.
 */

export const site = {
  name: 'Amardeep Dhillon',
  // PROVISIONAL — hero positioning is blocked on locking the "primary lane"
  // (reference doc Flaw #1). "Rising technical consultant" is the working answer.
  tagline: 'Technical consultant bridging hands-on software and business automation.',
  role: 'Technical Project Coordinator',
  location: 'Vancouver, Canada',
  email: 'contact@adhillon.net',
  url: 'https://adhillon.net',
  linkedin: 'https://www.linkedin.com/in/amardeep-dhillon',
  github: 'https://github.com/adhillon',
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
  { href: '/ideas', label: 'Ideas' },
  { href: '/contact', label: 'Contact' },
];

export const credentials = [
  { label: 'CompTIA Security+', status: 'certified' as const },
  { label: 'Google Analytics', status: 'certified' as const },
  { label: 'Google Ads', status: 'certified' as const },
  { label: 'HubSpot', status: 'in progress' as const },
];

// Mirror of the icon names supported by Icon.astro.
export type IconName = 'mail' | 'linkedin' | 'github' | 'file' | 'link';

export const contactLinks: {
  label: string;
  href: string;
  hint: string;
  icon: IconName;
}[] = [
  { label: 'Email', href: 'mailto:contact@adhillon.net', hint: 'contact@adhillon.net', icon: 'mail' },
  { label: 'LinkedIn', href: site.linkedin, hint: 'in/amardeep-dhillon', icon: 'linkedin' },
  { label: 'GitHub', href: site.github, hint: 'github.com/adhillon', icon: 'github' },
  { label: 'Resume', href: '/resume.pdf', hint: 'PDF download', icon: 'file' },
];

/**
 * Western Community College — homepage tile content.
 * KPIs are PROVISIONAL: derived from the known facts (5 departments, ~$50M,
 * 300+ staff, hundreds of manual hours) but the exact figures aren't locked yet
 * (Spec §9 — tighten the hours number if possible). Tags are the technical
 * framing of the work — scope now spans automation, a public website rebuild,
 * and technical audits of the college's existing stack, not just the original
 * department-tracker work. Tag names are category-level (PROVISIONAL) until
 * the specific frameworks/hosting used for the website work are confirmed —
 * see knowledge-base.md.
 */
export const wcc = {
  kpis: [
    { value: '100s', label: 'hrs/yr of manual reporting eliminated' },
    { value: '5', label: 'departments unified' },
    { value: '$50M', label: 'annual revenue tracked live' },
    { value: '300+', label: 'staff supported' },
  ],
  tags: [
    'Full-stack web development',
    'Workflow automation',
    'Technical audits',
    'KPI dashboards',
    'Data pipelines',
  ],
} as const;

/** Featured projects surfaced on the homepage bento + /projects case studies. */
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
      'Niche marketplace connecting outdoor guides and outfitters with clients booking high-value hunting trips (~$5K/week, 50 curated members).',
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
      'E-commerce platform for a handcrafted leather goods brand — cart, real-time tax, shipping options, and product filtering.',
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
  },
  {
    name: 'Secure Student',
    event: 'MRU Hacks 2023',
    year: 'Oct 2023',
    oneLiner: 'Cross-platform app with role-based secure auth for admins, teachers, and students.',
  },
] as const;
