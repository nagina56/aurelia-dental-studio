# Aurelia Dental Studio

A premium, fully responsive marketing website for a fictional dental clinic, built with **Next.js 15 (App Router)**, **React 19** and **TypeScript**. Eight pages, a token-driven design system, and an optional n8n webhook integration for appointment requests.

> **Demonstration project.** Aurelia Dental Studio is a fictional brand created to demonstrate front-end capability. All copy, team members, testimonials, phone numbers and addresses are invented, and all photography is licensed stock imagery served from Pexels. Nothing here is a real clinic, and the site collects no real patient data.

**Live site:** [aurelia-dental-studio.vercel.app](https://aurelia-dental-studio.vercel.app)

---

## Table of contents

- [Highlights](#highlights)
- [Tech stack](#tech-stack)
- [Getting started](#getting-started)
- [Scripts](#scripts)
- [Project structure](#project-structure)
- [Design system](#design-system)
- [Responsive strategy](#responsive-strategy)
- [Images](#images)
- [Appointment form and the n8n webhook](#appointment-form-and-the-n8n-webhook)
- [Deployment](#deployment)
- [Accessibility](#accessibility)
- [License](#license)

---

## Highlights

- **Eight routes** — home, services, about, gallery, testimonials, FAQ, contact and appointment, plus a custom 404.
- **Token-driven design system** — all colour, type, spacing, radius, shadow and motion values live in one file, `styles/tokens.css`.
- **Fluid typography** — a `clamp()`-based type scale that scales continuously instead of snapping at breakpoints, so text never overflows down to a 320px viewport.
- **Mobile-first navigation** — inline links collapse into a full-height drawer below 1100px, with scroll locking, focus handling and `Escape` to close.
- **Optimised imagery** — every photo is proxied through the Next.js image optimiser, capped at its real source width and served as AVIF or WebP.
- **Appointment form** — client-side validation, loading and success states, and a spam honeypot, with a graceful demo mode when no backend is configured.
- **Reveal-on-scroll** — a lightweight IntersectionObserver wrapper that respects `prefers-reduced-motion`.
- **Zero UI dependencies** — the only runtime packages are `next`, `react` and `react-dom`. Every component, icon and interaction is hand-built.

## Tech stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js 15 (App Router, React Server Components) |
| UI runtime | React 19 |
| Language | TypeScript 5.7 (`strict`) |
| Styling | Hand-written CSS with custom properties — no CSS framework, no Tailwind, no CSS-in-JS |
| Fonts | `next/font/google` — Playfair Display (display) and Manrope (body) |
| Icons | Inline SVG components in `components/ui/Icons.tsx` |
| Hosting | Vercel |

## Getting started

Requires **Node.js 18.18+** (developed on 22.13).

```bash
git clone https://github.com/nagina56/aurelia-dental-studio.git
cd aurelia-dental-studio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

The site runs with **no configuration required** — with no environment variables set, the appointment form operates in demo mode and nothing is transmitted anywhere.

## Scripts

| Script | Purpose |
| --- | --- |
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Create an optimised production build |
| `npm run start` | Serve the production build locally |
| `npm run typecheck` | Type-check the whole project without emitting files |
| `npm run lint` | Run the Next.js ESLint checks |

## Project structure

```
aurelia-dental-studio/
├── app/                        # App Router — file-system routes
│   ├── layout.tsx              # Root layout: fonts, metadata, nav and footer
│   ├── page.tsx                # Home
│   ├── not-found.tsx           # 404
│   ├── about/page.tsx
│   ├── appointment/page.tsx
│   ├── contact/page.tsx
│   ├── faq/page.tsx
│   ├── gallery/page.tsx
│   ├── services/page.tsx
│   └── testimonials/page.tsx
├── components/
│   ├── home/                   # Home-page sections
│   │   ├── Hero.tsx
│   │   ├── FeaturedServices.tsx
│   │   ├── Introduction.tsx
│   │   ├── WhyAurelia.tsx
│   │   ├── GalleryPreview.tsx
│   │   ├── TeamPreview.tsx
│   │   └── TestimonialPreview.tsx
│   ├── site/                   # Shared chrome and interactive widgets
│   │   ├── Nav.tsx             # Header + mobile drawer
│   │   ├── Footer.tsx
│   │   ├── PageHero.tsx        # Interior-page banner
│   │   ├── CtaBand.tsx
│   │   ├── Accordion.tsx
│   │   ├── AppointmentForm.tsx
│   │   ├── GalleryFilter.tsx
│   │   └── ScrollToTop.tsx
│   └── ui/                     # Primitives
│       ├── Icons.tsx           # Inline SVG icon set
│       ├── Reveal.tsx          # Scroll-reveal wrapper
│       └── SmartImage.tsx      # next/image wrapper with shared defaults
├── lib/
│   ├── site.ts                 # Central content: clinic details, services, team, FAQ
│   ├── images.ts               # Pexels id → optimised URL helper
│   └── webhook.ts              # n8n webhook client + demo-mode handling
├── styles/
│   ├── tokens.css              # Design tokens (single source of truth)
│   ├── global.css              # Reset, base elements, shared primitives
│   ├── site.css                # Header, navigation, footer
│   ├── sections.css            # Page sections
│   └── forms.css               # Forms, inputs, booking slots
├── next.config.mjs
├── tsconfig.json
└── package.json
```

**Content is separated from presentation.** Clinic details, service lists, team members and FAQ entries are defined once in `lib/site.ts` and consumed by every page, so copy changes never require touching a component.

## Design system

Every visual decision is a custom property in `styles/tokens.css`:

- **Colour** — deep forest greens, muted champagne gold accents, soft sage neutrals, plus text, line and overlay tokens for both light and dark surfaces.
- **Type** — Playfair Display for display and headings, Manrope for body copy, wired in through `next/font` so they self-host with zero layout shift and no render-blocking request to Google.
- **Space** — a 4px base scale on an 8px rhythm, with fluid section padding and gutters.
- **Radius, shadow, motion** — restrained values with consistent easing curves and durations.

## Responsive strategy

The site is fluid by default and only intervenes where a layout genuinely has to change.

**Fluid, not stepped.** The type scale, section padding and gutters are all `clamp()` expressions, so type scales continuously between 320px and 1440px. There is no awkward jump at a breakpoint, and no horizontal scrollbar at any width.

**Breakpoints collapse multi-column grids progressively:**

| Element | Desktop | Tablet | Mobile |
| --- | --- | --- | --- |
| Why Aurelia blocks | 4 columns | 2 columns | 1 column |
| Team grid | 3 columns | 2 columns | 1 column |
| Testimonials | 3 columns | 2 columns | 1 column |
| Footer | 4 columns | 2 columns | 1 column |
| Hero, split, intro, service detail, booking | 2 columns | 1 column | 1 column |
| Gallery collage | 12-column editorial grid | — | 2-column stack |
| Gallery grid | `auto-fill`, fluid | `auto-fill`, fluid | `auto-fill`, fluid |

**Navigation.** Above 1100px the header shows inline links and a call-to-action. Below that they are replaced by a menu button opening a full-height drawer with a scrim, body scroll lock, focus management and `Escape`-to-close.

**Verified** at 375px, 768px, 1024px and 1440px across all eight routes, with no horizontal overflow and no console errors.

## Images

All photography is served from Pexels through the Next.js image optimiser.

- `lib/images.ts` exposes an `img()` helper that builds the source URL and **caps every image at 1920px**, matching the real width of the sources. Next's default `deviceSizes` include 2048px and 3840px entries that could only ever ask the optimiser to upscale — wasted work slow enough to trip its timeout, so the ladder in `next.config.mjs` stops at the width the sources actually have.
- Only the `quality` values actually used in components are permitted (`80`, `82`, `84`); Next refuses unlisted qualities outright.
- AVIF and WebP are negotiated via the `Accept` header, with the original as fallback.
- Remote images are locked to a single origin and path via `remotePatterns` (`https://images.pexels.com/photos/**`).
- Below 767px the team cards switch from a 4:5 to a 1:1 aspect ratio so a three-card grid does not become a very tall column of portraits.

## Appointment form and the n8n webhook

`components/site/AppointmentForm.tsx` posts to an n8n webhook through `lib/webhook.ts`. **There is no hard-coded endpoint.** The URL is read from an environment variable at build time:

```bash
# .env.local  — never commit this file
NEXT_PUBLIC_N8N_WEBHOOK_URL=https://<your-n8n-host>/webhook/aurelia-appointment
```

To go live:

1. In n8n, add a **Webhook** node — method `POST`, path `aurelia-appointment`.
2. Copy the production URL n8n gives you.
3. Set `NEXT_PUBLIC_N8N_WEBHOOK_URL` to it in `.env.local`.
4. Restart the dev server, or redeploy so the variable is inlined.

**With no variable set the form runs in demo mode**: it validates, renders the full success state, transmits nothing, and says so on screen. It will not fake a request to a URL that does not exist, and a literal placeholder such as `your-n8n-host` is treated as unconfigured.

**Submitted payload:**

```json
{
  "name": "…", "email": "…", "phone": "…",
  "service": "…", "preferredDate": "YYYY-MM-DD",
  "preferredTime": "HH:MM", "message": "…"
}
```

Because the variable is prefixed `NEXT_PUBLIC_`, the URL is inlined into the client bundle and the request is made from the browser — so the n8n webhook endpoint must have **CORS enabled** to receive it.

## Deployment

Deployed to **Vercel**; `next build` is detected automatically and no configuration is required.

1. Import the repository at [vercel.com/new](https://vercel.com/new).
2. Add `NEXT_PUBLIC_N8N_WEBHOOK_URL` under **Settings → Environment Variables** if you want the form to transmit.
3. Deploy.

Because it is a standard Next.js App Router project, Vercel handles the build, the image optimiser and ISR/caching with no extra setup.

## Accessibility

- Semantic landmarks (`header`, `nav`, `main`, `footer`) and a logical heading order on every page.
- The mobile drawer traps focus, restores it on close and dismisses on `Escape`.
- The FAQ accordion and gallery filter are real buttons with `aria-expanded` / `aria-pressed` and wired-up `aria-controls`.
- Form fields have associated labels, `aria-invalid` on error, and errors are announced.
- Visible `:focus-visible` styling throughout.
- All animation is disabled under `prefers-reduced-motion: reduce`.

## License

Released for demonstration and portfolio purposes. The code is free to read and adapt; the Pexels photography remains subject to the [Pexels licence](https://www.pexels.com/license/), and the Aurelia Dental Studio brand, copy and content are entirely fictional.
