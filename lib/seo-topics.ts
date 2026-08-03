export type SeoTopicSection = {
  heading: string
  paragraphs: string[]
}

export type SeoTopic = {
  slug: string
  title: string
  metaDescription: string
  h1: string
  subtitle: string
  intro: string
  sections: SeoTopicSection[]
}

const disclaimer =
  'PEMF sessions offered by PEMF Nashville are wellness services, not medical treatments. They are not intended to diagnose, treat, cure, or prevent any disease or medical condition. Results may vary. Always consult your physician regarding any medical concerns.'

export const seoTopics: SeoTopic[] = [
  {
    slug: 'pemf-for-recovery',
    title: 'PEMF for Workout & Athletic Recovery | Nashville & Brentwood',
    metaDescription:
      'Learn how PEMF wellness sessions may support workout and athletic recovery in Nashville and Brentwood. Lisa Taylor, RN — in-home visits and Kinnection Clinic office sessions.',
    h1: 'PEMF for Workout & Athletic Recovery',
    subtitle: 'Nashville · Brentwood · In-Home & Office Sessions',
    intro:
      'Whether you train hard, compete on weekends, or simply push your body more than you used to, recovery is where progress actually happens. Many active people in Nashville and Brentwood explore PEMF as part of a recovery routine — not as a replacement for medical care or coaching, but as a calming wellness session that fits around a busy training schedule.',
    sections: [
      {
        heading: 'Why athletes and active people look into PEMF',
        paragraphs: [
          'After training, competition, or a physically demanding week, many people describe feeling tight, depleted, or simply not quite bounced back. PEMF — Pulsed Electromagnetic Field — is a non-invasive wellness experience that uses gentle, rhythmic electromagnetic fields during a restorative session. It has been used by wellness practitioners, professional athletes, and equestrians for decades.',
          'Clients often book around their training calendar — after a long run, between competition weekends, or during a heavy training block when they want extra support for how their body feels day to day.',
        ],
      },
      {
        heading: 'What a recovery-focused session looks like',
        paragraphs: [
          'Sessions are 60 minutes. You remain fully clothed while the PEMF applicator is placed on or near areas you and Lisa discuss — often legs, back, shoulders, or wherever you feel the most strain from your activity. Most clients report a gentle pulsing sensation and a deeply relaxed feeling during and after the session.',
          'Lisa Taylor is a Registered Nurse and certified Pulse PEMF practitioner. She brings the same professional, attentive approach whether you meet at Kinnection Clinic in Brentwood or she comes to your home with the full setup.',
        ],
      },
      {
        heading: 'Office sessions in Brentwood or in-home convenience',
        paragraphs: [
          'Office sessions at Kinnection Clinic ($100 · 60 minutes) are easy to reach from I-65 and Franklin Road — ideal if you want a private room between work and training. In-home sessions ($150 · 60 minutes) serve Nashville, Belle Meade, Green Hills, Franklin, Brentwood, and Bellevue — ideal when you want to recover without driving after a hard workout.',
          'A four-session in-home package ($540 · $135 each) is available for clients who want a consistent recovery rhythm at home.',
        ],
      },
      {
        heading: 'A note on expectations',
        paragraphs: [
          disclaimer,
          'On a free consult, Lisa will answer your questions honestly, walk you through what to expect, and help you decide whether PEMF fits your goals and schedule — with no pressure to book.',
        ],
      },
    ],
  },
  {
    slug: 'pemf-for-joint-comfort',
    title: 'PEMF for Joint Comfort & Stiffness | Nashville & Brentwood',
    metaDescription:
      'Information on PEMF wellness sessions for muscle and joint stiffness in Nashville and Brentwood. Wellness service only — Lisa Taylor, RN. Book a free consult.',
    h1: 'PEMF for Joint Comfort & Stiffness',
    subtitle: 'Nashville · Brentwood · In-Home & Office Sessions',
    intro:
      'Joint stiffness and general muscle discomfort are among the most common reasons people research PEMF. If you live in Nashville, Brentwood, or the surrounding area and are looking for a non-invasive wellness option, this page explains what PEMF is, what a session involves, and how Lisa Taylor, RN approaches joint-comfort-focused sessions — without overpromising outcomes.',
    sections: [
      {
        heading: 'What people mean when they search for joint support',
        paragraphs: [
          'People use many words — stiffness, tightness, arthritis, mobility, "my joints just feel old." PEMF is a wellness service, not a medical treatment, and it is not intended to diagnose or treat any condition. Many clients simply want to feel more at ease in their bodies and explore whether a calming PEMF session fits their routine.',
          'Lisa is happy to discuss your goals on a free consult and help you decide if a session makes sense for you — especially if you have implanted devices, are pregnant, or have other contraindications that require a careful conversation first.',
        ],
      },
      {
        heading: 'How a joint-comfort session is approached',
        paragraphs: [
          'Every session is tailored. Lisa places the PEMF applicator on or near areas you identify — neck, shoulders, hips, knees, hands — while you relax fully clothed in a private office room or at home. Sessions last 60 minutes and are designed to be comfortable and restorative.',
          'Some clients notice a difference after one session; others prefer a series for cumulative support. There is no one-size-fits-all answer — your consult is where Lisa helps map a plan that fits your life.',
        ],
      },
      {
        heading: 'Where to book in Nashville & Brentwood',
        paragraphs: [
          'Kinnection Clinic in Brentwood offers office sessions ($100 · 60 minutes) with free parking and flexible scheduling. In-home sessions ($150 · 60 minutes) are available throughout Nashville, Belle Meade, Green Hills, Franklin, Brentwood, and Bellevue.',
        ],
      },
      {
        heading: 'Compliance & honest expectations',
        paragraphs: [
          disclaimer,
          'Client testimonials on our site reflect individual experiences in their own words. PEMF Nashville does not add medical claims on top of those stories. Questions welcome — start with a free consult.',
        ],
      },
    ],
  },
  {
    slug: 'pemf-for-inflammation',
    title: 'PEMF & Inflammation Questions | Nashville Wellness Sessions',
    metaDescription:
      'Answers to common PEMF and inflammation questions — wellness sessions only, no medical claims. Lisa Taylor, RN in Nashville and Brentwood. Book a free consult.',
    h1: 'PEMF & Inflammation: What People Ask',
    subtitle: 'Honest answers · Wellness sessions only',
    intro:
      'Inflammation is one of the most common search terms connected to PEMF. If you found this page while researching, you are not alone — and you deserve a straight answer without hype. Here is what PEMF Nashville offers, what we do not claim, and how to get your specific questions answered.',
    sections: [
      {
        heading: 'Why this topic comes up so often',
        paragraphs: [
          'Many people living with ongoing discomfort, stiffness after activity, or general body tension research PEMF as part of their wellness exploration. Scientific research in this area is ongoing, and PEMF is widely used as a non-invasive wellness modality — not as a substitute for medical diagnosis or treatment.',
          'PEMF Nashville offers wellness sessions. We do not make medical claims about inflammation or any other condition.',
        ],
      },
      {
        heading: 'What PEMF actually is',
        paragraphs: [
          'PEMF stands for Pulsed Electromagnetic Field. During a session, gentle pulsed electromagnetic fields are applied while you rest fully clothed. The experience is designed to be calming and restorative. Lisa Taylor, RN, conducts every session with professional training and awareness of your individual needs and contraindications.',
        ],
      },
      {
        heading: 'The right next step if you are researching',
        paragraphs: [
          'If inflammation or ongoing discomfort is part of why you are looking into PEMF, please keep your physician in the loop. PEMF can complement a wellness routine; it does not replace medical care.',
          'On a free consult, Lisa will answer your questions honestly — what PEMF is, what a session feels like, whether it may be appropriate for you, and where to book (Kinnection Clinic in Brentwood or in-home across the Nashville area).',
        ],
      },
      {
        heading: 'Disclaimer',
        paragraphs: [disclaimer],
      },
    ],
  },
  {
    slug: 'pemf-for-back-discomfort',
    title: 'PEMF for Back Discomfort | Nashville & Brentwood',
    metaDescription:
      'PEMF wellness sessions for back discomfort support in Nashville and Brentwood. Lisa Taylor, RN — in-home and office sessions. Book a free consult.',
    h1: 'PEMF for Back Discomfort',
    subtitle: 'Nashville · Brentwood · In-Home & Office Sessions',
    intro:
      'Back discomfort — whether from daily strain, long hours at a desk, physical work, or recovery after activity — is one of the most common reasons people explore wellness options. Many Nashville-area clients ask about PEMF for back-related tension and general discomfort. This page explains the wellness service Lisa offers and how sessions are structured.',
    sections: [
      {
        heading: 'What clients often describe',
        paragraphs: [
          'People mention tightness in the lower back, stiffness between the shoulders, or a general sense that their back "holds" tension — especially after sleep, travel, or demanding weeks. PEMF is a non-invasive wellness session, not a medical treatment, and results vary from person to person.',
          'Lisa listens to your goals, discusses any contraindications, and tailors applicator placement to the areas you want support for — always within the scope of a wellness service.',
        ],
      },
      {
        heading: 'Sessions at home or in Brentwood',
        paragraphs: [
          'In-home sessions ($150 · 60 minutes) let you relax in your own space — many clients with back discomfort prefer not to drive immediately before or after a session. Office sessions at Kinnection Clinic ($100 · 60 minutes) offer a private session room with easy Brentwood access and free parking.',
          'Lisa brings clinical experience as a Registered Nurse and certified Pulse PEMF practitioner to every session, whether at your home or the office.',
        ],
      },
      {
        heading: 'Working alongside your existing care',
        paragraphs: [
          'People often seek PEMF while recovering from physical strain or while working with their doctor or physical therapist. PEMF is a complement to medical care, never a replacement. If you have an implanted device, active bleeding, or other contraindications, Lisa will discuss those on your consult before booking.',
        ],
      },
      {
        heading: 'Disclaimer',
        paragraphs: [
          disclaimer,
          'Ready to learn more? Book a free consult — Lisa will walk you through what to expect with no obligation.',
        ],
      },
    ],
  },
]

export function getSeoTopic(slug: string): SeoTopic | undefined {
  return seoTopics.find((t) => t.slug === slug)
}
