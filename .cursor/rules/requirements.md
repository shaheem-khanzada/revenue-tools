# Cursor Project Rules – Next.js Tool Site

## Project Goal

Build a fast, SEO-optimized web application containing multiple small utility tools that generate traffic and ad revenue.

Primary objectives:

* Fast loading pages
* High SEO performance
* Simple, clean UI
* Reusable components
* Scalable tool architecture

---

## Tech Stack

* Framework: Next.js (App Router)
* Language: TypeScript
* Styling: Tailwind CSS
* State: React hooks (no heavy state libraries unless required)
* Deployment target: Vercel or similar
* Ads: Google AdSense (added later)

---

## Project Structure

Follow this structure strictly:

/app
/tools
/[tool-slug]
page.tsx
ToolClient.tsx
/components
/lib
/styles
/types

Rules:

* Each tool must have its own folder under `/app/tools/`
* Keep logic isolated per tool
* Shared logic goes into `/lib`

---

## Tool Page Requirements

Every tool page must:

1. Be server-rendered where possible
2. Have SEO metadata
3. Include:

   * Title
   * Description
   * Tool UI
   * How it works section
   * FAQ section
   * Related tools section

---

## SEO Rules

Each tool must include:

### Metadata

* Unique page title
* Meta description
* OpenGraph tags

Example:

* Title: "Free Image Compressor Online"
* Description: "Compress images online without losing quality."

### Content

Each tool page must contain:

* 500–800 words of helpful text
* At least 3 FAQs
* Internal links to other tools

### Site-wide metadata and keywords

* Layout metadata (keywords, default description, JSON-LD) is **derived from `TOOLS`** in `/lib/tools-config.ts`.
* **Do not** manually edit the keywords array or tool list in `app/layout.tsx`. Adding a new tool to `TOOLS` automatically updates layout keywords and the site description.
* When you add a new tool, add it **only** to `TOOLS` in `lib/tools-config.ts`; layout stays in sync.

---

## Performance Rules

* Use server components by default
* Only use client components when necessary
* Avoid large libraries
* Lazy load heavy components
* Optimize images

Target:

* Lighthouse score: 90+

---

## UI/UX Rules

Design must be:

* Minimal
* Fast
* Mobile-first
* No unnecessary animations

Tool UI should:

* Be visible above the fold
* Require no login
* Work in 1–2 clicks

---

## Coding Standards

* Use TypeScript for all files
* Use functional components only
* Avoid inline styles
* Use Tailwind utility classes
* Keep components under 200 lines when possible

Naming:

* Components: PascalCase
* Files: kebab-case
* Variables: camelCase

---

## Reusable Component Rules

Create shared components for:

* Tool layout
* Input fields
* Buttons
* File upload
* Result display
* FAQ section

Do not duplicate UI code across tools.

---

## Tool Implementation Rules

Each tool must:

1. Work instantly
2. Not require sign-up
3. Handle errors gracefully
4. Show clear results
5. Be usable on mobile

If processing files:

* Do it in browser when possible
* Avoid heavy server processing

---

## Ad Placement Rules (Future)

When traffic grows:

Allowed positions:

* Below tool result
* Between content sections
* Sidebar (desktop only)

Never:

* Place ads above the main tool
* Block the tool UI

---

## Accessibility Rules

* All inputs must have labels
* Buttons must be keyboard accessible
* Use semantic HTML
* Ensure good color contrast

---

## Development Priorities

Order of importance:

1. Speed
2. SEO
3. Simplicity
4. Reusability
5. Visual polish

---

## Initial Tools to Build

Build these first:

1. Image compressor
2. Text case converter
3. Percentage calculator
4. WhatsApp link generator
5. JSON to CSV converter

---

## Code Generation Instructions for Cursor

When generating code:

* Prefer server components
* Keep logic simple
* Avoid unnecessary dependencies
* Write clean, readable code
* Include SEO metadata
* Follow project structure exactly
* When adding a new tool: add it to `TOOLS` in `lib/tools-config.ts` only—do not manually update keywords or tool lists in `app/layout.tsx` (they are auto-derived from `TOOLS`).

If unsure:
Choose the simplest working solution.

---

## General Philosophy

This is a traffic-driven tool site.

Focus on:

* Many small tools
* Fast execution
* SEO-friendly pages
* Consistent structure

Avoid:

* Overengineering
* Complex architectures
* Unnecessary features
