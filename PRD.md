# PEMF Nashville — Product Requirements Document (PRD)

> **Version 2.1** | Last updated: 2026-09-06 | **Status: Production live**
> Companion doc: [MEMORY.md](./MEMORY.md) — rules, current facts, and edit map.

---

## 1. Project summary

**PEMF Nashville** is a live, high-conversion marketing site for Lisa Taylor, RN — a certified Pulse PEMF practitioner serving Nashville and Brentwood.

| Item | Value |
|------|-------|
| **Production URL** | [https://www.pemfnashville.com](https://www.pemfnashville.com) |
| **Hosting** | Vercel |
| **Domain** | pemfnashville.com (GoDaddy) → www.pemfnashville.com |
| **Repo** | github.com/nodrinksonthepiano/PEMFNASHVILLE |
| **Legacy site** | [pemfnashville.my.canva.site](https://pemfnashville.my.canva.site/) — still up; should be retired |

**What v1 achieved:** Replaced the Canva site with a Next.js app — mobile-first, SEO-oriented, legally compliant copy, office + in-home booking paths, four SEO topic pages, and 15 FAQs.

**What v1 did not build:** TinaCMS self-editing, Google Analytics, JSON-LD schema, sitemap/robots, or privacy/terms pages. Contextual FAQ links to topic pages were added after v1.

> **Repository state moves.** Last verified commit: `61feb75` (2026-09-06). A current-branch commit does not prove production deployment; run `git log -1 --oneline` before citing current HEAD and verify the live site when deployment status matters.

---

## 2. Business info

| Field | Value |
|-------|-------|
| Owner | Lisa Taylor |
| Credentials | Registered Nurse (RN), Certified Pulse PEMF Practitioner, Equestrian |
| Phone | (615) 669-2391 |
| Email | lisa@pemfnashville.com |
| Calendly | [calendly.com/pemfnashville/consult](https://calendly.com/pemfnashville/consult) |
| Venmo | @Lisataylor_ |
| Base area | Bellevue / West Nashville |

### Live pricing

| Option | Price | Duration |
|--------|-------|----------|
| Office session at Kinnection Clinic, Brentwood | **$125** | 60 min |
| In-home session | **$150** | 60 min |
| Four in-home sessions (package) | **$540** | $135 each |

Office sessions sold individually. In-home four-pack is the only package on site today.

### Add-on

Red light therapy available as a separate add-on session — contact Lisa for details. Listed in Services section copy.

### Revenue goals

- Minimum: $5,000/month
- Target: $10,000+/month

---

## 3. Services

### Hero tagline

**Relief · Recover · Recharge** (`siteConfig.tagline`)

### Service cards (homepage)

| Card | Subhead |
|------|---------|
| **Relief** | Muscle and joint discomfort support |
| **Recovery** | Workout and athletic recovery |
| **Recharge** | Stress, energy, and whole-body reset |

> Old v1 PRD listed "Relaxation" as the third card — live site uses **Recharge**.

### For animals (secondary audience)

- Horses — equestrian bridge audience
- Dogs — authentic secondary service

All service descriptions use compliant language. See [MEMORY.md](./MEMORY.md) for the full compliance list.

---

## 4. Target audiences

1. **Primary:** High-end women in Nashville (Belle Meade, Green Hills, West Nashville / Bellevue), 40s–50s, seeking non-pharmaceutical wellness — they often don't know what PEMF is; they know their symptoms
2. **Bridge audience:** Equestrians who know PEMF for horses but haven't tried it themselves
3. **Secondary:** Pet owners (dogs, horses) seeking animal wellness support

### Positioning rule

Nobody searches "PEMF Nashville" cold. Lead with the symptom/outcome they feel. Introduce PEMF as the solution after engagement.

---

## 5. Tech stack

| Layer | Tool | Notes |
|-------|------|-------|
| Framework | Next.js 15 (App Router, TypeScript) | Live |
| UI | React 19 | Live |
| Styling | Tailwind CSS | Live |
| Hosting | Vercel | Live |
| Content | TypeScript files | `lib/content.ts`, `lib/seo-topics.ts` — **no CMS** |
| Domain | pemfnashville.com via GoDaddy | Live |
| Repo | GitHub | Live |

**Not in stack:** TinaCMS (considered in April 2026 planning; never installed), Google Analytics, JSON-LD schema.

**Content editing:** Lisa/Jai edit TS/TSX files and commit. No in-browser editor.

---

## 6. Brand identity

### Colors

| Role | Name | Hex |
|------|------|-----|
| Primary | Deep plum | `#3D1A28` |
| Accent | Warm gold | `#C9A047` |
| Soft accent | Dusky mauve | `#A07080` |
| Background | Cream | `#F5EDE0` |
| Light text | Off-white | `#F0E8E0` |

### Fonts

- **Headlines:** Playfair Display
- **Body:** Inter
- **Script accent:** Dancing Script

### Logo

`PEMFNASHVILLELOGO42026.jpg` — header and footer.

### Vibe

Dusky, luminous, wellness-adjacent without medical claims. High-end wellness brand, not a medical clinic.

---

## 7. Site architecture

### Production routes

```
/                              → Homepage (all sections)
/pemf-for-recovery             → SEO topic page
/pemf-for-joint-comfort        → SEO topic page
/pemf-for-inflammation         → SEO topic page
/pemf-for-back-discomfort      → SEO topic page (+ Lisa origin story)
/privacy                       → 404 (footer links here — gap)
/terms                         → 404 (footer links here — gap)
```

Each topic page: own `app/pemf-for-*/page.tsx`, `generateMetadata()`, shared `TopicPage.tsx`, copy in `lib/seo-topics.ts`.

### Homepage section order (live)

1. Sticky Header
2. Hero
3. Where to Find Lisa (`#locations`) — office + in-home
4. What is PEMF
5. Services — Relief / Recovery / Recharge
6. About Lisa
7. Testimonials — unified grid + Beth featured quote
8. For Animals
9. Pricing
10. FAQ (15 questions)
11. Final CTA
12. Footer — disclaimer, press link, privacy/terms links

### Header nav (live)

Services · About · Testimonials · Pricing · FAQ

**Gap:** No "Locations" link to `#locations`.

---

## 8. Section requirements (current state)

### 8.1 Sticky header

- Logo, phone `(615) 669-2391`, social links, "Book Free Consult" CTA
- Mobile hamburger menu
- **Missing:** Locations nav item

### 8.2 Hero

- Bubble background, Lisa + horse photo
- Tagline: Relief · Recover · Recharge
- CTAs: Calendly + text to book

### 8.3 Where to Find Lisa

- Kinnection Clinic · Brentwood ($125)
- In-home sessions ($150)
- Anchor: `#locations`

### 8.4 What is PEMF

- Plain-language education, compliant wording

### 8.5 Services

- Three cards: Relief, Recovery, Recharge
- Red light add-on note

### 8.6 About Lisa

- Horse fall → compression fracture → PEMF journey (homepage version uses "a few years ago" / "compression fracture")
- RN credentials, warm personal tone

### 8.7 Testimonials

- Unified grid (Roxanne, Emma, Jeff, Ashley, Joely)
- Beth featured quote block
- Client words preserved; no medical spin added

### 8.8 For Animals

- Dogs and horses imagery and copy

### 8.9 Pricing

- $125 office · $150 in-home · $540 four-pack
- Book consult CTA

### 8.10 FAQ (15 questions)

1. What is PEMF and how does it work?
2. What should I expect during a session?
3. How many sessions will I need?
4. What are the contraindications? *(required for liability)*
5. Is PEMF safe?
6. Do you work with animals?
7. How do I pay?
8. What areas of Nashville do you serve?
9. Do you have an office location?
10. What's the difference between an office session and an in-home session?
11. What do people use PEMF for?
12. Can PEMF help with arthritis or joint stiffness?
13. Is PEMF used for workout recovery?
14. What is PEMF used for after an injury?
15. Does PEMF help with inflammation?

**Implemented:** FAQ answers 12–15 include contextual links to the four topic pages (`61feb75`). FAQ 11 has no topic-page link. Footer topic links were intentionally not added under the current SEO decision; contextual FAQ links are the approved internal-linking approach.

### 8.11 Final CTA

- Book consult + text Lisa CTAs

### 8.12 Footer

- Logo, phone, email, Venmo, social
- **Featured in the Kingston Springs Gazette** — external link (live)
- Privacy Policy link → **404**
- Terms link → **404**
- Legal disclaimer on every page

---

## 9. SEO topic pages

Four intent-matched landing pages for organic search. Copy in `lib/seo-topics.ts`.

| Slug | Purpose |
|------|---------|
| `/pemf-for-recovery` | Workout / athletic recovery intent |
| `/pemf-for-joint-comfort` | Joint stiffness / arthritis-adjacent searches |
| `/pemf-for-inflammation` | Inflammation research intent |
| `/pemf-for-back-discomfort` | Back discomfort + Lisa first-person origin story |

**Current state:**

- Contextual links from homepage FAQ answers 12–15 provide a human-visible path to all four topic pages. Footer topic links were intentionally not added under the current SEO decision; contextual FAQ links are the approved internal-linking approach.
- Lisa-voice personal sections planned for recovery, joint, inflammation are **not yet written**; back-discomfort has one.

---

## 10. SEO requirements

### Done

- Page title and meta description in `app/layout.tsx`
- Keywords array including Brentwood, recovery, joint comfort
- Four topic pages with unique `generateMetadata()` per route
- 15 FAQs including intent-matched questions 11–15
- Contextual FAQ links: 12 → joint comfort; 13 → recovery; 14 → back discomfort; 15 → inflammation
- Footer topic links intentionally not added under the current SEO decision; contextual FAQ links are the approved internal-linking approach
- Compliant symptom-first language in services and topic copy

### Not done (backlog)

- `robots.txt` and XML sitemap
- Google Search Console submission
- Local business JSON-LD schema
- Google Analytics

---

## 11. Press and external content

**Kingston Springs Gazette** (May 18, 2026 · Cate Burgan):

- [Local nurse brings PEMF wellness therapy to Kingston Springs](https://www.ksgazette.com/local-nurse-brings-pemf-wellness-therapy-to-kingston-springs/)
- Footer external link only — no `/press` page yet
- Back-discomfort page has Lisa origin story (February 2025 horse fall, fractured vertebra, ~two weeks PEMF) — compliant reframe, not article republish

**Do not** paste Gazette quotes into site voice. See [MEMORY.md](./MEMORY.md).

---

## 12. Backlog (prioritized)

| Priority | Task | Status |
|----------|------|--------|
| 1 | Maintain AGENTS / MEMORY / PRD alignment after verified changes | Ongoing |
| 2 | Remove `public/images/PRD.md` and `MEMORY.md` | Pending — separate approval required |
| 3 | Lisa-voice sections on recovery / joint / inflammation pages | Pending |
| 4 | `/privacy` and `/terms` pages | Pending — verify live status first |
| 5 | Header "Locations" → `#locations` | Pending |
| 6 | Sitemap + robots.txt + Search Console | Pending — verify current configuration first |
| 7 | Review sprint | Ongoing — see `MEMORY.md` for the current review baseline; verify before reuse |
| 8 | Retire Canva site | Pending |
| 9 | Compress images in `public/images/` | Pending |

**Deferred:** `/press` page · AboutLisa bio expansion · TinaCMS · GA · JSON-LD · image renames

---

## 13. Dormant / unused assets

| Item | Status |
|------|--------|
| `components/WeekendLandBanner.tsx` | In repo; not in layout — do not re-enable without Lisa OK |
| `weekendLandPromo` in `lib/content.ts` | Copy exists; unused |
| `testimonialGroups` in `lib/content.ts` | Defined; unused |
| `public/images/PRD.md` and `MEMORY.md` | Stale April 2026 copies; remove from public folder |

---

## 14. Photo assets

See original asset inventory in git history (April 2026 PRD). Key live images:

- `PEMFNASHVILLELOGO42026.jpg` — logo
- `bubble-background.png` — hero
- `RNHORSE.JPG` — hero / about
- `RNDOGPEMF.jpg`, dog/horse PEMF images — animals section
- `CLIENT1.JPG`, `CLIENT2.JPG`, `roxchair.jpeg` — services

**Consent:** Verbal + written consent on file for client photos.

**Performance note:** ~94 MB total in `public/images/` — compression backlog item.

---

## 15. Rules of engagement

- **Lisa/Jai handles all git.**
- Agent reads, reports, edits approved files only.
- One task per session when possible.
- Full compliance rules and edit map: [MEMORY.md](./MEMORY.md).

---

## 16. Recent verified changes

- `897cd5f` — Kinnection office pricing updated from $100 to $125 in source.
- `61feb75` — Contextual FAQ links implemented in source; no footer topic-link group was added.
