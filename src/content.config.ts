import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/*
  Both blogs are sourced from markdown files via content collections (Spec §7a).
  A post may set `layout` in frontmatter to override the default post template,
  which is how "each post can be customized" is supported natively.
*/
const postSchema = z.object({
  title: z.string(),
  date: z.coerce.date(),
  summary: z.string(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
  // Optional per-post custom layout component (relative to src/), e.g.
  // "layouts/SpecialPost.astro". Left unset, the collection's default is used.
  layout: z.string().optional(),
});

// Professional / technical blog — fully static.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: postSchema,
});

// Personal / thought blog. Built as an OPEN static route by default (Spec §3a).
// Gating (magic-link auth) is an unresolved decision and an additive follow-up;
// the content sourcing is identical either way.
const journal = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/journal' }),
  schema: postSchema,
});

export const collections = { blog, journal };
