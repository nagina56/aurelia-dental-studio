/**
 * All clinic content for the Aurelia Dental Studio portfolio demo.
 *
 * EVERYTHING in this file is fictional. Aurelia Dental Studio is not a real
 * practice. The clinicians, patients, testimonials, case studies, statistics,
 * addresses and phone numbers are invented for demonstration, and the imagery
 * is licensed stock photography standing in for a real clinic's own photos.
 */

import type { Img } from './images';
import {
  alignerInHand,
  alignerSmile,
  careCheckup,
  careConsultation,
  careExamination,
  careGentle,
  carePrecision,
  careRadiograph,
  careRestorative,
  clinicImaging,
  clinicInteriorBright,
  clinicInteriorChair,
  clinicInteriorClean,
  clinicInteriorHighTech,
  clinicInteriorMinimal,
  clinicInteriorModern,
  detailHolder,
  detailSterile,
  detailSterilisation,
  detailTray,
  detailWorkstation,
  dentistPortraitCalm,
  portraitClinicianStudio,
  portraitFemaleClinician,
  portraitMaleClinician,
  portraitOrthodontist,
  receptionAmbient,
  receptionElegant,
  receptionSpacious,
  smileCloseUp,
  smileConfident,
  smileGolden,
  smileLipstick,
  smileNatural,
  smileProfessional,
} from './images';

export const SITE = {
  name: 'Aurelia Dental Studio',
  shortName: 'Aurelia',
  tagline: 'Private dental care, reimagined.',
  /** Used for canonical URLs and Open Graph. Replace with the real domain. */
  url: 'https://aurelia-dental-studio.example',
  locale: 'en_GB',
  phone: '+44 20 7946 0128',
  phoneHref: '+442079460128',
  email: 'studio@aureliadental.example',
  address: {
    line1: '18 Hartley Row',
    line2: 'Notting Hill Gate',
    city: 'London',
    postcode: 'W11 3AR',
    country: 'United Kingdom',
  },
  hours: [
    { days: 'Monday – Thursday', time: '08:30 – 19:00' },
    { days: 'Friday', time: '08:30 – 17:00' },
    { days: 'Saturday', time: '09:00 – 14:00' },
    { days: 'Sunday', time: 'Closed' },
  ],
  social: [
    { label: 'Instagram', href: 'https://instagram.com/', handle: '@aureliadental' },
    { label: 'LinkedIn', href: 'https://linkedin.com/', handle: '/aurelia-dental-studio' },
    { label: 'Pinterest', href: 'https://pinterest.com/', handle: '/aureliadental' },
  ],
} as const;

export const DEMO_NOTE =
  'Portfolio demonstration — imagery and cases are fictional.';

export const TESTIMONIAL_NOTE = 'Fictional testimonial — portfolio demo.';

/* --- Navigation ---------------------------------------------------------- */

export type NavItem = { label: string; href: string };

export const NAV: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Smile Gallery', href: '/gallery' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export const FOOTER_NAV: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About & Dentists', href: '/about' },
  { label: 'Smile Gallery', href: '/gallery' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
  { label: 'Book Appointment', href: '/appointment' },
];

/* --- Services ------------------------------------------------------------ */

export type Service = {
  slug: string;
  index: string;
  name: string;
  short: string;
  intro: string;
  treatments: string[];
  benefits: string[];
  image: Img;
  imageAlt: string;
  meta: { label: string; value: string }[];
};

export const SERVICES: Service[] = [
  {
    slug: 'cosmetic-dentistry',
    index: '01',
    name: 'Cosmetic Dentistry',
    short: 'Subtle refinements designed to look entirely natural.',
    intro:
      'We treat the smile as a composition rather than a set of separate teeth. Shade, proportion, symmetry and the way light moves across enamel are planned together, so the result reads as your own face — only better resolved.',
    treatments: [
      'Porcelain veneers and minimal-preparation restorations',
      'Composite bonding for shape and symmetry',
      'Professional teeth whitening',
      'Digital smile design and mock-ups before treatment begins',
    ],
    benefits: [
      'A result planned on screen before it is placed',
      'Shade-matched to your natural enamel',
      'Minimal removal of healthy tooth structure',
    ],
    image: smileLipstick,
    imageAlt: 'Studio close-up of a bright, even smile after cosmetic treatment',
    meta: [
      { label: 'Typical visits', value: '2 – 4' },
      { label: 'Results visible', value: 'Immediately' },
    ],
  },
  {
    slug: 'dental-implants',
    index: '02',
    name: 'Dental Implants',
    short: 'Precise, permanently anchored replacement teeth.',
    intro:
      'Implant treatment is planned from three-dimensional scans, not guesswork. We map bone density and nerve position before a single drill is used, then place the fixture guided by the same digital plan that designed the final tooth.',
    treatments: [
      'Single tooth replacement with a ceramic crown',
      'Multiple implants for a full arch restoration',
      'Bone grafting and sinus lift where required',
      'All-on-four and immediate-load protocols',
    ],
    benefits: [
      'Preserves adjacent healthy teeth',
      'Built to last decades with proper maintenance',
      'Restores comfortable chewing and natural speech',
    ],
    image: clinicImaging,
    imageAlt: 'Clinician planning implant placement using digital imaging',
    meta: [
      { label: 'Healing period', value: '3 – 6 months' },
      { label: 'Longevity', value: '15+ years' },
    ],
  },
  {
    slug: 'clear-aligners',
    index: '03',
    name: 'Clear Aligners',
    short: 'Discreet orthodontic treatment without fixed braces.',
    intro:
      'A sequence of removable, transparent aligners moves your teeth in small, measured increments. You wear each set for around twenty-two hours a day, and because the trays are nearly invisible most people are unaware you are in treatment.',
    treatments: [
      'Digital scan and 3D outcome simulation',
      'Refinement aligners for final detailing',
      'Retainer programmes to hold your result',
      'Interceptive treatment for younger patients',
    ],
    benefits: [
      'Removable for eating, drinking and cleaning',
      'No brackets, wires or sharp edges',
      'Shorter appointments and fewer visits',
    ],
    image: alignerInHand,
    imageAlt: 'Patient holding a clear removable aligner against the light',
    meta: [
      { label: 'Daily wear', value: '20 – 22 hours' },
      { label: 'Treatment', value: '6 – 18 months' },
    ],
  },
  {
    slug: 'preventive-dentistry',
    index: '04',
    name: 'Preventive Dentistry',
    short: 'The quiet discipline of keeping problems from starting.',
    intro:
      'Most dental work exists because something was allowed to go unaddressed. Preventive care is unglamorous by design: precise assessments, early intervention and hygiene coaching that respects the mouth you already have.',
    treatments: [
      'Comprehensive oral health assessment',
      'Scale and polish with airflow polishing',
      'Gum health therapy and periodontal monitoring',
      'Fluoride, fissure sealing and remineralisation',
    ],
    benefits: [
      'Fewer invasive procedures over a lifetime',
      'Early detection of decay and gum disease',
      'A baseline for any future restorative work',
    ],
    image: careExamination,
    imageAlt: 'Routine oral health assessment with precise instruments',
    meta: [
      { label: 'Visit length', value: '45 – 60 min' },
      { label: 'Recommended', value: 'Every 6 months' },
    ],
  },
  {
    slug: 'emergency-dentistry',
    index: '05',
    name: 'Emergency Dentistry',
    short: 'Calm, fast care when something hurts.',
    intro:
      'Dental pain is genuinely distressing, and waiting days for relief is not acceptable. We reserve same-day slots specifically for emergencies, and you will speak to a clinician before you set foot in the practice.',
    treatments: [
      'Same-day emergency appointments',
      'Pain relief and immediate stabilisation',
      'Broken, chipped or dislodged tooth repair',
      'Emergency root canal and trauma treatment',
    ],
    benefits: [
      'Seen within 24 hours in most cases',
      'Pain managed from the first conversation',
      'Definitive treatment planned up front',
    ],
    image: careRestorative,
    imageAlt: 'Emergency assessment of a patient in discomfort',
    meta: [
      { label: 'Response', value: 'Same day' },
      { label: 'Slots held daily', value: 'Yes' },
    ],
  },
  {
    slug: 'smile-makeovers',
    index: '06',
    name: 'Smile Makeovers',
    short: 'A complete plan across aesthetics, health and function.',
    intro:
      'A makeover is not a single procedure — it is a sequence, ordered carefully so each step makes the next one more predictable. Alignment is corrected before shape, and gum health is settled before any ceramic is placed.',
    treatments: [
      'Digital smile design consultation',
      'Orthodontic alignment as a first phase',
      'Gum contouring and rebalancing',
      'Veneers, bonding or whitening to finish',
    ],
    benefits: [
      'One clinician leads the whole sequence',
      'Mock-up to review before anything is committed',
      'Designed to age well, not just photograph well',
    ],
    image: smileConfident,
    imageAlt: 'Confident smile following a planned smile makeover',
    meta: [
      { label: 'Phases', value: '2 – 4' },
      { label: 'Planning', value: 'Digital mock-up' },
    ],
  },
];

/* --- Featured services (home) ------------------------------------------- */

export const FEATURED_SERVICES = [
  {
    name: 'Cosmetic Dentistry',
    href: '/services#cosmetic-dentistry',
    text: 'Veneers, bonding and whitening planned to look like your own teeth.',
    image: smileLipstick,
    imageAlt: 'Close-up of an even, bright smile after cosmetic work',
  },
  {
    name: 'Dental Implants',
    href: '/services#dental-implants',
    text: 'Digitally planned fixtures that replace a tooth without disturbing its neighbours.',
    image: clinicImaging,
    imageAlt: 'Digital implant planning displayed on a clinic monitor',
  },
  {
    name: 'Clear Aligners',
    href: '/services#clear-aligners',
    text: 'Near-invisible trays, removable and mapped in 3D before you start.',
    image: alignerInHand,
    imageAlt: 'A clear aligner held up to the light',
  },
  {
    name: 'Preventive Dentistry',
    href: '/services#preventive-dentistry',
    text: 'The unhurried care that keeps larger interventions unnecessary.',
    image: careExamination,
    imageAlt: 'Routine oral health assessment',
  },
  {
    name: 'Emergency Dental Care',
    href: '/services#emergency-dentistry',
    text: 'Reserved same-day slots, and a clinician on the phone first.',
    image: careRestorative,
    imageAlt: 'Urgent dental assessment being carried out',
  },
  {
    name: 'Smile Makeovers',
    href: '/services#smile-makeovers',
    text: 'A phased plan that puts alignment and gum health before aesthetics.',
    image: smileConfident,
    imageAlt: 'Confident finished smile after a full makeover plan',
  },
];

/* --- Approach pillars ---------------------------------------------------- */

export const APPROACH = [
  {
    index: '01',
    title: 'Personalized Treatment',
    text: 'No two mouths are symmetrical, so no two plans are. Your consultation is unhurried, and every option is presented with what it costs you in time and maintenance.',
  },
  {
    index: '02',
    title: 'Modern Technology',
    text: 'Intraoral scanning, 3D treatment planning and digital imaging replace guesswork with something you can see before it is done.',
  },
  {
    index: '03',
    title: 'Comfort-First Care',
    text: 'Long appointments, topical numbing before any injection, and a stop signal you can use at any moment. Anxiety is a clinical fact, not a character flaw.',
  },
];

export const WHY_AURELIA = [
  {
    title: 'Personalized Consultations',
    text: 'A full hour with your clinician, imaging included, before any decision is made.',
    icon: 'compass',
  },
  {
    title: 'Digital Smile Planning',
    text: 'Your proposed result is simulated and reviewed together before treatment begins.',
    icon: 'scan',
  },
  {
    title: 'Comfort-Focused Experience',
    text: 'Calibrated appointments, gentle technique and topical numbing before any injection.',
    icon: 'hands',
  },
  {
    title: 'Modern Treatment Technology',
    text: 'Intraoral scanners, guided surgery and same-day ceramic fabrication.',
    icon: 'spark',
  },
];

/* --- Team ---------------------------------------------------------------- */

export type Clinician = {
  name: string;
  specialty: string;
  bio: string;
  credentials: string[];
  image: Img;
  imageAlt: string;
};

export const TEAM: Clinician[] = [
  {
    name: 'Dr. Amelia Hart',
    specialty: 'Cosmetic & Restorative Dentistry',
    bio: 'Leads the studio’s aesthetic work, from first consultation through to the final shade check. Known for refusing to place a veneer a patient has not seen modelled first.',
    credentials: ['BDS MFDS RCS(Eng)', 'Aesthetic Dentistry Certificate', 'Fictional demo profile'],
    image: portraitFemaleClinician,
    imageAlt: 'Smiling female dentist in a white uniform in a modern dental clinic',
  },
  {
    name: 'Dr. Daniel Reed',
    specialty: 'Implant & Restorative Dentistry',
    bio: 'Places implants guided entirely by 3D planning, and handles the complex full-arch cases the studio takes on. Twenty years of surgical dentistry, taught rather than inherited.',
    credentials: ['BDS MJDF RCS(Eng)', 'Implantology Fellowship', 'Fictional demo profile'],
    image: portraitMaleClinician,
    imageAlt: 'Male dentist in a white coat smiling against a muted green backdrop',
  },
  {
    name: 'Dr. Sofia Bennett',
    specialty: 'Orthodontics & Clear Aligners',
    bio: 'Runs the aligner programme, including the refinements that decide whether a case photographs well or simply works. Particular interest in adult treatment finished discreetly.',
    credentials: ['BDS MOrth RCS(Eng)', 'Clear Aligner Certified', 'Fictional demo profile'],
    image: portraitOrthodontist,
    imageAlt: 'Smiling female dentist in a clinical uniform',
  },
];

export const TEAM_EXTENDED: Clinician[] = [
  ...TEAM,
  {
    name: 'Dr. Priya Raman',
    specialty: 'Periodontics & Oral Health',
    bio: 'The quiet foundation of the studio. Manages gum health and the bone-preservation work that decides how long an implant will actually last.',
    credentials: ['BDS MPeriod RCS(Eng)', 'Periodontal Practice Certificate', 'Fictional demo profile'],
    image: portraitClinicianStudio,
    imageAlt: 'Smiling dental professional in a white coat and glasses',
  },
  {
    name: 'Dr. Marcus Vale',
    specialty: 'General & Emergency Dentistry',
    bio: 'Holds the emergency list and keeps the restorative side of the practice grounded in what is genuinely necessary rather than what is most profitable.',
    credentials: ['BDS', 'Restorative Practice Certificate', 'Fictional demo profile'],
    image: dentistPortraitCalm,
    imageAlt: 'Confident dentist standing in a dental practice',
  },
  {
    name: 'Elena Marsh',
    specialty: 'Patient Care Director',
    bio: 'The first voice you hear and the one who remembers your preferences between visits. Runs the comfort protocols and the follow-up nobody else thinks to check.',
    credentials: ['Patient Experience Lead', 'Fictional demo profile'],
    image: receptionElegant,
    imageAlt: 'Elegant reception area at the practice',
  },
];

/* --- Smile gallery ------------------------------------------------------- */

export type GalleryCase = {
  title: string;
  category: 'Smile Design' | 'Cosmetic' | 'Aligners' | 'Restorative';
  treatment: string;
  duration: string;
  note: string;
  image: Img;
  imageAlt: string;
  tall?: boolean;
};

export const GALLERY_CATEGORIES = [
  'All Work',
  'Smile Design',
  'Cosmetic',
  'Aligners',
  'Restorative',
] as const;

export const GALLERY: GalleryCase[] = [
  {
    title: 'Full smile redesign',
    category: 'Smile Design',
    treatment: 'Digital planning, alignment then porcelain veneers',
    duration: '11 months',
    note: 'Fictional case — imagery is licensed stock, not a real patient.',
    image: smileCloseUp,
    imageAlt: 'Even, natural-looking smile following a full redesign',
    tall: true,
  },
  {
    title: 'Single tooth ceramic',
    category: 'Cosmetic',
    treatment: 'One hand-layered veneer, shade-matched to neighbours',
    duration: '3 weeks',
    note: 'Fictional case — imagery is licensed stock, not a real patient.',
    image: smileLipstick,
    imageAlt: 'Studio close-up of a bright smile showing ceramic work',
  },
  {
    title: 'Discreet alignment',
    category: 'Aligners',
    treatment: 'Clear aligner therapy with two refinement rounds',
    duration: '14 months',
    note: 'Fictional case — imagery is licensed stock, not a real patient.',
    image: alignerSmile,
    imageAlt: 'Patient in orthodontic treatment smiling openly',
  },
  {
    title: 'Implant crown replacement',
    category: 'Restorative',
    treatment: 'Guided implant placement with a ceramic crown',
    duration: '5 months',
    note: 'Fictional case — imagery is licensed stock, not a real patient.',
    image: careConsultation,
    imageAlt: 'Patient smiling comfortably after restorative treatment',
    tall: true,
  },
  {
    title: 'Composite bonding',
    category: 'Cosmetic',
    treatment: 'Direct bonding to rebalance shape and symmetry',
    duration: '2 appointments',
    note: 'Fictional case — imagery is licensed stock, not a real patient.',
    image: smileNatural,
    imageAlt: 'Warm portrait of a smile after composite bonding',
  },
  {
    title: 'Gum rebalancing',
    category: 'Smile Design',
    treatment: 'Gum contouring prior to cosmetic restoration',
    duration: '6 weeks',
    note: 'Fictional case — imagery is licensed stock, not a real patient.',
    image: smileGolden,
    imageAlt: 'Natural smile photographed in warm evening light',
  },
  {
    title: 'Full arch restoration',
    category: 'Restorative',
    treatment: 'Four guided implants with an immediate temporary arch',
    duration: '7 months',
    note: 'Fictional case — imagery is licensed stock, not a real patient.',
    image: careGentle,
    imageAlt: 'Clinician reassuring a patient during restorative care',
  },
  {
    title: 'Aligner + whitening',
    category: 'Aligners',
    treatment: 'Alignment first, then whitening to finalise shade',
    duration: '10 months',
    note: 'Fictional case — imagery is licensed stock, not a real patient.',
    image: smileProfessional,
    imageAlt: 'Professional portrait of a confident finished smile',
    tall: true,
  },
  {
    title: 'Emergency repair',
    category: 'Restorative',
    treatment: 'Same-day fractured tooth rebuild with bonded composite',
    duration: '1 day',
    note: 'Fictional case — imagery is licensed stock, not a real patient.',
    image: careRadiograph,
    imageAlt: 'Dentist assessing a damaged tooth with radiography',
  },
];

/* --- Testimonials -------------------------------------------------------- */

export type Testimonial = {
  quote: string;
  name: string;
  treatment: string;
  image: Img;
  imageAlt: string;
};

export const FEATURED_TESTIMONIAL: Testimonial = {
  quote:
    'I had spent years putting off a consultation because I assumed I would be told I needed far more than I did. Nobody sold me anything. Dr. Hart showed me a simulation of two options, we talked for an hour, and I left with a written plan I could take away and think about. I came back three weeks later and that was that.',
  name: 'Eleanor Whitfield',
  treatment: 'Cosmetic consultation → veneers',
  image: smileNatural,
  imageAlt: 'Portrait of a woman with a warm smile',
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'The aligners were genuinely invisible. I gave a presentation in week six and nobody noticed. Being able to take them out for lunch was the part I had not appreciated until I had it.',
    name: 'Marcus Adeyemi',
    treatment: 'Clear aligners',
    image: smileConfident,
    imageAlt: 'Confident man smiling against a neutral background',
  },
  {
    quote:
      'I chipped a front tooth on a Friday morning and expected a two-week wait. I was seen that afternoon, it was fixed before I left, and it still looks better than the original.',
    name: 'Priya Raghunathan',
    treatment: 'Emergency repair',
    image: smileGolden,
    imageAlt: 'Woman smiling in warm natural light',
  },
  {
    quote:
      'What surprised me was being told what the implant would cost over twenty years, not just this year. Nobody had ever put it that way. That honesty is why I signed off on it.',
    name: 'Thomas Lindqvist',
    treatment: 'Dental implant',
    image: smileProfessional,
    imageAlt: 'Professional portrait of a woman smiling',
  },
  {
    quote:
      'I have dental anxiety that is not rational and not going away. Nobody here made me feel like a problem for having it. There is a stop signal, it is respected immediately, and the appointments are long enough that nothing is rushed.',
    name: 'Sofia Marchetti',
    treatment: 'Preventive care & hygiene',
    image: smileCloseUp,
    imageAlt: 'Close-up of a relaxed, genuine smile',
  },
  {
    quote:
      'My dentist in my home town told me for years that my bite was fine as it was. Dr. Reed showed me a scan and pointed out something I would have lived with indefinitely. Two aligners, done.',
    name: 'Daniel Okonkwo',
    treatment: 'Digital planning & aligners',
    image: smileLipstick,
    imageAlt: 'Bright smile in a studio portrait',
  },
  {
    quote:
      'The difference is the hour. I have never been given a full hour with a dentist who was not selling me anything. The plan was printed, itemised, and I was told exactly what to expect at each stage.',
    name: 'Hannah Bergström',
    treatment: 'Smile makeover',
    image: smileNatural,
    imageAlt: 'Warm portrait of a smiling woman',
  },
];

/* --- FAQ ----------------------------------------------------------------- */

export type Faq = { question: string; answer: string };

export const FAQS: Faq[] = [
  {
    question: 'What happens during a first consultation?',
    answer:
      'A first consultation runs a full hour and is deliberately non-invasive. We take digital scans and photographs, examine your teeth and gums, and — where useful — take low-dose radiographs. You then sit down with your clinician and the images on screen, and we walk through what is actually present, what could be addressed, and what genuinely does not need doing. You leave with a written plan and an itemised fee. There is no obligation to proceed, and no treatment happens on the day unless you have already asked for it.',
  },
  {
    question: 'Do you offer cosmetic dentistry?',
    answer:
      'Yes. We offer porcelain veneers, minimal-preparation restorations, composite bonding, professional teeth whitening and full smile design. Every aesthetic case is planned digitally and shown to you as a simulation before anything is placed, so you can see the proposed result and make an informed decision about whether you want it.',
  },
  {
    question: 'How do clear aligners work?',
    answer:
      'We scan your teeth with an intraoral scanner and use that data to map the movement of each tooth across a series of clear, removable trays. You wear each set for around twenty-two hours a day and change to the next set every one to two weeks, moving your teeth in small measured increments. Most cases need one or two refinement rounds at the end, after which you move into a retainer programme to hold the result. Appointments are shorter and less frequent than with fixed braces, and because the trays are removed you can eat, drink and clean normally.',
  },
  {
    question: 'Do you offer emergency appointments?',
    answer:
      'We do. We hold same-day slots back specifically for emergencies, and you will speak to a clinician on the phone before you set foot in the practice — often enough to manage pain with over-the-counter medication in the meantime. If you are in severe pain, have facial swelling, a fever, or a tooth that has been knocked out, call us immediately rather than waiting for the next free slot.',
  },
  {
    question: 'What payment options are available?',
    answer:
      'We take major credit and debit cards, and offer an interest-free payment plan spread over six or twelve months for treatment above a certain value. We also accept bank transfer. A full itemised fee is provided in writing before treatment begins, so there are no additions later. Invoicing is available for employer-paid treatment.',
  },
  {
    question: 'Do you treat children?',
    answer:
      'We treat patients from around age seven upwards, focused on prevention, fluoride, fissure sealing and early intervention for bite problems. For patients under eighteen, a parent or guardian attends the appointment, and we schedule longer slots so nothing feels rushed. Complex orthodontic treatment for children is coordinated with the orthodontist rather than handled in general practice.',
  },
  {
    question: 'What should I bring to my appointment?',
    answer:
      'A list of any medication you currently take, your dental insurance or plan details if you have them, and — if you have had treatment elsewhere recently — any radiographs or notes they can provide. If you are a new patient, booking in as a new patient gives us additional time so we are not running behind.',
  },
  {
    question: 'How can I request an appointment?',
    answer:
      'Use the appointment form on this site, which sends your details straight through to our practice management system, or call the studio directly during opening hours. We aim to respond to every written request within one working day. If your request is urgent — pain, swelling or a knocked-out tooth — please call rather than using the form.',
  },
];

/* --- Page hero imagery --------------------------------------------------- */

export const PAGE_IMAGES = {
  services: { image: clinicInteriorHighTech, imageAlt: 'High-tech dental chair and equipment in a sleek, contemporary clinic room' },
  about: { image: clinicInteriorModern, imageAlt: 'Spacious modern dental treatment room with a designer chair and soft daylight' },
  gallery: { image: smileCloseUp, imageAlt: 'Close-up of an even, natural smile' },
  testimonials: { image: receptionSpacious, imageAlt: 'Spacious reception lounge with soft seating and floor-to-ceiling windows' },
  faq: { image: detailSterile, imageAlt: 'Sterile dental instruments arranged neatly in a modern clinic' },
  contact: { image: receptionElegant, imageAlt: 'Elegant reception area with a designer desk and warm ambient lighting' },
  appointment: { image: clinicInteriorBright, imageAlt: 'Bright dental studio interior with modern equipment and full-height windows' },
} as const;

export const STUDIO_IMAGES = {
  bright: clinicInteriorBright,
  chair: clinicInteriorChair,
  clean: clinicInteriorClean,
  minimal: clinicInteriorMinimal,
  ambient: receptionAmbient,
  tray: detailTray,
  holder: detailHolder,
  workstation: detailWorkstation,
  sterilisation: detailSterilisation,
  precision: carePrecision,
  checkup: careCheckup,
  imaging: clinicImaging,
} as const;

export { smileCloseUp, careCheckup };
