import Link from 'next/link';
import { APPROACH } from '@/lib/site';
import { carePrecision, clinicInteriorClean } from '@/lib/images';
import { Reveal, RevealImage } from '@/components/ui/Reveal';
import { SmartImage } from '@/components/ui/SmartImage';
import { ArrowRight } from '@/components/ui/Icons';

export function Introduction() {
  return (
    <section className="section bg-mist" id="introduction">
      <div className="container">
        <div className="split split--media-right">
          <RevealImage className="split__media">
            <SmartImage
              image={carePrecision}
              width={900}
              height={1125}
              sizes="(max-width: 899px) 100vw, 46vw"
              wrapperClassName="media ratio-4x5"
            />
          </RevealImage>

          <div className="split__body">
            <Reveal as="p" className="eyebrow">
              Our Approach
            </Reveal>

            <Reveal as="h2" className="h2" delay={70}>
              Thoughtful dentistry. Beautifully delivered.
            </Reveal>

            <Reveal as="p" className="prose" delay={130}>
              Most people avoid the dentist because dentistry has historically been
              hurried, loud and transactional. We built Aurelia around the opposite idea:
              unhurried appointments, plain-language explanations, and a plan you are
              genuinely able to refuse. Nothing is presented that we would not recommend
              for ourselves.
            </Reveal>

            <ul className="feature-list">
              {APPROACH.map((item, index) => (
                <Reveal
                  as="li"
                  key={item.index}
                  className="feature-list__item"
                  delay={index * 80}
                >
                  <span className="feature-list__num" aria-hidden="true">
                    {item.index}
                  </span>
                  <div>
                    <h3 className="feature-list__title">{item.title}</h3>
                    <p className="feature-list__text">{item.text}</p>
                  </div>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={260}>
              <Link href="/about" className="arrow-link">
                More about the studio
                <ArrowRight />
              </Link>
            </Reveal>
          </div>
        </div>

        {/* Secondary editorial image — breaks the section rhythm */}
        <div className="intro-lower">
          <Reveal className="intro-lower__media" from="left">
            <SmartImage
              image={clinicInteriorClean}
              width={1200}
              height={675}
              sizes="(max-width: 899px) 100vw, 58vw"
              wrapperClassName="media ratio-16x9"
            />
          </Reveal>

          <Reveal className="intro-lower__body" delay={110}>
            <p className="stat__value">60 minutes</p>
            <p className="h4" style={{ color: 'var(--c-charcoal)' }}>
              for every first consultation
            </p>
            <p className="prose" style={{ marginTop: 'var(--sp-2)' }}>
              Long enough to examine properly, take digital records, and talk you through
              every option — including the option of doing nothing yet.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
