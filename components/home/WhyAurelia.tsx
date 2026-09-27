import Link from 'next/link';
import { WHY_AURELIA } from '@/lib/site';
import { Reveal } from '@/components/ui/Reveal';
import { ArrowRight, IconCompass, IconHands, IconScan, IconSpark } from '@/components/ui/Icons';

const ICONS = {
  compass: IconCompass,
  scan: IconScan,
  hands: IconHands,
  spark: IconSpark,
} as const;

export function WhyAurelia() {
  return (
    <section className="section section--lg why on-dark">
      <div className="container">
        <div className="why__head">
          <Reveal as="h2" className="h2">
            Designed around you.
          </Reveal>
          <Reveal as="p" className="lead" delay={110}>
            The building, the equipment and the appointment length all exist to make one
            thing easier: a decision you can live with.
          </Reveal>
        </div>

        <div className="why__blocks">
          {WHY_AURELIA.map((item, index) => {
            const Icon = ICONS[item.icon as keyof typeof ICONS];
            return (
              <Reveal key={item.title} className="why__block" delay={index * 70}>
                <Icon />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            );
          })}
        </div>

        <Reveal
          delay={200}
          style={{
            marginTop: 'clamp(2rem, 1.5rem + 2vw, 3.25rem)',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Link href="/appointment" className="btn btn--gold">
            Request a Consultation
            <ArrowRight className="btn__arrow" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
