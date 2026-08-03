export const siteConfig = {
  name: 'PEMF Nashville',
  practitioner: 'Lisa Taylor',
  credentials: 'RN, Certified Pulse PEMF Practitioner',
  tagline: 'Relief · Recover · Recharge',
  location: 'Nashville, TN',
  phone: '(615) 669-2391',
  phoneHref: 'tel:6156692391',
  smsHref: 'sms:6156692391',
  email: 'lisa@pemfnashville.com',
  emailHref: 'mailto:lisa@pemfnashville.com',
  calendly: 'https://calendly.com/pemfnashville/consult',
  venmo: 'https://venmo.com/u/Lisataylor_',
  instagram: 'https://www.instagram.com/pemfnashville/',
  facebook: 'https://www.facebook.com/pemfnashville',
}

/** Short labels for Calendly + SMS scheduling CTAs */
export const schedulingLinks = {
  bookConsult: 'Book a free consult',
  textToSchedule: 'text to schedule',
} as const

/** Office vs in-home session options — logistics copy (pricing details live in `pricing`) */
export const sessionLocations = [
  {
    id: 'office',
    title: 'Kinnection Clinic · Brentwood',
    headline: 'A private session room in Brentwood',
    price: '$100',
    duration: '60 minutes',
    description:
      'Easy to reach from I-65 and Franklin Road, with free parking on site. Book mornings, lunch breaks, or early evenings — whatever fits your week.',
  },
  {
    id: 'in-home',
    title: 'In-Home Sessions',
    headline: 'Lisa travels to you with the full setup',
    price: '$150',
    duration: '60 minutes',
    description:
      'Serving Nashville, Belle Meade, Green Hills, Franklin, Brentwood, and Bellevue. Ideal when comfort at home, mobility, or a tight schedule matters most.',
  },
] as const

/** Copy for fixed footer promo (The Land weekends) */
export const weekendLandPromo = {
  headline: 'Weekend mini-session pop-up',
  locationLine: 'The Land · Kingston Springs',
  hoursLine: 'Saturdays and Sundays from 11am–2pm',
  priceLine: '$30 · 20 minutes',
} as const

export const testimonials = [
  {
    id: 1,
    name: 'Roxanne',
    category: 'joint',
    quote:
      'I have arthritis in my neck and during sleep my neck would have severe pain. I\'ve been having PEMF sessions for about six weeks now and I no longer have that pain in my neck! It really improved my sleep quality!',
  },
  {
    id: 2,
    name: 'Emma',
    category: 'back',
    quote:
      'I injured my back several months ago, I tried several things including physical therapy but nothing really helped. One session with Lisa and I felt the best I\'ve felt in a long time.',
  },
  {
    id: 3,
    name: 'Jeff',
    category: 'back',
    quote:
      'I was experiencing a lot of pain and tightness in my lower back and SI joint. After my session I had a noticeable reduction in tightness in my lower back, as well as increased mobility. My SI pain was 90% reduced. This is my first time with PEMF and I\'m pretty amazed!',
  },
  {
    id: 4,
    name: 'Ashley',
    category: 'energy',
    quote: 'I feel amazing!! My hips have almost zero pain and I have so much energy. The machine is magic!',
  },
  {
    id: 5,
    name: 'Joely',
    category: 'back',
    quote:
      'As soon as I got up I could immediately feel the difference like my lower back finally released years of tension.',
  },
]

export const testimonialGroups = [
  {
    id: 'joint',
    heading: 'Joint & Arthritis Support',
    testimonialIds: [1],
  },
  {
    id: 'back',
    heading: 'Back & Recovery',
    testimonialIds: [2, 3, 5],
  },
  {
    id: 'energy',
    heading: 'Energy & Sleep',
    testimonialIds: [4],
    featured: {
      name: 'Beth',
      quote: 'My body exhaled and relaxed for the first time in months.',
    },
  },
] as const

export const services = [
  {
    id: 'relief',
    title: 'Relief',
    subhead: 'Muscle and joint discomfort support',
    description:
      'Targeted support for muscle and joint comfort. Clients report feeling more at ease in their bodies — less tension, more freedom of movement.',
    image: '/images/roxchair.jpeg',
    imageAlt: 'PEMF session for muscle and joint discomfort support in Nashville',
  },
  {
    id: 'recovery',
    title: 'Recovery',
    subhead: 'Workout and athletic recovery',
    description:
      'A restorative experience after workouts, physical activity, or daily strain. Support your body\'s natural recovery process and recharge for what\'s next.',
    image: '/images/CLIENT2.JPG',
    imageAlt: 'PEMF workout and athletic recovery session in Brentwood',
  },
  {
    id: 'recharge',
    title: 'Recharge',
    subhead: 'Stress, energy, and whole-body reset',
    description:
      'Support recharge, stress relief, and a restored sense of balance. Clients often describe sessions as profoundly calming — a reset for both body and mind.',
    image: '/images/CLIENT1.JPG',
    imageAlt: 'PEMF stress relief and whole-body reset session in Nashville',
  },
]

export const faqs = [
  {
    id: 1,
    question: 'What is PEMF and how does it work?',
    answer:
      'PEMF stands for Pulsed Electromagnetic Field. It is a non-invasive wellness experience that uses gentle, pulsed electromagnetic fields to support the body during a calming and restorative session. The technology has been studied for decades and is used by wellness practitioners worldwide.',
  },
  {
    id: 2,
    question: 'What should I expect during a session?',
    answer:
      'Sessions are designed to be comfortable and relaxing. You remain fully clothed while the PEMF applicator is placed on or near the body. Most clients feel a gentle pulsing sensation and report feeling deeply relaxed during and after the session. Sessions are available in your home or at Kinnection Clinic in Brentwood.',
  },
  {
    id: 3,
    question: 'How many sessions will I need?',
    answer:
      'Every individual is different. Some clients notice a difference after a single session, while others prefer a series for cumulative support. During your free consult, Lisa will discuss your goals and suggest a schedule that makes sense for you.',
  },
  {
    id: 4,
    question: 'What are the contraindications?',
    answer:
      'PEMF sessions are not recommended for individuals who are pregnant, have an implanted electrical device (such as a pacemaker, cochlear implant, insulin pump, or spinal cord stimulator), have active uncontrolled bleeding, or have a seizure disorder. Anyone with active cancer should consult their physician prior to booking. Please disclose all medical devices and conditions during your consult so Lisa can ensure this is the right fit for you.',
  },
  {
    id: 5,
    question: 'Is PEMF safe?',
    answer:
      'PEMF is a non-invasive wellness service with a strong safety record when used appropriately. Lisa is a Registered Nurse with clinical training, ensuring every session is conducted with professional care and awareness of your individual needs.',
  },
  {
    id: 6,
    question: 'Do you work with animals?',
    answer:
      'Yes! PEMF has been widely used in the equestrian world for horses, and Lisa also works with dogs. If you\'re interested in a session for your animal, mention it when you book your consult.',
  },
  {
    id: 7,
    question: 'How do I pay?',
    answer:
      'Payment is accepted via Venmo (@Lisataylor_) or Zelle. Payment is due at the time of service.',
  },
  {
    id: 8,
    question: 'What areas of Nashville do you serve?',
    answer:
      'Lisa is based in Bellevue and serves the greater Nashville area including Belle Meade, Green Hills, Brentwood, Franklin, and surrounding communities. Reach out to confirm your location.',
  },
  {
    id: 9,
    question: 'Do you have an office location?',
    answer:
      'Yes — Lisa sees clients at Kinnection Clinic in Brentwood, in addition to offering in-home sessions throughout the Nashville area. Office sessions are $100 for 60 minutes.',
  },
  {
    id: 10,
    question: 'What\'s the difference between an office session and an in-home session?',
    answer:
      'Both are full 60-minute sessions with the same equipment and the same care. In-home sessions are $150 and include Lisa traveling to you with everything needed, so you never have to leave home. Office sessions are $100 at Kinnection Clinic in Brentwood.',
  },
  {
    id: 11,
    question: 'What do people use PEMF for?',
    answer:
      'People come to PEMF for many different reasons. Common ones include general discomfort, muscle and joint stiffness, workout and athletic recovery, and simply wanting to feel more at ease in their body. Everyone\'s experience is different — Lisa will talk through your goals on the free consult.',
  },
  {
    id: 12,
    question: 'Can PEMF help with arthritis or joint stiffness?',
    answer:
      'Many people living with joint stiffness or arthritis seek out PEMF as part of their wellness routine. PEMF is a wellness service, not a medical treatment, and it isn\'t intended to diagnose or treat any condition. Lisa is happy to discuss whether a session makes sense for you.',
  },
  {
    id: 13,
    question: 'Is PEMF used for workout recovery?',
    answer:
      'Many athletes and active people use PEMF as part of a recovery routine after training, competition, or physical strain. Many clients book sessions specifically around their training schedule.',
  },
  {
    id: 14,
    question: 'What is PEMF used for after an injury?',
    answer:
      'People often seek PEMF while recovering from physical strain or while working with their doctor or physical therapist. PEMF is a complement to medical care, never a replacement.',
  },
  {
    id: 15,
    question: 'Does PEMF help with inflammation?',
    answer:
      'Inflammation is one of the most common reasons people research PEMF. Research in this area is ongoing. PEMF Nashville offers wellness sessions and does not make medical claims — Lisa will answer your questions honestly on a free consult.',
  },
]

export type PricingTier = {
  id: string
  label: string
  price: string
  sessions: string
  perSession: string
  highlight: boolean
  description: string
  badge?: string
  savings?: string
}

export const pricing: PricingTier[] = [
  {
    id: 'office',
    label: 'Office Session at Kinnection Clinic',
    price: '$100',
    sessions: '60 minutes',
    perSession: 'Kinnection Clinic · Brentwood',
    highlight: false,
    description: 'Single office visit · 60 minutes · Kinnection Clinic, Brentwood.',
  },
  {
    id: 'in-home',
    label: 'In-Home Session',
    price: '$150',
    sessions: '60 minutes',
    perSession: 'Lisa comes to you',
    highlight: true,
    description: 'Single in-home visit · 60 minutes. Four-session package ($540) listed below.',
  },
]

export type InHomePackage = {
  id: string
  label: string
  price: string
  sessions: string
  perSession: string
  description: string
}

/** In-home session packages (office sessions sold individually only) */
export const inHomePackages: InHomePackage[] = [
  {
    id: 'in-home-four-pack',
    label: 'Four In-Home Sessions',
    price: '$540',
    sessions: '4 in-home sessions',
    perSession: '$135 each',
    description: 'Four in-home visits · $135 per session · paid as a package.',
  },
]
