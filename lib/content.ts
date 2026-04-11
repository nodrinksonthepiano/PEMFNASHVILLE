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

export const testimonials = [
  {
    id: 1,
    name: 'Roxanne',
    quote:
      'I have arthritis in my neck and during sleep my neck would have severe pain. I\'ve been having PEMF sessions for about six weeks now and I no longer have that pain in my neck! It really improved my sleep quality!',
  },
  {
    id: 2,
    name: 'Emma',
    quote:
      'I injured my back several months ago, I tried several things including physical therapy but nothing really helped. One session with Lisa and I felt the best I\'ve felt in a long time.',
  },
  {
    id: 3,
    name: 'Jeff',
    quote:
      'I was experiencing a lot of pain and tightness in my lower back and SI joint. After my session I had a noticeable reduction in tightness in my lower back, as well as increased mobility. My SI pain was 90% reduced. This is my first time with PEMF and I\'m pretty amazed!',
  },
  {
    id: 4,
    name: 'Ashley',
    quote: 'I feel amazing!! My hips have almost zero pain and I have so much energy. The machine is magic!',
  },
  {
    id: 5,
    name: 'Joely',
    quote:
      'As soon as I got up I could immediately feel the difference like my lower back finally released years of tension.',
  },
]

export const services = [
  {
    id: 'relief',
    title: 'Relief',
    description:
      'Targeted support for muscle and joint comfort. Clients report feeling more at ease in their bodies — less tension, more freedom of movement.',
    image: '/images/roxchair.jpeg',
    imageAlt: 'Client seated for an in-home PEMF session',
  },
  {
    id: 'recovery',
    title: 'Recovery',
    description:
      'A restorative experience after workouts, physical activity, or daily strain. Support your body\'s natural recovery process and recharge for what\'s next.',
    image: '/images/CLIENT2.JPG',
    imageAlt: 'PEMF session for muscle and joint comfort',
  },
  {
    id: 'recharge',
    title: 'Recharge',
    description:
      'Support recharge, stress relief, and a restored sense of balance. Clients often describe sessions as profoundly calming — a reset for both body and mind.',
    image: '/images/CLIENT1.JPG',
    imageAlt: 'Client relaxing during in-home PEMF session',
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
      'Sessions are designed to be comfortable and relaxing. You remain fully clothed while the PEMF applicator is placed on or near the body. Most clients feel a gentle pulsing sensation and report feeling deeply relaxed during and after the session. Sessions are conducted in your own home at your convenience.',
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
]

export const pricing = [
  {
    id: 'single',
    label: 'Single Session',
    price: '$125',
    sessions: '1 session',
    perSession: '$125/session',
    highlight: false,
    description: 'Perfect for trying PEMF for the first time.',
  },
  {
    id: 'four-pack',
    label: '4-Session Package',
    price: '$450',
    sessions: '4 sessions',
    perSession: '$112.50/session',
    highlight: true,
    badge: 'Most Popular',
    description: 'A complete introductory series — most clients notice cumulative benefits.',
    savings: 'Save $50',
  },
  {
    id: 'six-pack',
    label: '6-Session Package',
    price: '$600',
    sessions: '6 sessions',
    perSession: '$100/session',
    highlight: false,
    description: 'Committed to your wellness. Maximum value for regular support.',
    savings: 'Save $150',
  },
]
