import Link from 'next/link';
import Image from 'next/image';
import { clinicInteriorModern, img } from '@/lib/images';
import { Reveal, RevealImage } from '@/components/ui/Reveal';
import { ArrowRight, ArrowDown, IconCheck } from '@/components/ui/Icons';

const FLOAT_POINTS = ['Personalized Care', 'Modern Technology'];

export function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__grid">
          {/* --- Copy ---------------------------------------------------- */}
          <div className="hero__copy">
            <Reveal as="p" className="eyebrow">
              Private Dental Care, Reimagined
            </Reveal>

            <Reveal
              as="h1"
              className="display hero__title"
              from="up"
              delay={70}
            >
              <span className="hero__title-lead">Confidence begins with</span>{' '}
              <em>your smile.</em>
            </Reveal>

            <Reveal as="p" className="hero__text" delay={140}>
              Modern dentistry designed around comfort, precision and the natural beauty
              of your smile.
            </Reveal>

            <Reveal className="hero__actions" delay={210}>
              <Link href="/appointment" className="btn btn--gold">
                Book a Consultation
                <ArrowRight className="btn__arrow" />
              </Link>
              <Link href="/services" className="btn btn--ghost-light">
                Explore Our Services
              </Link>
            </Reveal>
          </div>

          {/* --- Image --------------------------------------------------- */}
          <RevealImage className="hero__figure" delay={120}>
            <div className="hero__frame">
              <div className="media media--zoom">
                <Image
                  src={img(clinicInteriorModern)}
                  alt={clinicInteriorModern.alt}
                  fill
                  sizes="(max-width: 979px) 100vw, 50vw"
                  quality={84}
                  priority
                />
              </div>

              <div className="hero__float">
                <p className="hero__float-title">Inside every visit</p>
                <ul>
                  {FLOAT_POINTS.map((point) => (
                    <li key={point}>
                      <IconCheck />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </RevealImage>
        </div>

        <Reveal className="hero__foot" delay={300}>
          <p>Cosmetic Dentistry · Implants · Clear Aligners · Preventive Care</p>
          <a href="#introduction" className="hero__cue">
            Discover the studio
            <ArrowDown />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
