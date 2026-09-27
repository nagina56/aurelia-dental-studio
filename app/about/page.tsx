import type { Metadata } from 'next';
import { PageHero } from '@/components/site/PageHero';
import { CtaBand } from '@/components/site/CtaBand';
import { Reveal } from '@/components/ui/Reveal';
import { SmartImage } from '@/components/ui/SmartImage';
import { ArrowRight } from '@/components/ui/Icons';
import Link from 'next/link';
import {
  APPROACH,
  DEMO_NOTE,
  PAGE_IMAGES,
  STUDIO_IMAGES,
  TEAM_EXTENDED,
  WHY_AURELIA,
} from '@/lib/site';

export const metadata: Metadata = {
  title: 'About & Dentists',
  description:
    'Meet the clinicians behind Aurelia Dental Studio — a private London practice built around unhurried consultations, digital planning and comfort-first care.',
  alternates: { canonical: '/about' },
};

const STATS = [
  { value: '60 min', label: 'Standard first consultation' },
  { value: '6', label: 'Clinicians across the studio' },
  { value: '100%', label: 'Cases planned digitally first' },
  { value: '15+ yrs', label: 'Typical implant longevity' },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About The Studio"
        title="A practice built around the consultation."
        text="Aurelia exists because good dentistry should start with being told the truth, not a sales pitch. Everything here follows from that."
        image={PAGE_IMAGES.about.image}
        imagePriority
        crumbs={[{ label: 'About' }]}
        meta={[
          { label: 'Established', value: '2014' },
          { label: 'Location', value: 'Notting Hill, London' },
        ]}
      />

      <section className="section bg-white">
        <div className="container">
          <div className="split">
            <Reveal className="split__body">
              <p className="eyebrow">Our Story</p>
              <h2 className="h2">Quietly serious about teeth.</h2>
              <div className="prose">
                <p>
                  The studio was founded on a simple frustration: too much dental care is
                  sold before it is understood. A new patient is often shown a treatment
                  plan before anyone has taken a full-hour look at the problem.
                </p>
                <p>
                  We reversed that. Every assessment is unhurried, imaging is taken as part
                  of it rather than sold as an add-on, and you leave with a written plan you
                  are free to take away and think about — including the option of doing
                  nothing at all.
                </p>
                <p>
                  The technology follows the same principle. Intraoral scanning and 3D
                  planning exist here so that you can see what is proposed before it
                  happens, not so that treatment can be sold faster.
                </p>
              </div>
            </Reveal>

            <Reveal className="split__media framed" delay={90}>
              <SmartImage
                image={STUDIO_IMAGES.bright}
                width={1100}
                height={1375}
                sizes="(max-width: 899px) 100vw, 50vw"
                wrapperClassName="media media--zoom ratio-4x5"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section bg-mist">
        <div className="container">
          <div className="stats">
            {STATS.map((stat, index) => (
              <Reveal key={stat.label} className="stat" delay={index * 70}>
                <p className="stat__value">{stat.value}</p>
                <p className="stat__label">{stat.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="section-head section-head--row">
            <div>
              <Reveal as="p" className="eyebrow">
                How We Work
              </Reveal>
              <Reveal as="h2" className="h2" delay={70}>
                Three things we refuse
                <br className="hide-sm" /> to compromise on.
              </Reveal>
            </div>
            <Reveal as="p" className="lead" delay={130}>
              These are not slogans on a wall — they are the reason the studio is set up the
              way it is, from appointment length to the way a plan is presented.
            </Reveal>
          </div>

          <div className="why">
            <div className="why__head">
              <h3 className="h3">The approach</h3>
            </div>
            <div className="why__blocks">
              {APPROACH.map((item, index) => (
                <Reveal key={item.index} className="why__block" delay={index * 80}>
                  <p className="svc-detail__index">{item.index}</p>
                  <h4 className="h4">{item.title}</h4>
                  <p className="text-muted">{item.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-mist">
        <div className="container">
          <div className="section-head section-head--row">
            <div>
              <Reveal as="p" className="eyebrow">
                The Team
              </Reveal>
              <Reveal as="h2" className="h2" delay={70}>
                Clinicians you will
                <br className="hide-sm" /> actually see.
              </Reveal>
            </div>
            <Reveal as="p" className="lead" delay={130}>
              You see the same clinician throughout — not whoever happens to be free on the
              day.
            </Reveal>
          </div>

          <div className="team-grid">
            {TEAM_EXTENDED.map((person, index) => (
              <Reveal key={person.name} className="team-card" delay={(index % 3) * 90}>
                <SmartImage
                  image={person.image}
                  width={800}
                  height={1000}
                  sizes="(max-width: 599px) 100vw, (max-width: 899px) 50vw, 32vw"
                  wrapperClassName="team-card__media media media--zoom"
                />

                <div className="team-card__body">
                  <p className="team-card__role">{person.specialty}</p>
                  <h3 className="team-card__name">{person.name}</h3>
                  <p className="team-card__bio">{person.bio}</p>
                  <ul className="team-card__creds">
                    {person.credentials.map((cred) => (
                      <li key={cred}>{cred}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <p className="demo-note" style={{ marginTop: 'clamp(2rem, 1rem + 2vw, 3rem)' }}>
            {DEMO_NOTE}
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="section-head">
            <Reveal as="p" className="eyebrow">
              Why Aurelia
            </Reveal>
            <Reveal as="h2" className="h2" delay={70}>
              What you can expect from every visit.
            </Reveal>
          </div>

          <div className="spec-list" style={{ maxWidth: '58ch' }}>
            {WHY_AURELIA.map((item) => (
              <Reveal key={item.title} as="div">
                <h3 className="h4">{item.title}</h3>
                <p className="text-muted">{item.text}</p>
              </Reveal>
            ))}
          </div>

          <Reveal style={{ marginTop: 'clamp(2.5rem, 1.5rem + 3vw, 4rem)' }}>
            <Link href="/appointment" className="btn btn--outline">
              Book a Consultation
              <ArrowRight className="btn__arrow" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Come and meet the team."
        text="A first consultation runs a full hour and commits you to nothing. Bring your questions."
        secondaryLabel="See Our Services"
        secondaryHref="/services"
      />
    </>
  );
}
