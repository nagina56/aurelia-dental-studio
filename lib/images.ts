/**
 * Image manifest.
 *
 * Every entry below was resolved against the Pexels CDN and confirmed to
 * return HTTP 200. The `alt` text is descriptive rather than decorative
 * because each image carries meaning in its section.
 *
 * To swap these for a client's own photography, replace the `src` values with
 * your own paths (e.g. `/images/hero.jpg`) and add a `localPatterns` entry in
 * next.config.mjs if you move off the Pexels host.
 */

export type Img = {
  /** Pexels photo id — used to build the CDN url. */
  id: number;
  alt: string;
};

/**
 * `?auto=compress&cs=tinysrgb` is the origin's own encoder choice, not a resize.
 *
 * `&w=` IS baked in, and it has to be. These Pexels originals are 1.2–5 MB each;
 * without a width bound the optimiser downloads the full-resolution file on every
 * single request and re-encodes it, which overruns its internal timeout and
 * returns HTTP 500 — which is what left every image box blank. Capping the source
 * at 1920px wide drops the hero original from ~3.4 MB to ~210 KB (a 16x
 * reduction) while still handing `next/image` more pixels than any viewport in
 * this layout asks for, so its own generated srcset is unaffected.
 */
export const img = (i: Img) =>
  `https://images.pexels.com/photos/${i.id}/pexels-photo-${i.id}.jpeg?auto=compress&cs=tinysrgb&w=1920`;

/* --- Clinic interiors & equipment ---------------------------------------- */

export const clinicInteriorModern: Img = {
  id: 38055771,
  alt: 'Spacious modern dental treatment room with a designer chair, warm timber finishes and soft daylight',
};

export const clinicInteriorHighTech: Img = {
  id: 9957423,
  alt: 'High-tech dental chair and equipment in a sleek, contemporary clinic room',
};

export const clinicInteriorBright: Img = {
  id: 9062525,
  alt: 'Bright dental studio interior with modern equipment and full-height windows',
};

export const clinicInteriorChair: Img = {
  id: 4269264,
  alt: 'Contemporary dental chair positioned in a calm, uncluttered clinic room',
};

export const clinicInteriorMinimal: Img = {
  id: 6812453,
  alt: 'Minimalist dental clinic interior featuring a treatment chair and equipment',
};

export const clinicInteriorClean: Img = {
  id: 6812480,
  alt: 'Clean modern dental office interior with advanced equipment and a dental chair',
};

export const clinicImaging: Img = {
  id: 6627381,
  alt: 'Dentist reviewing digital dental imaging with a patient in a modern clinic',
};

/* --- Care & treatment ---------------------------------------------------- */

export const careCheckup: Img = {
  id: 4971512,
  alt: 'Dentist performing a gentle check-up on a seated patient using precision instruments',
};

export const carePrecision: Img = {
  id: 11999471,
  alt: 'Clinician in gloves using fine dental instruments during a careful procedure',
};

export const careConsultation: Img = {
  id: 3845625,
  alt: 'A relaxed patient smiling while receiving a routine dental check-up',
};

export const careExamination: Img = {
  id: 5622232,
  alt: 'Dentist conducting a dental examination with the patient comfortably seated',
};

export const careGentle: Img = {
  id: 5622041,
  alt: 'A dentist reassuring an older patient during a gentle examination',
};

export const careRadiograph: Img = {
  id: 18524124,
  alt: 'Dentist examining a patient with a dental radiograph visible behind them',
};

export const careRestorative: Img = {
  id: 6627457,
  alt: 'Close view of a dentist in gloves examining a patient during treatment',
};

export const dentistPortraitCalm: Img = {
  id: 17792882,
  alt: 'Confident dentist in a dental practice, standing with arms folded',
};

/* --- Clinician portraits ------------------------------------------------- */

export const portraitFemaleClinician: Img = {
  id: 5355860,
  alt: 'Smiling female dentist in a white uniform, photographed in a modern dental clinic',
};

export const portraitMaleClinician: Img = {
  id: 31842729,
  alt: 'Male dentist in a white coat smiling confidently against a muted green backdrop',
};

export const portraitOrthodontist: Img = {
  id: 31017709,
  alt: 'Smiling female dentist in a clinical uniform offering dental services',
};

export const portraitClinicianClinic: Img = {
  id: 6627836,
  alt: 'Portrait of a smiling dental professional inside the practice',
};

export const portraitClinicianStudio: Img = {
  id: 19963166,
  alt: 'Smiling dental professional in a white coat and glasses',
};

export const portraitClinicianMale: Img = {
  id: 7578806,
  alt: 'Smiling male clinician in a white coat during a warm consultation',
};

/* --- Precision detail ---------------------------------------------------- */

export const detailSterile: Img = {
  id: 6502336,
  alt: 'Sterile dental instruments arranged neatly in a modern clinic setting',
};

export const detailTray: Img = {
  id: 4687361,
  alt: 'Fine dental instruments laid out on a treatment tray',
};

export const detailWorkstation: Img = {
  id: 10820367,
  alt: 'A precision dental instrument resting on a clinician’s workstation',
};

export const detailSterilisation: Img = {
  id: 6627664,
  alt: 'Clinician loading a sterilisation autoclave, highlighting strict hygiene protocol',
};

export const detailHolder: Img = {
  id: 6812481,
  alt: 'Dental instruments organised upright in a clinical holder',
};

/* --- Aligners & orthodontics --------------------------------------------- */

export const alignerInHand: Img = {
  id: 28470229,
  alt: 'A patient holding a clear, transparent aligner up to the light',
};

export const alignerBraces: Img = {
  id: 6528907,
  alt: 'Dentist carefully examining orthodontic braces during a treatment appointment',
};

export const alignerSmile: Img = {
  id: 4636175,
  alt: 'Young woman with braces smiling openly at the camera',
};

/* --- Smiles -------------------------------------------------------------- */

export const smileCloseUp: Img = {
  id: 7298633,
  alt: 'Close-up of a genuine smile with healthy, even teeth',
};

export const smileLipstick: Img = {
  id: 3762453,
  alt: 'Studio close-up of a bright smile with red lipstick',
};

export const smileNatural: Img = {
  id: 2362887,
  alt: 'Warm, friendly portrait of a woman smiling',
};

export const smileConfident: Img = {
  id: 35385200,
  alt: 'Confident woman smiling against a soft neutral background',
};

export const smileGolden: Img = {
  id: 36116892,
  alt: 'Portrait of a woman smiling in golden-hour natural light',
};

export const smileProfessional: Img = {
  id: 8171191,
  alt: 'Professional portrait of a woman smiling with calm confidence',
};

/* --- Reception & atmosphere ---------------------------------------------- */

export const receptionElegant: Img = {
  id: 5157828,
  alt: 'Elegant reception area with a designer desk and warm ambient lighting',
};

export const receptionSpacious: Img = {
  id: 6758532,
  alt: 'Spacious reception lounge with soft seating and floor-to-ceiling windows',
};

export const receptionAmbient: Img = {
  id: 14036272,
  alt: 'Calm reception lounge with sculptural lighting and greenery',
};
