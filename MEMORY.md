# PEMF Nashville — Project Memory

> Living document. Update after every session that changes facts, rules, or priorities.  
> **Last updated:** 2026-09-06
> **Status:** Production live at [https://www.pemfnashville.com](https://www.pemfnashville.com)

**Read `AGENTS.md` first, then this file, every session.**

---

## Rules of engagement

- **Lisa/Jai handles ALL git:** branches, commits, pushes, merges, deploys.
- **Agent:** read, report, and edit **only files Lisa explicitly approves**.
- **One thing per session** when possible. When complete, stop and list files changed.
- If an instruction conflicts with these rules, **stop and ask**.

---

## ⚠️ Legal compliance — read before any copy edit

Lisa is a **licensed Registered Nurse**. Site copy in Lisa's marketing voice must never claim to diagnose, treat, cure, prevent, or relieve conditions.

### NEVER use in site / Lisa marketing voice

- `heals` / `healing` / `heal`
- `cures` / `cure`
- `treats` / `treatment` (medical/clinical sense)
- `diagnoses` / `diagnosis`
- `pain relief`, `fix`, `reduces inflammation`, `helps arthritis`
- Any claim that PEMF **will** fix a specific condition
- `"therapy"` used to imply medical treatment — prefer **session** or **wellness service**

### Use instead

- `supports` / `may support`
- `comfort`, `tension relief`, `ease`, `wellness`, `recovery`, `restore`, `discomfort`
- `promotes comfort` / `promotes relaxation`
- `clients report feeling…`
- `designed to promote wellness`
- `restorative` / `non-invasive wellness service`
- `calming session`
- `may help with discomfort`
- `support the body's natural processes`

### Testimonials

- Clients may describe their own experiences in their own words ✅
- Do **not** add editorial spin that makes medical claims ✅
- OK: *"I felt amazing after my session!"* (client's words)
- OK: *"My SI pain was 90% reduced."* (client's claim)
- NOT OK: *"PEMF healed her SI joint."* (our claim)

### External press (Kingston Springs Gazette)

- **Link out only** — article stays on [ksgazette.com](https://www.ksgazette.com/local-nurse-brings-pemf-wellness-therapy-to-kingston-springs/)
- Do **not** republish full article text or paste quotes into Lisa's site voice
- Avoid lifting Gazette phrases like *"natural healing,"* *"feel it working,"* *"relief afterward"*
- Back-discomfort origin story on `/pemf-for-back-discomfort` uses **facts + compliant reframe**, not article republish

### Required on every page

- Footer disclaimer (wellness service, not medical treatment; not intended to diagnose/treat/cure/prevent; results may vary)
- FAQ contraindications block

---

## Current business facts

| Field | Value |
|-------|-------|
| Owner | Lisa Taylor |
| Credentials | RN, Certified Pulse PEMF Practitioner, Equestrian |
| Phone | (615) 669-2391 |
| Email | lisa@pemfnashville.com |
| Calendly | [calendly.com/pemfnashville/consult](https://calendly.com/pemfnashville/consult) |
| Venmo | @Lisataylor_ |
| Base area | Bellevue / West Nashville |

### Live pricing (do not use obsolete $100 office pricing or retired $450 / $600 package prices)

| Option | Price | Notes |
|--------|-------|-------|
| Office session | **$125** / 60 min | Kinnection Clinic, Brentwood |
| In-home session | **$150** / 60 min | Lisa travels with full setup |
| Four in-home sessions | **$540** | $135 each, paid as package |

Office sessions sold individually only. No 6-pack or monthly retainer on site today.

### Locations

1. **Kinnection Clinic · Brentwood** — office sessions ($125)
2. **In-home** — Nashville, Belle Meade, Green Hills, Franklin, Brentwood, Bellevue, Kingston Springs, Fairview, Cool Springs, Leipers Fork, and surrounding areas ($150)

### Brand tagline vs service cards

- **Hero tagline (live):** Relief · Recover · Recharge
- **Service card titles (live):** Relief · Recovery · Recharge  
  *(Old PRD said "Relaxation" for the third card — that is outdated.)*

### Revenue goals

- Minimum: **$5,000/month**
- Target: **$10,000+/month**

### Google reviews (point-in-time — verify before reuse)

- **14 reviews, owner-confirmed as of Sep 6, 2026; verify before reuse.**

---

## Production snapshot

> **HEAD moves.** Last verified commit: `61feb75` (2026-09-06).
> Before trusting deploy state, run: `git log -1 --oneline` and compare to `origin/main`.

| Item | Status |
|------|--------|
| Hosting | Vercel |
| Domain | pemfnashville.com → www.pemfnashville.com |
| Repo | github.com/nodrinksonthepiano/PEMFNASHVILLE |
| Stack | Next.js 15 · React 19 · TypeScript · Tailwind |
| CMS | **None** — content lives in code files (`lib/content.ts`, `lib/seo-topics.ts`) |
| TinaCMS | **Not installed, not planned for current phase** |
| Google Analytics | Not in codebase |
| JSON-LD schema | Not in codebase |
| robots.txt / sitemap | Not in repo |
| Old Canva site | Still up at pemfnashville.my.canva.site (duplicate presence) |

### Live routes (200 unless noted)

| URL | Status |
|-----|--------|
| `/` | Homepage — all sections |
| `/pemf-for-recovery` | SEO topic page |
| `/pemf-for-joint-comfort` | SEO topic page |
| `/pemf-for-inflammation` | SEO topic page |
| `/pemf-for-back-discomfort` | SEO topic page + Lisa origin story |
| `/privacy` | **404** (footer links here today) |
| `/terms` | **404** (footer links here today) |

> **Completed 2026-09-06:** The obsolete internal documents formerly in `public/images/` were removed. Repository search found no runtime-code references. Their former production URL status is historical and not a current live-production assertion.

### Homepage section order (live)

Header → Hero → Where to Find Lisa (`#locations`) → What is PEMF → Services → About Lisa → Testimonials → Animals → Pricing → FAQ → Final CTA → Footer

### Header nav (live)

Services · About · Testimonials · Pricing · FAQ — **no "Locations" link** to `#locations` yet

### Current internal-linking structure

The four SEO topic pages are reachable through contextual links inside FAQ answers 12–15, implemented in `61feb75`. Footer topic links were intentionally not added under the current SEO decision; contextual FAQ links are the approved internal-linking approach.

---

## Where to edit what

| Change | File(s) |
|--------|---------|
| Phone, email, Calendly, pricing, FAQs, services, testimonials | `lib/content.ts` |
| Press link | `lib/content.ts` → `pressFeature` + `components/Footer.tsx` |
| SEO topic page copy | `lib/seo-topics.ts` |
| Topic page shells / metadata | `app/pemf-for-*/page.tsx` |
| Homepage meta | `app/layout.tsx` |
| Header nav | `components/Header.tsx` |
| Footer | `components/Footer.tsx` |
| Hero, About, testimonials, other sections | respective `components/*.tsx` |
| Section order | `app/page.tsx` |

**Content hubs:** `lib/content.ts` (business data) · `lib/seo-topics.ts` (four topic pages)

---

## Decisions log

| Date | Decision | Notes |
|------|----------|-------|
| 2026-04-05 | Brand: PEMF Nashville | Location + service focus for SEO |
| 2026-04-05 | Stack: Next.js 15 + Tailwind + Vercel | TinaCMS was considered early; **never built** |
| 2026-04-05 | Domain: pemfnashville.com | GoDaddy |
| 2026-04-05 | Dual booking: Calendly + text/call | Both CTAs on site |
| 2026-04-05 | Colors/fonts from logo | Plum, gold, cream palette |
| 2026-06+ | Brentwood office at Kinnection Clinic | $100 office tier added |
| 2026-06+ | In-home pricing | $150 single · $540 four-pack |
| 2026-08 | SEO topic pages deployed | Four `/pemf-for-*` routes live |
| 2026-08 | Intent FAQs 11–15 | Added to homepage FAQ |
| 2026-08 | Testimonials: unified grid | Group headings rejected; single grid + Beth featured quote |
| 2026-08 | Weekend Land popup **removed** | Do not re-enable unless Lisa confirms restart |
| 2026-08 | Gazette: link out, don't republish | Footer external link only; no `/press` page yet |
| 2026-08 | Lisa back story | `/pemf-for-back-discomfort` only; not other three topic pages |
| 2026-08 | Lisa voice on recovery/joint/inflammation | Planned from existing site copy — **not done** |
| 2026-09-06 | Kinnection office pricing | Updated to $125 in source via `897cd5f` |
| 2026-09-06 | Contextual FAQ links | FAQs 12–15 link to the four topic pages via `61feb75`; footer topic links intentionally not added |

---

## Dormant assets — do not re-enable without Lisa OK

| Item | Location | Status |
|------|----------|--------|
| Weekend Land banner | `components/WeekendLandBanner.tsx` | In repo; **not** in `app/layout.tsx` |
| Weekend Land copy | `lib/content.ts` → `weekendLandPromo` | Defined; unused |
| Testimonial groups | `lib/content.ts` → `testimonialGroups` | Defined; unused after grid restore |

Land pop-ups were promoted through July 2026 per Gazette article. As of Aug 3, treat as **ended** unless Lisa says otherwise.

---

## Prioritized backlog

| Priority | Task | Why |
|----------|------|-----|
| **1** | Maintain AGENTS / MEMORY / PRD alignment after verified changes | Ongoing documentation discipline |
| **2** | Lisa-voice paragraphs on recovery / joint / inflammation | One section each in `lib/seo-topics.ts` |
| **3** | `/privacy` and `/terms` pages | Footer 404 today — verify before changing |
| **4** | Header "Locations" → `#locations` | One line in `Header.tsx` |
| **5** | Sitemap + robots.txt + Search Console | Verify current configuration before changing |
| **6** | Review sprint | 14 reviews, owner-confirmed Sep 6, 2026; verify before reuse |
| **7** | Retire Canva site | Duplicate web presence |
| **8** | Compress images (~94 MB in `public/images/`) | Build performance |

**Defer:** `/press` page (wait for 3–4 press hits) · AboutLisa bio expansion from Gazette · TinaCMS · GA · JSON-LD · image renames

---

## Positioning rule (still active)

Nobody searches *"PEMF Nashville"* cold. They search symptoms.

Lead with the problem the client feels; introduce PEMF as the solution once they're engaged.

**Primary audience:** High-end women, Nashville (Belle Meade, Green Hills, West Nashville / Bellevue), 40s–50s, premium wellness buyers.

**Symptom-first keywords (GBP, site, social):**

- muscle and joint comfort Nashville
- stress and tension relief Nashville
- recovery support Nashville
- mobile wellness sessions Nashville
- non-invasive wellness Nashville

---

## Progress log

- **2026-04-05** — Assessment complete. PRD + MEMORY created. Build started.
- **2026-06** — Site built and deployed to Vercel; Brentwood office + updated pricing live.
- **2026-08-03** — SEO batch deployed (`331f015`): four topic pages, FAQs 11–15, meta updates.
- **2026-08-03** — Weekend Land popup removed from layout.
- **2026-08-03** — Gazette footer link + back-discomfort Lisa story deployed (`43c773d`).
- **2026-08-03** — Doc sync: PRD + MEMORY rewritten to match production.
- **2026-09-06** — Kinnection office price updated to $125 in source (`897cd5f`).
- **2026-09-06** — Contextual FAQ links implemented (`61feb75`): FAQ 12 → joint comfort; 13 → recovery; 14 → back discomfort; 15 → inflammation. Footer topic links intentionally not added.
- **2026-09-06** — Root documentation synchronized with current source and recent Git history; `AGENTS.md` added as agent-operations memory.
- **2026-09-06** — Removed obsolete `public/images/MEMORY.md` and `public/images/PRD.md` (`8fcb681`). They were stale internal project documents with no runtime-code references.

---

## Contact (quick reference)

- Phone: (615) 669-2391
- Email: lisa@pemfnashville.com
- Calendly: calendly.com/pemfnashville/consult
- Venmo: @Lisataylor_
- Instagram: @pemfnashville
- Facebook: facebook.com/pemfnashville
