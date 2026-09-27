import Link from 'next/link';
import { TEAM } from '@/lib/site';
import { Reveal } from '@/components/ui/Reveal';
import { SmartImage } from '@/components/ui/SmartImage';
import { ArrowRight } from '@/components/ui/Icons';

export function TeamPreview() {
  return (
    <section className="section bg-white" id="team">
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
            Six practitioners across cosmetic, implant, orthodontic and periodontal care.
            You see the same clinician throughout — not whoever happens to be free.
          </Reveal>
        </div>

        <div className="team-grid">
          {TEAM.map((person, index) => (
            <Reveal key={person.name} className="team-card" delay={index * 90}>
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

        <Reveal
          delay={120}
          style={{
            marginTop: 'clamp(2.5rem, 1.5rem + 3vw, 4rem)',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Link href="/about" className="btn btn--outline">
            Meet Our Dentists
            <ArrowRight className="btn__arrow" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
