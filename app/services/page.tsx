import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/site/PageHero';
import { CtaBand } from '@/components/site/CtaBand';
import { Reveal } from '@/components/ui/Reveal';
import { SmartImage } from '@/components/ui/SmartImage';
import { IconCheck, ArrowRight } from '@/components/ui/Icons';
import { SERVICES, PAGE_IMAGES, DEMO_NOTE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Cosmetic dentistry, dental implants, clear aligners, preventive care, emergency treatment and full smile design — planned digitally at a private London studio.',
  alternates: { canonical: '/services' },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="Six disciplines, one continuous plan."
        text="Every service below is planned from the same digital records, so nothing gets re-explained or re-imaged when your treatment moves from one stage to the next."
        image={PAGE_IMAGES.services.image}
        imagePriority
        crumbs={[{ label: 'Services' }]}
        meta={[
          { label: 'Disciplines', value: 'Six' },
          { label: 'First consult', value: '60 minutes' },
        ]}
      />

      <section className="section bg-white">
        <div className="container">
          <div className="section-head">
            <Reveal as="p" className="eyebrow">
              In Detail
            </Reveal>
            <Reveal as="h2" className="h2" delay={70}>
              What each treatment involves.
            </Reveal>
          </div>

          {SERVICES.map((service, index) => (
            <article
              key={service.slug}
              id={service.slug}
              className={`svc-detail ${index % 2 === 1 ? 'svc-detail--flip' : ''}`}
            >
              <Reveal className="svc-detail__body">
                <p className="svc-detail__index">{service.index}</p>
                <h3 className="h3">{service.name}</h3>
                <p className="lead">{service.intro}</p>

                <dl className="svc-detail__meta">
                  {service.meta.map((item) => (
                    <div key={item.label}>
                      <dt>{item.label}</dt>
                      <dd>{item.value}</dd>
                    </div>
                  ))}
                </dl>

                <div>
                  <p className="subhead">Treatments</p>
                  <ul className="spec-list">
                    {service.treatments.map((treatment) => (
                      <li key={treatment}>
                        <IconCheck />
                        <span>{treatment}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="subhead">Benefits</p>
                  <ul className="spec-list spec-list--benefit">
                    {service.benefits.map((benefit) => (
                      <li key={benefit}>
                        <IconCheck />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <Link href="/appointment" className="btn">
                    Book This Treatment
                    <ArrowRight className="btn__arrow" />
                  </Link>
                </div>
              </Reveal>

              <Reveal className="svc-detail__media" delay={90}>
                <SmartImage
                  image={service.image}
                  width={1000}
                  height={1250}
                  sizes="(max-width: 899px) 100vw, 50vw"
                  wrapperClassName="media media--zoom ratio-4x5"
                />
              </Reveal>
            </article>
          ))}

          <p className="demo-note" style={{ marginTop: 'var(--sp-6)' }}>
            {DEMO_NOTE}
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
