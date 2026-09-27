import Link from 'next/link';
import { FEATURED_SERVICES } from '@/lib/site';
import { Reveal } from '@/components/ui/Reveal';
import { SmartImage } from '@/components/ui/SmartImage';
import { ArrowRight } from '@/components/ui/Icons';

export function FeaturedServices() {
  return (
    <section className="section bg-white" id="services">
      <div className="container">
        <div className="section-head section-head--row">
          <div>
            <Reveal as="p" className="eyebrow">
              What We Do
            </Reveal>
            <Reveal as="h2" className="h2" delay={70}>
              Six disciplines, one
              <br className="hide-sm" /> continuous plan.
            </Reveal>
          </div>
          <Reveal as="p" className="lead" delay={130}>
            Every service below is planned from the same digital records, so nothing gets
            re-explained or re-imaged when your treatment moves from one stage to the next.
          </Reveal>
        </div>

        <div className="svc-grid">
          {FEATURED_SERVICES.map((service, index) => (
            <Reveal
              key={service.name}
              className={`svc-card ${index % 3 === 0 ? 'svc-card--wide' : 'svc-card--narrow'}`}
              delay={(index % 3) * 90}
            >
              <Link href={service.href} className="svc-card__link" aria-label={service.name}>
                <SmartImage
                  image={service.image}
                  width={800}
                  height={1000}
                  sizes="(max-width: 599px) 100vw, (max-width: 899px) 50vw, 34vw"
                  wrapperClassName="media media--zoom"
                />
              </Link>

              <div className="svc-card__body">
                <h3 className="svc-card__name">{service.name}</h3>
                <p className="svc-card__text">{service.text}</p>
                <Link href={service.href} className="arrow-link">
                  Explore
                  <ArrowRight />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        <div
          style={{
            marginTop: 'clamp(2.5rem, 1.5rem + 3.5vw, 4.5rem)',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Reveal>
            <Link href="/services" className="btn">
              Explore All Services
              <ArrowRight className="btn__arrow" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
