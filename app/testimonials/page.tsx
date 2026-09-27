import type { Metadata } from 'next';
import { PageHero } from '@/components/site/PageHero';
import { CtaBand } from '@/components/site/CtaBand';
import { Reveal } from '@/components/ui/Reveal';
import { SmartImage } from '@/components/ui/SmartImage';
import { IconQuote } from '@/components/ui/Icons';
import { FEATURED_TESTIMONIAL, PAGE_IMAGES, TESTIMONIALS, TESTIMONIAL_NOTE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Patient Stories',
  description:
    'Fictional patient stories from Aurelia Dental Studio — written examples created for this portfolio demo, covering aligners, implants, emergency repair and preventive care.',
  alternates: { canonical: '/testimonials' },
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="In Their Words"
        title="What patients say."
        text="These are written examples created for the demo. They are not verified reviews and do not represent real patients."
        image={PAGE_IMAGES.testimonials.image}
        imagePriority
        crumbs={[{ label: 'Testimonials' }]}
      />

      <section className="section bg-white">
        <div className="container">
          <Reveal className="quote-feature">
            <div className="quote-feature__media">
              <SmartImage
                image={FEATURED_TESTIMONIAL.image}
                width={900}
                height={1125}
                sizes="(max-width: 899px) 100vw, 40vw"
                wrapperClassName="media media--zoom"
              />
            </div>

            <div className="quote-feature__body">
              <IconQuote className="quote-card__mark" />
              <blockquote className="quote-feature__text">
                <p>{FEATURED_TESTIMONIAL.quote}</p>
              </blockquote>
              <div>
                <p className="quote-card__name">{FEATURED_TESTIMONIAL.name}</p>
                <p className="quote-card__meta">{FEATURED_TESTIMONIAL.treatment}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-mist">
        <div className="container">
          <div className="section-head">
            <Reveal as="p" className="eyebrow">
              More Stories
            </Reveal>
            <Reveal as="h2" className="h2" delay={70}>
              Six visits, six different reasons
              <br className="hide-sm" /> for coming in.
            </Reveal>
            <Reveal delay={130}>
              <span className="demo-note">{TESTIMONIAL_NOTE}</span>
            </Reveal>
          </div>

          <div className="quote-grid">
            {TESTIMONIALS.map((item, index) => (
              <Reveal key={item.name} className="quote-card" delay={(index % 3) * 90}>
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
        </div>
      </section>

      <CtaBand
        title="Start with a conversation."
        text="A first consultation runs a full hour, includes imaging, and commits you to nothing."
        secondaryLabel="Read Our FAQ"
        secondaryHref="/faq"
      />
    </>
  );
}
