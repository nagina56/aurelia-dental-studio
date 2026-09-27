import Link from 'next/link';
import { TESTIMONIALS, TESTIMONIAL_NOTE } from '@/lib/site';
import { Reveal } from '@/components/ui/Reveal';
import { SmartImage } from '@/components/ui/SmartImage';
import { ArrowRight, IconQuote } from '@/components/ui/Icons';

export function TestimonialPreview() {
  return (
    <section className="section bg-mist" id="testimonials">
      <div className="container">
        <div className="section-head section-head--row">
          <div>
            <Reveal as="p" className="eyebrow">
              In Their Words
            </Reveal>
            <Reveal as="h2" className="h2" delay={70}>
              What patients say.
            </Reveal>
          </div>
          <Reveal delay={130} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-4)', alignItems: 'flex-start' }}>
            <span className="demo-note">{TESTIMONIAL_NOTE}</span>
            <p className="lead">
              These are written examples created for the demo. They are not verified
              reviews and do not represent real patients.
            </p>
          </Reveal>
        </div>

        <div className="quote-grid">
          {TESTIMONIALS.slice(0, 3).map((item, index) => (
            <Reveal key={item.name} className="quote-card" delay={index * 90}>
              <IconQuote className="quote-card__mark" />
              <blockquote className="quote-card__text">
                <p>{item.quote}</p>
              </blockquote>
              <div className="quote-card__foot">
                <SmartImage
                  image={item.image}
                  width={120}
                  height={120}
                  sizes="44px"
                  wrapperClassName="quote-card__avatar"
                />
                <div>
                  <p className="quote-card__name">{item.name}</p>
                  <p className="quote-card__meta">{item.treatment}</p>
                </div>
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
          <Link href="/testimonials" className="btn btn--outline">
            Read Patient Stories
            <ArrowRight className="btn__arrow" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
