# PEMF Nashville — Product Requirements Document (PRD)
> Version 1.0 | Created: 2026-04-05 | Status: Approved, Phase 1 In Progress

---

## 1. Project Summary

Build a **high-conversion, self-editable website** for PEMF Nashville (Lisa Taylor, RN) to replace the current Canva site. The site must be legally compliant, mobile-first, SEO-optimized for Nashville, and deployable to Vercel via pemfnashville.com.

**Current site:** https://pemfnashville.my.canva.site/
**Target domain:** pemfnashville.com (GoDaddy)
**Hosting:** Vercel (deployed after local testing)

---

## 2. Business Info

| Field | Value |
|-------|-------|
| Owner | Lisa Taylor |
| Credentials | Registered Nurse (RN), Certified Pulse PEMF Practitioner, Equestrian |
| Phone | (615) 669-2391 |
| Email (professional) | lisa@pemfnashville.com |
| Email (old — retire for business) | TrottingFlower@gmail.com |
| Calendly | calendly.com/pemfnashville/consult |
| Venmo | @Lisataylor_ (confirm before launch — may change) |
| Location | Nashville, TN — Mobile In-Home Sessions |
| Pricing | $120 in-home session; package discounts available |
| Add-on | Red light therapy (separate session, additional cost — TBD pricing) |

---

## 3. Services

### For People
- **Relief** — supports comfort for muscle and joint discomfort
- **Recovery** — supports the body after workouts, physical activity, or strain
- **Relaxation** — promotes deep rest, stress relief, and a sense of balance

### For Animals (secondary audience)
- Horses — equestrians are already familiar with PEMF for animals
- Dogs — shown on site as a secondary, authentic service

> ⚠️ All service descriptions must use compliant language. See MEMORY.md.

---

## 4. Target Audiences

1. **Primary:** High-end women in Nashville (Belle Meade, Green Hills, West Nashville / Bellevue), 40s–50s, seeking non-pharmaceutical wellness — they do NOT know what PEMF is, they know their symptoms
2. **Bridge audience:** Equestrians who know PEMF for horses but haven't tried it themselves
3. **Secondary:** Pet owners (dogs, horses) seeking animal wellness support

### Positioning Rule
Nobody searches "PEMF Nashville." Lead with the symptom/outcome they feel. Introduce PEMF as the solution after engagement. The technology is the answer, not the hook.

---

## 5. Tech Stack

| Layer | Tool | Why |
|-------|------|-----|
| Framework | Next.js 15 (App Router, TypeScript) | Fast, SEO-friendly, Vercel-native |
| Styling | Tailwind CSS | Rapid, consistent styling |
| CMS / Editor | TinaCMS | Visual in-page editing — Lisa edits text/photos/testimonials by clicking on her live site |
| Hosting | Vercel | Free tier, instant deploys, edge CDN |
| Domain | pemfnashville.com via GoDaddy | Already owned |
| Repo | GitHub (Lisa to set up) | Required for TinaCMS + Vercel |

---

## 6. Brand Identity

### Colors
| Role | Name | Hex |
|------|------|-----|
| Primary | Deep plum | `#3D1A28` |
| Accent | Warm gold | `#C9A047` |
| Soft accent | Dusky mauve | `#A07080` |
| Background | Cream | `#F5EDE0` |
| Light text | Off-white | `#F0E8E0` |

### Fonts
- **Headlines:** Playfair Display (serif, elegant)
- **Body:** Inter (clean, readable)
- **Script accent:** Dancing Script (matches logo "Nashville" script lettering)

### Logo
`PEMFNASHVILLELOGO42026.jpg` — Dark horse with gold constellation/electromagnetic lines through body. Sacred geometry in gold. Dusky mauve flowers. Circular border. Deep plum text.

### Vibe
Dusky, luminous, healing-adjacent without making medical claims. Warm gold sparkle = the PEMF energy moving through the body. Feels like a high-end wellness brand, not a medical clinic.

---

## 7. Photo Assets

| File | Description | Use |
|------|-------------|-----|
| `PEMFNASHVILLELOGO42026.jpg` | Brand logo | Header, footer |
| `bubble-background.png` | Swirling bubble macro | Hero background |
| `RNHORSE.JPG` | Lisa + horse, golden hour | Hero, About section |
| `RNDOGPEMF.jpg` | Lisa treating golden retriever (smiling) | Animals section hero |
| `DOGSONPEMFCHAIR.jpg` | Two small dogs on PEMF mat | Animals section |
| `HORSEPEMFRELEASE.JPG` | Chestnut horse yawning (release response) | Animals section — powerful for equestrians |
| `HORSEPEMFRELEASE2.PNG` | Horse release | Animals section |
| `CLIENT1.JPG` | Person relaxing in home during session | Services / how it works |
| `CLIENT2.JPG` | PEMF coil on neck/shoulder (no face) | Services / how it works |
| `CLIENT3.HEIC` | TBD | Convert first |
| `CLIENT4.heic` | TBD | Convert first |
| `DOGPEMF2.heic` | Dog receiving PEMF | Animals |
| `DOGPEMFPAD.heic` | Dog on pad | Animals |
| `HORSEHEADPEMF.HEIC` | Horse head PEMF | Animals |
| `HORSEPEMF11.HEIC` | Horse PEMF | Animals |
| `PEMFCHAIR.heic` | PEMF chair/mat setup | Equipment / what to expect |
| `PEMFMACHINE1.HEIC` | Machine | Equipment |
| `PEMFMACHINE2.HEIC` | Machine | Equipment |

**Consent status:** Verbal + written consent form on file for all client photos ✅
**HEIC files:** Must be converted to WebP before use on web

---

## 8. Site Sections (in order, top to bottom)

### 8.1 Sticky Header
- Logo (left)
- Phone number `(615) 669-2391` (center/right, always visible)
- CTA button: "Book Free Consult" → calendly.com/pemfnashville/consult (right)
- Collapses cleanly on mobile

### 8.2 Hero Section
- Background: `bubble-background.png` with plum/gold overlay
- `RNHORSE.JPG` — Lisa + horse photo, prominent
- Headline (compliant, high-conversion — TBD, needs legal review)
- Sub-headline: service summary
- CTA 1: "Book Free Consult" (Calendly)
- CTA 2: "Text to Book: (615) 669-2391"

### 8.3 What is PEMF?
- Plain-language education block
- Short (3–4 sentences max)
- Source language from Canva site (already compliant): "non-invasive wellness experience that uses gentle pulsed electromagnetic fields to support the body during a calming and restorative session"
- Visual: bubble-background.png or machine photo

### 8.4 Services — Relief / Recovery / Relaxation
- 3 cards, one per service
- Photo per card from available assets
- Short description each, legally compliant language
- Price mention or CTA per card

### 8.5 About Lisa
- `RNHORSE.JPG` or a dedicated portrait
- **Story:** Lisa found PEMF during her own wellness journey after being thrown from a horse and breaking a vertebra in her back. As a Registered Nurse and lifelong equestrian, she saw firsthand how PEMF supported her own body — and knew she had to share it.
- Credentials: RN, Certified Pulse PEMF Practitioner, Equestrian
- Warm, personal tone — not clinical

### 8.6 Testimonials
- All 5 current testimonials (Roxanne, Emma, Jeff, Ashley, Beth)
- Carousel or masonry grid layout
- TinaCMS-editable — Lisa can add new ones herself
- Note: Client words are their own. We do not add medical spin.

### 8.7 For Animals
- Section header: "PEMF for Your Animals"
- Hero image: `RNDOGPEMF.jpg` (Lisa + golden retriever, instantly lovable)
- Supporting images: dogs on mat, horse release
- Copy: Bridge equestrian knowledge to human — "Your horse has known it for years."
- Note about HORSEPEMFRELEASE.JPG: The open-mouth yawn IS the famous "release response" — equestrians will recognize this immediately as a sign it's working. Caption accordingly.

### 8.8 Pricing
| Package | Sessions | Price | Per Session |
|---------|----------|-------|-------------|
| Single Session | 1 | $125 | $125 |
| 4-Session Pack | 4 | $450 | $112.50 |
| 6-Session Pack | 6 | $600 | $100 |
| Wellness Monthly *(coming soon)* | ~4/month | ~$400 | $100/wk |

- Red light therapy: listed as available add-on (separate session, pricing TBD — use "contact for pricing" or "ask during consult")
- Monthly retainer model under consideration — build UI to support it when ready
- CTA: Book Consult

### 8.9 FAQ
Key questions to include (TinaCMS-editable):
1. What is PEMF and how does it work?
2. What should I expect during a session?
3. How many sessions will I need?
4. **What are the contraindications?** *(Required for liability)*
   - Pregnancy
   - Implanted electrical devices (pacemakers, cochlear implants, insulin pumps, spinal cord stimulators, intrathecal drug pumps)
   - Active or uncontrolled bleeding
   - Epilepsy / seizure disorders (consult your physician)
   - Active cancer (consult your physician)
   - *(Verify full list against official Pulse PEMF documentation)*
5. Is PEMF safe?
6. Do you work with animals?
7. How do I pay?
8. What areas do you serve?

### 8.10 Final CTA Block
- "Ready to feel better?" (or approved compliant variant)
- Button: "Book Free Consult" (Calendly)
- Button: "Text Lisa: (615) 669-2391"
- Venmo link / @Lisataylor_ (confirm handle before launch)

### 8.11 Footer
- Logo
- Phone, email
- Venmo link
- Privacy Policy link
- Terms link
- **Legal disclaimer:** "PEMF is a wellness service, not a medical treatment. Not intended to diagnose, treat, cure, or prevent any disease or condition. Results may vary."

---

## 9. TinaCMS Editable Content (what Lisa controls without a developer)

- All testimonials (add, edit, remove)
- All FAQ questions and answers
- About Lisa text
- Pricing amounts and package details
- Services descriptions
- Hero headline and sub-headline
- Contact info (phone, email, Venmo, Calendly link)

---

## 10. SEO Requirements

- Page title: `PEMF Nashville | In-Home PEMF Wellness Sessions | Lisa Taylor, RN`
- Meta description: ~155 characters, includes "Nashville PEMF" and "in-home"
- Local business schema markup (JSON-LD)
- Open Graph tags for social sharing
- Nashville + surrounding area keywords throughout copy
- Google Analytics + Search Console setup on launch

---

## 11. Phase Plan

| Phase | What | Status |
|-------|------|--------|
| 0 | Housekeeping: rename folder, convert HEIC, optimize images | ⏳ Pending approval |
| 1 | Next.js + TinaCMS setup | ⏳ Pending |
| 2 | Build all 11 sections | ⏳ Pending |
| 3 | TinaCMS content schema + editor | ⏳ Pending |
| 4 | Copy audit (legal compliance review) | ⏳ Pending |
| 5 | Local test + review | ⏳ Pending |
| 6 | GitHub repo setup | ⏳ Pending (Lisa) |
| 7 | Vercel deploy | ⏳ Pending |
| 8 | Connect pemfnashville.com | ⏳ Pending |
| 9 | Google Analytics + Search Console | ⏳ Pending |
| 10 | Ongoing: Lisa edits via TinaCMS | ♾️ Forever |
