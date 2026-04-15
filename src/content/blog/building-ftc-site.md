---
title: "How was our website built?"
date: "2026-04-14"
---

# Building Our FTC Team Website with Next.js

Hey, I’m Noah. I’m our design and software lead, and I created this site to give our FTC team a professional online presence and a central hub for everything we do. Updates, outreach, scrimmages, resources, and competition progress can all be found here.

In this post, I’ll walk through how the site was built and the tools and systems behind it.

---

## Tech Stack

This website is built using a modern full-stack frontend setup focused on speed, simplicity, and scalability.

- **Next.js (App Router)** – Provides file-based routing, server components, and fast page loads through optimized rendering.
- **React** – Powers all interactive UI components, including dynamic elements like the typing hero and navigation.
- **TypeScript** – Adds type safety to reduce bugs and make the codebase easier to maintain and scale.
- **Tailwind CSS** – Utility-first styling framework that allows rapid UI development without writing traditional CSS files.
- **Framer Motion** – Used for smooth animations such as fades, transitions, and entrance effects.
- **Vercel** – Handles deployment, hosting, and automatic CI/CD directly from GitHub.

This stack was chosen to make development fast, maintainable, and visually polished while keeping performance high.

---

## Blog System

The blog is powered by a **file-based Markdown system**, meaning no database is required.

Each blog post is stored as a `.md` file inside a content directory. These files are parsed at runtime and converted into formatted HTML using libraries like `react-markdown`.

This approach has several advantages:

- No backend or database required
- Extremely easy to create and publish posts
- Version-controlled content through GitHub
- Lightweight and fast to load


---

## Styling & UI Design

The site is styled using **Tailwind CSS**, which enables fast and consistent design decisions directly in the markup.

Instead of writing separate CSS files, styles are applied using utility classes like:

- spacing (`p-6`, `mt-10`)
- typography (`text-xl`, `font-bold`)
- layout (`flex`, `grid`, `max-w-6xl`)
- colors (`text-gray-400`, `text-blue-500`)

In addition to Tailwind, the site includes custom UI elements such as:

- Animated typing hero section
- Smooth background effects
- Responsive layout design
- Subtle motion animations using Framer Motion

The goal was to create a modern, clean, and slightly futuristic aesthetic that reflects robotics and engineering.

---

## Deployment

The site is deployed using **Vercel**, which integrates directly with the GitHub repository.

Every time changes are pushed to the main branch:

1. Vercel automatically detects the update
2. A new build is generated
3. The latest version of the site is deployed globally

This creates a seamless workflow where development and deployment are essentially automatic.

It also allows for preview deployments, so changes can be tested before going live.

---

## Future Improvements

This site is actively evolving alongside our team. Planned improvements include:

- More detailed blog posts and build logs
- Expanded project portfolio section
- Sponsor and outreach highlights
- Improved SEO and Google indexing
- Performance optimizations and animations refinement
- Potential custom domain for a more professional presence

---

As our team continues to build, compete, and improve, this site will evolve with us. Check back for more posts every month during the offseason, and every week during competition season. If you need any assistance, I can be reached on the FTC discord @nrah0, and our contact info can be found on the Contact page.

Thanks for reading!

— Noah H.